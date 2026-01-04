import { headers } from 'next/headers';
import { supabase } from './supabase';

const RATE_LIMIT_WINDOW_HOURS = 1;
const MAX_REQUESTS_PER_WINDOW = 3;

export interface RateLimitResult {
  allowed: boolean;
  remainingRequests: number;
  resetTime: Date | null;
  retryAfterMinutes: number | null;
}

/**
 * Extracts client IP from Next.js request headers
 * Checks multiple header sources in priority order
 */
export async function getClientIP(): Promise<string | null> {
  const headersList = await headers();

  const ipSources = [
    headersList.get('x-real-ip'),
    headersList.get('x-forwarded-for'),
    headersList.get('cf-connecting-ip'),
    headersList.get('x-vercel-forwarded-for'),
    headersList.get('forwarded'),
  ];

  for (const ip of ipSources) {
    if (ip) {
      let cleanedIP = ip.split(',')[0].trim();

      // Handle IPv4-mapped IPv6 addresses (::ffff:127.0.0.1)
      if (cleanedIP.startsWith('::ffff:')) {
        cleanedIP = cleanedIP.substring(7); // Remove ::ffff: prefix
      }

      if (isValidIP(cleanedIP)) {
        return cleanedIP;
      }
    }
  }

  return null;
}

function isValidIP(ip: string): boolean {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Regex = /^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$/;

  // Also accept simplified IPv6 formats
  if (ip.includes(':')) {
    return true; // Accept any IPv6-like format
  }

  return ipv4Regex.test(ip);
}

/**
 * Checks if an IP address has exceeded rate limit
 * Returns information about remaining requests and retry time
 */
export async function checkRateLimit(ip: string): Promise<RateLimitResult> {
  const now = new Date();
  const windowStart = new Date(now.getTime() - RATE_LIMIT_WINDOW_HOURS * 60 * 60 * 1000);

  try {
    const { data, error } = await supabase
      .from('rate_limit_tracking')
      .select('*')
      .eq('ip_address', ip)
      .gte('first_attempt_at', windowStart.toISOString())
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Rate limit check error:', error);
      // Fail open: allow submission if check fails
      return {
        allowed: true,
        remainingRequests: MAX_REQUESTS_PER_WINDOW,
        resetTime: null,
        retryAfterMinutes: null,
      };
    }

    if (!data) {
      return {
        allowed: true,
        remainingRequests: MAX_REQUESTS_PER_WINDOW - 1,
        resetTime: new Date(now.getTime() + RATE_LIMIT_WINDOW_HOURS * 60 * 60 * 1000),
        retryAfterMinutes: null,
      };
    }

    if (data.attempt_count >= MAX_REQUESTS_PER_WINDOW) {
      const resetTime = new Date(
        new Date(data.first_attempt_at).getTime() + RATE_LIMIT_WINDOW_HOURS * 60 * 60 * 1000
      );
      const retryAfterMs = resetTime.getTime() - now.getTime();
      const retryAfterMinutes = Math.ceil(retryAfterMs / (60 * 1000));

      return {
        allowed: false,
        remainingRequests: 0,
        resetTime,
        retryAfterMinutes,
      };
    }

    return {
      allowed: true,
      remainingRequests: MAX_REQUESTS_PER_WINDOW - data.attempt_count - 1,
      resetTime: new Date(
        new Date(data.first_attempt_at).getTime() + RATE_LIMIT_WINDOW_HOURS * 60 * 60 * 1000
      ),
      retryAfterMinutes: null,
    };
  } catch (err) {
    console.error('Unexpected rate limit error:', err);
    // Fail open
    return {
      allowed: true,
      remainingRequests: MAX_REQUESTS_PER_WINDOW,
      resetTime: null,
      retryAfterMinutes: null,
    };
  }
}

/**
 * Records a submission attempt for an IP address
 * Should be called AFTER successful form submission
 */
export async function recordAttempt(ip: string): Promise<void> {
  const now = new Date();
  const windowStart = new Date(now.getTime() - RATE_LIMIT_WINDOW_HOURS * 60 * 60 * 1000);

  const { data: existing } = await supabase
    .from('rate_limit_tracking')
    .select('*')
    .eq('ip_address', ip)
    .gte('first_attempt_at', windowStart.toISOString())
    .single();

  if (existing) {
    await supabase
      .from('rate_limit_tracking')
      .update({
        attempt_count: existing.attempt_count + 1,
        last_attempt_at: now.toISOString(),
      })
      .eq('id', existing.id);
  } else {
    await supabase
      .from('rate_limit_tracking')
      .insert({
        ip_address: ip,
        attempt_count: 1,
        first_attempt_at: now.toISOString(),
        last_attempt_at: now.toISOString(),
      });
  }

  // Periodic cleanup (every 100 submissions)
  await cleanupExpiredRecords();
}

/**
 * Removes expired rate limit records (older than window)
 * Helps keep database table size manageable
 */
let cleanupCounter = 0;
export async function cleanupExpiredRecords(): Promise<void> {
  cleanupCounter++;
  if (cleanupCounter % 100 !== 0) return;

  const cutoff = new Date(Date.now() - RATE_LIMIT_WINDOW_HOURS * 60 * 60 * 1000);

  try {
    await supabase
      .from('rate_limit_tracking')
      .delete()
      .lt('first_attempt_at', cutoff.toISOString());
  } catch (err) {
    console.error('Cleanup error:', err);
  }
}

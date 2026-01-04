'use server';

import { supabase } from '@/lib/supabase';
import { getClientIP, checkRateLimit, recordAttempt } from '@/lib/rate-limit';

export async function submitContactForm(formData: FormData) {
  // Extract client IP address
  const clientIP = await getClientIP();
  console.log('🔍 Detected IP:', clientIP);

  if (!clientIP) {
    console.warn('⚠️ Could not determine client IP address');
    // Proceed without rate limiting (lenient approach)
  }

  // Check rate limit
  if (clientIP) {
    console.log('✅ Checking rate limit for IP:', clientIP);
    const rateLimitResult = await checkRateLimit(clientIP);
    console.log('📊 Rate limit result:', rateLimitResult);

    if (!rateLimitResult.allowed) {
      console.log('🚫 Rate limit exceeded!');
      const retryMessage = rateLimitResult.retryAfterMinutes === 1
        ? 'You can submit again in 1 minute'
        : `You can submit again in ${rateLimitResult.retryAfterMinutes} minutes`;

      return {
        success: false,
        error: `Too many submissions. ${retryMessage}.`,
        rateLimited: true,
      };
    }
  }

  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Validate the data
  if (!firstName || !lastName || !email) {
    return { success: false, error: 'Please fill in all required fields' };
  }

  // Insert into Supabase
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
        message: message,
        submitted_at: new Date().toISOString(),
      },
    ])
    .select();

  if (error) {
    console.error('Error submitting form:', error);
    return { success: false, error: `Failed to submit: ${error.message}` };
  }

  // Record attempt after successful submission
  if (clientIP) {
    try {
      console.log('📝 Recording attempt for IP:', clientIP);
      await recordAttempt(clientIP);
      console.log('✅ Attempt recorded successfully');
    } catch (err) {
      console.error('❌ Failed to record rate limit attempt:', err);
      // Non-blocking: submission succeeded, tracking failed
    }
  }

  return { success: true };
}

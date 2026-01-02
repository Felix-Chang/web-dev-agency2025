"use client";

import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import { useDeviceType } from '@/lib/hooks/useDeviceType';

const ContactUsPageMobile = dynamic(() => import('./page.mobile'), {
  ssr: true,
});

const ContactUsPageDesktop = dynamic(() => import('./page.desktop'), {
  ssr: false,
});

export default function ContactUsPage() {
  const deviceType = useDeviceType();

  // SSR or mobile - show mobile version
  if (deviceType === null || deviceType === 'mobile') {
    return <ContactUsPageMobile />;
  }

  // Desktop
  return <ContactUsPageDesktop />;
}

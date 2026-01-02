"use client";

import dynamic from 'next/dynamic';
import { useDeviceType } from '@/lib/hooks/useDeviceType';

const FooterMobile = dynamic(() => import('./Footer.mobile'), {
  ssr: true,
});

const FooterDesktop = dynamic(() => import('./Footer.desktop'), {
  ssr: false,
});

export default function Footer() {
  const deviceType = useDeviceType();

  // SSR or mobile - show mobile version
  if (deviceType === null || deviceType === 'mobile') {
    return <FooterMobile />;
  }

  // Desktop
  return <FooterDesktop />;
}

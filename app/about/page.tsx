"use client";

import dynamic from 'next/dynamic';
import { useDeviceType } from '@/lib/hooks/useDeviceType';

const AboutMobile = dynamic(() => import('./page.mobile'), {
  ssr: true,
});

const AboutDesktop = dynamic(() => import('./page.desktop'), {
  ssr: false,
});

export default function About() {
  const deviceType = useDeviceType();

  // SSR or mobile - show mobile version
  if (deviceType === null || deviceType === 'mobile') {
    return <AboutMobile />;
  }

  // Desktop
  return <AboutDesktop />;
}

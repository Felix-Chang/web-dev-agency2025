"use client";

import dynamic from 'next/dynamic';
import { useDeviceType } from '@/lib/hooks/useDeviceType';

const ServicesPageMobile = dynamic(() => import('./page.mobile'), {
  ssr: true,
});

const ServicesPageDesktop = dynamic(() => import('./page.desktop'), {
  ssr: false,
});

export default function ServicesPage() {
  const deviceType = useDeviceType();

  // SSR or mobile - show mobile version
  if (deviceType === null || deviceType === 'mobile') {
    return <ServicesPageMobile />;
  }

  // Desktop
  return <ServicesPageDesktop />;
}

"use client";

import dynamic from 'next/dynamic';
import { useDeviceType } from '@/lib/hooks/useDeviceType';

const HomeMobile = dynamic(() => import('./page.mobile'), {
  ssr: true,
});

const HomeDesktop = dynamic(() => import('./page.desktop'), {
  ssr: false,
});

export default function Home() {
  const deviceType = useDeviceType();

  // SSR or mobile - show mobile version
  if (deviceType === null || deviceType === 'mobile') {
    return <HomeMobile />;
  }

  // Desktop
  return <HomeDesktop />;
}

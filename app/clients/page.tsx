"use client";

import dynamic from 'next/dynamic';
import { useDeviceType } from '@/lib/hooks/useDeviceType';

const ClientsPageMobile = dynamic(() => import('./page.mobile'), {
  ssr: true,
});

const ClientsPageDesktop = dynamic(() => import('./page.desktop'), {
  ssr: false,
});

export default function ClientsPage() {
  const deviceType = useDeviceType();

  // SSR or mobile - show mobile version
  if (deviceType === null || deviceType === 'mobile') {
    return <ClientsPageMobile />;
  }

  // Desktop
  return <ClientsPageDesktop />;
}

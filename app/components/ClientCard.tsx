"use client";

import dynamic from 'next/dynamic';
import { useDeviceType } from '@/lib/hooks/useDeviceType';

const ClientCardMobile = dynamic(() => import('./ClientCard.mobile'), {
  ssr: true,
});

const ClientCardDesktop = dynamic(() => import('./ClientCard.desktop'), {
  ssr: false,
});

interface ClientCardProps {
  name: string;
  description: string;
  image?: string;
  URL?: string;
}

export default function ClientCard(props: ClientCardProps) {
  const deviceType = useDeviceType();

  // SSR or mobile - show mobile version
  if (deviceType === null || deviceType === 'mobile') {
    return <ClientCardMobile {...props} />;
  }

  // Desktop
  return <ClientCardDesktop {...props} />;
}

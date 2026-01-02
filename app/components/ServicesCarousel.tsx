"use client";

import dynamic from 'next/dynamic';
import { useDeviceType } from '@/lib/hooks/useDeviceType';

const ServicesCarouselMobile = dynamic(() => import('./ServicesCarousel.mobile'), {
  ssr: true,
});

const ServicesCarouselDesktop = dynamic(() => import('./ServicesCarousel.desktop'), {
  ssr: false,
});

export default function ServicesCarousel() {
  const deviceType = useDeviceType();

  // SSR or mobile - show mobile version
  if (deviceType === null || deviceType === 'mobile') {
    return <ServicesCarouselMobile />;
  }

  // Desktop
  return <ServicesCarouselDesktop />;
}

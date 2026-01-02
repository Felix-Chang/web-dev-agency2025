"use client";

import { useEffect, useState } from "react";

export type DeviceType = "mobile" | "desktop" | null;

/**
 * Hook to detect device type based on screen width
 * Breakpoint: 640px (>= 640px = desktop, < 640px = mobile)
 * Returns null during SSR for safe hydration
 */
export function useDeviceType(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>(null);

  useEffect(() => {
    // Create media query for desktop breakpoint (640px)
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    // Handler to update device type
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setDeviceType(e.matches ? "desktop" : "mobile");
    };

    // Set initial value
    handleChange(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return deviceType;
}

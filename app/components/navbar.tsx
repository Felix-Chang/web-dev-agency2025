"use client";

import dynamic from "next/dynamic";
import { useDeviceType } from "@/lib/hooks/useDeviceType";
import { useDarkMode } from "@/lib/hooks/useDarkMode";
import { useState } from "react";

const NavbarMobile = dynamic(() => import("./Navbar.mobile"), {
  ssr: true,
});

const NavbarDesktop = dynamic(() => import("./Navbar.desktop"), {
  ssr: false,
});

export default function Navbar() {
  const deviceType = useDeviceType();
  const isAfter6pm = useDarkMode();
  // SSR or mobile - show mobile version
  if (deviceType === null || deviceType === "mobile") {
    return <NavbarMobile />;
  }

  // Desktop
  return <NavbarDesktop darkMode={isAfter6pm} />;
}

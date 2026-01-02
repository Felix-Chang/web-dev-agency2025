"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavbarDesktop() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 40) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#F8F8FF]/60 dark:bg-[1B1B1B]/60 backdrop-blur-md transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="px-16 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="text-base font-bold">
            Felix Web Studio
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/services" className="font-bold hover:underline">
              Services
            </Link>
            <Link href="/clients" className="font-bold hover:underline">
              Clients
            </Link>
            <Link href="/about" className="font-bold hover:underline">
              About
            </Link>
            <Link
              href="/contact-us"
              className="font-bold rounded-full bg-foreground px-5 py-1.5 text-background transition-colors hover:bg-[#383838] hover:underline dark:hover:bg-[#ccc]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

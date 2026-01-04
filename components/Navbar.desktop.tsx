"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavbarDesktopProps = {
  darkMode?: boolean;
};

export default function NavbarDesktop({ darkMode }: NavbarDesktopProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  console.log(darkMode);

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
      className={`sticky top-0 z-50 ${
        darkMode ? "bg-foreground/60" : "bg-background/60"
      }  backdrop-blur-md transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="px-16 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className={`text-base font-bold ${
              darkMode ? "text-background" : "text-foreground"
            }`}
          >
            Felix Web Studio
          </Link>
          {/* Desktop Navigation */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/services"
              className={`font-bold hover:underline ${
                darkMode ? "text-background" : "text-foreground"
              }`}
            >
              Services
            </Link>
            <Link
              href="/clients"
              className={`font-bold hover:underline ${
                darkMode ? "text-background" : "text-foreground"
              }`}
            >
              Clients
            </Link>
            <Link
              href="/about"
              className={`font-bold hover:underline ${
                darkMode ? "text-background" : "text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className={`
                font-bold rounded-full px-5 py-1.5 transition-colors hover:underline
                ${
                  darkMode
                    ? "bg-background text-foreground hover:bg-[#cfcfd1]"
                    : "bg-foreground text-background hover:bg-[#383838]"
                }
              `}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

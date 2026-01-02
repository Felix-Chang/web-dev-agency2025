"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 40) {
        // Scrolling down and past threshold
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
      <nav className="px-4 lg:px-16 py-3 lg:py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="text-sm lg:text-base font-bold">
            Felix Web Studio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 text-sm">
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

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-full bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64 mt-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pb-4">
            <Link
              href="/services"
              className="font-bold hover:underline text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/clients"
              className="font-bold hover:underline text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Clients
            </Link>
            <Link
              href="/about"
              className="font-bold hover:underline text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className="font-bold rounded-full bg-foreground px-5 py-2 text-sm text-background transition-colors hover:bg-[#383838] hover:underline dark:hover:bg-[#ccc] text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

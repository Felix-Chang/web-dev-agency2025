// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-lg font-semibold">
          Felix Web Studio
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm">
          <Link href="/clients" className="hover:underline">
            Clients
          </Link>
          <Link href="/contact-us" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}

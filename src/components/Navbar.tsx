"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-[40px] left-0 right-0 z-50 bg-malu-black/95 backdrop-blur-md border-b border-malu-grey/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-malu-gold font-[var(--font-barlow)] text-3xl sm:text-4xl font-black tracking-tight leading-none">
              › MALU
            </span>
            <span className="hidden sm:block text-malu-grey font-[var(--font-barlow)] text-xs font-medium uppercase tracking-[0.2em] mt-1">
              Investment CC
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-malu-white/70 hover:text-malu-gold transition-colors font-[var(--font-barlow)] text-sm uppercase tracking-[0.15em] font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/264811277308"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-malu-gold text-malu-black font-[var(--font-barlow)] text-sm uppercase tracking-[0.1em] font-bold px-5 py-2.5 hover:bg-malu-gold/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Ride
            </a>
          </div>

          {/* Mobile CTA + Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="https://wa.me/264811277308"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-malu-gold text-malu-black font-[var(--font-barlow)] text-xs uppercase tracking-[0.1em] font-bold px-3 py-2"
            >
              Book
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-malu-white p-2"
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-malu-black border-t border-malu-grey/30">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-malu-white/70 hover:text-malu-gold transition-colors font-[var(--font-barlow)] text-lg uppercase tracking-[0.15em] font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/264811277308"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-malu-gold text-malu-black font-[var(--font-barlow)] text-base uppercase tracking-[0.1em] font-bold px-5 py-3 text-center mt-4"
            >
              Book a Ride
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

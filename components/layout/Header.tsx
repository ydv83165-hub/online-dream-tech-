"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-200 safe-top shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          <Link href="/" className="flex items-center shrink-0 min-w-0 gap-3">
            <img
              src="/Header%20onlinedreamtech.png"
              alt="Online Dream Tech logo"
              className="h-8 w-8 object-contain sm:h-10 sm:w-10"
            />
            <div className="leading-none">
              <div className="text-base font-semibold tracking-tight text-slate-900">{BRAND.name}</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium tracking-wide py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Button
              href="/contact"
              size="sm"
              className="hidden md:inline-flex shadow-[0_12px_24px_rgba(50,3,3,0.18)]"
              style={{ backgroundColor: "#320303", color: "#ffffff" }}
            >
              Let&apos;s Connect
            </Button>

            <button
              type="button"
              className="md:hidden min-h-11 min-w-11 flex items-center justify-center text-slate-700 hover:text-slate-900 cursor-pointer rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-slate-200 bg-white px-3 py-3 space-y-1 max-h-[calc(100dvh-3.5rem)] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block min-h-12 flex items-center px-4 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors text-base"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

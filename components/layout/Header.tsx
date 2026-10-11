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
    <header className="fixed inset-x-0 top-[calc(42px+env(safe-area-inset-top))] z-30 border-b border-slate-200 bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1360px]">
        <div className="relative grid h-14 grid-cols-[1fr_auto] items-center sm:h-16 md:grid-cols-[1fr_auto_1fr] lg:h-[85px]">
          <Link href="/" className="flex items-center shrink-0 min-w-0 gap-3">
            <img
              src="/Header%20onlinedreamtech.png"
              alt="Online Dream Tech logo"
              className="h-8 w-8 object-contain sm:h-10 sm:w-10"
            />
            <div className="min-w-0 leading-none">
              <div className="text-base font-semibold tracking-tight text-slate-900">{BRAND.name}</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-4 md:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:gap-6">
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

          <div className="flex shrink-0 items-center justify-self-end gap-2 sm:gap-3">
            <Button
              href="/contact"
              size="sm"
              className="!hidden md:!inline-flex shadow-[0_12px_24px_rgba(50,3,3,0.18)]"
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
        <nav className="md:hidden border-t border-slate-200 bg-white px-3 py-3 space-y-1 max-h-[calc(100dvh-6rem)] overflow-y-auto">
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

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
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1440px]">
        <div className="relative flex h-14 items-center justify-between sm:h-16 xl:h-[104px]">
          <Link href="/" className="flex w-fit min-w-0 shrink-0 items-center gap-2.5 sm:gap-3">
            <img
              src="/Header%20onlinedreamtech.png"
              alt="Online Dream Tech logo"
              className="h-10 w-10 object-contain sm:h-12 sm:w-12"
            />
            <div className="min-w-0 leading-none">
              <div className="whitespace-nowrap text-base font-bold tracking-tight text-[#021635] sm:text-lg">{BRAND.name}</div>
            </div>
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 xl:flex 2xl:gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap py-2 text-lg font-bold tracking-wide text-[#021635] transition-colors duration-200 hover:text-[#ff6d4d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#021635]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <Button href="/contact" size="md" className="header-connect whitespace-nowrap !border-[#021635] !bg-[#021635] !px-5 !font-bold !text-white !shadow-[0_10px_24px_rgba(2,22,53,0.18)] hover:!bg-[#0a2854] sm:!px-6">
              Let&apos;s Connect
            </Button>

            <button
              type="button"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-[#021635] transition-colors hover:bg-slate-100 xl:hidden"
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
        <nav className="max-h-[calc(100dvh-6rem)] space-y-1 overflow-y-auto border-t border-slate-200 bg-white px-3 py-3 xl:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex min-h-12 items-center rounded-lg px-4 text-base font-semibold text-[#021635] transition-colors hover:bg-slate-100"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-[#021635] px-5 text-sm font-bold text-white transition-colors hover:bg-[#0a2854]"
            onClick={() => setMobileOpen(false)}
          >
            Let&apos;s Connect
          </Link>
        </nav>
      )}
    </header>
  );
}

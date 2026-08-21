import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { PremiumSectionHeading } from "@/components/ui/PremiumSectionHeading";
import { Button } from "@/components/ui/Button";
import { StoryLottie } from "@/components/home/StoryLottie";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${BRAND.name} for guidance, growth support, and collaboration opportunities.`,
};

const CONTACT_ITEMS = [
  {
    label: "WhatsApp",
    value: BRAND.whatsappDisplay,
    href: `https://wa.me/${BRAND.whatsapp}`,
  },
  {
    label: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    label: "Call",
    value: BRAND.whatsappDisplay,
    href: `tel:+91 xxxxxxxxxx`,
  },
] as const;

const CONTACT_INFO = [
  {
    title: "Email us",
    description: "Drop us a line, we reply within 24 hours.",
    detail: "onlinedreamtech@gmail.com",
    href: "mailto:onlinedreamtech@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
        <path d="m5.5 7 6.5 5 6.5-5" />
      </svg>
    ),
  },
  {
    title: "Call us",
    description: "Mon – Sat, 10:00 AM – 7:00 PM IST",
    detail: "+91 XXXXXXXXXX",
    href: "tel:+91 xxxxxxxxxxx",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M6.6 4.3h2.4l1.4 4.9-1.8 1.8c1.2 2.6 3.2 4.6 5.8 5.8l1.8-1.8 4.9 1.4v2.4c0 .9-.7 1.6-1.6 1.6A14.9 14.9 0 0 1 4.4 6.1c0-.9.7-1.6 1.6-1.6Z" />
      </svg>
    ),
  },
  {
    title: "Visit us",
    description: "Delhi NCR, India",
    detail: "Get directions",
    href: "https://maps.google.com/?q=Delhi+NCR+India",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(89,208,255,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(29,78,216,0.14),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-24">
          <div className="text-center lg:text-left">
            <nav aria-label="Breadcrumb" className="flex justify-center lg:justify-start">
              <ol className="flex items-center gap-2 text-sm font-medium tracking-wide">
                <li>
                  <Link href="/" className="text-cyan-300 transition-colors hover:text-cyan-200">
                    Home
                  </Link>
                </li>
                <li className="text-sky-200/80">/</li>
                <li className="text-sky-100/80">Contact</li>
              </ol>
            </nav>

            <div className="mx-auto mt-8 max-w-4xl lg:mx-0">
              <h1 className="text-[32px] font-black leading-[1.08] tracking-[-0.05em] text-white sm:text-[42px] lg:text-[58px]">
                Let&apos;s start your
                <span className="mt-2 block bg-gradient-to-r from-[#ed526c] via-[#f06f82] to-[#f08e9d] bg-clip-text text-transparent">
                  digital transformation
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-[600px] text-[16px] leading-7 text-sky-100/80 sm:text-[17px] sm:leading-8 lg:mx-0">
                Tell us about your project and our team will get back to you with a tailored plan – no fluff, just clear next steps.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[360px]">
              <StoryLottie source="/lotie/Tech%20support%20and%20customer%20contact%20page.json" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071426] py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {CONTACT_INFO.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-[16px] border border-sky-200/15 bg-white/5 p-6 text-left shadow-[0_16px_28px_rgba(8,15,30,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_18px_32px_rgba(45,212,191,0.12)] sm:p-[38px_36px]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d2c38] text-[#ed526c] ring-1 ring-inset ring-white/10">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-sky-100/70">{item.description}</p>

                <div className="mt-6 break-words text-base font-medium text-[#ed526c] transition-colors group-hover:text-[#d93d59]">
                  {item.detail}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PremiumSectionHeading
            eyebrow="Connect"
            title="Let’s talk"
            tagline="Tell us what you want to build, improve, or grow next."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_18px_36px_rgba(15,23,42,0.05)]">
              <h2 className="font-display text-3xl text-slate-900">We&apos;re here to help</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Whether you&apos;re looking for guidance, a clear next step, or support with your goals, we&apos;d love to hear from you.
              </p>

              <div className="mt-7 space-y-3">
                {CONTACT_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex flex-col items-start gap-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 transition-colors hover:border-slate-300 hover:bg-slate-100 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  >
                    <span className="text-sm font-medium text-slate-600">{item.label}</span>
                    <span className="text-sm font-semibold text-slate-900">{item.value}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-900 p-6 sm:p-8 text-white shadow-[0_24px_45px_rgba(15,23,42,0.14)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">Quick start</p>
              <h3 className="mt-4 font-display text-3xl">Start with clarity.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Share your goals, concern, or project idea and we&apos;ll guide you toward the right next move.
              </p>

              <div className="mt-7 space-y-3">
                <Button href={`https://wa.me/${BRAND.whatsapp}`} variant="whatsapp" size="lg" className="w-full justify-center">
                  Chat on WhatsApp
                </Button>
                <Button href={`mailto:${BRAND.email}`} variant="secondary" size="lg" className="w-full justify-center bg-white/10 text-white border-white/15 hover:bg-white/15">
                  Email us
                </Button>
              </div>

              <p className="mt-6 text-xs text-slate-400">
                Prefer a quick call? Reach us at <Link href="tel:+91xxxxxxxxxx" className="text-white underline underline-offset-2">+91-8796429741</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#071426] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[28px] border border-sky-100/15 bg-[#0a1b2e] shadow-[0_18px_45px_rgba(7,20,38,0.28)]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="relative flex min-h-[220px] items-center justify-center px-6 py-10 text-center">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0e2d3a] text-[#ed526c] ring-1 ring-inset ring-cyan-200/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
                    <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">Online Dream Tech</h3>
                  <p className="mt-2 text-base text-sky-200/80 sm:text-lg">Delhi NCR, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f2] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[16px] font-medium uppercase tracking-[0.08em] text-[#ed526c] sm:text-[18px]">
            Let&apos;s build momentum
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-[44px] font-normal leading-[1.05] tracking-[-0.04em] text-[#0a1b2e] sm:text-[62px] lg:text-[78px]">
            Ready to grow with Online Dream tech
            
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-[18px] leading-8 text-[#465468]">
            A clear plan, smarter decisions, and support that helps you move with confidence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#071426] px-8 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(7,20,38,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#071426]/25 bg-transparent px-8 py-4 text-base font-semibold text-[#071426] transition-colors duration-200 hover:bg-white"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

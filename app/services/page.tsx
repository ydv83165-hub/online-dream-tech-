"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ServiceVisualType =
  | "website"
  | "software"
  | "app"
  | "ecommerce"
  | "news"
  | "marketing";

type ServiceItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  pills: string[];
  cta: string;
  href: string;
  visual: ServiceVisualType;
  visualFirst: boolean;
  imagePath: string;
};

const NAV_ITEMS = [
  { label: "Website Development", id: "website-development" },
  { label: "Software Development", id: "software-development" },
  { label: "App Development", id: "app-development" },
  { label: "E-Commerce", id: "e-commerce" },
  { label: "News Portal", id: "news-portal" },
  { label: "Digital Marketing", id: "digital-marketing" },
] as const;

const SERVICES: ServiceItem[] = [
  {
    id: "website-development",
    label: "01 / Website Development",
    title: "Custom websites that reflect your brand's essence",
    description:
      "Transform your digital presence with our website development services. We design and develop custom websites that reflect your brand’s essence. Our expert team ensures responsive, user-friendly, and visually engaging websites — from concept to launch.",
    pills: ["Responsive Design", "CMS Integration", "SEO-Ready Structure", "Performance Optimised"],
    cta: "Discuss your website →",
    href: "/contact",
    visual: "website",
    visualFirst: true,    imagePath: "/1 Website Development.png",  },
  {
    id: "software-development",
    label: "02 / Software Development",
    title: "Dynamic, high-performance software solutions",
    description:
      "Unlock powerful software solutions with our expert development services. We build scalable, secure and high-performance software designed around your business needs, workflows and long-term growth.",
    pills: ["Custom Builds", "Agile Delivery", "API Integration", "Scalable Architecture"],
    cta: "Discuss your software →",
    href: "/contact",
    visual: "software",
    visualFirst: false,
    imagePath: "/2 Software Development.png",
  },
  {
    id: "app-development",
    label: "03 / App Development",
    title: "Mobile experiences built for modern users",
    description:
      "Create powerful mobile experiences with intuitive, high-performance applications. From concept and UI/UX to development and deployment, we build apps that are reliable, scalable and easy to use.",
    pills: ["Android Apps", "iOS Development", "UI/UX Design", "API Integration"],
    cta: "Discuss your app →",
    href: "/contact",
    visual: "app",
    visualFirst: true,
    imagePath: "/3 App Development.png",
  },
  {
    id: "e-commerce",
    label: "04 / E-Commerce",
    title: "E-commerce experiences that drive growth",
    description:
      "Build a powerful online store designed to attract customers and increase conversions. We create fast, responsive and scalable e-commerce experiences with seamless product, payment and order management.",
    pills: ["WooCommerce", "Shopify", "Payment Integration", "Conversion Optimised"],
    cta: "Build your store →",
    href: "/contact",
    visual: "ecommerce",
    visualFirst: false,
    imagePath: "/4E-Commerce Development.webp",
  },
  {
    id: "news-portal",
    label: "05 / News Portal",
    title: "Fast, scalable platforms for digital publishing",
    description:
      "Launch a professional news and content platform built for speed, discoverability and continuous publishing. Our news portal solutions are designed to handle large amounts of content while delivering an engaging reader experience.",
    pills: ["Fast Publishing", "SEO Optimised", "Category Management", "Scalable Architecture"],
    cta: "Build your portal →",
    href: "/contact",
    visual: "news",
    visualFirst: true,
    imagePath: "/5  News Portal Development.webp",
  },
  {
    id: "digital-marketing",
    label: "06 / Digital Marketing",
    title: "Digital strategies that turn attention into growth",
    description:
      "Grow your online presence with data-driven digital marketing strategies. From SEO and social media to paid campaigns and content marketing, we help businesses reach the right audience and generate measurable results.",
    pills: ["SEO", "Social Media Marketing", "Google Ads", "Performance Marketing"],
    cta: "Grow your business →",
    href: "/contact",
    visual: "marketing",
    visualFirst: false,
    imagePath: "/6 Digital Marketing.webp",
  },
];

function ServiceOverviewCard({
  label,
  title,
  description,
  pills,
  cta,
  href,
  lightTheme = false,
}: {
  label: string;
  title: string;
  description: string;
  pills: string[];
  cta: string;
  href: string;
  lightTheme?: boolean;
}) {
  return (
    <div className="max-w-[560px]">
      <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${lightTheme ? "text-[#f07889]" : "text-[#f07889]"}`}>
        {label}
      </p>
      <h2
        className={`mt-5 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[2.8rem] ${
          lightTheme ? "text-slate-900" : "text-white"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-6 text-base leading-8 ${lightTheme ? "text-slate-700" : "text-slate-300"}`}>
        {description}
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        {pills.map((pill) => (
          <span
            key={pill}
            className={`inline-flex items-center rounded-full border px-3.5 py-2 text-sm font-medium ${
              lightTheme
                ? "border-slate-200 bg-white text-slate-700"
                : "border-slate-700/90 bg-slate-900/50 text-slate-200"
            }`}
          >
            {pill}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href={href}
          className={`inline-flex items-center gap-2 rounded-full bg-[#f07889] px-6 py-3 text-sm font-semibold text-[#071426] shadow-[0_14px_28px_rgba(240,120,137,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(240,120,137,0.4)] ${
            lightTheme ? "" : ""
          }`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}

function ServiceVisual({ variant }: { variant: ServiceVisualType }) {
  const baseCard =
    "relative h-[360px] w-full overflow-hidden rounded-[30px] border border-slate-700/80 bg-[radial-gradient(circle_at_top,_rgba(18,201,201,0.18),_transparent_38%),linear-gradient(180deg,#0d1d2d_0%,#091827_100%)] shadow-[0_28px_80px_rgba(6,12,20,0.62)] sm:h-[420px]";

  switch (variant) {
    case "website":
      return (
        <div className={baseCard}>
          <div className="absolute inset-x-12 top-8 h-24 rounded-full bg-[#f07889]/15 blur-3xl" />
          <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#44d9d9]/40" />
          <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#44d9d9]/25" />
          <div className="absolute left-1/2 top-1/2 h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f07889]/20 blur-xl" />
          <div className="absolute left-1/2 top-[62%] h-[190px] w-[72%] -translate-x-1/2 rounded-[28px] border border-slate-700/80 bg-slate-950/70 p-4 shadow-[0_18px_30px_rgba(15,23,42,0.42)]">
            <div className="grid h-full grid-cols-5 gap-3">
              <div className="col-span-2 rounded-2xl border border-slate-700 bg-slate-900/80" />
              <div className="col-span-3 rounded-2xl border border-slate-700 bg-slate-900/80 p-3">
                <div className="mb-2 h-2.5 w-2/3 rounded-full bg-[#f07889]/80" />
                <div className="space-y-2">
                  <div className="h-2.5 w-full rounded-full bg-slate-700" />
                  <div className="h-2.5 w-4/5 rounded-full bg-slate-700" />
                  <div className="h-2.5 w-3/5 rounded-full bg-slate-700" />
                </div>
              </div>
              <div className="col-span-5 mt-1 flex gap-2">
                <div className="h-12 flex-1 rounded-2xl border border-slate-700 bg-slate-900/80" />
                <div className="h-12 w-12 rounded-2xl border border-[#f07889]/60 bg-[#f07889]/10" />
                <div className="h-12 w-12 rounded-2xl border border-slate-700 bg-slate-900/80" />
              </div>
            </div>
          </div>
        </div>
      );

    case "software":
      return (
        <div className={baseCard}>
          <div className="absolute inset-x-12 top-10 h-20 rounded-full bg-[#f07889]/10 blur-3xl" />
          <div className="absolute left-1/2 top-12 h-[240px] w-[72%] -translate-x-1/2 rounded-[28px] border border-slate-700/80 bg-slate-950/80 p-4 shadow-[0_22px_40px_rgba(10,15,28,0.62)]">
            <div className="mb-3 flex items-center gap-2">
              {["bg-[#f07889]", "bg-slate-500", "bg-slate-700"].map((dot) => (
                <span key={dot} className={`h-2.5 w-2.5 rounded-full ${dot}`} />
              ))}
            </div>
            <div className="grid h-[180px] grid-cols-[1.2fr_0.8fr] gap-3">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-3">
                <div className="mb-3 h-2.5 w-2/5 rounded-full bg-[#f07889]/80" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 rounded-xl bg-slate-800" />
                  <div className="h-16 rounded-xl bg-slate-800" />
                  <div className="col-span-2 h-16 rounded-xl bg-slate-800" />
                </div>
              </div>
              <div className="space-y-3 rounded-2xl border border-slate-700 bg-slate-900/80 p-3">
                <div className="h-12 rounded-xl bg-[#f07889]/15" />
                <div className="h-4 w-full rounded-full bg-slate-700" />
                <div className="h-4 w-3/4 rounded-full bg-slate-700" />
                <div className="h-20 rounded-xl bg-slate-800" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 h-24 w-[78%] -translate-x-1/2 rounded-t-[24px] border border-slate-700 bg-slate-900/90 shadow-[0_-12px_28px_rgba(18,201,201,0.08)]" />
          <div className="absolute bottom-6 left-1/2 h-6 w-[62%] -translate-x-1/2 rounded-full bg-slate-800/80" />
        </div>
      );

    case "app":
      return (
        <div className={baseCard}>
          <div className="absolute inset-x-16 top-8 h-20 rounded-full bg-[#f07889]/12 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 flex h-[320px] w-[190px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[34px] border border-slate-700 bg-slate-950/80 p-3 shadow-[0_25px_50px_rgba(15,23,42,0.48)]">
            <div className="h-full w-full overflow-hidden rounded-[28px] border border-slate-700 bg-[linear-gradient(180deg,#0d1f2f_0%,#091827_100%)] p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f07889]" />
                <span className="h-2.5 w-12 rounded-full bg-slate-700" />
              </div>
              <div className="mb-4 h-16 rounded-2xl bg-[#f07889]/15" />
              <div className="space-y-3">
                <div className="h-12 rounded-2xl bg-slate-800/90" />
                <div className="h-20 rounded-2xl bg-slate-800/90" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-10 rounded-xl bg-slate-800/90" />
                  <div className="h-10 rounded-xl bg-[#f07889]/12" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-16 top-20 h-20 w-20 rounded-2xl border border-[#f07889]/40 bg-[#f07889]/5" />
          <div className="absolute left-16 bottom-20 h-16 w-16 rounded-2xl border border-slate-700 bg-slate-800/60" />
        </div>
      );

    case "ecommerce":
      return (
        <div className={baseCard}>
          <div className="absolute inset-x-12 top-8 h-20 rounded-full bg-[#f07889]/12 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-slate-700 bg-slate-950/80 p-4 shadow-[0_20px_38px_rgba(15,23,42,0.42)]">
            <div className="mb-4 flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2">
              <div className="h-3 w-16 rounded-full bg-[#f07889]/80" />
              <div className="h-3 w-10 rounded-full bg-slate-700" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="space-y-2">
                  <div className="h-20 rounded-2xl border border-slate-700 bg-slate-900/80" />
                  <div className="h-2.5 w-3/4 rounded-full bg-slate-700" />
                  <div className="h-2.5 w-1/2 rounded-full bg-[#f07889]/80" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-12 right-16 h-16 w-16 rounded-full border border-[#f07889]/40 bg-[#f07889]/8" />
          <div className="absolute top-16 left-14 h-14 w-14 rounded-xl border border-slate-700 bg-slate-800/80" />
        </div>
      );

    case "news":
      return (
        <div className={baseCard}>
          <div className="absolute inset-x-12 top-8 h-24 rounded-full bg-[#f07889]/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[280px] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-[26px] border border-slate-700 bg-slate-950/80 p-4 shadow-[0_16px_30px_rgba(15,23,42,0.42)]">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-3 w-10 rounded-full bg-[#f07889]/80" />
              <div className="h-3 w-24 rounded-full bg-slate-700" />
            </div>
            <div className="grid h-[200px] grid-cols-[1.2fr_0.8fr] gap-3">
              <div className="space-y-3 rounded-2xl border border-slate-700 bg-slate-900/80 p-3">
                <div className="h-16 rounded-xl bg-slate-800" />
                <div className="h-3 w-3/4 rounded-full bg-slate-700" />
                <div className="h-3 w-full rounded-full bg-slate-700" />
                <div className="h-3 w-5/6 rounded-full bg-slate-700" />
              </div>
              <div className="space-y-2">
                <div className="h-12 rounded-xl border border-slate-700 bg-slate-900/80" />
                <div className="h-12 rounded-xl border border-slate-700 bg-slate-900/80" />
                <div className="h-16 rounded-xl border border-[#f07889]/40 bg-[#f07889]/10" />
              </div>
            </div>
          </div>
        </div>
      );

    case "marketing":
      return (
        <div className={baseCard}>
          <div className="absolute inset-x-12 top-8 h-20 rounded-full bg-[#f07889]/12 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-slate-700 bg-slate-950/80 p-4 shadow-[0_24px_42px_rgba(15,23,42,0.46)]">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-3 w-20 rounded-full bg-[#f07889]/80" />
              <div className="h-3 w-12 rounded-full bg-slate-700" />
            </div>
            <div className="grid h-[180px] grid-cols-[1.2fr_0.8fr] gap-3">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-3">
                <div className="flex h-full items-end gap-2">
                  {[45, 70, 58, 80, 100, 74].map((bar) => (
                    <span
                      key={bar}
                      className="w-full rounded-t-lg bg-gradient-to-t from-[#f07889] to-[#f5a5b3]"
                      style={{ height: `${bar}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-16 rounded-2xl border border-slate-700 bg-slate-900/80" />
                <div className="h-16 rounded-2xl border border-[#f07889]/40 bg-[#f07889]/10" />
                <div className="h-28 rounded-2xl border border-slate-700 bg-slate-900/80" />
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function ServicesPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-page">
      <section className="relative overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(18,201,201,0.14),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(71,85,105,0.18),_transparent_26%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f07889]/70 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="reveal mx-auto max-w-5xl text-center">
            <nav aria-label="Breadcrumb" className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/90 bg-white/5 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-slate-300">
                <Link href="/" className="transition-colors hover:text-[#f07889]">
                  Home
                </Link>
                <span className="text-slate-500">/</span>
                <span className="text-[#f07889]">Services</span>
              </div>
            </nav>

            <h1 className="text-4xl font-black leading-[0.96] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl xl:text-[5.5rem]">
              <span>Services built to move your</span>
              <br />
              <span className="text-[#f07889]">business forward</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              From websites to full-scale software — six specialisations, one team, delivered end-to-end with a client-centric,
              ROI-driven approach.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="inline-flex items-center rounded-full border border-slate-700/80 bg-transparent px-4 py-2.5 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-[#f07889]/70 hover:bg-[#f07889]/5 hover:text-[#f07889]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {SERVICES.map((service, index) => {
        const content = (
          <ServiceOverviewCard
            label={service.label}
            title={service.title}
            description={service.description}
            pills={service.pills}
            cta={service.cta}
            href={service.href}
            lightTheme={["website-development", "app-development", "news-portal", "software-development", "digital-marketing", "e-commerce"].includes(service.id)}
          />
        );

        const visual = (
          <div className={`relative mx-auto w-full max-w-[512px] overflow-hidden rounded-3xl ${
            ["software-development", "e-commerce", "digital-marketing"].includes(service.id)
              ? "border border-white bg-white"
              : "border border-slate-200/60 bg-[#f5f7fb]"
          }`}>
            <div className="relative mx-auto aspect-square w-[78%] max-w-[390px] py-5">
              <Image
                src={service.imagePath}
                alt={service.title}
                fill
                className="object-contain p-2"
                priority
              />
            </div>
          </div>
        );

        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-28 py-16 sm:py-20 lg:py-[7.5rem] transition-all duration-300 ${
              ["website-development", "app-development", "news-portal", "software-development", "digital-marketing", "e-commerce"].includes(service.id)
                ? ["software-development", "digital-marketing", "e-commerce"].includes(service.id)
                  ? "bg-[#f5f7fb]"
                  : "bg-white"
                : "bg-[#071426]"
            }`}
          >
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
              <div
                className={`reveal group rounded-3xl border transition-all duration-300 p-8 sm:p-10 lg:p-12 ${
                  ["website-development", "app-development", "news-portal", "software-development", "digital-marketing", "e-commerce"].includes(service.id)
                    ? ["software-development", "digital-marketing", "e-commerce"].includes(service.id)
                      ? "border-[#f07889]/30 hover:border-[#f07889]/60 hover:shadow-[0_20px_40px_rgba(240,120,137,0.1)] hover:-translate-y-1"
                      : "border-slate-200/60 hover:border-slate-300 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1"
                    : "border-slate-700/60 hover:border-[#f07889]/40 hover:shadow-[0_20px_40px_rgba(240,120,137,0.12)] hover:-translate-y-1"
                }`}
              >
                <div
                  className={`grid items-center gap-10 lg:gap-16 ${
                    service.visualFirst ? "lg:grid-cols-[1.02fr_0.98fr]" : "lg:grid-cols-[0.98fr_1.02fr]"
                  }`}
                >
                  {service.visualFirst ? (
                    <>
                      <div className="order-1 transition-transform duration-300 group-hover:scale-105">{visual}</div>
                      <div className={`order-2 flex justify-center transition-all duration-300 group-hover:translate-x-2 ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}>
                        {content}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="order-2 flex justify-center transition-all duration-300 group-hover:-translate-x-2 lg:order-1 lg:justify-end">{content}</div>
                      <div className="order-1 transition-transform duration-300 group-hover:scale-105 lg:order-2">{visual}</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-[#f8fafc] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#f07889]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-900">
                HOW WE WORK
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-[4rem]">
              A process built for clarity
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
              No black boxes — every project moves through the same four stages, so you always know what&apos;s next.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discover",
                text: "We understand your business, audience and goals before writing a single line of code.",
              },
              {
                number: "02",
                title: "Design",
                text: "Wireframes and visual direction, refined with your feedback until it&apos;s right.",
              },
              {
                number: "03",
                title: "Develop",
                text: "Agile sprints with regular check-ins, built on clean, scalable code.",
              },
              {
                number: "04",
                title: "Deliver",
                text: "Testing, launch and post-launch support to keep things running smoothly.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_6px_18px_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_10px_22px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-4 text-[#0f172a]">
                  <span className="text-6xl font-black tracking-[-0.06em] text-[#0f172a] transition-transform duration-300 group-hover:translate-x-1 sm:text-7xl">
                    {step.number}
                  </span>
                  {step.number !== "04" && (
                    <span className="text-4xl font-light text-[#0f172a] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </div>

                <div className="mt-6">
                  <h3 className="text-3xl font-bold tracking-[-0.04em] text-slate-900">{step.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-700">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-full">
          <div className="mb-14 flex items-center justify-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-slate-900">
              TECHNOLOGIES WE WORK WITH
            </span>
          </div>

          <div className="relative w-full overflow-hidden">
            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .marquee-container {
                animation: marquee 32s linear infinite;
              }
              .marquee-container:hover {
                animation-play-state: paused;
              }
            `}</style>
            
            <div className="marquee-container flex gap-16 whitespace-nowrap lg:gap-20">
              {[
                "Next.js",
                "React Native",
                "Vue",
                "MySQL",
                "Python",
                "MongoDB",
                "React",
                "Node.js",
                "Angular",
              ]
                .concat([
                  "Next.js",
                  "React Native",
                  "Vue",
                  "MySQL",
                  "Python",
                  "MongoDB",
                  "React",
                  "Node.js",
                  "Angular",
                ])
                .map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5eff1] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-center gap-3">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#12c9c9]" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-900">
              FAQS
            </span>
          </div>

          <h2 className="mb-16 text-center text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-[4rem]">
            Common questions
          </h2>

          <div className="space-y-0 divide-y divide-slate-300/50">
            {[
              {
                question: "How long does a typical website project take?",
                answer:
                  "Most website projects take 8–12 weeks from discovery to launch, depending on scope and complexity. We break this into clear phases: discovery, design, development, testing, and launch.",
              },
              {
                question: "Do you offer post-launch support?",
                answer:
                  "Yes, we offer ongoing support packages including maintenance, security updates, performance optimization, and feature enhancements after your site goes live.",
              },
              {
                question: "Can you work with an existing codebase?",
                answer:
                  "Absolutely. We can audit, refactor, optimize, and extend existing projects using modern best practices and your preferred tech stack.",
              },
              {
                question: "What industries have you worked with?",
                answer:
                  "We've partnered with startups, SaaS companies, e-commerce platforms, media outlets, and enterprises across fintech, healthcare, education, retail, and more.",
              },
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-slate-200/60 bg-gradient-to-br from-slate-50 to-[#f8fafc] px-8 py-12 shadow-[0_4px_12px_rgba(0,0,0,0.04)] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
              <div className="flex-1">
                <h2 className="text-4xl font-black leading-[1.15] tracking-[-0.06em] text-[#111111] sm:text-5xl lg:text-[3.5rem]">
                  Unveil the collaboration.
                  <br />
                  Let&apos;s create something
                  <br />
                  amazing.
                </h2>
              </div>

              <div className="flex flex-shrink-0">
                  <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#00BFC3] px-8 py-4 font-semibold text-[#111111] shadow-[0_6px_16px_rgba(0,191,195,0.24)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_24px_rgba(0,191,195,0.32)] sm:px-10 sm:py-5 sm:text-lg"
                >
                  Let&apos;s talk →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="py-6">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 text-left transition-colors hover:text-slate-700 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">{question}</h3>
        <span
          className={`inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 pr-12 text-base leading-7 text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

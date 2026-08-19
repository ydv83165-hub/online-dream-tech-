"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Filter = "All" | "Website" | "Software" | "App" | "E-Commerce" | "Marketing";

type Project = {
  id: number;
  title: string;
  description: string;
  category: Exclude<Filter, "All">;
  imageClass: string;
};

const FILTERS: Filter[] = ["All", "Website", "Software", "App", "E-Commerce", "Marketing"];

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Corporate site for a real estate developer",
    description: "Gallery-led design with property listings and inquiry funnels.",
    category: "Website",
    imageClass: "bg-[radial-gradient(circle_at_top_left,_rgba(181,69,96,0.9),transparent_30%),linear-gradient(135deg,#0b1626,#1d3d59_52%,#0e2030)]",
  },
  {
    id: 2,
    title: "D2C store for a dry fruits brand.",
    description: "WooCommerce build with custom quantity pricing and bilingual support.",
    category: "Website",
    imageClass: "bg-[radial-gradient(circle_at_top_left,_rgba(237,82,108,0.8),transparent_30%),linear-gradient(135deg,#0b1424,#1c3550_54%,#0e1d31)]",
  },
  {
    id: 3,
    title: "WhatsApp-based CRM for Indian SMBs",
    description: "Lead tracking and automated follow-ups built for small business teams.",
    category: "Website",
    imageClass: "bg-[radial-gradient(circle_at_top_left,_rgba(107,204,255,0.85),transparent_35%),linear-gradient(135deg,#091b2d,#173f61_52%,#0d1c2b)]",
  },
  {
    id: 4,
    title: "Visa & immigration consultancy site",
    description: "Trust-driven layout with service breakdowns and consultation booking.",
    category: "Software",
    imageClass: "bg-[radial-gradient(circle_at_top_left,_rgba(181,69,96,0.82),transparent_28%),linear-gradient(135deg,#071827,#183d55_55%,#0a1d2d)]",
  },
  {
    id: 5,
    title: "FlowPilot",
    description: "Workflow automation platform helping teams move faster with smarter reporting.",
    category: "Software",
    imageClass: "bg-[radial-gradient(circle_at_top_left,_rgba(160,210,255,0.75),transparent_28%),linear-gradient(135deg,#0a1a2c,#183d57_56%,#0f1b2e)]",
  },
  {
    id: 6,
    title: "SignalDesk",
    description: "Custom software solution built for operational clarity, insights, and decision-making.",
    category: "Software",
    imageClass: "bg-[radial-gradient(circle_at_top_left,_rgba(237,82,108,0.7),transparent_30%),linear-gradient(135deg,#0b1829,#1d2f46_58%,#0a1d2b)]",
  },
  {
    id: 7,
    title: "Horizon App",
    description: "Mobile-first product experience delivering simplified access and more user engagement.",
    category: "App",
    imageClass: "bg-[radial-gradient(circle_at_top_left,_rgba(115,255,214,0.8),transparent_32%),linear-gradient(135deg,#071b2d,#173d56_60%,#0b1b2a)]",
  },
  {
    id: 8,
    title: "Luma Market",
    description: "Premium storefront experience focused on user trust, product storytelling, and conversions.",
    category: "E-Commerce",
    imageClass: "bg-[radial-gradient(circle_at_top_left,_rgba(255,185,123,0.75),transparent_34%),linear-gradient(135deg,#091826,#26415f_57%,#0c1e2b)]",
  },
  {
    id: 9,
    title: "Launch Orbit",
    description: "Integrated marketing landing page built to amplify reach and attract qualified leads.",
    category: "Marketing",
    imageClass: "bg-[radial-gradient(circle_at_top_left,_rgba(237,82,108,0.8),transparent_30%),linear-gradient(135deg,#0a1a2a,#1e3356_58%,#0d1b2a)]",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const gridClass =
    visibleProjects.length === 1
      ? "flex justify-center"
      : "grid gap-6 md:grid-cols-2 xl:grid-cols-3";

  return (
    <>
      <section className="relative overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(89,208,255,0.13),transparent_33%),radial-gradient(circle_at_bottom_right,_rgba(237,82,108,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <nav aria-label="Breadcrumb" className="flex justify-center">
            <ol className="flex items-center gap-2 text-xs font-medium tracking-[0.08em] text-sky-100/80 sm:text-sm">
              <li>
                <Link href="/" className="text-cyan-300 transition-colors hover:text-cyan-200">
                  Home
                </Link>
              </li>
              <li className="text-sky-200/80">/</li>
              <li className="text-sky-100/80">Project</li>
            </ol>
          </nav>

          <div className="mx-auto mt-8 max-w-5xl text-center">
            <h1 className="text-[34px] font-black leading-[0.98] tracking-[-0.06em] text-white sm:text-[46px] lg:text-[64px]">
              Work that speaks for
              <span className="mt-2 block bg-gradient-to-r from-[#ed526c] via-[#f08a9a] to-[#b9f3ec] bg-clip-text text-transparent">
                itself
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[700px] text-base leading-7 text-sky-100/75 sm:text-lg sm:leading-8">
              100+ projects delivered across 50+ industries – a look at the websites, software and apps we’ve built for our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2f4] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:text-[15px] ${
                    isActive
                      ? "border-[#b54560] bg-[#b54560] text-[#071426] shadow-[0_10px_24px_rgba(181,69,96,0.2)]"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className={`mt-10 transition-all duration-300 ${gridClass}`}>
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className="group w-full max-w-[360px] overflow-hidden rounded-[20px] border border-slate-200/80 bg-[#071426] text-white shadow-[0_18px_32px_rgba(7,20,38,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(7,20,38,0.12)]"
              >
                <div className={`relative h-52 overflow-hidden ${project.imageClass}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.14),transparent_28%)]" />
                  <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#071426]/55 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#d8fbf4] backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                <div className="space-y-4 px-5 pb-5 pt-5">
                  <h3 className="text-[24px] font-semibold leading-tight text-white">{project.title}</h3>
                  <p className="text-sm leading-6 text-sky-100/75">{project.description}</p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200/10 px-5 py-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-100/60">
                    {project.category}
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#b54560]/60 bg-[#b54560]/10 text-lg font-light text-[#b54560]">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b54560]">● CASE STUDY</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-black sm:text-4xl lg:text-[46px]">
              Featured project
            </h2>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#1d2d42] bg-[#0d1b2a] shadow-[0_25px_60px_rgba(7,20,38,0.18)]">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-[500px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(181,69,96,0.18),transparent_28%),linear-gradient(135deg,#071426,#16324d_58%,#0a1524)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,28,0.2),rgba(11,18,28,0.68))]" />
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="inline-flex rounded-full border border-white/15 bg-[#071426]/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#dffcf7] backdrop-blur-sm">
                    WEBSITE · REAL ESTATE
                  </span>
                  <h3 className="mt-4 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[34px] lg:leading-[1.15]">
                    Digital revamp for a buildtech brand near Khatu Shyam Ji
                  </h3>
                </div>
              </div>

              <div className="bg-[#12243b] p-5 sm:p-7 lg:p-8">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b54560]">● THE CHALLENGE</p>
                    <p className="mt-5 text-base leading-8 text-[#dfeaf8]">
                      The client needed a trust-building online presence for property buyers unfamiliar with the brand — combining a devotional regional aesthetic with a modern, mobile-first gallery and inventory experience.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-[#253c57] bg-[#0d1b2a] p-4 text-center">
                      <div className="text-3xl font-black tracking-[-0.05em] text-[#b54560]">4 weeks</div>
                      <div className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[#b9d6f5]">Design to launch</div>
                    </div>
                    <div className="rounded-2xl border border-[#253c57] bg-[#0d1b2a] p-4 text-center">
                      <div className="text-3xl font-black tracking-[-0.05em] text-[#b54560]">3x</div>
                      <div className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[#b9d6f5]">Increase in inquiries</div>
                    </div>
                    <div className="rounded-2xl border border-[#253c57] bg-[#0d1b2a] p-4 text-center">
                      <div className="text-3xl font-black tracking-[-0.05em] text-[#b54560]">100%</div>
                      <div className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[#b9d6f5]">Mobile responsive</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#b54560] px-6 py-3.5 text-base font-semibold text-[#071426] transition-all duration-300 hover:bg-[#b54560]"
                  >
                    Start a similar project <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 pt-0 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[28px] border border-[#1d2d42] bg-[radial-gradient(circle_at_right,_rgba(181,69,96,0.18),transparent_25%),linear-gradient(135deg,#071426,#0b1f31_45%,#081827)] px-6 py-8 sm:px-8 sm:py-10 lg:px-[75px] lg:py-[60px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(84,201,255,0.12),transparent_28%)]" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl text-left text-white">
                <h3 className="text-2xl font-black tracking-[-0.05em] text-white sm:text-3xl lg:text-[42px] lg:leading-[1.08]">
                  Got a project in mind?
                  <span className="mt-1 block">Let&apos;s bring it to life.</span>
                </h3>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full bg-[#b54560] px-7 py-3.5 text-base font-semibold text-[#071426] shadow-[0_12px_28px_rgba(181,69,96,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b54560]"
              >
                Let&apos;s talk <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

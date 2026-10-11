import type { Metadata } from "next";
import Link from "next/link";

type Project = {
  title: string;
  category: string;
  description: string;
  metrics: string[];
  tags: string[];
  accent: string;
  glow: string;
};

const PROJECTS: Project[] = [
  {
    title: "LMS Growth Platform",
    category: "Education technology",
    description:
      "A complete learning portal for students and mentors, designed to improve onboarding, content discoverability, and conversion across key study programs.",
    metrics: ["+186% leads", "4.9/5 learner feedback", "Week 6 launch"],
    tags: ["Next.js", "UX Strategy", "Course Funnels"],
    accent: "from-[#FF7A59] via-[#FFB199] to-[#FFF1ED]",
    glow: "bg-[#FF7A59]/15",
  },
  {
    title: "E-commerce Brand Store",
    category: "Retail & commerce",
    description:
      "A premium storefront built to showcase products, simplify decision-making, and move buyers from discovery to WhatsApp order without friction.",
    metrics: ["+2.3x sessions", "45% lower drop-off", "Mobile-first"],
    tags: ["Shop UX", "Performance", "Conversion"],
    accent: "from-[#1D4ED8] via-[#60A5FA] to-[#E0F2FE]",
    glow: "bg-[#1D4ED8]/15",
  },
  {
    title: "Business Services Website",
    category: "Service brand",
    description:
      "A polished service website positioning a digital agency for premium clients with stronger credibility, clearer messaging, and faster enquiry flow.",
    metrics: ["+3x inquiry intent", "Stronger trust signals", "Clear conversion path"],
    tags: ["Branding", "Lead Generation", "SEO"],
    accent: "from-[#0F172A] via-[#475569] to-[#E2E8F0]",
    glow: "bg-slate-900/10",
  },
  {
    title: "News & Content Portal",
    category: "Media & publishing",
    description:
      "A scalable news portal system focused on speed, content hierarchy, and a clean reading experience that keeps readers engaged longer.",
    metrics: ["Faster content flow", "Improved UX", "Scalable architecture"],
    tags: ["CMS thinking", "Editorial design", "Performance"],
    accent: "from-[#10B981] via-[#34D399] to-[#ECFDF5]",
    glow: "bg-[#10B981]/15",
  },
];

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore selected client and product work delivered by Online Dream Tech.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
      <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
        <div className="grid gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-12">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff6d4d]">
              Selected work
            </p>
            <h1 className="mt-4 font-display text-4xl leading-none text-slate-900 sm:text-5xl lg:text-[4.1rem]">
              Projects built to create digital momentum.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              We design and build experiences that help brands turn attention into trust, and trust into action.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Brand-first UX",
                "Fast delivery",
                "Conversion focused",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#ff6d4d]/12 via-transparent to-[#1d4ed8]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff6d4d]" />
                  <span className="h-3 w-3 rounded-full bg-[#fbbf24]" />
                  <span className="h-3 w-3 rounded-full bg-[#34d399]" />
                </div>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-200">
                  Portfolio
                </span>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Focus</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Lead generation + brand clarity</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-[#0f172a] p-4">
                    <p className="text-3xl font-bold text-white">9+</p>
                    <p className="mt-2 text-sm text-slate-300">Years of design & product thinking</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#0f172a] p-4">
                    <p className="text-3xl font-bold text-white">100+</p>
                    <p className="mt-2 text-sm text-slate-300">Projects shaped across industries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 sm:mt-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Work</p>
            <h2 className="mt-2 font-display text-3xl text-slate-900 sm:text-4xl">Featured projects</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.08)]"
            >
              <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                <div className={`absolute inset-0 ${project.glow}`} />
                <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div className="rounded-full border border-white/30 bg-slate-950/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm">
                    {project.category}
                  </div>
                  <div className="rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                    Case study
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-center">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Result</p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">{metric}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#320303] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(50,3,3,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Discuss a similar project
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-[30px] border border-[#F8D9C8] bg-[#fffaf7] px-5 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ff6d4d]">Let&apos;s build</p>
            <h2 className="mt-3 font-display text-3xl text-slate-900 sm:text-4xl">
              Need a website or product that feels premium?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#ff6d4d] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_32px_rgba(255,109,77,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Start your project
          </Link>
        </div>
      </section>
    </div>
  );
}

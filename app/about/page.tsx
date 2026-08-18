import type { Metadata } from "next";
import { BRAND, MISSION } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const ABOUT_EXTRA = {
  story: [
    "Online Dream Teach was created to make practical learning feel clearer, more useful, and more approachable for real life.",
    "Our work blends guidance, reflection, and action so people can move forward with more clarity in study, work, and personal growth.",
    "We believe progress becomes sustainable when the process is simple, honest, and built around real outcomes.",
  ],
  process: [
    { title: "Understand the goal", desc: "We start by identifying what truly matters and what direction will create the most value." },
    { title: "Build a practical path", desc: "We turn goals into a simple, actionable plan that feels realistic and easy to follow." },
    { title: "Create momentum", desc: "The focus stays on consistent action, small wins, and better decisions that compound over time." },
    { title: "Support long-term growth", desc: "We help people stay aligned, adapt when needed, and keep progressing with confidence." },
  ],
} as const;

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BRAND.name} — a modern, growth-focused learning space built for clarity, practical progress, and meaningful outcomes.`,
};

export default function AboutPage() {
  return (
    <div className="bg-[#0e172d]">
      <section className="about-panel relative overflow-hidden border-b border-white/10 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,109,77,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(29,78,216,0.18),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_10px_24px_rgba(15,23,42,0.2)] backdrop-blur-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_16px_rgba(255,109,77,0.7)]" />
                Who we are
              </div>

              <h1 className="font-display text-4xl leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4.3rem]">
                We build clarity,
                <span className="mt-2 block text-white">confidence, and momentum.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-slate-200 sm:text-lg">
                {MISSION.english} We partner with students, professionals, and growing brands to turn ideas into focused action and sustainable results.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="secondary" size="lg">Let&apos;s connect</Button>
                <Button href="/services" variant="secondary" size="lg">See our work</Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_14px_28px_rgba(15,23,42,0.16)] backdrop-blur-sm">
                  <div className="font-display text-2xl text-white">9+</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-300">Years</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_14px_28px_rgba(15,23,42,0.16)] backdrop-blur-sm">
                  <div className="font-display text-2xl text-white">100+</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-300">Projects</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_14px_28px_rgba(15,23,42,0.16)] backdrop-blur-sm">
                  <div className="font-display text-2xl text-white">50+</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-300">Industries</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-sky-100/10 to-indigo-100/10 blur-2xl" />
              <div className="about-card relative overflow-hidden rounded-[2rem] border border-white/15 bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.28)] sm:p-4 hover:border-[#f07889]/60">
                <img
                  src="/about%20Who%20we%20are.png"
                  alt="About Who We Are"
                  className="h-[430px] w-full rounded-[1.5rem] object-cover sm:h-[500px] lg:h-[560px]"
                />
              </div>

              <div className="absolute -bottom-4 left-4 rounded-2xl border border-white/10 bg-[#11213f]/90 px-4 py-3 shadow-[0_18px_32px_rgba(15,23,42,0.22)] backdrop-blur-sm sm:left-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">Approach</div>
                <div className="mt-1 font-display text-2xl text-white">Practical & strategic</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(240,120,137,0.15),transparent_60%)] blur-2xl" />
              <div className="about-card relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#f5f7fa] p-3 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:p-4 lg:p-5 hover:border-[#f07889]/60">
                <img
                  src="/about%20Our%20Story.png"
                  alt="Our Story"
                  className="h-[360px] w-full rounded-[1.4rem] object-cover sm:h-[420px] lg:h-[480px]"
                />
              </div>
            </div>

            <div className="max-w-xl lg:pl-4">
              <div className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#f07889]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f07889] shadow-[0_0_18px_rgba(240,120,137,0.8)]" />
                Our Story
              </div>

              <h2 className="font-sans text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-[3rem]">
                Built on client satisfaction
                <span className="mt-1 block">&amp; transparency</span>
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-[#333333] sm:text-[1.05rem]">
                <p>
                  Welcome to <span className="font-semibold text-[#111111]">Online Dream Tech</span>, your destination for cutting-edge software and website development. At Online Dream Tech, we blend creativity with technology to deliver exceptional digital solutions.
                </p>
                <p>
                  With a passion for innovation, our skilled team of developers and designers is dedicated to crafting bespoke software and websites that elevate your brand. We pride ourselves on client satisfaction, transparency, and a client-centric approach.
                </p>
                <p>
                  Whether you’re a startup or an established enterprise, Online Dream Tech is your partner in turning ideas into reality and ensuring a strong digital presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-panel border-b border-slate-200 bg-[#f5f7fb] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#f07889]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f07889] shadow-[0_0_18px_rgba(240,120,137,0.8)]" />
              Our Journey
            </div>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-[3.2rem]">
              9+ years, one growing story
            </h2>
          </div>

          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="absolute left-[19px] top-0 h-full w-px bg-[#f07889]/80 sm:left-[22px]" />

            <div className="space-y-10 sm:space-y-12">
              {[
                {
                  number: "01",
                  title: "Foundation",
                  subtitle: "Started as a small web development team",
                  text: "Began with custom WordPress and frontend builds for local Delhi NCR businesses.",
                },
                {
                  number: "02",
                  title: "Growth",
                  subtitle: "Expanded into full-stack software & apps",
                  text: "Added software development, e-commerce and mobile app capabilities to serve larger enterprise clients.",
                },
                {
                  number: "03",
                  title: "Scale",
                  subtitle: "Crossed 100+ clients across 50+ industries",
                  text: "Built a diverse portfolio spanning news portals, e-commerce, real estate, hospitality and more.",
                },
                {
                  number: "04",
                  title: "Today",
                  subtitle: "A full-service digital partner",
                  text: "Website, software, app and digital marketing — one team, end-to-end delivery, ROI driven.",
                },
              ].map((item) => (
                <div key={item.number} className="relative pl-14 sm:pl-16">
                  <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f07889] bg-[#f5f7fb] shadow-[0_0_0_4px_rgba(240,120,137,0.12)] sm:h-11 sm:w-11">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f07889]" />
                  </div>

                  <div className="about-card rounded-[1.5rem] border border-slate-200 bg-white/80 p-5 shadow-[0_14px_28px_rgba(15,23,42,0.04)] sm:p-6 hover:border-[#f07889]/60">
                    <div className="mb-2 text-sm font-bold tracking-[0.14em] text-[#111111]">{item.number} — {item.title}</div>
                    <h3 className="text-xl font-bold text-[#111111] sm:text-2xl">{item.subtitle}</h3>
                    <p className="mt-3 text-base leading-7 text-[#334155]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-panel border-b border-slate-200 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="about-card flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-[#F8FAFC] p-7 shadow-[0_12px_28px_rgba(15,23,42,0.04)] sm:p-8 hover:border-[#f07889]/60">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#f07889]">Mission</div>
              <h3 className="text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#111111] sm:text-[2rem]">
                Deliver creative, strategic and ROI driven digital solutions
              </h3>
              <p className="mt-5 text-base leading-8 text-[#333333]">
                We leverage cutting-edge technologies and industry best practices to help every business — startup or enterprise — build an impactful online presence.
              </p>
            </article>

            <article className="about-card flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-[#F8FAFC] p-7 shadow-[0_12px_28px_rgba(15,23,42,0.04)] sm:p-8 hover:border-[#f07889]/60">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#f07889]">Vision</div>
              <h3 className="text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#111111] sm:text-[2rem]">
                Be the trusted digital transformation partner for Indian businesses
              </h3>
              <p className="mt-5 text-base leading-8 text-[#333333]">
                To be recognised across industries for client-centric delivery, transparent process, and technology that genuinely moves the needle.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-panel border-b border-slate-200 bg-[#f5f7fb] py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#f07889]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f07889] shadow-[0_0_18px_rgba(240,120,137,0.8)]" />
              What Drives Us
            </div>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-[3.4rem]">
              Our core values
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Client-Centric",
                text: "Every decision starts with what moves your business forward.",
                icon: "◎",
              },
              {
                title: "Transparency",
                text: "Clear communication and honest timelines, every step of the way.",
                icon: "◌",
              },
              {
                title: "Innovation",
                text: "We stay ahead of technology so your product doesn’t fall behind.",
                icon: "⚡",
              },
              {
                title: "ROI Driven",
                text: "Design and code that’s built to perform, not just look good.",
                icon: "▣",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="about-card flex h-full flex-col rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:p-7 hover:border-[#f07889]/60"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f07889]/5 text-lg text-[#f07889] shadow-[0_8px_20px_rgba(240,120,137,0.12)]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#111111]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#333333]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-panel border-b border-slate-200 bg-white py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#f07889]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f07889] shadow-[0_0_18px_rgba(240,120,137,0.8)]" />
              Why Us
            </div>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-[3.35rem]">
              Numbers that back the promise
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { value: "9+", label: "Years of experience" },
              { value: "100+", label: "Clients worldwide" },
              { value: "100+", label: "Projects delivered" },
              { value: "50+", label: "Industries served" },
            ].map((stat) => (
              <article
                key={stat.label}
                className="about-card flex h-full flex-col items-center rounded-[1.25rem] border border-slate-200 bg-[#F8FAFC] p-7 text-center shadow-[0_12px_28px_rgba(15,23,42,0.04)] sm:p-8 hover:border-[#f07889]/60"
              >
                <div className="text-4xl font-extrabold tracking-[-0.05em] text-[#f07889] sm:text-5xl lg:text-[3.2rem]">
                  {stat.value}
                </div>
                <div className="mt-3 text-base font-medium text-[#111111] sm:text-lg">
                  {stat.label}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-panel border-b border-slate-200 bg-[#f5f7fb] py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#f07889]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f07889] shadow-[0_0_18px_rgba(240,120,137,0.8)]" />
              The Team
            </div>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-[3.2rem]">
              Meet the people behind the work
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { name: "Ankit", role: "Founder & Lead Developer", initials: "AK" },
              { name: "Roshan", role: "UI / UX Designer", initials: "RS" },
              { name: "Shivam", role: "Backend Developer", initials: "SV" },
              { name: "Aman", role: "Project Manager", initials: "AM" },
            ].map((member) => (
              <article
                key={member.name}
                className="about-card group overflow-hidden rounded-[1.5rem] border border-slate-300 bg-white shadow-[0_18px_36px_rgba(15,23,42,0.06)] hover:border-[#f07889] hover:shadow-[0_22px_44px_rgba(240,120,137,0.12)]"
              >
                <div className="flex h-64 items-center justify-center bg-[#F3F6F8] transition-colors duration-300 group-hover:bg-[#EDF9FB] sm:h-72">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-extrabold text-[#f07889] shadow-[0_10px_26px_rgba(240,120,137,0.12)] sm:h-28 sm:w-28">
                    {member.initials}
                  </div>
                </div>

                <div className="border-t border-slate-200 bg-white p-6 sm:p-7">
                  <div className="mb-3 h-1.5 w-10 rounded-full bg-[#f07889]" />
                  <h3 className="text-2xl font-bold text-[#111111]">{member.name}</h3>
                  <p className="mt-2 text-base text-[#333333]">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-panel bg-white py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="about-card rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_34px_rgba(15,23,42,0.04)] sm:p-8 lg:p-10 hover:border-[#f07889]/60">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h3 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-[3rem]">
                  Unveil the collaboration.
                  <span className="mt-1 block">Let’s create something</span>
                  <span className="mt-1 block">amazing.</span>
                </h3>
              </div>

              <div className="self-stretch lg:self-auto">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#f07889] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(240,120,137,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e86878]"
                >
                  Let&apos;s talk →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

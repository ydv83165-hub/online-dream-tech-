import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="hero-shell relative overflow-hidden pt-18 pb-14 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(2,6,23,0.82) 0%, rgba(15,23,42,0.72) 35%, rgba(15,23,42,0.52) 100%), url('/space-hero-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0a1532",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4, 7, 55, 0.82)_0%,rgba(5, 9, 69, 0.58)_38%,rgba(15,23,42,0.76)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.72),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-[#ed526c]/30 bg-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-100 shadow-[0_10px_30px_rgba(237,82,108,0.18)] backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ed526c] shadow-[0_0_18px_rgba(237,82,108,0.9)]" />
              Delhi NCR · Web & Software Studio
            </div>

            <h1 className="font-display text-4xl leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5rem]">
              Creative, strategic & ROI driven
              <span className="mt-2 block text-[#ed526c] drop-shadow-[0_0_16px_rgba(237,82,108,0.35)]">
                digital solutions.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              {BRAND.name} helps students, founders, and professionals turn knowledge into action with practical learning, sharper strategy, and measurable progress.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="secondary" size="lg">
                Let&apos;s connect →
              </Button>
              <Button href="/about" variant="secondary" size="lg" className="hero-secondary-button transition-all duration-300 hover:-translate-y-1 hover:border-[#ed526c] hover:text-[#ed526c]">
                Explore About
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/hero-visual.png"
              alt="Online Dream Teach growth dashboard"
              className="relative h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { MISSION, BRAND } from "@/lib/constants";
import { Hero } from "@/components/home/Hero";
import { TestimonialCard } from "@/components/home/TestimonialCard";
import { StoryLottie } from "@/components/home/StoryLottie";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const STATS = [
  { value: "9+", label: "Years of experience" },
  { value: "100+", label: "Learner rating" },
  { value: "100+", label: "Projects delivered" },
  { value: "50+", label: "Industries served" },
] as const;

const TESTIMONIALS = [
  {
    quote: "Their practical approach made my goals feel achievable. I stopped overthinking and started executing with more clarity and consistency.",
    name: "Ankit",
    location: "Delhi",
    product: "Learning Roadmap",
    rating: 5,
  },
  {
    quote: "Jab bhi koi goal clear karna hota hai, mujhe Online Dream tech ka guidance bahut helpful lagta hai. Isse meri direction aur confidence dono improve hui hai.",
    name: "Roshan",
    location: "UP",
    product: "Growth Mentoring",
    rating: 5,
  },
  {
    quote: "As a working professional, I needed structure without overwhelm. Online Dream tech gave me exactly that — clear direction and steady progress.",
    name: "Aman",
    location: "Mumbai",
    product: "Growth Coaching",
    rating: 5,
  },
] as const;

const TECHNOLOGY_LOGOS = [
  { name: "React", src: "https://cdn.simpleicons.org/react/61dafb" },
  { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs/68a063" },
  { name: "Angular", src: "https://cdn.simpleicons.org/angular/dd0031" },
  { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "React Native", src: "https://cdn.simpleicons.org/react/61dafb" },
  { name: "Vue.js", src: "https://cdn.simpleicons.org/vuedotjs/4fc08d" },
  { name: "MySQL", src: "https://cdn.simpleicons.org/mysql/4479a1" },
  { name: "Python", src: "https://cdn.simpleicons.org/python/3776ab" },
  { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb/47a248" },
] as const;

const FAQ = [
  {
    q: "Is Online Dream tech good for learning and growth?",
    a: "Yes. Our approach combines practical learning, guided structure, and growth-focused support so people can build real momentum in study, work, and personal development.",
  },
  {
    q: "How do I stay consistent with learning?",
    a: "Start with one clear goal, follow a structured plan, and keep your progress measurable. Consistency matters more than intensity.",
  },
  {
    q: "Do you help with strategy and direction?",
    a: "Yes. We focus on clarity, actionable plans, and realistic next steps so people can move ahead with confidence.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="relative py-10 sm:py-12 lg:py-16 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#D4AF37] bg-white px-3 py-5 shadow-[0_12px_24px_rgba(15,23,42,0.04)] text-center h-full flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(15,23,42,0.08)] hover:border-primary/40 hover:bg-slate-50"
              >
                <p
                  className={`font-display font-semibold leading-none text-slate-900 ${
                    stat.value.length > 4
                      ? "text-xl sm:text-2xl lg:text-[1.65rem]"
                      : "text-3xl sm:text-4xl lg:text-5xl"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-600 mt-2.5 sm:mt-3 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What we do"
            subtitle="Actionable guidance, digital growth, and outcomes designed for long-term momentum."
            subtitleClassName="text-slate-900"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Strategic Learning",
                text: "Clear, actionable programs that help students and professionals build real skills at every stage.",
              },
              {
                title: "Growth Coaching",
                text: "Focused support for personal and professional growth with a practical path to sustainable improvement.",
              },
              {
                title: "Digital Execution",
                text: "Smart systems, modern communication, and better execution so your next move feels confident and measurable.",
              },
            ].map((item) => (
              <article key={item.title} style={{ borderColor: "#D4AF37" }} className="card-premium rounded-[1.5rem] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_32px_rgba(15,23,42,0.08)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-lg text-primary">✦</div>
                <h3 className="font-display text-2xl text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Offering you</p>
            <h2 className="mt-4 font-display text-4xl text-slate-900 sm:text-5xl">
              <span className="block">Cutting-edge</span>
              <span className="block italic">Technologies</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We build with modern tools and trusted frameworks that keep your digital experiences fast, scalable, and future-ready.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white">
            <div className="tech-marquee-track flex w-max items-center gap-4 px-3 py-6 sm:gap-6 sm:px-5 lg:gap-8 lg:px-8">
              {[...TECHNOLOGY_LOGOS, ...TECHNOLOGY_LOGOS].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="tech-marquee-item flex flex-col h-20 w-28 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)] sm:h-24 sm:w-32 lg:h-28 lg:w-36"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-8 w-8 object-contain sm:h-9 sm:w-9 lg:h-11 lg:w-11"
                  />
                  <span className="mt-1 text-xs sm:text-sm font-medium text-slate-700 text-center">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Our story</p>
              <h2 className="mt-4 font-display text-4xl text-slate-900 sm:text-5xl">Built for curious minds and ambitious goals.</h2>
              <p className="mt-3 text-base leading-8 text-slate-600">
                {MISSION.english}
              </p>
              <p className="mt-3 text-base leading-8 text-slate-600">
                {MISSION.englishMission}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/about" size="lg">Learn More</Button>
                <Button href="/about" variant="secondary" size="lg">Why choose us</Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[440px]">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/10 via-sky-100 to-indigo-100 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f5f5f5] shadow-[0_20px_40px_rgba(15,23,42,0.08)] p-3 sm:p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_24px_46px_rgba(15,23,42,0.12)]">
                <StoryLottie />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Our services</p>
            <h2 className="mt-4 font-display text-4xl text-slate-900 sm:text-5xl">Everything you need to grow online</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We deliver an outstanding service, custom-tailored to each and every one of our clients.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                icon: "🌐",
                title: "Website Development",
                text: "Custom websites that reflect your brand's essence — responsive, user-friendly and visually engaging, from concept to launch.",
              },
              {
                icon: "💻",
                title: "Software Development",
                text: "Dynamic, high-performance software built with an agile approach — top-notch code and seamless integration.",
              },
              {
                icon: "📱",
                title: "App Development",
                text: "Sleek, user-friendly mobile applications tailored to your unique needs — from concept to deployment.",
              },
              {
                icon: "🛒",
                title: "E-Commerce Development",
                text: "High-performance online stores with seamless integration, secure transactions and a visually appealing shopping experience.",
              },
              {
                icon: "📰",
                title: "News Portal Development",
                text: "Dynamic, scalable platforms that ensure real-time updates and engaging content presentation.",
              },
              {
                icon: "📈",
                title: "Digital Marketing",
                text: "Strategic campaigns, SEO optimization and social media management to drive traffic and boost visibility.",
              },
            ].map((service) => (
              <article
                key={service.title}
                style={{ borderColor: "#D4AF37" }}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_18px_32px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-2xl shadow-sm">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[#071426] bg-cover bg-center px-4 py-14 sm:min-h-[320px] sm:py-16"
        style={{
          backgroundImage: "url('/2%20hero%20Futuristic%20technology.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[#071426]/65" />
        <div className="relative text-center text-white">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Our partner in turning ideas into digital reality</h2>
          <p className="mt-3 max-w-3xl text-base font-semibold leading-7 text-sky-100 sm:text-lg">
            Online Dream Tech, your destination for cutting-edge software and website development. We blend creativity with technology to deliver exceptional digital solutions.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20 bg-[#f5f3f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Client Testimonials"
            hindi="What Our Clients *Say*"
            hindiClassName="text-slate-900"
            subtitle=""
            subtitleClassName="text-slate-900"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={`${t.name}-${t.location}`} quote={t.quote} name={t.name} location={t.location} product={t.product} rating={t.rating} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="font-display text-4xl text-slate-900 sm:text-5xl">Common questions</h2>
            <div className="mx-auto mt-4 h-px w-20 bg-[#e09cc9]" />
          </div>

          <div className="space-y-3">
            {FAQ.map((item) => (
              <details key={item.q} style={{ borderColor: "#D4AF37" }} className="group rounded-2xl border border-slate-200 bg-white/80 open:border-primary/30 shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_14px_28px_rgba(15,23,42,0.08)]">
                <summary className="cursor-pointer list-none px-5 py-4 text-base font-medium text-slate-800 flex items-center justify-between gap-3">
                  <span className="text-left pr-2">{item.q}</span>
                  <span className="text-2xl text-slate-500 transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20 bg-[#f5f7fb]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Let’s build momentum</p>
          <h2 className="mt-4 font-display text-4xl text-slate-900 sm:text-5xl">Ready to grow with {BRAND.name}?</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">A clear plan, smarter decisions, and support that helps you move with confidence.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/about" size="lg">Start now</Button>
            <Button href="/about" variant="secondary" size="lg">Talk to us</Button>
          </div>
        </div>
      </section>
    </>
  );
}

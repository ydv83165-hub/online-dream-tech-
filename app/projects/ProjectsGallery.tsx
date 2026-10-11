"use client";

import { useState } from "react";

const CATEGORIES = [
  "All",
  "Website",
  "Software",
  "App",
  "E-Commerce",
  "News Portal",
  "Marketing",
] as const;

type Category = (typeof CATEGORIES)[number];

type Project = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  gradient: string;
  image?: string;
};

const CATEGORY_BANNERS: Record<Exclude<Category, "All">, string> = {
  Website: "/projects/banner-website.svg",
  Software: "/projects/banner-software.svg",
  App: "/projects/banner-app.svg",
  "E-Commerce": "/projects/banner-ecommerce.svg",
  "News Portal": "/projects/banner-news.svg",
  Marketing: "/projects/banner-marketing.svg",
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Brand Identity Website",
    category: "Website",
    description: "A polished, responsive home for a growing brand, designed to tell its story and turn visitors into enquiries.",
    gradient: "from-violet-600 via-purple-500 to-pink-400",
    image: "/projects/brand-identity-website-cover.svg",
  },
  {
    id: 2,
    title: "Learning Hub",
    category: "Website",
    description: "A clear and welcoming education website that helps learners find courses, resources, and their next step.",
    gradient: "from-sky-500 via-blue-500 to-indigo-700",
    image: "/projects/learning-hub-cover.svg",
  },
  {
    id: 3,
    title: "Hospitality Experience",
    category: "Website",
    description: "A visual-first website for a hospitality business, with simple navigation and a streamlined booking journey.",
    gradient: "from-amber-400 via-orange-500 to-rose-600",
    image: "/projects/hospitality-experience-cover.svg",
  },
  {
    id: 4,
    title: "Business Management Suite",
    category: "Software",
    description: "A centralized workspace that brings daily operations, team workflows, and business insights together.",
    gradient: "from-cyan-400 via-teal-500 to-emerald-700",
    image: "/projects/business-management-suite-cover.svg",
  },
  {
    id: 5,
    title: "Customer Relationship Platform",
    category: "Software",
    description: "A custom CRM experience that helps teams organize contacts, follow up consistently, and manage their pipeline.",
    gradient: "from-indigo-500 via-blue-600 to-cyan-400",
    image: "/projects/customer-relationship-platform-cover.svg",
  },
  {
    id: 6,
    title: "On-Demand Services App",
    category: "App",
    description: "A straightforward mobile experience connecting customers with local services from discovery to booking.",
    gradient: "from-fuchsia-500 via-pink-500 to-orange-400",
    image: "/projects/on-demand-services-app-cover.svg",
  },
  {
    id: 7,
    title: "Modern Fashion Store",
    category: "E-Commerce",
    description: "A clean storefront with considered product discovery, responsive shopping, and a smooth checkout experience.",
    gradient: "from-rose-400 via-red-500 to-orange-500",
    image: "/projects/modern-fashion-store-cover.svg",
  },
  {
    id: 8,
    title: "Everyday Grocery Market",
    category: "E-Commerce",
    description: "A convenient online grocery shop built around easy browsing, clear categories, and quick repeat orders.",
    gradient: "from-lime-400 via-green-500 to-teal-700",
    image: "/projects/everyday-grocery-market-cover.svg",
  },
  {
    id: 9,
    title: "Beauty & Wellness Shop",
    category: "E-Commerce",
    description: "A refined product-led store that makes it easy to explore collections and choose the right essentials.",
    gradient: "from-pink-400 via-fuchsia-500 to-purple-700",
    image: "/projects/beauty-wellness-shop-cover.svg",
  },
  {
    id: 10,
    title: "Electronics Marketplace",
    category: "E-Commerce",
    description: "A scalable shop for technology products with helpful product details and a frictionless shopping path.",
    gradient: "from-blue-400 via-indigo-600 to-violet-800",
    image: "/projects/electronics-marketplace-cover.svg",
  },
  {
    id: 11,
    title: "Digital Newsroom",
    category: "News Portal",
    description: "A fast, organized publishing portal that makes headlines, topics, and timely stories easy to explore.",
    gradient: "from-slate-500 via-blue-700 to-slate-950",
    image: "/projects/digital-newsroom-cover.svg",
  },
  {
    id: 12,
    title: "Digital Marketing That Drives Results",
    category: "Marketing",
    description: "A complete growth campaign focused on more traffic, more leads, and more sales.",
    gradient: "from-yellow-400 via-amber-500 to-orange-600",
    image: "/projects/digital-marketing-cover.svg",
  },
  {
    id: 13,
    title: "Social Brand Launch",
    category: "Marketing",
    description: "A coordinated social content launch designed to introduce a brand and build a consistent online presence.",
    gradient: "from-pink-500 via-rose-500 to-orange-400",
    image: "/projects/social-brand-launch-cover.svg",
  },
  {
    id: 14,
    title: "Performance Ads Campaign",
    category: "Marketing",
    description: "A conversion-minded paid campaign with focused creative, audience targeting, and measurable objectives.",
    gradient: "from-violet-600 via-indigo-600 to-blue-500",
    image: "/projects/performance-ads-cover.svg",
  },
  {
    id: 15,
    title: "Content Growth Program",
    category: "Marketing",
    description: "A practical content plan that helps a business share useful ideas and connect with its target audience.",
    gradient: "from-teal-400 via-emerald-500 to-green-700",
    image: "/projects/content-growth-cover.svg",
  },
  {
    id: 16,
    title: "Local Business Marketing",
    category: "Marketing",
    description: "A local visibility campaign helping customers discover a business, understand its offer, and get in touch.",
    gradient: "from-orange-400 via-red-500 to-pink-600",
    image: "/projects/local-business-marketing-cover.svg",
  },
];

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const visibleProjects = PROJECTS.filter(
    (project) => activeCategory === "All" || project.category === activeCategory,
  );

  return (
    <div className="min-h-screen bg-[#f5f3ff]">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-indigo-600">
            Selected work
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Projects we&apos;re proud of
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Explore a selection of digital experiences and growth projects across the work we do.
          </p>
        </header>

        <div
          className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3"
          aria-label="Filter projects by category"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-3 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:px-5 ${
                  isActive
                    ? "border-indigo-600 bg-indigo-600 text-white shadow-[0_8px_18px_rgba(79,70,229,0.2)]"
                    : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mb-5 mt-7 flex items-center justify-between sm:mt-10">
          <h2 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
            {activeCategory === "All" ? "All projects" : `${activeCategory} projects`}
          </h2>
          <span className="rounded-full border border-indigo-100 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-500">
            {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
          </span>
        </div>

        <div
          aria-live="polite"
          className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_10px_30px_rgba(31,41,55,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_20px_42px_rgba(31,41,55,0.11)]"
            >
              <div className={`relative flex shrink-0 items-end overflow-hidden ${project.image ? "aspect-[3/2] justify-center bg-white p-0" : `h-52 bg-gradient-to-br ${project.gradient} p-5 sm:h-56`}`}>
                <img
                  src={project.image ?? CATEGORY_BANNERS[project.category]}
                  alt={project.image ? `${project.title} project cover` : ""}
                  aria-hidden={!project.image}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {!project.image && (
                  <>
                    <div className="absolute inset-0 bg-slate-950/10" />
                    <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full border-[22px] border-white/15 transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute right-10 top-8 h-20 w-20 rounded-full bg-white/10 blur-sm" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/5 to-transparent" />
                    <h3 className="relative max-w-[90%] text-2xl font-bold leading-tight tracking-tight text-white drop-shadow-md sm:text-[1.7rem]">
                      {project.title}
                    </h3>
                  </>
                )}
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <span className="w-fit rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                  {project.category}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

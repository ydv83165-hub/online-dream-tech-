"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import {
  PROJECT_CATEGORIES,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

type FilterCategory = "All" | ProjectCategory;

const FILTERS: FilterCategory[] = ["All", ...PROJECT_CATEGORIES];

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % FILTERS.length;
    if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + FILTERS.length) % FILTERS.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = FILTERS.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    setActiveCategory(FILTERS[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <>
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide"
      >
        {FILTERS.map((category, index) => (
          <button
            key={category}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            id={`project-filter-${index}`}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            aria-controls="project-results"
            tabIndex={activeCategory === category ? 0 : -1}
            onClick={() => setActiveCategory(category)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
            className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#021635] ${
              activeCategory === category
                ? "border-[#021635] bg-[#021635] text-white shadow-[0_8px_18px_rgba(2,22,53,0.16)]"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        id="project-results"
        role="tabpanel"
        aria-labelledby={`project-filter-${FILTERS.indexOf(activeCategory)}`}
        tabIndex={0}
        className="mt-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#021635]"
      >
        {visibleProjects.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 px-6 py-14 text-center">
            <h3 className="font-display text-2xl font-semibold text-slate-900">
              More work is on the way
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              There are no projects in this category yet. Choose another category to explore our sample work.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

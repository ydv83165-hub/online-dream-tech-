import type { Project } from "@/data/projects";

export function ProjectInfo({ project }: { project: Project }) {
  return (
    <section
      aria-labelledby="project-information-heading"
      className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_18px_44px_rgba(15,23,42,0.04)] sm:p-7"
    >
      <h2
        id="project-information-heading"
        className="font-display text-2xl font-semibold text-slate-900"
      >
        Project information
      </h2>
      <dl className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Industry
          </dt>
          <dd className="mt-1.5 text-sm font-semibold text-slate-900">{project.industry}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Duration
          </dt>
          <dd className="mt-1.5 text-sm font-semibold text-slate-900">{project.duration}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Year
          </dt>
          <dd className="mt-1.5 text-sm font-semibold text-slate-900">{project.year}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Technology
          </dt>
          <dd className="mt-1.5 flex flex-wrap gap-1.5">
            {project.techStack.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
              >
                {technology}
              </span>
            ))}
          </dd>
        </div>
      </dl>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#021635] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0a2854] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#021635]"
        >
          Visit live site
          <span aria-hidden="true" className="ml-2">↗</span>
        </a>
      )}
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/data/projects";

export function PortfolioGrid({
  projects,
  filters,
  id,
}: {
  projects: Project[];
  filters: string[];
  id: string;
}) {
  const [active, setActive] = useState(filters[0] ?? "All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active, projects],
  );

  return (
    <div>
      <div
        className="mt-10 flex flex-wrap items-center gap-2 border-y border-line py-4"
        role="tablist"
        aria-label={`Filter ${id} projects`}
      >
        {filters.map((filter) => {
          const isActive = filter === active;
          const count =
            filter === "All"
              ? projects.length
              : projects.filter((project) => project.category === filter).length;

          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(filter)}
              className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                isActive
                  ? "border-gold bg-gold text-ink"
                  : "border-line-strong text-paper-dim hover:border-gold/60 hover:text-paper"
              }`}
            >
              {filter}
              <span
                className={`text-[10px] ${
                  isActive ? "text-ink/60" : "text-muted-dim"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-4 font-sans text-[11px] uppercase tracking-[0.24em] text-muted-dim">
        Showing {visible.length} of {projects.length} concept projects
      </p>

      {visible.length === 0 ? (
        <p className="mt-10 text-muted">
          No projects in this category yet.
        </p>
      ) : (
        <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}

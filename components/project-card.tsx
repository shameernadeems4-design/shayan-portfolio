import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/tool-logos";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  priority = false,
  sizes = "(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 92vw",
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <article className="card group transition-transform duration-500 ease-out hover:-translate-y-1">
      <Link
        href={`/work/${project.slug}`}
        className="block rounded-sm focus-visible:outline-offset-4"
      >
        <div className="card-media relative aspect-4/3 overflow-hidden border border-line bg-surface transition-colors duration-500 group-hover:border-gold/50">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />

          <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/70 via-ink/5 to-transparent opacity-70" />

          <span className="absolute left-4 top-4 border border-paper/25 bg-ink/70 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.22em] text-paper backdrop-blur">
            {project.category}
          </span>

          <span className="absolute right-4 top-4 border border-gold/40 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.22em] text-gold backdrop-blur">
            Concept
          </span>

          <span className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center border border-paper/25 bg-ink/70 text-paper transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h3 className="font-display text-xl leading-snug text-paper sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.24em] text-muted-dim">
              {project.brand}
            </p>
          </div>
        </div>

        <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted">
          {project.tagline}
        </p>

        <span className="mt-5 inline-flex items-center gap-2 border-t border-line pt-4 font-sans text-[11px] uppercase tracking-[0.24em] text-muted-dim transition-colors duration-500 group-hover:text-gold">
          View project
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </article>
  );
}

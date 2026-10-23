import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@/components/tool-logos";
import { Reveal } from "@/components/reveal";
import { disciplines, getAdjacentProjects, getProject, projects } from "@/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} — ${project.brand}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${project.brand}`,
      description: project.summary,
      images: [{ url: project.cover.src }],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(project.slug);
  const category = disciplines[project.discipline];

  return (
    <main className="pt-[74px]">
      <article>
        <header className="relative overflow-hidden border-b border-line">
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute -right-32 top-0 h-[380px] w-[380px] rounded-full bg-gold/8 blur-[130px]" />

          <div className="shell relative py-16 sm:py-20">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.24em] text-muted-dim"
            >
              <Link href="/" className="transition-colors hover:text-gold">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href={`/#${category.id}-design`}
                className="transition-colors hover:text-gold"
              >
                {category.label}
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-paper-dim">{project.brand}</span>
            </nav>

            <Reveal>
              <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="border border-gold/40 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.22em] text-gold">
                      Concept project
                    </span>
                    <span className="border border-line-strong px-3 py-1 font-sans text-[10px] uppercase tracking-[0.22em] text-paper-dim">
                      {project.category}
                    </span>
                  </div>

                  <h1 className="mt-7 text-[clamp(2.2rem,5.2vw,4rem)] leading-[1.02] tracking-[-0.02em] text-paper">
                    {project.title}
                  </h1>
                  <p className="mt-4 font-sans text-[12px] uppercase tracking-[0.3em] text-gold">
                    {project.brand}
                  </p>
                </div>

                <p className="max-w-xl text-[16px] leading-relaxed text-muted">
                  {project.summary}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="shell relative pb-14">
            <Reveal delay={80}>
              <div className="relative aspect-16/10 overflow-hidden border border-line bg-surface paper-shadow">
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </header>

        <section className="border-b border-line py-16 sm:py-20">
          <div className="shell grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <Reveal>
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold">
                Overview
              </p>
              <div className="mt-8 space-y-6 border-t border-line pt-8">
                {project.overview.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[16px] leading-relaxed text-paper-dim"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 border border-gold/25 bg-gold/5 p-6">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold">
                  A note on this project
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-paper-dim">
                  {project.conceptNote}
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="border border-line bg-ink-soft p-7">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-dim">
                  Scope
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="border border-line-strong px-3 py-2 font-sans text-[11px] uppercase tracking-[0.14em] text-paper-dim"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-10 font-sans text-[10px] uppercase tracking-[0.3em] text-muted-dim">
                  Palette
                </p>
                <ul className="mt-6 space-y-3">
                  {project.palette.map((swatch) => (
                    <li
                      key={swatch.hex}
                      className="flex items-center justify-between gap-4 border-b border-line pb-3"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className="h-7 w-7 shrink-0 border border-line-strong"
                          style={{ backgroundColor: swatch.hex }}
                          aria-hidden="true"
                        />
                        <span className="text-[13px] text-paper-dim">
                          {swatch.name}
                        </span>
                      </span>
                      <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-muted-dim">
                        {swatch.hex}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-line py-16 sm:py-20">
          <div className="shell">
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold">
              Detail work
            </p>
            <div className="mt-8 grid gap-10">
              {project.gallery.map((image, index) => (
                <Reveal key={image.src} delay={index * 80}>
                  <figure>
                    <div className="relative aspect-16/10 overflow-hidden border border-line bg-surface">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 90vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    {image.caption ? (
                      <figcaption className="mt-4 font-sans text-[12px] uppercase tracking-[0.2em] text-muted-dim">
                        {image.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <nav
          aria-label="More projects"
          className="border-b border-line bg-ink-soft"
        >
          <div className="shell grid divide-line sm:grid-cols-2 sm:divide-x">
            {previous ? (
              <Link
                href={`/work/${previous.slug}`}
                className="group flex flex-col gap-3 border-b border-line py-10 sm:border-b-0 sm:pr-10"
              >
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-dim">
                  Previous project
                </span>
                <span className="font-display text-2xl text-paper transition-colors duration-300 group-hover:text-gold">
                  {previous.title}
                </span>
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-dim">
                  {previous.brand}
                </span>
              </Link>
            ) : (
              <span />
            )}

            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group flex flex-col gap-3 border-t border-line py-10 sm:border-t-0 sm:pl-10 sm:text-right"
              >
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-dim">
                  Next project
                </span>
                <span className="font-display text-2xl text-paper transition-colors duration-300 group-hover:text-gold">
                  {next.title}
                </span>
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-dim">
                  {next.brand}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </nav>

        <div className="shell flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/#graphic-design"
            className="inline-flex items-center gap-3 border border-line-strong px-6 py-3 font-sans text-[11px] uppercase tracking-[0.24em] text-paper transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            Back to all work
          </Link>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 bg-gold px-6 py-3 font-sans text-[11px] uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:bg-gold-soft"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </article>
    </main>
  );
}

import { PortfolioGrid } from "@/components/portfolio-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { disciplines, getProjectsByDiscipline, type Discipline } from "@/data/projects";

const COPY: Record<Discipline, { heading: string; description: string }> = {
  graphic: {
    heading: "Logos, identity systems and campaign graphics.",
    description:
      "Logo design, brand identities, packaging, editorial and advertising — each project built on one clear idea that can be repeated across a whole campaign without losing its edge.",
  },
  print: {
    heading: "Artwork prepared the way a press needs it.",
    description:
      "Stationery, packaging, labels and apparel branding. Everything is set up with correct bleed, safe areas and production in mind.",
  },
  web: {
    heading: "Layouts that carry the brand online.",
    description:
      "WordPress builds, landing pages, storefronts and responsive systems — structured so a design stays readable on every screen.",
  },
};

export function DisciplineSection({
  discipline,
  id,
  index,
  soft = false,
}: {
  discipline: Discipline;
  id: string;
  index: string;
  soft?: boolean;
}) {
  const meta = disciplines[discipline];
  const projects = getProjectsByDiscipline(discipline);
  const copy = COPY[discipline];

  return (
    <section
      id={id}
      className={`scroll-mt-24 border-b border-line py-20 sm:py-28 ${
        soft ? "bg-ink-soft" : ""
      }`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="shell">
        <Reveal>
          <SectionHeading
            index={index}
            eyebrow={meta.label}
            title={<span id={`${id}-heading`}>{copy.heading}</span>}
            description={copy.description}
          />
        </Reveal>

        <PortfolioGrid projects={projects} filters={meta.filters} id={id} />
      </div>
    </section>
  );
}

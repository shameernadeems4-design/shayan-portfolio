import { tools } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ToolLogo } from "@/components/tool-logos";

export function Tools() {
  return (
    <section
      className="border-b border-line bg-ink-soft py-20 sm:py-24"
      aria-labelledby="tools-heading"
    >
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="Tools & Skills"
              title={
                <span id="tools-heading">
                  Software I work in every day.
                </span>
              }
              description="A focused toolkit rather than a long list — enough to take a project from first sketch to print-ready artwork and a live website. Add or remove entries in data/site.ts."
            />
            <dl className="mt-10 grid max-w-sm grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8">
              <div>
                <dt className="font-sans text-[10px] uppercase tracking-[0.28em] text-muted-dim">
                  Digital
                </dt>
                <dd className="mt-2 text-[14px] text-paper-dim">
                  Social, ads, branding assets
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[10px] uppercase tracking-[0.28em] text-muted-dim">
                  Print
                </dt>
                <dd className="mt-2 text-[14px] text-paper-dim">
                  Cards, tags, labels, packaging
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[10px] uppercase tracking-[0.28em] text-muted-dim">
                  Web
                </dt>
                <dd className="mt-2 text-[14px] text-paper-dim">
                  WordPress &amp; layout design
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[10px] uppercase tracking-[0.28em] text-muted-dim">
                  Handoff
                </dt>
                <dd className="mt-2 text-[14px] text-paper-dim">
                  Bleed, crop marks, exports
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={100}>
            <ul className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3">
              {tools.map((tool) => (
                <li
                  key={tool.name}
                  className="group flex flex-col gap-6 bg-surface px-6 py-8 transition-colors duration-500 hover:bg-surface-2"
                >
                  <span className="flex h-11 w-11 items-center justify-center text-muted-dim">
                    <ToolLogo
                      icon={tool.icon}
                      className="h-9 w-9 transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </span>
                  <span className="mt-auto">
                    <span className="block font-sans text-[12px] uppercase tracking-[0.18em] text-paper">
                      {tool.name}
                    </span>
                    <span className="mt-2 block text-[12px] leading-relaxed text-muted-dim">
                      {tool.note}
                    </span>
                  </span>
                </li>
              ))}
              <li className="flex flex-col justify-center gap-3 bg-surface px-6 py-8">
                <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-gold">
                  Always learning
                </span>
                <span className="text-[12px] leading-relaxed text-muted-dim">
                  New tools are picked up as a project needs them.
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

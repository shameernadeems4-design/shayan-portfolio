import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { logos } from "@/data/site";

export function LogoGallery({ index = "04" }: { index?: string }) {
  return (
    <section
      id="logo-design"
      className="scroll-mt-24 border-b border-line bg-ink-soft py-20 sm:py-28"
      aria-labelledby="logo-design-heading"
    >
      <div className="shell">
        <Reveal>
          <SectionHeading
            index={index}
            eyebrow="Logo Design"
            title={
              <span id="logo-design-heading">
                Marks built to work everywhere.
              </span>
            }
            description="A selection of logo marks from self-initiated projects — each one drawn to stay legible from an app icon to a shopfront sign."
          />
        </Reveal>

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {logos.map((logo, i) => (
            <Reveal key={logo.name} delay={(i % 4) * 70} className="bg-paper">
              <article className="group relative aspect-4/3 overflow-hidden">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo presentation`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-gold/50"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-linear-to-t from-ink/90 to-transparent p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-lg leading-tight text-paper">
                    {logo.name}
                  </p>
                  <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.24em] text-gold">
                    {logo.category}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 font-sans text-[11px] uppercase tracking-[0.24em] text-muted-dim">
          Guidance, clear space and application sheets for these marks live in the
          Logo Design filter of the section above.
        </p>
      </div>
    </section>
  );
}

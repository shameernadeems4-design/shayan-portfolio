import Image from "next/image";
import { Check } from "lucide-react";
import { aboutCopy, strengths } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-line bg-paper py-20 text-ink-soft sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              tone="light"
              index="07"
              eyebrow="About me"
              title={<span id="about-heading">Design that holds up in the real world.</span>}
            />

            <div className="mt-10 space-y-6 border-t border-ink-soft/12 pt-10">
              {aboutCopy.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[16px] leading-relaxed text-ink-soft/75"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 border border-ink-soft/12 bg-white/60 p-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-deep">
                Working style
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-soft/70">
                Clear communication, honest timelines and artwork prepared the
                way the printer or the developer actually needs it — that is
                the part clients tend to remember.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-px border border-ink-soft/12 bg-ink-soft/12 sm:grid-cols-2">
              <div className="relative aspect-4/5 bg-ink-soft sm:row-span-2 sm:aspect-auto sm:min-h-[420px]">
                <Image
                  src="/images/studio-board.svg"
                  alt="Design studio arrangement of concept print pieces on a dark surface"
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="bg-paper p-8">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-ink-soft/50">
                  Strengths
                </p>
                <ul className="mt-6 space-y-4">
                  {strengths.map((strength) => (
                    <li
                      key={strength}
                      className="flex items-start gap-3 text-[14px] text-ink-soft/80"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-ink-soft p-8 text-paper">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold">
                  What I deliver
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-paper-dim">
                  Finished design files, print-ready artwork with correct setup,
                  and layouts that translate cleanly into a live website.
                </p>
                <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.24em] text-muted-dim">
                  Concept portfolio — projects shown are self-initiated.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

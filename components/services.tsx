import { Monitor, Printer, Sparkles, type LucideIcon } from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  printer: Printer,
  monitor: Monitor,
};

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-line py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Services"
            title={
              <span id="services-heading">
                Three ways I can help a brand look right.
              </span>
            }
            description="Whether the work ends up on a screen, on a shelf or on paper, the same discipline applies: a clear idea, a strong hierarchy and artwork that survives production."
          />
        </Reveal>

        <div className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon] ?? Sparkles;
            return (
              <Reveal
                key={service.title}
                delay={index * 100}
                className="group relative flex flex-col bg-ink-soft p-8 transition-colors duration-500 hover:bg-surface sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center border border-line-strong text-gold transition-colors duration-500 group-hover:border-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <span className="font-sans text-[11px] tracking-[0.3em] text-muted-dim">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 font-display text-2xl text-paper">
                  {service.title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-muted">
                  {service.copy}
                </p>

                <ul className="mt-8 space-y-3 border-t border-line pt-8">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-[14px] text-paper-dim"
                    >
                      <span className="h-px w-4 shrink-0 translate-y-[-4px] bg-gold/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

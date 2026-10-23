import Link from "next/link";
import { Monitor, Palette, Printer, type LucideIcon } from "lucide-react";
import { heroHighlights, site } from "@/data/site";
import { ArrowUpRight } from "@/components/tool-logos";
import { Reveal } from "@/components/reveal";

const ICONS: Record<string, LucideIcon> = {
  palette: Palette,
  printer: Printer,
  monitor: Monitor,
};

export function Hero() {
  return (
    <section
      id="home"
      className="grain relative overflow-hidden border-b border-line pt-[74px]"
      aria-labelledby="hero-title"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-gold-deep/10 blur-[120px]" />

      <div className="shell relative grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-28">
        <div>
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-gold">
                Hello, I&apos;m
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="mt-7 text-[clamp(2.75rem,7vw,5.6rem)] leading-[0.95] tracking-[-0.03em] text-paper"
            >
              Shayan
              <span className="block text-gold">Nadeem</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-7 font-sans text-[13px] uppercase tracking-[0.3em] text-paper-dim">
              Graphic Designer &amp; Printing Designer
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
              {site.shortIntro}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#graphic-design"
                className="group inline-flex items-center gap-3 bg-gold px-7 py-4 font-sans text-[12px] uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:bg-gold-soft"
              >
                View my work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 border border-line-strong px-7 py-4 font-sans text-[12px] uppercase tracking-[0.24em] text-paper transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                Contact me
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-8 font-sans text-[12px] tracking-wide text-muted-dim">
              {site.availabilityNote}
            </p>
          </Reveal>
        </div>

        <Reveal delay={180} className="relative">
          <HeroComposition />
        </Reveal>
      </div>

      <div className="shell relative border-t border-line">
        <ul className="grid divide-line sm:grid-cols-3 sm:divide-x">
          {heroHighlights.map((item) => {
            const Icon = ICONS[item.icon] ?? Palette;
            return (
              <li
                key={item.title}
                className="group flex gap-5 border-b border-line py-8 sm:border-b-0 sm:px-8 sm:first:pl-0 sm:last:pr-0"
              >
                <Icon
                  className="mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-500 group-hover:-translate-y-0.5"
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-sans text-[12px] uppercase tracking-[0.24em] text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    {item.copy}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/**
 * Abstract typographic composition used in place of a portrait —
 * no fabricated photo of the designer.
 */
function HeroComposition() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative aspect-4/5 overflow-hidden border border-line bg-ink-soft paper-shadow">
        <div className="grid-lines absolute inset-0 opacity-60" />

        <div className="absolute inset-0 bg-linear-to-br from-surface/80 via-ink-soft to-ink" />

        <svg
          viewBox="0 0 400 500"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <circle
            cx="290"
            cy="120"
            r="150"
            fill="none"
            stroke="#e4b95f"
            strokeOpacity="0.35"
          />
          <circle
            cx="120"
            cy="400"
            r="190"
            fill="none"
            stroke="#e4b95f"
            strokeOpacity="0.18"
          />
          <circle
            cx="290"
            cy="120"
            r="96"
            fill="none"
            stroke="#e4b95f"
            strokeOpacity="0.5"
            strokeDasharray="4 8"
          />
          <path
            d="M40 340 L360 340"
            stroke="#e4b95f"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          <path
            d="M40 356 L200 356"
            stroke="#e4b95f"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
        </svg>

        <div className="absolute left-8 top-8 flex items-center gap-3">
          <span className="h-px w-8 bg-gold" />
          <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-gold">
            Portfolio 2026
          </span>
        </div>

        <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 text-center">
          <p className="font-display text-[clamp(4rem,13vw,7rem)] leading-none text-paper">
            SN
          </p>
          <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.42em] text-paper-dim">
            Shayan Nadeem
          </p>
          <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.3em] text-muted-dim">
            Graphic · Print · Web
          </p>
        </div>

        <div className="absolute inset-x-8 bottom-8 flex items-end justify-between border-t border-line pt-5">
          <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-muted-dim">
            Est. concept portfolio
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-gold">
            Available for work
          </span>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 hidden border border-line bg-ink/90 px-5 py-4 backdrop-blur sm:block">
        <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-muted-dim">
          Print production
        </p>
        <p className="mt-1 font-display text-lg text-paper">Bleed ready</p>
      </div>

      <div className="absolute -right-4 top-10 hidden border border-gold/40 bg-ink/90 px-5 py-4 backdrop-blur sm:block">
        <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-gold">
          Also building
        </p>
        <p className="mt-1 font-display text-lg text-paper">WordPress sites</p>
      </div>
    </div>
  );
}

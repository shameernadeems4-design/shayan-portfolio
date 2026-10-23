import type { ReactNode } from "react";

type MarqueeProps = {
  items: readonly string[];
  /** Small tilt in degrees — gives the band an editorial, printed feel. */
  rotate?: number;
  className?: string;
};

function Row({ items }: { items: readonly string[] }) {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-8 font-display text-[clamp(1.5rem,3.2vw,2.6rem)] leading-none text-paper/80">
            {item}
          </span>
          <span aria-hidden="true" className="text-[0.7em] text-gold">
            &#9670;
          </span>
        </span>
      ))}
    </div>
  );
}

/**
 * Decorative infinite marquee band. Motion is disabled automatically for
 * users who prefer reduced motion (see app/globals.css).
 */
export function Marquee({ items, rotate = 0, className = "" }: MarqueeProps): ReactNode {
  return (
    <div className={`relative overflow-hidden py-10 ${className}`}>
      <div
        className="-mx-16 border-y border-line bg-ink-soft py-6"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]" aria-hidden="true">
          <Row items={items} />
          <Row items={items} />
        </div>
      </div>
    </div>
  );
}

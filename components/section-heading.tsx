import type { ReactNode } from "react";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";

  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      <div
        className={`flex items-center gap-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {index ? (
          <span
            className={`font-sans text-[11px] tracking-[0.35em] ${
              isLight ? "text-gold-deep" : "text-gold"
            }`}
          >
            {index}
          </span>
        ) : null}
        <span
          className={`h-px w-10 ${isLight ? "bg-gold-deep/50" : "bg-gold/50"}`}
        />
        <span
          className={`font-sans text-[11px] uppercase tracking-[0.35em] ${
            isLight ? "text-ink-soft/60" : "text-paper-dim/70"
          }`}
        >
          {eyebrow}
        </span>
      </div>

      <h2
        className={`mt-6 text-balance text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.04] ${
          isLight ? "text-ink-soft" : "text-paper"
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-5 text-[15px] leading-relaxed sm:text-base ${
            isLight ? "text-ink-soft/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

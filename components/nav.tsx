"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/data/site";

const SECTION_IDS = navItems.map((item) => item.href.replace("#", ""));

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome || typeof IntersectionObserver === "undefined") return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-line bg-ink/88 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:font-sans focus:text-xs focus:tracking-widest focus:text-ink"
      >
        Skip to content
      </a>

      <div className="shell flex h-[74px] items-center justify-between gap-6">
        <Link
          href={isHome ? "#home" : "/"}
          className="group flex items-center gap-3"
          aria-label={`${site.name} — home`}
        >
          <span className="flex h-9 w-9 items-center justify-center border border-gold/50 font-display text-[13px] tracking-tight text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
            SN
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[17px] tracking-tight text-paper">
              {site.name}
            </span>
            <span className="mt-1 font-sans text-[9px] uppercase tracking-[0.28em] text-muted-dim">
              Design Studio
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = isHome && active === id;
            return (
              <Link
                key={item.href}
                href={hrefFor(item.href)}
                aria-current={isActive ? "true" : undefined}
                className={`relative px-3 py-2 font-sans text-[12px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive
                    ? "text-gold"
                    : "text-paper-dim hover:text-paper"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-px h-px bg-gold transition-transform duration-500 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 border border-gold/60 px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
          >
            Hire me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center border border-line-strong text-paper transition-colors duration-300 hover:border-gold hover:text-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-ink/98 backdrop-blur-xl lg:hidden"
      >
        <nav aria-label="Mobile" className="shell flex flex-col py-4">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={hrefFor(item.href)}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-line/70 py-4 font-display text-2xl text-paper transition-colors duration-300 hover:text-gold"
            >
              {item.label}
              <span className="font-sans text-[10px] tracking-[0.3em] text-muted-dim">
                0{index + 1}
              </span>
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center border border-gold bg-gold px-5 py-3 font-sans text-[11px] uppercase tracking-[0.24em] text-ink"
          >
            Email me
          </a>
        </nav>
      </div>
    </header>
  );
}

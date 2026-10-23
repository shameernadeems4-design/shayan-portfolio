import Link from "next/link";
import { ArrowUpRight } from "@/components/tool-logos";
import { navItems, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = site.socials.filter((social) => social.href.length > 0);

  return (
    <footer className="border-t border-line bg-ink py-14">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-gold/50 font-display text-[13px] text-gold">
                SN
              </span>
              <span className="font-display text-lg text-paper">
                {site.name}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-muted">
              {site.title}. Building thoughtful visual work for brands and
              businesses across digital and print media.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="link-underline mt-6 inline-block font-sans text-[12px] uppercase tracking-[0.2em] text-gold"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer" className="text-[14px]">
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-dim">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper-dim transition-colors duration-300 hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-[14px]">
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-dim">
              Elsewhere
            </p>
            {socials.length > 0 ? (
              <ul className="mt-5 space-y-3">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 text-paper-dim transition-colors duration-300 hover:text-gold"
                    >
                      {social.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 leading-relaxed text-muted-dim">
                Social links are not published yet. Add your LinkedIn or Behance
                URLs in{" "}
                <span className="text-paper-dim">data/site.ts</span> to show
                them here.
              </p>
            )}

            <a
              href="#home"
              className="mt-8 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.22em] text-paper-dim transition-colors duration-300 hover:text-gold"
            >
              Back to top
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[11px] tracking-[0.18em] text-muted-dim">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-sans text-[11px] tracking-[0.18em] text-muted-dim">
            {site.locationNote}
          </p>
        </div>
      </div>
    </footer>
  );
}

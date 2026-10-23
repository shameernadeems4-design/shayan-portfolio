/**
 * Site-wide content. Everything in this file is safe to edit.
 * Replace the placeholder email / social links with your real ones —
 * nothing here is invented on your behalf.
 */

export const site = {
  name: "Shayan Nadeem",
  title: "Graphic Designer & Printing Designer",
  shortIntro:
    "I design brand graphics, advertising creatives and printed collateral — and build the websites that carry them.",

  /**
   * PLACEHOLDER. Replace with your real address before going live.
   * It is intentionally an obvious placeholder so it is never mistaken
   * for a working inbox.
   */
  email: "shameernadeem@gmail.com",

  /**
   * Optional links. Leave the value as an empty string to hide the link
   * everywhere on the site (no dead buttons are rendered).
   */
  socials: [
    { label: "LinkedIn", href: "", handle: "" },
    { label: "Behance", href: "", handle: "" },
    { label: "Instagram", href: "", handle: "" },
  ],

  locationNote: "Available for remote work, freelance projects and full-time roles.",
  availabilityNote: "Open to international recruiters, remote roles and freelance briefs.",
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Graphic Design", href: "#graphic-design" },
  { label: "Print Design", href: "#print-design" },
  { label: "Web Design", href: "#web-design" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroHighlights = [
  {
    icon: "palette" as const,
    title: "Graphic Design",
    copy: "Social creatives, advertising, brand graphics and campaign artwork.",
  },
  {
    icon: "printer" as const,
    title: "Print Design",
    copy: "Production-ready artwork for cards, tags, labels and packaging.",
  },
  {
    icon: "monitor" as const,
    title: "Web Design",
    copy: "WordPress websites, page layouts and responsive web design.",
  },
];

export const services = [
  {
    icon: "sparkles" as const,
    title: "Creative Design",
    copy: "Scroll-stopping creative work built around a clear message and a strong visual idea.",
    items: [
      "Social media posts",
      "Advertisements",
      "Banners",
      "Branding assets",
    ],
  },
  {
    icon: "printer" as const,
    title: "High-Quality Print Design",
    copy: "Artwork prepared the way a press needs it — clean setup, correct bleed, production thinking.",
    items: [
      "Business cards",
      "Hangtags",
      "Packaging",
      "Labels and promotional materials",
    ],
  },
  {
    icon: "monitor" as const,
    title: "Web Design",
    copy: "Clean, structured web layouts that stay readable and consistent on every screen size.",
    items: [
      "WordPress websites",
      "Website layouts",
      "Landing page design",
    ],
  },
] as const;

/**
 * Tools & skills. `icon` maps to an SVG logo component in
 * components/tool-logos.tsx — add or remove entries freely.
 */
export const tools = [
  { name: "Adobe Photoshop", icon: "photoshop" as const, note: "Image editing & compositing" },
  { name: "Adobe Illustrator", icon: "illustrator" as const, note: "Logo & vector artwork" },
  { name: "Adobe InDesign", icon: "indesign" as const, note: "Editorial & print layout" },
  { name: "Canva", icon: "canva" as const, note: "Fast social & marketing design" },
  { name: "WordPress", icon: "wordpress" as const, note: "Website builds & content" },
  { name: "HTML5", icon: "html5" as const, note: "Semantic markup & structure" },
  { name: "CSS3", icon: "css3" as const, note: "Styling, layout & motion" },
  { name: "Figma", icon: "figma" as const, note: "UI layout & design systems" },
] as const;

/**
 * Selected logo marks shown in the Logo Design gallery.
 * Each `src` points to a presentation SVG in /public/logos.
 */
export const logos = [
  { name: "Halo & Co", category: "Luxury · Monogram", src: "/logos/halo-co.svg" },
  { name: "Northline", category: "Logistics · Compass", src: "/logos/northline.svg" },
  { name: "Lumen", category: "Energy · Light", src: "/logos/lumen.svg" },
  { name: "Cobalt Studio", category: "Studio · Interlocking", src: "/logos/cobalt.svg" },
  { name: "Foundry Supply", category: "Industrial · Monogram", src: "/logos/foundry.svg" },
  { name: "Bloom Atelier", category: "Beauty · Botanical", src: "/logos/bloom.svg" },
  { name: "Kite Labs", category: "Technology · Node", src: "/logos/kite-labs.svg" },
  { name: "Terra Forma", category: "Landscape · Organic", src: "/logos/terra-forma.svg" },
] as const;

export const strengths = [
  "Attention to detail",
  "Creative thinking",
  "Visual communication",
  "Print-focused design",
  "Willingness to learn",
] as const;

export const aboutCopy = [
  "I'm Shayan Nadeem, a graphic and print designer with an interest in creating thoughtful visual experiences for brands and businesses. My work focuses on clear communication, creative presentation, and designs that work across digital and printed media.",
  "I also have experience with WordPress websites and web layouts, which means a single visual idea can move from a social post to a printed piece to a live website without losing its character.",
] as const;

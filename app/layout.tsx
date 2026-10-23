import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { site } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Portfolio of Shayan Nadeem, a graphic designer and printing designer working across advertising, print production and web layout design.",
  keywords: [
    "graphic designer",
    "printing designer",
    "print design",
    "packaging design",
    "social media design",
    "WordPress designer",
    "web design portfolio",
    "Shayan Nadeem",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — ${site.title}`,
    description:
      "Graphic design, print production and web layout work by Shayan Nadeem.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description:
      "Graphic design, print production and web layout work by Shayan Nadeem.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${fraunces.variable}`}
    >
      <body className="min-h-dvh bg-ink font-sans text-paper antialiased">
        <Nav />
        <div id="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

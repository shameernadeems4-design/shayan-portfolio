import { Hero } from "@/components/hero";
import { Tools } from "@/components/tools";
import { Services } from "@/components/services";
import { Marquee } from "@/components/marquee";
import { LogoGallery } from "@/components/logo-gallery";
import { DisciplineSection } from "@/components/discipline-section";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Tools />
      <Services />
      <Marquee
        items={[
          "Logo Design",
          "Brand Identity",
          "Packaging",
          "Social Media",
          "Posters & Advertising",
          "Typography & Editorial",
        ]}
        rotate={-2}
      />
      <DisciplineSection discipline="graphic" id="graphic-design" index="03" />
      <LogoGallery index="04" />
      <DisciplineSection discipline="print" id="print-design" index="05" />
      <DisciplineSection discipline="web" id="web-design" index="06" soft />
      <Marquee
        items={[
          "Self-Initiated Concepts",
          "Print-Ready Artwork",
          "Brand Systems",
          "WordPress Builds",
          "Available for Freelance",
        ]}
        rotate={2}
      />
      <About />
      <Contact />
    </main>
  );
}

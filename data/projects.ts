export type Discipline = "graphic" | "print" | "web";

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  brand: string;
  /** Short category label used by the filters in each portfolio section. */
  category: string;
  discipline: Discipline;
  tagline: string;
  summary: string;
  overview: string[];
  scope: string[];
  palette: { hex: string; name: string }[];
  cover: ProjectImage;
  gallery: ProjectImage[];
  /** Every entry in this portfolio is a self-initiated concept. */
  concept: true;
  conceptNote: string;
};

const A = (hex: string, name: string) => ({ hex, name });

export const projects: Project[] = [
  /* ------------------------------------------------------------------
     GRAPHIC DESIGN
  ------------------------------------------------------------------ */
  {
    slug: "nova-roast-coffee-launch",
    title: "Coffee Shop Launch Campaign",
    brand: "Nova Roast",
    category: "Social Media Design",
    discipline: "graphic",
    tagline: "A warm, appetite-first launch campaign for a neighbourhood roastery.",
    summary:
      "A launch set for a speciality coffee bar — feed posts, story formats and a promotional poster built on one reusable key visual.",
    overview: [
      "The concept leans on a single idea that can be repeated across a whole launch month: a warm cream field, a near-black wordmark and the cup as the hero object. Keeping the layout system this simple means new posts can be produced quickly without the feed losing consistency.",
      "The type pairing mixes a high-contrast serif for appetite-led headlines with a tight sans for practical information such as opening times and the launch offer.",
    ],
    scope: ["Key visual", "Feed posts", "Story format", "Promotional poster"],
    palette: [
      A("#0f0d0b", "Espresso"),
      A("#f3ece1", "Oat cream"),
      A("#c98a4b", "Caramel"),
      A("#e4b95f", "Golden"),
    ],
    cover: {
      src: "/projects/graphic/nova-roast-cover.svg",
      width: 1200,
      height: 900,
      alt: "Coffee launch key visual with a cup, cream background and gold accents",
    },
    gallery: [
      {
        src: "/projects/graphic/nova-roast-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Story-format layout with the launch offer",
        alt: "Vertical social story layout for a coffee shop launch offer",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Nova Roast is a fictional brand created to demonstrate art direction and layout, not a commissioned client.",
  },
  {
    slug: "halcyon-skincare-social",
    title: "Social Media Campaign",
    brand: "Halcyon Skincare",
    category: "Social Media Design",
    discipline: "graphic",
    tagline: "A calm, clinical-clean campaign system for a skincare range.",
    summary:
      "A restrained social campaign that sells a routine rather than a product — soft light, quiet type and generous negative space.",
    overview: [
      "Skincare advertising usually shouts. This concept does the opposite: a soft neutral field, one crisp product silhouette and a single line of copy. The restraint is the brand promise.",
      "The system covers a hero announcement post, a three-step routine carousel and a testimonial frame, all built from the same grid so the set reads as one campaign.",
    ],
    scope: ["Campaign system", "Carousel design", "Announcement post", "Ad variations"],
    palette: [
      A("#eae4dc", "Soft clay"),
      A("#f6f4f0", "Linen"),
      A("#8b9e8f", "Sage"),
      A("#1b1b1b", "Ink"),
    ],
    cover: {
      src: "/projects/graphic/halcyon-cover.svg",
      width: 1200,
      height: 900,
      alt: "Minimal skincare social campaign layout in soft neutral tones",
    },
    gallery: [
      {
        src: "/projects/graphic/halcyon-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Routine carousel — three consistent frames",
        alt: "Three-frame carousel design showing a skincare routine",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Halcyon is a fictional skincare label used to explore a quiet, editorial advertising approach.",
  },
  {
    slug: "atlas-streetwear-campaign",
    title: "Clothing Brand Campaign",
    brand: "Atlas Streetwear",
    category: "Posters & Advertising",
    discipline: "graphic",
    tagline: "Bold, high-contrast campaign artwork for a streetwear drop.",
    summary:
      "A drop campaign built on heavy type, halftone texture and a single accent colour that carries across every asset.",
    overview: [
      "Streetwear campaigns need to feel like a poster torn off a wall, not a gradient card. This concept uses an oversized condensed headline, a wide letter-spaced kicker and a printed halftone texture to give the digital artwork a physical feel.",
      "Assets were designed as a family: announcement poster, product callout, countdown story and a size-chart frame that keeps the same visual weight.",
    ],
    scope: ["Drop campaign", "Poster series", "Product callouts", "Story animation frames"],
    palette: [
      A("#0a0a0a", "Pitch"),
      A("#f2f2f0", "Bone"),
      A("#d8452e", "Signal red"),
      A("#8a8a86", "Concrete"),
    ],
    cover: {
      src: "/projects/graphic/atlas-cover.svg",
      width: 1200,
      height: 900,
      alt: "High-contrast streetwear campaign poster with oversized typography",
    },
    gallery: [
      {
        src: "/projects/graphic/atlas-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Product callout frame with size information",
        alt: "Streetwear product callout graphic with size details",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Atlas is a fictional label; the artwork explores campaign typography and print-inspired texture.",
  },
  {
    slug: "pulse-athletic-fitness-ad",
    title: "Fitness Advertisement",
    brand: "Pulse Athletic",
    category: "Posters & Advertising",
    discipline: "graphic",
    tagline: "Kinetic advertising for a gym membership drive.",
    summary:
      "A membership campaign where motion, repetition and a single electric accent do the persuading.",
    overview: [
      "Fitness advertising works best when it looks like effort. The concept uses diagonal bands, repeated numerals and a heavy display weight to create a sense of movement in a static frame.",
      "Because the artwork is typographic rather than photographic, it stays sharp in every placement — from a small display banner to a large poster.",
    ],
    scope: ["Membership campaign", "Display banners", "Offer cards", "Class schedule layout"],
    palette: [
      A("#111214", "Carbon"),
      A("#f5f2ea", "Chalk"),
      A("#c6f24e", "Volt"),
      A("#4a4d52", "Steel"),
    ],
    cover: {
      src: "/projects/graphic/pulse-cover.svg",
      width: 1200,
      height: 900,
      alt: "Energetic fitness advertisement design with diagonal bands and bold numerals",
    },
    gallery: [
      {
        src: "/projects/graphic/pulse-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Offer card and class schedule layout",
        alt: "Fitness membership offer card and class schedule design",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Pulse Athletic is a fictional gym brand created for this advertising study.",
  },
  {
    slug: "wanderline-travel-promo",
    title: "Travel Promotion",
    brand: "Wanderline",
    category: "Posters & Advertising",
    discipline: "graphic",
    tagline: "Editorial travel promotion that sells the feeling of a place.",
    summary:
      "A promotional series that treats a destination like a magazine spread — big landscape shapes, small practical type.",
    overview: [
      "Travel advertising is usually a photograph with a price stuck on top. This concept flattens the landscape into layered shapes so the composition still works without photography, then adds the practical detail in a tight, small sans.",
      "The series covers three destinations using the same structure and a different horizon line for each, which lets the campaign scale without extra design work.",
    ],
    scope: ["Destination series", "Promotional layout", "Social adaptations", "Print insert"],
    palette: [
      A("#0d1b2a", "Deep navy"),
      A("#f4efe6", "Sand"),
      A("#e0754b", "Sunset"),
      A("#5c8a8a", "Sea mist"),
    ],
    cover: {
      src: "/projects/graphic/wanderline-cover.svg",
      width: 1200,
      height: 900,
      alt: "Layered landscape illustration for a travel promotion",
    },
    gallery: [
      {
        src: "/projects/graphic/wanderline-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Destination variant using the same layout system",
        alt: "Second travel destination layout with layered horizon shapes",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Wanderline is a fictional travel brand used to explore editorial promotional design.",
  },
  {
    slug: "maison-verte-identity",
    title: "Brand Identity",
    brand: "Maison Verte",
    category: "Brand Identity",
    discipline: "graphic",
    tagline: "A quiet identity system for a plant-led interior studio.",
    summary:
      "A full identity concept: monogram, wordmark, type system, colour and application across digital and print touchpoints.",
    overview: [
      "The identity is built around a simple geometric monogram that reads as both a leaf and an arch — a shape that scales from a favicon to a shopfront without redrawing.",
      "Supporting elements stay deliberately plain: one deep green, one warm stone paper tone, a serif wordmark and a measured sans for everything functional. The result feels established rather than decorative.",
    ],
    scope: ["Logo & monogram", "Type system", "Colour system", "Identity applications"],
    palette: [
      A("#16281f", "Deep green"),
      A("#e9e3d7", "Stone"),
      A("#5c7a63", "Moss"),
      A("#c9a227", "Brass"),
    ],
    cover: {
      src: "/projects/graphic/maison-verte-cover.svg",
      width: 1200,
      height: 900,
      alt: "Brand identity presentation with geometric leaf monogram and green palette",
    },
    gallery: [
      {
        src: "/projects/graphic/maison-verte-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Identity applications across paper and screen",
        alt: "Brand identity applications including card, sign and digital layout",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Maison Verte is a fictional studio created to demonstrate identity thinking.",
  },
  {
    slug: "halo-brand-identity",
    title: "Luxury Brand Identity",
    brand: "Halo & Co",
    category: "Brand Identity",
    discipline: "graphic",
    tagline: "A poised identity system for a modern luxury jewellery house.",
    summary:
      "A full identity presentation — monogram lockup, colour and type system, stationery and application mockups.",
    overview: [
      "Halo & Co needed a mark that felt precious without turning ornate. The answer is a circular monogram built from two interlocking arcs: a halo at large sizes, a simple initial when it has to work small.",
      "The system pairs a high-contrast serif wordmark with a quiet sans for functional text, and holds the whole identity to two accents — warm gold and deep ink — on an ivory paper stock.",
    ],
    scope: ["Logo & monogram", "Type system", "Colour system", "Stationery & applications"],
    palette: [
      A("#1a1712", "Ink"),
      A("#f4efe3", "Ivory"),
      A("#e4b95f", "Gold"),
      A("#8a7f66", "Stone"),
    ],
    cover: {
      src: "/projects/graphic/halo-identity-cover.svg",
      width: 1200,
      height: 900,
      alt: "Luxury brand identity board with monogram, palette, typography and cards",
    },
    gallery: [
      {
        src: "/projects/graphic/halo-identity-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Applications — signage, letterhead and collateral",
        alt: "Brand identity applications including signage, letterhead and packaging",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Halo & Co is a fictional house created to demonstrate luxury identity thinking.",
  },
  {
    slug: "terra-brand-identity",
    title: "Landscape Studio Identity",
    brand: "Terra Forma",
    category: "Brand Identity",
    discipline: "graphic",
    tagline: "An organic identity system for a regenerative landscape practice.",
    summary:
      "An identity concept built on a drawn landscape mark, an earthy palette and a durable type system for print and signage.",
    overview: [
      "Terra Forma works outdoors, so the identity had to feel grounded and material rather than digital. The mark draws a horizon and a rising form inside a single circle — readable as a sunrise, a field and a seed.",
      "The supporting system stays natural: olive black, clay and field green on a warm sand paper tone, with a serif for the voice and a grotesque for practical detail.",
    ],
    scope: ["Brand mark", "Colour system", "Stationery", "Signage & applications"],
    palette: [
      A("#33402b", "Olive black"),
      A("#c2703f", "Clay"),
      A("#4d5b3f", "Field green"),
      A("#e3d9c6", "Sand"),
    ],
    cover: {
      src: "/projects/graphic/terra-identity-cover.svg",
      width: 1200,
      height: 900,
      alt: "Brand identity board with a circular landscape mark, palette, typography and cards",
    },
    gallery: [
      {
        src: "/projects/graphic/terra-identity-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Applications — signage, packaging and label detail",
        alt: "Brand identity applications including site signage, packaging and product label",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Terra Forma is a fictional practice created to explore organic identity design.",
  },
  {
    slug: "bloom-packaging-design",
    title: "Skincare Packaging System",
    brand: "Bloom Atelier",
    category: "Packaging Design",
    discipline: "graphic",
    tagline: "A calm, botanical packaging system for a skincare range.",
    summary:
      "A packaging concept spanning bottle, carton and jar — one layout system, three formats and a single radial petal mark.",
    overview: [
      "Packaging for skincare has to read as a family on a shelf while giving each product its own role. This concept keeps one grid, one mark and one label lockup, then lets the colour of each format carry the difference.",
      "The presentation shows the range assembled, the label lockup at true size and a short material and finish specification so the design reads as production-ready rather than decorative.",
    ],
    scope: ["Packaging system", "Label lockup", "Range variants", "Material & finish spec"],
    palette: [
      A("#647d5f", "Sage"),
      A("#3f4a38", "Forest"),
      A("#d9a7a0", "Blush"),
      A("#f6f1ec", "Linen"),
    ],
    cover: {
      src: "/projects/graphic/bloom-packaging-cover.svg",
      width: 1200,
      height: 900,
      alt: "Skincare packaging system with bottle, carton and jar arranged on a shelf",
    },
    gallery: [
      {
        src: "/projects/graphic/bloom-packaging-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Label detail, range variants and colour specification",
        alt: "Packaging label detail with three range variants and a colour specification",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Bloom Atelier is a fictional skincare label created for this packaging study.",
  },
  {
    slug: "meridian-editorial-spread",
    title: "Editorial Spread Design",
    brand: "Meridian Review",
    category: "Typography & Editorial Design",
    discipline: "graphic",
    tagline: "An editorial double-page spread built on a strict type and grid system.",
    summary:
      "A magazine spread concept exploring hierarchy, a hard baseline grid and a restrained gold accent across a feature and a contents page.",
    overview: [
      "Editorial design lives or dies on hierarchy. This spread sets a large italic display line against small, tight body columns so the reader always knows where to enter the page.",
      "The second spread exposes the working parts — a six-column grid, margin and baseline values and a typographic scale — which is the layer that keeps a publication consistent issue after issue.",
    ],
    scope: ["Feature spread", "Contents page", "Grid & type scale", "Hierarchy study"],
    palette: [
      A("#111318", "Obsidian"),
      A("#fbfaf7", "Paper"),
      A("#b1822c", "Gold"),
      A("#8f8b83", "Muted"),
    ],
    cover: {
      src: "/projects/graphic/meridian-editorial-cover.svg",
      width: 1200,
      height: 900,
      alt: "Editorial double-page spread with a large headline, body columns and an image block",
    },
    gallery: [
      {
        src: "/projects/graphic/meridian-editorial-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Contents page, grid and typographic hierarchy",
        alt: "Editorial contents page shown over a baseline grid and typographic scale",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Meridian Review is a fictional publication created for this editorial study.",
  },
  {
    slug: "northline-logo-design",
    title: "Logo Construction & Variations",
    brand: "Northline",
    category: "Logo Design",
    discipline: "graphic",
    tagline: "A geometric compass mark delivered as a full construction system.",
    summary:
      "A logo concept presented as a construction sheet — geometry guides, clear space, colour specification and a family of lockups.",
    overview: [
      "A logo is only as useful as its system. This concept draws the mark on a circle and a rotated square, so every angle and proportion can be rebuilt exactly at any size.",
      "The sheet also documents one-colour, knockout and lockup variations alongside clear space and minimum sizes, so the identity holds together from a favicon to a sign.",
    ],
    scope: ["Primary mark", "Construction & guides", "Lockups & variations", "Clear space & colour"],
    palette: [
      A("#16233a", "Navy"),
      A("#c0562c", "Signal"),
      A("#eef1f6", "Mist"),
      A("#f5f2ea", "Paper"),
    ],
    cover: {
      src: "/logos/northline.svg",
      width: 1200,
      height: 900,
      alt: "Northline geometric compass logo presented as a clean identity mark",
    },
    gallery: [
      {
        src: "/projects/graphic/northline-logo-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Construction grid, variations, clear space and colour",
        alt: "Logo construction sheet showing geometry guides, variations and clear space",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Northline is a fictional brand created to demonstrate logo construction.",
  },
  {
    slug: "cobalt-logo-design",
    title: "Logo Design & Applications",
    brand: "Cobalt Studio",
    category: "Logo Design",
    discipline: "graphic",
    tagline: "A modern interlocking mark shown across icon, print, signage and merchandise.",
    summary:
      "A logo concept built from two interlocking forms, presented as an app icon, business card, signage and a merchandise set.",
    overview: [
      "The mark is drawn from two forms that lock together without touching, which gives it a precise, engineered feel that suits a studio brand.",
      "Presenting the logo across an app icon, stationery, environmental signage and apparel shows the same idea surviving every context — the real test of a mark.",
    ],
    scope: ["Primary mark", "App icon & favicon", "Stationery", "Signage & merchandise"],
    palette: [
      A("#2a4bd7", "Cobalt"),
      A("#0d0d12", "Ink"),
      A("#eef1fd", "Cloud"),
      A("#f5f2ea", "Paper"),
    ],
    cover: {
      src: "/logos/cobalt.svg",
      width: 1200,
      height: 900,
      alt: "Cobalt Studio interlocking logo presented as a clean identity mark",
    },
    gallery: [
      {
        src: "/projects/graphic/cobalt-logo-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "App icon, stationery, signage and merchandise",
        alt: "Logo applications including app icon, business card, signage and merchandise",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Cobalt Studio is a fictional brand created to demonstrate logo applications.",
  },

  /* ------------------------------------------------------------------
     PRINT DESIGN
  ------------------------------------------------------------------ */
  {
    slug: "meridian-business-card",
    title: "Premium Business Card",
    brand: "Meridian",
    category: "Stationery",
    discipline: "print",
    tagline: "A heavy-weight card with blind-relief geometry and a single gold rule.",
    summary:
      "A business card concept built for a consulting practice: restrained type, deep impression, generous margins.",
    overview: [
      "The card is designed for a 600gsm duplexed stock. The front carries only the monogram and the gold hairline; everything practical sits on the reverse so the first impression stays clean.",
      "Artwork was set up with 3mm bleed, crop marks and a clear safe area, exactly as supplied to a press. Type is held well inside the trim so the deep impression never interferes with legibility.",
    ],
    scope: ["Card artwork", "Bleed & crop setup", "Monogram", "Print-ready export"],
    palette: [
      A("#0f0f10", "Charcoal"),
      A("#f4f1ea", "Warm white"),
      A("#b1822c", "Antique gold"),
      A("#6f6b64", "Warm grey"),
    ],
    cover: {
      src: "/projects/print/meridian-card-cover.svg",
      width: 1200,
      height: 900,
      alt: "Premium business card mockup with gold rule on dark stock",
    },
    gallery: [
      {
        src: "/projects/print/meridian-card-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Front and reverse artwork with bleed and safe area",
        alt: "Business card artwork shown front and back with bleed guides",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Meridian is a fictional practice; the card is a print-production study.",
  },
  {
    slug: "atlas-clothing-hangtag",
    title: "Clothing Hangtag",
    brand: "Atlas Streetwear",
    category: "Apparel",
    discipline: "print",
    tagline: "A two-sided hangtag that doubles as a brand story.",
    summary:
      "Hangtag concept for a clothing label — die-cut shape, matt lam finish and a spot colour that lifts the wordmark.",
    overview: [
      "The tag is built on a tall die-cut silhouette with a punched eyelet and a fine gold rule running edge to edge. The front holds the wordmark; the reverse carries care information and a short brand line.",
      "The mockup shows the tag at true scale on a garment so the thickness and finish can be judged the way a buyer would see it in a store.",
    ],
    scope: ["Hangtag artwork", "Die-cut specification", "Spot colour guide", "Mockup presentation"],
    palette: [
      A("#101012", "Ink black"),
      A("#e8e2d6", "Uncoated cream"),
      A("#b1822c", "Spot gold"),
      A("#3d3d42", "Graphite"),
    ],
    cover: {
      src: "/projects/print/atlas-hangtag-cover.svg",
      width: 1200,
      height: 900,
      alt: "Clothing hangtag mockup in cream and black with gold spot colour",
    },
    gallery: [
      {
        src: "/projects/print/atlas-hangtag-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Reverse side with care details and die line",
        alt: "Reverse of a hangtag showing care information and die-cut line",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Produced as a print-production exercise, not a live client commission.",
  },
  {
    slug: "nova-roast-packaging",
    title: "Product Packaging",
    brand: "Nova Roast",
    category: "Packaging",
    discipline: "print",
    tagline: "A flat-colour coffee pouch with a cut-out label window.",
    summary:
      "Packaging concept for a 250g coffee pouch — a two-colour flexographic approach with a die-cut label area.",
    overview: [
      "Limiting the artwork to two inks keeps unit cost realistic for a small roastery while still looking considered. The design uses a bold band across the pouch and a die-cut label window for the roast information.",
      "The presentation shows the pouch flat, assembled and as a set of three roasts so the shelf impact can be judged at a glance.",
    ],
    scope: ["Pouch artwork", "Die-line layout", "Two-colour separation", "Range adaptation"],
    palette: [
      A("#12251c", "Forest"),
      A("#efe7d8", "Kraft cream"),
      A("#c98a4b", "Roast"),
      A("#8c9a86", "Herb"),
    ],
    cover: {
      src: "/projects/print/nova-packaging-cover.svg",
      width: 1200,
      height: 900,
      alt: "Coffee packaging mockup with cream and forest green bands",
    },
    gallery: [
      {
        src: "/projects/print/nova-packaging-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Three-roast range shown as a shelf set",
        alt: "Three coffee packaging designs shown as a set on a shelf",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Nova Roast is a fictional roastery created for packaging exploration.",
  },
  {
    slug: "golden-leaf-product-label",
    title: "Product Label",
    brand: "Golden Leaf",
    category: "Labels",
    discipline: "print",
    tagline: "A small-batch label with fine rules and a numbered seal.",
    summary:
      "Label concept for a premium olive oil — hairline borders, a serif wordmark and a hand-stamped batch number.",
    overview: [
      "Small labels rarely have space for decoration, so the hierarchy does the work: origin first, variety second, brand last. A hairline double border frames the composition and gives the label structure at 60mm wide.",
      "Visible only when printed: the label is designed to accept a stamped batch number in the empty space above the weight, which keeps every bottle slightly unique.",
    ],
    scope: ["Label artwork", "Hierarchy system", "Sizing variants", "Mockup presentation"],
    palette: [
      A("#1f2a1c", "Olive black"),
      A("#f2ecdf", "Paper"),
      A("#b1822c", "Gold foil"),
      A("#7d8b6a", "Leaf"),
    ],
    cover: {
      src: "/projects/print/golden-leaf-cover.svg",
      width: 1200,
      height: 900,
      alt: "Product label mockup with fine gold rules on cream paper",
    },
    gallery: [
      {
        src: "/projects/print/golden-leaf-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Close-up of label typography and rule detail",
        alt: "Close-up of a product label showing typography and rule detail",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Golden Leaf is a fictional producer used for this label study.",
  },
  {
    slug: "atlas-garment-branding",
    title: "Garment Branding",
    brand: "Atlas Streetwear",
    category: "Apparel",
    discipline: "print",
    tagline: "Woven labels, neck prints and rubberised chest marks as one system.",
    summary:
      "Garment branding concept showing how a single mark is adapted across woven labels, heat-transfer neck prints and a chest application.",
    overview: [
      "Branding a garment means designing for the material, not the screen. This concept shows one mark resolved three ways — woven, printed and raised — each with its own line weights so it stays legible at small sizes.",
      "The sheet also documents placement and size relationships, which is the part a production team actually works from.",
    ],
    scope: ["Woven label artwork", "Neck print", "Chest application", "Placement sheet"],
    palette: [
      A("#0d0d0d", "Black"),
      A("#e6e1d7", "Ecru"),
      A("#d8452e", "Signal red"),
      A("#9a9691", "Ash"),
    ],
    cover: {
      src: "/projects/print/atlas-branding-cover.svg",
      width: 1200,
      height: 900,
      alt: "Garment branding mockups showing woven label and neck print",
    },
    gallery: [
      {
        src: "/projects/print/atlas-branding-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Placement and sizing sheet",
        alt: "Sheet showing garment branding placement and sizing specifications",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project created to demonstrate garment branding and production preparation.",
  },
  {
    slug: "maison-verte-stationery",
    title: "Stationery Design",
    brand: "Maison Verte",
    category: "Stationery",
    discipline: "print",
    tagline: "A complete stationery suite: letterhead, card, envelope and notebook cover.",
    summary:
      "Stationery concept that carries one identity system across four printed items without repeating the same layout.",
    overview: [
      "A stationery suite should feel like one family while giving each item its own job. The letterhead holds a wide, quiet footer; the card keeps the monogram alone; the envelope carries only the arch shape.",
      "Everything is set on a consistent margin and baseline grid so the suite photographs as a set and reads as one brand in the hand.",
    ],
    scope: ["Letterhead", "Business card", "Envelope", "Notebook cover"],
    palette: [
      A("#16281f", "Deep green"),
      A("#efeade", "Stone"),
      A("#c9a227", "Brass"),
      A("#8d8a80", "Pebble"),
    ],
    cover: {
      src: "/projects/print/maison-stationery-cover.svg",
      width: 1200,
      height: 900,
      alt: "Stationery suite mockup with letterhead, card and envelope",
    },
    gallery: [
      {
        src: "/projects/print/maison-stationery-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Letterhead and notebook cover detail",
        alt: "Close-up of letterhead and notebook cover stationery design",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept project. Maison Verte is a fictional studio; the suite is a print design study.",
  },

  /* ------------------------------------------------------------------
     WEB DESIGN
  ------------------------------------------------------------------ */
  {
    slug: "meridian-business-website",
    title: "Business Website",
    brand: "Meridian",
    category: "Business",
    discipline: "web",
    tagline: "A calm, credible business site with a clear service hierarchy.",
    summary:
      "Website concept for a consultancy — structural layout, readable typography and a service-first page order.",
    overview: [
      "The layout leads with a single sentence of positioning, then proves it with services, approach and contact. Nothing competes for attention.",
      "Built as a static-friendly structure with a fixed content grid, so the design translates directly into a WordPress build without needing a page builder.",
    ],
    scope: ["Page structure", "Desktop & mobile layout", "Service sections", "Contact block"],
    palette: [
      A("#ffffff", "Paper"),
      A("#111318", "Ink"),
      A("#b1822c", "Gold"),
      A("#f1f0ec", "Panel"),
    ],
    cover: {
      src: "/projects/web/meridian-site-cover.svg",
      width: 1200,
      height: 900,
      alt: "Business website layout in a desktop browser frame",
    },
    gallery: [
      {
        src: "/projects/web/meridian-site-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Mobile layout with the same content order",
        alt: "Mobile version of the business website design",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept. Designed as a layout study — it is not a deployed client website.",
  },
  {
    slug: "studio-north-agency-landing",
    title: "Creative Agency Landing Page",
    brand: "Studio North",
    category: "Agency",
    discipline: "web",
    tagline: "An editorial landing page that leads with type, not templates.",
    summary:
      "Landing page concept for a design studio, built around oversized headlines and a strict two-column rhythm.",
    overview: [
      "Agency websites are often all motion and no message. This concept keeps the type large, the sections few and the work visible immediately.",
      "The header, hero, selected-work list and footer share one grid, so the page can grow with new projects without design drift.",
    ],
    scope: ["Landing page layout", "Type system", "Work list", "Footer & contact"],
    palette: [
      A("#0d0d0f", "Ink"),
      A("#f5f2ea", "Warm white"),
      A("#e4b95f", "Golden"),
      A("#2a2a30", "Slate"),
    ],
    cover: {
      src: "/projects/web/studio-north-cover.svg",
      width: 1200,
      height: 900,
      alt: "Creative agency landing page design with oversized typography",
    },
    gallery: [
      {
        src: "/projects/web/studio-north-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Section rhythm and project list",
        alt: "Agency website section layout and project list design",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept. Studio North is a fictional studio; this is a layout exploration, not a live site.",
  },
  {
    slug: "nova-roast-storefront",
    title: "E-commerce Storefront",
    brand: "Nova Roast",
    category: "E-commerce",
    discipline: "web",
    tagline: "A product-led storefront with a warm retail feel.",
    summary:
      "Storefront concept where product photography, price and roast notes sit in one clean, scannable rhythm.",
    overview: [
      "Retail pages live or die on scannability, so the design gives every product the same frame: image, name, roast note, price — repeated without variation.",
      "The cart and filter patterns are deliberately simple, which keeps the implementation lightweight and fast on mobile connections.",
    ],
    scope: ["Storefront layout", "Product cards", "Filters & cart", "Checkout steps"],
    palette: [
      A("#f7f3ec", "Cream"),
      A("#12251c", "Forest"),
      A("#c98a4b", "Caramel"),
      A("#1b1b1b", "Ink"),
    ],
    cover: {
      src: "/projects/web/nova-store-cover.svg",
      width: 1200,
      height: 900,
      alt: "E-commerce storefront layout with product grid and warm palette",
    },
    gallery: [
      {
        src: "/projects/web/nova-store-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Product detail view and mobile cart",
        alt: "Product detail page and mobile cart design for a storefront",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept. Nova Roast is a fictional brand; the storefront is a design study only.",
  },
  {
    slug: "wanderline-responsive-layout",
    title: "Responsive Website Layout",
    brand: "Wanderline",
    category: "Responsive",
    discipline: "web",
    tagline: "One layout system, four screen widths, no broken compositions.",
    summary:
      "A responsive study showing how a single travel layout adapts from mobile to desktop while keeping its hierarchy.",
    overview: [
      "The page is built on a twelve-column grid that collapses to four on tablet and two on mobile, with type scaling in defined steps rather than fluid guesswork.",
      "Presenting desktop, tablet and mobile together shows the actual value of the design: the same content reads correctly at every size.",
    ],
    scope: ["Responsive grid", "Breakpoint behaviour", "Type scaling", "Component states"],
    palette: [
      A("#0d1b2a", "Deep navy"),
      A("#f4efe6", "Sand"),
      A("#e0754b", "Sunset"),
      A("#5c8a8a", "Sea mist"),
    ],
    cover: {
      src: "/projects/web/wanderline-responsive-cover.svg",
      width: 1200,
      height: 900,
      alt: "Responsive website layout shown on desktop, tablet and mobile",
    },
    gallery: [
      {
        src: "/projects/web/wanderline-responsive-detail-01.svg",
        width: 1200,
        height: 900,
        caption: "Grid and breakpoint detail",
        alt: "Detailed view of a responsive website grid at different breakpoints",
      },
    ],
    concept: true,
    conceptNote:
      "Self-initiated concept. Wanderline is a fictional travel brand used for this responsive layout study.",
  },
];

export const disciplines: Record<
  Discipline,
  { id: Discipline; label: string; filters: string[] }
> = {
  graphic: {
    id: "graphic",
    label: "Graphic Design",
    filters: [
      "All",
      "Logo Design",
      "Brand Identity",
      "Packaging Design",
      "Social Media Design",
      "Posters & Advertising",
      "Typography & Editorial Design",
    ],
  },
  print: {
    id: "print",
    label: "Print Design",
    filters: ["All", "Stationery", "Packaging", "Apparel", "Labels"],
  },
  web: {
    id: "web",
    label: "Web Design",
    filters: ["All", "Business", "Agency", "E-commerce", "Responsive"],
  },
};

export function getProjectsByDiscipline(discipline: Discipline) {
  return projects.filter((project) => project.discipline === discipline);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { previous, next };
}

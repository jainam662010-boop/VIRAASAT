import type { Metadata } from "next";

export const seoConfig = {
  siteName: "VIRAASAT - Threads of India",
  siteUrl: "https://viraasat.com",
  defaultTitle: "VIRAASAT - Threads of India | A Digital Museum of Indian Art",
  defaultDescription: "Discover Indian art traditions through sourced media, careful context, and restrained digital storytelling.",
  keywords: [
    "Indian art",
    "VIRAASAT",
    "Threads of India",
    "Indian culture",
    "traditional art",
    "digital museum",
    "Madhubani painting",
    "Warli art",
    "Tanjore painting",
    "Pattachitra",
    "Kalamkari",
    "folk art",
    "textile arts",
    "temple architecture",
  ],
  author: "VIRAASAT",
  publisher: "VIRAASAT",
  openGraphImage: {
    url: "/media/posters/hero-mandala.svg",
    width: 1200,
    height: 630,
    alt: "VIRAASAT - Threads of India",
  },
};

type PageMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  images?: Array<{
    url: string;
    width: number;
    height: number;
    alt: string;
  }>;
  keywords?: string[];
  noIndex?: boolean;
  lastModified?: string;
};

export function generatePageMetadata({
  title,
  description,
  path = "",
  images = [],
  keywords = [],
  noIndex = false,
  lastModified,
}: PageMetadataInput): Metadata {
  const fullTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
  const fullDescription = description || seoConfig.defaultDescription;
  const fullUrl = `${seoConfig.siteUrl}${path}`;
  const fullImages = images.length > 0 ? images : [seoConfig.openGraphImage];

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [...seoConfig.keywords, ...keywords].join(", "),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.publisher,
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: fullUrl,
      siteName: seoConfig.siteName,
      title: fullTitle,
      description: fullDescription,
      images: fullImages,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: fullImages,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    },
    manifest: "/site.webmanifest",
    other: {
      ...(lastModified ? { "article:modified_time": lastModified } : {}),
      "msapplication-TileColor": "#f2ca50",
    },
  };
}

export const artFormSEO = {
  madhubani: {
    title: "Madhubani Painting | Traditional Indian Art",
    description: "Explore Madhubani painting from the Mithila region of Bihar, including techniques, symbolism, artists, and cultural significance.",
    keywords: ["madhubani", "mithila painting", "bihar art", "traditional indian art", "folk painting"],
  },
  warli: {
    title: "Warli Art | Tribal Indian Painting",
    description: "Discover Warli art, the traditional tribal painting practice associated with Warli communities in Maharashtra.",
    keywords: ["warli", "tribal art", "maharashtra painting", "folk art", "geometric painting"],
  },
  pattachitra: {
    title: "Pattachitra | Traditional Odisha Art",
    description: "Explore Pattachitra, the cloth scroll painting tradition of Odisha known for mythological narratives and natural pigments.",
    keywords: ["pattachitra", "odisha art", "cloth painting", "traditional art", "scroll painting"],
  },
  tanjore: {
    title: "Tanjore Painting | Classical South Indian Art",
    description: "Discover Tanjore painting, the classical South Indian devotional art form known for gold leaf work.",
    keywords: ["tanjore", "south indian painting", "classical art", "gold leaf painting", "religious art"],
  },
  kalamkari: {
    title: "Kalamkari | Traditional Indian Textile Art",
    description: "Explore Kalamkari textile art, including hand-painted and block-printed traditions using natural dyes.",
    keywords: ["kalamkari", "indian textile", "block printing", "natural dyes", "hand painting"],
  },
};

export function generateArtFormSchema(artForm: keyof typeof artFormSEO) {
  const config = artFormSEO[artForm];

  return {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: config.title,
    description: config.description,
    keywords: config.keywords,
    creator: seoConfig.publisher,
    image: `${seoConfig.siteUrl}/media/posters/hero-mandala.svg`,
    url: `${seoConfig.siteUrl}/art-forms/${artForm}`,
    artworkForm: "Traditional Indian art",
    educationalUse: "Cultural education",
  };
}

export function generateMuseumSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    image: `${seoConfig.siteUrl}/media/posters/hero-mandala.svg`,
    publisher: seoConfig.publisher,
  };
}

export function generateEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      "@type": "Place",
      name: event.location,
    },
    organizer: {
      "@type": "Organization",
      name: seoConfig.publisher,
      url: seoConfig.siteUrl,
    },
  };
}

export function generateArtistSchema(artist: {
  name: string;
  artForm: string;
  region: string;
  biography: string;
  notableWorks: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: artist.name,
    description: `${artist.artForm} artist from ${artist.region}. ${artist.biography}`,
    jobTitle: "Traditional Artist",
    knowsAbout: artist.notableWorks,
  };
}

export function generateSitemapEntry(
  url: string,
  lastmod: string,
  priority: number = 0.7,
  changefreq: "weekly" | "daily" | "monthly" = "weekly",
) {
  return {
    url,
    lastmod,
    changefreq,
    priority,
  };
}

export function generateSitemap() {
  const pages = ["/", "/map/", "/art-forms/", "/timeline/", "/gallery/", "/artists/", "/immersive/", "/about/", "/contact/"];
  const artForms = ["madhubani", "warli", "pattachitra", "tanjore", "kalamkari"];
  const lastmod = "2026-05-11T00:00:00.000Z";

  return {
    version: "1.0",
    urlset: seoConfig.siteUrl,
    entries: [
      ...pages.map((page) => generateSitemapEntry(`${seoConfig.siteUrl}${page}`, lastmod, 1, "weekly")),
      ...artForms.map((form) =>
        generateSitemapEntry(`${seoConfig.siteUrl}/art-forms/${form}/`, lastmod, 0.8, "monthly"),
      ),
    ],
  };
}

export const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${seoConfig.siteUrl}/sitemap.xml
`;

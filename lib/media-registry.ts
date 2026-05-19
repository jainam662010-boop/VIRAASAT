export type MediaLicense = "CC0" | "CC-BY" | "CC-BY-SA" | "Generated";

export type MediaAsset = {
  id: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  artFormId?: string;
  width?: number;
  height?: number;
  author?: string;
  publisher?: string;
  sourceUrl?: string;
  licenseType: MediaLicense;
  requiresAttribution: boolean;
  tags?: string[];
};

export const mediaAssets: readonly MediaAsset[] = [
  {
    id: "hero-generated-mandala",
    type: "image",
    src: "/media/posters/hero-mandala.svg",
    alt: "Generated abstract mandala-inspired museum atmosphere",
    width: 1600,
    height: 900,
    publisher: "VIRAASAT",
    licenseType: "Generated",
    requiresAttribution: false,
    tags: ["generated", "decorative", "hero"],
  },
  {
    id: "madhubani-commons-primary",
    type: "image",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Madhubani%20painting.jpg?width=1200",
    alt: "Madhubani painting photographed at the Crafts Museum, New Delhi",
    artFormId: "madhubani",
    width: 1200,
    height: 797,
    author: "Mohitkiran",
    publisher: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Madhubani_painting.jpg",
    licenseType: "CC-BY-SA",
    requiresAttribution: true,
    tags: ["factual", "painting", "madhubani"],
  },
  {
    id: "warli-commons-primary",
    type: "image",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Warli%20painting.jpg?width=1200",
    alt: "Warli painting from India",
    artFormId: "warli",
    width: 1200,
    height: 1200,
    author: "Omrmankar",
    publisher: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Warli_painting.jpg",
    licenseType: "CC-BY-SA",
    requiresAttribution: true,
    tags: ["factual", "painting", "warli"],
  },
  {
    id: "pattachitra-commons-primary",
    type: "image",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pattachitra%20art.jpg?width=1200",
    alt: "Pattachitra painting depicting Lord Jagannath",
    artFormId: "pattachitra",
    width: 1200,
    height: 1654,
    author: "Aaronwarnerella",
    publisher: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pattachitra_art.jpg",
    licenseType: "CC-BY",
    requiresAttribution: true,
    tags: ["factual", "painting", "pattachitra"],
  },
  {
    id: "tanjore-commons-primary",
    type: "image",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tanjore%20art.jpg?width=900",
    alt: "Tanjore painting with gold foil and devotional subject",
    artFormId: "tanjore",
    width: 900,
    height: 1599,
    author: "Sumukhi Umesh",
    publisher: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tanjore_art.jpg",
    licenseType: "CC-BY-SA",
    requiresAttribution: true,
    tags: ["factual", "painting", "tanjore"],
  },
  {
    id: "kalamkari-commons-primary",
    type: "image",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kalamkari%20painting.jpg?width=1200",
    alt: "Kalamkari painting photographed in India",
    artFormId: "kalamkari",
    width: 1200,
    height: 797,
    author: "Anilbhardwajnoida",
    publisher: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kalamkari_painting.jpg",
    licenseType: "CC-BY-SA",
    requiresAttribution: true,
    tags: ["factual", "painting", "kalamkari"],
  },
] as const;

export type MediaAssetId = (typeof mediaAssets)[number]["id"];

export function getMediaAsset(id: MediaAssetId | string): MediaAsset | undefined {
  return mediaAssets.find((asset) => asset.id === id);
}

export function getRequiredMediaAsset(id: MediaAssetId | string): MediaAsset {
  const asset = getMediaAsset(id);
  if (!asset) {
    throw new Error(`Missing media asset: ${id}`);
  }
  return asset;
}

export function getArtFormHeroMedia(artFormId: string): MediaAsset {
  return mediaAssets.find((asset) => asset.artFormId === artFormId) ?? getRequiredMediaAsset("hero-generated-mandala");
}

export function getArtFormGalleryMedia(artFormId: string): MediaAsset[] {
  return mediaAssets.filter((asset) => asset.artFormId === artFormId);
}

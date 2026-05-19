import { getRequiredMediaAsset } from "./media-registry";

export const imageAssets = {
  hero: {
    mandala: getRequiredMediaAsset("hero-generated-mandala").src,
    particles: getRequiredMediaAsset("hero-generated-mandala").src,
    background: getRequiredMediaAsset("hero-generated-mandala").src,
    silk: getRequiredMediaAsset("hero-generated-mandala").src,
  },
  artForms: {
    madhubani: {
      hero: getRequiredMediaAsset("madhubani-commons-primary").src,
      detail: getRequiredMediaAsset("madhubani-commons-primary").src,
      process: getRequiredMediaAsset("madhubani-commons-primary").src,
      artist: getRequiredMediaAsset("madhubani-commons-primary").src,
    },
    warli: {
      hero: getRequiredMediaAsset("warli-commons-primary").src,
      detail: getRequiredMediaAsset("warli-commons-primary").src,
      process: getRequiredMediaAsset("warli-commons-primary").src,
      artist: getRequiredMediaAsset("warli-commons-primary").src,
    },
    pattachitra: {
      hero: getRequiredMediaAsset("pattachitra-commons-primary").src,
      detail: getRequiredMediaAsset("pattachitra-commons-primary").src,
      process: getRequiredMediaAsset("pattachitra-commons-primary").src,
      artist: getRequiredMediaAsset("pattachitra-commons-primary").src,
    },
    tanjore: {
      hero: getRequiredMediaAsset("tanjore-commons-primary").src,
      detail: getRequiredMediaAsset("tanjore-commons-primary").src,
      process: getRequiredMediaAsset("tanjore-commons-primary").src,
      artist: getRequiredMediaAsset("tanjore-commons-primary").src,
    },
    kalamkari: {
      hero: getRequiredMediaAsset("kalamkari-commons-primary").src,
      detail: getRequiredMediaAsset("kalamkari-commons-primary").src,
      process: getRequiredMediaAsset("kalamkari-commons-primary").src,
      artist: getRequiredMediaAsset("kalamkari-commons-primary").src,
    },
  },
  immersive: {
    mandala3D: getRequiredMediaAsset("hero-generated-mandala").src,
    temple3D: getRequiredMediaAsset("tanjore-commons-primary").src,
    gallery3D: getRequiredMediaAsset("madhubani-commons-primary").src,
    artifact3D: getRequiredMediaAsset("kalamkari-commons-primary").src,
  },
  ui: {
    goldTexture: getRequiredMediaAsset("hero-generated-mandala").src,
    silkTexture: getRequiredMediaAsset("hero-generated-mandala").src,
    marble: getRequiredMediaAsset("hero-generated-mandala").src,
    granite: getRequiredMediaAsset("hero-generated-mandala").src,
  },
};

export const getImageUrl = (category: keyof typeof imageAssets, name: string, _size?: "small" | "medium" | "large") => {
  const group = imageAssets[category] as Record<string, string | Record<string, string>>;
  const asset = group?.[name];
  return typeof asset === "string" ? asset : asset?.hero ?? getRequiredMediaAsset("hero-generated-mandala").src;
};

export interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}

export const getPlaceholderUrl = (_type?: "art" | "architecture" | "artist" | "texture") => getRequiredMediaAsset("hero-generated-mandala").src;

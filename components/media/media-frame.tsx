"use client";

import Image from "next/image";
import { useState } from "react";
import type { MediaAsset } from "@/lib/media-registry";
import { useReducedMotion } from "@/lib/hooks";
import { CreditLine } from "./credit-line";

type MediaFrameProps = {
  asset?: MediaAsset;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  showCredit?: boolean;
  sizes?: string;
};

export function MediaFrame({
  asset,
  className = "",
  imageClassName = "",
  priority = false,
  showCredit = true,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  if (!asset || hasError) {
    return (
      <div className={`relative flex min-h-[220px] items-center justify-center overflow-hidden bg-surface-container ${className}`}>
        <div className="px-6 text-center">
          <p className="font-label-caps text-label-caps text-primary">Media unavailable</p>
          <p className="mt-2 text-sm text-on-surface-variant">The page remains readable while this item is restored.</p>
        </div>
      </div>
    );
  }

  return (
    <figure className={`relative overflow-hidden ${className}`}>
      {asset.type === "video" ? (
        <video
          className={`h-full w-full object-cover ${imageClassName}`}
          poster={asset.poster}
          muted
          loop
          playsInline
          autoPlay={!prefersReducedMotion}
          controls={prefersReducedMotion}
          aria-label={asset.alt}
          onError={() => setHasError(true)}
        >
          <source src={asset.src} />
        </video>
      ) : (
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
          onError={() => setHasError(true)}
        />
      )}
      {showCredit && (
        <figcaption className="absolute bottom-3 left-3 right-3 rounded bg-background/75 px-3 py-2 backdrop-blur">
          <CreditLine asset={asset} />
        </figcaption>
      )}
    </figure>
  );
}

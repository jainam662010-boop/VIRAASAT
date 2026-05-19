"use client";

import { MediaFrame } from "@/components/media";
import { getRequiredMediaAsset } from "@/lib/media-registry";

export function TempleShowcase() {
  return (
    <section className="px-4 py-section-gap md:px-16" aria-label="Temple architecture study">
      <div className="mx-auto max-w-container-max overflow-hidden border border-outline-variant/20 bg-surface-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          <MediaFrame
            asset={getRequiredMediaAsset("hero-generated-mandala")}
            className="min-h-[360px]"
            showCredit={false}
          />
          <div className="flex flex-col justify-end p-8 md:p-12">
            <p className="font-label-caps text-label-caps tracking-[0.24em] text-primary">
              Architectural Heritage
            </p>
            <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">
              South Indian Temple Architecture
            </h2>
            <p className="mt-6 leading-7 text-on-surface-variant">
              A calm editorial study area for Dravidian temple forms, sculptural programs,
              and symbolic motifs. Future interactive models should remain optional,
              optimized, and clearly sourced.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

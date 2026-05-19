"use client";

import { MediaFrame } from "@/components/media";
import { getRequiredMediaAsset } from "@/lib/media-registry";

export function TempleModelViewer() {
  return (
    <div className="relative h-full min-h-[420px] overflow-hidden bg-surface">
      <MediaFrame
        asset={getRequiredMediaAsset("hero-generated-mandala")}
        className="absolute inset-0 opacity-70"
        showCredit={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <p className="font-label-caps text-label-caps text-primary">Concept Viewer</p>
        <h3 className="mt-3 font-headline-lg text-headline-lg text-on-surface">Temple Architecture Study</h3>
        <p className="mt-4 max-w-xl text-on-surface-variant">
          This static preview reserves space for future optimized 3D work. No scan, model, or live system is claimed here.
        </p>
      </div>
    </div>
  );
}

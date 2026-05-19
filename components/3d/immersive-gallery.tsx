"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/media";
import { getRequiredMediaAsset } from "@/lib/media-registry";

const previews = [
  {
    id: "mandala",
    title: "Mandala Composition",
    type: "Concept Experience",
    mediaId: "hero-generated-mandala",
    description: "A generated atmospheric study for explaining symmetry and layered composition.",
  },
  {
    id: "materials",
    title: "Material Study",
    type: "Interactive Preview",
    mediaId: "kalamkari-commons-primary",
    description: "A sourced visual anchor for discussing pigment, fabric, and process notes.",
  },
  {
    id: "devotional",
    title: "Devotional Painting Context",
    type: "Editorial Preview",
    mediaId: "tanjore-commons-primary",
    description: "A careful reading of form, gold work, and devotional framing.",
  },
];

export function ImmersiveGallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = previews.find((preview) => preview.id === selectedId);

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {previews.map((preview) => (
          <button
            key={preview.id}
            type="button"
            onClick={() => setSelectedId(preview.id)}
            className="group overflow-hidden border border-outline-variant/20 bg-surface-container text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <MediaFrame
              asset={getRequiredMediaAsset(preview.mediaId)}
              className="aspect-[4/3]"
              imageClassName="transition-transform duration-500 group-hover:scale-105"
              showCredit={false}
            />
            <div className="p-5">
              <p className="font-label-caps text-[10px] text-primary">{preview.type}</p>
              <h3 className="mt-2 font-headline-md text-headline-md text-on-surface">{preview.title}</h3>
              <p className="mt-3 text-sm leading-6 text-on-surface-variant">{preview.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur">
          <div className="w-full max-w-4xl border border-outline-variant/20 bg-surface">
            <div className="flex items-start justify-between p-6">
              <div>
                <p className="font-label-caps text-[10px] text-primary">{selected.type}</p>
                <h3 className="mt-2 font-headline-lg text-headline-lg text-primary">{selected.title}</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setSelectedId(null)} aria-label="Close preview">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <MediaFrame asset={getRequiredMediaAsset(selected.mediaId)} className="aspect-video" />
            <div className="flex items-center justify-between gap-4 p-6">
              <p className="text-on-surface-variant">{selected.description}</p>
              <Button variant="outline">
                <Play className="mr-2 h-4 w-4" />
                Concept Only
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

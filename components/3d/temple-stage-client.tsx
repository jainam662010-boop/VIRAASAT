"use client";

import dynamic from "next/dynamic";
import type { TempleStageProps } from "@/components/3d/temple-stage";

function StageSkeleton() {
  return (
    <div
      className="flex h-full min-h-[280px] w-full items-center justify-center bg-museum-black/50"
      aria-hidden
    >
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-temple-gold/30 border-t-transparent" />
    </div>
  );
}

export const TempleStageClient = dynamic<TempleStageProps>(
  () => import("@/components/3d/temple-stage").then((mod) => ({ default: mod.TempleStage })),
  { ssr: false, loading: () => <StageSkeleton /> },
);

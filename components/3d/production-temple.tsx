"use client";

import { TempleStageClient } from "@/components/3d/temple-stage-client";

export function ProductionTemple({ onReady }: { onReady?: () => void }) {
  return <TempleStageClient mode="orbital" className="h-full w-full min-h-[70vh]" onReady={onReady} />;
}

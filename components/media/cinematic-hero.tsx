"use client";

import { motion } from "framer-motion";
import type { MediaAsset } from "@/lib/media-registry";
import { useReducedMotion } from "@/lib/hooks";
import { MediaFrame } from "./media-frame";

type CinematicHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  asset: MediaAsset;
};

export function CinematicHero({ eyebrow, title, subtitle, asset }: CinematicHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[78vh] overflow-hidden">
      <MediaFrame
        asset={asset}
        priority
        showCredit={false}
        sizes="100vw"
        className="absolute inset-0"
        imageClassName="scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/45 to-background" />
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex min-h-[78vh] items-end px-4 pb-20 md:px-16"
      >
        <div className="max-w-4xl">
          {eyebrow && (
            <p className="mb-5 font-label-caps text-label-caps tracking-[0.24em] text-primary">{eyebrow}</p>
          )}
          <h1 className="font-display-hero text-display-hero leading-none text-primary">{title}</h1>
          <p className="mt-8 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">{subtitle}</p>
        </div>
      </motion.div>
    </section>
  );
}

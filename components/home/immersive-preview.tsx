"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { MediaFrame } from "@/components/media";
import { getRequiredMediaAsset } from "@/lib/media-registry";

export function ImmersivePreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-section-gap overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <MediaFrame
          asset={getRequiredMediaAsset("hero-generated-mandala")}
          className="h-full w-full"
          showCredit={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-container-max mx-auto px-4 md:px-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="font-label-caps text-label-caps text-secondary tracking-[0.3em] mb-4 block">
              IMMERSIVE EXPERIENCE
            </span>
            <h2 className="font-display-hero text-6xl md:text-7xl text-primary leading-none mb-6">
              Step Into<br />History
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
              Explore concept previews for temple architecture, mandala composition, and material study. Every experimental element is clearly separated from factual artwork records.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg" className="shadow-xl">
                <Sparkles className="w-5 h-5 mr-2" />
                Open Preview
              </Button>
              <Button variant="outline" size="lg">
                View Method
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Feature List */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { value: "01", label: "Concept Preview" },
                { value: "02", label: "Source Notes" },
                { value: "03", label: "Material Study" },
                { value: "04", label: "Gallery Context" },
              ].map((feature, index) => (
                <div key={feature.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-label-caps text-label-caps text-primary">{feature.value}</span>
                  </div>
                  <span className="font-body-md text-on-surface-variant">{feature.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 3D Preview Card */}
          <ScrollReveal delay={0.2}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass-panel group">
              <MediaFrame
                asset={getRequiredMediaAsset("tanjore-commons-primary")}
                className="h-full w-full"
                imageClassName="transition-transform duration-700 group-hover:scale-105"
                showCredit={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              {/* Floating UI Elements */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-panel p-4 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-gold flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-on-primary" />
                    </div>
                    <div>
                      <h4 className="font-headline-md text-primary">Virupaksha Temple</h4>
                      <p className="font-label-caps text-[10px] text-on-surface-variant">Hampi, Karnataka</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rotation Indicator */}
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 rounded-full bg-surface-container/80 backdrop-blur-sm flex items-center justify-center animate-spin-slow">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                  </svg>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </motion.div>
    </section>
  );
}

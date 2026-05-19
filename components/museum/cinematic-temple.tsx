"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ProductionTemple } from "@/components/3d/production-temple";
import { usePrefersReducedMotion, useWebGLSupported } from "@/lib/client-env";

function TempleFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 museum-light" />
        <div
          className="absolute inset-0 animate-[cinematicGlow_8s_linear_infinite]"
          style={{
            background:
              "radial-gradient(circle at 40% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="relative z-10 px-8 text-center">
        <div className="glass-panel mx-auto max-w-2xl p-12">
          <h3 className="mb-4 font-display text-3xl text-temple-gold">South Indian temple architecture</h3>
          <p className="mb-6 text-body leading-relaxed text-ivory-cream/90">
            A masterpiece of Dravidian architecture, where stone becomes poetry and devotion takes form through
            intricate carvings and towering gopurams.
          </p>
          <div className="space-y-4 text-left">
            {[
              "Monumental gopuram towers reaching toward the sky",
              "Intricate stone carvings depicting divine narratives",
              "Sacred geometry and measured proportion",
            ].map((line) => (
              <div key={line} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-temple-gold" />
                <span className="text-body text-ivory-cream/80">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes cinematicGlow {
          0% {
            background: radial-gradient(circle at 40% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 60%);
          }
          33% {
            background: radial-gradient(circle at 60% 70%, rgba(139, 115, 85, 0.15) 0%, transparent 60%);
          }
          66% {
            background: radial-gradient(circle at 50% 50%, rgba(255, 153, 51, 0.15) 0%, transparent 60%);
          }
          100% {
            background: radial-gradient(circle at 40% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 60%);
          }
        }
      `}</style>
    </div>
  );
}

export function CinematicTemple() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const webglSupported = useWebGLSupported();
  const [modelLoaded, setModelLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const viewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(viewRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleLoad = () => setModelLoaded(true);
    window.addEventListener("temple-loaded", handleLoad);
    return () => window.removeEventListener("temple-loaded", handleLoad);
  }, []);

  const useStaticShell = !webglSupported || prefersReducedMotion;

  if (useStaticShell) {
    return (
      <section
        ref={containerRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-museum-black via-stone-charcoal to-temple-shadow"
      >
        <TempleFallback />
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-museum-black via-stone-charcoal to-temple-shadow"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 museum-light" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, rgba(139, 115, 85, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(255, 153, 51, 0.08) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div ref={viewRef} className="absolute inset-0 z-10">
        {inView && (
          <motion.div
            className="absolute inset-0"
            style={{ opacity, scale }}
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="h-full w-full">
              <ProductionTemple onReady={() => setModelLoaded(true)} />
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-50 flex flex-col items-center justify-center"
        style={{ opacity }}
        initial={false}
        animate={{ opacity: modelLoaded ? 1 : 0, y: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        <div className="mx-auto max-w-4xl px-8 text-center">
          <motion.div
            className="text-center"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.0 }}
          >
            <h2 className="text-hero mb-6 font-display">Sacred architecture</h2>
            <p className="text-subtitle mb-8 font-body">Where stone becomes poetry and devotion takes form</p>

            <motion.div
              className="glass-panel inline-block px-6 py-3"
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <p className="text-caption font-mono text-ivory-cream/80">DRAG TO EXPLORE • SCROLL TO CONTINUE</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {!modelLoaded && inView && (
        <motion.div
          className="absolute left-1/2 top-1/2 z-[60] -translate-x-1/2 -translate-y-1/2"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-2 border-temple-gold border-t-transparent" />
            <p className="text-caption font-mono text-ivory-cream/60">Loading temple model…</p>
          </div>
        </motion.div>
      )}
    </section>
  );
}

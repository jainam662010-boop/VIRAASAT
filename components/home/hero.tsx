"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowRight, Volume2, VolumeX, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TempleStageClient } from "@/components/3d/temple-stage-client";

const heroParticles = Array.from({ length: 20 }, (_, index) => {
  const left = (index * 37) % 100;
  const top = (index * 53) % 100;
  return {
    id: index,
    left: `${left}%`,
    top: `${top}%`,
    duration: 4 + (index % 5) * 0.4,
    delay: (index % 7) * 0.2,
  };
});

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [audioOn, setAudioOn] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    scrollProgressRef.current = v;
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mouseRef.current = {
        x: Math.max(-1, Math.min(1, nx)),
        y: Math.max(-1, Math.min(1, ny)),
      };
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const stopDrone = useCallback(() => {
    const ctx = audioCtxRef.current;
    const gain = masterGainRef.current;
    if (ctx && gain) {
      const t = ctx.currentTime;
      try {
        gain.gain.linearRampToValueAtTime(0.0001, t + 0.4);
      } catch {
        gain.gain.value = 0.0001;
      }
      window.setTimeout(() => {
        oscillatorsRef.current.forEach((o) => {
          try {
            o.stop();
            o.disconnect();
          } catch {
            /* noop */
          }
        });
        oscillatorsRef.current = [];
        ctx.close().catch(() => {});
        audioCtxRef.current = null;
        masterGainRef.current = null;
      }, 450);
    }
  }, []);

  const startDrone = useCallback(() => {
    const AudioContextClass =
      window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const master = ctx.createGain();
    master.gain.value = 0.0001;
    master.connect(ctx.destination);

    const freqs = [82.41, 123.47, 164.81];
    const oscs: OscillatorNode[] = [];
    freqs.forEach((hz, i) => {
      const osc = ctx.createOscillator();
      osc.type = i === 0 ? "sine" : "triangle";
      osc.frequency.value = hz;
      const g = ctx.createGain();
      g.gain.value = i === 0 ? 0.12 : 0.04;
      osc.connect(g);
      g.connect(master);
      osc.start();
      oscs.push(osc);
    });
    oscillatorsRef.current = oscs;
    masterGainRef.current = master;
    audioCtxRef.current = ctx;

    const t = ctx.currentTime;
    master.gain.linearRampToValueAtTime(0.055, t + 1.4);
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (audioOn) {
      startDrone();
    } else {
      stopDrone();
    }
    return () => stopDrone();
  }, [audioOn, startDrone, stopDrone]);

  const scrollToContent = () => {
    document.getElementById("hero-content")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <TempleStageClient
          mode="hero"
          className="h-full min-h-screen w-full"
          scrollRef={scrollProgressRef}
          mouseRef={mouseRef}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-museum-black/80 via-museum-black/45 to-museum-black/90" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(212,175,55,0.12)_0%,transparent_55%)]" />
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] silk-texture opacity-25"
        style={{ y, opacity }}
      />

      <div className="pointer-events-none absolute inset-0 z-[2]">
        {heroParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute h-1 w-1 rounded-full bg-primary/25"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.15, 0.45, 0.15],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-4xl px-4 py-24 text-center md:px-8 md:py-32"
        style={{ opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto space-y-6"
        >
          <motion.h1
            className="mb-4 font-display text-5xl font-bold tracking-tight text-primary md:text-7xl lg:text-8xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.08 }}
          >
            VIRAASAT
          </motion.h1>
          <motion.p
            className="mx-auto mb-4 max-w-3xl font-body text-lg leading-relaxed text-on-surface md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.18 }}
          >
            The living memory of Indian art and civilization
          </motion.p>
          <motion.p
            className="mx-auto mb-10 max-w-2xl font-body text-base leading-relaxed text-on-surface-variant md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.28 }}
          >
            A cinematic digital museum of architecture, painting, sculpture, textiles, and performance traditions.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.4 }}
        >
          <Button size="lg" onClick={scrollToContent} className="group">
            Begin journey
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            type="button"
            onClick={() => setAudioOn((v) => !v)}
            aria-pressed={audioOn}
            className="gap-2"
          >
            {audioOn ? (
              <>
                <Volume2 className="h-5 w-5" />
                Sound on
              </>
            ) : (
              <>
                <VolumeX className="h-5 w-5" />
                Sacred tone
              </>
            )}
          </Button>
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-primary/60 transition-colors hover:text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.85, delay: 0.55 },
          y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <span className="font-label-caps text-label-caps tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
}

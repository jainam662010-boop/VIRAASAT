"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, Sparkles, ArrowRight, Brush, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedTitle } from "@/components/animations/text-reveal";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { MediaFrame } from "@/components/media";
import { getRequiredMediaAsset } from "@/lib/media-registry";

const eras = [
  {
    id: "ancient",
    name: "Ancient",
    period: "3300 BCE – 600 CE",
    title: "The Indus Seal",
    description: "Meticulous stone carvings representing early zoomorphic icons and spiritual symbols of the Harappan civilization.",
    mediaId: "hero-generated-mandala",
    category: "SCULPTURE",
  },
  {
    id: "ajanta",
    name: "Classical",
    period: "200 BCE – 600 CE",
    title: "Ajanta Murals",
    description: "The pinnacle of classical Indian painting, etched into the basalt rock faces of the Deccan plateau.",
    mediaId: "madhubani-commons-primary",
    category: "BUDDHIST ART",
  },
  {
    id: "medieval",
    name: "Medieval",
    period: "600 CE – 1800 CE",
    title: "Mughal Miniatures",
    description: "Intricate fusion of Persian and Indian aesthetics, defined by fine line work and precious pigment overlays.",
    mediaId: "pattachitra-commons-primary",
    category: "COURT ART",
  },
  {
    id: "modern",
    name: "Modern",
    period: "1850 CE – PRESENT",
    title: "Modernism",
    description: "The reclamation of identity through global abstraction and localized narratives post-independence.",
    mediaId: "tanjore-commons-primary",
    category: "CONTEMPORARY",
  },
];

export default function TimelinePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen pl-0 lg:pl-20">
      {/* Hero Section */}
      <section ref={heroRef} className="h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 md:px-16">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="z-10 text-center space-y-6 max-w-4xl"
        >
          <h1 className="font-display-hero text-display-hero text-primary tracking-tighter leading-none">
            THE ETERNAL<br />THREAD
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            An interactive odyssey through 5,000 years of Indian artistic mastery. From the Indus seals to modern abstractions, witness the evolution of a civilization&apos;s soul.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 pt-8"
          >
            <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
            <span className="font-label-caps text-label-caps tracking-[0.4em] uppercase text-primary/60">
              Begin the Journey
            </span>
          </motion.div>
        </motion.div>

        {/* Decorative Rangoli */}
        <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] opacity-5 pointer-events-none">
          <svg className="w-full h-full fill-none stroke-primary stroke-[0.5]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="35" />
            <path d="M50 5 L50 95 M5 50 L95 50" />
            <rect height="50" transform="rotate(45 50 50)" width="50" x="25" y="25" />
            <circle cx="50" cy="50" r="10" />
          </svg>
        </div>
      </section>

      {/* Horizontal Timeline */}
      <section className="py-section-gap overflow-x-auto custom-scrollbar flex items-center relative" style={{ height: "80vh" }}>
        <div className="flex items-center px-4 md:px-16 gap-gutter h-full">
          {eras.map((era, index) => (
            <TimelineCard key={era.id} era={era} index={index} />
          ))}
          
          {/* End Marker */}
          <div className="min-w-[300px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mb-6 mx-auto hover:bg-primary/10 transition-colors group cursor-pointer">
                <Sparkles className="w-6 h-6 text-primary group-hover:scale-125 transition-transform" />
              </div>
              <p className="font-label-caps text-label-caps text-outline">The Archive Continues...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="py-section-gap px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[800px]">
          {/* Main Feature */}
          <ScrollReveal className="md:col-span-8 glass-panel relative group overflow-hidden p-8 md:p-12 flex flex-col justify-end h-[500px] md:h-auto">
            <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-1000">
              <MediaFrame
                asset={getRequiredMediaAsset("hero-generated-mandala")}
                className="h-full w-full opacity-40"
                showCredit={false}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            
            <div className="relative z-10 max-w-xl">
              <span className="font-label-caps text-label-caps text-secondary mb-4 block">
                EXHIBITION HIGHLIGHT
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                The Architecture of Silence
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Explore an editorial architecture study where every pillar is presented through sourced notes and careful interpretation.
              </p>
              <Button variant="gold" className="flex items-center gap-3 group">
                VIEW STUDY
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </ScrollReveal>

          {/* Side Cards */}
          <div className="md:col-span-4 grid grid-rows-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="glass-panel p-8 flex flex-col justify-between h-full border-primary/10 hover:border-primary transition-all group">
                <Brush className="w-10 h-10 text-primary mb-6" />
                <div>
                  <h4 className="font-headline-md text-headline-md text-primary mb-2">Restoration</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    AI-driven digital healing of centuries-old murals.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-panel p-8 flex flex-col justify-between h-full border-primary/10 hover:border-primary transition-all group">
                <Video className="w-10 h-10 text-primary mb-6" />
                <div>
                  <h4 className="font-headline-md text-headline-md text-primary mb-2">Documentaries</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Exclusive cinematic interviews with hereditary artists.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function TimelineCard({ era, index }: { era: typeof eras[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <>
      {/* Era Card */}
      <motion.div
        ref={cardRef}
        className={`flex flex-col items-center min-w-[350px] md:min-w-[400px] group ${isEven ? "" : "mt-24 md:mt-32"}`}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {isEven && (
          <div className="mb-12 text-center">
            <span className="font-headline-lg text-headline-lg text-primary block">{era.name}</span>
            <span className="font-label-caps text-label-caps text-outline uppercase">{era.period}</span>
          </div>
        )}

        <div className="glass-panel w-full aspect-[3/4] p-6 group-hover:border-primary transition-all duration-500 flex flex-col">
          <div className="relative overflow-hidden flex-grow mb-6">
            <MediaFrame
              asset={getRequiredMediaAsset(era.mediaId)}
              className="h-full w-full"
              imageClassName={`grayscale group-hover:grayscale-0 transition-all duration-700 ${isEven ? "scale-105 group-hover:scale-100" : ""}`}
              showCredit={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          
          {!isEven && (
            <span className="font-label-caps text-[10px] text-secondary tracking-widest mb-1">{era.category}</span>
          )}
          
          <h3 className="font-headline-md text-headline-md text-primary mb-2">{era.title}</h3>
          <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">{era.description}</p>
        </div>
      </motion.div>

      {/* Connector */}
      {index < eras.length - 1 && (
        <div className="min-w-[100px] md:min-w-[200px] flex items-center">
          <div className="timeline-connector" />
        </div>
      )}
    </>
  );
}

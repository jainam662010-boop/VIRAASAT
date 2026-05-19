"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play, Volume2, Eye, Sparkles } from "lucide-react";
import { AnimatedTitle } from "@/components/animations/text-reveal";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/media";
import { getRequiredMediaAsset } from "@/lib/media-registry";

const experiences = [
  {
    id: "mandala",
    title: "The Cosmic Mandala",
    type: "Interactive Preview",
    duration: "8 min",
    description: "A lightweight concept preview inspired by sacred geometry and mandala composition.",
    mediaId: "hero-generated-mandala",
    features: ["Concept", "Visual Study", "Interactive"],
  },
  {
    id: "temple",
    title: "Temples of Time",
    type: "Concept Experience",
    duration: "15 min",
    description: "An editorial preview exploring how temple architecture can be interpreted in a digital museum setting.",
    mediaId: "tanjore-commons-primary",
    features: ["Architecture", "Context Notes", "Preview"],
  },
  {
    id: "artifact",
    title: "Artifact Examiner",
    type: "Interactive Preview",
    duration: "10 min",
    description: "A guided study layout for examining materials, form, provenance notes, and cultural context.",
    mediaId: "kalamkari-commons-primary",
    features: ["Material Notes", "Context", "Gallery"],
  },
  {
    id: "story",
    title: "Living Stories",
    type: "Narrative Experience",
    duration: "20 min",
    description: "A narrative concept for pairing traditional stories with careful visual annotation and archival context.",
    mediaId: "pattachitra-commons-primary",
    features: ["Voice Narration", "Branching Paths", "Collectibles"],
  },
];

export default function ImmersivePage() {
  return (
    <div className="min-h-screen pt-24 px-4 md:px-16 pb-16">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto mb-16">
        <AnimatedTitle
          title="Immersive Experiences"
          subtitle="Explore concept previews that show how Indian art, craft, and architecture can be interpreted with careful digital storytelling."
        />

        {/* Featured Experience */}
        <ScrollReveal>
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden glass-panel mb-16">
            <MediaFrame
              asset={getRequiredMediaAsset(experiences[0].mediaId)}
              className="absolute inset-0"
              showCredit={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary text-on-primary px-3 py-1 rounded-full font-label-caps text-[10px]">
                  FEATURED
                </span>
                <span className="text-on-surface-variant font-label-caps text-[10px]">
                  {experiences[0].type}
                </span>
              </div>
              
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                {experiences[0].title}
              </h2>
              
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-6">
                {experiences[0].description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {experiences[0].features.map((feature) => (
                  <span key={feature} className="bg-surface-container/80 px-3 py-1 rounded-full text-[10px] text-on-surface">
                    {feature}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button size="lg">
                  <Play className="w-5 h-5 mr-2" />
                  Open Preview
                </Button>
                <Button variant="outline" size="lg">
                  <Volume2 className="w-5 h-5 mr-2" />
                  Audio Notes
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Experience Grid */}
      <section className="max-w-container-max mx-auto">
        <h3 className="font-headline-md text-headline-md text-primary mb-8">More Experiences</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </section>

      {/* Concept Section */}
      <section className="max-w-container-max mx-auto mt-24">
        <ScrollReveal>
          <div className="glass-panel p-8 md:p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-gold mx-auto mb-6 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-on-primary" />
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
              Experimental Digital Interpretation
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
              These previews are clearly marked as concepts. They support learning and atmosphere without presenting generated or experimental material as historical evidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg">
                Explore Concepts
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                View Source Policy
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-panel overflow-hidden cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <MediaFrame
          asset={getRequiredMediaAsset(experience.mediaId)}
          className="absolute inset-0"
          imageClassName="transition-transform duration-500 group-hover:scale-105"
          showCredit={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Duration Badge */}
        <div className="absolute top-4 right-4 bg-surface-container/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="font-label-caps text-[10px] text-on-surface">{experience.duration}</span>
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            <Play className="w-6 h-6 text-on-primary ml-1" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-surface-container-high px-2 py-1 rounded text-[10px] text-primary">
            {experience.type}
          </span>
        </div>

        <h4 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">
          {experience.title}
        </h4>

        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-4">
          {experience.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {experience.features.map((feature) => (
            <span key={feature} className="text-[10px] text-on-surface-variant/60">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

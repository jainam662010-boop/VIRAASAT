"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Users, Clock } from "lucide-react";
import { AnimatedTitle } from "@/components/animations/text-reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/scroll-reveal";
import { MediaFrame } from "@/components/media";
import { indianArtForms } from "@/data/indian-art-forms";
import { getRequiredMediaAsset } from "@/lib/media-registry";

const artForms = indianArtForms.map(art => ({
  id: art.id,
  name: art.name,
  region: art.origin.region,
  media: getRequiredMediaAsset(art.media.hero),
  description: art.description,
  techniques: art.techniques.slice(0, 3),
  artists: `${art.famousArtists.length}+`,
  history: art.origin.period,
  sanskritName: art.sanskritName,
  materials: art.materials.slice(0, 3),
  symbolism: art.symbolism.slice(0, 3),
}));

export default function ArtFormsPage() {
  return (
    <div className="min-h-screen pt-24 px-4 md:px-16 pb-16">
      {/* Header */}
      <section className="max-w-container-max mx-auto mb-16">
        <AnimatedTitle
          title="Art Forms"
          subtitle="Discover the rich diversity of Indian artistic traditions. Each form carries centuries of cultural wisdom, unique techniques, and regional character."
        />
      </section>

      {/* Art Forms Grid */}
      <section className="max-w-container-max mx-auto">
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {artForms.map((art) => (
            <StaggerItem key={art.id}>
              <ArtFormCard art={art} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}

function ArtFormCard({ art }: { art: typeof artForms[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="group glass-panel overflow-hidden cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <MediaFrame
          asset={art.media}
          className="h-full w-full"
          imageClassName="transition-transform duration-700 group-hover:scale-105"
          showCredit={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        
        {/* Region Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-surface-container/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <MapPin className="w-3 h-3 text-primary" />
          <span className="font-label-caps text-[10px] text-on-surface">{art.region}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <h3 className="font-headline-lg text-headline-lg text-primary mb-4 group-hover:text-primary transition-colors">
          {art.name}
        </h3>
        
        <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
          {art.description}
        </p>

        {/* Techniques */}
        <div className="flex flex-wrap gap-2 mb-6">
          {art.techniques.map((technique) => (
            <span
              key={technique}
              className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] text-on-surface-variant"
            >
              {technique}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 pt-6 border-t border-outline-variant/20">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary/60" />
            <span className="text-sm text-on-surface-variant">{art.artists} Artists</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary/60" />
            <span className="text-sm text-on-surface-variant">{art.history}</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/art-forms/${art.id}/`}
          className="mt-6 flex items-center justify-center gap-2 py-4 border border-outline-variant/30 rounded hover:border-primary hover:text-primary transition-all font-label-caps text-label-caps tracking-wider group/link"
        >
          Explore Art Form
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

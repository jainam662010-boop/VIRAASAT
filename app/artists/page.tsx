"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin, Award, Users } from "lucide-react";
import { AnimatedTitle } from "@/components/animations/text-reveal";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/scroll-reveal";
import { MediaFrame } from "@/components/media";
import { getRequiredMediaAsset } from "@/lib/media-registry";

const artists = [
  {
    id: "santosh",
    name: "Santosh Kumar Das",
    artForm: "Madhubani Painting",
    location: "Madhubani, Bihar",
    mediaId: "madhubani-commons-primary",
    bio: "A master of the ancient Madhubani tradition, Santosh has been preserving this art form for over 40 years, mentoring hundreds of young artists.",
    awards: ["Padma Shri", "National Award"],
    disciples: 127,
  },
  {
    id: "rajkumar",
    name: "Rajkumar Sthabathy",
    artForm: "Tanjore Painting",
    location: "Thanjavur, Tamil Nadu",
    mediaId: "tanjore-commons-primary",
    bio: "Carrying forward a 5-generation legacy of Tanjore painting, Rajkumar specializes in gold foil work and traditional color preparation.",
    awards: ["Shilp Guru", "State Award"],
    disciples: 89,
  },
  {
    id: "kamala",
    name: "Kamala Devi",
    artForm: "Warli Art",
    location: "Thane, Maharashtra",
    mediaId: "warli-commons-primary",
    bio: "A tribal artist who has brought Warli art to international recognition. Her work bridges ancient tribal traditions with contemporary themes.",
    awards: ["National Merit Award"],
    disciples: 203,
  },
  {
    id: "mohan",
    name: "Mohan Sahu",
    artForm: "Pattachitra",
    location: "Puri, Odisha",
    mediaId: "pattachitra-commons-primary",
    bio: "Mohan is renowned for his intricate palm leaf manuscripts and cloth-based scroll paintings depicting mythological narratives.",
    awards: ["President's Award", "Odisha State Award"],
    disciples: 64,
  },
  {
    id: "fatima",
    name: "Fatima Begum",
    artForm: "Blue Pottery",
    location: "Jaipur, Rajasthan",
    mediaId: "hero-generated-mandala",
    bio: "The first woman master of traditional Jaipur blue pottery, Fatima has revived ancient techniques and created new design vocabularies.",
    awards: ["Nari Shakti Puraskar", "Rajasthan State Award"],
    disciples: 156,
  },
  {
    id: "lakshmi",
    name: "Lakshmi Narayan",
    artForm: "Chikankari Embroidery",
    location: "Lucknow, Uttar Pradesh",
    mediaId: "kalamkari-commons-primary",
    bio: "A fourth-generation Chikankari artisan, Lakshmi runs a cooperative empowering over 500 women artisans in rural Lucknow.",
    awards: ["Padma Shri", "UNESCO Seal of Excellence"],
    disciples: 547,
  },
];

export default function ArtistsPage() {
  return (
    <div className="min-h-screen pt-24 px-4 md:px-16 pb-16">
      {/* Header */}
      <section className="max-w-container-max mx-auto mb-16">
        <AnimatedTitle
          title="Master Artisans"
          subtitle="Meet the living treasures of Indian art - custodians of ancient traditions who dedicate their lives to preserving cultural heritage."
        />
      </section>

      {/* Stats Bar */}
      <section className="max-w-container-max mx-auto mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "2,400+", label: "Verified Artists" },
            { value: "150+", label: "Art Forms" },
            { value: "28", label: "States Covered" },
            { value: "40+", label: "Padma Awardees" },
          ].map((stat, index) => (
            <div key={index} className="glass-panel p-6 text-center">
              <span className="font-headline-md text-headline-md text-primary block">{stat.value}</span>
              <span className="font-label-caps text-[10px] text-on-surface-variant tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Artists Grid */}
      <section className="max-w-container-max mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <StaggerItem key={artist.id}>
              <ArtistCard artist={artist} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}

function ArtistCard({ artist }: { artist: typeof artists[0] }) {
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
      {/* Header Image */}
      <div className="relative h-48 overflow-hidden">
        <MediaFrame
          asset={getRequiredMediaAsset(artist.mediaId)}
          className="h-full w-full"
          imageClassName="transition-transform duration-500 group-hover:scale-105"
          showCredit={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Location Badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-surface-container/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <MapPin className="w-3 h-3 text-primary" />
          <span className="font-label-caps text-[10px] text-on-surface">{artist.location}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="font-label-caps text-[10px] text-primary tracking-wider">{artist.artForm}</span>
        <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-3 group-hover:text-primary transition-colors">
          {artist.name}
        </h3>
        
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-4">
          {artist.bio}
        </p>

        {/* Awards & Stats */}
        <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/20">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-primary/60" />
            <span className="text-xs text-on-surface-variant">{artist.awards.length} Awards</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary/60" />
            <span className="text-xs text-on-surface-variant">{artist.disciples} Disciples</span>
          </div>
        </div>

        {/* Awards List */}
        <div className="mt-4 flex flex-wrap gap-2">
          {artist.awards.slice(0, 2).map((award) => (
            <span key={award} className="bg-surface-container-high px-2 py-1 rounded text-[10px] text-on-surface-variant">
              {award}
            </span>
          ))}
          {artist.awards.length > 2 && (
            <span className="bg-surface-container-high px-2 py-1 rounded text-[10px] text-on-surface-variant">
              +{artist.awards.length - 2}
            </span>
          )}
        </div>

        {/* CTA */}
        <button className="mt-6 w-full flex items-center justify-center gap-2 py-3 border border-outline-variant/30 rounded hover:border-primary hover:text-primary transition-all font-label-caps text-[10px] tracking-wider">
          View Profile
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

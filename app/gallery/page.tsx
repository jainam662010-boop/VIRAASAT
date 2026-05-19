"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Search, Filter, X, ArrowUpRight, Heart, Share2, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedTitle } from "@/components/animations/text-reveal";
import { MediaFrame } from "@/components/media";
import { getRequiredMediaAsset } from "@/lib/media-registry";

const categories = ["All", "Paintings", "Sculpture", "Textiles", "Pottery", "Jewelry", "Architecture"];

const artworks = [
  {
    id: 1,
    title: "Divine Lotus",
    artist: "Unknown Master",
    category: "Paintings",
    year: "1650",
    mediaId: "madhubani-commons-primary",
    description: "A masterful representation of the sacred lotus in the Mughal miniature tradition.",
    region: "Delhi",
  },
  {
    id: 2,
    title: "Temple Guardian",
    artist: "Chola Dynasty",
    category: "Sculpture",
    year: "1100",
    mediaId: "tanjore-commons-primary",
    description: "Bronze sculpture of a divine guardian from the Chola period.",
    region: "Tamil Nadu",
  },
  {
    id: 3,
    title: "Silk Threads",
    artist: "Master Weaver",
    category: "Textiles",
    year: "1850",
    mediaId: "kalamkari-commons-primary",
    description: "Intricate silk weaving from the royal workshops of Mysore.",
    region: "Karnataka",
  },
  {
    id: 4,
    title: "Blue Pottery",
    artist: "Jaipur Artisan",
    category: "Pottery",
    year: "1920",
    mediaId: "warli-commons-primary",
    description: "Traditional blue pottery with Persian-inspired floral patterns.",
    region: "Rajasthan",
  },
  {
    id: 5,
    title: "Royal Necklace",
    artist: "Court Jeweler",
    category: "Jewelry",
    year: "1750",
    mediaId: "pattachitra-commons-primary",
    description: "Gold and gemstone necklace from the royal treasury.",
    region: "Hyderabad",
  },
  {
    id: 6,
    title: "Palace Facade",
    artist: "Imperial Architects",
    category: "Architecture",
    year: "1560",
    mediaId: "hero-generated-mandala",
    description: "Marble facade of a Mughal palace with intricate inlay work.",
    region: "Agra",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);

  const filteredArtworks = artworks.filter((artwork) => {
    const matchesCategory = selectedCategory === "All" || artwork.category === selectedCategory;
    const matchesSearch = artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artwork.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 px-4 md:px-16 pb-16">
      {/* Header */}
      <section className="max-w-container-max mx-auto mb-12">
        <AnimatedTitle
          title="The Archives"
          subtitle="Explore our curated collection of Indian artistic masterpieces, spanning millennia of creative excellence."
        />
      </section>

      {/* Filters */}
      <section className="max-w-container-max mx-auto mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-label-caps text-[10px] px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container text-on-surface-variant hover:text-primary border border-outline-variant/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search artworks, artists, regions..."
              className="w-full bg-surface-container border border-outline-variant/30 rounded-full px-12 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-container-max mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredArtworks.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                onClick={() => setSelectedArtwork(artwork)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body-lg text-on-surface-variant">No artworks found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </section>

      {/* Artwork Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedArtwork(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-panel max-w-5xl w-full max-h-[90vh] overflow-auto rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <MediaFrame
                    asset={getRequiredMediaAsset(selectedArtwork.mediaId)}
                    className="h-full w-full"
                    showCredit={false}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="font-label-caps text-[10px] text-primary tracking-wider">{selectedArtwork.category}</span>
                      <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">{selectedArtwork.title}</h2>
                    </div>
                    <button
                      onClick={() => setSelectedArtwork(null)}
                      className="p-2 hover:bg-surface-container rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-on-surface-variant" />
                    </button>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-on-surface-variant">Artist:</span>
                      <span className="text-on-surface">{selectedArtwork.artist}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-on-surface-variant">Year:</span>
                      <span className="text-on-surface">{selectedArtwork.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-on-surface-variant">Region:</span>
                      <span className="text-on-surface">{selectedArtwork.region}</span>
                    </div>
                  </div>
                  
                  <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                    {selectedArtwork.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <Button variant="gold" className="flex-1">
                      <Maximize2 className="w-4 h-4 mr-2" />
                      View Fullscreen
                    </Button>
                    <Button variant="outline" className="px-4">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="px-4">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ArtworkCard({ artwork, onClick }: { artwork: typeof artworks[0]; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="glass-panel overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <MediaFrame
            asset={getRequiredMediaAsset(artwork.mediaId)}
            className="h-full w-full"
            imageClassName="transition-transform duration-500 group-hover:scale-105"
            showCredit={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-primary" />
            </div>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-surface-container/80 backdrop-blur-sm px-3 py-1 rounded-full font-label-caps text-[10px] text-primary">
              {artwork.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">
            {artwork.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {artwork.artist} • {artwork.year}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-xs text-primary/60">{artwork.region}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

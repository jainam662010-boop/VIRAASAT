"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ChevronRight, MapPin, Sparkles } from "lucide-react";

// Heritage regions data
const heritageRegions = [
  {
    id: "south-india",
    title: "South India",
    subtitle: "Temples of Divine Architecture",
    description: "Where stone becomes poetry and devotion takes form",
    color: "#d4af37",
    heritage: [
      { name: "Brihadeeswara Temple", type: "Architecture", period: "11th Century" },
      { name: "Meenakshi Temple", type: "Architecture", period: "13th Century" },
      { name: "Kalamkari", type: "Textile Art", period: "Ancient - Present" },
      { name: "Chola Bronzes", type: "Sculpture", period: "9th-13th Century" },
      { name: "Bharatanatyam", type: "Performing Art", period: "Ancient - Present" }
    ]
  },
  {
    id: "rajasthan",
    title: "Rajasthan",
    subtitle: "Land of Warriors and Artists",
    description: "Where valor meets artistic magnificence",
    color: "#8b7355",
    heritage: [
      { name: "Rajput Miniatures", type: "Painting", period: "16th-19th Century" },
      { name: "Stepwells", type: "Architecture", period: "8th-18th Century" },
      { name: "Fort Architecture", type: "Architecture", period: "15th-18th Century" },
      { name: "Pichwai Paintings", type: "Painting", period: "17th Century - Present" },
      { name: "Blue Pottery", type: "Craft", period: "16th Century - Present" }
    ]
  },
  {
    id: "madhya-pradesh",
    title: "Madhya Pradesh",
    subtitle: "Heart of Ancient Traditions",
    description: "Where tribal wisdom meets classical art",
    color: "#ff9933",
    heritage: [
      { name: "Gond Art", type: "Tribal Art", period: "Ancient - Present" },
      { name: "Khajuraho Temples", type: "Architecture", period: "10th-12th Century" },
      { name: "Tribal Traditions", type: "Folk Art", period: "Ancient - Present" },
      { name: "Bagh Prints", type: "Textile Art", period: "20th Century - Present" },
      { name: "Stone Carvings", type: "Sculpture", period: "Medieval Period" }
    ]
  },
  {
    id: "west-bengal",
    title: "West Bengal",
    subtitle: "Cultural Crossroads of Bengal",
    description: "Where art flows like the Ganges",
    color: "#2e4057",
    heritage: [
      { name: "Kalighat Paintings", type: "Painting", period: "19th Century - Present" },
      { name: "Terracotta Temples", type: "Architecture", period: "17th-19th Century" },
      { name: "Kantha Embroidery", type: "Textile Art", period: "Ancient - Present" },
      { name: "Clay Dolls", type: "Craft", period: "Traditional - Present" },
      { name: "Chhau Dance", type: "Performing Art", period: "Ancient - Present" }
    ]
  }
];

export function HeritageExploration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-museum-black via-stone-charcoal to-temple-shadow"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 museum-light" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, rgba(139, 115, 85, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(255, 153, 51, 0.08) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Content */}
      <motion.div 
        className="relative z-50 max-w-7xl mx-auto px-8"
        style={{ opacity, y }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-hero font-display mb-6">
            Heritage Across India
          </h2>
          <p className="text-subtitle font-body max-w-3xl mx-auto">
            Journey through the diverse cultural landscapes that have shaped India's artistic legacy
          </p>
        </motion.div>
        
        {/* Heritage Regions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {heritageRegions.map((region, index) => (
            <motion.div
              key={region.id}
              className="glass-panel p-8 cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onClick={() => setActiveRegion(activeRegion === region.id ? null : region.id)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Region Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 
                    className="text-2xl font-display mb-2"
                    style={{ color: region.color }}
                  >
                    {region.title}
                  </h3>
                  <p className="text-caption font-mono text-ivory-cream/80">
                    {region.subtitle}
                  </p>
                </div>
                <motion.div
                  className="p-2 rounded-full"
                  style={{ backgroundColor: `${region.color}20` }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight 
                    size={20} 
                    style={{ color: region.color }}
                  />
                </motion.div>
              </div>
              
              {/* Description */}
              <p className="text-body text-ivory-cream/90 mb-6 leading-relaxed">
                {region.description}
              </p>
              
              {/* Heritage Items */}
              <div className="space-y-3">
                {region.heritage.map((item, itemIndex) => (
                  <motion.div
                    key={`${region.id}-${itemIndex}`}
                    className="flex items-center gap-3 p-3 rounded-lg glass-panel-dark"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: activeRegion === region.id ? 1 : 0.8,
                      x: 0
                    }}
                    transition={{ 
                      duration: 0.4,
                      delay: activeRegion === region.id ? itemIndex * 0.1 : 0
                    }}
                  >
                    <MapPin 
                      size={16} 
                      style={{ color: region.color }}
                      className="flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-body font-medium text-ivory-cream">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-caption font-mono text-ivory-cream/60">
                          {item.type}
                        </span>
                        <span className="text-caption font-mono text-ivory-cream/40">
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${region.color}10 0%, transparent 100%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Section Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-caption font-mono text-ivory-cream/60 mb-4">
            HERITAGE LIVES THROUGH TRADITION
          </p>
          <div className="flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-temple-gold" />
            <span className="text-body text-ivory-cream/80">
              Every region tells a story
            </span>
            <Sparkles size={16} className="text-temple-gold" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

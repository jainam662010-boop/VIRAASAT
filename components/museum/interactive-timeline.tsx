"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Art eras data
const artEras = [
  {
    id: "indus-valley",
    name: "Indus Valley Civilization",
    period: "3300-1300 BCE",
    description: "Advanced urban planning and metallurgy",
    color: "#8B4513",
    position: -6,
    preview: "bronze casting, terracotta, urban artifacts"
  },
  {
    id: "vedic",
    name: "Vedic Period",
    period: "1500-500 BCE",
    description: "Ritual art and early sculpture",
    color: "#CD853F",
    position: -4,
    preview: "ritual objects, early figurines, symbolic art"
  },
  {
    id: "mauryan",
    name: "Mauryan Empire",
    period: "322-185 BCE",
    description: "Monumental stone sculpture and architecture",
    color: "#A0522D",
    position: -2,
    preview: "stone pillars, monumental sculpture, court art"
  },
  {
    id: "gupta",
    name: "Gupta Golden Age",
    period: "320-550 CE",
    description: "Classical sculpture and cave paintings",
    color: "#FFD700",
    position: 0,
    preview: "buddhist art, classical sculpture, cave murals"
  },
  {
    id: "chola",
    name: "Chola Dynasty",
    period: "850-1250 CE",
    description: "Bronze casting and temple architecture",
    color: "#B8860B",
    position: 2,
    preview: "bronze statues, temple architecture, intricate carvings"
  },
  {
    id: "mughal",
    name: "Mughal Era",
    period: "1526-1857 CE",
    description: "Miniature painting and Islamic architecture",
    color: "#4B0082",
    position: 4,
    preview: "miniature paintings, calligraphy, monumental architecture"
  },
  {
    id: "colonial",
    name: "Colonial Period",
    period: "1857-1947 CE",
    description: "Academic painting and revival movements",
    color: "#2C5F2D",
    position: 6,
    preview: "academic painting, revival movements, hybrid styles"
  },
  {
    id: "contemporary",
    name: "Contemporary India",
    period: "1947-Present",
    description: "Traditional techniques in modern context",
    color: "#FF6B35",
    position: 8,
    preview: "weaving, metalwork, pottery, sustainable practices"
  }
];

// Timeline Content Component
function TimelineContent({ era }: { era: typeof artEras[0] }) {
  return (
    <motion.div
      className="glass-panel p-8 max-w-md mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: era.color }}
        />
        <div>
          <h3 className="text-2xl font-display text-ivory-cream mb-2">
            {era.name}
          </h3>
          <p className="text-caption font-mono text-temple-gold">
            {era.period}
          </p>
        </div>
      </div>
      
      <p className="text-body text-ivory-cream/90 mb-6">
        {era.description}
      </p>
      
      <div className="space-y-3">
        <p className="text-caption font-mono text-ivory-cream/70">
          KEY ARTIFACTS:
        </p>
        <div className="flex flex-wrap gap-2">
          {era.preview.split(', ').map((item, index) => (
            <span 
              key={index}
              className="text-body text-ivory-cream/80 bg-stone-charcoal/30 px-3 py-1 rounded"
            >
              {item.trim()}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function InteractiveTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeEra, setActiveEra] = useState(3); // Gupta Golden Age as default

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  
  const viewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(viewRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-museum-black via-stone-charcoal to-temple-shadow"
    >
      {/* Timeline Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 museum-light" />
        <motion.div
          className="absolute inset-0"
          style={{ opacity }}
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.05) 0%, transparent 40%)",
              "radial-gradient(circle at 80% 70%, rgba(139, 115, 85, 0.05) 0%, transparent 40%)",
              "radial-gradient(circle at 50% 50%, rgba(255, 153, 51, 0.05) 0%, transparent 40%)",
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Timeline Content */}
      <div ref={viewRef} className="absolute inset-0 z-10">
        {inView && (
          <motion.div
            className="absolute inset-0"
            style={{ scale }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center max-w-6xl mx-auto px-8">
                <motion.h2
                  className="text-hero font-display mb-12 text-temple-gold"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                >
                  Journey Through Time
                </motion.h2>
                
                {/* Timeline Visualization */}
                <div className="relative mb-12">
                  <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-temple-gold via-stone-charcoal to-temple-gold opacity-30" />
                  <div className="relative flex justify-between items-center">
                    {artEras.map((era, index) => (
                      <motion.div
                        key={era.id}
                        className="relative"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      >
                        <motion.button
                          className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                            activeEra === index 
                              ? 'border-temple-gold scale-150' 
                              : 'border-stone-charcoal/50 hover:border-stone-charcoal/80'
                          }`}
                          style={{ backgroundColor: activeEra === index ? era.color : undefined }}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setActiveEra(index)}
                        />
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                          <p className="text-caption font-mono text-ivory-cream/70">
                            {era.period.split('-')[0]}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Era Information */}
                <motion.div
                  className="glass-panel p-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <TimelineContent era={artEras[activeEra]} />
                </motion.div>
                
                {/* Interactive Hint */}
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  <div className="glass-panel inline-block px-6 py-3">
                    <p className="text-caption font-mono text-ivory-cream/80">
                      CLICK DOTS TO EXPLORE • SCROLL TO CONTINUE
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

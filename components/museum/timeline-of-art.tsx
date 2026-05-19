"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ChevronRight, Clock, Sparkles } from "lucide-react";

// Timeline data with expanded Indian art history
const timelineData = [
  {
    id: "indus-valley",
    period: "3000-1500 BCE",
    title: "Indus Valley Civilization",
    subtitle: "Dawn of Indian Art",
    description: "Sophisticated urban culture with advanced metallurgy, seal carving, and urban planning that influenced subsequent Indian artistic traditions for millennia.",
    highlights: [
      "Bronze statuettes including the famous Dancing Girl from Mohenjo-daro",
      "Terracotta figurines depicting mother goddesses and daily life",
      "Intricate seal carvings with unicorn motifs and script",
      "Advanced pottery with geometric patterns and naturalistic designs",
      "Jewelry made of gold, silver, and precious stones",
      "Sophisticated beadwork and craftsmanship"
    ],
    color: "#8B4513",
    image: "/media/images/indus-valley.jpg",
    artifacts: ["Dancing Girl Bronze", "Priest-King Statue", "Unicorn Seals", "Pottery Shards"],
    culturalImpact: "Established foundation for Indian metallurgy and iconography"
  },
  {
    id: "tribal-folk",
    period: "3000 BCE - 500 CE",
    title: "Tribal & Folk Traditions",
    subtitle: "The Roots of Indian Artistry",
    description: "Ancient artistic expressions emerging from tribal communities across the subcontinent",
    color: "#8B4513",
    highlights: [
      "Warli tribal paintings",
      "Bhil rock art", 
      "Gond tribal traditions",
      "Saura pictographs"
    ]
  },
  {
    id: "classical-temple",
    period: "500 CE - 1200 CE",
    title: "Classical Temple Architecture",
    subtitle: "Sacred Geometry in Stone",
    description: "The golden age of temple construction and religious art across India",
    color: "#D4AF37",
    highlights: [
      "Dravidian temples",
      "Nagara architecture",
      "Chola bronzes",
      "Temple sculptures"
    ]
  },
  {
    id: "miniature-paintings",
    period: "1200 CE - 1800 CE",
    title: "Miniature Paintings",
    subtitle: "Intimate Worlds of Art",
    description: "Delicate paintings capturing court life, mythology, and nature in exquisite detail",
    color: "#FF6B35",
    highlights: [
      "Mughal miniatures",
      "Rajput paintings",
      "Pahari art",
      "Deccani manuscripts"
    ]
  },
  {
    id: "mughal-rajput",
    period: "1500 CE - 1850 CE",
    title: "Mughal & Rajput Courts",
    subtitle: "Imperial Patronage",
    description: "Art flourishing under royal patronage with distinctive regional styles",
    color: "#1E3A8A",
    highlights: [
      "Mughal architecture",
      "Rajput frescoes",
      "Court paintings",
      "Textile arts"
    ]
  },
  {
    id: "colonial-modern",
    period: "1850 CE - 1950 CE",
    title: "Colonial & Modern Movements",
    subtitle: "Art in Transition",
    description: "Traditional arts meeting modern influences and nationalist movements",
    color: "#DC2626",
    highlights: [
      "Bengal School",
      "Modernist experiments",
      "Nationalist art",
      "Academic traditions"
    ]
  },
  {
    id: "contemporary",
    period: "1950 CE - Present",
    title: "Living Crafts & Textiles",
    subtitle: "Contemporary Heritage",
    description: "Traditional arts evolving in the modern world while preserving cultural identity",
    color: "#059669",
    highlights: [
      "Contemporary crafts",
      "Textile revivals",
      "Digital interpretations",
      "Global recognition"
    ]
  }
];

export function TimelineOfArt() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeEra, setActiveEra] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <section
      id="hero-content"
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-surface via-surface-container to-museum-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 museum-light" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.06) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(139, 115, 85, 0.06) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(255, 153, 51, 0.06) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 15,
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
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Clock className="w-6 h-6 text-temple-gold" />
            <span className="text-caption font-mono text-temple-gold tracking-widest">
              5,000 YEARS OF ARTISTRY
            </span>
            <Clock className="w-6 h-6 text-temple-gold" />
          </motion.div>
          
          <h2 className="text-hero font-display mb-6">
            Timeline of Indian Art
          </h2>
          <p className="text-subtitle font-body max-w-3xl mx-auto">
            Journey through the epochs that shaped India's magnificent artistic heritage
          </p>
        </motion.div>
        
        {/* Timeline Grid */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-temple-gold via-stone-charcoal to-temple-gold transform -translate-x-1/2" />
          
          {/* Timeline Eras */}
          <div className="space-y-24">
            {timelineData.map((era, index) => (
              <motion.div
                key={era.id}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-museum-black z-10"
                  style={{ backgroundColor: era.color }}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Era Card */}
                <motion.div
                  className={`w-5/12 glass-panel p-8 cursor-pointer group ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                  onClick={() => setActiveEra(activeEra === era.id ? null : era.id)}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    borderLeft: index % 2 === 0 ? `4px solid ${era.color}` : 'none',
                    borderRight: index % 2 === 1 ? `4px solid ${era.color}` : 'none',
                  }}
                >
                  {/* Era Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-caption font-mono text-ivory-cream/60 mb-2">
                        {era.period}
                      </p>
                      <h3 
                        className="text-2xl font-display mb-2"
                        style={{ color: era.color }}
                      >
                        {era.title}
                      </h3>
                      <p className="text-caption font-mono text-ivory-cream/80">
                        {era.subtitle}
                      </p>
                    </div>
                    <motion.div
                      className="p-2 rounded-full"
                      style={{ backgroundColor: `${era.color}20` }}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight 
                        size={20} 
                        style={{ color: era.color }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-body text-ivory-cream/90 mb-6 leading-relaxed">
                    {era.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className={`space-y-2 ${activeEra === era.id ? 'block' : 'hidden'}`}>
                    {era.highlights.map((highlight, highlightIndex) => (
                      <motion.div
                        key={highlightIndex}
                        className="flex items-center gap-3 p-2 rounded-lg glass-panel-dark"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4,
                          delay: highlightIndex * 0.1
                        }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: era.color }}
                        />
                        <span className="text-body text-ivory-cream/80">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Section Footer */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sparkles size={20} className="text-temple-gold" />
            <p className="text-caption font-mono text-ivory-cream/60">
              ART EVOLVES THROUGH TIME
            </p>
            <Sparkles size={20} className="text-temple-gold" />
          </div>
          <p className="text-body text-ivory-cream/80">
            Each era contributes to the rich tapestry of Indian civilization
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

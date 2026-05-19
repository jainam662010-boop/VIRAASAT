"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Camera, Mountain } from "lucide-react";

// Architecture monuments data
const architectureMonuments = [
  {
    id: "brihadeeswara",
    name: "Brihadeeswara Temple",
    location: "Thanjavur, Tamil Nadu",
    period: "11th Century CE",
    style: "Dravidian Architecture",
    description: "UNESCO World Heritage site featuring one of India's tallest temple towers",
    features: ["216 ft vimana", "Monolithic Nandi", "Granite construction", "Chola masterpiece"],
    color: "#D4AF37",
    gradient: "from-amber-900/20 to-yellow-800/20"
  },
  {
    id: "khajuraho",
    name: "Khajuraho Temples", 
    location: "Madhya Pradesh",
    period: "10th-12th Century CE",
    style: "Chandela Architecture",
    description: "Famous for intricate sculptures and artistic excellence in Nagara style",
    features: ["85 original temples", "Intricate carvings", "Artistic sculptures", "Architectural harmony"],
    color: "#DC2626", 
    gradient: "from-rose-900/20 to-red-800/20"
  },
  {
    id: "konark",
    name: "Konark Sun Temple",
    location: "Odisha",
    period: "13th Century CE", 
    style: "Kalinga Architecture",
    description: "Designed as a colossal chariot of the sun god with exquisite stone carvings",
    features: ["Chariot design", "24 wheels", "Seven horses", "Solar alignment"],
    color: "#FF6B35",
    gradient: "from-orange-900/20 to-amber-800/20"
  },
  {
    id: "meenakshi",
    name: "Meenakshi Temple",
    location: "Madurai, Tamil Nadu",
    period: "13th-18th Century CE",
    style: "Dravidian Architecture", 
    description: "Massive temple complex with towering gopurams covered in vibrant sculptures",
    features: ["14 gopurams", "33,000 sculptures", "Sacred tanks", "Architectural grandeur"],
    color: "#059669",
    gradient: "from-green-900/20 to-emerald-800/20"
  },
  {
    id: "ajanta",
    name: "Ajanta Caves",
    location: "Maharashtra",
    period: "2nd Century BCE - 480 CE",
    style: "Rock-Cut Architecture",
    description: "Buddhist rock-cut cave monuments with ancient murals and sculptures",
    features: ["30 caves", "Ancient murals", "Rock-cut architecture", "Buddhist art"],
    color: "#1E3A8A",
    gradient: "from-blue-900/20 to-indigo-800/20"
  },
  {
    id: "hampi",
    name: "Hampi Ruins",
    location: "Karnataka",
    period: "14th-16th Century CE",
    style: "Vijayanagara Architecture",
    description: "Ancient city ruins showcasing grand temple architecture and urban planning",
    features: ["1,600 monuments", "Stone chariot", "Virupaksha temple", "Ancient city"],
    color: "#8B4513",
    gradient: "from-stone-900/20 to-brown-800/20"
  }
];

export function ArchitectureExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMonument, setActiveMonument] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-surface-container via-museum-black to-stone-charcoal"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 museum-light" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 25%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 75%, rgba(139, 69, 19, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.08) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 16,
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
            <Building2 className="w-6 h-6 text-temple-gold" />
            <span className="text-caption font-mono text-temple-gold tracking-widest">
              MONUMENTAL ARCHITECTURE
            </span>
            <Building2 className="w-6 h-6 text-temple-gold" />
          </motion.div>
          
          <h2 className="text-hero font-display mb-6">
            Architectural Heritage
          </h2>
          <p className="text-subtitle font-body max-w-3xl mx-auto">
            Explore India's magnificent architectural marvels that stand as testaments to artistic genius
          </p>
        </motion.div>
        
        {/* Monuments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {architectureMonuments.map((monument, index) => {
            const Icon = index % 3 === 0 ? Building2 : index % 3 === 1 ? Mountain : Camera;
            
            return (
              <motion.div
                key={monument.id}
                className={`relative group cursor-pointer glass-panel p-8 bg-gradient-to-br ${monument.gradient}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                onClick={() => setActiveMonument(activeMonument === monument.id ? null : monument.id)}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  borderTop: `4px solid ${monument.color}`,
                }}
              >
                {/* Monument Header */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 
                        className="text-2xl font-display mb-2"
                        style={{ color: monument.color }}
                      >
                        {monument.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon 
                          size={16} 
                          style={{ color: monument.color }}
                        />
                        <span className="text-caption font-mono text-ivory-cream/80">
                          {monument.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-caption font-mono text-ivory-cream/60">
                          {monument.period}
                        </span>
                        <span 
                          className="text-caption font-mono px-2 py-1 rounded"
                          style={{ 
                            backgroundColor: `${monument.color}20`,
                            color: monument.color 
                          }}
                        >
                          {monument.style}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-body text-ivory-cream/90 mb-6 leading-relaxed">
                    {monument.description}
                  </p>
                  
                  {/* Expandable Features */}
                  <motion.div
                    className={`overflow-hidden ${activeMonument === monument.id ? 'max-h-64' : 'max-h-0'}`}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="pt-4 border-t border-ivory-cream/20">
                      <h4 className="text-body font-medium text-ivory-cream mb-3">
                        Architectural Features
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {monument.features.map((feature, featureIndex) => (
                          <motion.div
                            key={`${monument.id}-feature-${featureIndex}`}
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.3,
                              delay: featureIndex * 0.1
                            }}
                          >
                            <div 
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: monument.color }}
                            />
                            <span className="text-caption text-ivory-cream/70">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${monument.color}15 0%, transparent 100%)`
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Architectural Styles Overview */}
        <motion.div
          className="glass-panel p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-2xl font-display mb-6 text-center text-temple-gold">
            Architectural Styles Through Time
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Dravidian", period: "600 BCE - Present", key: "Southern temple architecture with towering gopurams" },
              { name: "Nagara", period: "400 CE - Present", key: "Northern style with beehive-shaped towers" },
              { name: "Vesara", period: "700 CE - 1300 CE", key: "Hybrid style combining Dravidian and Nagara elements" },
              { name: "Kalinga", period: "800 CE - 1500 CE", key: "Odisha style with pyramid-shaped towers" },
              { name: "Indo-Islamic", period: "1200 CE - 1857 CE", key: "Fusion of Indian and Islamic architectural elements" },
              { name: "Colonial", period: "1600 CE - 1947 CE", key: "European influences adapted to Indian context" }
            ].map((style, styleIndex) => (
              <motion.div
                key={`${style.name.toLowerCase().replace(/\s+/g, '-')}-${styleIndex}`}
                className="p-4 glass-panel-dark"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: styleIndex * 0.1
                }}
              >
                <h4 className="text-body font-medium text-ivory-cream mb-2">
                  {style.name}
                </h4>
                <p className="text-caption font-mono text-ivory-cream/60 mb-2">
                  {style.period}
                </p>
                <p className="text-caption text-ivory-cream/70">
                  {style.key}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Section Footer */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-caption font-mono text-ivory-cream/60 mb-4">
            ARCHITECTURE STANDS AS CIVILIZATION'S DIARY
          </p>
          <p className="text-body text-ivory-cream/80">
            Every stone tells the story of its time and people
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

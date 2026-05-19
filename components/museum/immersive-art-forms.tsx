"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Eye, Palette, Brush, Sparkles } from "lucide-react";
import { indianArtForms } from "@/data/indian-art-forms";

// Enhanced featured art forms with additional details
const featuredArtForms = [
  {
    ...indianArtForms[0], // Madhubani
    extendedDescription: "Madhubani painting, also known as Mithila art, originated in the Mithila region of Bihar. This ancient art form uses natural dyes and pigments, traditionally created by women on walls during festivals and ceremonies. The paintings depict Hindu deities, nature scenes, and geometric patterns with intricate detail.",
    techniques: ["Natural pigments", "Wall painting", "Paper/canvas adaptation", "Fine line work"],
    culturalSignificance: "Traditionally painted by women to celebrate marriages and festivals, now recognized globally as a UNESCO Intangible Cultural Heritage.",
    modernAdaptations: "Contemporary artists have adapted Madhubani to textiles, home decor, and digital media while preserving traditional motifs and techniques."
  },
  {
    ...indianArtForms[1], // Warli
    extendedDescription: "Warli art is one of India's oldest tribal art forms, created by the Warli tribe of Maharashtra. Using only white pigment on mud walls, these paintings depict daily life, farming activities, and tribal rituals through simple geometric shapes.",
    techniques: ["Rice paste paint", "Mud wall canvas", "Geometric patterns", "Monochromatic style"],
    culturalSignificance: "Represents the tribal worldview and connection to nature, used in rituals and celebrations to mark important life events.",
    modernAdaptations: "Now featured on textiles, ceramics, and contemporary art installations, bringing tribal aesthetics to modern audiences."
  },
  {
    ...indianArtForms[2], // Pattachitra
    extendedDescription: "Pattachitra is a traditional cloth-based scroll painting from Odisha and West Bengal. These intricate paintings depict stories from Hindu mythology, particularly Lord Jagannath, using natural colors and detailed brushwork.",
    techniques: ["Cloth scroll medium", "Natural mineral pigments", "Mythological narratives", "Fine brush detailing"],
    culturalSignificance: "Essential to Jagannath temple traditions, used as visual storytelling devices for religious education and cultural preservation.",
    modernAdaptations: "Contemporary artists create large-scale installations and incorporate Pattachitra motifs into fashion and interior design."
  },
  {
    ...indianArtForms[3], // Tanjore
    extendedDescription: "Tanjore painting originated in Thanjavur, Tamil Nadu, during the Maratha period. Known for its rich colors, composite gold leaf work, and inlay of glass beads, these paintings typically depict Hindu deities in royal splendor.",
    techniques: ["Gold leaf work", "Glass bead inlay", "Rich color palette", "Three-dimensional relief"],
    culturalSignificance: "Combines South Indian artistic traditions with Maratha influences, representing syncretic cultural heritage of the Deccan region.",
    modernAdaptations: "Preserved as a classical art form with dedicated schools teaching traditional techniques to new generations."
  },
  {
    ...indianArtForms[4], // Kalamkari
    extendedDescription: "Kalamkari, literally 'pen work,' is a traditional textile art from Andhra Pradesh and Telangana. Using natural dyes and intricate hand-painted or block-printed techniques, it creates elaborate narrative scenes from epics like Ramayana and Mahabharata.",
    techniques: ["Hand-painted textiles", "Natural vegetable dyes", "Block printing", "Narrative storytelling"],
    culturalSignificance: "Represents the confluence of Persian and Indian artistic traditions, used in temple textiles and royal court ceremonies.",
    modernAdaptations: "Revived in contemporary fashion and home decor, with designers incorporating Kalamkari motifs into modern clothing lines."
  }
];

// Art form visual styles
const artFormStyles = {
  madhubani: {
    gradient: "from-rose-900/20 to-orange-800/20",
    borderColor: "#DC2626",
    iconColor: "#DC2626",
    animation: "geometric-pattern",
    description: "Vibrant geometric patterns with mythological narratives from Mithila region"
  },
  warli: {
    gradient: "from-gray-900/30 to-stone-800/20", 
    borderColor: "#6B7280",
    iconColor: "#6B7280",
    animation: "tribal-rhythm",
    description: "Monochromatic tribal art depicting daily life and nature using basic geometric shapes"
  },
  pattachitra: {
    gradient: "from-amber-900/20 to-yellow-800/20",
    borderColor: "#D97706",
    iconColor: "#D97706", 
    animation: "scroll-narrative",
    description: "Traditional cloth scroll paintings with intricate mythological storytelling"
  },
  tanjore: {
    gradient: "from-yellow-900/20 to-amber-800/20",
    borderColor: "#D4AF37",
    iconColor: "#D4AF37",
    animation: "gold-relief",
    description: "Classical South Indian paintings rich with gold foil and vibrant colors"
  },
  kalamkari: {
    gradient: "from-green-900/20 to-emerald-800/20",
    borderColor: "#059669",
    iconColor: "#059669",
    animation: "flowing-narrative",
    description: "Hand-painted or block-printed textile art with natural dyes"
  }
};

export function ImmersiveArtForms() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeForm, setActiveForm] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  const featuredForms = indianArtForms.slice(0, 5);
  
  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-museum-black via-stone-charcoal to-surface-container"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 museum-light" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 25% 35%, rgba(220, 38, 38, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 65%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.08) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 14,
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
            <Palette className="w-6 h-6 text-temple-gold" />
            <span className="text-caption font-mono text-temple-gold tracking-widest">
              IMMERSIVE ART EXPERIENCE
            </span>
            <Palette className="w-6 h-6 text-temple-gold" />
          </motion.div>
          
          <h2 className="text-hero font-display mb-6">
            Living Art Forms
          </h2>
          <p className="text-subtitle font-body max-w-3xl mx-auto">
            Experience the diverse artistic traditions that continue to thrive across India
          </p>
        </motion.div>
        
        {/* Art Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredForms.map((artForm, index) => {
            const style = artFormStyles[artForm.id as keyof typeof artFormStyles];
            const Icon = index % 2 === 0 ? Brush : Eye;
            
            return (
              <motion.div
                key={artForm.id}
                className={`relative group cursor-pointer glass-panel p-8 bg-gradient-to-br ${style.gradient}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                onClick={() => setActiveForm(activeForm === artForm.id ? null : artForm.id)}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  borderLeft: `4px solid ${style.borderColor}`,
                }}
              >
                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: artForm.id === 'madhubani' 
                      ? 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
                      : artForm.id === 'warli'
                      ? 'radial-gradient(circle, rgba(255,255,255,0.1) 2px, transparent 2px)'
                      : 'none'
                  }}
                  animate={
                    artForm.id === 'warli' ? {
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    } : {}
                  }
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Art Form Header */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 
                        className="text-2xl font-display mb-2"
                        style={{ color: style.borderColor }}
                      >
                        {artForm.name}
                      </h3>
                      {artForm.sanskritName && (
                        <p className="text-caption font-mono text-ivory-cream/60 mb-3">
                          {artForm.sanskritName}
                        </p>
                      )}
                      <div className="flex items-center gap-2">
                        <Icon 
                          size={16} 
                          style={{ color: style.iconColor }}
                        />
                        <span className="text-caption font-mono text-ivory-cream/80">
                          {artForm.origin.region}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: `${style.borderColor}20` }}
                      whileHover={{ rotate: 180, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sparkles 
                        size={20} 
                        style={{ color: style.borderColor }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-body text-ivory-cream/90 mb-6 leading-relaxed">
                    {style.description}
                  </p>
                  
                  {/* Origin & Period */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: style.borderColor }}
                      />
                      <span className="text-caption font-mono text-ivory-cream/60">
                        PERIOD
                      </span>
                      <span className="text-body text-ivory-cream/80">
                        {artForm.origin.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: style.borderColor }}
                      />
                      <span className="text-caption font-mono text-ivory-cream/60">
                        REGION
                      </span>
                      <span className="text-body text-ivory-cream/80">
                        {artForm.origin.region}
                      </span>
                    </div>
                  </div>
                  
                  {/* Expandable Details */}
                  <motion.div
                    className={`overflow-hidden ${activeForm === artForm.id ? 'max-h-96' : 'max-h-0'}`}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="pt-4 border-t border-ivory-cream/20">
                      <h4 className="text-body font-medium text-ivory-cream mb-3">
                        Key Characteristics
                      </h4>
                      <div className="space-y-2">
                        {artForm.characteristics.slice(0, 3).map((char, charIndex) => (
                          <motion.div
                            key={charIndex}
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.3,
                              delay: charIndex * 0.1
                            }}
                          >
                            <div 
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: style.borderColor }}
                            />
                            <span className="text-caption text-ivory-cream/70">
                              {char}
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
                      background: `linear-gradient(135deg, ${style.borderColor}15 0%, transparent 100%)`
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Section Footer */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sparkles size={20} className="text-temple-gold" />
            <p className="text-caption font-mono text-ivory-cream/60">
              ART BREATHES THROUGH CULTURE
            </p>
            <Sparkles size={20} className="text-temple-gold" />
          </div>
          <p className="text-body text-ivory-cream/80">
            Each art form carries the soul of its region and people
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

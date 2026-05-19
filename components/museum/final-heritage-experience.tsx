"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Heart } from "lucide-react";

export function FinalHeritageExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  
  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-stone-charcoal via-museum-black to-surface"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 museum-light" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.12) 0%, transparent 60%)",
              "radial-gradient(circle at 80% 80%, rgba(139, 115, 85, 0.12) 0%, transparent 60%)",
              "radial-gradient(circle at 50% 50%, rgba(255, 153, 51, 0.12) 0%, transparent 60%)",
            ]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Content */}
      <motion.div 
        className="relative z-50 max-w-6xl mx-auto px-8"
        style={{ opacity, y, scale }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Main Message */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="w-6 h-6 text-temple-gold" />
            <span className="text-caption font-mono text-temple-gold tracking-widest">
              THE LIVING MEMORY OF INDIA
            </span>
            <Heart className="w-6 h-6 text-temple-gold" />
          </motion.div>
          
          <h2 className="text-hero font-display mb-8">
            VIRAASAT
          </h2>
          <p className="text-subtitle font-body max-w-4xl mx-auto mb-12 leading-relaxed">
            A journey through 5,000 years of artistic mastery, where every brushstroke, 
            every carved stone, and every woven thread tells the story of India's magnificent civilization.
          </p>
        </motion.div>
        
        {/* Heritage Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              title: "Sacred Architecture",
              description: "Temples that touch the heavens and house divine stories in stone",
              icon: "🏛️"
            },
            {
              title: "Living Art Forms",
              description: "Traditions passed through generations, still breathing with life",
              icon: "🎨"
            },
            {
              title: "Cultural Heritage",
              description: "The soul of India expressed through diverse artistic expressions",
              icon: "🪔"
            },
            {
              title: "Artistic Legacy",
              description: "Timeless creations that continue to inspire and mesmerize",
              icon: "✨"
            }
          ].map((pillar, index) => (
            <motion.div
              key={`heritage-pillar-${index}`}
              className="glass-panel p-8 text-center group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              >
                {pillar.icon}
              </motion.div>
              <h3 className="text-xl font-display mb-3 text-temple-gold">
                {pillar.title}
              </h3>
              <p className="text-body text-ivory-cream/80 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          className="glass-panel p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.div
            className="mb-8"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-12 h-12 text-temple-gold mx-auto" />
          </motion.div>
          
          <h3 className="text-2xl font-display mb-6 text-temple-gold">
            The Journey Continues
          </h3>
          <p className="text-body text-ivory-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            VIRAASAT is not just a museum—it's a living celebration of India's artistic soul. 
            Every visit reveals new layers of beauty, meaning, and inspiration.
          </p>
          
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-temple-gold to-amber-600 text-museum-black font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-temple-gold/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Scroll to top or navigate to explore section
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Begin Your Journey
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
        
        {/* Footer Message */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sparkles size={20} className="text-temple-gold" />
            <p className="text-caption font-mono text-ivory-cream/60">
              HERITAGE LIVES THROUGH ART
            </p>
            <Sparkles size={20} className="text-temple-gold" />
          </div>
          <p className="text-body text-ivory-cream/80">
            Preserving the past, inspiring the future
          </p>
          
          <motion.div
            className="mt-8 flex items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {["Tradition", "Innovation", "Heritage", "Future"].map((word, index) => (
              <motion.span
                key={word}
                className="text-caption font-mono text-temple-gold/60"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

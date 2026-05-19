"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductionHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-outline-variant/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-temple-gold to-amber-600 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 180, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-bold text-lg">V</span>
            </motion.div>
            <div>
              <h1 className="text-display font-display text-primary">VIRAASAT</h1>
              <p className="text-caption font-mono text-ivory-cream/60">Digital Museum</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-ivory-cream/60 hover:text-ivory-cream"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => setIsLiked(!isLiked)}
              className="text-ivory-cream/60 hover:text-temple-gold"
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-temple-gold text-temple-gold' : ''}`} />
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden fixed inset-0 z-50 glass-panel ${isMenuOpen ? 'border-b' : ''}`}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-temple-gold to-amber-600 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 180, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-bold text-lg">V</span>
            </motion.div>
            <div>
              <h1 className="text-display font-display text-primary">VIRAASAT</h1>
              <p className="text-caption font-mono text-ivory-cream/60">Digital Museum</p>
            </div>
          </div>

          <Button
            variant="ghost"
            onClick={() => setIsMenuOpen(false)}
            className="text-ivory-cream/60 hover:text-ivory-cream"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
      </motion.div>
    </>
  );
}

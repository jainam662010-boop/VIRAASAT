"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function FloatingFAB() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      className="fixed bottom-8 right-8 z-50"
    >
      <button
        className="group relative w-16 h-16 rounded-full bg-primary text-on-primary shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
        aria-label="Experience AR"
      >
        <Sparkles className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-primary text-on-primary font-label-caps text-[10px] px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
          Experience AR
        </span>
      </button>
    </motion.div>
  );
}

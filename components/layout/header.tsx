"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollPosition, useReducedMotion } from "@/lib/hooks";

const navItems = [
  { label: "Timeline", href: "/timeline/" },
  { label: "Map", href: "/map/" },
  { label: "Galleries", href: "/gallery/" },
  { label: "Artists", href: "/artists/" },
  { label: "Immersive", href: "/immersive/" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollPosition, scrollDirection } = useScrollPosition();
  const prefersReducedMotion = useReducedMotion();
  const isVisible = scrollPosition <= 100 || scrollDirection !== "down";

  const headerVariants = {
    hidden: prefersReducedMotion ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.header
      initial="visible"
      animate={isVisible ? "visible" : "hidden"}
      variants={headerVariants}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-16 py-2",
        "bg-surface/60 backdrop-blur-xl border-b border-outline-variant/20 shadow-2xl",
        "transition-all duration-500 ease-out"
      )}
    >
      {/* Logo */}
      <Link href="/" className="text-headline-md font-headline-md font-bold text-primary tracking-tight hover:opacity-80 transition-opacity">
        VIRAASAT
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-label-caps text-label-caps transition-colors relative pb-1",
                isActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="text-primary hover:scale-110 transition-transform p-2">
          <Search className="w-5 h-5" />
        </button>
        
        <Button 
          variant="gold" 
          className="hidden md:flex shadow-lg"
        >
          Book Tour
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-on-surface p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-surface-container-low/95 backdrop-blur-xl border-b border-outline-variant/20 md:hidden"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block font-label-caps text-label-caps py-2",
                      pathname === item.href
                        ? "text-primary"
                        : "text-on-surface-variant"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Button variant="gold" className="w-full mt-4">
                Book Tour
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

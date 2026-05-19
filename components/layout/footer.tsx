"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/lib/hooks";
import { Globe, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = [
  { label: "The Archives", href: "/gallery/" },
  { label: "Press", href: "#" },
  { label: "Cultural Ethics", href: "#" },
  { label: "Privacy", href: "#" },
];

const socialLinks = [
  { icon: Globe, label: "Website", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export function Footer() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <footer
      ref={ref as React.RefObject<HTMLElement>}
      className="w-full py-24 px-4 md:px-16 flex flex-col items-center text-center space-y-8 bg-surface-container-lowest border-t border-primary/20"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-headline-lg font-headline-lg text-primary opacity-20 select-none mb-8"
      >
        VIRAASAT
      </motion.div>

      {/* Navigation Links */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8"
      >
        {footerLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all"
          >
            {link.label}
          </Link>
        ))}
      </motion.nav>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex gap-6 pb-8"
      >
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <Link
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
            >
              <Icon className="w-4 h-4" />
            </Link>
          );
        })}
      </motion.div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isIntersecting ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-label-caps text-label-caps text-on-surface-variant/40 tracking-[0.2em]"
      >
        © 2024 VIRAASAT MUSEUM. PRESERVING THE ETERNAL THREAD.
      </motion.p>
    </footer>
  );
}

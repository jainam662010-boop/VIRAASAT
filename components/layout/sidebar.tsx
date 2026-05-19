"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Home, 
  Archive, 
  Compass, 
  Sparkles, 
  Share2, 
  Camera, 
  Globe 
} from "lucide-react";
import { cn } from "@/lib/utils";

function normalizePath(path: string) {
  if (path === "/") return "/";
  return path.replace(/\/+$/, "");
}

const navItems = [
  { icon: Home, label: "HOME", href: "/" },
  { icon: Archive, label: "ARCHIVE", href: "/gallery/" },
  { icon: Compass, label: "MAP", href: "/map/" },
  { icon: Sparkles, label: "EXHIBITS", href: "/immersive/" },
  { icon: Share2, label: "CONNECT", href: "/about/" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full hidden lg:flex flex-col items-center py-12 z-40 bg-surface-container-low/40 backdrop-blur-md border-r border-outline-variant/10 shadow-xl w-20 transition-all duration-300 ease-out">
      {/* Profile Avatar */}
      <div className="mb-12">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/30 hover:border-primary transition-colors">
          <div className="w-full h-full bg-gradient-gold flex items-center justify-center">
            <span className="font-headline-md text-on-primary text-lg">V</span>
          </div>
        </div>
      </div>

      {/* Navigation Icons */}
      <nav className="flex flex-col gap-10 items-center flex-1">
        {navItems.map((item) => {
          const isActive = normalizePath(pathname) === normalizePath(item.href);
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "transition-all duration-300",
                  isActive 
                    ? "text-primary scale-110" 
                    : "text-on-surface-variant opacity-60 hover:opacity-100"
                )}
              >
                <Icon className="w-7 h-7" strokeWidth={isActive ? 2.5 : 1.5} />
              </motion.div>
              
              {/* Tooltip */}
              <span className="absolute left-full ml-4 bg-surface-container text-primary font-label-caps text-[10px] px-2 py-1 rounded border border-outline-variant opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="mt-auto flex flex-col gap-6 items-center mb-8">
        <button className="text-primary/40 hover:text-primary transition-colors">
          <Camera className="w-5 h-5" />
        </button>
        <button className="text-primary/40 hover:text-primary transition-colors">
          <Globe className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
}

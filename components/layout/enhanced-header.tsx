"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Share2, 
  Maximize2, 
  Minimize2, 
  Info, 
  X, 
  Volume2, 
  VolumeX, 
  Settings,
  Bookmark,
  Download,
  Heart,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function EnhancedHeader() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [viewCount, setViewCount] = useState(1247);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  const shareContent = async (platform: string) => {
    const url = window.location.href;
    const title = "VIRAASAT - The Living Memory of Indian Art & Civilization";
    const text = "Experience India's magnificent artistic heritage in a premium cinematic digital museum";

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} - ${text} ${url}`)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${text} ${url}`)}`
    };

    if (platform === "copy") {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  const downloadContent = () => {
    // Create a downloadable brochure or information
    const content = `
VIRAASAT - The Living Memory of Indian Art & Civilization

Experience 5,000 years of Indian artistic mastery in a premium cinematic digital museum.

Features:
• Interactive 3D Temple Architecture
• Timeline of Indian Art (3000 BCE - Present)
• Immersive Art Forms Showcase
• Regional Heritage Exploration
• Master Artists Gallery

Visit us at: ${window.location.href}

© 2026 VIRAASAT Digital Museum. All rights reserved.
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'viraasat-museum-info.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Main Header */}
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
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-bold text-lg">V</span>
            </motion.div>
            <div>
              <h1 className="text-display font-display text-primary">VIRAASAT</h1>
              <p className="text-caption font-mono text-ivory-cream/60">Digital Museum</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* View Count */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 glass-panel-dark rounded-lg">
              <Eye className="w-4 h-4 text-ivory-cream/60" />
              <span className="text-caption font-mono text-ivory-cream/80">{viewCount.toLocaleString()}</span>
            </div>

            {/* Like Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLiked(!isLiked)}
              className="text-ivory-cream/60 hover:text-temple-gold"
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-temple-gold text-temple-gold' : ''}`} />
            </Button>

            {/* Bookmark */}
            <Button
              variant="ghost"
              size="icon"
              className="text-ivory-cream/60 hover:text-temple-gold"
            >
              <Bookmark className="w-5 h-5" />
            </Button>

            {/* Share Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="text-ivory-cream/60 hover:text-temple-gold relative"
            >
              <Share2 className="w-5 h-5" />
            </Button>

            {/* Fullscreen */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="text-ivory-cream/60 hover:text-temple-gold"
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </Button>

            {/* More Info */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowInfoModal(true)}
              className="text-ivory-cream/60 hover:text-temple-gold"
            >
              <Info className="w-5 h-5" />
            </Button>

            {/* Settings */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSettings(!showSettings)}
              className="text-ivory-cream/60 hover:text-temple-gold"
            >
              <Settings className="w-5 h-5" />
            </Button>

            {/* Audio Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMuted(!isMuted)}
              className="text-ivory-cream/60 hover:text-temple-gold"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Share Menu */}
      <AnimatePresence>
        {showShareMenu && (
          <motion.div
            className="fixed top-20 right-6 z-50 glass-panel p-4 min-w-[200px]"
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-ivory-cream/80 hover:text-ivory-cream"
                onClick={() => shareContent('twitter')}
              >
                Share on Twitter
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-ivory-cream/80 hover:text-ivory-cream"
                onClick={() => shareContent('facebook')}
              >
                Share on Facebook
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-ivory-cream/80 hover:text-ivory-cream"
                onClick={() => shareContent('linkedin')}
              >
                Share on LinkedIn
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-ivory-cream/80 hover:text-ivory-cream"
                onClick={() => shareContent('whatsapp')}
              >
                Share on WhatsApp
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-ivory-cream/80 hover:text-ivory-cream"
                onClick={() => shareContent('email')}
              >
                Share via Email
              </Button>
              <hr className="border-outline-variant/20" />
              <Button
                variant="ghost"
                className="w-full justify-start text-ivory-cream/80 hover:text-ivory-cream"
                onClick={() => shareContent('copy')}
              >
                Copy Link
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Modal */}
      <AnimatePresence>
        {showInfoModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-museum-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowInfoModal(false)}
          >
            <motion.div
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-display text-primary mb-2">About VIRAASAT</h2>
                  <p className="text-body text-ivory-cream/80">The Living Memory of Indian Art & Civilization</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowInfoModal(false)}
                  className="text-ivory-cream/60 hover:text-ivory-cream"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display text-temple-gold mb-3">Our Mission</h3>
                  <p className="text-body text-ivory-cream/90 leading-relaxed">
                    VIRAASAT is a premium cinematic digital museum dedicated to preserving and showcasing 
                    India's magnificent artistic heritage. Through cutting-edge technology and immersive 
                    storytelling, we bring 5,000 years of artistic mastery to life.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-display text-temple-gold mb-3">Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-temple-gold rounded-full" />
                      <span className="text-body text-ivory-cream/80">Interactive 3D Temple Architecture</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-temple-gold rounded-full" />
                      <span className="text-body text-ivory-cream/80">Timeline of Indian Art (3000 BCE - Present)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-temple-gold rounded-full" />
                      <span className="text-body text-ivory-cream/80">Immersive Art Forms Showcase</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-temple-gold rounded-full" />
                      <span className="text-body text-ivory-cream/80">Regional Heritage Exploration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-temple-gold rounded-full" />
                      <span className="text-body text-ivory-cream/80">Master Artists Gallery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-temple-gold rounded-full" />
                      <span className="text-body text-ivory-cream/80">Cultural Insights & Education</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display text-temple-gold mb-3">Technical Excellence</h3>
                  <p className="text-body text-ivory-cream/90 leading-relaxed mb-4">
                    Built with cutting-edge web technologies including Three.js for 3D visualization, 
                    Framer Motion for cinematic animations, and responsive design for optimal viewing 
                    across all devices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-temple-gold/20 rounded-full text-caption font-mono text-temple-gold">Three.js</span>
                    <span className="px-3 py-1 bg-temple-gold/20 rounded-full text-caption font-mono text-temple-gold">Framer Motion</span>
                    <span className="px-3 py-1 bg-temple-gold/20 rounded-full text-caption font-mono text-temple-gold">Next.js</span>
                    <span className="px-3 py-1 bg-temple-gold/20 rounded-full text-caption font-mono text-temple-gold">Tailwind CSS</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-outline-variant/20">
                  <Button onClick={downloadContent} className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download Info
                  </Button>
                  <Button variant="outline" onClick={() => setShowInfoModal(false)} className="flex-1">
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            className="fixed top-20 right-6 z-50 glass-panel p-6 w-80"
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-display text-primary mb-4">Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-body text-ivory-cream/80">Animations</span>
                <Button variant="outline" size="sm">Enabled</Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-body text-ivory-cream/80">Audio</span>
                <Button variant="outline" size="sm">{isMuted ? 'Muted' : 'Enabled'}</Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-body text-ivory-cream/80">Quality</span>
                <Button variant="outline" size="sm">High</Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-body text-ivory-cream/80">Language</span>
                <Button variant="outline" size="sm">English</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {copied ? (
          <motion.div
            className="fixed bottom-8 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-outline-variant/30 bg-surface-container px-5 py-2 font-mono text-xs uppercase tracking-widest text-primary shadow-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            role="status"
          >
            Link copied
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";

// Simple 3D temple visualization using CSS 3D transforms
export function SimpleTempleCenterpiece() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    // Check WebGL support
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        setIsWebGLSupported(!!gl);
      } catch (e) {
        setIsWebGLSupported(false);
      }
    };

    checkWebGL();
    
    // Simulate loading
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isWebGLSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-temple-gold to-stone-charcoal rounded-lg flex items-center justify-center">
            <span className="text-4xl">🏛️</span>
          </div>
          <h3 className="text-2xl font-display text-temple-gold mb-3">
            South Indian Temple Architecture
          </h3>
          <p className="text-body text-ivory-cream/90 mb-4">
            Experience the grandeur of Dravidian temple architecture with towering gopurams, 
            intricate stone carvings, and sacred geometry.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center perspective-1000">
      {!isLoaded ? (
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-temple-gold border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-caption font-mono text-ivory-cream/60">
            Loading Sacred Architecture
          </p>
        </div>
      ) : (
        <div 
          ref={containerRef}
          className="relative w-64 h-64 transform-style-3d animate-spin-slow"
          style={{
            transformStyle: 'preserve-3d',
            animation: 'rotate3d 20s infinite linear'
          }}
        >
          {/* Temple Base */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-16 bg-gradient-to-t from-amber-900 to-amber-700 transform-gpu" />
          
          {/* Main Tower (Gopuram) */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-32 h-48 bg-gradient-to-t from-amber-700 to-amber-500 transform-gpu" />
          
          {/* Tower Top */}
          <div className="absolute bottom-64 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-full transform-gpu" />
          
          {/* Decorative Elements */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-40 h-2 bg-temple-gold transform-gpu" />
          <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-36 h-2 bg-temple-gold transform-gpu" />
          <div className="absolute bottom-48 left-1/2 -translate-x-1/2 w-32 h-2 bg-temple-gold transform-gpu" />
          
          {/* Side Pillars */}
          <div className="absolute bottom-16 left-8 w-4 h-32 bg-gradient-to-t from-stone-800 to-stone-600 transform-gpu" />
          <div className="absolute bottom-16 right-8 w-4 h-32 bg-gradient-to-t from-stone-800 to-stone-600 transform-gpu" />
          
          {/* Temple Door */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-20 bg-gradient-to-t from-stone-900 to-stone-700 transform-gpu" />
        </div>
      )}
      
      <style jsx>{`
        @keyframes rotate3d {
          from {
            transform: rotateY(0deg) rotateX(10deg);
          }
          to {
            transform: rotateY(360deg) rotateX(10deg);
          }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .animate-spin-slow {
          animation: rotate3d 20s infinite linear;
        }
        
        .transform-gpu {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
    </div>
  );
}

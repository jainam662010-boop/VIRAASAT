"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getImageUrl, getPlaceholderUrl, type LazyImageProps } from "@/lib/image-assets";

interface PremiumImageProps extends LazyImageProps {
  category?: string;
  name?: string;
  size?: 'small' | 'medium' | 'large';
  placeholderType?: 'art' | 'architecture' | 'artist' | 'texture';
  showLoadingSpinner?: boolean;
  enableZoom?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export function PremiumImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 95,
  category,
  name,
  size = 'medium',
  placeholderType = 'art',
  showLoadingSpinner = true,
  enableZoom = false,
  onLoad,
  onError,
}: PremiumImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Generate optimized image URL
  const optimizedSrc = category && name ? getImageUrl(category as any, name, size) : src;
  const placeholderSrc = getPlaceholderUrl(placeholderType);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  const handleZoom = () => {
    if (enableZoom) {
      setIsZoomed(!isZoomed);
    }
  };

  return (
    <>
      <div className={`relative overflow-hidden ${className}`}>
        {/* Loading State */}
        <AnimatePresence>
          {isLoading && showLoadingSpinner && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-surface-container/20 flex items-center justify-center z-10"
            >
              <div className="relative">
                <div className="w-12 h-12 border-2 border-primary/30 rounded-full animate-spin-slow" />
                <div className="absolute inset-0 w-12 h-12 border-2 border-primary/20 border-t-transparent rounded-full animate-spin" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: isLoading ? 0 : 1, 
            scale: isLoading ? 0.95 : 1,
            filter: isZoomed ? 'brightness(1.1)' : 'brightness(1)'
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className={`${enableZoom ? 'cursor-zoom-in' : ''}`}
          onClick={handleZoom}
        >
          <Image
            src={hasError ? placeholderSrc : optimizedSrc}
            alt={alt}
            width={width}
            height={height}
            quality={quality}
            priority={priority}
            className={`w-full h-full object-cover transition-all duration-500 ${
              enableZoom ? 'hover:scale-105' : ''
            }`}
            onLoad={handleLoad}
            onError={handleError}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A8AAAAA"
          />
        </motion.div>

        {/* Error State Overlay */}
        <AnimatePresence>
          {hasError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-surface-container/40 flex items-center justify-center z-20"
            >
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-container/60 flex items-center justify-center">
                  <svg className="w-8 h-8 text-on-surface-variant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <p className="text-sm text-on-surface-variant">Image unavailable</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Zoom Indicator */}
        {enableZoom && !isLoading && !hasError && (
          <div className="absolute top-4 right-4 opacity-0 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-surface-container/80 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={hasError ? placeholderSrc : optimizedSrc}
                alt={alt}
                width={1920}
                height={1080}
                quality={100}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Gallery Grid Component for Multiple Images
export function ImageGallery({ 
  images, 
  columns = 3, 
  gap = 4,
  enableZoom = true 
}: { 
  images: Array<{ src: string; alt: string; category?: string; name?: string }>;
  columns?: number;
  gap?: number;
  enableZoom?: boolean;
}) {
  return (
    <div 
      className={`grid gap-${gap}`}
      style={{ 
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` 
      }}
    >
      {images.map((image, index) => (
        <div key={index} className="aspect-square">
          <PremiumImage
            src={image.src}
            alt={image.alt}
            category={image.category}
            name={image.name}
            size="medium"
            enableZoom={enableZoom}
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}

// Masonry Gallery for Varied Heights
export function MasonryGallery({ 
  images, 
  columns = 3,
  enableZoom = true 
}: { 
  images: Array<{ 
    src: string; 
    alt: string; 
    height?: 'small' | 'medium' | 'large';
    category?: string; 
    name?: string 
  }>;
  columns?: number;
  enableZoom?: boolean;
}) {
  const heightMap = {
    small: 'h-48',
    medium: 'h-64',
    large: 'h-80',
  };

  return (
    <div 
      className={`grid gap-4`}
      style={{ 
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` 
      }}
    >
      {images.map((image, index) => (
        <div key={index} className={heightMap[image.height || 'medium'] || 'h-64'}>
          <PremiumImage
            src={image.src}
            alt={image.alt}
            category={image.category}
            name={image.name}
            size="medium"
            enableZoom={enableZoom}
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Easing functions
export const easings = {
  smooth: "power3.out",
  snappy: "power2.out",
  dramatic: "power4.inOut",
  elastic: "elastic.out(1, 0.5)",
  bounce: "back.out(1.7)",
};

// Reveal animations
export function revealFromLeft(
  element: string | Element | Element[],
  delay: number = 0,
  duration: number = 1
) {
  return gsap.from(element, {
    x: -50,
    opacity: 0,
    duration,
    delay,
    ease: easings.smooth,
  });
}

export function revealFromRight(
  element: string | Element | Element[],
  delay: number = 0,
  duration: number = 1
) {
  return gsap.from(element, {
    x: 50,
    opacity: 0,
    duration,
    delay,
    ease: easings.smooth,
  });
}

export function revealFromBottom(
  element: string | Element | Element[],
  delay: number = 0,
  duration: number = 1
) {
  return gsap.from(element, {
    y: 50,
    opacity: 0,
    duration,
    delay,
    ease: easings.smooth,
  });
}

export function fadeIn(
  element: string | Element | Element[],
  delay: number = 0,
  duration: number = 0.8
) {
  return gsap.from(element, {
    opacity: 0,
    duration,
    delay,
    ease: easings.smooth,
  });
}

export function scaleIn(
  element: string | Element | Element[],
  delay: number = 0,
  duration: number = 0.8
) {
  return gsap.from(element, {
    scale: 0.9,
    opacity: 0,
    duration,
    delay,
    ease: easings.smooth,
  });
}

// Scroll-triggered animations
export function createScrollReveal(
  element: string | Element,
  trigger: string | Element,
  start: string = "top 80%",
  markers: boolean = false
) {
  return gsap.from(element, {
    scrollTrigger: {
      trigger,
      start,
      markers,
      toggleActions: "play none none reverse",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: easings.smooth,
  });
}

export function createParallax(
  element: string | Element,
  trigger: string | Element,
  speed: number = 0.5
) {
  return gsap.to(element, {
    scrollTrigger: {
      trigger,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    y: speed * 100,
    ease: "none",
  });
}

// Stagger animations
export function staggerReveal(
  elements: string | Element | Element[],
  staggerAmount: number = 0.1,
  duration: number = 0.6
) {
  return gsap.from(elements, {
    y: 30,
    opacity: 0,
    duration,
    stagger: staggerAmount,
    ease: easings.smooth,
  });
}

// Text animations
export function splitTextReveal(
  element: string | Element,
  delay: number = 0,
  duration: number = 0.8
) {
  return gsap.from(element, {
    y: 20,
    opacity: 0,
    duration,
    delay,
    ease: easings.smooth,
  });
}

// Hover animations
export function hoverScale(element: Element, scale: number = 1.05) {
  gsap.to(element, {
    scale,
    duration: 0.3,
    ease: easings.snappy,
  });
}

export function hoverReset(element: Element) {
  gsap.to(element, {
    scale: 1,
    duration: 0.3,
    ease: easings.snappy,
  });
}

// SVG path animations
export function drawSVGPath(
  element: string | SVGPathElement,
  duration: number = 2,
  delay: number = 0
) {
  const path = typeof element === "string" 
    ? document.querySelector(element) as SVGPathElement 
    : element;
    
  if (!path) return null;
  
  const length = path.getTotalLength();
  
  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
  });
  
  return gsap.to(path, {
    strokeDashoffset: 0,
    duration,
    delay,
    ease: easings.dramatic,
  });
}

// Timeline animations
export function createRevealTimeline(elements: string[]) {
  const tl = gsap.timeline();
  
  elements.forEach((selector, index) => {
    tl.from(
      selector,
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: easings.smooth,
      },
      index * 0.2
    );
  });
  
  return tl;
}

// Floating animation for elements
export function floatingAnimation(
  element: string | Element | Element[],
  duration: number = 3,
  distance: number = 10
) {
  return gsap.to(element, {
    y: distance,
    duration,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
}

// Pulse animation
export function pulseAnimation(
  element: string | Element | Element[],
  duration: number = 2,
  scale: number = 1.05
) {
  return gsap.to(element, {
    scale,
    opacity: 0.8,
    duration: duration / 2,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
}

// Kill all ScrollTriggers
export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

// Refresh ScrollTrigger
export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}

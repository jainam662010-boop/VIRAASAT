import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, CSSPlugin);

const seededOffset = (index: number, range: number) => ((index * 37) % (range * 2)) - range;

// Cinematic easing functions
export const cinematicEasings = {
  // Smooth, luxury transitions
  silk: "power3.inOut",
  // Dramatic reveals
  dramatic: "power4.inOut",
  // Natural, organic movements
  organic: "back.out(1.7)",
  // Quick, snappy interactions
  snappy: "power2.inOut",
  // Slow, majestic movements
  majestic: "slow(0.7, 0.7, false)",
  // Bouncy, playful animations
  playful: "elastic.out(1, 0.5)",
};

// Cinematic animation presets
export const cinematicAnimations = {
  // Hero section animations
  heroReveal: (elements: string | Element | NodeListOf<Element>, delay: number = 0) => {
    return gsap.fromTo(elements, 
      {
        opacity: 0,
        y: 100,
        scale: 0.95,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 2,
        delay,
        ease: cinematicEasings.silk,
      }
    );
  },

  // Mandala rotation animation
  mandalaRotate: (element: string | Element, duration: number = 20) => {
    return gsap.to(element, {
      rotation: 360,
      duration,
      repeat: -1,
      ease: "none",
    });
  },

  // Particle float animation
  particleFloat: (elements: string | NodeListOf<Element>, stagger: number = 0.1) => {
    return gsap.fromTo(elements,
      {
        y: (index: number) => seededOffset(index, 50),
        x: (index: number) => seededOffset(index + 11, 50),
        opacity: 0,
        scale: 0,
      },
      {
        y: (index: number) => seededOffset(index, 25),
        x: (index: number) => seededOffset(index + 7, 25),
        opacity: (index: number) => 0.3 + ((index % 5) * 0.1),
        scale: (index: number) => 0.5 + ((index % 4) * 0.12),
        duration: (index: number) => 2 + ((index % 6) * 0.35),
        repeat: -1,
        yoyo: true,
        stagger,
        ease: cinematicEasings.organic,
      }
    );
  },

  // Text reveal with typewriter effect
  textReveal: (element: string | Element, text: string, duration: number = 2) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;

    // Split text into characters
    el.innerHTML = text.split('').map(char => 
      `<span class="inline-block opacity-0">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    return gsap.to(el.children, {
      opacity: 1,
      y: 0,
      duration: duration / text.length,
      stagger: 0.05,
      ease: cinematicEasings.silk,
      onStart: () => {
        gsap.set(el.children, { y: 20 });
      }
    });
  },

  // Scroll-triggered parallax
  parallax: (element: string | Element, speed: number = 0.5) => {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  },

  // Section reveal with dramatic effect
  sectionReveal: (element: string | Element, direction: 'up' | 'down' | 'left' | 'right' = 'up') => {
    const directions = {
      up: { y: 100, opacity: 0 },
      down: { y: -100, opacity: 0 },
      left: { x: 100, opacity: 0 },
      right: { x: -100, opacity: 0 },
    };

    return gsap.fromTo(element,
      directions[direction],
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: cinematicEasings.dramatic,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  },

  // Staggered reveal for multiple elements
  staggerReveal: (elements: string | NodeListOf<Element>, stagger: number = 0.1) => {
    return gsap.fromTo(elements,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger,
        ease: cinematicEasings.silk,
        scrollTrigger: {
          trigger: elements,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  },

  // Ink spread effect
  inkSpread: (element: string | Element, duration: number = 2) => {
    return gsap.fromTo(element,
      {
        scale: 0,
        opacity: 0,
        transformOrigin: "center",
      },
      {
        scale: 1,
        opacity: 1,
        duration,
        ease: cinematicEasings.organic,
      }
    );
  },

  // Brush stroke animation
  brushStroke: (element: string | Element, delay: number = 0) => {
    return gsap.fromTo(element,
      {
        drawSVG: "0%",
        opacity: 0,
      },
      {
        drawSVG: "100%",
        opacity: 1,
        duration: 1.5,
        delay,
        ease: cinematicEasings.dramatic,
      }
    );
  },

  // Floating elements
  floating: (elements: string | NodeListOf<Element>, intensity: number = 1) => {
    return gsap.to(elements, {
      y: `random(-${20 * intensity}, ${20 * intensity})`,
      rotation: `random(-${5 * intensity}, ${5 * intensity})`,
      duration: `random(3, 6)`,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.5,
        from: "random",
      },
    });
  },

  // Glow pulse effect
  glowPulse: (element: string | Element, color: string = "rgba(242, 202, 80, 0.3)") => {
    return gsap.to(element, {
      boxShadow: `0 0 30px ${color}`,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  },

  // Shimmer effect
  shimmer: (element: string | Element) => {
    return gsap.fromTo(element,
      {
        backgroundPosition: "200% 0",
      },
      {
        backgroundPosition: "-200% 0",
        duration: 3,
        repeat: -1,
        ease: "linear",
      }
    );
  },

  // Magnetic hover effect
  magneticHover: (element: string | Element, strength: number = 0.3) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;

    const handleMouseMove = (e: Event) => {
      if (!(e instanceof MouseEvent)) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        rotation: x * 0.01,
        duration: 0.5,
        ease: cinematicEasings.snappy,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.5,
        ease: cinematicEasings.snappy,
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  },

  // Page transition
  pageTransition: (duration: number = 1) => {
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-50 bg-primary';
    document.body.appendChild(overlay);

    return gsap.timeline()
      .to(overlay, {
        opacity: 1,
        duration: duration / 2,
        ease: cinematicEasings.silk,
      })
      .call(() => {
        // Page content changes here
      })
      .to(overlay, {
        opacity: 0,
        duration: duration / 2,
        ease: cinematicEasings.silk,
        onComplete: () => {
          document.body.removeChild(overlay);
        },
      });
  },

  // Timeline scrubbing
  timelineScrub: (timeline: gsap.core.Timeline, trigger: string | Element) => {
    return ScrollTrigger.create({
      trigger,
      start: "top center",
      end: "bottom center",
      scrub: true,
      onUpdate: (self) => {
        timeline.progress(self.progress);
      },
    });
  },

  // Morphing shapes
  morphShape: (element: string | Element, toPath: string, duration: number = 2) => {
    return gsap.to(element, {
      attr: { d: toPath },
      duration,
      ease: cinematicEasings.organic,
    });
  },

  // Cinematic fade in with scale
  cinematicFadeIn: (element: string | Element, delay: number = 0) => {
    return gsap.fromTo(element,
      {
        opacity: 0,
        scale: 1.1,
        filter: "blur(20px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 2.5,
        delay,
        ease: cinematicEasings.silk,
      }
    );
  },

  // Spotlight reveal
  spotlightReveal: (element: string | Element, spotlight: string | Element) => {
    return gsap.timeline()
      .to(spotlight, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: cinematicEasings.dramatic,
      })
      .to(element, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: cinematicEasings.silk,
      });
  },
};

// Cinematic timeline presets
export const cinematicTimelines = {
  // Hero section timeline
  hero: () => {
    const tl = gsap.timeline();
    
    tl.addLabel('start')
      .from('.hero-mandala', {
        rotation: -360,
        scale: 0,
        opacity: 0,
        duration: 2,
        ease: cinematicEasings.silk,
      }, 'start')
      .from('.hero-title', {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: cinematicEasings.dramatic,
      }, 'start+=0.5')
      .from('.hero-subtitle', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: cinematicEasings.silk,
      }, 'start+=0.8')
      .from('.hero-cta', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: cinematicEasings.playful,
      }, 'start+=1.2')
      .from('.hero-particles > div', {
        opacity: 0,
        scale: 0,
        duration: 1,
        stagger: 0.1,
        ease: cinematicEasings.organic,
      }, 'start+=1');
    
    return tl;
  },

  // Section reveal timeline
  section: (sectionClass: string) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionClass,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(`${sectionClass} .section-title`, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: cinematicEasings.dramatic,
    })
    .from(`${sectionClass} .section-content`, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: cinematicEasings.silk,
    }, '-=0.5');

    return tl;
  },

  // Gallery timeline
  gallery: () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.gallery-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from('.gallery-grid > div', {
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 1,
      stagger: 0.1,
      ease: cinematicEasings.silk,
    });

    return tl;
  },
};

// Utility functions for cinematic effects
export const cinematicUtils = {
  // Create cinematic scroll triggers
  createScrollTrigger: (element: string | Element, animation: gsap.core.Tween, options?: ScrollTrigger.Vars) => {
    return ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      ...options,
      animation,
    });
  },

  // Kill all animations
  killAll: () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf("*");
  },

  // Refresh scroll triggers
  refresh: () => {
    ScrollTrigger.refresh();
  },

  // Create cinematic timeline
  createTimeline: (options?: gsap.TimelineVars) => {
    return gsap.timeline({
      defaults: {
        ease: cinematicEasings.silk,
      },
      ...options,
    });
  },
};

// Export for easy access
export const cinematic = {
  ...cinematicAnimations,
  ...cinematicTimelines,
  ...cinematicUtils,
  easings: cinematicEasings,
};

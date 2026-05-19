"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
  once = true,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  if (prefersReducedMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  charClassName?: string;
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  charClassName = "",
}: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const words = text.split(" ");

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className={`inline-block ${charClassName}`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: delay + (wordIndex * 0.1) + (charIndex * 0.03),
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}

interface AnimatedTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function AnimatedTitle({
  title,
  subtitle,
  className = "",
}: AnimatedTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        <h1 className="font-display-hero text-display-hero text-primary leading-none">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="font-display-hero text-display-hero text-primary leading-none"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette - Royal Gold
        "primary": "#f2ca50",
        "primary-fixed-dim": "#e9c349",
        "primary-container": "#d4af37",
        "primary-fixed": "#ffe088",
        "on-primary": "#3c2f00",
        "on-primary-container": "#554300",
        "on-primary-fixed": "#241a00",
        "on-primary-fixed-variant": "#574500",
        "inverse-primary": "#735c00",
        
        // Secondary Palette - Warm Saffron
        "secondary": "#ffb77a",
        "secondary-fixed-dim": "#ffb77a",
        "secondary-container": "#d7790d",
        "secondary-fixed": "#ffdcc2",
        "on-secondary": "#4c2700",
        "on-secondary-container": "#432100",
        "on-secondary-fixed": "#2e1500",
        "on-secondary-fixed-variant": "#6d3a00",
        
        // Tertiary Palette - Deep Indigo
        "tertiary": "#becdff",
        "tertiary-fixed-dim": "#b3c5ff",
        "tertiary-container": "#99b0fa",
        "tertiary-fixed": "#dbe1ff",
        "on-tertiary": "#0d2c6e",
        "on-tertiary-container": "#284184",
        "on-tertiary-fixed": "#00174a",
        "on-tertiary-fixed-variant": "#2a4386",
        
        // Surface Palette - Deep Museum Dark
        "background": "#16130b",
        "on-background": "#eae1d4",
        "surface": "#16130b",
        "on-surface": "#eae1d4",
        "surface-variant": "#38342b",
        "on-surface-variant": "#d0c5af",
        "inverse-surface": "#eae1d4",
        "inverse-on-surface": "#343027",
        "surface-dim": "#16130b",
        "surface-bright": "#3d392f",
        "surface-container-lowest": "#110e07",
        "surface-container-low": "#1f1b13",
        "surface-container": "#231f17",
        "surface-container-high": "#2d2a21",
        "surface-container-highest": "#38342b",
        "surface-tint": "#e9c349",
        
        // Error Palette
        "error": "#ffb4ab",
        "error-container": "#93000a",
        "on-error": "#690005",
        "on-error-container": "#ffdad6",
        
        // Outline
        "outline": "#99907c",
        "outline-variant": "#4d4635",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        "gutter": "32px",
        "container-max": "1440px",
        "margin-edge": "64px",
        "unit": "8px",
        "section-gap": "160px",
      },
      fontFamily: {
        "label-caps": ["Inter", "system-ui", "sans-serif"],
        "headline-lg": ["Noto Serif", "Georgia", "serif"],
        "body-lg": ["Inter", "system-ui", "sans-serif"],
        "display-hero": ["Noto Serif", "Georgia", "serif"],
        "body-md": ["Inter", "system-ui", "sans-serif"],
        "headline-md": ["Noto Serif", "Georgia", "serif"],
      },
      fontSize: {
        "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.15em", fontWeight: "600" }],
        "headline-lg": ["48px", { lineHeight: "1.2", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", letterSpacing: "0.01em", fontWeight: "400" }],
        "display-hero": ["84px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "500" }],
      },
      animation: {
        "pulse-slow": "pulse-slow 10s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.05", transform: "scale(1)" },
          "50%": { opacity: "0.15", transform: "scale(1.1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "silk-texture": "linear-gradient(rgba(22, 19, 11, 0.97), rgba(22, 19, 11, 0.97)), url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M10 10c5 5 15 5 20 0s15-5 20 0 15 5 20 0 15-5 20 0' stroke='%23d4af37' stroke-opacity='0.05' fill='none'/%3E%3C/svg%3E\")",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(135deg, #d4af37 0%, #f2ca50 50%, #d4af37 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;

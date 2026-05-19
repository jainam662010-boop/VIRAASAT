# VIRAASAT - Threads of India

A world-class cinematic website showcasing "Threads of India — A Living Museum of Indian Art". This immersive digital museum combines cutting-edge web technologies with rich cultural storytelling.

![VIRAASAT Preview](https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&q=80)

## Overview

VIRAASAT (meaning "inheritance" or "legacy" in Hindi) is a comprehensive digital platform that celebrates India's artistic heritage through:

- **10 Immersive Pages** with unique cinematic designs
- **Interactive 3D Elements** powered by Three.js
- **Smooth Cinematic Animations** using GSAP and Framer Motion
- **Virtual Museum Experience** with AR/VR capabilities
- **Educational Storytelling** about Indian art traditions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: 
  - Framer Motion for React animations
  - GSAP for scroll-triggered effects
  - Lenis for smooth scrolling
- **3D Graphics**: Three.js + React Three Fiber
- **UI Components**: Radix UI + shadcn/ui pattern
- **Icons**: Lucide React

## Design System

### Color Palette (Royal Indian Theme)
- **Primary**: `#f2ca50` (Royal Gold)
- **Primary Container**: `#d4af37` (Deeper Gold)
- **Secondary**: `#ffb77a` (Warm Saffron)
- **Tertiary**: `#becdff` (Deep Indigo)
- **Background**: `#16130b` (Museum Dark)
- **Surface**: `#16130b` (Deep Museum)

### Typography
- **Display/Hero**: Noto Serif (elegant serif for headlines)
- **Body**: Inter (clean sans-serif for readability)
- **Labels**: Inter with tracking for caps

### Spacing System
- Section Gap: `160px` (major section breaks)
- Container Max: `1440px` (content width)
- Margin Edge: `64px` (side padding)
- Gutter: `32px` (grid gaps)

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout with SEO
│   ├── globals.css           # Global styles & animations
│   ├── providers.tsx         # Lenis + GSAP setup
│   ├── map/                  # Interactive India Map
│   ├── timeline/             # Art History Timeline
│   ├── gallery/              # Art Gallery with filtering
│   ├── artists/              # Master Artisans directory
│   ├── immersive/            # VR/AR experiences
│   ├── about/                # Museum story
│   ├── contact/              # Contact & FAQ
│   └── art-forms/            # Art forms encyclopedia
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── layout/               # Header, Footer, Sidebar
│   ├── animations/           # Reusable animation components
│   └── home/                 # Home page sections
├── lib/
│   ├── utils.ts              # Utility functions
│   ├── animations.ts         # GSAP animation utilities
│   └── hooks.ts              # Custom React hooks
├── public/                   # Static assets
└── tailwind.config.ts        # Custom design tokens
```

## Pages

### 1. Home (`/`)
- Fullscreen animated hero with particle effects
- Featured art forms showcase
- Immersive preview section
- Newsletter signup

### 2. Interactive Map (`/map`)
- Stylized India map with regional art markers
- Hover-reveal information cards
- Statistics dashboard

### 3. Timeline (`/timeline`)
- Horizontal scrollable timeline
- Historical eras from Ancient to Modern
- Featured artifacts with 3D preview

### 4. Gallery (`/gallery`)
- Dynamic filtering by category
- Search functionality
- Fullscreen artwork modal
- Favorites and share options

### 5. Artists (`/artists`)
- Master artisan profiles
- Location and award information
- Disciple counts and achievements

### 6. Immersive (`/immersive`)
- 3D experience launcher
- AR visualization demos
- Virtual tour previews

### 7. Art Forms (`/art-forms`)
- Encyclopedia of Indian art traditions
- Technique descriptions
- Regional information

### 8. About (`/about`)
- Museum mission and story
- Core values presentation
- Milestone timeline
- Impact statistics

### 9. Contact (`/contact`)
- Contact form with validation
- FAQ section
- Social media links

## Animation Features

- **Scroll Reveal**: Elements animate in as you scroll
- **Parallax Effects**: Depth through layered movement
- **Hover Interactions**: Micro-animations on interactive elements
- **Page Transitions**: Smooth between-page animations
- **3D Rotations**: Mandala and artifact rotations
- **Particle Systems**: Floating elements in hero section

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting by route
- Lazy loading for below-fold content
- Reduced motion support for accessibility
- Optimized Three.js rendering

## SEO Features

- Comprehensive metadata for each page
- Open Graph tags for social sharing
- Twitter Card support
- Structured data ready
- Sitemap configuration
- Semantic HTML structure

## Accessibility

- WCAG 2.1 AA compliant
- Reduced motion preferences respected
- Keyboard navigation support
- ARIA labels on interactive elements
- High contrast mode support
- Screen reader optimized

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

```bash
# Type checking
npm run type-check

# Linting
npm run lint
```

## Asset Recommendations

### Images
- Hero backgrounds: 1920x1080 minimum, WebP format
- Gallery images: 800x600 minimum, optimized JPEG
- Artist portraits: 400x400, square format
- Icons: SVG from Lucide React

### Fonts
- Noto Serif: Google Fonts CDN
- Inter: Google Fonts CDN

### 3D Models
- Optimize for web (draco compression)
- Keep file sizes under 5MB
- Use glTF/GLB format

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 15+)
- Chrome Mobile (Android 10+)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved by VIRAASAT Museum.

## Credits

- Design: Inspired by Apple product pages, modern museum websites, and Indian royal architecture
- Icons: [Lucide](https://lucide.dev)
- Fonts: [Google Fonts](https://fonts.google.com)
- 3D Rendering: [Three.js](https://threejs.org)

---

**VIRAASAT Museum** — Preserving the Eternal Thread

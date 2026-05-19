"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/scroll-reveal";
import { MediaFrame } from "@/components/media";
import { getRequiredMediaAsset } from "@/lib/media-registry";

const artForms = [
  {
    id: "madhubani",
    name: "Madhubani",
    region: "Bihar",
    description: "Characterized by geometric patterns and symbolic depictions of nature, using twigs, fingers, and matchsticks.",
    media: getRequiredMediaAsset("madhubani-commons-primary"),
    color: "from-orange-600/20 to-red-600/20",
  },
  {
    id: "warli",
    name: "Warli Folk Art",
    region: "Maharashtra",
    description: "Tribal art using basic geometric shapes—circle, triangle, and square—depicting social cycles of life.",
    media: getRequiredMediaAsset("warli-commons-primary"),
    color: "from-stone-600/20 to-amber-600/20",
  },
  {
    id: "tanjore",
    name: "Tanjore Painting",
    region: "Tamil Nadu",
    description: "Sacred classical paintings featuring gold leaf inlay and semi-precious stone embellishments.",
    media: getRequiredMediaAsset("tanjore-commons-primary"),
    color: "from-yellow-600/20 to-amber-600/20",
  },
  {
    id: "pattachitra",
    name: "Pattachitra",
    region: "Odisha",
    description: "Scroll paintings on cloth, known for intricate details and mythological narratives.",
    media: getRequiredMediaAsset("pattachitra-commons-primary"),
    color: "from-indigo-600/20 to-purple-600/20",
  },
];

export function FeaturedArtForms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hero-content" className="py-section-gap px-4 md:px-16 max-w-container-max mx-auto">
      <ScrollReveal className="mb-16">
        <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] mb-4 block">
          DISCOVER
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
          Featured Art Forms
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Explore the diverse tapestry of Indian artistic traditions, each carrying centuries of cultural wisdom.
        </p>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {artForms.map((art) => (
          <StaggerItem key={art.id}>
            <Link href={`/art-forms/${art.id}/`}>
              <Card className="group overflow-hidden h-full cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${art.color} z-10`} />
                  <MediaFrame
                    asset={art.media}
                    className="h-full w-full"
                    imageClassName="transition-transform duration-700 group-hover:scale-105"
                    showCredit={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-20" />
                  
                  {/* Region Badge */}
                  <div className="absolute top-4 right-4 z-30 bg-surface-container/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-label-caps text-[10px] text-primary tracking-wider">{art.region}</span>
                  </div>
                </div>
                
                <CardHeader className="relative z-30">
                  <div className="flex items-center justify-between">
                    <CardTitle>{art.name}</CardTitle>
                    <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-30">
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                    {art.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="mt-16 text-center">
        <Link
          href="/art-forms/"
          className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary border-b border-primary/40 pb-1 hover:border-primary transition-all"
        >
          View All Art Forms
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

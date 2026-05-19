"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Heart, Globe, Users, Award, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedTitle } from "@/components/animations/text-reveal";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/scroll-reveal";
import { MediaFrame } from "@/components/media";
import { getRequiredMediaAsset } from "@/lib/media-registry";

const values = [
  {
    icon: Heart,
    title: "Preservation",
    description: "Safeguarding ancient techniques and knowledge systems for future generations through digital documentation and physical conservation.",
  },
  {
    icon: Users,
    title: "Empowerment",
    description: "Supporting artisan communities with fair compensation, global exposure, and sustainable livelihood opportunities.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Democratizing access to cultural heritage through immersive technology and educational initiatives worldwide.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining museum-grade standards in curation, documentation, and presentation of Indian artistic heritage.",
  },
];

const milestones = [
  { year: "2018", event: "VIRAASAT founded with pilot project in Rajasthan" },
  { year: "2019", event: "Field documentation and source review workflows begin" },
  { year: "2020", event: "Digital archive prototype reaches 1,000 catalog notes" },
  { year: "2021", event: "Interactive preview research begins" },
  { year: "2022", event: "Partnership with 200+ artisan cooperatives" },
  { year: "2023", event: "Virtual museum platform launches globally" },
  { year: "2024", event: "Expanding to 28 states, 12,000+ artifacts" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 px-4 md:px-16 pb-16">
      {/* Header */}
      <section className="max-w-container-max mx-auto mb-16">
        <AnimatedTitle
          title="Our Story"
          subtitle="VIRAASAT - meaning 'inheritance' or 'legacy' in Hindi - was born from a profound commitment to preserve and celebrate India's living artistic traditions."
        />
      </section>

      {/* Mission Section */}
      <section className="max-w-container-max mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <MediaFrame
                asset={getRequiredMediaAsset("madhubani-commons-primary")}
                className="h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] mb-4 block">
                OUR MISSION
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
                Preserving the Eternal Thread
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                We believe that art is not merely objects to be admired, but living traditions that carry the 
                wisdom, stories, and soul of civilizations. Each brushstroke, each carved line, each woven 
                thread connects us to thousands of years of human creativity and cultural evolution.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                VIRAASAT bridges ancient heritage with cutting-edge technology, creating immersive experiences 
                that honor tradition while making it accessible to global audiences. We work directly with 
                artisan communities, ensuring that the guardians of these traditions are celebrated, 
                compensated fairly, and empowered to pass their knowledge to future generations.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-container-max mx-auto mb-24">
        <ScrollReveal className="text-center mb-12">
          <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] mb-4 block">
            WHAT DRIVES US
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Our Core Values
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="glass-panel p-8 h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  {value.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Timeline Section */}
      <section className="max-w-container-max mx-auto mb-24">
        <ScrollReveal className="text-center mb-12">
          <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] mb-4 block">
            OUR JOURNEY
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Milestones
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 hidden md:block" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <TimelineItem
                key={milestone.year}
                milestone={milestone}
                isLeft={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-container-max mx-auto mb-24">
        <ScrollReveal>
          <div className="glass-panel p-8 md:p-12 text-center">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "2,400+", label: "Artisans Supported" },
                { value: "12,000+", label: "Artifacts Digitized" },
                { value: "150+", label: "Art Forms Documented" },
                { value: "28", label: "States Reached" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-display-hero text-4xl md:text-5xl text-primary block mb-2">
                    {stat.value}
                  </span>
                  <span className="font-label-caps text-[10px] text-on-surface-variant tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="max-w-container-max mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
            Join Our Mission
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
            Whether you&apos;re an artist, collector, educator, or cultural enthusiast, there are many 
            ways to support the preservation of India&apos;s artistic heritage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="lg">
              Support the Museum
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Become a Patron
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

function TimelineItem({
  milestone,
  isLeft,
  index,
}: {
  milestone: typeof milestones[0];
  isLeft: boolean;
  index: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}
    >
      <div className={`w-full md:w-1/2 ${isLeft ? "md:text-right" : "md:text-left"} text-center mb-4 md:mb-0`}>
        <div className="glass-panel p-6 inline-block">
          <span className="font-label-caps text-label-caps text-primary block mb-2">
            {milestone.year}
          </span>
          <p className="font-body-md text-body-md text-on-surface">
            {milestone.event}
          </p>
        </div>
      </div>
      
      {/* Center Dot */}
      <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shrink-0" />
      
      <div className="w-full md:w-1/2" />
    </motion.div>
  );
}

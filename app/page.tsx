import { Hero } from "@/components/home/hero";
import { TimelineOfArt } from "@/components/museum/timeline-of-art";
import { CinematicTemple } from "@/components/museum/cinematic-temple";
import { HeritageExploration } from "@/components/museum/heritage-exploration";
import { ArchitectureExperience } from "@/components/museum/architecture-experience";
import { ImmersiveArtForms } from "@/components/museum/immersive-art-forms";
import { FinalHeritageExperience } from "@/components/museum/final-heritage-experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIRAASAT | The Living Memory of Indian Art & Civilization",
  description:
    "Journey through 5,000 years of Indian artistic mastery in a premium cinematic digital museum. Explore sacred architecture, classical art forms, and cultural heritage.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TimelineOfArt />
      <CinematicTemple />
      <ImmersiveArtForms />
      <ArchitectureExperience />
      <HeritageExploration />
      <FinalHeritageExperience />
    </>
  );
}

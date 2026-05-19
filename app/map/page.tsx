import Link from "next/link";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Heritage Map",
  description:
    "Navigate VIRAASAT exhibitions, timelines, and collections through a single orientation screen.",
  path: "/map/",
});

const destinations = [
  {
    title: "Living timeline",
    href: "/timeline/",
    body: "Five millennia of form, ritual, and workshop practice, told as a continuous arc.",
  },
  {
    title: "Archive gallery",
    href: "/gallery/",
    body: "Curated objects and attributed media with sources and regional context.",
  },
  {
    title: "Immersive hall",
    href: "/immersive/",
    body: "Full-screen narrative spaces tuned for slow looking and movement.",
  },
  {
    title: "Art traditions",
    href: "/art-forms/",
    body: "Madhubani, Warli, Pattachitra, Tanjore, Kalamkari, and adjacent lineages.",
  },
  {
    title: "Master makers",
    href: "/artists/",
    body: "Biographies, lineages, and representative works from living traditions.",
  },
  {
    title: "Mission & contact",
    href: "/about/",
    body: "Editorial standards, acknowledgements, and ways to reach the curatorial desk.",
  },
];

export default function HeritageMapPage() {
  return (
    <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-28 md:pt-32">
      <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-on-surface-variant">
        Orientation
      </p>
      <h1 className="mt-3 font-display text-4xl text-primary md:text-5xl">Heritage map</h1>
      <p className="mt-4 max-w-2xl font-body text-on-surface-variant leading-relaxed">
        Use this screen as a calm index. Each destination opens a completed experience with sourced media,
        restrained motion, and museum-grade typography.
      </p>

      <ul className="mt-14 space-y-4">
        {destinations.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-start justify-between gap-6 rounded-2xl border border-outline-variant/15 bg-surface-container-low/40 px-5 py-5 transition hover:border-primary/25 hover:bg-surface-container/60"
            >
              <div>
                <h2 className="font-display text-xl text-on-surface group-hover:text-primary">{item.title}</h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">{item.body}</p>
              </div>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-primary/50 transition group-hover:text-primary" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

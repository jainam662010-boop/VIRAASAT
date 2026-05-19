import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import Link from "next/link";
import { MediaFrame, SourceList } from "@/components/media";
import { getRequiredMediaAsset } from "@/lib/media-registry";
import { generatePageMetadata } from "@/lib/seo";
import { getArtFormById, indianArtForms } from "@/data/indian-art-forms";

type ArtFormDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return indianArtForms.map((artForm) => ({ id: artForm.id }));
}

export async function generateMetadata({ params }: ArtFormDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const artForm = getArtFormById(id);
  if (!artForm) {
    return generatePageMetadata({
      title: "Art Form Not Found",
      path: `/art-forms/${id}/`,
      noIndex: true,
    });
  }

  return generatePageMetadata({
    title: artForm.name,
    description: artForm.description,
    path: `/art-forms/${artForm.id}/`,
    keywords: [artForm.name, artForm.origin.region, "Indian art", "traditional art"],
  });
}

export default async function ArtFormDetailPage({ params }: ArtFormDetailPageProps) {
  const { id } = await params;
  const artForm = getArtFormById(id);
  if (!artForm) notFound();

  const heroAsset = getRequiredMediaAsset(artForm.media.hero);
  const galleryAssets = artForm.media.gallery.map(getRequiredMediaAsset);

  return (
    <main className="min-h-screen pb-20">
      <section className="grid min-h-[82vh] grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[420px]">
          <MediaFrame
            asset={heroAsset}
            priority
            className="absolute inset-0"
            imageClassName="brightness-[0.82]"
            sizes="(min-width: 1024px) 52vw, 100vw"
          />
        </div>
        <div className="flex items-end px-4 pb-12 pt-28 md:px-16 lg:pt-40">
          <div className="max-w-2xl">
            <Link
              href="/art-forms/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              All art forms
            </Link>
            <p className="font-label-caps text-label-caps tracking-[0.24em] text-primary">Art Form</p>
            <h1 className="mt-4 font-display-hero text-display-hero leading-none text-primary">
              {artForm.name}
            </h1>
            {artForm.sanskritName && (
              <p className="mt-4 text-xl text-on-surface">{artForm.sanskritName}</p>
            )}
            <p className="mt-8 flex items-center gap-2 text-on-surface-variant">
              <MapPin className="h-4 w-4 text-primary" />
              {artForm.origin.region}
            </p>
            <p className="mt-6 font-body-lg text-body-lg text-on-surface-variant">
              {artForm.description}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-container-max grid-cols-1 gap-12 px-4 py-20 md:px-16 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-8">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary">Origin</h2>
            <p className="mt-3 text-on-surface-variant">{artForm.origin.period}</p>
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md text-primary">Materials</h2>
            <ul className="mt-4 space-y-2 text-on-surface-variant">
              {artForm.materials.map((material) => (
                <li key={material}>{material}</li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="space-y-14">
          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary">Historical Context</h2>
            <p className="mt-5 text-lg leading-8 text-on-surface-variant">
              {artForm.origin.historicalContext}
            </p>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary">Techniques</h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {artForm.techniques.map((technique) => (
                <div key={technique} className="border border-outline-variant/25 bg-surface-container/40 p-4">
                  {technique}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary">Cultural Symbolism</h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 text-on-surface-variant sm:grid-cols-2">
              {artForm.symbolism.map((symbol) => (
                <li key={symbol} className="border-l border-primary/50 pl-4">{symbol}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary">Gallery</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {galleryAssets.map((asset) => (
                <MediaFrame key={asset.id} asset={asset} className="aspect-[4/3]" />
              ))}
            </div>
          </section>

          <SourceList sources={artForm.sources} />
        </div>
      </section>
    </main>
  );
}

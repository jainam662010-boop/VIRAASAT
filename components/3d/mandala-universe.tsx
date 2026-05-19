"use client";

type ConceptPanelProps = {
  title: string;
  description: string;
};

function ConceptPanel({ title, description }: Readonly<ConceptPanelProps>) {
  return (
    <div className="flex h-full min-h-[320px] w-full items-center justify-center bg-surface">
      <div className="max-w-sm px-6 text-center">
        <div className="mx-auto mb-5 h-14 w-14 rounded-full border border-primary/40 bg-primary/10" />
        <p className="font-label-caps text-label-caps text-primary">{title}</p>
        <p className="mt-3 text-sm leading-6 text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}

export function MandalaUniverse() {
  return (
    <ConceptPanel
      title="Mandala Study"
      description="A lightweight concept panel reserved for future optional 3D work. It is not presented as a historical artifact."
    />
  );
}

export function TempleSculpture() {
  return (
    <ConceptPanel
      title="Temple Architecture Study"
      description="A static preview area for architectural interpretation notes and future optimized models."
    />
  );
}

export function ArtifactViewer({ artifactId }: Readonly<{ artifactId: string }>) {
  return (
    <ConceptPanel
      title={`Artifact Study ${artifactId}`}
      description="A concept viewer for provenance, material, and source notes. No unsupported scan or restoration claim is made."
    />
  );
}

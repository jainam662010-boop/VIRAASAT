import type { MediaAsset } from "@/lib/media-registry";

type CreditLineProps = {
  asset?: Pick<MediaAsset, "author" | "publisher" | "sourceUrl" | "licenseType" | "requiresAttribution">;
  className?: string;
};

export function CreditLine({ asset, className = "" }: CreditLineProps) {
  if (!asset || !asset.requiresAttribution) return null;

  const label = [
    asset.author ? `Credit: ${asset.author}` : undefined,
    asset.publisher,
    asset.licenseType,
  ].filter(Boolean).join(" · ");

  if (!label) return null;

  return (
    <p className={`text-[11px] leading-5 text-on-surface-variant/80 ${className}`}>
      {asset.sourceUrl ? (
        <a
          href={asset.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-primary/40 underline-offset-4 hover:text-primary"
        >
          {label}
        </a>
      ) : (
        label
      )}
    </p>
  );
}

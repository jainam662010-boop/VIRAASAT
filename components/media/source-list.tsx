export type SourceItem = {
  title: string;
  url: string;
  publisher?: string;
};

type SourceListProps = {
  sources: SourceItem[];
};

export function SourceList({ sources }: SourceListProps) {
  if (sources.length === 0) return null;

  return (
    <section className="border-t border-outline-variant/20 pt-8">
      <h2 className="font-headline-md text-headline-md text-primary">Sources and Learn More</h2>
      <ul className="mt-5 space-y-3">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="text-on-surface underline decoration-primary/40 underline-offset-4 hover:text-primary"
            >
              {source.title}
            </a>
            {source.publisher && (
              <span className="ml-2 text-sm text-on-surface-variant">({source.publisher})</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

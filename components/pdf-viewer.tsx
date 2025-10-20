'use client';

import { useMemo, useState } from 'react';

interface PdfViewerProps {
  title: string;
  file: string;
  description?: string;
  version?: string;
}

export function PdfViewer({ title, file, description, version }: PdfViewerProps) {
  const [page, setPage] = useState(1);
  const viewerSrc = useMemo(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://www.havana-lounge.at';
    return `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(`${origin}${file}`)}`;
  }, [file]);

  return (
    <div className="glass-panel gradient-border space-y-4 rounded-3xl p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl text-text">{title}</h3>
          {version && <p className="text-xs uppercase tracking-[0.3em] text-secondary/70">{version}</p>}
        </div>
        <a
          href={file}
          download
          className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary transition hover:border-accent hover:text-accent"
        >
          PDF herunterladen
        </a>
      </div>
      {description && <p className="text-sm text-secondary/80">{description}</p>}
      <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10">
        <iframe title={`${title} PDF`} src={viewerSrc} className="h-full w-full" />
      </div>
      <div className="flex items-center justify-between text-xs text-secondary/60">
        <span>Seite {page} · Vorschau</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="rounded-full border border-white/10 px-3 py-1 transition hover:border-accent hover:text-accent"
          >
            Zurück
          </button>
          <button
            type="button"
            onClick={() => setPage((prev) => prev + 1)}
            className="rounded-full border border-white/10 px-3 py-1 transition hover:border-accent hover:text-accent"
          >
            Weiter
          </button>
        </div>
      </div>
      <p className="text-xs text-secondary/50">
        Hinweis: Ersetze die Platzhalter-PDFs durch die offiziellen Speisekarten unter <code>/public/pdfs</code> und passe die URLs entsprechend
        an, damit die Vorschau das richtige Dokument lädt.
      </p>
    </div>
  );
}

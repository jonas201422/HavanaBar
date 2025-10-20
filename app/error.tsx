'use client';

import Link from 'next/link';

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-secondary">500</p>
      <h1 className="mt-6 font-display text-5xl text-text">Etwas ist schiefgelaufen</h1>
      <p className="mt-4 max-w-xl text-sm text-secondary/80">
        Wir kümmern uns darum. Versuche es in wenigen Augenblicken erneut oder kontaktiere uns direkt für Reservierungen und Fragen.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent"
        >
          Erneut versuchen
        </button>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-accent bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-accent/90"
        >
          Kontakt aufnehmen
        </Link>
      </div>
    </div>
  );
}

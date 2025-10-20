import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-secondary">404</p>
      <h1 className="mt-6 font-display text-5xl text-text">Seite nicht gefunden</h1>
      <p className="mt-4 max-w-xl text-sm text-secondary/80">
        Die gewünschte Seite wurde verschoben oder existiert nicht mehr. Entdecke unsere Signature Cocktails und finde deine perfekte Nacht in Linz.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}

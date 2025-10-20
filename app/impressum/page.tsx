import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Havana Lounge Bar in Linz gemäß österreichischem Recht.',
  alternates: {
    canonical: '/impressum'
  }
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-32">
      <h1 className="font-display text-5xl text-text">Impressum</h1>
      <div className="mt-8 space-y-6 text-sm text-secondary/80">
        <section>
          <h2 className="text-xs uppercase tracking-[0.3em] text-secondary">Unternehmen</h2>
          <p className="mt-2">
            Havana Lounge Bar
            <br />
            Inhaber: Dardan Ramadani
            <br />
            Wiener Straße 27
            <br />
            4020 Linz, Österreich
          </p>
        </section>
        <section>
          <h2 className="text-xs uppercase tracking-[0.3em] text-secondary">Kontakt</h2>
          <p className="mt-2">
            Telefon: <a href="tel:+436764205852" className="underline">+43 676 4205852</a>
            <br />
            E-Mail: <a href="mailto:havana.lounge.bar@gmx.at" className="underline">havana.lounge.bar@gmx.at</a>
          </p>
        </section>
        <section>
          <h2 className="text-xs uppercase tracking-[0.3em] text-secondary">Aufsichtsbehörde</h2>
          <p className="mt-2">Bezirkshauptmannschaft Linz (Platzhalter – bitte genaue Behörde eintragen)</p>
        </section>
        <section>
          <h2 className="text-xs uppercase tracking-[0.3em] text-secondary">UID / Firmenbuch</h2>
          <p className="mt-2">UID-Nr.: Platzhalter · Firmenbuchnummer: Platzhalter</p>
        </section>
        <section>
          <h2 className="text-xs uppercase tracking-[0.3em] text-secondary">Mitgliedschaften</h2>
          <p className="mt-2">Platzhalter (z. B. WKO Oberösterreich)</p>
        </section>
        <section>
          <h2 className="text-xs uppercase tracking-[0.3em] text-secondary">Berufsrechtliche Vorschriften</h2>
          <p className="mt-2">Gewerbeordnung: <a href="https://www.ris.bka.gv.at" className="underline" target="_blank" rel="noreferrer">RIS</a></p>
        </section>
        <section>
          <h2 className="text-xs uppercase tracking-[0.3em] text-secondary">Haftungsausschluss</h2>
          <p className="mt-2">
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
            jedoch keine Gewähr übernehmen.
          </p>
        </section>
        <section>
          <h2 className="text-xs uppercase tracking-[0.3em] text-secondary">Bildnachweise</h2>
          <p className="mt-2">
            Fotos: Havana Lounge Bar, Instagram/Facebook (bitte konkretisieren), Google Maps (Streetview) – bitte durch konkrete Quellen ersetzen.
          </p>
        </section>
      </div>
    </div>
  );
}

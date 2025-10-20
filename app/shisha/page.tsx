import shisha from '@/content/shisha.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shisha Lounge',
  description:
    'Premium-Shisha-Angebot der Havana Lounge Bar mit internationalen Tabaksorten, Mixes und Upgrades. Genieße entspannte Abende in Linz.',
  alternates: {
    canonical: '/shisha'
  }
};

export default function ShishaPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-32">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">Shisha</p>
        <h1 className="mt-6 font-display text-5xl text-text">Premium Shisha Lounge</h1>
        <p className="mt-4 text-base text-secondary/80">{shisha.intro}</p>
      </header>
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {shisha.mixes.map((mix) => (
          <article key={mix.name} className="glass-panel gradient-border rounded-3xl p-6">
            <h2 className="font-display text-3xl text-text">{mix.name}</h2>
            <p className="mt-3 text-sm text-secondary/80">{mix.profile}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-accent">{mix.strength}</p>
          </article>
        ))}
      </section>
      <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-sm uppercase tracking-[0.3em] text-secondary">Upgrades</h2>
        <ul className="mt-4 grid gap-3 text-sm text-secondary/80">
          {shisha.upgrades.map((upgrade) => (
            <li key={upgrade} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>{upgrade}</span>
            </li>
          ))}
        </ul>
      </section>
      <p className="mt-10 text-sm text-secondary/70">
        Hinweis: Bitte ergänze aktuelle Marken, Preise und Specials in <code>content/shisha.json</code>.
      </p>
    </div>
  );
}

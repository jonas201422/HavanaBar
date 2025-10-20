import team from '@/content/team.json';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About – Unsere Story',
  description:
    'Die Story der Havana Lounge Bar in Linz: Team, Werte und Philosophie. Erlebe, wie aus einer Vision eine der elegantesten Bars der Stadt wurde.',
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-32">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">Über uns</p>
        <h1 className="mt-6 font-display text-5xl text-text">Die Seele der Havana Lounge</h1>
        <p className="mt-4 text-base text-secondary/80">{team.intro}</p>
      </header>
      <section className="mt-12 grid gap-8 lg:grid-cols-3">
        {team.members.map((member) => (
          <article key={member.name} className="glass-panel gradient-border flex h-full flex-col rounded-3xl p-6">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 90vw"
              />
            </div>
            <h2 className="mt-6 font-display text-2xl text-text">{member.name}</h2>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-accent">{member.role}</p>
            <p className="mt-4 text-sm text-secondary/80">{member.bio}</p>
          </article>
        ))}
      </section>
      <section className="mt-16 space-y-6 text-sm text-secondary/80">
        <p>
          Die Havana Lounge Bar vereint die Eleganz klassischer Hotelbars mit dem Temperament karibischer Nächte. Wir glauben an kompromisslose
          Qualität bei Zutaten, Service und Sound. Jeder Drink wird mit Präzision und viel Liebe zum Detail gemixt.
        </p>
        <p>
          Nachhaltigkeit ist uns wichtig: Wir setzen auf lokale Lieferanten, minimieren Plastik und verwenden saisonale Früchte, wann immer
          möglich.
        </p>
        <p>
          Du planst ein privates Event oder Corporate Gathering? Sprich uns an – wir gestalten individuelle Packages inklusive Cocktail-Catering,
          DJs und Dekoration.
        </p>
      </section>
    </div>
  );
}

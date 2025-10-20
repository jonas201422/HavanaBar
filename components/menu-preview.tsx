import menu from '@/content/menu.json';
import { SectionHeading } from './section-heading';
import { AppButton } from './button';

export function MenuPreview() {
  const featured = menu.sections.flatMap((section) => section.items.slice(0, 2)).slice(0, 4);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Signature Selection"
        title="Kuratierte Cocktailkunst & Premium-Spirits"
        description="Jeder Drink erzählt eine Geschichte: Rum aus den besten Destillerien, hausgemachte Infusionen und regionale Zutaten."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {featured.map((item) => (
          <article
            key={item.name}
            className="glass-panel gradient-border relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:border-accent/40"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-2xl text-text">{item.name}</h3>
              <span className="text-sm font-semibold text-accent">{item.price}</span>
            </div>
            <p className="mt-3 text-sm text-secondary/80">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags?.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-secondary">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <AppButton href="/menu" variant="secondary">
          Zur vollständigen Karte
        </AppButton>
      </div>
    </section>
  );
}

import events from '@/content/events.json';
import { SectionHeading } from './section-heading';
import { AppButton } from './button';

export function EventsGrid() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Events"
        title="Nights to remember"
        description={events.intro}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {events.events.map((event) => (
          <article key={event.title} className="glass-panel gradient-border flex h-full flex-col rounded-3xl p-6">
            <div className="flex items-center justify-between text-sm text-secondary/80">
              <span>{event.date}</span>
              <span>{event.time}</span>
            </div>
            <h3 className="mt-4 font-display text-2xl text-text">{event.title}</h3>
            <p className="mt-3 text-sm text-secondary/80">{event.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-secondary">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-6">
              <AppButton href={event.ctaUrl} target="_blank" rel="noreferrer" variant="primary">
                {event.cta}
              </AppButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

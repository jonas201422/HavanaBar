import events from '@/content/events.json';
import { Metadata } from 'next';
import { AppButton } from '@/components/button';

export const metadata: Metadata = {
  title: 'Events & Live Nights',
  description:
    'Alle Events der Havana Lounge Bar in Linz: DJs, Tastings und Special Nights. Entdecke den Eventkalender und reserviere deinen Tisch.',
  alternates: {
    canonical: '/events'
  }
};

export default function EventsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-32">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">Events</p>
        <h1 className="mt-6 font-display text-5xl text-text">Eventkalender</h1>
        <p className="mt-4 text-base text-secondary/80">{events.intro}</p>
      </header>
      <section className="mt-12 space-y-6">
        {events.events.map((event) => (
          <article key={event.title} className="glass-panel gradient-border rounded-3xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-secondary/70">
              <span>{event.date}</span>
              <span>{event.time}</span>
            </div>
            <h2 className="mt-4 font-display text-3xl text-text">{event.title}</h2>
            <p className="mt-3 text-sm text-secondary/80">{event.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-secondary">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <AppButton href={event.ctaUrl} target="_blank" rel="noreferrer">
                {event.cta}
              </AppButton>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

import openingHours from '@/content/opening-hours.json';
import { reservationTel, reservationWhatsApp, siteConfig } from '@/lib/constants';

interface ContactCardProps {
  standalone?: boolean;
}

export function ContactCard({ standalone = true }: ContactCardProps) {
  const cardContent = (
    <div className="glass-panel gradient-border rounded-3xl p-8">
      <h2 className="font-display text-4xl text-text">Besuche uns</h2>
      <p className="mt-4 text-sm text-secondary/80">
        {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}
      </p>
      <div className="mt-6 grid gap-3 text-sm text-secondary/80">
        <a href={reservationTel} className="hover:text-accent">
          {siteConfig.phone}
        </a>
        <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
          {siteConfig.email}
        </a>
        <a href={reservationWhatsApp} target="_blank" rel="noreferrer" className="hover:text-accent">
          WhatsApp Reservierung
        </a>
      </div>
      <div className="mt-8">
        <h3 className="text-xs uppercase tracking-[0.3em] text-secondary">Öffnungszeiten</h3>
        <ul className="mt-4 space-y-2 text-sm text-secondary/80">
          {openingHours.days.map((entry) => (
            <li key={entry.day} className="flex justify-between">
              <span>{entry.day}</span>
              <span>{entry.hours}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-secondary/60">{openingHours.note}</p>
      </div>
    </div>
  );

  const map = (
    <div className="overflow-hidden rounded-3xl border border-white/10">
      <iframe
        title="Google Maps Havana Lounge Bar"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.344259850106!2d14.298540076919916!3d48.29041094311851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773997dedcceadb%3A0x74d3ec52ffb62a1c!2sHavana%20Lounge%20Bar!5e0!3m2!1sde!2sat!4v1700000000000!5m2!1sde!2sat"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );

  if (standalone) {
    return (
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          {cardContent}
          {map}
        </div>
      </section>
    );
  }

  return (
    <div className="space-y-6">
      {cardContent}
      {map}
    </div>
  );
}

import { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { ContactCard } from '@/components/contact-card';

export const metadata: Metadata = {
  title: 'Kontakt & Reservierung',
  description:
    'Kontakt zur Havana Lounge Bar in Linz. Reservierungen via WhatsApp, Telefon oder Kontaktformular. Öffnungszeiten und Anfahrt.',
  alternates: {
    canonical: '/contact'
  }
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-32">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">Kontakt</p>
        <h1 className="mt-6 font-display text-5xl text-text">Wir freuen uns auf deine Anfrage</h1>
        <p className="mt-4 text-base text-secondary/80">
          Reserviere deinen Tisch, plane ein Event oder stelle uns Fragen zur Karte. Wir antworten in der Regel innerhalb von 24 Stunden.
        </p>
      </header>
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />
        <ContactCard standalone={false} />
      </div>
    </div>
  );
}

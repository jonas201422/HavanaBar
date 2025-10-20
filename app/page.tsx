import { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { MenuPreview } from '@/components/menu-preview';
import { EventsGrid } from '@/components/events-grid';
import { Testimonials } from '@/components/testimonials';
import { SocialFeed } from '@/components/social-feed';
import { ContactCard } from '@/components/contact-card';

export const metadata: Metadata = {
  title: 'Cocktailbar & Lounge in Linz',
  description:
    'Havana Lounge Bar – moderne Cocktailbar mit Premium-Shishas, Signature Drinks und Live-Events in Linz. Reserviere jetzt deinen Tisch.',
  alternates: {
    canonical: '/'
  }
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />
      <MenuPreview />
      <EventsGrid />
      <Testimonials />
      <SocialFeed />
      <ContactCard />
    </div>
  );
}

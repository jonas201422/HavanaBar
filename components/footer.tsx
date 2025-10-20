import Link from 'next/link';
import { siteConfig } from '@/lib/constants';
import openingHours from '@/content/opening-hours.json';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.25em] text-secondary uppercase">Havana Lounge Bar</p>
          <p className="text-sm text-secondary/80">
            Wiener Straße 27
            <br />
            4020 Linz, Österreich
          </p>
          <div className="text-sm text-secondary/80">
            <p>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-accent">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-secondary/80">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">Öffnungszeiten</h3>
          <ul className="mt-4 space-y-2 text-sm text-secondary/80">
            {openingHours.days.map((entry) => (
              <li key={entry.day} className="flex justify-between gap-4">
                <span>{entry.day}</span>
                <span>{entry.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-secondary/60">{openingHours.note}</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">Connect</h3>
          <div className="flex flex-col gap-2 text-sm text-secondary/80">
            <Link href={siteConfig.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </Link>
            <Link href={siteConfig.social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </Link>
          </div>
          <div className="text-xs text-secondary/60">
            <Link href="/impressum" className="hover:text-accent">
              Impressum
            </Link>{' '}
            ·{' '}
            <Link href="/datenschutz" className="hover:text-accent">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-secondary/60">
        © {new Date().getFullYear()} Havana Lounge Bar. Crafted für Genussmomente in Linz.
      </div>
    </footer>
  );
}

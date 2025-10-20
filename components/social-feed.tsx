import social from '@/content/social.json';
import { SectionHeading } from './section-heading';
import Image from 'next/image';
import Link from 'next/link';

export function SocialFeed() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Social Highlights"
        title="Bleib verbunden"
        description="Aktuelle Eindrücke aus der Havana Lounge Bar auf Instagram und Facebook. Bitte echte Posts im CMS aktualisieren."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {social.instagram.latest.concat(social.facebook.latest).map((post) => (
          <Link
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="glass-panel gradient-border flex h-full flex-col overflow-hidden rounded-3xl transition hover:-translate-y-1"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 90vw" />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-secondary/70">{post.postedAt}</p>
                <p className="mt-3 text-base text-text">{post.title}</p>
              </div>
              <span className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">View Post</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

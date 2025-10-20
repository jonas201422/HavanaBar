import Image from 'next/image';
import gallery from '@/content/gallery.json';

export function GalleryMasonry() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.4em] text-secondary">Impressionen</p>
      <h2 className="mt-4 font-display text-4xl text-text md:text-5xl">Atmosphäre einfange</h2>
      <p className="mt-4 text-base text-secondary/80">{gallery.placeholderNotice}</p>
      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {gallery.images.map((image) => (
          <figure key={image.src} className="mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full object-cover transition hover:scale-[1.02]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

import testimonials from '@/content/testimonials.json';
import { SectionHeading } from './section-heading';

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Voices of our guests"
        title="Ausgezeichnet bewertet"
        description={`Ø ${testimonials.averageRating} Sterne auf ${testimonials.source}`}
        align="center"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.reviews.map((review) => (
          <blockquote key={review.author} className="glass-panel gradient-border h-full rounded-3xl p-6 text-sm text-secondary/80">
            <div className="flex items-center gap-2 text-accent">
              {Array.from({ length: review.rating }).map((_, index) => (
                <span key={index}>★</span>
              ))}
            </div>
            <p className="mt-4 text-base text-text">“{review.quote}”</p>
            <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-secondary/80">{review.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

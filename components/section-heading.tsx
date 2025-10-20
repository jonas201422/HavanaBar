import { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className="text-xs uppercase tracking-[0.4em] text-secondary">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl text-text md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base text-secondary/80">{description}</p>}
    </div>
  );
}

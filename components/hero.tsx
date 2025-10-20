'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { reservationTel, reservationWhatsApp } from '@/lib/constants';
import { AppButton } from './button';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <Image
          src="/images/hero/havana-hero-placeholder.svg"
          alt="Blick über die Bar der Havana Lounge mit kupferfarbenem Licht"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(192,122,58,0.15),_transparent_60%)]" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-secondary">Cocktailbar · Lounge · Shisha</p>
          <h1 className="mt-6 font-display text-5xl leading-tight text-text md:text-6xl">
            Havana Lounge Bar Linz
          </h1>
          <p className="mt-6 text-lg text-secondary md:text-xl">
            High-End Drinks, stimmungsvolles Ambiente und exklusive Nächte im Herzen von Linz. Reserviere deinen Tisch für Signature
            Cocktails, Premium-Shishas und Live-Beats.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <AppButton href={reservationWhatsApp} target="_blank" rel="noreferrer" className="shadow-glow">
              Jetzt via WhatsApp reservieren
            </AppButton>
            <AppButton href={reservationTel} variant="secondary">
              Anrufen
            </AppButton>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          className="glass-panel gradient-border max-w-xl p-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-secondary">Signature Cocktail</p>
          <h2 className="mt-4 font-display text-3xl text-text">Aged Rum Old Cuban</h2>
          <p className="mt-3 text-sm text-secondary/90">
            Angereicherter Havana Club Selección de Maestros, hausgemachter Muscovado-Sirup, frische Limette, Minze und Champagner-Top.
          </p>
          <p className="mt-5 text-sm font-semibold text-accent">€14</p>
        </motion.div>
      </div>
    </section>
  );
}

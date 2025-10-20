'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { reservationWhatsApp } from '@/lib/constants';

export function AnnouncementBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative isolate flex items-center justify-center gap-3 overflow-hidden border-b border-white/5 bg-accent/15 px-6 py-2 text-sm text-accent"
    >
      <span className="hidden sm:inline">Tonight&apos;s Highlight:</span>
      <span className="font-medium">Latin Groove Fridays · DJs ab 21:00 · Rum-Specials</span>
      <Link
        href={reservationWhatsApp}
        className="rounded-full border border-accent/40 bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent transition hover:bg-accent/30"
        target="_blank"
        rel="noreferrer"
      >
        Reservieren
      </Link>
    </motion.div>
  );
}

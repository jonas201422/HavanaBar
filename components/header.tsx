'use client';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { reservationWhatsApp } from '@/lib/constants';
import { AppButton } from './button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Shisha', href: '/shisha' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export function Header() {
  const pathname = usePathname();

  return (
    <Disclosure
      as="header"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gradient-to-b from-background/95 to-background/40 backdrop-blur-xl"
    >
      {({ open }) => (
        <>
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3 text-sm font-medium tracking-[0.25em] uppercase">
              <span className="h-10 w-10 rounded-full bg-accent/20 ring-1 ring-accent/60" />
              Havana Lounge Bar
            </Link>
            <div className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium tracking-wide transition hover:text-accent ${
                      isActive ? 'text-accent' : 'text-secondary'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <AppButton href={reservationWhatsApp} target="_blank" rel="noreferrer">
                Jetzt reservieren
              </AppButton>
            </div>
            <Disclosure.Button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-secondary transition hover:border-accent/40 hover:text-accent lg:hidden">
              <span className="sr-only">Menü öffnen</span>
              {open ? <XMarkIcon className="h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="h-6 w-6" aria-hidden="true" />}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-1 border-t border-white/5 bg-background/95 px-6 py-4"
            >
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    href={item.href}
                    className={`block rounded-xl px-3 py-2 text-sm font-medium transition ${
                      isActive ? 'bg-accent/20 text-accent' : 'text-secondary hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Disclosure.Button>
                );
              })}
              <AppButton
                href={reservationWhatsApp}
                target="_blank"
                rel="noreferrer"
                className="w-full justify-center"
              >
                Jetzt reservieren
              </AppButton>
            </motion.nav>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

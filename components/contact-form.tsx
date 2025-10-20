'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ status: 'idle' });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setFormState({ status: 'loading' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message')
        })
      });

      if (response.ok) {
        setFormState({ status: 'success', message: 'Danke! Wir melden uns zeitnah.' });
        event.currentTarget.reset();
      } else {
        const { error } = await response.json();
        setFormState({ status: 'error', message: error ?? 'Senden fehlgeschlagen.' });
      }
    } catch (error) {
      setFormState({ status: 'error', message: 'Netzwerkfehler – bitte später erneut versuchen.' });
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="glass-panel gradient-border space-y-6 rounded-3xl p-8"
    >
      <div>
        <label htmlFor="name" className="text-xs uppercase tracking-[0.3em] text-secondary">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Dein Name"
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text placeholder:text-secondary/40"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-xs uppercase tracking-[0.3em] text-secondary">
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="dein@email.at"
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text placeholder:text-secondary/40"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-xs uppercase tracking-[0.3em] text-secondary">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Optional"
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text placeholder:text-secondary/40"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-[0.3em] text-secondary">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Wie können wir helfen?"
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text placeholder:text-secondary/40"
        />
      </div>
      <button
        type="submit"
        disabled={formState.status === 'loading'}
        className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {formState.status === 'loading' ? 'Wird gesendet…' : 'Nachricht senden'}
      </button>
      {formState.message && (
        <p
          role="status"
          className={`text-sm ${
            formState.status === 'error' ? 'text-red-400' : 'text-accent'
          }`}
        >
          {formState.message}
        </p>
      )}
      <p className="text-xs text-secondary/50">
        Hinweis: Durch Absenden stimmst du der Verarbeitung deiner Angaben zur Bearbeitung deiner Anfrage zu. Details findest du in unserer
        <a href="/datenschutz" className="ml-1 underline">
          Datenschutzerklärung
        </a>
        .
      </p>
    </motion.form>
  );
}

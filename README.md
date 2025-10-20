# Havana Lounge Bar – Next.js 14 Website

High-end, production-ready Marketing-Website für die **Havana Lounge Bar** in Linz. Entwickelt mit Next.js 14 (App Router), TypeScript, Tailwind CSS und Framer Motion. Optimiert für Performance, SEO und Barrierefreiheit.

## 🚀 Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS mit Custom Theme
- Framer Motion für Animationen
- ESLint + Prettier
- Build-Ziel: Vercel (inkl. `vercel.json`)

## 📦 Setup
```bash
pnpm install # oder npm install / yarn install
pnpm dev     # Entwicklungsserver auf http://localhost:3000
pnpm lint    # ESLint
pnpm typecheck
pnpm build   # Production Build
```

> Hinweis: Fonts werden aktuell über Google Fonts im globalen Stylesheet geladen.

## 📂 Struktur & Content-Management
```
app/               # Next.js App Router Pages & Layouts
components/        # UI-Komponenten (Hero, Header, Footer, PDFViewer, ...)
content/           # Pflegebare JSON-Dateien für Öffnungszeiten, Menüs, Events etc.
public/images/     # Platzhalter-Assets (SVG) – bitte mit echten Fotos ersetzen
public/pdfs/       # Menü-PDFs (aktuell Platzhalter)
lib/               # Site-Konstanten & Schema.org
```

### Inhalte pflegen
- **Öffnungszeiten:** `content/opening-hours.json`
- **Menü / PDFs:** `content/menu.json`
- **Shisha:** `content/shisha.json`
- **Events:** `content/events.json`
- **Team:** `content/team.json`
- **Social Posts:** `content/social.json`
- **Testimonials:** `content/testimonials.json`

Alle Komponenten konsumieren diese JSON-Dateien. Änderungen werden ohne Code-Anpassungen übernommen.

### PDFs aktualisieren
1. Original-PDFs von [havana-lounge.at](https://www.havana-lounge.at) herunterladen.
2. Dateien in `public/pdfs/` ablegen (z. B. `havana-drinks-2024.pdf`).
3. Pfade sowie Meta-Infos (Titel, Version) in `content/menu.json` aktualisieren.
4. Optional: Weitere PDFs hinzufügen – die Menu-Seite rendert die Liste automatisch.

## 🛡 Datenschutz & Rechtliches
- Impressum und Datenschutzerklärung als separate Routen (`/impressum`, `/datenschutz`).
- Platzhalter für Aufsichtsbehörde, UID, Mitgliedschaften – bitte ergänzen.
- Datenschutzerklärung deckt Hosting, Logs, Kontaktformular, WhatsApp, Social Embeds, Google Maps & Cookies ab.

## 🌐 SEO & Performance
- `metadata` API pro Seite
- `app/sitemap.ts` & `app/robots.ts`
- Schema.org JSON-LD (`lib/schema.ts`)
- Optimierte Platzhalterbilder als SVG (bitte echte Bilder einfügen)
- Lazy Masonry-Galerie & strukturierte Menü-Inhalte

### Lighthouse Zielwerte
- Performance ≥ 90
- Accessibility ≥ 95 (Kontraste, Focus States, semantische Struktur)
- Best Practices ≥ 95
- SEO ≥ 95

## ♿ Accessibility Checkliste
- Tastatur-Fokus & `focus-visible` Styles
- Ausreichende Farbkontraste (≥ 4.5:1)
- Semantische Überschriften-Hierarchie
- Alt-Texte für alle Medien (Platzhalter bereits vorhanden)
- Formulare mit Labels und Statusmeldungen

## 🔁 Deployment auf Vercel
1. Repository zu Vercel importieren.
2. Build Command: `pnpm install && pnpm build`
3. Output: `.next`
4. Environment Variables: aktuell keine notwendig.
5. Production Domain konfigurieren (z. B. `havana-lounge.at`).

`vercel.json` ist vorbereitet und zeigt auf das Next.js Build.

## ✅ Qualitäts-Checkliste vor Go-Live
- [ ] Echte Bilder & OG-Image ersetzen (`public/images/*`)
- [ ] PDFs austauschen (`public/pdfs/*`)
- [ ] Öffnungszeiten & Preise aktualisieren (`content/*.json`)
- [ ] Impressum/Datenschutz finalisieren
- [ ] WhatsApp-Text und Eventtexte prüfen
- [ ] Lighthouse & Accessibility Audit laufen lassen

Viel Erfolg bei der finalen Umsetzung! 🍸

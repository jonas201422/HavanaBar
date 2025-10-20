import menu from '@/content/menu.json';
import { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { PdfViewer } from '@/components/pdf-viewer';

export const metadata: Metadata = {
  title: 'Menu – Cocktails & Drinks',
  description:
    'Entdecke die Cocktail- und Getränkekarte der Havana Lounge Bar in Linz. Signature Drinks, Champagner, alkoholfreie Kreationen und Shisha-Menüs.',
  alternates: {
    canonical: '/menu'
  }
};

export default function MenuPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-32">
      <SectionHeading
        eyebrow="Menu"
        title="Unsere Karten"
        description="Hier findest du die vollständigen Speise- und Getränkekarten als barrierefreie HTML-Version sowie als Download-PDF."
      />

      <section className="mt-12 space-y-10">
        {menu.sections.map((section) => (
          <article key={section.title} className="glass-panel gradient-border rounded-3xl p-8">
            <header className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-display text-3xl text-text">{section.title}</h2>
              <p className="text-xs uppercase tracking-[0.3em] text-secondary">Aktualisiert {menu.lastUpdated}</p>
            </header>
            <ul className="mt-6 space-y-6">
              {section.items.map((item) => (
                <li key={item.name} className="grid gap-3 md:grid-cols-[3fr_1fr] md:items-center">
                  <div>
                    <h3 className="font-display text-2xl text-text">{item.name}</h3>
                    <p className="mt-2 text-sm text-secondary/80">{item.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags?.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-right text-lg font-semibold text-accent">{item.price}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        {menu.pdfs.map((pdf) => (
          <PdfViewer key={pdf.file} title={pdf.title} file={pdf.file} description={pdf.description} version={pdf.version} />
        ))}
      </section>

      <p className="mt-12 rounded-2xl border border-dashed border-accent/40 bg-accent/10 p-6 text-sm text-secondary/80">
        Hinweis: Ersetze die PDF-Platzhalter im Ordner <code>/public/pdfs</code> durch die offiziellen Speisekarten von havana-lounge.at und aktualisiere
        die Pfade in <code>content/menu.json</code>.
      </p>
    </div>
  );
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Havana Lounge Bar (DSGVO).',
  alternates: {
    canonical: '/datenschutz'
  }
};

const sections = [
  {
    title: '1. Verantwortlicher',
    content:
      'Havana Lounge Bar, Wiener Straße 27, 4020 Linz, Österreich · Inhaber: Dardan Ramadani · Kontakt: +43 676 4205852, havana.lounge.bar@gmx.at'
  },
  {
    title: '2. Hosting & Server-Logs',
    content:
      'Unser Hosting-Partner (z. B. Vercel) speichert automatisch Daten wie IP-Adresse, Datum, Uhrzeit und angeforderte Seiten in Server-Logfiles. Diese Daten dienen der Sicherstellung des technischen Betriebs und werden nach 14 Tagen gelöscht.'
  },
  {
    title: '3. Kontaktformular',
    content:
      'Über das Kontaktformular übermittelte Daten (Name, E-Mail, Telefon, Nachricht) werden ausschließlich zur Bearbeitung der Anfrage verwendet. Die Daten werden verschlüsselt übertragen und spätestens nach 6 Monaten gelöscht, sofern keine gesetzliche Aufbewahrungspflicht besteht.'
  },
  {
    title: '4. WhatsApp & Telefon',
    content:
      'Bei Klick auf den WhatsApp-Button oder die Telefonnummer verlassen Sie unsere Website. Es gelten die Datenschutzbestimmungen von WhatsApp Ireland Limited bzw. Ihres Telefonanbieters.'
  },
  {
    title: '5. Eingebettete Social Media Inhalte',
    content:
      'Auf unserer Website verlinken wir auf Inhalte von Instagram und Facebook. Beim Besuch der jeweiligen Plattform gelten die Datenschutzrichtlinien der Meta Platforms Ireland Limited.'
  },
  {
    title: '6. Google Maps',
    content:
      'Wir binden einen Kartenausschnitt von Google Maps ein. Anbieter ist Google Ireland Limited. Durch die Nutzung können Daten an Google übertragen werden. Weitere Informationen finden Sie unter https://policies.google.com/privacy.'
  },
  {
    title: '7. Cookies',
    content:
      'Wir setzen derzeit nur technisch notwendige Cookies ein. Es werden keine Tracking- oder Marketing-Cookies ohne Einwilligung gesetzt. Sollte sich dies ändern, wird ein entsprechendes Consent-Management-Tool implementiert.'
  },
  {
    title: '8. Ihre Rechte',
    content:
      'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch. Kontaktieren Sie uns dafür unter den oben genannten Kontaktdaten. Zudem besteht ein Beschwerderecht bei der österreichischen Datenschutzbehörde.'
  }
];

export default function DatenschutzPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-32">
      <h1 className="font-display text-5xl text-text">Datenschutzerklärung</h1>
      <div className="mt-8 space-y-8 text-sm text-secondary/80">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xs uppercase tracking-[0.3em] text-secondary">{section.title}</h2>
            <p className="mt-2 leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

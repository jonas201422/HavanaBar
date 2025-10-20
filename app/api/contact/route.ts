import { NextResponse } from 'next/server';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: 'Ungültige Daten.' }, { status: 400 });
  }

  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Bitte alle Pflichtfelder ausfüllen.' }, { status: 400 });
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Bitte eine gültige E-Mail-Adresse angeben.' }, { status: 400 });
  }

  if (typeof name !== 'string' || typeof message !== 'string') {
    return NextResponse.json({ error: 'Ungültige Eingabe.' }, { status: 400 });
  }

  if (name.length > 120 || message.length > 2000) {
    return NextResponse.json({ error: 'Bitte Nachricht kürzer fassen.' }, { status: 400 });
  }

  const sanitizedPhone = typeof phone === 'string' ? phone.slice(0, 60) : '';

  // TODO: Hier echten Mailversand oder CRM-Integration einfügen.
  console.info('Neue Kontaktanfrage', { name, email, sanitizedPhone, message });

  return NextResponse.json({ success: true });
}

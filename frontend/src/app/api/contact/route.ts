import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function getEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env variable: ${name}`);
  return value;
}

export async function POST(req: Request) {
  try {
    const CONTACT_FROM_EMAIL = getEnv('CONTACT_FROM_EMAIL');
    const CONTACT_TO_EMAIL = getEnv('CONTACT_TO_EMAIL');

    const { name, email, subject, message } = await req.json();

    // Ensure inputs are string and trim any extra white spaces
    const cleanBody = (body: unknown) =>
      typeof body === 'string' ? body.trim() : '';

    // Remove carriage returns for headers
    const safeHeader = (body: string) => body.replace(/[\r\n]+/g, ' ').trim();

    const cleanedName = cleanBody(name).slice(0, 80);
    const cleanedEmail = cleanBody(email).slice(0, 120);
    const cleanedMessage = cleanBody(message).slice(0, 5000);

    // Honeypot check
    if (typeof subject === 'string' && subject.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (!cleanedName || !cleanedEmail || !cleanedMessage) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject: `Portfolio contact form: ${cleanedName} sent you a message`,
      replyTo: cleanedEmail,
      text: `Name: ${cleanedName}\nEmail: ${cleanedEmail}\n\n${cleanedMessage}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}

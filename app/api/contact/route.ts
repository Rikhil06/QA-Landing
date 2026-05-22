import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, company, message } = await req.json();

  await Promise.all([
    // Notify you
    resend.emails.send({
      from: `Annoture <${process.env.NOTIFY_EMAIL!}>`,
      to: process.env.NOTIFY_EMAIL!,
      subject: `New interest from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
    }),
    // Confirm to the user
    resend.emails.send({
      from: `Annoture <${process.env.NOTIFY_EMAIL!}>`,
      to: email,
      subject: "You're on the Annoture early access list",
      text: `Hi ${name},\n\nThanks for your interest in Annoture — we'll be in touch soon.\n\nThe Annoture team`,
    }),
  ]);

  return NextResponse.json({ ok: true });
}
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { SMTP_USER, SMTP_APP_PASSWORD, CONTACT_TO_EMAIL } = process.env;

  if (!SMTP_USER || !SMTP_APP_PASSWORD || !CONTACT_TO_EMAIL) {
    return NextResponse.json(
      { error: "Contact email is not configured on the server." },
      { status: 503 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, countryCode, contactNumber, purpose, message, termsAccepted } = body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof countryCode !== "string" ||
      typeof contactNumber !== "string" ||
      typeof purpose !== "string" ||
      typeof message !== "string" ||
      termsAccepted !== true
    ) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER,
        pass: SMTP_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: { name, address: email },
      subject: `Portfolio contact: ${purpose}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Contact number: ${countryCode} ${contactNumber}`,
        `Purpose: ${purpose}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email failed:", error);
    return NextResponse.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}

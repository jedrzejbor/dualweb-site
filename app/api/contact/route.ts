import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Brak wymaganych pól." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Kontakt <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL || "delivered@resend.dev"],
      replyTo: email,
      subject: `Nowa wiadomość z dualweb od: ${name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #0f172a;">
          <h2>Nowa wiadomość z formularza kontaktowego</h2>
          <p><strong>Imię / firma:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Wiadomość:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend error", error);
    return NextResponse.json(
      { error: "Nie udało się wysłać wiadomości." },
      { status: 500 }
    );
  }
}

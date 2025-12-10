import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, type ContactPayload } from "@/lib/validators/contactSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const json = await req.json();

    // 1) Walidacja Zodem
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      const { fieldErrors } = parsed.error.flatten();

      return NextResponse.json(
        {
          success: false,
          message: "Sprawdź proszę wprowadzone dane.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, company, projectType, budget, message } =
      parsed.data as ContactPayload;

    // 2) Przygotowanie maila
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!toEmail || !fromEmail) {
      console.error("Brak CONTACT_TO_EMAIL lub CONTACT_FROM_EMAIL w env");
      return NextResponse.json(
        {
          success: false,
          message:
            "Formularz chwilowo jest niedostępny. Napisz proszę bezpośrednio na kontakt@dualweb.pl.",
        },
        { status: 500 }
      );
    }

    const subject = `Nowe zapytanie z formularza – ${name}`;

    const html = `
      <h2>Nowe zapytanie z dualweb.pl</h2>
      <p><strong>Imię i nazwisko:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      ${
        company
          ? `<p><strong>Firma:</strong> ${company}</p>`
          : "<p><strong>Firma:</strong> (nie podano)</p>"
      }
      ${
        projectType
          ? `<p><strong>Typ projektu:</strong> ${projectType}</p>`
          : ""
      }
      ${
        budget
          ? `<p><strong>Budżet orientacyjny:</strong> ${budget}</p>`
          : ""
      }
      <hr />
      <p><strong>Wiadomość:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    // 3) Wysyłka przez Resend
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          success: false,
          message:
            "Nie udało się wysłać wiadomości. Spróbuj ponownie albo napisz bezpośrednio na kontakt@dualweb.pl.",
        },
        { status: 502 }
      );
    }

    // 4) OK
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("API /contact – nieoczekiwany błąd:", err);
    return NextResponse.json(
      {
        success: false,
        message:
          "Wystąpił nieoczekiwany błąd po stronie serwera. Spróbuj ponownie za chwilę.",
      },
      { status: 500 }
    );
  }
}

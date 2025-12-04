import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Brakuje wymaganych pól." },
        { status: 400 }
      );
    }

    // TODO: tutaj podłącz wysyłkę maila / zapis do bazy / integrację z CRM
    console.log("Nowe zapytanie kontaktowe:", body);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Błąd w /api/contact:", err);
    return NextResponse.json(
      { error: "Wewnętrzny błąd serwera." },
      { status: 500 }
    );
  }
}

// "use client";

// import { useState } from "react";
// import { FadeInSection } from "./FadeInSection";

// type FormState = "idle" | "loading" | "success" | "error";

// export function ContactSection() {
//   const [status, setStatus] = useState<FormState>("idle");
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setStatus("loading");
//     setErrorMessage(null);

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     const payload = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       company: formData.get("company"),
//       projectType: formData.get("projectType"),
//       budget: formData.get("budget"),
//       message: formData.get("message"),
//     };

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) {
//         throw new Error("Błąd po stronie serwera");
//       }

//       setStatus("success");
//       form.reset();
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//       setErrorMessage(
//         "Coś poszło nie tak. Spróbuj ponownie albo napisz bezpośrednio na maila."
//       );
//     }
//   }

//   return (
//     <FadeInSection
//       id="contact"
//       className="relative overflow-hidden border-b border-slate-800 bg-slate-950"
//     >
//       {/* tło */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.12),transparent_55%)]" />

//       <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:py-24">
//         {/* LEWA KOLUMNA – tekst / USP */}
//         <div className="md:w-1/2 space-y-5">
//           <p className="kicker text-indigo-400">Kontakt</p>
//           <h2 className="heading-font text-2xl font-extrabold sm:text-3xl md:text-4xl">
//             Opowiedz nam{" "}
//             <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
//               o projekcie
//             </span>{" "}
//             – odezwiemy się z konkretną{" "}
//             <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
//               propozycją.
//             </span>
//           </h2>

//           <p className="text-sm text-slate-300 sm:text-base">
//             Napisz kilka zdań o biznesie, celu projektu i tym, co jest dla
//             Ciebie najważniejsze. Odezwiemy się z propozycją podejścia,
//             orientacyjnym zakresem prac i możliwymi kolejnymi krokami.
//           </p>

//           <ul className="mt-4 space-y-2 text-sm text-slate-300">
//             <li className="flex items-start gap-2">
//               <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
//               Bezpośredni kontakt z osobami, które będą realizować projekt –
//               bez warstwy „handlowej”.
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
//               Możemy wejść tylko w development albo przejść z Tobą cały proces:
//               od koncepcji, przez wdrożenie, po wsparcie.
//             </li>
//           </ul>

//           <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
//             <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">
//               Wolisz napisać maila?
//             </p>
//             <p className="mt-2">
//               Wyślij wiadomość na{" "}
//               <a
//                 href="mailto:hello@dualweb.pl"
//                 className="font-semibold text-cyan-300 underline-offset-2 hover:underline"
//               >
//                 hello@dualweb.pl
//               </a>{" "}
//               – możesz też podpiąć brief / dokument z opisem projektu.
//             </p>
//           </div>
//         </div>

//         {/* PRAWA KOLUMNA – FORMULARZ */}
//         <div className="md:w-1/2">
//           <div className="relative rounded-3xl border border-slate-800 bg-slate-950/90 p-5 shadow-2xl shadow-slate-950/70 backdrop-blur-md sm:p-6">
//             {/* neon underlay */}
//             <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/0 via-indigo-500/25 to-cyan-500/0 blur-2xl opacity-70" />

//             <form className="space-y-4" onSubmit={handleSubmit}>
//               {/* Imię + firma w dwóch kolumnach na większych ekranach */}
//               <div className="grid gap-3 sm:grid-cols-2">
//                 <div className="space-y-1.5">
//                   <label
//                     htmlFor="name"
//                     className="text-xs font-medium text-slate-200"
//                   >
//                     Imię i nazwisko *
//                   </label>
//                   <input
//                     id="name"
//                     name="name"
//                     required
//                     placeholder="np. Anna Kowalska"
//                     className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400/60"
//                   />
//                 </div>

//                 <div className="space-y-1.5">
//                   <label
//                     htmlFor="company"
//                     className="text-xs font-medium text-slate-200"
//                   >
//                     Firma (opcjonalnie)
//                   </label>
//                   <input
//                     id="company"
//                     name="company"
//                     placeholder="np. Studio marketingowe"
//                     className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400/60"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-1.5">
//                 <label
//                   htmlFor="email"
//                   className="text-xs font-medium text-slate-200"
//                 >
//                   E-mail kontaktowy *
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   placeholder="np. anna@firma.pl"
//                   className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400/60"
//                 />
//               </div>

//               {/* Typ projektu + budżet */}
//               <div className="grid gap-3 sm:grid-cols-2">
//                 <div className="space-y-1.5">
//                   <label
//                     htmlFor="projectType"
//                     className="text-xs font-medium text-slate-200"
//                   >
//                     Typ projektu
//                   </label>
//                   <select
//                     id="projectType"
//                     name="projectType"
//                     className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400/60"
//                     defaultValue=""
//                   >
//                     <option value="" disabled>
//                       Wybierz…
//                     </option>
//                     <option value="landing">Strona / landing page</option>
//                     <option value="ecommerce">Sklep e-commerce</option>
//                     <option value="saas">Aplikacja SaaS / system</option>
//                     <option value="consulting">Konsultacje / audyt</option>
//                     <option value="other">Inny projekt</option>
//                   </select>
//                 </div>

//                 <div className="space-y-1.5">
//                   <label
//                     htmlFor="budget"
//                     className="text-xs font-medium text-slate-200"
//                   >
//                     Budżet orientacyjny
//                   </label>
//                   <select
//                     id="budget"
//                     name="budget"
//                     className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400/60"
//                     defaultValue=""
//                   >
//                     <option value="" disabled>
//                       Wybierz…
//                     </option>
//                     <option value="below-5k">do 5 000 zł</option>
//                     <option value="5-15k">5 000 – 15 000 zł</option>
//                     <option value="15-30k">15 000 – 30 000 zł</option>
//                     <option value="30k-plus">powyżej 30 000 zł</option>
//                     <option value="not-sure">jeszcze nie wiem</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="space-y-1.5">
//                 <label
//                   htmlFor="message"
//                   className="text-xs font-medium text-slate-200"
//                 >
//                   Opowiedz o projekcie *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={5}
//                   placeholder="Napisz kilka zdań o projekcie, celu, terminie i tym, co jest dla Ciebie najważniejsze."
//                   className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400/60"
//                 />
//               </div>

//               {/* STATUS + SUBMIT */}
//               <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//                 <button
//                   type="submit"
//                   disabled={status === "loading"}
//                   className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-50 shadow-lg shadow-indigo-500/40 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
//                 >
//                   {status === "loading" ? "Wysyłanie…" : "Wyślij zapytanie"}
//                 </button>

//                 <div className="min-h-[1.25rem] text-xs text-slate-300 sm:text-[0.7rem]">
//                   {status === "success" && (
//                     <p className="text-emerald-300">
//                       Dzięki! Odezwiemy się z odpowiedzią tak szybko, jak to
//                       możliwe.
//                     </p>
//                   )}
//                   {status === "error" && (
//                     <p className="text-rose-300">{errorMessage}</p>
//                   )}
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </FadeInSection>
//   );
// }

'use client';

import { useState } from 'react';
import { FadeInSection } from './FadeInSection';
import { contactSchema, type ContactPayload } from '@/lib/validators/contactSchema';

type FormState = 'idle' | 'loading' | 'success' | 'error';
type FieldErrors = Partial<Record<keyof ContactPayload, string[]>>;

export function ContactSection() {
  const [status, setStatus] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 1) Budujemy payload (same stringi)
    const payload: ContactPayload = {
      name: (formData.get('name') ?? '').toString(),
      email: (formData.get('email') ?? '').toString(),
      company: (formData.get('company') ?? '').toString(),
      projectType: (formData.get('projectType') ?? '').toString(),
      budget: (formData.get('budget') ?? '').toString(),
      message: (formData.get('message') ?? '').toString(),
    };

    // 2) Walidacja Zodem po stronie klienta
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      const { fieldErrors } = parsed.error.flatten();
      setFieldErrors(fieldErrors);
      setStatus('error');
      setErrorMessage('Sprawdź proszę zaznaczone pola i spróbuj ponownie.');
      return;
    }

    try {
      // 3) Wysyłka na API
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        setStatus('error');
        if (data?.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        setErrorMessage(
          data?.message ?? 'Coś poszło nie tak. Spróbuj ponownie albo napisz bezpośrednio na maila.'
        );
        return;
      }

      // 4) Success
      setStatus('success');
      setErrorMessage(null);
      setFieldErrors({});
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Coś poszło nie tak. Spróbuj ponownie albo napisz bezpośrednio na maila.');
    }
  }

  const renderError = (field: keyof ContactPayload) => {
    const msgs = fieldErrors[field];
    if (!msgs || msgs.length === 0) return null;
    return <p className="text-[11px] text-rose-300">{msgs[0]}</p>;
  };

  return (
    <FadeInSection
      id="contact"
      className="relative overflow-hidden border-b border-slate-800 bg-slate-950"
    >
      {/* tło */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:py-24">
        {/* LEWA KOLUMNA – tekst / USP */}
        <div className="md:w-1/2 space-y-5">
          <p className="kicker text-indigo-400">Kontakt</p>
          <h2 className="heading-font text-2xl font-extrabold sm:text-3xl md:text-4xl">
            Opowiedz nam{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
              o projekcie
            </span>{' '}
            – odezwiemy się z konkretną{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
              propozycją.
            </span>
          </h2>

          <p className="text-sm text-slate-300 sm:text-base">
            Napisz kilka zdań o biznesie, celu projektu i tym, co jest dla Ciebie najważniejsze.
            Odezwiemy się z propozycją podejścia, orientacyjnym zakresem prac i możliwymi kolejnymi
            krokami.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
              Bezpośredni kontakt z osobami, które będą realizować projekt – bez warstwy
              „handlowej”.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
              Możemy wejść tylko w development albo przejść z Tobą cały proces: od koncepcji, przez
              wdrożenie, po wsparcie.
            </li>
          </ul>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">
              Wolisz napisać maila?
            </p>
            <p className="mt-2">
              Wyślij wiadomość na{' '}
              <a
                href="mailto:kontakt@dualweb.pl"
                className="font-semibold text-cyan-300 underline-offset-2 hover:underline"
              >
                kontakt@dualweb.pl
              </a>{' '}
              – możesz też podpiąć brief / dokument z opisem projektu.
            </p>
          </div>
        </div>

        {/* PRAWA KOLUMNA – FORMULARZ */}
        <div className="md:w-1/2">
          <div className="relative rounded-3xl border border-slate-800 bg-slate-950/90 p-5 shadow-2xl shadow-slate-950/70 backdrop-blur-md sm:p-6">
            {/* neon underlay */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/0 via-indigo-500/25 to-cyan-500/0 blur-2xl opacity-70" />

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Imię + firma */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-slate-200">
                    Imię i nazwisko *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="np. Anna Kowalska"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400/60"
                  />
                  {renderError('name')}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-xs font-medium text-slate-200">
                    Firma (opcjonalnie)
                  </label>
                  <input
                    id="company"
                    name="company"
                    placeholder="np. Studio marketingowe"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400/60"
                  />
                  {renderError('company')}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium text-slate-200">
                  E-mail kontaktowy *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="np. anna@firma.pl"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400/60"
                />
                {renderError('email')}
              </div>

              {/* Typ projektu + budżet */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="projectType" className="text-xs font-medium text-slate-200">
                    Typ projektu
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400/60"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Wybierz…
                    </option>
                    <option value="landing">Strona / landing page</option>
                    <option value="ecommerce">Sklep e-commerce</option>
                    <option value="saas">Aplikacja SaaS / system</option>
                    <option value="consulting">Konsultacje / audyt</option>
                    <option value="other">Inny projekt</option>
                  </select>
                  {renderError('projectType')}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="budget" className="text-xs font-medium text-slate-200">
                    Budżet orientacyjny
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400/60"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Wybierz…
                    </option>
                    <option value="below-5k">do 5 000 zł</option>
                    <option value="5-15k">5 000 – 15 000 zł</option>
                    <option value="15-30k">15 000 – 30 000 zł</option>
                    <option value="30k-plus">powyżej 30 000 zł</option>
                    <option value="not-sure">jeszcze nie wiem</option>
                  </select>
                  {renderError('budget')}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-slate-200">
                  Opowiedz o projekcie *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Napisz kilka zdań o projekcie, celu, terminie i tym, co jest dla Ciebie najważniejsze."
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400/60"
                />
                {renderError('message')}
              </div>

              {/* STATUS + SUBMIT */}
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-50 shadow-lg shadow-indigo-500/40 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'loading' ? 'Wysyłanie…' : 'Wyślij zapytanie'}
                </button>

                <div className="min-h-[1.25rem] text-xs text-slate-300 sm:text-[0.7rem]">
                  {status === 'success' && (
                    <p className="text-emerald-300">
                      Dzięki! Odezwiemy się z odpowiedzią tak szybko, jak to możliwe.
                    </p>
                  )}
                  {status === 'error' && errorMessage && (
                    <p className="text-rose-300">{errorMessage}</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

"use client";

import { FadeInSection } from "./FadeInSection";

export function ProcessSection() {
  return (
    <FadeInSection
      id="process"
      className="relative overflow-hidden border-b border-slate-800 bg-slate-950"
    >
      {/* TŁO */}
      <div className="pointer-events-none absolute inset-0 z-2 opacity-[0.06] bg-[linear-gradient(to_right,_#fff_1px,transparent_1px),linear-gradient(to_bottom,_#fff_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-28">
        {/* Nagłówek Sekcji */}
        <div className="space-y-3 text-left">
          <p className="kicker text-indigo-400">Jak pracujemy</p>
          <h2 className="heading-font text-2xl font-extrabold sm:text-3xl md:text-4xl">
            Przejrzysty proces od{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
              pomysłu
            </span>{" "}
            do działającego{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
              produktu.
            </span>
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-16 flex flex-col">
          {/* pionowa linia */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-600/50 via-cyan-400/40 to-transparent" />

          <TimelineStep
            number={1}
            subtitle="Zapoznanie z biznesem i potrzebami"
            title="Rozmowa startowa"
            description="Poznajemy Twój biznes, cele i potrzeby. Bez niepotrzebnego technicznego żargonu — skupiamy się na tym, co chcesz osiągnąć, co działa teraz i gdzie widzisz największy potencjał."
          />

          <TimelineStep
            number={2}
            subtitle="Techniczno-biznesowe podejście"
            title="Specyfikacja i plan działania"
            description="Tworzymy jasny plan: zakres, funkcje, architekturę, estymację oraz możliwe ścieżki rozwoju. Otrzymujesz konkretną propozycję, bez ukrytych kosztów i niejasności."
          />

          <TimelineStep
            number={3}
            subtitle="Budowa systemu / aplikacji"
            title="Development i budowa systemu"
            description="Pracujemy iteracyjnie i regularnie pokazujemy postępy. Dbamy o jakość kodu, przejrzystość, bezpieczeństwo i dopasowanie aplikacji do procesów Twojej firmy."
          />

          <TimelineStep
            number={4}
            subtitle="Nadzór, launch & support"
            title="Wdrożenie i wsparcie"
            description="Wdrażamy projekt, konfigurujemy środowisko, przeprowadzamy testy i dbamy o pełną gotowość produktu. Po wdrożeniu zostajemy z Tobą — zapewniamy wsparcie, rozwój i opiekę techniczno-biznesową."
          />
        </div>

        {/* Mini akcenty / USP
        <div className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
              Kontaktujesz się bezpośrednio z osobą, która wykonuje projekt —
              bez handlowców i pośredników.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
              Kompleksowy proces od pomysłu, przez development, po wsparcie
              techniczne, biznesowe i marketingowe.
            </li>
          </ul>
        </div> */}
        {/* AKCENT POD PROCESEM */}
        <div className="mt-2 grid gap-4 text-xs text-slate-300 sm:grid-cols-2 sm:text-sm">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
            <p className="heading-font text-sm font-semibold text-slate-100">
              Bezpośredni kontakt z zespołem
            </p>
            <p className="mt-2">
              Kontaktujesz się bezpośrednio z osobą, która będzie robiła Twój
              projekt, nie z handlowcem. Oszczędzamy Twój czas i szybciej
              dochodzimy do sedna.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
            <p className="heading-font text-sm font-semibold text-slate-100">
              Kompletny proces, jeśli tego potrzebujesz
            </p>
            <p className="mt-2">
              Możemy wejść tylko w warstwę techniczną albo przejść z Tobą cały
              proces: od pomysłu, przez development, po wsparcie techniczne,
              biznesowe i marketingowe.
            </p>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

/* ---- Komponent pojedynczego kroku ---- */

// function TimelineStep({
//   number,
//   title,
//   description,
// }: {
//   number: number;
//   title: string;
//   description: string;
// }) {
//   return (
//     <div className="relative mb-14 flex gap-8">
//       {/* Numer w neonowym krążku */}
//       <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
//         <div className="absolute inset-0 z-1 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 blur-lg group-hover:blur-xl" />
//         <p className="heading-font text-lg font-extrabold text-slate-50">
//           {number}
//         </p>
//       </div>

//       {/* Tekst */}
//       <div className="space-y-2">
//         <h3 className="heading-font text-lg font-bold text-slate-50">
//           {title}
//         </h3>
//         <p className="text-sm text-slate-300">{description}</p>
//       </div>
//     </div>
//   );
// }




function TimelineStep({
  number,
  subtitle,
  title,
  description,
}: {
  number: number;
  subtitle: string;
  title: string;
  description: string;
}) {
  const [firstWord, ...restWords] = title.split(" ");
  const rest = restWords.join(" ");

  return (
    <div className="group relative mb-10 flex items-center gap-6 sm:gap-8">
      {/* Numer w neonowym krążku */}
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-950">
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-400/30 blur-md opacity-70 group-hover:opacity-100" />
        <p className="heading-font text-lg font-extrabold text-slate-50">
          {number}
        </p>
      </div>

      {/* Card z tytułem + opisem */}
      <div className="relative flex-1">
        {/* neon pod kartą */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-cyan-500/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 sm:px-5 sm:py-4 shadow-lg shadow-slate-950/40">
          <p className="text-[11px] mb-1 font-semibold uppercase tracking-[0.18em] text-indigo-300">
            {subtitle}
          </p>
          <h3 className="heading-font text-sm font-semibold text-slate-50 sm:text-base">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">
              {firstWord}
            </span>
            {rest && <> {rest}</>}
          </h3>
          <p className="mt-2 text-xs text-slate-300 sm:text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}



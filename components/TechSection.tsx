"use client";

import { useRef } from "react";
import { FadeInSection } from "./FadeInSection";

type TechItem = {
  name: string;
  category: string;
  description: string;
  tags: string[];
};

const technologies: TechItem[] = [
  {
    name: "React",
    category: "Frontend",
    description: "Interfejsy, dashboardy i aplikacje SPA.",
    tags: ["SPA", "UI", "Componenty"],
  },
  {
    name: "Next.js",
    category: "Frontend / Fullstack",
    description: "Szybkie strony, SEO, SSR i API routes.",
    tags: ["SSR", "ISR", "App Router"],
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "API, integracje i backend pod SaaS.",
    tags: ["REST", "Auth", "Integracje"],
  },
  {
    name: "Nest.js",
    category: "Backend",
    description: "Modułowa architektura dla większych systemów.",
    tags: ["DDD", "Moduły", "Testy"],
  },
  {
    name: "PostgreSQL",
    category: "Baza danych",
    description: "Stabilna baza pod systemy biznesowe.",
    tags: ["Relacje", "Migrations", "Performance"],
  },
  {
    name: "HTML / CSS / JS",
    category: "Frontend core",
    description: "Solidne fundamenty pod każdy projekt webowy.",
    tags: ["Semantyka", "Responsywność", "Performance"],
  },
  {
    name: "Python",
    category: "Backend / Automatyzacja",
    description: "Integracje, API, automatyzacje i narzędzia.",
    tags: ["FastAPI / Django", "Skrypty", "Integracje"],
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Szybkie prototypowanie i spójny design.",
    tags: ["Design system", "Utility-first", "Responsywność"],
  },
];

export function TechSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const amount = container.clientWidth * 0.8; // ~80% szerokości sekcji
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <FadeInSection
      id="tech"
      className="relative overflow-hidden border-b border-slate-800 bg-slate-950"
    >
      {/* delikatne tło */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.1),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        {/* nagłówek */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl space-y-3">
            <p className="kicker text-indigo-400">Technologie i stack</p>
            <h2 className="heading-font text-2xl font-extrabold sm:text-3xl md:text-4xl">
              Stack, na którym{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
                realnie pracujemy
              </span>{" "}
              w projektach.
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Korzystamy z technologii, które dobrze znamy z produkcji. Od
              frontendowych frameworków, przez backend i bazy danych, po
              automatyzacje w Pythonie – dobieramy stack pod Twój biznes, nie
              odwrotnie.
            </p>
          </div>

          {/* strzałki do karuzeli */}
          <div className="mt-2 flex gap-2 self-end md:mt-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-slate-300 shadow-sm transition hover:border-slate-500 hover:bg-slate-900"
              aria-label="Przewiń w lewo"
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-slate-300 shadow-sm transition hover:border-slate-500 hover:bg-slate-900"
              aria-label="Przewiń w prawo"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        {/* karuzela */}
        <div
          ref={scrollRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-700/70"
        >
          {technologies.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}

/* ---- pojedyncza karta technologii ---- */

function TechCard({ tech }: { tech: TechItem }) {
  const { name, category, description, tags } = tech;

  const [firstWord, ...restWords] = name.split(" ");
  const rest = restWords.join(" ");

  return (
    <div className="group relative flex min-w-[230px] max-w-xs snap-start flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-slate-950/60 transition-transform duration-300 hover:-translate-y-1">
      {/* neon glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-indigo-500/20 to-cyan-500/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-300">
        {category}
      </p>

      <h3 className="mt-2 heading-font text-sm font-semibold text-slate-50">
        <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">
          {firstWord}
        </span>
        {rest && <> {rest}</>}
      </h3>

      <p className="mt-2 text-xs text-slate-300">{description}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-700/70 bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---- ikonki strzałek ---- */

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

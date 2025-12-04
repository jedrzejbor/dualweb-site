// "use client";

// import { useRef } from "react";
// import { FadeInSection } from "./FadeInSection";

// type TechItem = {
//   name: string;
//   category: string;
//   description: string;
//   tags: string[];
// };

// const technologies: TechItem[] = [
//   {
//     name: "React",
//     category: "Frontend",
//     description: "Interfejsy, dashboardy i aplikacje SPA.",
//     tags: ["SPA", "UI", "Componenty"],
//   },
//   {
//     name: "Next.js",
//     category: "Frontend / Fullstack",
//     description: "Szybkie strony, SEO, SSR i API routes.",
//     tags: ["SSR", "ISR", "App Router"],
//   },
//   {
//     name: "Node.js",
//     category: "Backend",
//     description: "API, integracje i backend pod SaaS.",
//     tags: ["REST", "Auth", "Integracje"],
//   },
//   {
//     name: "Nest.js",
//     category: "Backend",
//     description: "Modułowa architektura dla większych systemów.",
//     tags: ["DDD", "Moduły", "Testy"],
//   },
//   {
//     name: "PostgreSQL",
//     category: "Baza danych",
//     description: "Stabilna baza pod systemy biznesowe.",
//     tags: ["Relacje", "Migrations", "Performance"],
//   },
//   {
//     name: "HTML / CSS / JS",
//     category: "Frontend core",
//     description: "Solidne fundamenty pod każdy projekt webowy.",
//     tags: ["Semantyka", "Responsywność", "Performance"],
//   },
//   {
//     name: "Python",
//     category: "Backend / Automatyzacja",
//     description: "Integracje, API, automatyzacje i narzędzia.",
//     tags: ["FastAPI / Django", "Skrypty", "Integracje"],
//   },
//   {
//     name: "Tailwind CSS",
//     category: "Styling",
//     description: "Szybkie prototypowanie i spójny design.",
//     tags: ["Design system", "Utility-first", "Responsywność"],
//   },
// ];

// export function TechSection() {
//   const scrollRef = useRef<HTMLDivElement | null>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (!scrollRef.current) return;
//     const container = scrollRef.current;
//     const amount = container.clientWidth * 0.8; // ~80% szerokości sekcji
//     container.scrollBy({
//       left: direction === "left" ? -amount : amount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <FadeInSection
//       id="tech"
//       className="relative overflow-hidden border-b border-slate-800 bg-slate-950"
//     >
//       {/* delikatne tło */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.1),transparent_55%)]" />

//       <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
//         {/* nagłówek */}
//         <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
//           <div className="max-w-xl space-y-3">
//             <p className="kicker text-indigo-400">Technologie i stack</p>
//             <h2 className="heading-font text-2xl font-extrabold sm:text-3xl md:text-4xl">
//               Stack, na którym{" "}
//               <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
//                 realnie pracujemy
//               </span>{" "}
//               w projektach.
//             </h2>
//             <p className="text-sm text-slate-300 sm:text-base">
//               Korzystamy z technologii, które dobrze znamy z produkcji. Od
//               frontendowych frameworków, przez backend i bazy danych, po
//               automatyzacje w Pythonie – dobieramy stack pod Twój biznes, nie
//               odwrotnie.
//             </p>
//           </div>

//           {/* strzałki do karuzeli */}
//           <div className="mt-2 flex gap-2 self-end md:mt-0">
//             <button
//               type="button"
//               onClick={() => scroll("left")}
//               className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-slate-300 shadow-sm transition hover:border-slate-500 hover:bg-slate-900"
//               aria-label="Przewiń w lewo"
//             >
//               <ArrowLeftIcon />
//             </button>
//             <button
//               type="button"
//               onClick={() => scroll("right")}
//               className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-slate-300 shadow-sm transition hover:border-slate-500 hover:bg-slate-900"
//               aria-label="Przewiń w prawo"
//             >
//               <ArrowRightIcon />
//             </button>
//           </div>
//         </div>

//         {/* karuzela */}
//         <div
//           ref={scrollRef}
//           className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-700/70"
//         >
//           {technologies.map((tech) => (
//             <TechCard key={tech.name} tech={tech} />
//           ))}
//         </div>
//       </div>
//     </FadeInSection>
//   );
// }

// /* ---- pojedyncza karta technologii ---- */

// function TechCard({ tech }: { tech: TechItem }) {
//   const { name, category, description, tags } = tech;

//   const [firstWord, ...restWords] = name.split(" ");
//   const rest = restWords.join(" ");

//   return (
//     <div className="group relative flex min-w-[230px] max-w-xs snap-start flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-slate-950/60 transition-transform duration-300 hover:-translate-y-1">
//       {/* neon glow */}
//       <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-indigo-500/20 to-cyan-500/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

//       <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-300">
//         {category}
//       </p>

//       <h3 className="mt-2 heading-font text-sm font-semibold text-slate-50">
//         <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">
//           {firstWord}
//         </span>
//         {rest && <> {rest}</>}
//       </h3>

//       <p className="mt-2 text-xs text-slate-300">{description}</p>

//       <div className="mt-3 flex flex-wrap gap-1.5">
//         {tags.map((tag) => (
//           <span
//             key={tag}
//             className="rounded-full border border-slate-700/70 bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ---- ikonki strzałek ---- */

// function ArrowLeftIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       className="h-4 w-4"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15 6l-6 6 6 6" />
//     </svg>
//   );
// }

// function ArrowRightIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       className="h-4 w-4"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M9 6l6 6-6 6" />
//     </svg>
//   );
// }


"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FadeInSection } from "./FadeInSection";

type TechItem = {
  name: string;
  role: string;
  usage: string; // np. "90% projektów"
  description: string;
  progress: number; // 0–100
  tags: string[];
  accentClass: string; // kolor tytułu
  short: string; // skrót na ikonie
};

const techItems: TechItem[] = [
  {
    name: "React",
    role: "Frontend core",
    usage: "W większości projektów",
    description:
      "Biblioteka, na której budujemy interfejsy – od prostych landingów po złożone aplikacje webowe.",
    progress: 95,
    tags: ["SPA", "UI", "Hooks"],
    accentClass: "text-cyan-400",
    short: "R",
  },
  {
    name: "Next.js",
    role: "Frontend + SSR",
    usage: "Produkcyjne projekty",
    description:
      "Framework do szybkich, SEO-przyjaznych aplikacji. SSR, SSG, API routes i świetna integracja z Vercel.",
    progress: 92,
    tags: ["SSR", "SSG", "RSC"],
    accentClass: "text-sky-400",
    short: "NX",
  },
  {
    name: "Node.js",
    role: "Backend",
    usage: "API i serwisy",
    description:
      "Budujemy API, integracje i usługi backendowe w Node – od prostych integracji po mikroserwisy.",
    progress: 90,
    tags: ["REST", "Integracje", "Worker"],
    accentClass: "text-emerald-400",
    short: "ND",
  },
  {
    name: "NestJS",
    role: "Backend framework",
    usage: "Większe systemy",
    description:
      "Struktura, modularność i dobre praktyki na backendzie. Idealny do większych systemów i SaaS-ów.",
    progress: 88,
    tags: ["Moduły", "DI", "Clean arch"],
    accentClass: "text-indigo-400",
    short: "NE",
  },
  {
    name: "PostgreSQL",
    role: "Baza danych",
    usage: "Główna baza",
    description:
      "Relacyjna baza danych, na której opieramy większość systemów – stabilność, bezpieczeństwo i skalowalność.",
    progress: 90,
    tags: ["Relacje", "Migrations", "Performance"],
    accentClass: "text-teal-300",
    short: "PG",
  },
  {
    name: "Python",
    role: "Backend / automatyzacje",
    usage: "Data, integracje",
    description:
      "Skrypty, integracje, automatyzacje i backend w Pythonie – szczególnie tam, gdzie wchodzi data / AI.",
    progress: 85,
    tags: ["FastAPI", "Automatyzacje", "Data"],
    accentClass: "text-yellow-300",
    short: "PY",
  },
];

function TechIcon({ short }: { short: string }) {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-950/80 ring-2 ring-cyan-400/60 shadow-[0_0_40px_rgba(56,189,248,0.45)]">
      <span className="heading-font text-xl font-extrabold text-slate-50">
        {short}
      </span>
    </div>
  );
}

export function TechSection() {
  const [currentIndex, setCurrentIndex] = useState(2); // start mniej więcej w środku
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const recenter = useCallback(
    (index: number) => {
      const container = containerRef.current;
      const track = trackRef.current;
      const firstCard = cardRefs.current[0];

      if (!container || !track || !firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const styles = window.getComputedStyle(firstCard);
      const marginLeft = parseFloat(styles.marginLeft || "0");
      const marginRight = parseFloat(styles.marginRight || "0");
      const cardTotal = cardWidth + marginLeft + marginRight;

      const amountToMove = index * cardTotal;
      const containerCenter = container.offsetWidth / 2;
      const cardCenter = cardWidth / 2;
      const targetTranslateX = containerCenter - cardCenter - amountToMove;

      track.style.transform = `translateX(${targetTranslateX}px)`;
    },
    []
  );

  // inicjalizacja + resize
  useEffect(() => {
    recenter(currentIndex);

    const handleResize = () => {
      recenter(currentIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, recenter]);

  const goTo = (index: number) => {
    if (index < 0 || index >= techItems.length) return;
    setCurrentIndex(index);
    recenter(index);
  };

  const goNext = () => goTo(currentIndex + 1);
  const goPrev = () => goTo(currentIndex - 1);

  // drag / swipe
  const isDragging = useRef(false);
  const startX = useRef(0);
  const prevTranslate = useRef(0);
  const currentTranslate = useRef(0);

  const getCurrentTransform = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const matrix = window.getComputedStyle(track).transform;
    if (matrix === "none") return 0;
    const parsed = matrix.split(",");
    const tx = parsed[4] ? parseFloat(parsed[4]) : 0;
    return tx;
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.clientX;
    prevTranslate.current = getCurrentTransform();
    currentTranslate.current = prevTranslate.current;

    const track = trackRef.current;
    if (track) {
      track.style.transition = "none";
      track.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const delta = e.clientX - startX.current;
    currentTranslate.current = prevTranslate.current + delta;
    const track = trackRef.current;
    if (track) {
      track.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const movedBy = currentTranslate.current - prevTranslate.current;
    const firstCard = cardRefs.current[0];
    const track = trackRef.current;

    if (track) {
      track.releasePointerCapture(e.pointerId);
      track.style.transition =
        "transform 0.75s cubic-bezier(0.21, 0.61, 0.35, 1)";
    }

    if (!firstCard) {
      recenter(currentIndex);
      return;
    }

    const cardWidth = firstCard.offsetWidth;
    const threshold = cardWidth / 4;

    if (movedBy < -threshold && currentIndex < techItems.length - 1) {
      goNext();
    } else if (movedBy > threshold && currentIndex > 0) {
      goPrev();
    } else {
      recenter(currentIndex);
    }
  };

  return (
    <FadeInSection
      id="tech"
      className="relative overflow-hidden border-b border-slate-800 bg-slate-950"
    >
      {/* tło sekcji – lekka siatka jak w innych */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,_#fff_1px,transparent_1px),linear-gradient(to_bottom,_#fff_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* nagłówek */}
        <div className="space-y-3 text-left">
          <p className="kicker text-indigo-400">Stack technologiczny</p>
          <h2 className="heading-font text-2xl font-extrabold sm:text-3xl md:text-4xl">
            Technologia, na której{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
              budujemy
            </span>{" "}
            Twoje{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
              projekty.
            </span>
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            Korzystamy z nowoczesnego, sprawdzonego stacku – takiego, który
            pozwala szybko wystartować z MVP, a później bez bólu skalować
            produkt i rozwijać go o kolejne funkcje.
          </p>
        </div>

        {/* KARUZELA */}
        <div
          className="tech-carousel-container"
          ref={containerRef}
        >
          <div
            className="tech-carousel-track"
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            {techItems.map((tech, index) => {
              const positionClass =
                index === currentIndex
                  ? "is-active"
                  : index === currentIndex - 1
                  ? "is-prev"
                  : index === currentIndex + 1
                  ? "is-next"
                  : index < currentIndex - 1
                  ? "is-far-prev"
                  : "is-far-next";

              return (
                <div
                  key={tech.name}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`tech-carousel-card ${positionClass}`}
                >
                  {/* górny „image” z ikoną technologii */}
                  <div className="card-image-container">
                    <div className="card-image-container-inner">
                      <TechIcon short={tech.short} />
                    </div>
                  </div>

                  {/* content */}
                  <div className="card-content">
                    <h3
                      className={`card-title ${tech.accentClass}`}
                      data-text={tech.name}
                    >
                      {tech.name}
                    </h3>
                    <p className="card-description">{tech.description}</p>

                    <div className="card-progress">
                      <div
                        className="progress-value"
                        style={{ width: `${tech.progress}%` }}
                      />
                    </div>
                    <div className="card-stats">
                      <span>{tech.role}</span>
                      <span>{tech.usage}</span>
                    </div>
                  </div>

                  {/* tagi – pokazują się na hover aktywnej karty */}
                  <div className="tech-details">
                    {tech.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tech-tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* strzałki */}
          <button
            type="button"
            className="tech-carousel-button prev"
            onClick={goPrev}
            aria-label="Poprzednia technologia"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            type="button"
            className="tech-carousel-button next"
            onClick={goNext}
            aria-label="Następna technologia"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* indicators */}
          <div className="tech-carousel-indicators">
            {techItems.map((_, index) => (
              <div
                key={index}
                className={`tech-indicator ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

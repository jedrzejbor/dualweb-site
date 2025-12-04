// "use client";

// import { FadeInSection } from "./FadeInSection";

// type Project = {
//   name: string;
//   category: string;
//   type: string;
//   status: "online" | "w trakcie" | "wewnętrzny";
//   description: string;
//   scope: string[];
//   stack: string[];
// };

// const projects: Project[] = [
//   {
//     name: "Panel SaaS do obsługi zleceń",
//     category: "SaaS / B2B",
//     type: "Aplikacja webowa",
//     status: "online",
//     description:
//       "System do obsługi zapytań i zleceń dla firmy usługowej – od rejestracji klienta, przez workflow zadań, po raporty i eksporty.",
//     scope: [
//       "Projekt architektury, UX/UI i development end-to-end",
//       "Integracje z CRM i systemem fakturowania",
//     ],
//     stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
//   },
//   {
//     name: "Sklep e-commerce z produktami cyfrowymi",
//     category: "E-commerce",
//     type: "Sklep internetowy",
//     status: "online",
//     description:
//       "Sklep sprzedający produkty cyfrowe z automatyczną dostawą plików, systemem rabatów i prostym panelem zarządzania treścią.",
//     scope: [
//       "Projekt i wdrożenie sklepu + płatności online",
//       "Optymalizacja pod SEO i kampanie performance",
//     ],
//     stack: ["Next.js", "API payments", "PostgreSQL"],
//   },
//   {
//     name: "Wewnętrzny dashboard analityczny",
//     category: "System dedykowany",
//     type: "Panel administracyjny",
//     status: "wewnętrzny",
//     description:
//       "Aplikacja do zbierania danych z wielu źródeł (API, pliki, integracje) i prezentowania ich w czytelnych dashboardach.",
//     scope: [
//       "Agregacja danych i automatyzacje w Pythonie",
//       "Dashboardy, filtry i eksporty danych",
//     ],
//     stack: ["React", "Python", "Node.js", "PostgreSQL"],
//   },
// ];

// export function ProjectsSection() {
//   return (
//     <FadeInSection
//       id="projects"
//       className="relative overflow-hidden border-b border-slate-800 bg-slate-950"
//     >
//       {/* tło – siatka + delikatny glow */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,_#1e293b_1px,transparent_1px),linear-gradient(to_bottom,_#1e293b_1px,transparent_1px)] bg-[size:36px_36px]" />
//       <div className="pointer-events-none absolute inset-x-0 top-20 h-64 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_60%)]" />

//       <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24">
//         {/* nagłówek sekcji */}
//         <div className="space-y-3 text-left max-w-3xl">
//           <p className="kicker text-indigo-400">Projekty i realizacje</p>
//           <h2 className="heading-font text-2xl font-extrabold sm:text-3xl md:text-4xl">
//             Wybrane{" "}
//             <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
//               projekty
//             </span>{" "}
//             i rozwiązania, które{" "}
//             <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
//               dowieźliśmy.
//             </span>
//           </h2>
//           <p className="text-sm text-slate-300 sm:text-base">
//             Część naszych wdrożeń jest objęta NDA, dlatego poniżej pokazujemy
//             wybrane przykłady i kierunki projektów. W rozmowie możemy przejść
//             przez bardziej szczegółowe case study dopasowane do Twojej branży.
//           </p>
//         </div>

//         {/* lista projektów */}
//         <div className="mt-10 space-y-6 md:space-y-7">
//           {projects.map((project, index) => (
//             <ProjectCard key={project.name} project={project} index={index} />
//           ))}
//         </div>
//       </div>
//     </FadeInSection>
//   );
// }

// function ProjectCard({ project, index }: { project: Project; index: number }) {
//   const { name, category, type, status, description, scope, stack } = project;

//   // highlight pierwszego słowa tytułu
//   const [firstWord, ...restWords] = name.split(" ");
//   const rest = restWords.join(" ");

//   const statusLabel =
//     status === "online"
//       ? "Online"
//       : status === "w trakcie"
//       ? "W trakcie realizacji"
//       : "Projekt wewnętrzny";

//   const statusColor =
//     status === "online"
//       ? "bg-emerald-500/15 text-emerald-300 border-emerald-400/40"
//       : status === "w trakcie"
//       ? "bg-amber-500/15 text-amber-300 border-amber-400/40"
//       : "bg-sky-500/15 text-sky-300 border-sky-400/40";

//   return (
//     <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.9)] transition-transform duration-300 hover:-translate-y-1 md:px-6 md:py-5">
//       {/* neon glow */}
//       <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-cyan-500/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

//       <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
//         {/* lewa część – opis */}
//         <div className="space-y-2 md:max-w-2xl">
//           <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-slate-400">
//             <span>{category}</span>
//             <span className="h-[1px] w-6 bg-slate-600" />
//             <span className="text-slate-500">{type}</span>
//           </div>

//           <h3 className="heading-font text-lg font-semibold text-slate-50 sm:text-xl">
//             <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">
//               {firstWord}
//             </span>
//             {rest && <> {rest}</>}
//           </h3>

//           <p className="text-xs text-slate-300 sm:text-sm">{description}</p>

//           <ul className="mt-2 space-y-1.5 text-xs text-slate-300 sm:text-sm">
//             {scope.map((item) => (
//               <li key={item} className="flex gap-2">
//                 <span className="mt-[6px] inline-block h-1 w-3 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* prawa część – meta / stack */}
//         <div className="flex flex-col items-start gap-3 text-xs text-slate-300 sm:text-sm md:items-end md:text-right">
//           <div
//             className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusColor}`}
//           >
//             {statusLabel}
//           </div>
//           <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2">
//             <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
//               Stack
//             </p>
//             <p className="mt-1 text-xs text-slate-200">
//               {stack.join(" • ")}
//             </p>
//           </div>
//           <p className="text-[11px] text-slate-500">
//             Case #{String(index + 1).padStart(2, "0")}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { FadeInSection } from "./FadeInSection";
import { AnimatePresence, motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  type: "SaaS" | "E-commerce" | "Strona WWW" | "System wewnętrzny";
  status: "Online" | "W realizacji" | "Koncepcja";
  shortDescription: string;
  description: string;
  responsibilities: string[]; // zakres współpracy
  techStack: string[];
  results?: string[]; // opcjonalnie wyniki / efekty
};

const projects: Project[] = [
  {
    id: "saas-fitness",
    title: "Platforma SaaS dla studia fitness",
    subtitle: "Rezerwacje, płatności i panel klienta w jednym miejscu",
    type: "SaaS",
    status: "W realizacji",
    shortDescription:
      "Aplikacja SaaS do zarządzania zapisami, karnetami i grafikiem zajęć dla małych i średnich studiów fitness.",
    description:
      "Klient potrzebował narzędzia, które odciąży obsługę recepcji i pozwoli klientom samodzielnie zarządzać swoimi karnetami. Zaprojektowaliśmy aplikację webową z panelem klienta, panelem właściciela oraz prostym systemem raportów.",
    responsibilities: [
      "Analiza potrzeb biznesowych i pomoc w ułożeniu MVP",
      "Projekt architektury aplikacji i modelu danych",
      "Implementacja panelu klienta i panelu administracyjnego",
      "Integracja z systemem płatności online",
    ],
    techStack: ["React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
    results: [
      "Automatyzacja zapisów na zajęcia",
      "Mniej ręcznej obsługi po stronie studia",
    ],
  },
  {
    id: "ecommerce-fashion",
    title: "Sklep e-commerce z odzieżą streetwear",
    subtitle: "Skupienie na konwersji i szybkości działania",
    type: "E-commerce",
    status: "Online",
    shortDescription:
      "Nowoczesny sklep z produktami premium, zaprojektowany pod kampanie performance i prostą ścieżkę zakupu.",
    description:
      "Klient przechodził z gotowej platformy na dedykowane rozwiązanie. Priorytetem była szybkość, stabilność i możliwość rozwoju o kolejne moduły (program lojalnościowy, integracje z marketplace’ami).",
    responsibilities: [
      "Projekt UX/UI kluczowych ekranów koszyka i checkoutu",
      "Implementacja frontendu i warstwy API",
      "Integracje z bramkami płatności i systemem magazynowym",
      "Przygotowanie pod kampanie reklamowe (eventy, analityka)",
    ],
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL"],
    results: [
      "Szybsze ładowanie strony vs poprzednie rozwiązanie",
      "Większa kontrola nad rozwojem sklepu",
    ],
  },
  {
    id: "internal-crm",
    title: "Panel wewnętrzny / mini-CRM",
    subtitle: "Prosty system do ogarnięcia leadów i statusów",
    type: "System wewnętrzny",
    status: "Online",
    shortDescription:
      "Lekki system webowy do obsługi leadów, notatek i statusów — zamiast kolejnego Excela.",
    description:
      "Firma korzystała z arkuszy i wielu narzędzi jednocześnie. Zbudowaliśmy prosty panel webowy, który porządkuje leady, kontakty i statusy działań, bez nadmiaru funkcji, których nikt nie używa.",
    responsibilities: [
      "Warsztaty i uproszczenie procesów do najważniejszych kroków",
      "Projekt struktury danych i ról użytkowników",
      "Implementacja panelu + filtrowania i wyszukiwarki",
      "Wsparcie przy wdrożeniu do zespołu",
    ],
    techStack: ["React", "Node.js", "PostgreSQL"],
    results: ["Mniej chaosu w leadach", "Łatwiejsze raportowanie dla właściciela"],
  },
  {
    id: "landing-b2b",
    title: "Landing B2B dla usługi doradczej",
    subtitle: "Strona nastawiona na leady zamiast „ładnego katalogu”",
    type: "Strona WWW",
    status: "Online",
    shortDescription:
      "Landing nastawiony na pozyskiwanie konkretnych zapytań od firm, z dopracowaną sekcją oferty i case studies.",
    description:
      "Zamiast rozbudowanego serwisu, postawiliśmy na pojedynczą stronę z jasnym komunikatem, dowodami skuteczności i prostym formularzem kontaktowym. Całość zaprojektowana tak, żeby było łatwo podpiąć kampanie reklamowe.",
    responsibilities: [
      "Pomoc w ułożeniu komunikacji i struktury treści",
      "Projekt UI, implementacja i techniczne SEO",
      "Integracja formularza z narzędziami do obsługi leadów",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS"],
    results: ["Spójna komunikacja oferty", "Gotowość pod kampanie leadowe"],
  },
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // zamykanie ESC
  useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProject]);

  return (
    <FadeInSection
      id="projects"
      className="relative overflow-hidden border-b border-slate-800 bg-slate-950"
    >
      {/* tło siatka */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,_#fff_1px,transparent_1px),linear-gradient(to_bottom,_#fff_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* NAGŁÓWEK */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="kicker text-indigo-400">Projekty i kierunki</p>
            <h2 className="heading-font text-2xl font-extrabold sm:text-3xl md:text-4xl">
              Z jakimi{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
                projektami
              </span>{" "}
              najczęściej pracujemy.
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Część projektów to produkcyjne wdrożenia, część to inicjatywy
              wewnętrzne i koncepty pod SaaS. Po kliknięciu w kartę możesz
              zobaczyć mini case study z zakresem prac i użytym stackiem.
            </p>
          </div>

          <p className="max-w-sm text-xs text-slate-400 sm:text-sm">
            Jeśli masz inny typ projektu – spokojnie. Proces i stack dobierzemy
            tak, żeby pasował do Twojej branży i etapu rozwoju.
          </p>
        </div>

        {/* GRID KART */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* MODAL / CASE STUDY */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </FadeInSection>
  );
}

/* ---- KARTA PROJEKTU ---- */

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const { title, subtitle, type, status, shortDescription } = project;

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex h-full flex-col items-stretch rounded-2xl border border-slate-800 bg-slate-950/80 p-5 text-left shadow-lg shadow-slate-950/60 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
    >
      {/* neon glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-indigo-500/25 to-cyan-500/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-300">
          {type}
        </p>
        <span
          className={`rounded-full border px-2 py-0.5 text-[10px] ${
            status === "Online"
              ? "border-emerald-400/60 bg-emerald-500/10 text-emerald-300"
              : status === "W realizacji"
              ? "border-amber-400/60 bg-amber-500/10 text-amber-300"
              : "border-slate-500/60 bg-slate-700/30 text-slate-200"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="mt-3 space-y-1.5">
        <h3 className="heading-font text-base font-semibold text-slate-50">
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">
            {title.split(" ")[0]}
          </span>{" "}
          {title.split(" ").slice(1).join(" ")}
        </h3>
        <p className="text-xs text-slate-300 sm:text-sm">{subtitle}</p>
      </div>

      <p className="mt-3 text-xs text-slate-400 sm:text-sm">
        {shortDescription}
      </p>

      <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
        <span className="inline-flex items-center gap-1">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
          Zobacz mini case study
        </span>
        <span className="inline-flex items-center gap-1 text-cyan-300">
          Szczegóły
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </button>
  );
}

/* ---- MODAL ---- */

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        className="relative mx-4 w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-950/95 p-5 shadow-2xl shadow-slate-950/80 sm:p-6 md:p-7"
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 12 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-slate-500 hover:bg-slate-800"
          aria-label="Zamknij"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="space-y-4">
          <div className="space-y-2">
            <p className="kicker text-indigo-400">Mini case study</p>
            <h3 className="heading-font text-xl font-extrabold text-slate-50 sm:text-2xl">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300">{project.subtitle}</p>

            <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="rounded-full border border-slate-700/70 bg-slate-900/70 px-2 py-0.5">
                Typ: {project.type}
              </span>
              <span className="rounded-full border border-slate-700/70 bg-slate-900/70 px-2 py-0.5">
                Status: {project.status}
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-300">{project.description}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="heading-font mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Zakres współpracy
              </p>
              <ul className="space-y-1.5 text-sm text-slate-300">
                {project.responsibilities.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="heading-font mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Stack i efekty
              </p>
              <div className="mb-3 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700/70 bg-slate-900/80 px-2 py-0.5 text-[11px] text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.results && (
                <ul className="space-y-1.5 text-sm text-slate-300">
                  {project.results.map((result) => (
                    <li key={result} className="flex gap-2">
                      <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-3 text-xs text-slate-400">
            <p>
              Chcesz podobny projekt?{" "}
              <span className="text-slate-200">
                Napisz nam kilka zdań o swoim biznesie – dobierzemy rozwiązanie
                pod Ciebie.
              </span>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-md shadow-indigo-500/40 transition hover:brightness-110"
            >
              Porozmawiajmy o Twoim projekcie
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

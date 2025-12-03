// app/page.tsx
"use client";

import Link from "next/link";

const sections = [
  { id: "services", label: "Usługi" },
  { id: "projects", label: "Projekty" },
  { id: "process", label: "Proces" },
  { id: "tech", label: "Technologie" },
  { id: "contact", label: "Kontakt" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400" />
            <span className="text-lg font-semibold tracking-tight">
              dual<span className="text-indigo-400">web</span>
            </span>
          </Link>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="transition hover:text-indigo-400"
              >
                {s.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 text-xs font-medium text-slate-950 shadow-lg shadow-indigo-500/30 md:text-sm"
          >
            Wyceń projekt
          </a>
        </div>
      </header>

      {/* MAIN */}
      <main id="top" className="flex-1">
        {/* HERO */}
        <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
            <div className="flex-1 space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-400">
                Strony • Sklepy • SaaS
              </p>
              <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Budujemy{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  nowoczesne produkty webowe
                </span>{" "}
                dla Twojego biznesu.
              </h1>
              <p className="max-w-xl text-sm text-slate-300 md:text-base">
                Dualweb to duet devów od React, Next.js, Node i Pythona. Projektujemy
                i wdrażamy strony, sklepy e-commerce oraz aplikacje SaaS, które
                realnie dowożą wyniki.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-indigo-500/30"
                >
                  Porozmawiajmy o projekcie
                </a>
                <a
                  href="#projects"
                  className="text-sm text-slate-300 underline-offset-4 hover:underline"
                >
                  Zobacz przykładowe realizacje
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="rounded-full border border-slate-800 px-3 py-1">
                  Krótki time-to-market
                </span>
                <span className="rounded-full border border-slate-800 px-3 py-1">
                  Technologie produkcyjne
                </span>
                <span className="rounded-full border border-slate-800 px-3 py-1">
                  Pełne wsparcie po wdrożeniu
                </span>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative mx-auto mt-6 max-w-md rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl md:mt-0">
                <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Stack Dualweb</span>
                  <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-wide">
                    Production ready
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <TechBadge label="React / Next.js" />
                  <TechBadge label="TypeScript" />
                  <TechBadge label="Node / Nest.js" />
                  <TechBadge label="PostgreSQL" />
                  <TechBadge label="Python" />
                  <TechBadge label="Tailwind CSS" />
                </div>
                <p className="mt-4 text-xs text-slate-400">
                  Od landing page’a po złożone aplikacje SaaS – projektujemy
                  architekturę, implementujemy backend i frontend oraz dbamy o
                  wydajność i UX.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* USŁUGI */}
        <section id="services" className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <SectionHeading
              kicker="Co robimy"
              title="Rozwiązania szyte pod biznes, nie pod ego devów."
              subtitle="Dobieramy stack do Twojego celu: sprzedaży, leadów, automatyzacji procesów."
            />

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <ServiceCard
                title="Strony & landingi"
                description="Nowoczesne, szybkie strony oparte o Next.js i Tailwind – gotowe na kampanie reklamowe i SEO."
              />
              <ServiceCard
                title="Sklepy e-commerce"
                description="Sklepy internetowe dopasowane do Twoich procesów – integracje z płatnościami, CRM, systemami magazynowymi."
              />
              <ServiceCard
                title="Aplikacje SaaS"
                description="Projektujemy i wdrażamy aplikacje działające w modelu subskrypcyjnym – od MVP po skalowanie."
              />
            </div>
          </div>
        </section>

        {/* PROJEKTY */}
        <section id="projects" className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <SectionHeading
              kicker="Case studies"
              title="Realizacje, które możesz pokazać inwestorom i klientom."
              subtitle="Na start możesz tu wrzucić 2–3 przykładowe projekty (nawet wewnętrzne / pet-projekty), później rozbijemy to na osobne podstrony."
            />

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <ProjectCard
                name="SaaS do rezerwacji"
                description="Panel dla firm usługowych z systemem rezerwacji online i powiadomieniami mail/SMS."
                tags={["Next.js", "Nest.js", "PostgreSQL"]}
              />
              <ProjectCard
                name="Sklep dla marki odzieżowej"
                description="Sklep z rozbudowanym filtrowaniem, integracją płatności i prostym CMSem do zarządzania kolekcjami."
                tags={["React", "Node", "E-commerce"]}
              />
            </div>
          </div>
        </section>

        {/* PROCES */}
        <section id="process" className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <SectionHeading
              kicker="Jak pracujemy"
              title="Prosty, przejrzysty proces bez korpo-slangu."
            />

            <ol className="mt-8 grid gap-4 text-sm md:grid-cols-4">
              <ProcessStep
                step="01"
                title="Rozmowa"
                text="Poznajemy Twój biznes, cele i budżet. Bez technicznego przesadnego żargonu."
              />
              <ProcessStep
                step="02"
                title="Propozycja"
                text="Przygotowujemy zakres, estymację i propozycję technologii."
              />
              <ProcessStep
                step="03"
                title="Development"
                text="Iteracyjnie dowozimy funkcje, pokazując efekty po drodze."
              />
              <ProcessStep
                step="04"
                title="Wdrożenie & wsparcie"
                text="Pomagamy wdrożyć produkt i dbamy o to, żeby działał stabilnie."
              />
            </ol>
          </div>
        </section>

        {/* TECH */}
        <section id="tech" className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <SectionHeading
              kicker="Stack"
              title="Technologie, które znamy z produkcji."
            />
            <p className="mt-4 max-w-2xl text-sm text-slate-300">
              Backend w Node lub Pythonie, frontend w Reakcie i Next.js, baza w
              Postgresie – to core, na którym opieramy nasze projekty. Wybieramy
              narzędzia, które łatwo utrzymać i skalować.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
              <TechPill label="React" />
              <TechPill label="Next.js" />
              <TechPill label="TypeScript" />
              <TechPill label="Node.js / Nest.js" />
              <TechPill label="Python" />
              <TechPill label="PostgreSQL" />
              <TechPill label="Tailwind CSS" />
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section id="contact" className="bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <SectionHeading
              kicker="Kontakt"
              title="Opowiedz nam o swoim projekcie."
              subtitle="Napisz kilka zdań o biznesie, jakie masz cele i orientacyjny budżet. Odezwiemy się z propozycją kolejnych kroków."
            />

            <ContactForm />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 md:flex-row">
          <span>© {new Date().getFullYear()} dualweb. Wszystkie prawa zastrzeżone.</span>
          <span>React • Next.js • Node • Python • PostgreSQL</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-indigo-400">
        {kicker}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm text-slate-300">{subtitle}</p>
      )}
    </div>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm shadow-lg shadow-slate-950/50">
      <h3 className="text-base font-medium text-slate-50">{title}</h3>
      <p className="mt-2 text-slate-300">{description}</p>
    </div>
  );
}

function ProjectCard({
  name,
  description,
  tags,
}: {
  name: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm shadow-lg shadow-slate-950/50">
      <h3 className="text-base font-medium text-slate-50">{name}</h3>
      <p className="mt-2 text-slate-300">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-300">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-700 px-2 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProcessStep({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <li className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <span className="text-xs font-mono text-indigo-400">{step}</span>
      <h3 className="mt-1 text-sm font-medium text-slate-50">{title}</h3>
      <p className="mt-2 text-xs text-slate-300">{text}</p>
    </li>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-[11px] text-slate-200">
      {label}
    </div>
  );
}

function TechPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-slate-700 px-3 py-1 text-xs">
      {label}
    </span>
  );
}

function ContactForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // tu później podłączymy API /api/contact
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 grid max-w-xl gap-4 text-sm"
    >
      <input
        name="name"
        placeholder="Imię / firma"
        className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 outline-none ring-indigo-500/0 focus:ring-2"
      />
      <input
        name="email"
        type="email"
        placeholder="Email kontaktowy"
        className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 outline-none ring-indigo-500/0 focus:ring-2"
      />
      <input
        name="budget"
        placeholder="Orientacyjny budżet (opcjonalnie)"
        className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 outline-none ring-indigo-500/0 focus:ring-2"
      />
      <textarea
        name="message"
        placeholder="Opisz krótko projekt, branżę i jakie masz cele."
        rows={5}
        className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 outline-none ring-indigo-500/0 focus:ring-2"
      />
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-indigo-500/30"
      >
        Wyślij zapytanie
      </button>
    </form>
  );
}

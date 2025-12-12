'use client';

import { FadeInSection } from './FadeInSection';

export function ServicesSection() {
  return (
    <FadeInSection
      id="services"
      className="relative overflow-hidden border-b border-slate-800 bg-slate-950"
    >
      {/* <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.06),transparent_55%)]" /> */}
      <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_bottom,_rgba(56,189,248,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 z-1 bg-[linear-gradient(115deg,_rgba(56,189,248,0.08),transparent_70%),linear-gradient(245deg,_rgba(129,140,248,0.08),transparent_70%)]"></div>

      <div className="mx-auto relative z-2 max-w-6xl px-4 py-16 md:py-20">
        {/* NAGŁÓWEK SEKCJI */}
        <div className="max-w-3xl space-y-3">
          <p className="kicker text-indigo-400">Usługi</p>
          <h2 className="heading-font text-2xl font-extrabold sm:text-3xl md:text-4xl">
            Od pojedynczej{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
              strony
            </span>{' '}
            po pełny produkt{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
              SaaS.
            </span>
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Możemy wejść w projekt na poziomie samego developmentu albo pomóc Ci od zera poukładać
            produkt, procesy i marketing. Jeśli masz już dopracowany zakres – dowieziemy stronę
            techniczną. Jeśli dopiero układasz pomysł – przejdziemy z Tobą drogę od &quot;idei&quot;
            do działającego biznesu.
          </p>
        </div>

        {/* KARTY USŁUG */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ServiceCard
            title="Strony i landing page’e"
            highlight="Strony"
            description="Projektujemy nowoczesne, szybkie strony dopasowane do celu: sprzedaży, generowania leadów, rekrutacji czy prezentacji oferty."
            bullets={[
              'UX/UI dopasowany do Twojej grupy docelowej',
              'Szybkość i SEO jako standard, nie opcja',
              'Integracje z analityką i narzędziami marketingowymi',
            ]}
            icon={<IconLanding />}
          />

          <ServiceCard
            title="Sklepy e-commerce"
            highlight="Sklepy"
            description="Tworzymy nowe sklepy od zera oraz rozwijamy istniejące projekty. Dbamy o to, żeby sprzedaż była prosta dla klientów i dla Ciebie."
            bullets={[
              'Nowy sklep od zera lub rozwój istniejącego',
              'Płatności, dostawy, integracje z magazynem i fakturowaniem',
              'Przygotowanie pod kampanie performance i remarketing',
            ]}
            icon={<IconEcommerce />}
          />

          <ServiceCard
            title="Aplikacje SaaS i systemy dedykowane"
            highlight="Aplikacje"
            description="Pomagamy zbudować produkt subskrypcyjny lub wewnętrzny system dopasowany do procesów w Twojej firmie – od MVP po skalowanie."
            bullets={[
              'Od MVP do skalowania produktu',
              'Architektura pod rozwój i kolejne funkcje',
              'Bezpieczne API i baza oparta o PostgreSQL',
            ]}
            icon={<IconSaaS />}
          />

          <ServiceCard
            title="Konsultacje, audyty i wsparcie"
            highlight="Konsultacje,"
            description="Wchodzimy w rolę partnera technologiczno-biznesowego. Możemy poukładać z Tobą ścieżkę klienta, procesy i zakres MVP lub po prostu sprawdzić, czy obecne rozwiązania mają sens."
            bullets={[
              'Ustalenie zakresu od strony biznesowej i technicznej',
              'Audyty istniejących systemów i rekomendacje zmian',
              'Jednorazowe konsultacje albo stałe wsparcie rozwoju',
            ]}
            icon={<IconConsulting />}
          />
        </div>

        {/* CTA NA DOLE SEKCJI */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 md:flex md:items-center md:justify-between md:gap-6">
          <div className="space-y-1 text-sm text-slate-200">
            <p className="heading-font text-base font-semibold">
              Nie wiesz, do której usługi pasuje Twój pomysł?
            </p>
            <p className="text-xs text-slate-300 sm:text-sm">
              Opowiedz nam krótko o biznesie, a pomożemy dobrać rozwiązanie i zakres współpracy – od
              samego developmentu po wsparcie marketingowo-biznesowe.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-50 shadow-lg shadow-indigo-500/40 transition hover:brightness-110 sm:px-6 sm:py-3 sm:text-base sm:whitespace-nowrap md:mt-0"
          >
            Porozmawiajmy o projekcie
          </a>
        </div>
      </div>
    </FadeInSection>
  );
}

interface ServiceCardProps {
  title: string;
  highlight: string; // słowo z gradientem
  description: string;
  bullets: string[];
  icon: React.ReactNode;
}

function ServiceCard({ title, highlight, description, bullets, icon }: ServiceCardProps) {
  return (
    <div className="group relative h-full">
      {/* Animowany neon (pulsuje) */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-indigo-500/25 to-cyan-500/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 neon-glow" />

      {/* Karta */}
      <div className="relative flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-xl shadow-slate-950/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-indigo-400/40">
        {/* Ikonka + tytuł */}
        <div className="flex items-center gap-3">
          {/* Ikona */}
          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900/80 ring-1 ring-indigo-500/40">
            {icon}
          </div>

          <h3 className="heading-font text-base font-bold text-slate-50 sm:text-lg">
            {title.split(' ').map((word, index) => {
              const isHighlight = word.toLowerCase() === highlight.toLowerCase();
              return (
                <span
                  key={index}
                  className={
                    isHighlight
                      ? 'bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-extrabold'
                      : ''
                  }
                >
                  {word + ' '}
                </span>
              );
            })}
          </h3>
        </div>

        {/* Opis */}
        <p className="mt-3 text-xs text-slate-300 sm:text-sm">{description}</p>

        {/* Bullet points */}
        <ul className="mt-4 space-y-2 text-xs text-slate-300">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.4)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Minimalistyczne ikonki pod konkretne usługi

function IconLanding() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-cyan-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="14" rx="3" />
      <path d="M7 9h10" />
      <path d="M7 13h5" />
    </svg>
  );
}

function IconEcommerce() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-cyan-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16l-1.5 9h-13z" />
      <circle cx="9" cy="18" r="1.2" />
      <circle cx="15" cy="18" r="1.2" />
    </svg>
  );
}

function IconSaaS() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-cyan-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17h10a4 4 0 0 0 .5-7.97A5 5 0 0 0 7 6a4 4 0 0 0-1 7.87" />
      <path d="M9 17v3" />
      <path d="M12 17v3" />
      <path d="M15 17v3" />
    </svg>
  );
}

function IconConsulting() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-cyan-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="3" />
      <path d="M4 20v-1a4 4 0 0 1 4-4" />
      <rect x="13" y="6" width="7" height="4" rx="1" />
      <path d="M14 17h4" />
      <path d="M14 21h6" />
    </svg>
  );
}

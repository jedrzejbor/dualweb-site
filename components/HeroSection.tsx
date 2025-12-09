"use client";

import Image from "next/image";
import { FadeInSection } from "./FadeInSection";
import { LayoutTextFlip } from "./ui/layout-text-flip";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <FadeInSection
      id="hero"
      className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:flex-row md:items-center md:py-24">
        {/* LEWA KOLUMNA – TEKST */}
        <div className="flex-1 space-y-6">
          <p className="kicker text-indigo-400">
            Strony • Sklepy • SaaS
          </p>

          <h1 className="heading-font text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Budujemy{" "}
            <motion.div className="relative my-4 flex flex-col items-start justify-start text-center sm:mx-0 sm:flex-row">
              <LayoutTextFlip
                text=""
                words={["nowoczesne strony", "produkty SaaS", "aplikacje webowe"]}
              />
            </motion.div>
            {/* <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-black">
              nowoczesne strony i SaaS
            </span>{" "} */}
            dla Twojego biznesu.
          </h1>

          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            Jesteśmy duetem developerów z dużym doświadczeniem
            w programowaniu i wdrażaniu systemów. Stawiamy na jakość,
            biznesowe podejście i pomagamy realnie rozwinąć Twój biznes –
            doradzając, jak najlepiej wykorzystać technologię.
          </p>

          {/* CTA */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* główne CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-slate-50 shadow-lg shadow-indigo-500/40 transition hover:brightness-110 sm:text-base sm:whitespace-nowrap"
            >
              Opowiedz nam o projekcie
            </a>


            {/* drugie CTA – teraz też przycisk */}
            <a
              href="#process"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 shadow-sm transition hover:border-slate-400 hover:bg-slate-800/70"
            >
              Zobacz jak pracujemy
            </a>
          </div>

          {/* BULLETY */}
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
            <HeroChip>
              Stworzymy idealne i bezpieczne rozwiązanie dla Twojej firmy
            </HeroChip>
            <HeroChip>
              Pomożemy rozwinąć biznes i wyjdziemy z inicjatywami
            </HeroChip>
            <HeroChip>
              Wesprzemy po wdrożeniu i w dalszym rozwoju
            </HeroChip>
          </div>
        </div>

        {/* PRAWA KOLUMNA – LOGO + INFO BOX */}
        <div className="flex-1">
          <div className="mx-auto max-w-xs rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-indigo-900/60 backdrop-blur-sm sm:max-w-sm">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 rounded-2xl bg-gradient-to-br from-indigo-500/40 to-cyan-400/40 p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950">
                  <Image
                    src="/logo.png"
                    alt="Dualweb logo – mózg i serce"
                    width={45}
                    height={45}
                    className="h-12 w-12 object-contain"
                  />
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <p className="kicker text-[0.65rem] text-indigo-300">
                  Mózg + serce
                </p>
                <p className="font-medium text-slate-50">
                  Strategia, jakość kodu i zaangażowanie w Twój projekt.
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-[11px] text-slate-300">
              <HeroStat label="Doświadczenie" value="Wiele wdrożonych systemów" />
              <HeroStat label="Podejście" value="Biznes + technologia" />
              <HeroStat label="Stack" value="React, Next, Node, Python" />
              <HeroStat label="Baza" value="PostgreSQL" />
            </div>

            <p className="mt-4 text-[11px] text-slate-400">
              Od pierwszej rozmowy do wdrożenia – pomagamy poukładać
              wymagania, dobrać architekturę i dowieźć produkt,
              który realnie pracuje na wyniki Twojej firmy.
            </p>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

function HeroChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1">
      {children}
    </span>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2">
      <p className="heading-font text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-300 border-b border-indigo-500/40 pb-[2px] w-fit">
        {label}
      </p>
      <p className="mt-1 text-[11px] font-medium text-slate-100">
        {value}
      </p>
    </div>
  );
}


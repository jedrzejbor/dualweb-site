"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#hero", label: "Start" },
  { href: "#services", label: "Usługi" },
  { href: "#process", label: "Proces" },
  { href: "#tech", label: "Stack" },
  { href: "#projects", label: "Projekty" },
  { href: "#contact", label: "Kontakt" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (typeof window === "undefined") return;
    const el = document.querySelector(href);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`border-b border-slate-800/60 transition-colors ${
          scrolled ? "bg-slate-950/95 backdrop-blur-xl" : "bg-slate-950/60 backdrop-blur-md"
        }`}
      >
        {/* drobny neon pod navem */}
        <div className="pointer-events-none absolute inset-x-0 top-full h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
          {/* logo + nazwa */}
          <button
            type="button"
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2 rounded-xl bg-slate-900/60 px-2 py-1 text-left transition hover:bg-slate-800/80"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950 ring-1 ring-indigo-500/60">
              <Image
                src="/logo.png"
                alt="Dualweb logo"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="heading-font text-xs font-semibold text-slate-50">
                Dualweb
              </p>
              <p className="text-[10px] text-slate-400">
                Strony • Sklepy • SaaS
              </p>
            </div>
          </button>

          {/* desktop links */}
          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex items-center gap-5 text-xs font-medium text-slate-300">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="relative transition hover:text-cyan-300"
                  >
                    <span>{item.label}</span>
                    <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-indigo-400 to-cyan-400 transition-all duration-200 group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 text-xs font-semibold text-slate-50 shadow-lg shadow-indigo-500/40 transition hover:brightness-110"
            >
              Porozmawiajmy o projekcie
            </button>
          </div>

          {/* mobile burger */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 text-slate-100 md:hidden"
            aria-label="Otwórz menu"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-[2px] w-4 rounded-full bg-slate-100 transition-transform ${
                  isOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-4 rounded-full bg-slate-100 transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-4 rounded-full bg-slate-100 transition-transform ${
                  isOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* mobile menu */}
        {isOpen && (
          <div className="border-t border-slate-800 bg-slate-950/95 px-4 pb-4 pt-2 md:hidden">
            <ul className="space-y-2 text-sm text-slate-200">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="w-full rounded-lg px-2 py-2 text-left text-sm transition hover:bg-slate-900"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="mt-3 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-50 shadow-lg shadow-indigo-500/40 transition hover:brightness-110"
            >
              Porozmawiajmy o projekcie
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

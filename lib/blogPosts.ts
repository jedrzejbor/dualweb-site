export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  featured?: boolean;
  content: string[]; // proste paragrafy, na start wystarczy
};

export const blogPosts: BlogPost[] = [
  {
    slug: "jak-zaprojektowac-skuteczny-landing",
    title: "Jak zaprojektować skuteczny landing nastawiony na konwersję",
    excerpt:
      "Na co zwrócić uwagę, projektując landing, który realnie generuje leady i sprzedaż – bez przeładowania i chaosu.",
    date: "2025-02-10",
    readingTime: "7 min",
    tags: ["Landing page", "UX", "Konwersja"],
    featured: true,
    content: [
      "Dobry landing page to nie tylko ładny design. To przede wszystkim jasny przekaz, jedna główna akcja i wszystko podporządkowane jednemu celowi biznesowemu.",
      "W praktyce oznacza to: mocny nagłówek, krótki, konkretny opis wartości, sekcję z korzyściami, dowód społeczny (opinie, logotypy, case studies) oraz prosty formularz albo CTA.",
      "Częsty błąd to próba opowiedzenia całej historii firmy na jednej stronie. Zamiast tego lepiej doprowadzić użytkownika do jednego, kluczowego kliknięcia."
    ],
  },
  {
    slug: "stack-technologiczny-dla-saas",
    title: "Stack technologiczny dla nowoczesnej aplikacji SaaS",
    excerpt:
      "Z czego zbudować SaaS, żeby dało się go wygodnie rozwijać, a nie przepisywać po roku?",
    date: "2025-01-28",
    readingTime: "6 min",
    tags: ["SaaS", "Architektura", "Technologie"],
    content: [
      "Przy budowie SaaS ważniejsze od samej listy technologii jest to, jak one do siebie pasują i jaką strategię rozwoju produktu zakładamy.",
      "My najczęściej korzystamy z połączenia: Next.js po stronie frontendu, NestJS/Node na backendzie oraz PostgreSQL jako główna baza danych.",
      "Taki stack pozwala szybko postawić MVP, a później dokładnie te same klocki rozbudować o kolejne moduły, integracje czy osobne mikroserwisy."
    ],
  },
  {
    slug: "marketing-i-technologia-w-jednym-zespole",
    title: "Dlaczego warto łączyć marketing i technologię w jednym zespole",
    excerpt:
      "Projekt, w którym dev i marketing rozmawiają od początku, zwykle kończy się lepszym wynikiem biznesowym.",
    date: "2024-12-12",
    readingTime: "5 min",
    tags: ["Marketing", "Strategia", "Biznes"],
    content: [
      "Często spotykamy projekty, w których strona lub aplikacja powstała w oderwaniu od realnych działań marketingowych.",
      "Kiedy technologia i marketing działają razem, można od razu projektować sekcje pod konkretne kampanie, lejki, persony oraz mierzyć to, co faktycznie ma znaczenie.",
      "Dlatego w Dualweb łączymy rozmowę o technologii z rozmową o biznesie – dzięki temu łatwiej wybrać właściwy zakres na start."
    ],
  },
];

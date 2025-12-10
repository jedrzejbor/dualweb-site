# Dualweb — Strona portfolio / landing

Krótki opis: to repozytorium zawiera nowoczesną stronę zbudowaną w Next.js (App Router), napisaną w TypeScript, podzieloną na komponenty React. Projekt zawiera prosty endpoint API służący do obsługi formularza kontaktowego i wysyłki e-maili przez usługę Resend.

**Szybkie linki**:
- Repozytorium: lokalne pliki projektu
- Framework: `Next.js` (app directory)

**Technologie**:
- `Next.js` (App Router)
- `TypeScript`
- `PostCSS` (konfiguracja w `postcss.config.mjs`)
- Integracja z API pocztowym: `resend` (używane w `app/api/contact/route.ts`)

---

**Główne cele README**:
- Opis struktury projektu
- Instrukcje uruchomienia lokalnego
- Wymagane zmienne środowiskowe (kontakt / wysyłka maili)

**Struktura projektu (najważniejsze pliki / foldery)**
- `app/` – główny kod aplikacji (App Router); znajdziesz tu strony i endpointy API.
  - `app/page.tsx` – główna strona.
  - `app/api/contact/route.ts` – endpoint POST do wysyłki wiadomości z formularza kontaktowego.
- `components/` – zbiór komponentów UI używanych w różnych sekcjach strony (Hero, Navbar, ContactSection itp.).
- `components/blog/` – komponenty specyficzne dla sekcji blogowej.
- `lib/` – pomocnicze biblioteki, np. `blogPosts.ts`.
- `public/` – zasoby statyczne (np. ikony technologii w `public/tech-icons/`).
- `app/globals.css` – globalne style projektu.

**Endpointy API**
- `POST /api/contact` – przyjmuje JSON z polami `{ name, email, message }`. Endpoint wykorzystuje bibliotekę `resend` do wysyłki e-maili.
  - W kodzie znajdują się używane zmienne środowiskowe: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`.

Przykładowa obsługa w `app/api/contact/route.ts`:
- walidacja pól `name`, `email`, `message`
- wysyłka maila przez `resend.emails.send(...)`

---

## Uruchamianie lokalnie

Wymagania: masz zainstalowane `node` i menedżera pakietów (`npm`/`pnpm`/`yarn`).

1. Zainstaluj zależności:

```bash
npm install
```

2. Utwórz plik zmiennych środowiskowych (lokalnie):

Utwórz `.env.local` w katalogu głównym i ustaw przynajmniej:

```env
# Klucz API do Resend (https://resend.com)
RESEND_API_KEY=your_resend_api_key_here

# (opcjonalne) adresy e-mail dla pól from/to
CONTACT_FROM_EMAIL="Nazwa <noreply@twojadomena.com>"
CONTACT_TO_EMAIL=you@twojadomena.com
```

3. Uruchom tryb deweloperski:

```bash
npm run dev
```

Odwiedź `http://localhost:3000` aby zobaczyć stronę.

4. Budowanie i uruchamianie produkcyjne:

```bash
npm run build
npm run start
```
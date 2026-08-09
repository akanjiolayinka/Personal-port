# OlayinkaCodes Portfolio

Personal portfolio for Olayinka Akanji — AI Engineer / Software Engineer.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom graphite/amber/teal token system, no default slate/zinc palette)
- Framer Motion for transitions and scroll reveals
- React Three Fiber for the ambient node-network background

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content to fill in

A few spots are intentionally left as placeholders until real content/numbers exist — search `lib/data.ts` for bracketed text like `[Retrieval framework]`:

- **RAG Chatbot** project card — description, tech stack, links, and real achievement numbers.
- **HTTP Server from Scratch** — GitHub link and load-test latency/throughput numbers once benchmarked.
- **`public/resume.pdf`** — replace the placeholder file with the real resume PDF (same filename, so the "Resume" links keep working).
- **`lib/data.ts` → `contact`** — confirm the LinkedIn URL and email are correct.

## Structure

```
app/            Next.js App Router entry (layout, page, global styles)
components/     Boot sequence, 3D background, header, sections
lib/            Site content (projects, skills, contact) + hooks
public/         Static assets (resume.pdf, etc.)
```

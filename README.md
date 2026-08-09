# OlayinkaCodes Portfolio

Personal portfolio for Olayinka Akanji — Software Engineer.

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

A few spots are intentionally left as placeholders until real content exists — search `lib/data.ts` for bracketed text like `[Bullets pending ...]`:

- **Experience → Nithub internship** — needs 2-3 concrete bullets on what was actually built/worked on there and the stack used.
- **Ultra-Fast KV Cache** project card — real throughput/latency numbers once benchmarked. Do not publish invented numbers.
- **HTTP Server from Scratch** project card — real load-test numbers (via `oha`) once run. Do not publish invented numbers.
- **`public/resume.pdf`** — replace the placeholder file with the real resume PDF (same filename, so the "Resume" links keep working).

## Structure

```
app/            Next.js App Router entry (layout, page, global styles)
components/     Boot sequence, 3D background, header, sections
lib/            Site content (projects, skills, contact) + hooks
public/         Static assets (resume.pdf, etc.)
```

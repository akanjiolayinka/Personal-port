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

A few spots are intentionally left as placeholders until real content exists — search `lib/data.ts` for bracketed text like `[Placeholder ...]`:

- **Ultra-Fast KV Cache** project card — real throughput/latency numbers once benchmarked. Do not publish invented numbers.
- **Leadership → Technical Writing Team Lead (ETS UNILAG)** — needs a bullet on what the team actually produced.
- **ResumeXpert project** — not yet on the site. Needs a repo link, live link (if any), and a one-line description before it can get a project card (`lib/data.ts` → `projects`).
- **VendorMind screenshot** — once available, add it to the VendorMind project card with descriptive alt text (per the SEO spec, not `image1.png`-style alt text).
- **`public/resume.pdf`** — generated from the provided resume docx via a headless-Chromium print-to-PDF (LibreOffice's document loader was broken in this environment, even on trivial files, so docx→PDF conversion went through browser print instead). Content matches the docx; replace with a fresh export if the source resume changes.

## Structure

```
app/            Next.js App Router entry (layout, page, global styles)
components/     Boot sequence, 3D background, header, sections
lib/            Site content (projects, skills, contact) + hooks
public/         Static assets (resume.pdf, etc.)
```

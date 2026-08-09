"use client";

import { contact } from "@/lib/data";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-graphite/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-ink"
        >
          Olayinka<span className="text-amber">Codes</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline font-sans text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={contact.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded border border-amber px-4 py-1.5 font-mono text-xs font-medium text-amber transition-colors hover:bg-amber hover:text-graphite"
        >
          Resume
        </a>
      </div>
    </header>
  );
}

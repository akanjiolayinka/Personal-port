import RevealOnScroll from "./RevealOnScroll";
import { contact } from "@/lib/data";

export default function ResumeCTA() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <RevealOnScroll>
          <div className="flex flex-col items-start justify-between gap-6 rounded border border-hairline bg-ash px-8 py-10 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-mono text-xl text-ink sm:text-2xl">
                Want the full breakdown?
              </h2>
              <p className="mt-2 max-w-md font-sans text-sm text-muted">
                Experience, tools, and the systems I&apos;ve shipped — in one PDF.
              </p>
            </div>
            <a
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center rounded border border-amber px-6 py-3 font-mono text-sm text-amber transition-all hover:bg-amber hover:text-graphite hover:shadow-[0_0_24px_-4px_rgba(217,164,65,0.5)]"
            >
              Download Resume
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

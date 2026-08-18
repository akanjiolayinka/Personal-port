import RevealOnScroll from "./RevealOnScroll";
import { contact } from "@/lib/data";

export default function ResumeCTA() {
  return (
    <section id="resume" className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <RevealOnScroll>
          <div className="flex flex-col items-start justify-between gap-6 rounded-t border border-b-0 border-hairline bg-ash px-8 py-10 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-mono text-xl text-ink sm:text-2xl">
                Want the full breakdown?
              </h2>
              <p className="mt-2 max-w-md font-sans text-sm text-muted">
                Experience, tools, and the systems I&apos;ve shipped — in one PDF.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <a
                href={contact.resume}
                download
                className="inline-flex items-center rounded border border-amber px-6 py-3 font-mono text-sm text-amber transition-all hover:bg-amber hover:text-graphite hover:shadow-[0_0_24px_-4px_rgba(217,164,65,0.5)]"
              >
                Download Resume
              </a>
              <a
                href={contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center px-1 py-3 font-mono text-sm text-muted transition-colors hover:text-teal"
              >
                Open in new tab
              </a>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <div className="overflow-hidden rounded-b border border-hairline">
            <iframe
              src={`${contact.resume}#view=FitH`}
              title="Olayinka Akanji — Resume PDF preview"
              className="h-[70vh] w-full min-h-[420px] max-h-[900px] bg-[#e7e5e0]"
              loading="lazy"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

import RevealOnScroll from "./RevealOnScroll";
import { leadership } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="leadership" className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <RevealOnScroll>
          <h2 className="font-mono text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Leadership &amp; Recognition
          </h2>
        </RevealOnScroll>

        <div className="mt-10 space-y-4">
          {leadership.map((item, i) => (
            <RevealOnScroll key={item.org} delay={i * 0.08}>
              <div className="rounded border border-hairline bg-ash p-6">
                <h3 className="font-mono text-base text-ink">{item.org}</h3>
                <p className="mt-2 font-sans text-sm text-muted">{item.role}</p>
              </div>
            </RevealOnScroll>
          ))}

          <RevealOnScroll delay={leadership.length * 0.08}>
            <div className="rounded border border-dashed border-hairline p-6 text-center">
              <p className="font-mono text-xs text-muted/70">
                additional awards slot open
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

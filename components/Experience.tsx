import RevealOnScroll from "./RevealOnScroll";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <RevealOnScroll>
          <h2 className="font-mono text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Experience
          </h2>
        </RevealOnScroll>

        <div className="mt-10 space-y-4">
          {experience.map((item, i) => (
            <RevealOnScroll key={item.role} delay={i * 0.08}>
              <div className="rounded border border-hairline bg-ash p-6">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-mono text-base text-ink">
                    {item.role} <span className="text-muted">— {item.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-teal">{item.period}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 font-sans text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-hairline" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

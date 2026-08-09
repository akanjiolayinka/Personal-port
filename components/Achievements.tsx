import RevealOnScroll from "./RevealOnScroll";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {achievements.map((item, i) => (
            <RevealOnScroll key={item.label} delay={i * 0.06}>
              <div className="border-l border-hairline pl-5">
                <p className="font-mono text-3xl font-medium text-amber sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 font-sans text-sm text-muted">{item.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

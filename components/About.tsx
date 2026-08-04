import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <RevealOnScroll>
          <h2 className="font-mono text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            About
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <p className="mt-8 max-w-3xl font-sans text-lg leading-relaxed text-ink/90 sm:text-xl">
            I&apos;m an AI engineer with 3+ years building systems that run in
            production, not just in demos. I studied Computer Engineering at
            the University of Lagos, but most of what I actually know came
            from taking things apart and rebuilding them myself — writing an
            HTTP server without touching Go&apos;s standard library, wiring a
            WhatsApp sales agent that handles real conversations for real
            merchants, building retrieval systems that answer questions
            instead of guessing. I care more about how a system behaves under
            real use than how it looks in a demo.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

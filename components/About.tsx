import RevealOnScroll from "./RevealOnScroll";

const BUILT_SOLO = [
  "A sharded in-memory key-value cache in Go — djb2 hashing, pre-allocated shards to dodge GC pauses, kernel-level TCP tuning",
  "An HTTP server with no net/http — raw TCP socket, hand-rolled parser, gzip compression, HTTP/1.1 keep-alive",
  "Archon, a full-stack autonomous research agent — a 7-stage pipeline (plan → search → score → read → extract → synthesize → write) with real-time progress streaming, built solo front to back",
  "A production RAG chatbot, also solo — hybrid retrieval with cross-encoder reranking, a hallucination guardrail, conversation memory, and a Ragas evaluation harness",
];

const FOCUS_AREAS = [
  "Backend systems (Go, distributed systems, networking, caching, API design)",
  "AI/LLM integration (RAG pipelines, agentic systems, multi-model orchestration)",
  "Full-stack delivery when a project needs it end to end",
];

export default function About() {
  return (
    <section id="about" className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <RevealOnScroll>
          <h2 className="font-mono text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            About
          </h2>
        </RevealOnScroll>

        <div className="mt-8 max-w-3xl space-y-6 font-sans text-base leading-relaxed text-ink/90 sm:text-lg">
          <RevealOnScroll>
            <p>
              I don&apos;t fully trust a piece of infrastructure until
              I&apos;ve built a smaller version of it myself. That&apos;s why,
              instead of just reaching for a cache or a web framework,
              I&apos;ve built my own.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.06}>
            <p>
              I&apos;m a software engineer with 3+ years of experience,
              currently a Software Engineering Intern at Nithub (University
              of Lagos) and a Computer Engineering student there. AI is where
              a lot of my recent work has gone, but the foundation underneath
              it is systems — I want to know what&apos;s actually happening
              under the abstraction, not just call the function.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div>
              <p className="text-ink">On my own, I&apos;ve built:</p>
              <ul className="mt-4 space-y-3">
                {BUILT_SOLO.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-muted sm:text-[17px]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.14}>
            <p>
              On VendorMind, a live AI WhatsApp sales agent built with a
              two-person team, I owned the AI integration layer — the
              sales-agent persona, orchestration across Groq and Claude, and
              the semantic product search.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.18}>
            <div>
              <p className="text-ink">My focus:</p>
              <ul className="mt-4 space-y-3">
                {FOCUS_AREAS.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-muted sm:text-[17px]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.22}>
            <p>
              I care more about how a system holds up under real use than how
              it looks in a demo. If you&apos;re hiring for software
              engineering roles — backend, systems, or AI-integrated products
              — I&apos;d like to talk.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

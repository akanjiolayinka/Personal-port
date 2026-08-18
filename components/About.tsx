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

        <div className="mt-8 max-w-3xl space-y-6 font-sans text-base leading-relaxed text-ink/90 sm:text-lg">
          <RevealOnScroll>
            <p>
              I&apos;m a backend engineer building scalable APIs and systems
              in Go and Python — FastAPI on the API side, Go when I want to
              know exactly what&apos;s happening under the hood.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.06}>
            <p>
              At Nithub, I cut CI/CD deploy time from 18 minutes to under 4,
              introduced Redis caching to cut repeated database reads, and
              optimized queries that were quietly killing response times. On
              my own, I&apos;ve built an HTTP server with no net/http that
              holds 19,350 req/s at 100% success under load, and a sharded
              in-memory cache built from scratch in Go.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p>
              Competitive problem-solving keeps me sharp — 300+ problems
              solved on LeetCode, 180+ on HackerRank, and a Top 9 finish at
              the Cavista Hackathon out of 400+ participants.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.14}>
            <p>
              I do AI engineering too — RAG pipelines, agentic systems — but
              backend is where I live. If you&apos;re hiring for software
              engineering roles, let&apos;s talk.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import NodeNetwork from "./NodeNetwork";
import { contact } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-hairline"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(217,164,65,0.10), transparent 60%), radial-gradient(ellipse 55% 45% at 65% 60%, rgba(79,184,174,0.09), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <NodeNetwork />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-teal"
        >
          Software Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="max-w-4xl font-mono text-4xl font-medium leading-[1.15] tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Backend systems, built from scratch.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-xl font-sans text-base text-muted sm:text-lg"
        >
          3+ years of experience — I build the systems other engineers
          import, and wire AI in where it actually earns its place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center rounded border border-hairline px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-teal hover:text-teal"
          >
            View Projects
          </a>
          <a
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded border border-amber px-6 py-3 font-mono text-sm text-amber shadow-[0_0_0_0_rgba(217,164,65,0)] transition-all hover:bg-amber hover:text-graphite hover:shadow-[0_0_24px_-4px_rgba(217,164,65,0.5)]"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  bullets: string[];
  status?: "flagship" | "open-slot";
}

export const projects: Project[] = [
  {
    name: "VendorMind",
    description:
      "A live, multi-tenant WhatsApp AI sales-agent platform for African merchants, built with a two-person team. The agent persona, Zinc, handles sales conversations over WhatsApp.",
    tech: [
      "Groq (Llama 3.3 70B)",
      "Whisper Turbo",
      "Claude 3.5 Sonnet",
      "OpenAI Embeddings",
      "BMONI cNGN",
      "Bun",
      "Fastify",
      "PostgreSQL + pgvector",
      "Prisma",
      "React",
    ],
    github: "https://github.com/Zenmisan/vendormind",
    live: "https://vendormind-z.web.app",
    status: "flagship",
    bullets: [
      "Owned the AI integration layer on a two-person build: the Zinc sales-agent persona, orchestration between Groq's Llama 3.3 70B and Claude 3.5 Sonnet, and the pgvector semantic product search.",
      "Wired in Groq Whisper Turbo so the agent can also handle voice notes, not just text.",
      "Live and handling real merchant conversations — not a prototype.",
    ],
  },
  {
    name: "RAG Chatbot",
    description:
      "RAG Studio — a retrieval-augmented chatbot built solo around a real production RAG pipeline, not a tutorial clone.",
    tech: ["Pinecone", "Cross-encoder reranking", "Ragas", "Next.js"],
    github: "https://github.com/akanjiolayinka/research",
    live: "https://research-mocha-seven.vercel.app",
    bullets: [
      "Full pipeline: query rewriting for follow-up questions, retrieval via Pinecone, cross-encoder reranking, and a hallucination guardrail that skips the LLM call entirely when retrieval confidence is too low.",
      "Sentence-aware chunking and SHA-256 dedup on ingest, plus per-session conversation memory.",
      "Ships with a Ragas evaluation harness (faithfulness, answer relevancy, context recall) and a per-message debug panel showing retrieved chunks and their scores.",
    ],
  },
  {
    name: "Archon",
    description:
      "A full-stack autonomous web research agent, built solo front to back.",
    tech: ["Next.js", "NextAuth", "BullMQ", "Redis"],
    github: "https://github.com/akanjiolayinka/RESEARCH-AGENT",
    bullets: [
      "Runs a 7-stage pipeline — plan, search, score, read, extract, synthesize, write — with real-time progress streaming.",
      "Three research depth modes (5 / 12 / 25 sources) trade off speed against coverage.",
      "Cited reports with resolved references, follow-up chat on generated reports, full auth + job-queue infrastructure (NextAuth, BullMQ/Redis) behind it.",
    ],
  },
  {
    name: "Ultra-Fast KV Cache",
    description:
      "A sharded in-memory key-value store in Go, built from scratch.",
    tech: ["Go", "djb2 hashing", "TCP tuning", "Docker"],
    github: "https://github.com/akanjiolayinka/Ultrafast-kv",
    bullets: [
      "Distributes keys across shards using djb2 hashing, entries pre-allocated per shard to avoid GC pauses under load.",
      "Kernel-level TCP tuning for zero-allocation request handling; containerized with support for 1M+ file descriptors.",
      "[Placeholder until benchmarked — throughput/latency numbers pending real load testing.]",
    ],
  },
  {
    name: "HTTP Server from Scratch",
    description:
      "A raw HTTP server in Go with no net/http: manual request parsing, routing, gzip compression, and persistent keep-alive connections, plus static file upload/download, all built by hand.",
    tech: ["Go", "TCP sockets", "gzip", "keep-alive"],
    github: "https://github.com/akanjiolayinka/Https-server",
    bullets: [
      "Skipped the standard library entirely to actually understand what it abstracts away — parsing, routing, and connection handling all written from zero.",
      "Built gzip compression and keep-alive connections in from the start, not bolted on after.",
      "[Placeholder until load-tested with oha — repo flags this as future work, numbers pending.]",
    ],
  },
  {
    name: "more in progress",
    description: "Reserved for the next project as it ships.",
    tech: [],
    status: "open-slot",
    bullets: [],
  },
];

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & Systems",
    skills: [
      "Go",
      "Node.js",
      "FastAPI",
      "API Design",
      "System Design",
      "Databases",
      "Docker",
      "Data Structures & Algorithms",
    ],
  },
  {
    title: "AI Engineering",
    skills: [
      "Python",
      "Prompt Engineering",
      "LLM APIs",
      "RAG & Vector Databases",
      "pgvector",
      "Pinecone",
      "LangChain / LlamaIndex-style frameworks",
      "Azure & AWS Deployment",
    ],
  },
  {
    title: "Frontend & Tooling",
    skills: ["React", "Git"],
  },
];

export const contact = {
  github: "https://github.com/akanjiolayinka",
  linkedin: "https://www.linkedin.com/in/olayinka-akanji-a9262a355/",
  leetcode: "https://leetcode.com/u/OLA_YINKA123/",
  hackerrank: "https://www.hackerrank.com/profile/akanjiolayinka90",
  email: "akanjiolayinka01@gmail.com",
  resume: "/resume.pdf",
};

export const leadership = [
  {
    org: "Technical Writing Team Lead — ETS UNILAG",
    role: "Led the technical writing team at the Educational Technology Summit, UNILAG, writing articles that broke down complex tech topics into something readers could actually grasp.",
  },
  {
    org: "Deputy Programs and Community Engagement Coordinator — SDA UNILAG",
    role: "Organized 6+ events and helped lead a 280+ member community, driving engagement and advocacy around SDA's sustainable development goals.",
  },
];

export interface Achievement {
  value: string;
  label: string;
}

export const achievements: Achievement[] = [
  { value: "300+", label: "LeetCode problems solved" },
  {
    value: "Top 9",
    label: "Cavista Hackathon finalist (400+ participants, 40+ teams)",
  },
  { value: "4.20/5.0", label: "CGPA, B.Sc. Computer Engineering, UNILAG" },
];

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineering Intern",
    org: "Nithub, University of Lagos",
    period: "Started March 2026",
    bullets: [
      "[Bullets pending — need 2-3 concrete things worked on and the stack used.]",
    ],
  },
];

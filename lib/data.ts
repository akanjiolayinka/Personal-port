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
      "A live, multi-tenant WhatsApp AI sales-agent platform for African merchants. The agent persona, Zinc, handles real sales conversations over WhatsApp.",
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
      "Baileys",
    ],
    github: "https://github.com/Zenmisan/vendormind",
    live: "https://vendormind-z.web.app",
    status: "flagship",
    bullets: [
      "Built it multi-tenant and white-label from the start, so any merchant can run their own branded AI agent without custom engineering per client.",
      "Combined three model providers in one conversation thread — Groq's Llama 3.3 70B and Whisper Turbo for voice, Claude 3.5 Sonnet, and OpenAI embeddings — so the agent handles text and voice sales conversations interchangeably.",
      "Wired BMONI's cNGN smart wallet directly into the conversation flow, so the agent can take a sale from chat to payment with no human handoff.",
      "Live and handling real merchant conversations at vendormind-z.web.app — not a prototype.",
    ],
  },
  {
    name: "RAG Chatbot",
    description:
      "[One-line description pending: what does it answer questions over, and who's it built for?]",
    tech: ["[Retrieval framework]", "[Vector DB]", "[Embedding model]", "[LLM]"],
    github: undefined,
    live: undefined,
    status: "open-slot",
    bullets: [
      "[Achievement bullets pending — retrieval accuracy, response latency, size of the knowledge base indexed, or a concrete outcome, pulled from real testing/usage.]",
    ],
  },
  {
    name: "HTTP Server from Scratch",
    description:
      "A raw HTTP server in Go with no net/http: manual request parsing, routing, gzip compression, and persistent keep-alive connections, plus static file upload/download, all built by hand.",
    tech: ["Go", "TCP sockets", "gzip", "keep-alive"],
    github: undefined,
    live: undefined,
    status: "open-slot",
    bullets: [
      "Skipped the standard library entirely to actually understand what it abstracts away — parsing, routing, and connection handling all written from zero.",
      "Built gzip compression and keep-alive connections in from the start, not bolted on after.",
      "[Load-test numbers pending: latency percentiles and throughput under real load.]",
    ],
  },
];

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
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
    title: "Backend & Systems",
    skills: [
      "Node.js",
      "Go",
      "FastAPI",
      "API Design",
      "System Design",
      "Databases",
      "Docker",
    ],
  },
  {
    title: "Frontend & Tooling",
    skills: ["React", "Git", "Data Structures & Algorithms"],
  },
];

export const contact = {
  github: "https://github.com/Zenmisan",
  linkedin: "https://linkedin.com/in/olayinka-akanji",
  email: "olayinka@olayinkacodes.dev",
  resume: "/resume.pdf",
};

export const leadership = [
  {
    org: "SDA UNILAG",
    role: "Sustainable Development community, University of Lagos — leadership role, quiz & content work",
  },
];

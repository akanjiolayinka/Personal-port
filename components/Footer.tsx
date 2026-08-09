import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-muted">
          Olayinka<span className="text-amber">Codes</span> © {new Date().getFullYear()}
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-sans text-sm text-muted transition-colors hover:text-teal"
          >
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-sans text-sm text-muted transition-colors hover:text-teal"
          >
            LinkedIn
          </a>
          <a
            href={contact.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-sans text-sm text-muted transition-colors hover:text-teal"
          >
            LeetCode
          </a>
          <a
            href={contact.hackerrank}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-sans text-sm text-muted transition-colors hover:text-teal"
          >
            HackerRank
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="link-underline font-sans text-sm text-muted transition-colors hover:text-teal"
          >
            {contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

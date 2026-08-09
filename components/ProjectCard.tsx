import type { Project } from "@/lib/data";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.44-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.98 10.98 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.73.8 1.17 1.83 1.17 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.07.78 2.17 0 1.56-.02 2.82-.02 3.2 0 .32.21.68.8.56A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const isFlagship = project.status === "flagship";

  return (
    <div
      className={`card-glow flex h-full flex-col rounded border border-hairline bg-ash p-7 ${
        isFlagship ? "sm:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {isFlagship && (
            <span className="mb-2 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-amber">
              Flagship
            </span>
          )}
          <h3 className="font-mono text-xl font-medium text-ink">{project.name}</h3>
        </div>
        <div className="flex shrink-0 items-center gap-3 text-muted">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="transition-colors hover:text-teal"
            >
              <GithubIcon />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="transition-colors hover:text-teal"
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 font-sans text-sm text-ink/85">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-teal/30 px-2.5 py-1 font-mono text-[11px] text-teal"
          >
            {tag}
          </li>
        ))}
      </ul>

      <ul className="mt-6 space-y-2 border-t border-hairline pt-5">
        {project.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 font-sans text-sm leading-relaxed text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-hairline" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {!project.github && !project.live && (
        <span className="mt-6 font-mono text-xs text-muted/70">
          repo link coming soon
        </span>
      )}
    </div>
  );
}

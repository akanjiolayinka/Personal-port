import RevealOnScroll from "./RevealOnScroll";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <RevealOnScroll>
          <h2 className="font-mono text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Projects
          </h2>
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.name} delay={i * 0.06} className={project.status === "flagship" ? "sm:col-span-2" : ""}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}

          <RevealOnScroll delay={projects.length * 0.06}>
            <div className="flex h-full min-h-[220px] flex-col items-center justify-center rounded border border-dashed border-hairline p-7 text-center">
              <p className="font-mono text-sm text-muted">more in progress</p>
              <p className="mt-2 max-w-xs font-sans text-xs text-muted/70">
                Additional project slots open here as they ship.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

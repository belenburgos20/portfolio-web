import { useId, useState } from "react";
import { projects, type Project } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="section-reveal">
          <div className="mb-10 sm:mb-14 max-w-2xl">
            <SectionLabel>Proyectos</SectionLabel>
            <h2 className="section-title">
              Lo que construí y <span className="accent-text">por qué</span>
            </h2>
            <p className="mt-4 font-body text-text-muted leading-relaxed">
              Cuatro proyectos desplegados, dos de ellos para clientes reales de
              Bahía Blanca. En cada uno podés abrir el caso de estudio: qué
              problema resolvía, por qué elegí ese stack y qué se me complicó.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="surface rounded-2xl overflow-hidden">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-full bg-bg-secondary">
          <img
            src={project.preview}
            alt={`Captura de ${project.title}`}
            className="w-full h-full object-cover object-top"
            loading="lazy"
            width={1200}
            height={750}
          />
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} />
            {project.featured && (
              <span className="font-mono text-[11px] px-2 py-1 rounded bg-bg/80 backdrop-blur-sm border border-primary/25 text-primary-light">
                Destacado
              </span>
            )}
          </div>
        </div>

        <div className="p-5 sm:p-7 lg:p-8 flex flex-col">
          <p className="font-mono text-xs text-text-muted tracking-wide mb-2">
            {project.subtitle} · {project.year}
          </p>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-text-main leading-tight">
            {project.title}
          </h3>
          <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed mt-3">
            {project.summary}
          </p>

          <p className="font-body text-xs text-text-muted/80 mt-3">
            <span className="text-text-muted">Rol:</span> {project.role}
          </p>

          <ul className="flex flex-wrap gap-2 mt-5" aria-label="Tecnologías utilizadas">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="font-mono text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2.5 mt-auto pt-6">
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalIcon />
                Ver demo
              </a>
            )}
            {project.links.code && (
              <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <GitHubIcon />
                {project.links.codeAlt ? "Repo backend" : "Ver código"}
              </a>
            )}
            {project.links.codeAlt && (
              <a
                href={project.links.codeAlt.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <GitHubIcon />
                {project.links.codeAlt.label}
              </a>
            )}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-controls={panelId}
              className="btn-ghost"
            >
              <ChevronIcon open={open} />
              {open ? "Ocultar caso de estudio" : "Leer caso de estudio"}
            </button>
          </div>
        </div>
      </div>

      <div
        id={panelId}
        hidden={!open}
        className="border-t border-white/[0.07] px-5 sm:px-7 lg:px-8 py-7 sm:py-8 bg-white/[0.015]"
      >
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          <CaseBlock title="El problema">{project.caseStudy.problem}</CaseBlock>
          <CaseBlock title="Por qué este stack">{project.caseStudy.stackRationale}</CaseBlock>
        </div>

        <div className="mt-8">
          <h4 className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
            Desafíos técnicos
          </h4>
          <ol className="flex flex-col gap-5">
            {project.caseStudy.challenges.map((challenge, i) => (
              <li key={challenge.title} className="flex gap-4">
                <span
                  className="font-mono text-xs text-primary/70 pt-0.5 shrink-0 tabular-nums"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h5 className="font-display font-semibold text-text-main text-[15px] sm:text-base">
                    {challenge.title}
                  </h5>
                  <p className="font-body text-sm text-text-muted leading-relaxed mt-1.5 max-w-3xl">
                    {challenge.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.07]">
          <CaseBlock title="Resultado y aprendizaje">{project.caseStudy.outcome}</CaseBlock>
        </div>
      </div>
    </article>
  );
}

function CaseBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono text-xs text-primary tracking-widest uppercase mb-3">{title}</h4>
      <p className="font-body text-sm text-text-muted leading-relaxed max-w-3xl">{children}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: Project["status"] }) {
  const config = {
    live: { label: "En producción", className: "text-emerald-300 border-emerald-400/30" },
    wip: { label: "En desarrollo", className: "text-amber-300 border-amber-400/30" },
    offline: { label: "Demo fuera de línea", className: "text-text-muted border-white/20" },
  }[status];

  return (
    <span
      className={`font-mono text-[11px] px-2 py-1 rounded bg-bg/80 backdrop-blur-sm border ${config.className}`}
    >
      {config.label}
    </span>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

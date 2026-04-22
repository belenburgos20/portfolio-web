import { projects } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-20"
          style={{
            background:
              "linear-gradient(90deg, transparent, #a78bfa, transparent)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="section-reveal"
        >
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-4 h-px bg-primary" />
              <span className="font-mono text-xs text-primary tracking-widest uppercase">
                Proyectos
              </span>
            </div>
            <h2
              className="font-display font-bold text-4xl md:text-5xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Lo que he <span className="gradient-text">construido</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <article
      className="card-glass rounded-2xl overflow-hidden group hover:border-primary/25 transition-all duration-300 hover:glow-pink hover:-translate-y-1 hover:shadow-xl"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.preview}
          alt={`Vista previa de ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/20 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="font-mono text-xs text-text-muted border border-white/15 px-2 py-0.5 rounded bg-bg/50 backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.featured && (
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-primary/15 border border-primary/25 text-primary">
              ★ Destacado
            </span>
          )}
        </div>
      </div>

      <div className="p-6 md:p-7">
        <h3 className="font-display font-bold text-xl md:text-2xl text-text-main mb-1 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="font-body text-sm text-text-muted mb-4">
          {project.subtitle}
        </p>
        <p className="font-body text-text-muted leading-relaxed mb-5 min-h-[3.4rem]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-body font-medium text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #ec4899, #a78bfa)",
                boxShadow: "0 0 16px rgba(236,72,153,0.2)",
              }}
            >
              <ExternalIcon />
              Ver demo
            </a>
          )}
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-body text-sm text-text-muted border border-white/10 hover:border-primary/30 hover:text-text-main hover:-translate-y-0.5 transition-all duration-300"
            >
              <GitHubIcon />
              Ver código
            </a>
          )}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-body text-sm text-text-muted border border-white/10 hover:border-accent/30 hover:text-text-main hover:-translate-y-0.5 transition-all duration-300"
          >
            Propuesta laboral
          </a>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="h-px w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{ background: "linear-gradient(90deg, #ec4899, #a78bfa)" }}
      />
    </article>
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
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

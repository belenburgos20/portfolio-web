import { personalInfo, education, softSkills } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();
  const focusAreas = ["APIs REST", "JWT", "Bases de datos", "Deploy"];

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="section-reveal grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left column */}
          <div>
            <SectionLabel>Sobre mí</SectionLabel>
            <h2
              className="font-display font-bold text-4xl md:text-5xl leading-tight mb-8"
              style={{ letterSpacing: "-0.02em" }}
            >
              Desarrolladora <span className="gradient-text">full-stack</span> .
            </h2>

            <div className="space-y-3 font-body text-text-muted leading-relaxed text-base md:text-lg">
              {personalInfo.bio.slice(0, 2).map((para, i) => (
                <p key={i} className="max-w-2xl">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-6">
              <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
                Enfoque técnico
              </p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="font-body text-sm px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary-light"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Location + language */}
            <div className="mt-8 flex flex-wrap gap-4">
              <InfoBadge icon="📍" text={personalInfo.location} />
              <InfoBadge icon="🌍" text="Inglés técnico (lectura)" />
              <InfoBadge icon="🎓" text="UTN — Técnica en Programación" />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Education card */}
            {education.map((edu) => (
              <div key={edu.title} className="card-glass rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-text-main text-base">
                      {edu.title}
                    </h3>
                    <p className="text-text-muted text-sm font-body mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-primary/20 text-primary shrink-0">
                    {edu.year}
                  </span>
                </div>
                <p className="text-text-muted text-sm font-body leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}

            {/* Soft skills */}
            <div className="card-glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-text-main text-sm uppercase tracking-wider mb-4">
                Habilidades blandas
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "3+", label: "Proyectos\ncompletos" },
                { num: "5+", label: "Tecnologías\ndominadas" },
                { num: "3", label: "proyectos en\nproducción" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card-glass rounded-xl p-4 text-center"
                >
                  <div className="font-display font-bold text-2xl gradient-text">
                    {stat.num}
                  </div>
                  <div className="font-body text-xs text-text-muted mt-1 whitespace-pre-line leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-4 h-px bg-primary" />
      <span className="font-mono text-xs text-primary tracking-widest uppercase">
        {children}
      </span>
    </div>
  );
}

function InfoBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-sm text-text-muted font-body">
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

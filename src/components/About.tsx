import { personalInfo, education, workingStyle } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section
      id="about"
      className="py-20 sm:py-24 lg:py-28 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="section-reveal grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start"
        >
          <div>
            <SectionLabel>Sobre mí</SectionLabel>
            <h2 className="section-title mb-6">
              Desarrolladora full-stack con{" "}
              <span className="accent-text">clientes reales</span>
            </h2>

            <div className="space-y-4 font-body text-text-muted leading-relaxed text-[15px] sm:text-base">
              {personalInfo.bio.map((para) => (
                <p key={para.slice(0, 40)} className="max-w-2xl">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              <InfoBadge text={personalInfo.location} />
              <InfoBadge text="Disponible remoto o híbrido" />
              <InfoBadge text="Inglés técnico (lectura)" />
            </div>
          </div>

          <div className="space-y-5 w-full">
            {education.map((edu) => (
              <div key={edu.title} className="surface rounded-2xl p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-text-main text-base leading-snug">
                      {edu.title}
                    </h3>
                    <p className="text-text-muted text-sm font-body mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-primary/25 text-primary-light shrink-0">
                    {edu.year}
                  </span>
                </div>
                <p className="text-text-muted text-sm font-body leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}

            <div className="surface rounded-2xl p-5 sm:p-6">
              <h3 className="font-mono text-xs text-primary tracking-widest uppercase mb-5">
                Cómo trabajo
              </h3>
              <ul className="space-y-4">
                {workingStyle.map((item) => (
                  <li key={item.title}>
                    <h4 className="font-display font-semibold text-text-main text-sm">
                      {item.title}
                    </h4>
                    <p className="font-body text-sm text-text-muted leading-relaxed mt-1">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm text-text-muted font-body">
      {text}
    </span>
  );
}

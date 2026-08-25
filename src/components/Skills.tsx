import { skillGroups, aiWorkflow } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 lg:py-28 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="section-reveal"
        >
          <div className="mb-10 sm:mb-14 max-w-2xl">
            <SectionLabel>Stack técnico</SectionLabel>
            <h2 className="section-title">
              Tecnologías que{" "}
              <span className="accent-text">puedo defender</span>
            </h2>
            <p className="mt-4 font-body text-text-muted leading-relaxed">
              Sin barras de porcentaje. Cada tecnología de esta lista está usada
              en al menos uno de los proyectos de abajo, y puedo explicar por
              qué está ahí y qué alternativa descarté.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {skillGroups.map((group) => (
              <div key={group.id} className="surface rounded-2xl p-5 sm:p-6">
                <h3 className="font-display font-semibold text-text-main text-base mb-4 flex items-center gap-2.5">
                  <span
                    className="w-1.5 h-5 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-xs px-2.5 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Flujo de trabajo con IA */}
          <div className="mt-14 sm:mt-16">
            <div className="mb-8 max-w-3xl">
              <SectionLabel>Flujo de trabajo con IA</SectionLabel>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-text-main mb-4">
                Uso asistentes de IA, y sé dónde no confiar en ellos
              </h3>
              <p className="font-body text-text-muted leading-relaxed">
                {aiWorkflow.intro}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {aiWorkflow.practices.map((practice) => (
                <div
                  key={practice.title}
                  className="surface rounded-2xl p-5 sm:p-6"
                >
                  <h4 className="font-display font-semibold text-text-main text-sm mb-2.5">
                    {practice.title}
                  </h4>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {practice.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

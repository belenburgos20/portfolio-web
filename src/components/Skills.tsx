import { skills } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";

const levelLabels: Record<string, string> = {
  main: "Principales",
  experience: "Con experiencia",
};

const levelColors: Record<string, string> = {
  main: "from-primary to-accent",
  experience: "from-primary-light to-primary",
};

export default function Skills() {
  const ref = useScrollReveal();

  const levels = ["main", "experience"];

  return (
    <section id="skills" className="py-28 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-20"
          style={{
            background:
              "linear-gradient(90deg, transparent, #ec4899, transparent)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="section-reveal"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-4 h-px bg-primary" />
              <span className="font-mono text-xs text-primary tracking-widest uppercase">
                Stack técnico
              </span>
              <span className="w-4 h-px bg-primary" />
            </div>
            <h2
              className="font-display font-bold text-4xl md:text-5xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Tecnologías que <span className="gradient-text">domino</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {levels.map((level) => {
              const levelSkills = skills.filter((s) => s.level === level);
              return (
                <div
                  key={level}
                  className="card-glass rounded-2xl p-6 group hover:border-primary/25 transition-colors duration-300"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-2 h-8 rounded-full bg-gradient-to-b ${levelColors[level]}`}
                    />
                    <h3 className="font-display font-semibold text-text-main text-base">
                      {levelLabels[level]}
                    </h3>
                  </div>

                  {/* Skills grid */}
                  <div className="flex flex-wrap gap-2">
                    {levelSkills.map((skill, i) => (
                      <SkillChip
                        key={`${level}-${skill.name}`}
                        name={skill.name}
                        category={skill.category}
                        delay={i * 60}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom marquee */}
          <div className="mt-16 overflow-hidden">
            <div
              className="flex gap-8 opacity-20"
              style={{ animation: "none" }}
            >
              {skills.concat(skills).map((skill, i) => (
                <span
                  key={i}
                  className="font-mono text-sm text-text-muted whitespace-nowrap shrink-0"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillChip({
  name,
  category,
  delay,
}: {
  name: string;
  category: string;
  delay: number;
}) {
  const categoryLabel: Record<string, string> = {
    frontend: "FE",
    backend: "BE",
    tools: "TOOLS",
  };

  return (
    <div
      className="group/chip relative px-3 py-2 rounded-lg border border-white/[0.07] bg-white/[0.03] hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2">
        <span className="font-mono text-[10px] text-primary/90 border border-primary/20 rounded px-1.5 py-0.5">
          {categoryLabel[category]}
        </span>
        <span className="font-body text-sm text-text-muted group-hover/chip:text-text-main transition-colors duration-200">
          {name}
        </span>
      </div>
    </div>
  );
}

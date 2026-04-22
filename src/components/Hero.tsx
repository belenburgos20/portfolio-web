import { personalInfo } from "../data/portfolio";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const cvPath = "/cv/cv-belen-burgos.pdf";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse-slow"
          style={{
            background: "radial-gradient(circle, #ec4899, transparent)",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-8 blur-3xl animate-pulse-slow"
          style={{
            background: "radial-gradient(circle, #a78bfa, transparent)",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#ec4899 1px, transparent 1px), linear-gradient(90deg, #ec4899 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-primary tracking-wider uppercase">
              Open to work · Remoto & Híbrido
            </span>
          </div>

          <p
            className="font-body text-sm md:text-base text-text-muted/90 mb-5"
            style={{ animation: "fadeUp 0.7s ease 0.28s both", opacity: 0 }}
          >
            Técnica en Programación | Full Stack Developer
          </p>

          <h1
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              animation: "fadeUp 0.7s ease 0.2s both",
              opacity: 0,
            }}
          >
            Hola, soy <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <p
            className="font-body text-text-muted text-lg leading-relaxed max-w-xl mb-10"
            style={{ animation: "fadeUp 0.7s ease 0.46s both", opacity: 0 }}
          >
            {personalInfo.tagline}
          </p>

          <div
            className="flex flex-wrap gap-2 mb-12"
            style={{ animation: "fadeUp 0.7s ease 0.56s both", opacity: 0 }}
          >
            {"React,TypeScript,Node.js,PostgreSQL".split(",").map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 rounded-md bg-bg-secondary border border-white/5 text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            className="flex flex-wrap gap-4"
            style={{ animation: "fadeUp 0.7s ease 0.66s both", opacity: 0 }}
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="px-6 py-3 rounded-full font-body font-medium text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #ec4899, #a78bfa)",
                boxShadow: "0 0 20px rgba(236,72,153,0.25)",
              }}
            >
              Ver proyectos
            </button>
            <a
              href={cvPath}
              download
              className="px-6 py-3 rounded-full font-body font-medium text-sm text-text-main border border-white/10 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300"
            >
              Descargar CV
            </a>
          </div>

          <div
            className="mt-6 flex items-center gap-3"
            style={{ animation: "fadeUp 0.7s ease 0.78s both", opacity: 0 }}
          >
            <SocialLink
              href={personalInfo.github}
              label="GitHub"
              icon={<GitHubIcon />}
            />
            <SocialLink
              href={personalInfo.linkedin}
              label="LinkedIn"
              icon={<LinkedInIcon />}
            />
          </div>
        </div>

        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-55"
          style={{ animation: "fadeIn 1s ease 1.5s both" }}
        >
          <div className="relative w-6 h-10 rounded-full border border-white/10 flex items-start justify-center pt-2">
            <span className="w-1 h-1.5 rounded-full bg-text-muted animate-bounce" />
          </div>
          <div className="w-px h-6 bg-gradient-to-b from-text-muted to-transparent" />
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 text-xs font-body text-text-muted hover:text-text-main hover:border-white/20 hover:bg-white/[0.03] transition-all duration-200"
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

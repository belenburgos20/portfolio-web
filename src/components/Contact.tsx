import { FormEvent, useState } from "react";
import { personalInfo } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Contacto portfolio - ${formData.name.trim() || "Sin nombre"}`,
    );
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`,
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(ellipse, #ec4899, transparent)",
          }}
        />
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
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-4 h-px bg-primary" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              Contacto
            </span>
            <span className="w-4 h-px bg-primary" />
          </div>

          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            ¿Hablamos sobre <span className="gradient-text">tu proyecto</span>?
          </h2>

          <p className="font-body text-text-muted text-lg leading-relaxed mb-10 max-w-2xl">
            Estoy buscando mi primera experiencia profesional como
            desarrolladora full-stack. Si tenés un equipo o proyecto donde pueda
            sumarme, me encantaría conectar.
          </p>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            <form
              onSubmit={onSubmit}
              className="card-glass rounded-2xl p-6 md:p-7 space-y-4 text-left"
            >
              <h3 className="font-display text-2xl text-text-main mb-1">
                Enviar un mensaje
              </h3>
              <p className="text-sm text-text-muted font-body mb-4">
                Respondo por email y LinkedIn.
              </p>

              <label className="block">
                <span className="font-body text-sm text-text-muted">
                  Nombre
                </span>
                <input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="mt-1.5 w-full rounded-xl bg-bg-secondary/70 border border-white/10 focus:border-primary/40 focus:outline-none px-4 py-3 text-sm text-text-main transition-colors"
                  placeholder="Tu nombre"
                />
              </label>

              <label className="block">
                <span className="font-body text-sm text-text-muted">Email</span>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="mt-1.5 w-full rounded-xl bg-bg-secondary/70 border border-white/10 focus:border-primary/40 focus:outline-none px-4 py-3 text-sm text-text-main transition-colors"
                  placeholder="tuemail@mail.com"
                />
              </label>

              <label className="block">
                <span className="font-body text-sm text-text-muted">
                  Mensaje
                </span>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="mt-1.5 w-full rounded-xl bg-bg-secondary/70 border border-white/10 focus:border-primary/40 focus:outline-none px-4 py-3 text-sm text-text-main transition-colors resize-y"
                  placeholder="Contame sobre la oportunidad o el proyecto..."
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-display font-semibold text-base text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #ec4899, #a78bfa)",
                  boxShadow: "0 0 30px rgba(236,72,153,0.25)",
                }}
              >
                <MailIcon />
                Enviar un mensaje
              </button>
            </form>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <ContactCard
                  href={`mailto:${personalInfo.email}`}
                  icon={<MailIcon />}
                  label="Email"
                  value="belenburgos.dev@gmail.com"
                  accent="primary"
                />
                <ContactCard
                  href={personalInfo.github}
                  icon={<GitHubIcon />}
                  label="GitHub"
                  value="@belenburgos20"
                  accent="accent"
                />
                <ContactCard
                  href={personalInfo.linkedin}
                  icon={<LinkedInIcon />}
                  label="LinkedIn"
                  value="Conectar"
                  accent="primary-light"
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <p className="mt-8 font-mono text-xs text-text-muted tracking-wider text-center lg:text-left">
            📍 {personalInfo.location} · Disponible para trabajo remoto
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
  accent,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: string;
}) {
  const accentClasses: Record<string, string> = {
    primary: "hover:border-primary/40 hover:bg-primary/5",
    accent: "hover:border-accent/40 hover:bg-accent/5",
    "primary-light": "hover:border-primary-light/40 hover:bg-primary-light/5",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`card-glass rounded-xl p-5 flex flex-col items-center gap-3 group transition-all duration-200 ${accentClasses[accent] || accentClasses.primary}`}
    >
      <div className="text-text-muted group-hover:text-text-main transition-colors">
        {icon}
      </div>
      <div>
        <div className="font-body text-xs text-text-muted uppercase tracking-wider mb-0.5">
          {label}
        </div>
        <div className="font-display font-medium text-sm text-text-main">
          {value}
        </div>
      </div>
    </a>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

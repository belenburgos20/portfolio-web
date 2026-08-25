import { FormEvent, useState } from "react";
import { personalInfo } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

const GITHUB_HANDLE = "@belenburgos20";

export default function Contact() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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
    <section id="contact" className="py-20 sm:py-24 lg:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="section-reveal">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <SectionLabel>Contacto</SectionLabel>
            <h2 className="section-title mb-5">
              ¿Buscás sumar una <span className="accent-text">dev junior</span> al equipo?
            </h2>
            <p className="font-body text-text-muted text-base sm:text-lg leading-relaxed">
              Busco mi primera experiencia profesional como desarrolladora full-stack.
              Si tenés una posición abierta o querés ver más de mi código, escribime:
              respondo dentro de las 24 horas.
            </p>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-start">
            <form onSubmit={onSubmit} className="surface rounded-2xl p-5 sm:p-7 space-y-4">
              <div>
                <h3 className="font-display font-semibold text-xl text-text-main">
                  Enviar un mensaje
                </h3>
                <p className="text-sm text-text-muted font-body mt-1">
                  Se abre tu cliente de correo con el mensaje ya redactado.
                </p>
              </div>

              <Field
                id="contact-name"
                label="Nombre"
                value={formData.name}
                onChange={(value) => setFormData((prev) => ({ ...prev, name: value }))}
                placeholder="Tu nombre"
                autoComplete="name"
              />

              <Field
                id="contact-email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={(value) => setFormData((prev) => ({ ...prev, email: value }))}
                placeholder="tuemail@empresa.com"
                autoComplete="email"
              />

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-body text-sm text-text-muted mb-1.5"
                >
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="w-full rounded-xl bg-bg-secondary/70 border border-white/10 focus:border-primary/50 focus:outline-none px-4 py-3 text-sm text-text-main transition-colors resize-y"
                  placeholder="Contame sobre la posición o el proyecto..."
                />
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                <MailIcon />
                Enviar mensaje
              </button>
            </form>

            <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
              <ContactCard
                href={`mailto:${personalInfo.email}`}
                icon={<MailIcon />}
                label="Email"
                value={personalInfo.email}
              />
              <ContactCard
                href={personalInfo.github}
                icon={<GitHubIcon />}
                label="GitHub"
                value={GITHUB_HANDLE}
                external
              />
              <ContactCard
                href={personalInfo.linkedin}
                icon={<LinkedInIcon />}
                label="LinkedIn"
                value="Belén Burgos"
                external
              />
              <div className="surface rounded-xl p-5 sm:col-span-3 lg:col-span-1">
                <p className="font-mono text-xs text-text-muted leading-relaxed">
                  {personalInfo.location}
                  <br />
                  {personalInfo.availability}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-body text-sm text-text-muted mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl bg-bg-secondary/70 border border-white/10 focus:border-primary/50 focus:outline-none px-4 py-3 text-sm text-text-main transition-colors"
        placeholder={placeholder}
      />
    </div>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
  external = false,
  accent,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
  accent?: "primary" | "accent" | "primary-light";
}) {
  const accentClass = accent
    ? {
        primary: "hover:border-primary/40",
        accent: "hover:border-accent/40",
        "primary-light": "hover:border-primary-light/40",
      }[accent]
    : undefined;

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`surface rounded-xl p-5 flex items-center gap-4 group transition-colors ${accentClass ?? "hover:border-primary/30"}`}
    >
      <span className="text-text-muted group-hover:text-primary-light transition-colors shrink-0">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-body text-xs text-text-muted uppercase tracking-wider">
          {label}
        </span>
        <span className="block font-body text-sm text-text-main truncate">{value}</span>
      </span>
    </a>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

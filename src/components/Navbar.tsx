import { useEffect, useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";

const navLinks = [
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-primary/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold text-xl tracking-tight group"
        >
          <span className="gradient-text">BB</span>
          <span className="text-text-muted font-light">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`font-body text-sm transition-colors duration-200 relative group ${
                  activeSection === link.href.slice(1)
                    ? "text-text-main"
                    : "text-text-muted hover:text-text-main"
                }`}
                aria-current={
                  activeSection === link.href.slice(1) ? "page" : undefined
                }
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:belenburgos.dev@gmail.com"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-sm font-body text-primary hover:bg-primary/10 transition-all duration-200 hover:border-primary/60"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
          Disponible
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-text-main transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-text-main transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-text-main transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-secondary/95 backdrop-blur-md border-b border-primary/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-left font-body text-base py-1 transition-colors border-l-2 pl-3 ${
                activeSection === link.href.slice(1)
                  ? "text-text-main border-primary"
                  : "text-text-muted hover:text-text-main border-transparent"
              }`}
              aria-current={
                activeSection === link.href.slice(1) ? "page" : undefined
              }
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:belenburgos.dev@gmail.com"
            className="mt-2 inline-flex items-center gap-2 text-primary text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
            belenburgos.dev@gmail.com
          </a>
        </div>
      )}
    </header>
  );
}

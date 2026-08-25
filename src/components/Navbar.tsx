import { useEffect, useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { personalInfo } from "../data/portfolio";

const navLinks = [
  { label: "Proyectos", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

const sectionIds = navLinks.map((link) => link.href.slice(1));
const MOBILE_MENU_ID = "mobile-menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Cerrar el menú móvil con Escape: quien navega con teclado necesita una salida.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-white/[0.07] py-2.5 md:py-3"
          : "bg-transparent border-b border-transparent py-3 md:py-5"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold text-lg sm:text-xl tracking-tight"
        >
          <span className="gradient-text">BB</span>
          <span className="text-text-muted font-light">.</span>
          <span className="sr-only">Volver al inicio</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNav(link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`font-body text-sm transition-colors duration-200 relative group ${
                    isActive
                      ? "text-text-main"
                      : "text-text-muted hover:text-text-main"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <a
          href={`mailto:${personalInfo.email}`}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-sm font-body text-primary hover:bg-primary/10 transition-all duration-200 hover:border-primary/60"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary"
            aria-hidden="true"
          />
          Contratame
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-expanded={menuOpen}
          aria-controls={MOBILE_MENU_ID}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            aria-hidden="true"
            className={`w-5 h-0.5 bg-text-main transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            aria-hidden="true"
            className={`w-5 h-0.5 bg-text-main transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            aria-hidden="true"
            className={`w-5 h-0.5 bg-text-main transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      <div
        id={MOBILE_MENU_ID}
        hidden={!menuOpen}
        className="md:hidden bg-bg-secondary/95 backdrop-blur-md border-b border-white/[0.07] px-4 sm:px-6 py-5 flex flex-col gap-4"
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.slice(1);
          return (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNav(link.href)}
              aria-current={isActive ? "true" : undefined}
              className={`text-left font-body text-base py-1 transition-colors border-l-2 pl-3 ${
                isActive
                  ? "text-text-main border-primary"
                  : "text-text-muted hover:text-text-main border-transparent"
              }`}
            >
              {link.label}
            </button>
          );
        })}
        <a
          href={`mailto:${personalInfo.email}`}
          className="mt-1 inline-flex items-center gap-2 text-primary-light text-sm break-all"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
            aria-hidden="true"
          />
          {personalInfo.email}
        </a>
      </div>
    </header>
  );
}

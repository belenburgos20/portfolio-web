import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-lg">
          <span className="gradient-text">BB</span>
          <span className="text-text-muted font-light">.</span>
        </span>
        <p className="font-mono text-xs text-text-muted text-center">
          © {new Date().getFullYear()} Belén Burgos · Hecho con React + Vite
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors text-sm font-body"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors text-sm font-body"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

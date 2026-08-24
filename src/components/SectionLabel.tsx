/** Etiqueta corta que encabeza cada sección. Compartida para no repetirla. */
export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-4 h-px bg-primary" aria-hidden="true" />
      <span className="font-mono text-xs text-primary tracking-widest uppercase">
        {children}
      </span>
    </div>
  );
}

import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow?: string; title: ReactNode; description?: string; light?: boolean }) {
  return (
    <div className={`max-w-2xl ${light ? "text-white" : "text-[var(--ink)]"}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="display-heading text-4xl leading-[0.95] sm:text-5xl">{title}</h2>
      {description && <p className={`mt-5 text-base leading-7 ${light ? "text-white/70" : "text-[var(--muted-ink)]"}`}>{description}</p>}
    </div>
  );
}

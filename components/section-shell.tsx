import { clsx } from "clsx";
import type { PropsWithChildren } from "react";

type SectionShellProps = PropsWithChildren<{
  eyebrow?: string;
  title?: string;
  intro?: string;
  className?: string;
  id?: string;
}>;

export function SectionShell({ eyebrow, title, intro, className, id, children }: SectionShellProps) {
  return (
    <section id={id} className={clsx("relative px-5 py-20 sm:px-8 lg:py-28", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-champagne">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-balance font-serif text-4xl font-semibold leading-[0.98] text-bone sm:text-5xl lg:text-6xl xl:text-7xl">
                {title}
              </h2>
            )}
            {intro && <p className="text-pretty mt-6 text-base leading-8 text-silver sm:text-lg">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

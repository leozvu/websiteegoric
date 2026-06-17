import { clsx } from "clsx";
import type { PropsWithChildren, ReactNode } from "react";

type SectionShellProps = PropsWithChildren<{
  eyebrow?: string;
  title?: ReactNode;
  intro?: string;
  className?: string;
  headerClassName?: string;
  titleClassName?: string;
  introClassName?: string;
  id?: string;
}>;

export function SectionShell({
  eyebrow,
  title,
  intro,
  className,
  headerClassName,
  titleClassName,
  introClassName,
  id,
  children
}: SectionShellProps) {
  return (
    <section id={id} className={clsx("relative px-5 py-20 sm:px-8 lg:py-28", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className={clsx("mb-12 max-w-5xl", headerClassName)}>
            {eyebrow && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-champagne">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={clsx(
                  "semantic-heading text-balance font-serif text-4xl font-semibold leading-[0.98] text-bone sm:text-5xl lg:text-6xl",
                  titleClassName
                )}
              >
                {title}
              </h2>
            )}
            {intro && (
              <p className={clsx("text-pretty mt-6 max-w-4xl text-base leading-8 text-silver sm:text-lg", introClassName)}>
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

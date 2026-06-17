import { clsx } from "clsx";
import Image from "next/image";
import { CinematicSignalMedia } from "@/components/cinematic-signal-media";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  stats?: Array<{ label: string; value: string }>;
  className?: string;
};

export function PageHero({ eyebrow, title, intro, stats, className }: PageHeroProps) {
  return (
    <section className={clsx("relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 lg:pb-24 lg:pt-44", className)}>
      <div className="absolute inset-0 bg-radial-grid bg-[length:100%_100%,80px_80px,80px_80px] opacity-28" />
      <Image
        src="/media/egoric-signal-film.webp"
        alt=""
        aria-hidden="true"
        width={1280}
        height={760}
        sizes="62vw"
        className="absolute right-0 top-16 hidden h-[520px] w-[62vw] object-cover opacity-10 mix-blend-screen motion-reduce:hidden lg:block"
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-champagne/45 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center xl:grid-cols-[1.35fr_0.65fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-champagne">{eyebrow}</p>
          <h1 className="semantic-heading max-w-6xl text-balance font-serif text-[clamp(3rem,5.7vw,6.9rem)] font-semibold leading-[0.95] text-bone">
            {title}
          </h1>
        </div>
        <div className="premium-card rounded border border-white/10 bg-obsidian/62 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur">
          <div className="mb-6 hidden lg:block">
            <CinematicSignalMedia compact />
          </div>
          <p className="text-pretty text-base leading-8 text-silver">{intro}</p>
          {stats && (
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded border border-white/10 bg-obsidian/55 p-4">
                  <p className="font-serif text-3xl font-semibold text-champagne">{stat.value}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-silver">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

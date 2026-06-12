import Image from "next/image";

type CinematicSignalMediaProps = {
  compact?: boolean;
};

export function CinematicSignalMedia({ compact = false }: CinematicSignalMediaProps) {
  return (
    <div className="relative overflow-hidden rounded border border-white/10 bg-obsidian">
      <Image
        src="/media/egoric-signal-film.webp"
        alt=""
        aria-hidden="true"
        width={1280}
        height={760}
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="h-full min-h-64 w-full object-cover opacity-90 motion-reduce:hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/15 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.04),transparent)] bg-[length:100%_7px] opacity-25" />
      <div className="absolute left-4 top-4 rounded-full border border-champagne/35 bg-obsidian/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-champagne backdrop-blur">
        Live signal map
      </div>
      {!compact && (
        <div className="absolute bottom-4 left-4 right-4 grid gap-2 sm:grid-cols-3">
          {["Audience map", "Message angle", "Sentiment scan"].map((item) => (
            <div key={item} className="rounded border border-white/10 bg-obsidian/70 px-3 py-3 backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.12em] text-silver">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

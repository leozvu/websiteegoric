import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { signalFlow } from "@/lib/content";

export function SeedingSystem() {
  return (
    <SectionShell
      eyebrow="Seeding System"
      title={
        <>
          <span className="block lg:whitespace-nowrap">From message angle</span>
          <span className="block lg:whitespace-nowrap">to readable market signal.</span>
        </>
      }
      intro="Egoric xây seeding system có cấu trúc, có thể monitor và bám đúng communication objective."
      headerClassName="max-w-6xl"
    >
      <Reveal>
        <div className="overflow-hidden rounded border border-white/10 bg-obsidian/60">
          <div className="border-b border-white/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-champagne sm:px-8">
            Controlled signal path
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {signalFlow.map((item, index) => (
              <div
                key={item}
                className="premium-card relative min-h-40 border-b border-white/10 p-5 sm:p-6 lg:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-last-child(-n+4)]:border-b-0"
              >
                <span className="text-xs font-semibold text-champagne">{String(index + 1).padStart(2, "0")}</span>
                <p className="phrase-lock mt-8 text-sm font-semibold uppercase tracking-[0.12em] leading-6 text-bone">
                  {item}
                </p>
                <div className="absolute bottom-5 left-5 right-5 h-px bg-gradient-to-r from-champagne/60 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

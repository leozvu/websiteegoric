import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { signalFlow } from "@/lib/content";

export function SeedingSystem() {
  return (
    <SectionShell
      eyebrow="Seeding System"
      title="From message angle to market signal."
      intro="Egoric xây seeding system có cấu trúc, có thể monitor và bám đúng communication objective."
    >
      <Reveal>
        <div className="glass overflow-hidden rounded p-5 sm:p-8">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
            {signalFlow.map((item, index) => (
              <div key={item} className="relative">
                <div className="min-h-32 rounded border border-white/10 bg-obsidian/60 p-4">
                  <span className="text-xs font-semibold text-champagne">{String(index + 1).padStart(2, "0")}</span>
                  <p className="phrase-lock mt-5 text-sm font-semibold leading-6 text-bone">{item}</p>
                </div>
                {index < signalFlow.length - 1 && (
                  <div className="absolute right-[-10px] top-1/2 hidden h-px w-5 bg-champagne/50 xl:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

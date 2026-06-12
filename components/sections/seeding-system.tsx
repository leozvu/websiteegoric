import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { signalFlow } from "@/lib/content";

export function SeedingSystem() {
  return (
    <SectionShell
      eyebrow="Hệ Thống Seeding"
      title="Từ thông điệp đến tín hiệu thị trường."
      intro="Egoric xây hệ thống seeding có cấu trúc, có thể theo dõi và bám đúng mục tiêu truyền thông."
    >
      <Reveal>
        <div className="glass overflow-hidden rounded p-5 sm:p-8">
          <div className="grid gap-3 md:grid-cols-7">
            {signalFlow.map((item, index) => (
              <div key={item} className="relative">
                <div className="min-h-32 rounded border border-white/10 bg-obsidian/60 p-4">
                  <span className="text-xs font-semibold text-champagne">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-5 text-sm font-semibold leading-6 text-bone">{item}</p>
                </div>
                {index < signalFlow.length - 1 && (
                  <div className="absolute right-[-10px] top-1/2 hidden h-px w-5 bg-champagne/50 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

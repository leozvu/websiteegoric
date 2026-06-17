import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { audienceCards } from "@/lib/content";

export function WhoNeedsThis() {
  return (
    <SectionShell
      eyebrow="Who It Is For"
      title="Dành cho brand cần thị trường bắt đầu nói về mình."
      intro="Egoric dành cho team đã có thứ cần đưa ra market, nhưng cần conversation momentum có cấu trúc quanh nó."
      headerClassName="max-w-6xl"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {audienceCards.map((item, index) => (
          <Reveal key={item} delay={index * 0.035}>
            <div className="premium-card min-h-32 rounded border border-white/10 bg-white/[0.035] p-5 transition hover:border-champagne/35 hover:bg-white/[0.055]">
              <p className="phrase-lock text-sm font-medium leading-7 text-bone">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { whyPoints } from "@/lib/content";

export function WhyEgoric() {
  return (
    <SectionShell
      eyebrow="Why Egoric"
      title="Strategy trước volume."
      intro="Giá trị không nằm ở nhiều comment hơn. Giá trị nằm ở một communication system có kiểm soát, xây quanh market behavior."
    >
      <Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {whyPoints.map((point, index) => (
            <div key={point} className="flex items-center gap-5 rounded border border-white/10 bg-obsidian/55 p-5">
              <span className="font-serif text-3xl text-champagne">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-pretty text-base font-medium text-bone">{point}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

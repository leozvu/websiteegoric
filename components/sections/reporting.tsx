import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { reportingItems } from "@/lib/content";

export function Reporting() {
  return (
    <SectionShell
      eyebrow="Reporting"
      title="Deliverables khách hàng nhận."
      intro="Egoric report hệ thống phía sau activity: plan gì, message đặt ở đâu, market phản hồi thế nào và next step nên là gì."
    >
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {reportingItems.map((item) => (
            <div key={item} className="phrase-lock rounded border border-white/10 bg-white/[0.035] p-5 text-sm font-medium text-bone">
              {item}
            </div>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

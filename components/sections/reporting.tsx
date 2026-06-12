import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { reportingItems } from "@/lib/content";

export function Reporting() {
  return (
    <SectionShell
      eyebrow="Báo Cáo"
      title="Khách hàng nhận gì."
      intro="Egoric báo cáo hệ thống phía sau hoạt động: đã lên kế hoạch gì, đã đặt thông điệp ở đâu, thị trường phản hồi thế nào và bước tiếp theo nên là gì."
    >
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {reportingItems.map((item) => (
            <div key={item} className="rounded border border-white/10 bg-white/[0.035] p-5 text-sm font-medium text-bone">
              {item}
            </div>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

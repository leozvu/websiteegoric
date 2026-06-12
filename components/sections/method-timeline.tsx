import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { methodSteps } from "@/lib/content";

export function MethodTimeline() {
  return (
    <SectionShell
      id="method"
      eyebrow="Phương Pháp Egoric"
      title="Chẩn đoán. Lập bản đồ. Viết kịch bản. Kích hoạt. Theo dõi. Tối ưu."
      intro="Một chiến dịch seeding cần cấu trúc trước khi cần số lượng. Egoric xây hệ thống trước khi thị trường nhìn thấy tín hiệu."
      className="bg-gradient-to-b from-transparent via-white/[0.025] to-transparent"
    >
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <div className="glass rounded p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-champagne">Đường tiến trình</p>
            <div className="mt-7 h-2 rounded-full bg-white/10">
              <div className="h-full w-5/6 rounded-full bg-gradient-to-r from-champagne to-signal shadow-glow" />
            </div>
            <p className="mt-6 text-sm leading-7 text-silver">
              Mỗi bước thu hẹp công việc: từ bối cảnh thị trường rộng đến chuyển động thông điệp có kiểm soát.
            </p>
          </div>
        </div>
        <div className="space-y-5">
          {methodSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.04}>
              <article className="glass rounded p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-4">
                  <span className="font-serif text-4xl font-semibold text-champagne">{step.label}</span>
                  <h3 className="font-serif text-4xl font-semibold text-bone">{step.title}</h3>
                </div>
                <p className="text-base leading-8 text-silver">{step.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

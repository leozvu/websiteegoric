import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { caseStudies } from "@/lib/content";

export function CaseStudies() {
  return (
    <SectionShell
      id="case-studies"
      eyebrow="Case Study"
      title="Case format sẵn sàng thay bằng dữ liệu campaign thật."
      intro="Editorial case để thể hiện loại movement Egoric tạo ra, không hứa viral và không phóng đại signal."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <Reveal key={study.title} delay={index * 0.05}>
            <article className="group flex min-h-[440px] flex-col justify-between overflow-hidden rounded border border-white/10 bg-charcoal/60 p-6 transition hover:border-champagne/40">
              <div>
                <div className="mb-10 h-40 rounded bg-[radial-gradient(circle_at_30%_30%,rgba(200,169,106,0.24),transparent_32%),radial-gradient(circle_at_70%_60%,rgba(76,141,255,0.18),transparent_30%),#08090b]">
                  <div className="grid h-full place-items-center">
                    <span className="text-xs uppercase tracking-[0.28em] text-silver">
                      Signal {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <h3 className="text-balance font-serif text-3xl font-semibold text-bone">{study.title}</h3>
              </div>
              <div className="mt-8 space-y-5 text-sm leading-7 text-silver">
                <p>
                  <span className="text-bone">Challenge:</span> {study.challenge}
                </p>
                <p>
                  <span className="text-bone">Move:</span> {study.move}
                </p>
                <p>
                  <span className="text-bone">Signal:</span> {study.outcome}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

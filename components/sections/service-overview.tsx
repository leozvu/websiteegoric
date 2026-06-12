import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { services } from "@/lib/content";

export function ServiceOverview() {
  return (
    <SectionShell
      id="services"
      eyebrow="Egoric Làm Gì"
      title="Chúng tôi xây lớp thảo luận phía sau campaign của bạn."
      intro="Sáu nhóm dịch vụ seeding tập trung. Không định vị full-service marketing, không spam rẻ tiền, không hoạt động rỗng."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.04}>
            <article className="glass group min-h-[360px] rounded p-6 transition duration-500 hover:-translate-y-1 hover:border-champagne/40 hover:shadow-glow">
              <div className="mb-10 flex items-start justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight size={18} className="text-silver transition group-hover:text-champagne" />
              </div>
              <h3 className="font-serif text-3xl font-semibold text-bone">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-silver">{service.summary}</p>
              <div className="mt-8 space-y-4 text-sm leading-7 text-silver">
                <p>
                  <span className="text-bone">Giải quyết:</span> {service.solves}
                </p>
                <p>
                  <span className="text-bone">Egoric làm:</span> {service.does}
                </p>
                <p>
                  <span className="text-bone">Ví dụ:</span> {service.useCase}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

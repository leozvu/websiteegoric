import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { services } from "@/lib/content";

export function ServiceOverview() {
  return (
    <SectionShell
      id="services"
      eyebrow="What Egoric Does"
      title="Chúng tôi build conversation layer phía sau campaign của bạn."
      intro="Sáu seeding module tập trung. Không full-service marketing, không spam rẻ tiền, không activity rỗng."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.04}>
            <article className="glass min-h-[360px] rounded p-6 transition duration-500 hover:border-champagne/35">
              <div className="mb-10 flex items-start justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-10 bg-champagne/40" />
              </div>
              <h3 className="text-balance font-serif text-3xl font-semibold text-bone">{service.title}</h3>
              <p className="text-pretty mt-3 text-sm leading-7 text-silver">{service.summary}</p>
              <div className="mt-8 space-y-4 text-sm leading-7 text-silver">
                <p>
                  <span className="text-bone">Use when:</span> {service.solves}
                </p>
                <p>
                  <span className="text-bone">Egoric controls:</span> {service.does}
                </p>
                <p>
                  <span className="text-bone">Example:</span> {service.useCase}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { services } from "@/lib/content";

export function ServiceDetails() {
  return (
    <SectionShell
      eyebrow="Service Detail"
      title="Các seeding module cho từng moment của campaign."
      intro="Mỗi module được xây quanh audience mapping, message angle, placement logic, timing và reporting."
    >
      <div className="space-y-5">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.035}>
            <article className="grid gap-6 rounded border border-white/10 bg-white/[0.035] p-6 md:grid-cols-[0.75fr_1fr] md:p-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-balance mt-5 font-serif text-4xl font-semibold text-bone">{service.title}</h3>
                <p className="text-pretty mt-4 text-sm leading-7 text-silver">{service.summary}</p>
                <div className="mt-7">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-silver">Best for</p>
                  <div className="flex flex-wrap gap-2">
                    {service.bestFor.map((item) => (
                      <span key={item} className="phrase-lock rounded-full border border-white/10 px-3 py-2 text-xs text-silver">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-champagne">
                  Client receives
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {service.receives.map((item) => (
                    <div key={item} className="phrase-lock rounded border border-white/10 bg-obsidian/50 p-4 text-sm text-bone">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

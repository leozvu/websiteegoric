import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { ServiceDetails } from "@/components/sections/service-details";
import { ServiceOverview } from "@/components/sections/service-overview";
import { services } from "@/lib/content";

export const metadata = {
  title: "Seeding Services",
  description:
    "Launch seeding, community seeding, social proof seeding, perception seeding, campaign support và reputation support."
};

const packageFlow = [
  "Brief communication objective",
  "Map audience & community",
  "Design message angle",
  "Build seeding script",
  "Activate by wave",
  "Monitor & report"
];

export default function SeedingServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Seeding Services"
        title="Strategic seeding cho launch, social proof và market perception."
        intro="Egoric chỉ tập trung vào seeding. Mỗi module được xây để tạo conversation đúng context, có kiểm soát và có thể report."
        stats={[
          { value: "06", label: "Modules" },
          { value: "VN", label: "Core market" },
          { value: "100%", label: "Seeding focus" }
        ]}
      />
      <ServiceOverview />

      <SectionShell
        eyebrow="How To Choose"
        title="Chọn theo campaign moment, không chọn theo số lượng comment."
        intro="Nếu bạn chưa chắc nên bắt đầu từ đâu, Egoric sẽ đọc brief và đề xuất module phù hợp nhất với communication objective."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <article key={service.title} className="rounded border border-white/10 bg-white/[0.035] p-6">
              <h2 className="text-balance font-serif text-3xl font-semibold text-bone">{service.title}</h2>
              <p className="text-pretty mt-4 text-sm leading-7 text-silver">{service.solves}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {services.slice(3).map((service) => (
            <article key={service.title} className="rounded border border-white/10 bg-white/[0.035] p-6">
              <h2 className="text-balance font-serif text-3xl font-semibold text-bone">{service.title}</h2>
              <p className="text-pretty mt-4 text-sm leading-7 text-silver">{service.solves}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Service Flow"
        title="Từ brief đến report, mọi thứ cần structure."
        intro="Một seeding campaign tốt không bắt đầu bằng việc viết comment. Nó bắt đầu bằng việc hiểu objective và market."
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
          {packageFlow.map((item, index) => (
            <div key={item} className="rounded border border-white/10 bg-obsidian/60 p-4">
              <span className="text-xs text-champagne">{String(index + 1).padStart(2, "0")}</span>
              <p className="phrase-lock mt-4 text-sm font-medium leading-6 text-bone">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <ServiceDetails />

      <section className="px-5 py-20 sm:px-8">
        <div className="glass mx-auto flex max-w-7xl flex-col gap-6 rounded p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">Next Step</p>
            <h2 className="text-balance mt-3 font-serif text-4xl font-semibold text-bone">Gửi brief, Egoric sẽ đề xuất conversation layer.</h2>
          </div>
          <Link
            href="/contact"
            className="button-shine inline-flex items-center justify-center gap-3 rounded-full bg-champagne px-6 py-4 text-sm font-bold text-obsidian"
          >
            Gửi brief seeding
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { ServiceDetails } from "@/components/sections/service-details";
import { ServiceOverview } from "@/components/sections/service-overview";

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
  "Monitor & report",
  "Align risk boundary",
  "Recommend next sprint"
];

const decisionRows = [
  {
    moment: "Launch cần early market signal",
    module: "Launch Seeding",
    control: "Audience map, message angle, timeline wave",
    notFor: "Chỉ mua comment số lượng lớn không cần context"
  },
  {
    moment: "Brand cần đi vào niche community",
    module: "Community Seeding",
    control: "Community culture, topic entry, placement nuance",
    notFor: "Spam cùng một script vào nhiều group"
  },
  {
    moment: "Campaign có reach nhưng thiếu proof",
    module: "Social Proof Seeding",
    control: "Objection, trust angle, comment quality",
    notFor: "Review giả hoặc claim không kiểm chứng"
  },
  {
    moment: "Market hiểu chưa đúng positioning",
    module: "Perception Seeding",
    control: "Narrative path, objection response, risk tone",
    notFor: "Tấn công đối thủ hoặc kéo toxic discussion"
  }
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
        title="Chọn theo campaign moment, không chọn theo volume comment."
        intro="Nếu bạn chưa chắc nên bắt đầu từ đâu, Egoric sẽ đọc brief và đề xuất module phù hợp nhất với communication objective."
      >
        <div className="overflow-hidden rounded border border-white/10 bg-obsidian/60">
          <div className="grid border-b border-white/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-champagne md:grid-cols-[0.95fr_0.7fr_1fr_1fr]">
            <span>Moment</span>
            <span className="hidden md:block">Module</span>
            <span className="hidden md:block">Egoric controls</span>
            <span className="hidden md:block">Not for</span>
          </div>
          {decisionRows.map((row) => (
            <article key={row.moment} className="grid gap-4 border-b border-white/10 p-5 last:border-b-0 md:grid-cols-[0.95fr_0.7fr_1fr_1fr] md:gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne md:hidden">Moment</p>
                <p className="text-pretty mt-2 text-sm font-medium leading-7 text-bone md:mt-0">{row.moment}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne md:hidden">Module</p>
                <p className="mt-2 text-sm leading-7 text-silver md:mt-0">{row.module}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne md:hidden">Egoric controls</p>
                <p className="mt-2 text-sm leading-7 text-silver md:mt-0">{row.control}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne md:hidden">Not for</p>
                <p className="mt-2 text-sm leading-7 text-silver md:mt-0">{row.notFor}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Service Flow"
        title="Từ brief đến report, mọi thứ cần structure."
        intro="Một seeding campaign tốt không bắt đầu bằng việc viết comment. Nó bắt đầu bằng việc hiểu objective và market."
        headerClassName="max-w-6xl"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {packageFlow.map((item, index) => (
            <div key={item} className="premium-card min-h-32 rounded border border-white/10 bg-obsidian/60 p-4">
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
            <h2 className="text-balance mt-3 font-serif text-4xl font-semibold text-bone">Gửi brief, Egoric sẽ đề xuất seeding direction.</h2>
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

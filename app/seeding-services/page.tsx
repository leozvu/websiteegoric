import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { ServiceDetails } from "@/components/sections/service-details";
import { ServiceOverview } from "@/components/sections/service-overview";
import { services } from "@/lib/content";

export const metadata = {
  title: "Dịch vụ Seeding",
  description:
    "Dịch vụ seeding ra mắt, seeding cộng đồng, seeding social proof, seeding nhận thức, hỗ trợ campaign và hỗ trợ danh tiếng."
};

const packageFlow = [
  "Brief mục tiêu truyền thông",
  "Map khán giả và cộng đồng",
  "Thiết kế góc thông điệp",
  "Xây kịch bản seeding",
  "Kích hoạt theo đợt",
  "Theo dõi và báo cáo"
];

export default function SeedingServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Dịch Vụ Seeding"
        title="Các gói seeding chiến lược cho launch, social proof và nhận thức thị trường."
        intro="Egoric chỉ tập trung vào seeding. Mỗi dịch vụ được xây để tạo lớp thảo luận đúng ngữ cảnh, có kiểm soát và có thể báo cáo."
        stats={[
          { value: "06", label: "Nhóm dịch vụ" },
          { value: "VN", label: "Thị trường chính" },
          { value: "100%", label: "Tập trung seeding" }
        ]}
      />
      <ServiceOverview />

      <SectionShell
        eyebrow="Cách Chọn Dịch Vụ"
        title="Chọn theo thời điểm campaign, không chọn theo số lượng bình luận."
        intro="Nếu bạn chưa chắc nên bắt đầu từ đâu, Egoric sẽ đọc brief và đề xuất module phù hợp nhất với mục tiêu truyền thông."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <article key={service.title} className="rounded border border-white/10 bg-white/[0.035] p-6">
              <h2 className="font-serif text-3xl font-semibold text-bone">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-silver">{service.solves}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {services.slice(3).map((service) => (
            <article key={service.title} className="rounded border border-white/10 bg-white/[0.035] p-6">
              <h2 className="font-serif text-3xl font-semibold text-bone">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-silver">{service.solves}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Luồng Dịch Vụ"
        title="Từ brief đến báo cáo, mọi thứ cần có cấu trúc."
        intro="Một campaign seeding tốt không bắt đầu bằng việc viết comment. Nó bắt đầu bằng việc hiểu mục tiêu và thị trường."
      >
        <div className="grid gap-3 md:grid-cols-6">
          {packageFlow.map((item, index) => (
            <div key={item} className="rounded border border-white/10 bg-obsidian/60 p-4">
              <span className="text-xs text-champagne">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-4 text-sm font-medium leading-6 text-bone">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <ServiceDetails />

      <section className="px-5 py-20 sm:px-8">
        <div className="glass mx-auto flex max-w-7xl flex-col gap-6 rounded p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">Bước Tiếp Theo</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-bone">Gửi brief, Egoric sẽ đề xuất lớp thảo luận.</h2>
          </div>
          <Link
            href="/contact"
            className="button-shine inline-flex items-center justify-center gap-3 rounded-full bg-champagne px-6 py-4 text-sm font-bold text-obsidian"
          >
            Lên kế hoạch seeding
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

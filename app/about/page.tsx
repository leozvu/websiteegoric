import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { FounderNote } from "@/components/sections/founder-note";
import { TrustSection } from "@/components/sections/trust-section";

export const metadata = {
  title: "Về Egoric",
  description: "Về Egoric Agency, strategic seeding studio cho thị trường Việt Nam."
};

const principles = [
  {
    title: "Single focus: seeding",
    copy: "Egoric không định vị như full-service agency. Chúng tôi build conversation layer quanh launch, campaign, community và perception."
  },
  {
    title: "Vietnam context first",
    copy: "Mỗi community có culture, language, điểm nhạy cảm và reaction pattern riêng. Seeding hiệu quả bắt đầu từ việc đọc đúng context."
  },
  {
    title: "Risk controlled",
    copy: "Message phải đi đúng hướng, đúng tone và tránh tạo hiểu lầm. Egoric ưu tiên communication safety trước volume."
  }
];

const operatingBeliefs = [
  "Không seeding random chỉ để làm đầy comment.",
  "Không dùng review giả, mạo danh hoặc tuyên bố sai sự thật.",
  "Không tấn công đối thủ hoặc kích động toxic conversation.",
  "Không hứa viral. Egoric xây momentum có cấu trúc.",
  "Không tách seeding khỏi communication objective của brand."
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Về Egoric"
        title="Strategic seeding studio cho brand Việt cần momentum."
        intro="Egoric Agency tập trung vào một năng lực chính: strategic seeding. Chúng tôi giúp brand đi vào đúng community, đúng conversation và đúng timing."
        stats={[
          { value: "01", label: "Core focus" },
          { value: "06", label: "Process steps" },
          { value: "0", label: "Full-service lan man" }
        ]}
      />

      <SectionShell
        eyebrow="Positioning"
        title="Egoric không bán noise. Egoric design conversation."
        intro="Seeding không phải một tập hợp comment rời rạc. Với Egoric, seeding là system gồm audience mapping, message angle, discussion script, placement, sentiment monitoring và insight report."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="glass rounded p-6">
              <h2 className="text-balance font-serif text-3xl font-semibold text-bone">{item.title}</h2>
              <p className="text-pretty mt-4 text-sm leading-7 text-silver">{item.copy}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Operating Standard"
        title="Rõ ràng về những gì Egoric không làm."
        intro="Đây là ranh giới để Egoric không bị nhìn như một dịch vụ spam comment rẻ tiền."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {operatingBeliefs.map((item, index) => (
            <div key={item} className="flex gap-5 rounded border border-white/10 bg-white/[0.035] p-5">
              <span className="font-serif text-3xl text-champagne">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-pretty text-sm leading-7 text-bone">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <TrustSection />
      <FounderNote />
    </main>
  );
}

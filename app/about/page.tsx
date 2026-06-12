import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { FounderNote } from "@/components/sections/founder-note";
import { TrustSection } from "@/components/sections/trust-section";

export const metadata = {
  title: "Về Egoric",
  description: "Về Egoric Agency, studio seeding chiến lược và kích hoạt thảo luận cho thị trường Việt Nam."
};

const principles = [
  {
    title: "Tập trung vào seeding",
    copy: "Egoric không định vị như agency full-service. Chúng tôi xây lớp thảo luận quanh launch, campaign, cộng đồng và nhận thức."
  },
  {
    title: "Tôn trọng ngữ cảnh Việt Nam",
    copy: "Mỗi cộng đồng có văn hóa, ngôn ngữ, điểm nhạy cảm và cách phản ứng riêng. Seeding hiệu quả bắt đầu từ việc đọc đúng ngữ cảnh."
  },
  {
    title: "Kiểm soát rủi ro",
    copy: "Thông điệp phải đi đúng hướng, đúng tone và tránh tạo hiểu lầm. Egoric ưu tiên sự an toàn truyền thông trước volume."
  }
];

const operatingBeliefs = [
  "Không seeding ngẫu nhiên chỉ để làm đầy bình luận.",
  "Không dùng review giả, mạo danh hoặc tuyên bố sai sự thật.",
  "Không tấn công đối thủ hoặc kích động thảo luận độc hại.",
  "Không hứa viral. Egoric xây momentum có cấu trúc.",
  "Không tách seeding khỏi mục tiêu truyền thông của thương hiệu."
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Về Egoric"
        title="Một studio chuyên xây momentum thảo luận cho thương hiệu Việt."
        intro="Egoric Agency tập trung vào một năng lực chính: seeding chiến lược. Chúng tôi giúp thương hiệu đi vào đúng cộng đồng, đúng cuộc trò chuyện và đúng thời điểm."
        stats={[
          { value: "01", label: "Năng lực lõi" },
          { value: "06", label: "Bước triển khai" },
          { value: "0", label: "Full-service lan man" }
        ]}
      />

      <SectionShell
        eyebrow="Định Vị"
        title="Egoric không bán tiếng ồn. Egoric thiết kế lớp thảo luận."
        intro="Seeding không phải một tập hợp bình luận rời rạc. Với Egoric, seeding là một hệ thống gồm audience mapping, message angle, kịch bản thảo luận, đặt thông điệp, quan sát sentiment và báo cáo insight."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="glass rounded p-6">
              <h2 className="font-serif text-3xl font-semibold text-bone">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-silver">{item.copy}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Nguyên Tắc Vận Hành"
        title="Rõ ràng về những gì Egoric không làm."
        intro="Đây là phần quan trọng để Egoric không bị nhìn như một dịch vụ spam comment rẻ tiền."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {operatingBeliefs.map((item, index) => (
            <div key={item} className="flex gap-5 rounded border border-white/10 bg-white/[0.035] p-5">
              <span className="font-serif text-3xl text-champagne">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-sm leading-7 text-bone">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <TrustSection />
      <FounderNote />
    </main>
  );
}

import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { MethodTimeline } from "@/components/sections/method-timeline";
import { SeedingSystem } from "@/components/sections/seeding-system";
import { WhyEgoric } from "@/components/sections/why-egoric";
import { methodSteps } from "@/lib/content";

export const metadata = {
  title: "Phương pháp",
  description: "Phương pháp Seeding Egoric: Chẩn đoán, Lập bản đồ, Viết kịch bản, Kích hoạt, Theo dõi và Tối ưu."
};

const controls = [
  "Tone of voice và sắc thái phản hồi",
  "Mức độ nhạy cảm của chủ đề",
  "Ngữ cảnh cộng đồng trước khi đặt thông điệp",
  "Điểm ma sát, phản đối và câu hỏi lặp lại",
  "Ranh giới compliance và thông tin được phép nói"
];

export default function MethodPage() {
  return (
    <main>
      <PageHero
        eyebrow="Phương Pháp Egoric"
        title="Một hệ thống seeding phải được thiết kế trước khi được kích hoạt."
        intro="Egoric dùng quy trình sáu bước để biến mục tiêu truyền thông thành lớp thảo luận có thể kiểm soát, theo dõi và tối ưu."
        stats={[
          { value: "06", label: "Bước" },
          { value: "03", label: "Lớp kiểm soát" },
          { value: "01", label: "Mục tiêu chính" }
        ]}
      />
      <MethodTimeline />
      <SeedingSystem />

      <SectionShell
        eyebrow="Chi Tiết Quy Trình"
        title="Mỗi bước trả lời một câu hỏi chiến lược."
        intro="Nếu không trả lời được các câu hỏi này, campaign rất dễ biến thành hoạt động rời rạc."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {methodSteps.map((step) => (
            <article key={step.title} className="rounded border border-white/10 bg-white/[0.035] p-6">
              <span className="font-serif text-4xl text-champagne">{step.label}</span>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-bone">{step.title}</h2>
              <p className="mt-4 text-sm leading-7 text-silver">{step.copy}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Kiểm Soát Rủi Ro"
        title="Seeding tốt không chỉ tạo thảo luận. Nó còn giữ thảo luận đi đúng hướng."
        intro="Egoric đặt các lớp kiểm soát để thương hiệu không bị kéo vào cuộc trò chuyện sai ngữ cảnh."
      >
        <div className="grid gap-3 md:grid-cols-5">
          {controls.map((item) => (
            <div key={item} className="rounded border border-white/10 bg-obsidian/60 p-5">
              <p className="text-sm font-medium leading-7 text-bone">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <WhyEgoric />
    </main>
  );
}

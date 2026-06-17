import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { MethodTimeline } from "@/components/sections/method-timeline";
import { SeedingSystem } from "@/components/sections/seeding-system";
import { WhyEgoric } from "@/components/sections/why-egoric";
import { methodSteps } from "@/lib/content";

export const metadata = {
  title: "Method",
  description: "Egoric seeding method: Diagnose, Map, Script, Activate, Monitor và Optimize."
};

const controls = [
  "Tone of voice & response nuance",
  "Mức độ nhạy cảm của topic",
  "Community context trước placement",
  "Friction point, objection và câu hỏi lặp lại",
  "Compliance boundary và thông tin được phép nói",
  "Response path khi sentiment đổi hướng",
  "Escalation note cho topic nhạy cảm",
  "Insight loop sau mỗi seeding wave"
];

export default function MethodPage() {
  return (
    <main>
      <PageHero
        eyebrow="Egoric Method"
        title="Seeding system phải được design trước khi activate."
        intro="Egoric dùng process sáu bước để biến communication objective thành seeding system có thể control, monitor và optimize."
        stats={[
          { value: "06", label: "Steps" },
          { value: "03", label: "Control layers" },
          { value: "01", label: "Core objective" }
        ]}
      />
      <MethodTimeline />
      <SeedingSystem />

      <SectionShell
        eyebrow="Process Detail"
        title="Mỗi bước trả lời một strategic question."
        intro="Nếu không trả lời được các câu hỏi này, campaign rất dễ biến thành activity rời rạc."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {methodSteps.map((step) => (
            <article key={step.title} className="rounded border border-white/10 bg-white/[0.035] p-6">
              <span className="font-serif text-4xl text-champagne">{step.label}</span>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-bone">{step.title}</h2>
              <p className="text-pretty mt-4 text-sm leading-7 text-silver">{step.copy}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Risk Control"
        title="Seeding tốt không chỉ tạo conversation. Nó giữ conversation đi đúng hướng."
        intro="Egoric đặt control layer để brand không bị kéo vào cuộc trò chuyện sai context."
        headerClassName="max-w-6xl"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {controls.map((item) => (
            <div key={item} className="premium-card min-h-32 rounded border border-white/10 bg-obsidian/60 p-5">
              <p className="phrase-lock text-sm font-medium leading-7 text-bone">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <WhyEgoric />
    </main>
  );
}

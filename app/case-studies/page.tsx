import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { CaseStudies } from "@/components/sections/case-studies";
import { Reporting } from "@/components/sections/reporting";
import { caseStudies } from "@/lib/content";

export const metadata = {
  title: "Engagement Scenarios",
  description: "Engagement scenarios cho product launch, awareness và campaign conversation support."
};

const evidence = [
  "Initial conversation objective",
  "Community/channel selected",
  "Message angle deployed",
  "Market reaction highlight",
  "Learning & next-step recommendation"
];

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Engagement Scenarios"
        title="Scenario cho brand cần market signal rõ hơn."
        intro="Egoric trình bày work theo challenge, move, signal và campaign evidence. Khi có dữ liệu thật, phần này nên dùng verified signal thay vì claim phóng đại."
        stats={[
          { value: "03", label: "Core scenarios" },
          { value: "05", label: "Evidence types" },
          { value: "0", label: "Hứa viral giả" }
        ]}
      />
      <CaseStudies />

      <SectionShell
        eyebrow="Scenario Structure"
        title="Mỗi engagement nên chứng minh movement, không chỉ activity count."
        intro="Một engagement tốt cần cho thấy communication problem, cách Egoric design seeding path và market signal sau khi triển khai."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <article key={study.title} className="glass rounded p-6">
              <span className="font-serif text-4xl text-champagne">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="text-balance mt-5 font-serif text-3xl font-semibold text-bone">{study.title}</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-silver">
                <p><span className="text-bone">Challenge:</span> {study.challenge}</p>
                <p><span className="text-bone">Move:</span> {study.move}</p>
                <p><span className="text-bone">Signal:</span> {study.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Campaign Evidence"
        title="Khi thay case thật, hãy dùng verified signal."
        intro="Egoric tránh kể case theo kiểu phóng đại. Nội dung nên dựa trên tín hiệu quan sát được và insight sau campaign."
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
          {evidence.map((item) => (
            <div key={item} className="rounded border border-white/10 bg-white/[0.035] p-5">
              <p className="phrase-lock text-sm font-medium leading-7 text-bone">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <Reporting />
    </main>
  );
}

import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { CaseStudies } from "@/components/sections/case-studies";
import { Reporting } from "@/components/sections/reporting";
import { caseStudies } from "@/lib/content";

export const metadata = {
  title: "Case Study",
  description: "Case study format cho product launch, awareness và campaign conversation support."
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
        eyebrow="Case Study"
        title="Case format cho brand cần market signal."
        intro="Những case này là placeholder có structure. Khi có dữ liệu thật, chỉ cần thay challenge, move, signal và campaign evidence."
        stats={[
          { value: "03", label: "Sample cases" },
          { value: "05", label: "Evidence types" },
          { value: "0", label: "Hứa viral giả" }
        ]}
      />
      <CaseStudies />

      <SectionShell
        eyebrow="Case Structure"
        title="Mỗi case nên chứng minh conversation movement, không chỉ activity count."
        intro="Case study tốt cần cho thấy communication problem, cách Egoric design conversation layer và market signal sau khi triển khai."
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

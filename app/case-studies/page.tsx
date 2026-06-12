import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { CaseStudies } from "@/components/sections/case-studies";
import { Reporting } from "@/components/sections/reporting";
import { caseStudies } from "@/lib/content";

export const metadata = {
  title: "Case Study",
  description: "Các case seeding mẫu cho ra mắt sản phẩm, nhận biết thương hiệu và hỗ trợ thảo luận campaign."
};

const evidence = [
  "Mục tiêu thảo luận ban đầu",
  "Cộng đồng và kênh được chọn",
  "Góc thông điệp đã triển khai",
  "Phản ứng nổi bật của thị trường",
  "Bài học và đề xuất bước tiếp theo"
];

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case Study"
        title="Các tình huống seeding mẫu cho thương hiệu cần tín hiệu thị trường."
        intro="Những case này là placeholder có cấu trúc. Khi có dữ liệu thật, chỉ cần thay challenge, move, outcome và bằng chứng campaign."
        stats={[
          { value: "03", label: "Case mẫu" },
          { value: "05", label: "Loại bằng chứng" },
          { value: "0", label: "Hứa viral giả" }
        ]}
      />
      <CaseStudies />

      <SectionShell
        eyebrow="Cấu Trúc Case"
        title="Mỗi case nên chứng minh chuyển động thảo luận, không chỉ số lượng activity."
        intro="Case study tốt cần cho thấy vấn đề truyền thông, cách Egoric thiết kế lớp thảo luận và tín hiệu thị trường sau khi triển khai."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <article key={study.title} className="glass rounded p-6">
              <span className="font-serif text-4xl text-champagne">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-5 font-serif text-3xl font-semibold text-bone">{study.title}</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-silver">
                <p><span className="text-bone">Bài toán:</span> {study.challenge}</p>
                <p><span className="text-bone">Cách làm:</span> {study.move}</p>
                <p><span className="text-bone">Tín hiệu:</span> {study.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Bằng Chứng Campaign"
        title="Khi thay case thật, hãy thay bằng dữ liệu có kiểm chứng."
        intro="Egoric tránh kể case theo kiểu phóng đại. Nội dung nên dựa trên tín hiệu quan sát được và insight sau campaign."
      >
        <div className="grid gap-3 md:grid-cols-5">
          {evidence.map((item) => (
            <div key={item} className="rounded border border-white/10 bg-white/[0.035] p-5">
              <p className="text-sm font-medium leading-7 text-bone">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <Reporting />
    </main>
  );
}

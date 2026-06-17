import { ContactBriefForm } from "@/components/contact-brief-form";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";

export const metadata = {
  title: "Contact",
  description: "Gửi campaign brief để lên kế hoạch seeding cùng Egoric Agency."
};

const prepItems = [
  "Bạn đang launch gì?",
  "Audience cần impact là ai?",
  "Community/channel nào quan trọng?",
  "Moment nào cần momentum?",
  "Có topic nhạy cảm hay compliance không?",
  "Message nào brand phải giữ đúng?",
  "Proof layer hiện tại đang thiếu gì?",
  "Bạn cần report theo tín hiệu nào?"
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Send brief. Build momentum."
        intro="Form này giúp Egoric hiểu objective, audience, channel, timing và risk trước khi đề xuất seeding direction cho campaign."
        stats={[
          { value: "10", label: "Brief fields" },
          { value: "01", label: "Core objective" },
          { value: "24h", label: "Response signal" }
        ]}
      />

      <SectionShell
        eyebrow="Before You Send"
        title="Một good brief giúp seeding bớt mơ hồ."
        intro="Bạn không cần chuẩn bị quá nhiều. Chỉ cần nói rõ thứ cần launch, nhóm cần impact và điều cần control."
        headerClassName="max-w-6xl"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {prepItems.map((item, index) => (
            <div key={item} className="premium-card min-h-32 rounded border border-white/10 bg-white/[0.035] p-5">
              <span className="text-xs text-champagne">{String(index + 1).padStart(2, "0")}</span>
              <p className="phrase-lock mt-4 text-sm font-medium leading-7 text-bone">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Campaign Brief"
        title="Plan a seeding sprint."
        intro="Chia sẻ campaign context. Form sẽ tạo một brief sạch để bạn gửi qua email, Zalo hoặc kênh liên hệ ưu tiên với Egoric."
      >
        <ContactBriefForm />
      </SectionShell>
    </main>
  );
}

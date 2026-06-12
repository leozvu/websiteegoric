import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";

export const metadata = {
  title: "Liên hệ",
  description: "Lên kế hoạch chiến dịch seeding cùng Egoric Agency."
};

const inputClass =
  "w-full rounded border border-white/10 bg-obsidian/70 px-4 py-4 text-sm text-bone outline-none transition placeholder:text-silver/55 focus:border-champagne/70";

const prepItems = [
  "Bạn đang launch điều gì?",
  "Ai là nhóm cần nhìn thấy thảo luận?",
  "Kênh/cộng đồng nào đang quan trọng?",
  "Thời điểm nào cần tạo momentum?",
  "Có chủ đề nhạy cảm hoặc compliance nào không?"
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Liên Hệ"
        title="Gửi brief để Egoric thiết kế lớp thảo luận cho campaign."
        intro="Form này giúp Egoric hiểu mục tiêu, khán giả, kênh, thời điểm và rủi ro trước khi đề xuất hướng seeding."
        stats={[
          { value: "10", label: "Trường brief" },
          { value: "01", label: "Mục tiêu chính" },
          { value: "24h", label: "Gợi ý phản hồi" }
        ]}
      />

      <SectionShell
        eyebrow="Trước Khi Gửi"
        title="Một brief tốt giúp seeding bớt mơ hồ."
        intro="Bạn không cần chuẩn bị quá nhiều. Chỉ cần nói rõ điều cần launch, nhóm cần tác động và điều cần kiểm soát."
      >
        <div className="grid gap-3 md:grid-cols-5">
          {prepItems.map((item, index) => (
            <div key={item} className="rounded border border-white/10 bg-white/[0.035] p-5">
              <span className="text-xs text-champagne">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-4 text-sm font-medium leading-7 text-bone">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Campaign Brief"
        title="Lên kế hoạch seeding."
        intro="Chia sẻ bối cảnh campaign. Egoric sẽ dùng thông tin này để hiểu khán giả, kênh, thời điểm, mức độ rủi ro và lớp thảo luận bạn cần."
      >
        <form className="glass grid gap-5 rounded p-6 md:grid-cols-2 md:p-8">
          <label className="grid gap-2 text-sm font-medium text-bone">
            Họ tên
            <input className={inputClass} placeholder="Tên của bạn" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-bone">
            Công ty
            <input className={inputClass} placeholder="Tên công ty hoặc thương hiệu" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-bone md:col-span-2">
            Thông tin liên hệ
            <input className={inputClass} placeholder="Email, số điện thoại, Zalo hoặc kênh liên hệ ưu tiên" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-bone md:col-span-2">
            Bạn đang launch hoặc quảng bá điều gì?
            <textarea className={inputClass} rows={4} placeholder="Sản phẩm, dịch vụ, campaign, sự kiện hoặc offer" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-bone">
            Khán giả mục tiêu
            <input className={inputClass} placeholder="Ai cần nói về điều này?" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-bone">
            Kênh hoặc cộng đồng mục tiêu
            <input className={inputClass} placeholder="Group Facebook, TikTok, forum, cộng đồng địa phương..." />
          </label>
          <label className="grid gap-2 text-sm font-medium text-bone">
            Timeline
            <input className={inputClass} placeholder="Ngày launch hoặc khoảng thời gian campaign" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-bone">
            Khoảng ngân sách tùy chọn
            <input className={inputClass} placeholder="Không bắt buộc" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-bone md:col-span-2">
            Loại campaign
            <select className={inputClass} defaultValue="">
              <option value="" disabled>
                Chọn một loại
              </option>
              <option>Launch</option>
              <option>Awareness</option>
              <option>Social proof</option>
              <option>Hỗ trợ campaign</option>
              <option>Hỗ trợ danh tiếng</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-bone md:col-span-2">
            Có chủ đề nhạy cảm hoặc vấn đề compliance nào không?
            <textarea className={inputClass} rows={4} placeholder="Cho Egoric biết điều gì cần xử lý thận trọng" />
          </label>
          <div className="md:col-span-2">
            <button
              type="button"
              className="button-shine rounded-full bg-champagne px-7 py-4 text-sm font-bold text-obsidian shadow-glow transition hover:bg-bone"
            >
              Gửi Brief Chiến Dịch
            </button>
          </div>
        </form>
      </SectionShell>
    </main>
  );
}

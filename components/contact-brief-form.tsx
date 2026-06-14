"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Copy, Mail } from "lucide-react";

const inputClass =
  "w-full rounded border border-white/10 bg-obsidian/70 px-4 py-4 text-sm text-bone outline-none transition placeholder:text-silver/55 focus:border-champagne/70 focus:ring-2 focus:ring-champagne/20";

type BriefFields = {
  name: string;
  company: string;
  contact: string;
  launch: string;
  audience: string;
  channels: string;
  timeline: string;
  budget: string;
  campaignType: string;
  risk: string;
};

const initialFields: BriefFields = {
  name: "",
  company: "",
  contact: "",
  launch: "",
  audience: "",
  channels: "",
  timeline: "",
  budget: "",
  campaignType: "",
  risk: ""
};

export function ContactBriefForm() {
  const [fields, setFields] = useState<BriefFields>(initialFields);
  const [status, setStatus] = useState<"idle" | "copied" | "ready">("idle");

  const briefText = useMemo(
    () => [
      "Egoric Seeding Brief",
      "",
      `Name: ${fields.name}`,
      `Company / brand: ${fields.company}`,
      `Contact: ${fields.contact}`,
      `Launch / promotion context: ${fields.launch}`,
      `Target audience: ${fields.audience}`,
      `Target channel / community: ${fields.channels}`,
      `Timeline: ${fields.timeline}`,
      `Budget range: ${fields.budget || "Not specified"}`,
      `Campaign type: ${fields.campaignType || "Not selected"}`,
      `Sensitive topic / compliance: ${fields.risk || "Not specified"}`
    ].join("\n"),
    [fields]
  );

  const mailHref = `mailto:?subject=${encodeURIComponent("Egoric seeding brief")}&body=${encodeURIComponent(briefText)}`;

  const updateField = (field: keyof BriefFields, value: string) => {
    setFields((current) => ({ ...current, [field]: value }));
    setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(briefText);
      setStatus("copied");
    } catch {
      setStatus("ready");
    }
  };

  return (
    <form className="glass grid gap-5 rounded p-6 md:grid-cols-2 md:p-8" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-medium text-bone" htmlFor="brief-name">
        Họ tên
        <input
          id="brief-name"
          name="name"
          className={inputClass}
          placeholder="Tên của bạn"
          value={fields.name}
          onChange={(event) => updateField("name", event.target.value)}
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-bone" htmlFor="brief-company">
        Công ty
        <input
          id="brief-company"
          name="company"
          className={inputClass}
          placeholder="Tên công ty hoặc thương hiệu"
          value={fields.company}
          onChange={(event) => updateField("company", event.target.value)}
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-bone md:col-span-2" htmlFor="brief-contact">
        Contact info
        <input
          id="brief-contact"
          name="contact"
          className={inputClass}
          placeholder="Email, số điện thoại, Zalo hoặc kênh liên hệ ưu tiên"
          value={fields.contact}
          onChange={(event) => updateField("contact", event.target.value)}
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-bone md:col-span-2" htmlFor="brief-launch">
        Bạn đang launch hoặc promote điều gì?
        <textarea
          id="brief-launch"
          name="launch"
          className={inputClass}
          rows={4}
          placeholder="Sản phẩm, dịch vụ, campaign, sự kiện hoặc offer"
          value={fields.launch}
          onChange={(event) => updateField("launch", event.target.value)}
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-bone" htmlFor="brief-audience">
        Target audience
        <input
          id="brief-audience"
          name="audience"
          className={inputClass}
          placeholder="Ai cần biết, tin hoặc nói về điều này?"
          value={fields.audience}
          onChange={(event) => updateField("audience", event.target.value)}
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-bone" htmlFor="brief-channels">
        Target channel/community
        <input
          id="brief-channels"
          name="channels"
          className={inputClass}
          placeholder="Group Facebook, TikTok, forum, cộng đồng địa phương..."
          value={fields.channels}
          onChange={(event) => updateField("channels", event.target.value)}
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-bone" htmlFor="brief-timeline">
        Timeline
        <input
          id="brief-timeline"
          name="timeline"
          className={inputClass}
          placeholder="Ngày launch hoặc khoảng thời gian campaign"
          value={fields.timeline}
          onChange={(event) => updateField("timeline", event.target.value)}
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-bone" htmlFor="brief-budget">
        Budget range optional
        <input
          id="brief-budget"
          name="budget"
          className={inputClass}
          placeholder="Không bắt buộc"
          value={fields.budget}
          onChange={(event) => updateField("budget", event.target.value)}
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-bone md:col-span-2" htmlFor="brief-campaign-type">
        Campaign type
        <select
          id="brief-campaign-type"
          name="campaignType"
          className={inputClass}
          value={fields.campaignType}
          onChange={(event) => updateField("campaignType", event.target.value)}
        >
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
      <label className="grid gap-2 text-sm font-medium text-bone md:col-span-2" htmlFor="brief-risk">
        Có topic nhạy cảm hoặc compliance issue nào không?
        <textarea
          id="brief-risk"
          name="risk"
          className={inputClass}
          rows={4}
          placeholder="Cho Egoric biết điều gì cần xử lý thận trọng"
          value={fields.risk}
          onChange={(event) => updateField("risk", event.target.value)}
        />
      </label>

      <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          className="button-shine inline-flex items-center justify-center gap-3 rounded-full bg-champagne px-7 py-4 text-sm font-bold text-obsidian shadow-glow transition hover:bg-bone focus:outline-none focus:ring-2 focus:ring-champagne/40"
        >
          Tạo brief để gửi
          <Copy size={17} />
        </button>
        <a
          href={mailHref}
          className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-bone transition hover:border-champagne/70 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-champagne/30"
        >
          Mở email app
          <Mail size={17} />
        </a>
      </div>

      {status !== "idle" && (
        <div className="md:col-span-2 rounded border border-champagne/25 bg-champagne/10 p-4 text-sm leading-7 text-bone">
          {status === "copied"
            ? "Brief đã được copy. Bạn có thể paste vào Zalo, email hoặc kênh liên hệ với Egoric."
            : "Brief đã sẵn sàng. Nếu trình duyệt không cho copy tự động, hãy dùng nút mở email app hoặc copy nội dung bên dưới."}
        </div>
      )}

      {status === "ready" && (
        <textarea
          className="md:col-span-2 min-h-48 rounded border border-white/10 bg-obsidian/70 p-4 text-xs leading-6 text-silver"
          readOnly
          value={briefText}
          aria-label="Generated brief"
        />
      )}
    </form>
  );
}

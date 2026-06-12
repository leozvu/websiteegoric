import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function TrustSection() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="glass grid gap-8 rounded p-8 md:grid-cols-[auto_1fr] md:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-champagne/40 text-champagne">
            <ShieldCheck size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">Nguyên Tắc Tin Cậy</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-bone sm:text-5xl">
              Hỗ trợ chiến lược, không xây trên tuyên bố giả.
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-silver">
              Egoric không xây chiến dịch dựa trên review giả, mạo danh, quấy rối hoặc thông tin sai lệch gây hại.
              Chúng tôi tập trung vào đặt thông điệp chiến lược, thiết kế thảo luận, đọc cộng đồng và hỗ trợ
              truyền thông có kiểm soát.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

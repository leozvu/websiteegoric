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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">Trust Standard</p>
            <h2 className="text-balance mt-4 font-serif text-4xl font-semibold text-bone sm:text-5xl">
              Strategic support, không xây trên proof giả.
            </h2>
            <p className="text-pretty mt-5 max-w-4xl text-base leading-8 text-silver">
              Egoric không xây campaign trên review giả, mạo danh, quấy rối hoặc thông tin sai lệch gây hại.
              Chúng tôi tập trung vào strategic placement, conversation design, community reading và controlled
              communication support.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

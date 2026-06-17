import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.16),transparent_34rem)]" />
      <Reveal className="relative mx-auto max-w-5xl text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-champagne">Start A Seeding Sprint</p>
        <h2 className="text-balance font-serif text-5xl font-semibold leading-[0.98] text-bone sm:text-7xl">
          Cần market bắt đầu nói về bạn?
        </h2>
        <p className="text-pretty mx-auto mt-7 max-w-3xl text-lg leading-8 text-silver">
          Cho chúng tôi biết bạn đang launch gì, cần impact nhóm nào và muốn xây perception ra sao.
          Egoric sẽ map audience, channel, risk và đề xuất seeding direction phía sau campaign.
        </p>
        <div className="mx-auto mt-7 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
          {["Send context", "Map signal path", "Receive sprint direction"].map((item, index) => (
            <div key={item} className="rounded border border-white/10 bg-white/[0.035] p-4 text-sm font-medium text-bone">
              <span className="mb-3 block text-xs text-champagne">{String(index + 1).padStart(2, "0")}</span>
              {item}
            </div>
          ))}
        </div>
        <Link
          href="/contact"
          className="button-shine mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-champagne px-7 py-4 text-sm font-bold text-obsidian shadow-glow transition hover:bg-bone"
        >
          Gửi brief seeding
          <ArrowRight size={17} />
        </Link>
      </Reveal>
    </section>
  );
}

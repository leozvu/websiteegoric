import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.16),transparent_34rem)]" />
      <Reveal className="relative mx-auto max-w-5xl text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-champagne">Bắt Đầu Chiến Dịch</p>
        <h2 className="font-serif text-5xl font-semibold leading-[0.95] text-bone sm:text-7xl">
          Cần thị trường bắt đầu nói về bạn?
        </h2>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-silver">
          Cho chúng tôi biết bạn đang launch điều gì, cần tiếp cận ai và muốn xây nhận thức nào.
          Egoric sẽ thiết kế lớp thảo luận phía sau campaign.
        </p>
        <Link
          href="/contact"
          className="button-shine mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-champagne px-7 py-4 text-sm font-bold text-obsidian shadow-glow transition hover:bg-bone"
        >
          Lên Kế Hoạch Seeding
          <ArrowRight size={17} />
        </Link>
      </Reveal>
    </section>
  );
}

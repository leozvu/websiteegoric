import { Reveal } from "@/components/motion/reveal";

export function FounderNote() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="thin-divider mb-12" />
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">Founder Note</p>
          <div>
            <h2 className="text-balance font-serif text-4xl font-semibold text-bone sm:text-6xl">
              Built by người làm communication thực chiến.
            </h2>
            <p className="text-pretty mt-6 text-lg leading-9 text-silver">
              Egoric Agency được dẫn dắt bởi Leoz Vu, một strategist trong marketing và truyền thông
              với kinh nghiệm thực chiến về brand communication, social content, sensitive comms
              và campaign execution. Seeding practice của Egoric được xây cho brand cần market conversation,
              không phải những vanity metric ồn ào nhưng rỗng.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

import { Reveal } from "@/components/motion/reveal";

export function Statement() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
      <Reveal className="relative mx-auto max-w-5xl text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-champagne">Brand Point of View</p>
        <h2 className="text-balance font-serif text-5xl font-semibold leading-[0.98] text-bone sm:text-7xl">
          Seeding không phải spam. Seeding là conversation design.
        </h2>
        <p className="text-pretty mx-auto mt-8 max-w-3xl text-lg leading-9 text-silver">
          Phần lớn thương hiệu xem seeding như vài comment lẻ tẻ. Egoric xem seeding như
          một communication layer có kiểm soát: đúng message, đúng audience, đúng context, đúng timing.
        </p>
      </Reveal>
    </section>
  );
}

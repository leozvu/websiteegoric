import { Reveal } from "@/components/motion/reveal";

export function FounderNote() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="thin-divider mb-12" />
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">Ghi Chú Từ Nhà Sáng Lập</p>
          <div>
            <h2 className="font-serif text-4xl font-semibold text-bone sm:text-6xl">
              Được xây bởi người làm truyền thông thực chiến.
            </h2>
            <p className="mt-6 text-lg leading-9 text-silver">
              Egoric Agency được dẫn dắt bởi Leoz Vu, một strategist trong marketing và truyền thông
              với kinh nghiệm thực chiến về truyền thông thương hiệu, nội dung social, xử lý truyền thông nhạy cảm
              và triển khai campaign. Thực hành seeding của Egoric được xây cho thương hiệu cần thảo luận thị trường,
              không phải những chỉ số ồn ào nhưng rỗng.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

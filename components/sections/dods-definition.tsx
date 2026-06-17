import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";

const pillars = [
  {
    label: "D",
    title: "Distribution",
    copy: "Xác định channel, community và placement context nơi conversation có khả năng tạo signal thật."
  },
  {
    label: "O",
    title: "Objective",
    copy: "Giữ mọi script, topic và timing bám vào communication objective thay vì activity rời rạc."
  },
  {
    label: "D",
    title: "Demand",
    copy: "Đọc friction, objection và buying trigger để message đi vào đúng nhu cầu thị trường."
  },
  {
    label: "S",
    title: "Signal",
    copy: "Monitor sentiment, quality conversation và insight để biết momentum đang đi đúng hướng."
  }
];

export function DodsDefinition() {
  return (
    <SectionShell
      eyebrow="DODS Model"
      title="Distribution, Objective, Demand, Signal."
      intro="Egoric vận hành seeding theo DODS để campaign có controlled conversation và readable market signal."
      className="border-y border-white/10 bg-white/[0.018]"
      headerClassName="max-w-none"
      titleClassName="lg:whitespace-nowrap lg:text-[clamp(3.05rem,4.7vw,4.25rem)]"
      introClassName="max-w-6xl"
    >
      <Reveal>
        <div className="grid overflow-hidden rounded border border-white/10 bg-obsidian/55 md:grid-cols-4">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="premium-card relative min-h-[320px] border-b border-white/10 p-6 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-serif text-5xl font-semibold text-champagne">{pillar.label}</span>
                <span className="text-xs font-semibold text-white/25">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-8 font-serif text-3xl font-semibold text-bone">{pillar.title}</h3>
              <p className="text-pretty mt-4 text-sm leading-7 text-silver">{pillar.copy}</p>
              <div className="absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-champagne/55 to-transparent" />
            </article>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

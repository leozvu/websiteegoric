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
      intro="Egoric vận hành seeding theo DODS: một model giúp campaign không chỉ có reach, mà có controlled conversation và market signal có thể đọc được."
      className="border-y border-white/10 bg-white/[0.018]"
    >
      <Reveal>
        <div className="grid overflow-hidden rounded border border-white/10 bg-obsidian/55 md:grid-cols-4">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <span className="font-serif text-5xl font-semibold text-champagne">{pillar.label}</span>
              <h3 className="mt-8 font-serif text-3xl font-semibold text-bone">{pillar.title}</h3>
              <p className="text-pretty mt-4 text-sm leading-7 text-silver">{pillar.copy}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

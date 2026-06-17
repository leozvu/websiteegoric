import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-champagne">Strategic Seeding Studio</p>
          <p className="mt-4 font-serif text-4xl font-semibold text-bone">Egoric Agency</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-silver">
            Strategic Seeding Studio. Egoric tạo conversation momentum có kiểm soát cho launch,
            community và market perception.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="button-shine inline-flex items-center justify-center gap-3 rounded-full bg-champagne px-6 py-4 text-sm font-bold text-obsidian shadow-glow transition hover:bg-bone focus:outline-none focus:ring-2 focus:ring-champagne/30"
            >
              Gửi brief seeding
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/method"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-bone transition hover:border-champagne/70 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-champagne/25"
            >
              Xem method
            </Link>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">Next step</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-silver">
              <p>1. Send launch or campaign context.</p>
              <p>2. Egoric maps audience, channel, risk and message angle.</p>
              <p>3. You receive a proposed seeding sprint direction.</p>
            </div>
          </div>
          <nav className="grid gap-3 text-sm text-silver">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-bone focus:outline-none focus:ring-2 focus:ring-champagne/25"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

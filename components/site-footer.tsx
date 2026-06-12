import Link from "next/link";
import { navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-serif text-3xl font-semibold text-bone">Egoric Agency</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-silver">
            Studio Seeding Chiến Lược & Kích Hoạt Thảo Luận. Egoric tạo momentum thảo luận
            có kiểm soát cho launch, cộng đồng và nhận thức thị trường.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm text-silver sm:grid-cols-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-bone">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

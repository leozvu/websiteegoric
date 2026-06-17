"use client";

import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed left-0 right-0 top-0 z-50 border-b px-5 backdrop-blur-2xl transition-all duration-500 sm:px-8",
        scrolled ? "border-white/10 bg-obsidian/88 shadow-[0_16px_60px_rgba(0,0,0,0.28)]" : "border-white/10 bg-obsidian/70"
      )}
    >
      <div className={clsx("mx-auto flex max-w-7xl items-center justify-between transition-all duration-500", scrolled ? "h-16" : "h-20")}>
        <Link href="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-champagne/30" aria-label="Egoric Agency home">
          <Image
            src="/brand/egoric-logo.jpg"
            alt="Egoric Agency"
            width={180}
            height={103}
            className={clsx("h-auto invert transition-all duration-500", scrolled ? "w-28 sm:w-36" : "w-36 sm:w-44")}
            priority
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-silver lg:flex xl:gap-7">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "relative whitespace-nowrap transition hover:text-bone focus:outline-none focus:ring-2 focus:ring-champagne/25",
                  active && "text-bone after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-champagne"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="button-shine hidden whitespace-nowrap rounded-full border border-champagne/40 px-5 py-3 text-sm font-semibold text-bone shadow-glow transition hover:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/30 lg:inline-flex"
        >
          Gửi brief seeding
        </Link>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-bone transition hover:border-champagne/50 focus:outline-none focus:ring-2 focus:ring-champagne/30 lg:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 pb-6 pt-2 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 text-base text-bone">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-2 py-3 text-silver transition hover:bg-white/5 hover:text-bone focus:outline-none focus:ring-2 focus:ring-champagne/25"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

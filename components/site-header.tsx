"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-obsidian/70 px-5 backdrop-blur-2xl sm:px-8">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Egoric Agency home">
          <Image
            src="/brand/egoric-logo.jpg"
            alt="Egoric Agency"
            width={180}
            height={103}
            className="h-auto w-36 invert sm:w-44"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-silver lg:flex xl:gap-7">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-bone">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="button-shine hidden whitespace-nowrap rounded-full border border-champagne/40 px-5 py-3 text-sm font-semibold text-bone shadow-glow transition hover:border-champagne lg:inline-flex"
        >
          Gửi brief seeding
        </Link>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-bone lg:hidden"
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
                className="rounded px-2 py-3 text-silver transition hover:bg-white/5 hover:text-bone"
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

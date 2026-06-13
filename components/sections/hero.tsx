"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CinematicSignalMedia } from "@/components/cinematic-signal-media";
import { SignalNetwork } from "@/components/sections/signal-network";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-14 pt-32 sm:px-8 lg:pb-20">
      <SignalNetwork />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-obsidian to-transparent" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-2 lg:items-end">
        <div>
          <motion.p
            className="mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-champagne"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Strategic Seeding Studio
          </motion.p>
          <h1 className="max-w-5xl text-balance font-serif text-5xl font-semibold leading-[0.92] text-bone sm:text-7xl lg:text-8xl xl:text-[7.2rem]">
            Seeding tạo market conversation cho brand cần momentum.
          </h1>
          <motion.p
            className="text-pretty mt-8 max-w-2xl text-lg leading-8 text-silver sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            Egoric Agency thiết kế strategic seeding campaign để brand đi vào đúng community,
            tạo social proof và điều hướng market perception rõ ràng.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.82 }}
          >
            <Link
              href="/contact"
              className="button-shine group inline-flex items-center justify-center gap-3 rounded-full bg-champagne px-6 py-4 text-sm font-bold text-obsidian shadow-glow transition hover:bg-bone"
            >
              Gửi brief seeding
              <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/method"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-bone transition hover:border-champagne/70 hover:bg-white/5"
            >
              Xem method
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="glass relative hidden min-h-[560px] overflow-hidden rounded p-6 lg:block"
          initial={{ opacity: 0, x: 42 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-5 text-xs uppercase tracking-[0.24em] text-silver">
            <span>Conversation layer</span>
            <span className="text-champagne">Live signal</span>
          </div>
          <div className="mt-6">
            <CinematicSignalMedia compact />
          </div>
          <div className="mt-7 space-y-4">
            {["Audience mapped", "Message angle tested", "Community context locked", "Sentiment scan live"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center justify-between rounded border border-white/10 bg-white/[0.035] p-4"
                  animate={{ opacity: [0.55, 1, 0.55] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <span className="phrase-lock text-sm text-bone">{item}</span>
                  <span className="h-2 w-2 rounded-full bg-champagne shadow-glow" />
                </motion.div>
              )
            )}
          </div>
          <div className="mt-6 rounded border border-signal/20 bg-signal/10 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-silver">Core line</p>
            <p className="text-balance mt-3 font-serif text-3xl leading-none text-bone">
              Egoric không bán noise. Egoric build conversation momentum có kiểm soát.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

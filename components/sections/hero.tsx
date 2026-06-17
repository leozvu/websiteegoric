"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PointerEvent } from "react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 95, damping: 30, mass: 0.55 });
  const smoothY = useSpring(pointerY, { stiffness: 95, damping: 30, mass: 0.55 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const ghostX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const ghostY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  const panelX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const panelY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (shouldReduceMotion || event.pointerType !== "mouse") {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-obsidian px-5 pb-16 pt-32 sm:px-8 lg:pb-20 lg:pt-28"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_42%,rgba(200,169,106,0.14),transparent_28rem),radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.055),transparent_24rem),linear-gradient(180deg,rgba(5,5,6,0)_0%,#050506_94%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:92px_92px] opacity-35" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[45%] hidden -translate-x-1/2 select-none whitespace-nowrap font-sans text-[18vw] font-black uppercase leading-none tracking-[-0.08em] text-bone/[0.045] lg:block"
        initial={{ opacity: 0, x: "-47%" }}
        animate={{ opacity: 1, x: "-50%" }}
        style={{ y: ghostY }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span className="inline-block" style={{ x: ghostX }}>
          Seeding
        </motion.span>
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-obsidian to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="max-w-3xl">
          <motion.p
            className="mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-champagne"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Strategic Seeding Studio
          </motion.p>
          <h1
            className="font-serif text-[clamp(3.35rem,7.1vw,6.55rem)] font-semibold leading-[0.91] text-bone"
            aria-label="Seeding tạo conversation có kiểm soát."
          >
            <span className="block whitespace-nowrap" aria-hidden="true">
              Seeding tạo{" "}
            </span>
            <span className="block whitespace-nowrap" aria-hidden="true">
              conversation{" "}
            </span>
            <span className="block whitespace-nowrap" aria-hidden="true">
              có kiểm soát.
            </span>
          </h1>
          <motion.p
            className="text-pretty mt-8 max-w-xl text-lg leading-8 text-silver sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            Egoric thiết kế seeding campaign để brand đi vào đúng community,
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
          className="relative mx-auto hidden min-h-[560px] w-full max-w-[620px] transform-gpu [transform-style:preserve-3d] md:block lg:min-h-[640px]"
          initial={{ opacity: 0, x: 42, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          style={shouldReduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <div className="absolute inset-4 rounded-[2rem] border border-white/10 bg-white/[0.025] shadow-[0_34px_120px_rgba(0,0,0,0.45)] backdrop-blur-sm" />
          <motion.div
            className="absolute inset-x-0 top-8 mx-auto h-[78%] w-[82%] overflow-hidden rounded-[2rem] border border-white/10 bg-obsidian shadow-glow"
            style={shouldReduceMotion ? undefined : { x: panelX, y: panelY }}
          >
            <Image
              src="/media/egoric-signal-film.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="scale-110 object-cover opacity-80 saturate-[0.78]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,transparent,rgba(5,5,6,0.72)_68%),linear-gradient(180deg,rgba(5,5,6,0.18),rgba(5,5,6,0.88))]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.035),transparent)] bg-[length:100%_8px] opacity-25" />
            <motion.div
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne/25"
              animate={shouldReduceMotion ? undefined : { scale: [0.86, 1.24, 0.86], opacity: [0.22, 0.5, 0.22] }}
              transition={shouldReduceMotion ? undefined : { duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/10 blur-3xl"
              animate={shouldReduceMotion ? undefined : { opacity: [0.22, 0.48, 0.22] }}
              transition={shouldReduceMotion ? undefined : { duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <Image
              src="/brand/egoric-logo.jpg"
              alt=""
              width={360}
              height={206}
              className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 invert opacity-[0.88] mix-blend-screen sm:w-80"
            />
            <div className="absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
          </motion.div>

          <motion.div
            className="absolute left-0 top-20 rounded-full border border-white/15 bg-bone/90 px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-obsidian shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur sm:left-4"
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.24 }}
          >
            Conversation layer
          </motion.div>
          <motion.div
            className="absolute right-0 top-36 rounded-full border border-champagne/30 bg-obsidian/78 px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-champagne shadow-glow backdrop-blur sm:right-5"
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.24 }}
          >
            Live signal
          </motion.div>
          <div className="absolute bottom-3 left-1/2 grid w-[92%] -translate-x-1/2 gap-3 rounded-[1.45rem] border border-white/10 bg-white/[0.055] p-3 backdrop-blur-xl sm:grid-cols-3">
            {["Audience map", "Message angle", "Sentiment scan"].map((item, index) => (
              <motion.div
                key={item}
                className="rounded-full border border-white/10 bg-obsidian/60 px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.13em] text-bone"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 1 + index * 0.08 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

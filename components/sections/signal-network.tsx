"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const nodes = [
  { x: "18%", y: "30%", label: "Audience" },
  { x: "42%", y: "18%", label: "Message Angle" },
  { x: "68%", y: "28%", label: "Community" },
  { x: "30%", y: "58%", label: "Timing" },
  { x: "56%", y: "66%", label: "Sentiment" },
  { x: "80%", y: "54%", label: "Reporting" }
];

export function SignalNetwork() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 24 });
  const sy = useSpring(my, { stiffness: 70, damping: 24 });
  const glowX = useTransform(sx, (value) => `${value}px`);
  const glowY = useTransform(sy, (value) => `${value}px`);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mx.set(event.clientX);
      my.set(event.clientY);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <Image
        src="/media/egoric-signal-film.webp"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover opacity-55 mix-blend-screen motion-reduce:hidden"
      />
      <div className="absolute inset-0 bg-obsidian/45" />
      <motion.div
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-signal/20 blur-3xl"
        style={{ left: glowX, top: glowY, x: "-50%", y: "-50%" }}
      />
      <div className="absolute inset-0 bg-radial-grid bg-[length:100%_100%,64px_64px,64px_64px] opacity-70" />
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="signalLine" x1="0%" x2="100%">
            <stop offset="0%" stopColor="rgba(200,169,106,0)" />
            <stop offset="45%" stopColor="rgba(200,169,106,0.7)" />
            <stop offset="100%" stopColor="rgba(76,141,255,0.1)" />
          </linearGradient>
        </defs>
        <path d="M18 30 C32 12 50 20 68 28" stroke="url(#signalLine)" strokeWidth="0.22" fill="none" />
        <path d="M18 30 C25 46 22 55 30 58" stroke="url(#signalLine)" strokeWidth="0.18" fill="none" />
        <path d="M42 18 C48 40 52 55 56 66" stroke="url(#signalLine)" strokeWidth="0.16" fill="none" />
        <path d="M68 28 C76 34 80 43 80 54" stroke="url(#signalLine)" strokeWidth="0.18" fill="none" />
        <path d="M30 58 C44 76 64 70 80 54" stroke="url(#signalLine)" strokeWidth="0.2" fill="none" />
      </svg>
      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="absolute rounded-full border border-champagne/40 bg-obsidian/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-bone shadow-glow backdrop-blur"
          style={{ left: node.x, top: node.y }}
          animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.04, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.35 }}
        >
          {node.label}
        </motion.div>
      ))}
      <motion.div
        className="absolute left-[50%] top-[42%] h-48 w-48 rounded-full border border-champagne/20"
        animate={{ scale: [1, 1.55], opacity: [0.35, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
      />
    </div>
  );
}

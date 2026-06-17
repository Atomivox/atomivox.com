"use client";

import { motion } from "motion/react";
import Button from "./Button";
import BarViz from "./BarViz";

const EASE = [0.16, 1, 0.3, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const meters = [
  { n: "01", label: "Position" },
  { n: "02", label: "Message" },
  { n: "03", label: "Story" },
];

export default function Hero() {
  return (
    <section className="border-b border-hairline bg-bone">
      {/* top technical row */}
      <div className="border-b border-hairline">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 font-display text-xs uppercase tracking-[0.25em] text-ink/60 lg:px-10">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 bg-pink" /> B2B Brand Studio
          </span>
          <span>Ireland — Worldwide</span>
          <span className="hidden sm:block">©2026 · V.1</span>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-6 pb-14 pt-14 lg:px-10 lg:pb-20 lg:pt-20"
      >
        {/* equalizer band */}
        <motion.div variants={item} className="grid gap-8 sm:grid-cols-3">
          {meters.map((m) => (
            <div key={m.n}>
              <div className="flex items-baseline justify-between font-display text-sm uppercase tracking-[0.2em] text-ink">
                <span>
                  <span className="text-pink">{m.n}.</span> {m.label}
                </span>
              </div>
              <BarViz className="mt-3" />
            </div>
          ))}
        </motion.div>

        <h1 className="mt-14 font-display uppercase leading-[0.8] tracking-[-0.02em] text-ink">
          <motion.span variants={item} className="block text-6xl sm:text-8xl lg:text-[9rem]">
            You can&apos;t scale
          </motion.span>
          <motion.span variants={item} className="block text-6xl sm:text-8xl lg:text-[9rem]">
            a story that
          </motion.span>
          <motion.span variants={item} className="block text-6xl sm:text-8xl lg:text-[9rem]">
            only exists in
          </motion.span>
          <motion.span variants={item} className="block">
            <span className="text-6xl sm:text-8xl lg:text-[9rem]">your </span>
            <span className="text-swirl text-7xl sm:text-9xl lg:text-[11rem]">head.</span>
          </motion.span>
        </h1>

        <div className="mt-12 flex flex-col gap-10 border-t border-hairline pt-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            variants={item}
            className="max-w-md text-xl leading-relaxed text-ink/70"
          >
            We build the brand position, message, and story your marketing has
            been missing.
          </motion.p>
          <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">Book a Brand Audit</Button>
            <Button href="/contact" variant="outline">Discovery call</Button>
          </motion.div>
        </div>
      </motion.div>

      {/* bottom cue row */}
      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 font-display text-xs uppercase tracking-[0.25em] text-ink/50 lg:px-10">
          <span>Brand · Position · Story</span>
          <span className="text-ink">Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import Button from "./Button";

const EASE = [0.16, 1, 0.3, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Hero() {
  return (
    <section className="border-b border-hairline bg-bone">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-32"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.3em] text-ink"
        >
          <span className="h-2 w-2 bg-pink" />
          B2B Brand Studio — Ireland
        </motion.span>

        <h1 className="mt-10 font-display uppercase leading-[0.82] tracking-[-0.02em] text-ink">
          <motion.span
            variants={item}
            className="block text-5xl sm:text-8xl lg:text-[8.5rem]"
          >
            You can&apos;t scale
          </motion.span>
          <motion.span
            variants={item}
            className="block pl-0 text-5xl sm:pl-20 sm:text-8xl lg:text-[8.5rem]"
          >
            a story that only
          </motion.span>
          <motion.span
            variants={item}
            className="block text-5xl sm:text-8xl lg:text-[8.5rem]"
          >
            exists in your
          </motion.span>
          <motion.span
            variants={item}
            className="block text-swirl text-6xl sm:text-9xl lg:text-[9.5rem]"
          >
            head.
          </motion.span>
        </h1>

        <motion.p
          variants={item}
          className="mt-10 max-w-xl text-xl leading-relaxed text-ink/70 sm:text-2xl"
        >
          We build the brand position, message, and story your marketing has been
          missing.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button href="/contact" variant="primary">
            Book a Brand Audit
          </Button>
          <Button href="/contact" variant="outline">
            Book a discovery call
          </Button>
        </motion.div>
      </motion.div>

      {/* hero footer row — editorial divider + scroll cue */}
      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-ink/50">
            Brand · Position · Story
          </span>
          <span className="font-display text-xs uppercase tracking-[0.25em] text-ink/50">
            Scroll ↓
          </span>
        </div>
      </div>
    </section>
  );
}

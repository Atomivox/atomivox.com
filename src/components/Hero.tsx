"use client";

import { motion } from "motion/react";
import Button from "./Button";
import ImpactObject from "./ImpactObject";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-bone">
      <ImpactObject label="Dynamite + Clock Bomb" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.35em] text-pink"
        >
          <span className="h-px w-10 bg-pink" />
          B2B Brand Studio · Ireland
        </motion.span>

        <h1 className="mt-8 font-display uppercase leading-[0.82] tracking-tight text-ink">
          <motion.span
            variants={item}
            className="block text-5xl sm:text-7xl lg:text-8xl"
          >
            You can&apos;t scale
          </motion.span>
          <motion.span
            variants={item}
            className="block pl-0 text-5xl sm:text-7xl lg:text-8xl sm:pl-16"
          >
            a story that only
          </motion.span>
          <motion.span
            variants={item}
            className="block text-5xl sm:text-7xl lg:text-8xl"
          >
            exists in your
          </motion.span>
          <motion.span
            variants={item}
            className="text-swirl block pl-0 text-7xl sm:pl-24 sm:text-9xl lg:text-[11rem]"
          >
            head.
          </motion.span>
        </h1>

        <motion.p
          variants={item}
          className="mt-10 max-w-xl text-xl leading-relaxed text-ink/75 sm:text-2xl"
        >
          We build the brand position, message, and story your marketing has been
          missing.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button href="/contact" variant="primary">
            Book a Brand Audit
          </Button>
          <Button href="/contact" variant="outline">
            Book a discovery call
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

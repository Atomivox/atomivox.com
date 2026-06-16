"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import SplitHeading from "./SplitHeading";
import MagneticButton from "./MagneticButton";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const bugY = useTransform(scrollY, [0, 700], [0, 140]);
  const bugRotate = useTransform(scrollY, [0, 700], [0, 12]);

  return (
    <section className="relative overflow-hidden bg-dark-gradient">
      <div aria-hidden className="burst pointer-events-none absolute inset-0" />
      <motion.div
        aria-hidden
        style={{ y: bugY, rotate: bugRotate }}
        className="pointer-events-none absolute -right-24 top-1/2 hidden w-[34rem] -translate-y-1/2 opacity-40 mix-blend-screen lg:block"
      >
        <Image
          src="/brand/bug-purple.png"
          alt=""
          width={722}
          height={718}
          priority
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <motion.span
          variants={item}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.35em] text-pink"
        >
          <span className="h-px w-10 bg-pink" />
          B2B Brand Studio · Ireland
        </motion.span>

        <SplitHeading
          as="h1"
          playOnLoad
          className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.9] tracking-tight text-bone sm:text-7xl lg:text-[7.5rem]"
        >
          You can&apos;t scale a story that only exists in your{" "}
          <span className="text-brand-gradient">head.</span>
        </SplitHeading>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-xl leading-relaxed text-bone/75 sm:text-2xl"
          >
            We build the brand position, message, and story your marketing has
            been missing.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton
              href="/contact"
              className="border-2 border-pink bg-pink px-8 py-4 text-center font-display text-base uppercase tracking-[0.2em] text-bone transition-colors hover:bg-transparent hover:text-pink"
            >
              Book a Brand Audit
            </MagneticButton>
            <Link
              href="/contact"
              className="border-2 border-bone/25 px-8 py-4 text-center font-display text-base uppercase tracking-[0.2em] text-bone/90 transition-colors hover:border-bone hover:text-bone"
            >
              Book a discovery call
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MarkerCircle } from "./Marker";
import { Star } from "./Marks";

const EASE = [0.16, 1, 0.3, 1] as const;
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } };

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-14 lg:px-10 lg:pb-32 lg:pt-20">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.3em] text-ink/60">
            <Star className="h-4 w-4 text-pink" />
            Brand studio for B2B founders
          </motion.span>

          <h1 className="font-punk mt-6 max-w-6xl break-words text-[2.1rem] font-extrabold uppercase leading-[0.95] tracking-[-0.01em] text-ink sm:text-7xl lg:text-[8.5rem] xl:text-[10rem]">
            <motion.span variants={item} className="block">Loud isn&apos;t enough,</motion.span>
            <motion.span variants={item} className="block">you need to be</motion.span>
            <motion.span variants={item} className="block">
              <MarkerCircle playOnLoad>understood.</MarkerCircle>
            </motion.span>
          </h1>

          <div className="mt-24 flex flex-col gap-8 lg:mt-28 lg:flex-row lg:items-center lg:justify-between">
            <motion.p variants={item} className="max-w-xl text-xl leading-relaxed text-ink/80 sm:text-2xl">
              I build the position, message, and story your marketing&apos;s been
              missing.
            </motion.p>

            <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-[5px] bg-ink px-7 py-4 font-display text-base uppercase tracking-[0.12em] text-bone transition-colors hover:bg-pink"
              >
                Book a Brand Audit
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-pink transition-colors group-hover:bg-bone" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[5px] border-2 border-ink px-7 py-4 font-display text-base uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-bone"
              >
                Book a discovery call
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

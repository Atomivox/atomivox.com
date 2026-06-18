"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MarkerCircle } from "./Marker";
import { Eye, Star } from "./Marks";

const EASE = [0.16, 1, 0.3, 1] as const;
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } };

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.3em] text-ink/60">
            <Star className="h-4 w-4 text-pink" />
            Brand studio for B2B founders
          </motion.span>

          <h1 className="mt-8 max-w-5xl font-display uppercase leading-[0.85] tracking-[-0.015em] text-ink">
            <motion.span variants={item} className="block text-5xl sm:text-7xl lg:text-[7.5rem]">
              Loud isn&apos;t enough,
            </motion.span>
            <motion.span variants={item} className="block text-5xl sm:text-7xl lg:text-[7.5rem]">
              you need to be
            </motion.span>
            <motion.span variants={item} className="block text-5xl sm:text-7xl lg:text-[7.5rem]">
              <MarkerCircle playOnLoad>understood.</MarkerCircle>
            </motion.span>
          </h1>

          <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <motion.div variants={item} className="relative max-w-xl">
              <Eye className="absolute -left-3 -top-10 hidden h-12 w-12 text-pink/70 sm:block" />
              <p className="font-hand text-3xl leading-[1.15] text-ink/90 sm:text-4xl">
                I build the position, message &amp; story your marketing&apos;s been
                missing.
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex -rotate-1 items-center gap-2 rounded-[5px] bg-ink px-7 py-4 font-display text-base uppercase tracking-[0.12em] text-bone transition-transform hover:rotate-0"
              >
                Book a Brand Audit
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-pink" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-[5px] border-2 border-ink px-7 py-4 font-display text-base uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-bone"
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

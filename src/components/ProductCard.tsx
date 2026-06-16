"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

type Props = {
  name: string;
  body: string;
  meta: string;
  href: string;
  className?: string;
};

export default function ProductCard({ name, body, meta, href, className }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceRef = useRef(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.3 });

  useEffect(() => {
    reduceRef.current = prefersReducedMotion();
  }, []);

  function handleMove(e: React.MouseEvent) {
    if (reduceRef.current || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.06);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.12);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group relative isolate flex overflow-hidden ${className ?? ""}`}
    >
      {/* pink wipe-in */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-pink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
      />
      <motion.div
        style={{ x: sx, y: sy }}
        className="flex flex-1 flex-col p-8 lg:p-10"
      >
        <h3 className="font-display text-3xl uppercase tracking-wide text-bone transition-colors group-hover:text-ink">
          {name}
        </h3>
        <p className="mt-4 flex-1 text-base leading-relaxed text-bone/70 transition-colors group-hover:text-ink/80">
          {body}
        </p>
        <p className="mt-6 text-sm italic text-gold/90 transition-colors group-hover:text-ink/70">
          {meta}
        </p>
        <span className="mt-4 font-display text-sm uppercase tracking-[0.2em] text-pink transition-all group-hover:translate-x-1 group-hover:text-ink">
          Learn more →
        </span>
      </motion.div>
    </Link>
  );
}

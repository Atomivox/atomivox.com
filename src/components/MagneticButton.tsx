"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

const MotionLink = motion.create(Link);

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
  strength?: number;
};

export default function MagneticButton({
  href,
  className,
  children,
  strength = 0.3,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceRef = useRef(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  useEffect(() => {
    reduceRef.current = prefersReducedMotion();
  }, []);

  function handleMove(e: React.MouseEvent) {
    if (reduceRef.current || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <MotionLink
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </MotionLink>
  );
}

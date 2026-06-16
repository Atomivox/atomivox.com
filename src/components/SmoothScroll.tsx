"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import { registerGsap, gsap, ScrollTrigger } from "@/lib/gsap";

// Module-level handle so other components (e.g. the marquee) can read
// the live scroll velocity/direction without prop-drilling.
let lenisInstance: Lenis | null = null;
export function getLenis() {
  return lenisInstance;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    registerGsap();

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenisInstance = lenis;

    // Keep ScrollTrigger in sync with Lenis, and drive Lenis from GSAP's ticker.
    lenis.on("scroll", ScrollTrigger.update);
    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

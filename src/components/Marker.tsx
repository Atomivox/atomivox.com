"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

function useDraw(playOnLoad: boolean) {
  const ref = useRef<SVGPathElement>(null);
  useEffect(() => {
    registerGsap();
    const path = ref.current;
    if (!path) return;
    if (prefersReducedMotion()) return;

    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len, opacity: 1 });
    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      duration: 0.85,
      ease: "power2.inOut",
      delay: playOnLoad ? 0.5 : 0,
      paused: !playOnLoad,
    });
    let st: ScrollTrigger | undefined;
    if (!playOnLoad) {
      st = ScrollTrigger.create({
        trigger: path,
        start: "top 82%",
        once: true,
        onEnter: () => tween.play(),
      });
    }
    return () => {
      st?.kill();
      tween.kill();
    };
  }, [playOnLoad]);
  return ref;
}

/** Hand-drawn marker loop around a word. */
export function MarkerCircle({
  children,
  playOnLoad = false,
  color = "var(--color-pink)",
  className = "",
}: {
  children: React.ReactNode;
  playOnLoad?: boolean;
  color?: string;
  className?: string;
}) {
  const ref = useDraw(playOnLoad);
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 h-[155%] w-[120%] -translate-x-1/2 -translate-y-1/2 overflow-visible"
        viewBox="0 0 200 80"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
      >
        <path
          ref={ref}
          d="M104 9C44 4 9 24 13 43c4 22 58 33 109 30 56-3 76-23 69-41-6-17-58-25-119-19"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ opacity: 0 }}
        />
      </svg>
    </span>
  );
}

/** Hand-drawn marker underline beneath a word. */
export function MarkerUnderline({
  children,
  playOnLoad = false,
  color = "var(--color-pink)",
  className = "",
}: {
  children: React.ReactNode;
  playOnLoad?: boolean;
  color?: string;
  className?: string;
}) {
  const ref = useDraw(playOnLoad);
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg
        className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full overflow-visible"
        viewBox="0 0 200 16"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
      >
        <path
          ref={ref}
          d="M3 9c40-7 70 6 100 0s60-6 94-2"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ opacity: 0 }}
        />
      </svg>
    </span>
  );
}

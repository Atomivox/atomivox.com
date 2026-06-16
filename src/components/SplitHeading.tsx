"use client";

import { createElement, useEffect, useRef } from "react";
import {
  registerGsap,
  gsap,
  ScrollTrigger,
  SplitText,
  prefersReducedMotion,
} from "@/lib/gsap";

type Props = {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
  /** Hero headlines detonate on load; everything else on scroll-in. */
  playOnLoad?: boolean;
};

export default function SplitHeading({
  as = "h2",
  className,
  children,
  playOnLoad = false,
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    registerGsap();

    // Reduced motion: leave the text exactly as rendered, fully visible.
    if (prefersReducedMotion()) return;

    // autoSplit re-splits on resize/font load; onSplit returns the tween so
    // GSAP cleans it up between splits. mask:"lines" wraps each line in an
    // overflow-hidden container for a clean reveal.
    const split = SplitText.create(el, {
      type: "lines",
      mask: "lines",
      linesClass: "split-line",
      autoSplit: true,
      onSplit: (self) => {
        return gsap.from(self.lines, {
          yPercent: 118,
          rotate: 3,
          duration: 0.95,
          ease: "power4.out",
          stagger: 0.12,
          scrollTrigger: playOnLoad
            ? undefined
            : { trigger: el, start: "top 85%", once: true },
        });
      },
    });

    return () => {
      split.revert();
    };
  }, [playOnLoad]);

  return createElement(as, { ref, className }, children);
}

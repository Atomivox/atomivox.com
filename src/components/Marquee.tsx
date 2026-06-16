"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";
import { getLenis } from "./SmoothScroll";

const items = [
  "Brand Strategy",
  "Storytelling",
  "Brand Architecture",
  "Copywriting",
  "Positioning",
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const track = trackRef.current;
    if (!track) return;

    const reduce = prefersReducedMotion();

    let x = 0;
    let skew = 0;
    let halfWidth = track.scrollWidth / 2;
    let wrap = gsap.utils.wrap(-halfWidth, 0);

    const onResize = () => {
      halfWidth = track.scrollWidth / 2;
      wrap = gsap.utils.wrap(-halfWidth, 0);
    };
    window.addEventListener("resize", onResize);

    const baseSpeed = 0.65; // px per ~16ms frame at rest

    const tick = (_time: number, deltaMs: number) => {
      const vel = reduce ? 0 : getLenis()?.velocity ?? 0;
      const frames = deltaMs / 16.667;

      // Base drifts left; while scrolling, speed up and flip with direction.
      const direction = reduce ? -1 : vel > 0 ? -1 : vel < 0 ? 1 : -1;
      const speed = baseSpeed + Math.min(Math.abs(vel) * 0.35, 28);
      x = wrap(x + direction * speed * frames);

      // Velocity-driven skew, eased back to flat when scrolling stops.
      const targetSkew = reduce ? 0 : gsap.utils.clamp(-10, 10, vel * 0.18);
      skew += (targetSkew - skew) * 0.1;

      gsap.set(track, { x, skewX: skew });
    };

    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="overflow-hidden border-y-2 border-ink/20 bg-pink py-4">
      <div ref={trackRef} className="flex w-max will-change-transform">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center"
            aria-hidden={group === 1}
          >
            {items.map((item) => (
              <span key={item} className="flex items-center">
                <span className="px-8 font-display text-2xl uppercase tracking-[0.2em] text-ink">
                  {item}
                </span>
                <span className="text-plum">✺</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

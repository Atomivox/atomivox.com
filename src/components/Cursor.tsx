"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;

    document.documentElement.classList.add("has-custom-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const over = (e: PointerEvent) => {
      if ((e.target as HTMLElement)?.closest?.("a,button,[data-cursor]")) el.classList.add("is-active");
    };
    const out = (e: PointerEvent) => {
      if ((e.target as HTMLElement)?.closest?.("a,button,[data-cursor]")) el.classList.remove("is-active");
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    window.addEventListener("pointerout", out);

    let raf = 0;
    const loop = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      el.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerout", out);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return <div ref={ref} className="av-cursor" aria-hidden />;
}

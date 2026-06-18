"use client";

import { useEffect, useState } from "react";

function timeIn(tz: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

export default function Clock({
  city,
  tz,
  gmt,
  className = "",
}: {
  city: string;
  tz: string;
  gmt: string;
  className?: string;
}) {
  const [t, setT] = useState("--:--");

  useEffect(() => {
    const tick = () => setT(timeIn(tz));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, [tz]);

  return (
    <div className={`leading-tight ${className}`}>
      <div className="font-display text-[10px] uppercase tracking-[0.2em] text-ink/50">
        {city}
      </div>
      <div className="font-display text-xs uppercase tracking-[0.15em] text-ink tabular-nums">
        {t} <span className="text-ink/50">{gmt}</span>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  play: boolean;
  countBox?:number;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  play,
  countBox = 1,
}: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!play) return;

    let start = 0;
    const duration = 2000; // animation time
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= value) {
        start = value;
        clearInterval(counter);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [play, value]);

  return (
    <div className={`text-white text-start p-[40px] `} style={{ width: `calc(100% / ${countBox})` }}>
      <h3 className="text-[40px] font-[600]">
        {count}
        {suffix}
      </h3>
      <p className="text-[18px] leading-[200%] font-[400]">{label}</p>
    </div>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Pill = {
  text: string;
  rotate: number;
  x: number;
  y: number;
};

const pills: Pill[] = [
  { text: "Performance", rotate: -30, x: -40, y: 40 },
  { text: "Speed", rotate: -90, x: 20, y: 0 },
  { text: "Awareness", rotate: -60, x: 70, y: 20 },
  { text: "Top-10", rotate: -90, x: 120, y: 0 },
  { text: "People", rotate: -90, x: 170, y: 10 },
  { text: "Evolution", rotate: 0, x: -20, y: 80 },
  { text: "Growth", rotate: -30, x: 20, y: 70 },
];

export default function StatsParallaxCard() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className="flex justify-center py-24">
      <motion.div
        ref={ref}
        style={{ y }}
        className="relative w-full overflow-hidden rounded-[32px] bg-[#EFE7FF] p-12"
      >
        {/* Text */}
        <div>
          <h2 className="text-6xl font-bold text-black">7</h2>
          <p className="mt-2 text-2xl text-black">years in business</p>
        </div>

        {/* Pills */}
        <div className="relative mt-16 h-[500px]">
          {pills.map((pill, index) => (
            <motion.div
              key={index}
              initial={{ y: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
              style={{
                left: pill.x,
                top: pill.y,
                rotate: pill.rotate,
              }}
              className="absolute rounded-full border border-violet-300 bg-white px-5 py-2 text-sm font-medium text-black shadow-sm"
            >
              {pill.text}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

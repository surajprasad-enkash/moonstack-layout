"use client";

import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";

export default function MorphSection() {
  const { scrollYProgress } = useScroll();

  // Custom easing (you can keep this or rely fully on CSS)
  const ease = cubicBezier(0.25, 0.1, 0.25, 1);

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    [
      // Start: Rectangle
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",

      // End: Sharper Pentagon (deep V at bottom center)
      "polygon(0% 0%, 180% 0%, 100% 50%, 50% 100%, 0% 50%)",
    ],
    { ease },
  );

  return (
    <motion.div
      style={{ clipPath, willChange: "clip-path" }} // willChange helps performance
      // CSS transition as requested – 1.25s with your preferred easing
      className="transition-clip-path flex h-screen items-center justify-center bg-black from-indigo-600 to-cyan-400 text-white"
    >
      <h1 className="text-5xl font-bold tracking-tight">
        Sharper & Smoother Morph
      </h1>
    </motion.div>
  );
}

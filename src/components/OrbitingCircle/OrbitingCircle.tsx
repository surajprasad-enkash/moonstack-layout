"use client";
import React from "react";
import { motion } from "framer-motion";

interface OrbitingCirclesProps {
  children: React.ReactNode[];
  radius?: number;
  duration?: number; // full orbit duration in seconds
  reverse?: boolean;
  iconSize?: number;
}

export const OrbitingCircles: React.FC<OrbitingCirclesProps> = ({
  children,
  radius = 160,
  duration = 20,
  reverse = false,
  iconSize = 30,
}) => {
  const count = React.Children.count(children);

  return (
    <div className="relative w-full h-full">
      {React.Children.map(children, (child, i) => {
        const angle = (360 / count) * i; // initial position
        const direction = reverse ? -1 : 1;

        return (
          <motion.div
            className="absolute flex items-center justify-center rounded-full"
            style={{
              width: iconSize,
              height: iconSize,
              top: "50%",
              left: "50%",
              translateX: radius,
              translateY: 0,
            }}
            animate={{ rotate: [0, 360 * direction] }}
            transition={{
              repeat: Infinity,
              duration,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
};

"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Heading from "../Heading/Heading";
import Tag from "../Tag/Tag";

interface Step {
  id: number;
  title: string;
  description: string;
}

interface VerticalStepperProps {
  steps: Step[];
  tagText?: string;
  stepperClass?: string;
  headingLines: { text: string; color?: string }[];
  subHeadingLines: { text: string; color?: string }[];
}

const VerticalStepper: React.FC<VerticalStepperProps> = ({
  steps,
  tagText,
  headingLines,
  subHeadingLines,
  stepperClass,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Track which step is active based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const viewportMid = window.innerHeight / 2;
      const stepEls = containerRef.current.querySelectorAll("[data-step]");
      let closestIndex = 0;
      let smallestDistance = Infinity;

      stepEls.forEach((el, i) => {
        const dist = Math.abs(el.getBoundingClientRect().top - viewportMid);
        if (dist < smallestDistance) {
          smallestDistance = dist;
          closestIndex = i;
        }
      });

      setActiveStep(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track progress line scroll height
  useEffect(() => {
    const handleScrollProgress = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height - windowHeight;
      const scrolled = Math.min(
        Math.max((windowHeight - rect.top) / totalHeight, 0),
        1
      );

      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${scrolled * 100}%`
      );
    };

    window.addEventListener("scroll", handleScrollProgress);
    handleScrollProgress();

    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  return (
    <section
      className={`relative bg-[#0a0a0a] text-white py-24 overflow-hidden ${stepperClass}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#001f10] to-[#0a0a0a] opacity-90 pointer-events-none" />

      {/* Section heading */}
      <div className="relative text-center max-w-3xl mx-auto mb-20">
        {tagText && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Tag text={tagText} />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Heading
            headingTag="h3"
            className="font-semibold"
            content={headingLines}
          />
        </motion.div>

        {subHeadingLines && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Heading
              headingTag="p"
              className="text-gray-400 text-lg mt-3"
              content={subHeadingLines}
            />
          </motion.div>
        )}
      </div>

      {/* Stepper container */}
      <div
        ref={containerRef}
        className="relative max-w-6xl mx-auto flex flex-col gap-28 px-6 md:px-0"
      >
        {/* Background line (grey) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-[#2f2f2f]">
          {/* Green progress overlay */}
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#00ff99] via-[#00cc66] to-[#008844] shadow-[0_0_20px_#00ff9940]"
            style={{
              height: "var(--scroll-progress, 0%)",
              transition: "height 0.3s ease-out",
            }}
          />
        </div>

        {steps.map((step, index) => {
          const direction = index % 2 === 0 ? -150 : 150;
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={step.id}
              data-step
              className={`relative flex flex-col md:flex-row items-center ${
                isLeft ? "md:justify-end" : "md:justify-start"
              }`}
              initial={{ opacity: 0, x: direction }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 15,
                duration: 0.7,
              }}
              viewport={{ once: false, amount: 0.3 }} // 👈 animation repeats
            >
              {/* Step circle */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  animate={{
                    boxShadow:
                      activeStep === index
                        ? "0 0 30px #00ff99, 0 0 80px #00ff99"
                        : "0 0 10px #004422",
                    scale: activeStep === index ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 rounded-full border-[3px] flex items-center justify-center font-bold text-lg ${
                    activeStep === index
                      ? "border-[#00ff99] text-[#00ff99] bg-[#001f14]"
                      : "border-[#2f2f2f] text-[#444] bg-[#0d0d0d]"
                  }`}
                >
                  {String(step.id).padStart(2, "0")}
                </motion.div>
              </div>

              {/* Step content */}
              <motion.div
                className={`relative md:w-5/12 w-full p-8 rounded-2xl border transition-all duration-300 bg-gradient-to-b from-[#121212] to-[#0a0a0a] ${
                  activeStep === index
                    ? "border-[#00ff99] shadow-[0_0_40px_#00ff9940]"
                    : "border-[#1a1a1a] hover:border-[#00ff9940] hover:shadow-[0_0_25px_#00ff9920]"
                }`}
              >
                <h3
                  className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                    activeStep === index ? "text-[#00ff99]" : "text-white"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default VerticalStepper;

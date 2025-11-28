"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Heading from "../Heading/Heading";
import Tag from "../Tag/Tag";

interface Step {
  id?: number;
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
        1,
      );

      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${scrolled * 100}%`,
      );
    };

    window.addEventListener("scroll", handleScrollProgress);
    handleScrollProgress();

    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  return (
    <section className={`relative overflow-hidden bg-[#0a0a0a]`}>
      <div className="${stepperClass} container m-auto px-4 py-12 text-white sm:px-10 md:py-20">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#001f10] to-[#0a0a0a] opacity-90" />

        {/* Section heading */}
        <div className="relative mx-auto mb-20 max-w-3xl text-center">
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
                className="mt-3 text-lg text-gray-400"
                content={subHeadingLines}
              />
            </motion.div>
          )}
        </div>

        {/* Stepper container */}
        <div
          ref={containerRef}
          className="relative mx-auto flex max-w-6xl flex-col gap-28 px-6 md:px-0"
        >
          {/* Background line (grey) */}
          <div className="absolute top-0 left-1/2 h-full w-[3px] -translate-x-1/2 bg-[#2f2f2f]">
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
                className={`relative flex flex-col items-center md:flex-row ${
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
                <div className="absolute left-1/2 z-10 -translate-x-1/2">
                  <motion.div
                    animate={{
                      boxShadow:
                        activeStep === index
                          ? "0 0 30px #00ff99, 0 0 80px #00ff99"
                          : "0 0 10px #004422",
                      scale: activeStep === index ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-16 w-16 items-center justify-center rounded-full border-[3px] text-lg font-bold ${
                      activeStep === index
                        ? "border-[#00ff99] bg-[#001f14] text-[#00ff99]"
                        : "border-[#2f2f2f] bg-[#0d0d0d] text-[#444]"
                    }`}
                  >
                    {String(step.id).padStart(2, "0")}
                  </motion.div>
                </div>

                {/* Step content */}
                <motion.div
                  className={`relative w-full rounded-2xl border bg-gradient-to-b from-[#121212] to-[#0a0a0a] p-8 transition-all duration-300 md:w-5/12 ${
                    activeStep === index
                      ? "border-[#00ff99] shadow-[0_0_40px_#00ff9940]"
                      : "border-[#1a1a1a] hover:border-[#00ff9940] hover:shadow-[0_0_25px_#00ff9920]"
                  }`}
                >
                  <h3
                    className={`mb-3 text-2xl font-bold transition-colors duration-300 ${
                      activeStep === index ? "text-[#00ff99]" : "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-gray-400">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VerticalStepper;

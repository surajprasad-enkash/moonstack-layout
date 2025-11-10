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

  return (
    <section
      className={`relative bg-[#0a0a0a] text-white py-24 overflow-hidden ${stepperClass}`}
    >
      {/* Glow gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#001e0f] to-[#0a0a0a] opacity-90 pointer-events-none" />

      {/* Section Header */}
      <div className="relative text-center max-w-3xl mx-auto mb-16">
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
          transition={{ duration: 0.7, delay: 0.2 }}
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
            transition={{ duration: 0.7, delay: 0.3 }}
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

      {/* Stepper */}
      <div
        ref={containerRef}
        className="relative max-w-5xl mx-auto flex flex-col gap-24 md:gap-28"
      >
        {" "}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#00ff99] via-[#00cc66] to-transparent" />
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            data-step
            className={`relative flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Connector circle */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                animate={{
                  boxShadow:
                    activeStep === index
                      ? "0 0 25px #00ff88, 0 0 50px #00ff88"
                      : "0 0 8px #003311",
                  scale: activeStep === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className={`w-16 h-16 rounded-full border-4 flex items-center justify-center font-semibold text-lg ${
                  activeStep === index
                    ? "border-[#00ff99] text-[#00ff99] bg-[#001f14]"
                    : "border-[#004422] text-[#004422] bg-[#0d0d0d]"
                }`}
              >
                {String(step.id).padStart(2, "0")}
              </motion.div>
            </div>

            {/* Step Content */}
            <motion.div
              className={`w-full md:w-5/12 p-8 rounded-2xl bg-gradient-to-b from-[#111111] to-[#0b0b0b] backdrop-blur-md border border-[#1f1f1f] transition-all duration-300 ${
                activeStep === index
                  ? "shadow-[0_0_30px_#00ff8840]"
                  : "hover:shadow-[0_0_20px_#00ff8830]"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-3 ${
                  activeStep === index ? "text-[#00ff99]" : "text-white"
                }`}
              >
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                {step.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VerticalStepper;

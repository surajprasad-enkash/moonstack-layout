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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // 🟢 Detect scroll position & active step
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      setScrollProgress(progress);

      // Determine which step is near the center
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

  // 🟢 Dynamic gradient from light to dark green based on scroll
  const gradient = `linear-gradient(to bottom, #00FF88 ${
    scrollProgress * 100
  }%, #004422 100%)`;

  return (
    <section className={`bg-black text-white py-20 relative ${stepperClass}`}>
      <div className="w-full md:w-2/5 lg:w-2/5 xl:w-[50%] text-center m-auto pb-12">
        {tagText && (
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 50 }} // start 50px below
            whileInView={{ opacity: 1, y: 0 }} // slide up
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Tag text={tagText} className="text-center" />
          </motion.div>
        )}

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Heading
            headingTag="h2"
            className="font-bold pt-3 text-[#00CF49] font-36 text-center"
            content={headingLines}
          />
        </motion.div>

        {subHeadingLines && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Heading
              headingTag="p"
              className="font-bold pt-3 text-white font-14 text-center"
              content={subHeadingLines}
            />
          </motion.div>
        )}
      </div>

      <div ref={containerRef} className="relative w-full max-w-5xl mx-auto">
        {/* 🟢 Vertical line */}
        <div
          className="absolute left-1/2 top-0 w-[2px] h-full -translate-x-1/2 transition-all duration-300"
          style={{ background: gradient }}
        />

        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            data-step
            className={`flex items-center justify-between  relative ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Left/Right content */}
            <div
              className={`w-5/12 transition-colors duration-300 ${
                activeStep === index ? "text-white" : "text-[#999A99]"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p
                className={`leading-relaxed transition-colors duration-300 ${
                  activeStep === index ? "text-[#EDEDED]" : "text-[#999A99]"
                }`}
              >
                {step.description}
              </p>
            </div>

            {/* Center circle */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                animate={{
                  boxShadow:
                    activeStep === index
                      ? "0 0 30px #00ff88, 0 0 60px #00ff88"
                      : "0 0 10px #006633",
                  borderColor: activeStep === index ? "#00FF88" : "#004422",
                  color: activeStep === index ? "#00FF88" : "#004422",
                }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 rounded-full bg-black border-4 flex items-center justify-center font-semibold text-lg"
              >
                {String(step.id).padStart(2, "0")}
              </motion.div>
            </div>

            {/* Placeholder for alignment */}
            <div className="w-5/12" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VerticalStepper;

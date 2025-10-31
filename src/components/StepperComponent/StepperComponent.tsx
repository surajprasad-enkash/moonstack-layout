import React, { useRef, useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import Tag from "../Tag/Tag";
import { motion } from "framer-motion";

type Step = {
  title: string;
  description: string;
};

interface VerticalStepperProps {
  steps: Step[];
  tagText?: string;
  headingLines: { text: string; color?: string }[];
  subHeadingLines: { text: string; color?: string }[];
}
const VerticalStepper: React.FC<VerticalStepperProps> = ({
  steps,
  tagText,
  headingLines,
  subHeadingLines,
}) => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || stepRefs.current.length === 0) return;

      const viewportHeight = window.innerHeight;

      const offsets = stepRefs.current.map((ref) =>
        ref
          ? Math.abs(ref.getBoundingClientRect().top - viewportHeight / 2)
          : Infinity
      );
      const minOffset = Math.min(...offsets);
      const activeIndex = offsets.indexOf(minOffset);
      setActiveStep(activeIndex);

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const activeStepRef = stepRefs.current[activeIndex];
      if (activeStepRef && containerTop !== null) {
        const stepRect = activeStepRef.getBoundingClientRect();
        const circleHeight = 48;
        const lineHeightPx = stepRect.top + circleHeight / 2 - containerTop;
        setLineHeight(lineHeightPx);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black py-12 md:py-20  px-4 md:px-10 justify-center items-start container mx-auto">
      {/* Tag */}{" "}
      <div className="w-full md:w-2/5 lg:w-2/5 xl:w-[50%] text-center m-auto">
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
            className="font-bold pt-3 text-white font-36 text-center"
            content={headingLines}
          />
        </motion.div>

        {/* Subheading */}
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
      </div>
      <div ref={containerRef} className="relative flex mx-auto pt-12">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px z-0">
          <div
            className="absolute h-[80%] w-full border-r-[4px]"
            style={{ borderColor: "#003312" }}
          />

          <div
            className="absolute w-full border-r-[4px] origin-top"
            style={{
              borderColor: "#16a34a",
              height: `${lineHeight}px`,
              transition: "height 0.8s cubic-bezier(0.77, 0, 0.175, 1)",
              willChange: "height",
            }}
          />
        </div>

        {/* Steps */}
        <div className="w-full">
          {steps.map((step, idx) => {
            const isCompleted = idx <= activeStep;
            return (
              <div
                key={idx}
                ref={(ref) => (stepRefs.current[idx] = ref)}
                className="flex items-center mb-16 relative"
                style={{ minHeight: "120px" }}
              >
                {/* Left side */}
                <div
                  className={`w-1/2 flex ${
                    idx % 2 === 0 ? "justify-center" : "justify-center"
                  }`}
                >
                  {idx % 2 === 0 && (
                    <div className="bg-transparent max-w-md">
                      <span
                        className={`font-bold text-lg ${
                          isCompleted ? "text-white" : "text-[#999A99]"
                        }`}
                      >
                        {step.title}
                      </span>
                      <p
                        className={`mt-2 text-base font-medium ${
                          isCompleted ? "text-gray-200" : "text-[#999A99]"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Step circle */}
                <div
                  className="relative flex flex-col items-center"
                  style={{ width: "80px" }}
                >
                  <div
                    className={`rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold transition-all`}
                    style={{
                      backgroundColor: activeStep === idx ? "#16a34a" : "#000",
                      color: activeStep === idx ? "#fff" : "#16a34a",
                      border: `2px solid ${
                        isCompleted ? "#16a34a" : "#003312"
                      }`,
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  {idx < steps.length - 1 && (
                    <div
                      className="h-[80px] border-r-2 bg-transparent"
                      style={{
                        borderColor: isCompleted ? "transparent" : "#003312",
                        borderStyle: "inset",
                      }}
                    ></div>
                  )}
                </div>

                {/* Right side */}
                <div
                  className={`w-1/2 flex ${
                    idx % 2 === 0 ? "justify-end" : "justify-center"
                  }`}
                >
                  {idx % 2 !== 0 && (
                    <div className="bg-transparent max-w-md text-left">
                      <span
                        className={`font-bold text-lg ${
                          isCompleted ? "text-white" : "text-[#999A99]"
                        }`}
                      >
                        {step.title}
                      </span>
                      <p
                        className={`mt-2 text-base font-medium ${
                          isCompleted ? "text-gray-200" : "text-[#999A99]"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default VerticalStepper;

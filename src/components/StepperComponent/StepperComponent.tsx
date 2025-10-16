import React, { useRef, useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import CustomButton from "../CommanButton/CommanButton";

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "Design system",
    description:
      "At Moonstack, we believe in building technology that empowers businesses to grow and adapt in a fast-changing digital world.",
  },
  {
    title: "Development",
    description:
      "We create scalable, maintainable, and efficient solutions that drive business growth.",
  },
  {
    title: "Testing",
    description:
      "Quality assurance is key — our team ensures that all products meet the highest standards.",
  },
  {
    title: "Launch",
    description:
      "We deliver projects on time with ongoing support and continuous improvement.",
  },
];

export default function VerticalStepper() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0–1
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress (0 to 1)
      const progress = Math.min(
        Math.max((viewportHeight / 2 - containerTop) / containerHeight, 0),
        1
      );
      setScrollProgress(progress);

      // Determine active step
      const offsets = stepRefs.current.map((ref) =>
        ref
          ? Math.abs(ref.getBoundingClientRect().top - window.innerHeight / 2)
          : Infinity
      );
      const minOffset = Math.min(...offsets);
      setActiveStep(offsets.indexOf(minOffset));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black py-20 justify-center items-start container mx-auto">
      <div className="rotating-btn text-center">
        <CustomButton text="Process" variant="rotating" />
      </div>

      <Heading
        headingTag="h2"
        className="font-bold pt-3 text-white font-36 text-center"
        content={[
          { text: "Moonstack ", color: "text-white " },
          { text: " Process", color: "Colors.brand200" },
        ]}
      />
      <div
        ref={containerRef}
        className="relative flex mx-auto pt-12"
        style={{ width: "900px" }}
      >
        {/* Center vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px z-0">
          {/* Background line */}
          <div
            className="absolute h-full w-full border-r-[4px]"
            style={{ borderColor: "#003312" }}
          />
          {/* Fill line with smooth transition */}
          <div
            className="absolute w-full border-r-[4px] transition-all duration-300 ease-out origin-top"
            style={{
              borderColor: "#16a34a",
              height: `${scrollProgress * 100}%`,
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
                    idx % 2 === 0 ? "justify-start" : "justify-end"
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
                    idx % 2 === 0 ? "justify-end" : "justify-start"
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
}

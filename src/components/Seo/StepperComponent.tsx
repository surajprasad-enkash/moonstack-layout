import React, { useState } from "react";
import CustomButton from "../CommanButton/CommanButton";
import Heading from "../Heading/Heading";

export interface Step {
  id: string;
  title: string;
  content: string;
}

export interface StepperProps {
  steps?: Step[];
  headingLines: { text: string; color?: string }[];
  buttonVariant?: "primary" | "rotating" | "small";
  buttonText?: string;
}

const StepperComponent: React.FC<StepperProps> = ({
  steps = [
    { id: "step-1", title: "Fast and Secure", content: "The fox is clever." },
    { id: "step-2", title: "Easy Setup", content: "It is agile and quick." },
    { id: "step-3", title: "Reliable", content: "Known for keen senses." },
    { id: "step-4", title: "Optimized", content: "Efficient and resourceful." },
  ],
  headingLines,
  buttonVariant = "rotating",
  buttonText = "Process",
}) => {
  const [hovered, setHovered] = useState<string | null>(null);

  // Hardcoded colors and widths
  const containerWidth = "w-4/5";
  const stepLineColor = "bg-green-700/40";
  const activeStepColor = "bg-green-500";
  const stepContentGradient = "bg-gradient-to-r from-green-900 to-black";

  return (
    <div className="w-full flex flex-col items-center  px-4 sm:px-10 py-12 md:py-20  bg-black text-white container mx-auto">
      {/* Top Button */}
      {buttonText && (
        <div className="rotating-btn text-center mb-10">
          <CustomButton text={buttonText} variant={buttonVariant} />
        </div>
      )}

      {/* Heading */}
      <Heading
        headingTag="h2"
        className="font-bold py-10 md:py-20 text-center text-white font-36  "
        content={headingLines}
      />

      {/* Stepper Line */}
      <div className={`relative flex justify-between ${containerWidth} mb-2.5`}>
        <div
          className={`absolute top-1/2 left-0 right-0 h-1 ${stepLineColor} -translate-y-1/2`}
        ></div>

        {steps.map((s) => {
          const isHovered = hovered === s.id;
          return (
            <div
              key={s.id}
              className="flex flex-col items-center relative cursor-pointer"
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`w-5 h-5 rounded-full transition-all duration-300 ${
                  isHovered
                    ? `${activeStepColor} scale-125`
                    : `${activeStepColor}`
                }`}
              ></div>
            </div>
          );
        })}
      </div>

      {/* Step Content */}
      <div
        className={`w-full flex flex-col md:flex-row justify-between gap-4 ${containerWidth}`}
      >
        {steps.map((s) => {
          const isHovered = hovered === s.id;
          return (
            <div
              key={s.id}
              className={`flex-1 p-8 md:p-10 rounded-xl border border-transparent text-center transition-all duration-300 cursor-pointer ${
                isHovered
                  ? `border-green-500 ${stepContentGradient}`
                  : "bg-black border-transparent"
              }`}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {s.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">{s.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepperComponent;

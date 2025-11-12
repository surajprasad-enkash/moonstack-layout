"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Heading from "@/components/Heading/Heading";

interface Step {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
}

interface TrustSectionProps {
  headingLines: { text: string; color?: string }[];

  subHeadingLines?: { text: string; color?: string }[];
  tabs: Step[];
  accentColor?: string;
  className?: string;
}

const TrustSection: React.FC<TrustSectionProps> = ({
  headingLines,
  subHeadingLines,
  tabs,
  accentColor = "#00FF88",
  className = "",
}) => {
  // 👇 First tab open by default
  const [activeStep, setActiveStep] = useState<number>(tabs[0]?.id || 1);

  const handleToggle = (id: number) => {
    setActiveStep((prev) => (prev === id ? null : id));
  };

  const accentBorder = { borderColor: accentColor };
  const accentText = { color: accentColor };

  return (
    <section className={`bg-black text-white py-24 ${className}`}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 md:px-12 items-start">
        {/* LEFT SIDE */}
        <div>
          <Heading
            headingTag="h2"
            className="font-bold font-36 text-start pt-3"
            content={headingLines}
          />

          <Heading
            headingTag="p"
            className=" text-start pt-3 text-gray-400  "
            content={subHeadingLines}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          {tabs.map((step, index) => {
            const isActive = activeStep === step.id;

            return (
              <div
                key={step.id}
                className={`rounded-[10px] border-b-[2px] border-[#0CE859] 
    bg-[linear-gradient(180deg,#000000_0%,#092613_100%)] 
    transition-all duration-300 overflow-hidden 
    ${isActive ? "bg-[#0a0a0a]" : "bg-[#050505] hover:bg-[#0f0f0f]"}
  `}
                style={isActive ? accentBorder : {}}
              >
                <button
                  onClick={() => handleToggle(step.id)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                  style={isActive ? accentText : { color: "#ccc" }}
                >
                  <div className="flex flex-col items-start gap-3">
                    {isActive && (
                      <span
                        className="font-36 font-semibold"
                        style={accentText}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    )}
                    <span className="font-semibold text-white font-18">
                      {step.title}
                    </span>
                  </div>
                </button>

                {isActive && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <p className="text-[#CBCBCB] font-14 mb-4">
                      {step.description}
                    </p>
                    <div className="overflow-hidden rounded-xl border border-[#1f1f1f]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        height={200}
                        className="w-auto object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default TrustSection;

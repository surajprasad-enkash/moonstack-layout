"use client";
import React from "react";

interface StepCardProps {
  index: number; // automatically passed from map
  title: string;
  description: string;
  accentColor?: string;
}

const StepCard: React.FC<StepCardProps> = ({
  index,
  title,
  description,
  accentColor = "#00FF88",
}) => {
  return (
    <div className="relative mb-[90px] flex h-[-webkit-fill-available] flex-col items-start gap-6 bg-[#001A09] p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(12,232,89,0.3)] md:flex-row">
      <div className="absolute top-[-33px] rounded-full border-[2px] border-[#00B23F] p-2">
        <div
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 bg-[#00B23F] text-lg font-semibold text-white"
          style={{
            borderColor: accentColor,
            boxShadow: `0 0 10px ${accentColor}50`,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>{" "}
      {/* Text Content */}
      <div className="pt-14">
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;

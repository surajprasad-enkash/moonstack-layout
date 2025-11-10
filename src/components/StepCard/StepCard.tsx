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
    <div className="relative h-[-webkit-fill-available] flex flex-col md:flex-row items-start gap-6  p-6 bg-[#001A09]  transition-all duration-300 hover:shadow-[0_0_25px_rgba(12,232,89,0.3)] mb-[90px]">
      {/* Number Badge */}
      <div className="p-2 border-[2px] border-[#00B23F]  absolute top-[-33px]  rounded-full ">
        <div
          className="flex-shrink-0   text-white bg-[#00B23F] flex items-center justify-center w-12 h-12 rounded-full border-2 font-semibold text-lg"
          style={{
            borderColor: accentColor,
            boxShadow: `0 0 10px ${accentColor}50`,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>{" "}
      {/* Text Content */}
      <div className="pt-20">
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;

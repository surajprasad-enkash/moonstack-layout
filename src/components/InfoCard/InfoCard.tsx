import React from "react";
import Heading from "../Heading/Heading";
import Image, { StaticImageData } from "next/image";

interface InfoCardProps {
  percentage: string;
  title: string;
  description: string;
  icon: StaticImageData | string;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  percentage,
  title,
  description,
  icon,
  className = "",
}) => {
  return (
    <div
      className={`p-10 pt-4 right-gradient-bdr bg-gradient-to-r from-transparent to-transparent hover:from-transparent hover:to-[#0D320D] transition duration-400 rounded-2xl ${className}`}
    >
      {/* Top Row: Percentage + Icon */}
      <div className="flex justify-between items-center">
        <Heading
          headingTag="h3"
          className="pt-3 font-24 text-start font-semibold"
          content={[{ text: percentage, color: "text-white" }]}
        />
        <Image src={icon} alt={title} className="w-9" />
      </div>

      {/* Title */}
      <Heading
        headingTag="h4"
        className="pt-3 font-18 text-start mt-10 poppins-semibold"
        content={[{ text: title, color: "text-white" }]}
      />

      {/* Description */}
      <Heading
        headingTag="p"
        className="pt-3 font-14 text-start mt-2 font-medium"
        content={[{ text: description, color: "text-white" }]}
      />
    </div>
  );
};

export default InfoCard;

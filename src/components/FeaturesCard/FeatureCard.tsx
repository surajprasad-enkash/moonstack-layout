import React from "react";
import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
  imgSrc: StaticImageData | string;
  alt?: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imgSrc,
  alt = "",
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`w-full  p-10 feature-card-gradient-bdr bg-gradient-to-r from-transparent to-transparent hover:from-transparent hover:to-[#0D320D] transition duration-400 rounded-2xl ${className}`}
    >
      <Image src={imgSrc} alt={alt} className="w-9" />

      <div className="mt-10 poppins-semibold font-20">{title}</div>
      <div className="mt-4 poppins-medium font-14 leading-[200%]">
        {description}
      </div>
    </div>
  );
};

export default FeatureCard;

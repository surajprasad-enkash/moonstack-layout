import React from "react";
import Image, { StaticImageData } from "next/image";

interface ServicesCardProps {
  imgSrc: StaticImageData | string;
  alt?: string;
  title: string;
  description: string;
  className?: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  imgSrc,
  alt = "",
  title,
  description,
  className = "",
}) => {
  //
  return (
    <div
      className={`w-full p-10 pt-4 services-card-gradient bg-gradient-to-r from-transparent to-transparent hover:from-transparent hover:to-[#0D320D] transition duration-400 ${className}`}
    >
      <div className="flex  items-center gap-6">
        <div className="w-full lg:w-[80%]">
          <div className="poppins-semibold font-20">{title}</div>
        </div>

        <div className="w-full lg:w-[20%] flex justify-end">
          <Image src={imgSrc} alt={alt} className="w-5 h-auto" />
        </div>
      </div>
      <div className="w-full lg:w-[80%]">
        <div className="mt-4 poppins-medium font-14 leading-[200%]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

import React from "react";
import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
  imgSrc: StaticImageData | string;
  alt?: string;
  title: string;
  description: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  imgSrc,
  alt = "",
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`w-full  p-10  feature-card-gradient-bdr bg-gradient-to-r from-transparent to-transparent hover:from-transparent hover:to-[#0D320D] transition duration-400 rounded-2xl ${className}`}
    >
      <div className="flex  gap-3 items-center">
        <Image src={imgSrc} alt={alt} className="w-8 h-8" />

        <div className="text-start poppins-semibold font-18">{title}</div>
      </div>

      <div className="mt-4 poppins-medium text-[#DFDFDF] font-14 leading-[200%] text-left">
        {description}
      </div>
    </div>
  );
};

export default CategoryCard;

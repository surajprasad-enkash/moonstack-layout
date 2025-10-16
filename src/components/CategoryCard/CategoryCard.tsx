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
      <div className="flex text-center gap-3">
        <Image src={imgSrc} alt={alt} className="w-8" />

        <div className=" poppins-semibold font-18">{title}</div>
      </div>

      <div className="mt-4 poppins-medium font-14 leading-[200%]">
        {description}
      </div>
    </div>
  );
};

export default CategoryCard;

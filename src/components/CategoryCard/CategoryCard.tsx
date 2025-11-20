import React from "react";
import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
  imgSrc: StaticImageData | string;
  alt?: string;
  title: string;
  description: string;
  className?: string;
  /** 🆕 Title position - top (default) or bottom */
  titlePosition?: "top" | "bottom";
  /** 🆕 Image width and height customization */
  imgWidth?: number | string;
  imgHeight?: number | string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  imgSrc,
  alt = "",
  title,
  description,
  className = "feature-card-gradient-bdr",
  titlePosition = "top",
  imgWidth = 32,
  imgHeight = 32,
}) => {
  return (
    <div
      className={`w-full p-10  hover:bg-[var(--Primary-200,#0A662A)] 
      transition-colors duration-300 bg-gradient-to-r from-transparent to-transparent 
      hover:from-transparent hover:to-[#0D320D] rounded-2xl ${className}`}
    >
      {titlePosition === "top" ? (
        <>
          <div className="flex gap-3 items-center">
            <Image
              src={imgSrc}
              alt={alt}
              width={Number(imgWidth)}
              height={Number(imgHeight)}
              className="object-contain"
            />
            <div className="text-start poppins-semibold font-18">{title}</div>
          </div>
          <div className="mt-4 poppins-medium text-[#DFDFDF] font-14 leading-[200%] text-left">
            {description}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-start">
            <Image
              src={imgSrc}
              alt={alt}
              width={Number(imgWidth)}
              height={Number(imgHeight)}
              className="object-contain"
            />
            <div className="mt-12 poppins-semibold font-18">{title}</div>
          </div>
          <div className="mt-4 poppins-medium text-[#DFDFDF] font-14 leading-[200%] text-left">
            {description}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryCard;

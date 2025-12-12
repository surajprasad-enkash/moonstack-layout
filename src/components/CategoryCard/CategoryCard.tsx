import React from "react";
import Image, { StaticImageData } from "next/image";
import Heading from "../Heading/Heading";

interface CategoryCardProps {
  imgSrc: StaticImageData | string;
  alt?: string;
  title: string;
  description?: string;
  className?: string;
  classTextAlign?: string;
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
  classTextAlign,
  className = "feature-card-gradient-bdr",
  titlePosition = "top",
  imgWidth = 20,
  imgHeight = 20,
}) => {
  return (
    <div
      className={`bg-primary-200 w-full rounded-2xl from-transparent to-transparent p-5 transition-colors duration-300 hover:bg-[var(--Primary-200,#0A662A)] hover:from-transparent hover:to-[#0D320D] ${className}`}
    >
      {titlePosition === "top" ? (
        <>
          <div className={`flex items-center gap-3 ${classTextAlign}`}>
            <Image
              src={imgSrc}
              alt={alt}
              width={Number(imgWidth)}
              height={Number(imgHeight)}
              className="object-contain"
            />

            <Heading
              headingTag="h6"
              className="font-semibold text-white"
              content={title}
            />
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
            <Heading
              headingTag="h4"
              className="pt-3 font-semibold text-white"
              content={title}
            />
          </div>
          <Heading
            headingTag="p"
            className="text-light-grey mt-4 text-left"
            content={description}
          />
        </>
      )}
    </div>
  );
};

export default CategoryCard;

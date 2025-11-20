"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Heading from "@/components/Heading/Heading";
import CustomButton from "@/components/CommanButton/CommanButton";

interface HireNowBannerProps {
  headingContent: { text: string; color?: string }[];
  subHeadingContent?: { text: string; color?: string }[];
  buttonText: string;
  image: StaticImageData | string;
  /** Optional props */
  reverse?: boolean; // to switch image and text sides
  bgGradient?: string; // custom background gradient
  containerClassName?: string; // extra styles
}

const HireNowBanner: React.FC<HireNowBannerProps> = ({
  headingContent,
  subHeadingContent,
  buttonText,
  image,
  reverse = false,
  bgGradient = "bg-[linear-gradient(180deg,rgba(110,250,255,0.2)_0%,rgba(0,207,73,0.2)_100%)]",
  containerClassName = "",
}) => {
  return (
    <section
      className={`bg-black text-white px-4 sm:px-10 py-3 md:py-10 container mx-auto ${containerClassName}`}
    >
      <div
        className={`${bgGradient} relative py-20 px-[60px] rounded-[40px] overflow-hidden`}
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Left Content */}
          <div className="relative z-10">
            <Heading
              headingTag="h3"
              className="text-left font-semibold"
              content={headingContent}
            />

            {subHeadingContent && (
              <Heading
                headingTag="p"
                className="text-left pt-2 pb-[38px]"
                content={subHeadingContent}
              />
            )}

            <CustomButton text={buttonText} variant="primary" />
          </div>

          {/* Right Image */}
          <div className="absolute right-[50px] bottom-0">
            <Image
              src={image}
              alt="banner-image"
              width={430}
              height={430}
              className="object-contain z-0"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireNowBanner;

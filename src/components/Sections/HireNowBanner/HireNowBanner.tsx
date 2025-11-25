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
    <section className="bg-black">
      <div
        className={`container mx-auto px-4 py-3 text-white md:px-8 md:py-10 ${containerClassName}`}
      >
        <div
          className={`${bgGradient} relative overflow-hidden rounded-[40px] px-[60px] py-20`}
        >
          <div
            className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 ${
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
                  className="pt-2 pb-[38px] text-left"
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
                className="z-0 object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireNowBanner;

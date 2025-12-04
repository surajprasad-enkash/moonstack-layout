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
  reverse?: boolean;
  bgGradient?: string;
  imageHeight?: string;
  containerClassName?: string;
}

const HireNowBanner: React.FC<HireNowBannerProps> = ({
  headingContent,
  subHeadingContent,
  buttonText,
  image,
  reverse = false,
  bgGradient = "bg-[linear-gradient(180deg,rgba(110,250,255,0.2)_0%,rgba(0,207,73,0.2)_100%)]",
  containerClassName = "",
  imageHeight = "md:w-[405px]",
}) => {
  return (
    <section className="relative bg-black">
      <div
        className={`container mx-auto px-4 py-6 text-white md:px-8 md:py-12 ${containerClassName}`}
      >
        <div
          className={`${bgGradient} overflow-hidden rounded-[30px] px-6 py-10 md:rounded-[40px] md:px-[60px] md:py-20`}
        >
          <div
            className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2`}
          >
            {/* Text Content */}
            <div className={`z-10 ${reverse ? "md:order-2" : "md:order-1"}`}>
              <Heading
                headingTag="h3"
                className="text-left font-semibold"
                content={headingContent}
              />

              {subHeadingContent && (
                <Heading
                  headingTag="p"
                  className="pt-2 pb-8 text-left"
                  content={subHeadingContent}
                />
              )}

              <CustomButton text={buttonText} variant="primary" />
            </div>

            {/* Image Section */}
            <div
              className={`flex justify-center md:justify-end ${
                reverse ? "md:order-1" : "md:order-2"
              }`}
            >
              <div
                className={`md:stati absolute bottom-0 left-1/2 h-[220px] w-full -translate-x-1/2 md:left-auto md:h-[427px] md:translate-x-0 ${imageHeight}`}
              >
                <Image
                  src={image}
                  alt="banner-image"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireNowBanner;

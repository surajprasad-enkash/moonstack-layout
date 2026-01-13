"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Heading from "@/components/Heading/Heading";
import CustomButton from "@/components/CommanButton/CommanButton";
import topEllips from "@/assets/Quote_Ellips_One.svg";
import bottomEllips from "@/assets/Quote_Ellips_Two.svg";

interface GetQuoteBannerProps {
  headingContent: { text: string; color?: string }[];
  subHeadingContent?: { text: string; color?: string }[];
  buttonText: string;
  image: StaticImageData | string;
  reverse?: boolean;
  bgGradient?: string;
  containerClassName?: string;
}

const GetQuoteBanner: React.FC<GetQuoteBannerProps> = ({
  headingContent,
  subHeadingContent,
  buttonText,

  containerClassName = "",
}) => {
  return (
    <section
      className={`relative bg-[linear-gradient(266.62deg,#007860_21.37%,#076127_72.13%)] px-4 py-3 text-white sm:px-10 md:py-20 ${containerClassName}`}
    >
      {" "}
      <div className="absolute top-0 left-0">
        <Image
          src={topEllips}
          alt="banner-image"
          className="z-0 object-contain"
          priority
        />
      </div>
      <div className="container mx-auto">
        <div className="relative z-10 mx-auto text-center">
          <Heading
            headingTag="h3"
            className="text-center font-semibold"
            content={headingContent}
          />

          {subHeadingContent && (
            <Heading
              headingTag="p"
              className="pt-2 pb-[28px] text-center"
              content={subHeadingContent}
            />
          )}

          <CustomButton text={buttonText} />
        </div>

        <div className="absolute right-0 bottom-0">
          <Image
            src={bottomEllips}
            alt="banner-image"
            className="z-0 object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default GetQuoteBanner;

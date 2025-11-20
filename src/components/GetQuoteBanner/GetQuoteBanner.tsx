"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Heading from "@/components/Heading/Heading";
import CustomButton from "@/components/CommanButton/CommanButton";
import topEllips from "../../../public/assets/Quote_Ellips_One.svg";
import bottomEllips from "../../../public/assets/Quote_Ellips_Two.svg";

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
      className={` relative bg-[linear-gradient(266.62deg,#007860_21.37%,#076127_72.13%)] text-white px-4 sm:px-10 py-3 md:py-20 container mx-auto ${containerClassName}`}
    >
      {" "}
      <div className="absolute left-0 top-0">
        <Image
          src={topEllips}
          alt="banner-image"
          className="object-contain z-0"
          priority
        />
      </div>
      <div>
        <div className="relative z-10 text-center mx-auto">
          <Heading
            headingTag="h3"
            className="text-center font-semibold"
            content={headingContent}
          />

          {subHeadingContent && (
            <Heading
              headingTag="p"
              className="text-center pt-2 pb-[28px]"
              content={subHeadingContent}
            />
          )}

          <CustomButton text={buttonText} variant="primary" />
        </div>


        <div className="absolute right-0 bottom-0">
          <Image
            src={bottomEllips}
            alt="banner-image"
            className="object-contain z-0"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default GetQuoteBanner;

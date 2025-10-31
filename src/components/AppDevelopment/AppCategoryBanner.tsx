import React from "react";
import Image, { StaticImageData } from "next/image";
import CustomButton from "../CommanButton/CommanButton";
import Heading from "../Heading/Heading";

interface BannerContent {
  text: string;
  color?: string;
}

interface AppCategoryBannerProps {
  title: BannerContent[];
  description: BannerContent[];
  image: StaticImageData;
  buttonText?: string;
  bgColor?: string;
  containerWidth?: string;
  textAlign?: "left" | "center" | "right";
}

const AppCategoryBanner: React.FC<AppCategoryBannerProps> = ({
  title,
  description,
  image,
  buttonText = "Get Started",
  bgColor = "bg-black",
  containerWidth,
  textAlign = "center",
}) => {
  return (
    <div
      className={`${bgColor} relative overflow-hidden container mx-auto pb-14 pb-md-20`}
    >
      <div className="relative w-full flex justify-center">
        <Image
          src={image}
          alt="banner image"
          height={356}
          width={950}
          className="object-contain z-20 pt-10 md:pt-24 m-auto"
        />

        {/* 🔥 Gradient Blur Overlay */}
        <div className="absolute bottom-[-70px] left-0 w-full h-40 bg-[radial-gradient(circle_at_center,_rgba(0,207,73,0.45)_0%,_rgba(0,0,0,0.9)_100%)] blur-2xl z-30" />
      </div>
      <div className=" py-7 text-center relative z-50">
        <CustomButton text={buttonText} variant="primary" />
      </div>
      <div
        className={`flex flex-col items-center px-4 md:px-8  ${containerWidth} text-${textAlign} justify-center m-auto`}
      >
        <Heading
          headingTag="h1"
          className="font-bold  font-40 tracking-[0em] leading-[140%]"
          content={title}
        />

        <Heading
          headingTag="p"
          className="font-medium pt-4"
          content={description}
        />
      </div>
    </div>
  );
};

export default AppCategoryBanner;

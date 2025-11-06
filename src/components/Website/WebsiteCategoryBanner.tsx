import React from "react";
import Image, { StaticImageData } from "next/image";
import CustomButton from "../CommanButton/CommanButton";
import Heading from "../Heading/Heading";

interface BannerContent {
  text: string;
  color?: string;
}

interface WebsiteCategoryBannerProps {
  title: BannerContent[];
  description: BannerContent[];
  image: string | StaticImageData;
  buttonText?: string;
  bgColor?: string;
  containerWidth?: string;
  textAlign?: "left" | "center" | "right";
  backgroundImage?: string | StaticImageData; // 🆕 added background image prop
}

const WebsiteCategoryBanner: React.FC<WebsiteCategoryBannerProps> = ({
  title,
  description,
  image,
  buttonText = "Get Started",
  bgColor = "bg-black",
  containerWidth,
  textAlign = "center",
  backgroundImage, // 🆕
}) => {
  return (
    <div
      className={`${bgColor} relative overflow-hidden container mx-auto items-center md:items-start px-4 md:px-8 py-12 md:pt-40 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-4`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${
              typeof backgroundImage === "string"
                ? backgroundImage
                : (backgroundImage as StaticImageData).src
            })`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Text Section */}
      <div
        className={`flex flex-col items-start px-4 md:px-8 ${containerWidth} text-${textAlign} justify-center m-auto relative z-10`}
      >
        <Heading
          headingTag="h1"
          className="font-bold font-40 tracking-[0em] leading-[140%] text-start"
          content={title}
        />

        <Heading
          headingTag="p"
          className="font-medium pt-4 text-start"
          content={description}
        />
        <div className="py-7 text-center relative z-40">
          <CustomButton text={buttonText} variant="primary" />
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full flex justify-center z-10">
        <Image
          src={image}
          alt="banner image"
          className="object-contain w-full h-auto m-auto"
        />
      </div>

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />
    </div>
  );
};

export default WebsiteCategoryBanner;

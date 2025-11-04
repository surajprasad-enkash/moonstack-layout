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
}

const WebsiteCategoryBanner: React.FC<WebsiteCategoryBannerProps> = ({
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
      className={`${bgColor} relative overflow-hidden container mx-autoitems-center md:items-start px-4 md:px-8 py-12 md:pt-40 md:pb-20  grid grid-cols-2 gap-4`}
    >
      <div
        className={`flex flex-col items-start px-4 md:px-8  ${containerWidth} text-${textAlign} justify-center m-auto`}
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
        <div className=" py-7 text-center relative z-40">
          <CustomButton text={buttonText} variant="primary" />
        </div>
      </div>

      <div className="relative w-full flex justify-center">
        <Image
          src={image}
          alt="banner image"
          height={430}
          width={430}
          className="object-containm-auto"
        />
      </div>
    </div>
  );
};

export default WebsiteCategoryBanner;
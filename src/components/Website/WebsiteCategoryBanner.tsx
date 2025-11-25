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
  backgroundImage?: string | StaticImageData;
}

const WebsiteCategoryBanner: React.FC<WebsiteCategoryBannerProps> = ({
  title,
  description,
  image,
  buttonText = "Get Started",
  bgColor = "bg-black",
  containerWidth,
  textAlign = "center",
  backgroundImage,
}) => {
  return (
    <section
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
      <div className="container mx-auto">
        <div
          className={`${bgColor} relative grid grid-cols-1 items-center gap-4 overflow-hidden px-4 py-12 md:grid-cols-2 md:items-start md:px-8 md:!pt-[160px] md:pb-20`}
        >
          <div
            className={`flex flex-col items-start ${containerWidth} text-${textAlign} relative z-10 m-auto justify-center`}
          >
            <Heading
              headingTag="h1"
              className="text-start font-semibold"
              content={title}
            />

            <Heading
              headingTag="p"
              className="pt-4 text-start font-medium"
              content={description}
            />
            <div className="relative z-40 py-7 text-center">
              <CustomButton text={buttonText} variant="primary" />
            </div>
          </div>

          <div className="relative z-10 flex w-full justify-center">
            <Image
              src={image}
              alt="banner image"
              height={423}
              className="m-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteCategoryBanner;

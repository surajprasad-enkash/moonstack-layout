import React from "react";
import Image, { StaticImageData } from "next/image";
import CustomButton from "../CommanButton/CommanButton";
import Heading from "../Heading/Heading";
import Tag from "../Tag/Tag";
import circleIcon from "public/assets/green-circle-icon.svg";
import MarqueeComponent from "../Homepage/Marquee";

interface BannerContent {
  text: string;
  color?: string;
}

interface WebsiteCategoryBannerProps {
  title: BannerContent[];
  description: BannerContent[];
  image: string | StaticImageData;
  buttonText?: string;
  tabText?: string;
  bgColor?: string;
  containerWidth?: string;
  textAlign?: "left" | "center" | "right";
  backgroundImage?: string | StaticImageData;
  imageHeight?: number | string;
}

const WebsiteCategoryBanner: React.FC<WebsiteCategoryBannerProps> = ({
  title,
  description,
  image,
  buttonText = "Get Started",
  bgColor = "bg-black ",
  containerWidth,
  textAlign = "center",
  backgroundImage,
  tabText,
  imageHeight = 420,
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
      className="px-5"
    >
      <div className="container mx-auto">
        <div
          className={`${bgColor} relative grid grid-cols-1 items-center gap-4 overflow-hidden py-12 pt-28 md:grid-cols-2 md:items-start md:pt-[124px] md:pb-20`}
        >
          <div
            className={`flex flex-col items-start ${containerWidth} text-${textAlign} relative z-10 my-auto justify-center`}
          >
            {" "}
            {tabText && <Tag text={tabText} variant="blur" icon={circleIcon} />}
            <Heading
              headingTag="h1"
              className="pt-2 text-start font-extrabold"
              content={title}
            />
            <Heading
              headingTag="p"
              className="pt-4 text-start font-medium"
              content={description}
            />
            <div className="relative z-40 py-7 text-center">
              <CustomButton text={buttonText} />
            </div>
          </div>

          <div className="relative z-10 flex w-full justify-center">
            <Image
              src={image}
              alt="banner image"
              height={typeof imageHeight === "number" ? imageHeight : undefined}
              style={{
                height:
                  typeof imageHeight === "string" ? imageHeight : undefined,
              }}
              className="m-auto object-contain"
            />
          </div>
        </div>
      </div>
      <div className="bg-black opacity-[0.3]">
        <MarqueeComponent />
      </div>
    </section>
  );
};

export default WebsiteCategoryBanner;

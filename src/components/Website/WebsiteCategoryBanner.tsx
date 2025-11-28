import React from "react";
import Image, { StaticImageData } from "next/image";
import CustomButton from "../CommanButton/CommanButton";
import Heading from "../Heading/Heading";
import Tag from "../Tag/Tag";
import circleIcon from "../../../public/assets/green-circle-icon.svg";

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

  /** NEW: Dynamic image height **/
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
  imageHeight = 420, // default height
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
          className={`${bgColor} relative grid grid-cols-1 items-center gap-4 overflow-hidden px-4 py-12 pt-28 md:grid-cols-2 md:items-start md:px-8 md:pt-[150px] md:pb-20`}
        >
          <div
            className={`flex flex-col items-start ${containerWidth} text-${textAlign} relative z-10 my-auto justify-center`}
          >
            {" "}
            {tabText && <Tag text={tabText} variant="blur" icon={circleIcon} />}
            <Heading
              headingTag="h1"
              className="pt-2 text-start font-semibold"
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
              height={typeof imageHeight === "number" ? imageHeight : undefined}
              style={{
                height:
                  typeof imageHeight === "string" ? imageHeight : undefined,
                width: "auto",
              }}
              className="m-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteCategoryBanner;

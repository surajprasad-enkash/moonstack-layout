import { motion } from "framer-motion";
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
  image: string | StaticImageData;
  buttonText?: string;
  bgColor?: string;
  bgImage?: string | StaticImageData;
  containerWidth?: string;
  textAlign?: "left" | "center" | "right";
}

const AppCategoryBanner: React.FC<AppCategoryBannerProps> = ({
  title,
  description,
  image,
  buttonText = "Get Started",
  bgColor = "bg-black",
  bgImage,
  containerWidth,
  textAlign,
}) => {
  return (
    <div
      className={`${bgColor} grid grid-cols-2 relative overflow-hidden container mx-auto pb-14 pt-24`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${
                typeof bgImage === "string" ? bgImage : (bgImage as any).src
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      {/* Text Section */}
      <div
        className={`flex flex-col items-start px-4 md:px-8 ${containerWidth} text-${textAlign} m-auto`}
      >
        <Heading
          headingTag="h1"
          className="font-bold font-40 tracking-[0em] leading-[140%]"
          content={title}
        />

        <Heading
          headingTag="p"
          className="font-medium pt-4"
          content={description}
        />

        <div className="py-7 text-center relative z-50">
          <CustomButton text={buttonText} variant="primary" />
        </div>
      </div>

      {/* ✅ Image Section with smooth bounce once */}
      <motion.div
        className="relative w-full flex justify-center"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [-20, 0], opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={image}
          alt="banner image"
          className="object-contain w-full h-auto z-20 m-auto"
        />
      </motion.div>
    </div>
  );
};

export default AppCategoryBanner;

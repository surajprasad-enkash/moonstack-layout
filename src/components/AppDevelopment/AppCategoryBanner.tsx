import { motion } from "framer-motion";
import React from "react";
import Image, { StaticImageData } from "next/image";
import CustomButton from "../CommanButton/CommanButton";
import Heading from "../Heading/Heading";
import MarqueeComponent from "../Homepage/Marquee";

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
  textAlign = "left",
}) => {
  return (
    <section
      className={`${bgColor}`}
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
      <div className="container mx-auto">
        <div
          className={`relative grid grid-cols-1 gap-10 px-4 py-12 sm:px-8 md:pt-32 md:pb-20 lg:grid-cols-2 lg:items-center`}
        >
          {/* TEXT SECTION */}
          <div
            className={`flex flex-col justify-center ${containerWidth ?? "w-full"} text-${textAlign} `}
          >
            <Heading
              headingTag="h1"
              className="text-start font-extrabold md:text-left"
              content={title}
            />

            <Heading
              headingTag="p"
              className="pt-4 text-start font-medium md:text-left"
              content={description}
            />

            <div className="py-7">
              <CustomButton text={buttonText} variant="primary" />
            </div>
          </div>

          <motion.div
            className="relative flex w-full justify-center"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [-20, 0], opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={image}
              alt="banner image"
              className="h-auto w-full max-w-[500px] object-contain"
              priority
            />
          </motion.div>
        </div>
        <div className="grid grid-cols-3 gap-4 px-4 sm:px-8">
          <div>
            <Heading
              headingTag="p"
              className="pt-4 text-start font-semibold md:text-left"
              content="Join our ecosystem of partners"
            />
          </div>
          <div className="marquee-in-services col-span-2">
            <MarqueeComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCategoryBanner;

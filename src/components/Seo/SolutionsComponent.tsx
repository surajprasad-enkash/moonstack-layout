import React from "react";
import CustomButton from "../CommanButton/CommanButton";
import Heading from "../Heading/Heading";
import FeatureCard from "../FeaturesCard/FeatureCard";
import Image, { StaticImageData } from "next/image";

interface FeatureItem {
  imgSrc: StaticImageData | string;
  title: string;
  description: string;
}

interface SolutionsProps {
  buttonText?: string;
  buttonVariant?: "small" | "primary" | "rotating";
  headingText: string;
  headingClassName?: string;
  subHeadingText?: string;
  subHeadingClassName?: string;
  featuresData: FeatureItem[];
  topImage?: StaticImageData | string;
  bottomImage?: StaticImageData | string;
  titleClassName?: string;
  cardClassName?: string;
}

const SolutionsComponent: React.FC<SolutionsProps> = ({
  buttonText,
  buttonVariant = "small",
  headingText,
  headingClassName = "",
  subHeadingText = "",
  subHeadingClassName = "md:text-left",
  featuresData,
  topImage,
  titleClassName = "md:flex-row",
  bottomImage,
  cardClassName,
}) => {
  return (
    <div
      className={`bg-black text-white px-4 sm:px-10 py-12 md:py-20 relative container mx-auto ${titleClassName}`}
    >
      {topImage && (
        <div className="absolute right-0 top-[10%]">
          <Image src={topImage} alt="top decoration" />
        </div>
      )}

      {/* Heading Section */}
      <div className="flex flex-col  items-center justify-between pb-12 md:pb-10">
        <div className="w-full md:w-2/5 lg:w-2/5 xl:w-[40%] poppins-bold text-center md:text-left font-bold mb-6 md:mb-0">
          {buttonText && (
            <CustomButton text={buttonText} variant={buttonVariant} />
          )}

          <Heading
            headingTag="h2"
            className={`pt-3 font-36  ${headingClassName}`}
            content={[{ text: headingText, color: "text-white" }]}
          />
        </div>

        {subHeadingText && (
          <div className="w-full md:w-2/5 lg:w-2/5 xl:w-[50%] text-center leading-[200%]">
            <Heading
              headingTag="p"
              className={`pt-6 ${subHeadingClassName}`}
              content={[{ text: subHeadingText, color: "text-gray-100" }]}
            />
          </div>
        )}
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            imgSrc={feature.imgSrc}
            title={feature.title}
            description={feature.description}
            className={`${cardClassName}`}
          />
        ))}
      </div>

      {/* Bottom Image */}
      {bottomImage && (
        <div className="absolute left-0 bottom-0">
          <Image src={bottomImage} alt="bottom decoration" />
        </div>
      )}
    </div>
  );
};

export default SolutionsComponent;

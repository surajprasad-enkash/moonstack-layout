import React from "react";
import Heading from "../Heading/Heading";
import { StaticImageData } from "next/image";
import BenifitsCard from "../BenifitsCard/BenifitsCard";
import InfoCard from "../InfoCard/InfoCard";
import { infoData } from "@/constants/backend-developer";

interface FeatureItem {
  imgSrc: StaticImageData | string;
  title: string;
  description: string;
}

interface SolutionsProps {
  headingContent: { text: string; color?: string; className?: string }[];
  headingClassName?: string;
  subHeadingText?: string;
  subHeadingClassName?: string;
  featuresData: FeatureItem[];
}

const SolutionsComponent: React.FC<SolutionsProps> = ({
  headingContent,
  headingClassName = "",
  subHeadingText = "",
  subHeadingClassName = "",
  featuresData,
}) => {
  return (
    <div className="relative container mx-auto bg-black px-4 py-12 sm:px-10 md:py-20">
      <div className="flex flex-col items-center justify-between pb-12 md:flex-row md:pb-20">
        <div className="poppins-bold mb-6 w-full text-center font-bold md:mb-0 md:w-2/5 md:text-left lg:w-2/5 xl:w-[40%]">
          <Heading
            headingTag="h3"
            className={`text-start ${headingClassName}`}
            content={headingContent}
          />
        </div>

        {subHeadingText && (
          <div className="w-full text-center leading-[200%] md:w-2/5 md:text-left lg:w-2/5 xl:w-[50%]">
            <Heading
              headingTag="p"
              className={`py-6 ${subHeadingClassName}`}
              content={[{ text: subHeadingText, color: "text-gray-100" }]}
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuresData.map((feature, index) => (
          <BenifitsCard
            key={index}
            imgSrc={feature.imgSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {infoData.map((feature, index) => (
          <InfoCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            percentage="85%"
          />
        ))}
      </div>
    </div>
  );
};

export default SolutionsComponent;

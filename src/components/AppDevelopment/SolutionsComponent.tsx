import React from "react";
import Heading from "../Heading/Heading";
import { StaticImageData } from "next/image";
import BenifitsCard from "../BenifitsCard/BenifitsCard";
import InfoCard from "../InfoCard/InfoCard";
import { infoData } from "@/pages/backend-developer/data";

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
    <div className="bg-black  px-4 sm:px-10 py-12 md:py-20 relative container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between pb-12 md:pb-20">
        <div className="w-full md:w-2/5 lg:w-2/5 xl:w-[40%] poppins-bold text-center md:text-left font-bold mb-6 md:mb-0">
          <Heading
            headingTag="h2"
            className={`pt-3 font-36 text-start ${headingClassName}`}
            content={headingContent}
          />
        </div>

        {subHeadingText && (
          <div className="w-full md:w-2/5 lg:w-2/5 xl:w-[50%] text-center md:text-left leading-[200%]">
            <Heading
              headingTag="p"
              className={`py-6 ${subHeadingClassName}`}
              content={[{ text: subHeadingText, color: "text-gray-100" }]}
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresData.map((feature, index) => (
          <BenifitsCard
            key={index}
            imgSrc={feature.imgSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
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

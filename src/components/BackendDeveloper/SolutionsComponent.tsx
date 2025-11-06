import React from "react";
import Heading from "../Heading/Heading";
import { StaticImageData } from "next/image";
import BenifitsCard from "../BenifitsCard/BenifitsCard";
import InfoCard from "../InfoCard/InfoCard";
import { motion } from "framer-motion";

interface FeatureItem {
  imgSrc: StaticImageData | string;
  title: string;
  description: string;
  /** ✅ Optional: allows per-card styling */
  cardClassName?: string;
}

interface InfoItem {
  icon: StaticImageData | string;
  title: string;
  description: string;
  percentage?: string;
}

interface SolutionsProps {
  headingContent: { text: string; color?: string; className?: string }[];
  headingClassName?: string;
  titleClassName?: string;
  subHeadingText?: string;
  subHeadingClassName?: string;
  featuresData: FeatureItem[];
  infoData?: InfoItem[];
  showInfoSection?: boolean;
  cardClassName?: string;
  benifitCardClassName?: string;
  imgClassName?: string;
  bgColor?: string;
  ClassName?: string;
}

const SolutionsComponent: React.FC<SolutionsProps> = ({
  headingContent,
  headingClassName = "text-start",
  subHeadingText = "",
  subHeadingClassName = "",
  featuresData,
  infoData = [],
  showInfoSection = true,
  imgClassName,
  bgColor,
  cardClassName = "",
  titleClassName = "flex-col md:flex-row",
  benifitCardClassName = "lg:grid-cols-4",
  ClassName = "",
}) => {
  return (
    <div
      className={`bg-black px-4 sm:px-10 py-12 md:py-20 relative container mx-auto ${ClassName}`}
    >
      {/* Heading + Subheading */}
      <div className={`flex items-center pb-12 md:pb-20 ${titleClassName}`}>
        <motion.div
          className="w-full md:w-2/5 lg:w-2/5 xl:w-[40%] poppins-bold text-center md:text-left font-bold mb-6 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Heading
            headingTag="h2"
            className={`pt-3 font-36 ${headingClassName}`}
            content={headingContent}
          />
        </motion.div>

        {subHeadingText && (
          <motion.div
            className="w-full md:w-2/5 lg:w-2/5 xl:w-[50%] text-center md:text-left leading-[200%]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Heading
              headingTag="p"
              className={`py-6 ${subHeadingClassName}`}
              content={[{ text: subHeadingText, color: "text-gray-100" }]}
            />
          </motion.div>
        )}
      </div>

      {/* ✅ Features Section */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${benifitCardClassName}`}
      >
        {featuresData.map((feature, index) => (
          <BenifitsCard
            key={index}
            imgSrc={feature.imgSrc}
            title={feature.title}
            description={feature.description}
            className={`${cardClassName} ${feature.cardClassName || ""}`}
            imgClassName={imgClassName}
            bgColor={bgColor}
          />
        ))}
      </div>

      {/* ✅ Info Section (Optional) */}
      {showInfoSection && infoData.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {infoData.map((info, index) => (
            <InfoCard
              key={index}
              icon={info.icon}
              title={info.title}
              description={info.description}
              percentage={info.percentage || ""}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SolutionsComponent;

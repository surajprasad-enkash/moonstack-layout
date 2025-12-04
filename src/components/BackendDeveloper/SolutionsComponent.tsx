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
  cardIconSize?: string;
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
  cardIconSize = "",
}) => {
  return (
    <section className="bg-black">
      <div
        className={`relative container mx-auto px-4 py-12 md:px-8 md:py-20 ${ClassName}`}
      >
        {/* Heading + Subheading */}
        <div className={`flex pb-12 md:pb-14 ${titleClassName}`}>
          <motion.div
            className="mb-6 w-full text-center md:mb-0 md:w-1/2 md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Heading
              headingTag="h3"
              className={`font-semibold ${headingClassName} text-white`}
              content={headingContent}
            />
          </motion.div>

          {subHeadingText && (
            <motion.div
              className="w-full text-center leading-[200%] md:w-1/2 md:text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Heading
                headingTag="p"
                className={` ${subHeadingClassName} text-primary-grey`}
                content={[{ text: subHeadingText }]}
              />
            </motion.div>
          )}
        </div>

        {/* ✅ Features Section */}
        <div
          className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${benifitCardClassName}`}
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
              cardIconSize={cardIconSize}
            />
          ))}
        </div>

        {/* ✅ Info Section (Optional) */}
        {showInfoSection && infoData.length > 0 && (
          <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
};

export default SolutionsComponent;

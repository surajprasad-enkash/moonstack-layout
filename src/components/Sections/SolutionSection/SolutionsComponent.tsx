import React from "react";
import CustomButton from "../../CommanButton/CommanButton";
import Heading from "../../Heading/Heading";
import FeatureCard from "../../FeaturesCard/FeatureCard";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

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
    <section>
      <div
        className={`relative container mx-auto px-4 py-12 text-white sm:px-10 md:py-20 ${titleClassName}`}
      >
        {topImage && (
          <div className="absolute top-[10%] right-0">
            <Image src={topImage} alt="top decoration" />
          </div>
        )}

        <div className="flex flex-col items-center justify-between pb-12 md:pb-10">
          <div className="w-full text-center md:mb-0 md:w-3/4 md:text-left">
            {buttonText && (
              <CustomButton text={buttonText} variant={buttonVariant} />
            )}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Heading
                headingTag="h2"
                className={`font-semibold ${headingClassName}`}
                content={[{ text: headingText, color: "text-white" }]}
              />
            </motion.div>
          </div>

          {subHeadingText && (
            <div className="w-full text-center leading-[200%] md:w-3/4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Heading
                  headingTag="p"
                  className={`pt-4 ${subHeadingClassName}`}
                  content={[{ text: subHeadingText, color: "text-gray-100" }]}
                />
              </motion.div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        {bottomImage && (
          <div className="absolute bottom-0 left-0">
            <Image src={bottomImage} alt="bottom decoration" />
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionsComponent;

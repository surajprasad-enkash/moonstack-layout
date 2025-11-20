import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Heading from "../Heading/Heading";
import { TbPointFilled } from "react-icons/tb";

type ImportanceSectionProps = {
  image: StaticImageData;
  altText: string;
  points: string[];
  solutionPoints?: string[];
  tickIcon: StaticImageData;
  heading?: { text: string; color?: string; className?: string }[];
  subHeading?: string;
  reverse?: boolean; // Optional → if true, image will appear on right side
  solutionHeading?: { text: string; color?: string; className?: string }[];
};

const ImportanceSection: React.FC<ImportanceSectionProps> = ({
  image,
  altText,
  points,
  tickIcon,
  heading,
  subHeading,
  solutionHeading,
  solutionPoints,
  reverse = false,
}) => {
  return (
    <div
      className={`bg-black gap-20 utilize-bg px-4 sm:px-10 py-12 md:py-20 relative container mx-auto flex flex-col md:flex-row overflow-hidden ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Left or Right Image */}
      <div className="md:w-1/2 flex justify-center items-center md:h-auto">
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src={image}
            alt={altText}
            className="object-fill w-full h-full max-h-full rounded-2xl"
          />
        </div>
      </div>

      {/* Text & Points Section */}
      <div className="md:w-1/2 flex flex-col justify-center">
        {heading && (
          <Heading
            headingTag="h3"
            className="text-white font-semibold pb-4"
            content={heading}
          />
        )}
        {subHeading && (
          <Heading
            headingTag="p"
            className="text-white/80 text-lg pb-6"
            content={[{ text: subHeading }]}
          />
        )}

        <ul className="flex flex-col gap-3 pt-4">
          {points.map((text, index) => (
            <motion.li
              key={index}
              className="flex gap-5 items-start pb-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src={tickIcon}
                alt="tick"
                width={20}
                height={20}
                className="mt-1"
              />
              <Heading
                headingTag="p"
                className="font-medium text-sm text-start text-white"
                content={[{ text }]}
              />
            </motion.li>
          ))}
        </ul>

        {solutionHeading && (
          <>
            <Heading
              headingTag="h5"
              className="text-white  font-semibold pt-5"
              content={solutionHeading}
            />{" "}
            {solutionPoints && (
              <ul className="flex flex-col gap-3 pt-4">
                {solutionPoints.map((text, index) => (
                  <motion.li
                    key={index}
                    className="flex gap-5 pb-3 items-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <TbPointFilled className="text-[#0CE859]" />
                    <Heading
                      headingTag="p"
                      className="font-medium text-sm text-start text-white"
                      content={[{ text }]}
                    />
                  </motion.li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ImportanceSection;

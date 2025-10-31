import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Heading from "../Heading/Heading";

type ImportanceSectionProps = {
  image: StaticImageData;
  altText: string;
  points: string[];
  tickIcon: StaticImageData;
  heading?: string;
  subHeading?: string;
  reverse?: boolean; // Optional → if true, image will appear on right side
};

const ImportanceSection: React.FC<ImportanceSectionProps> = ({
  image,
  altText,
  points,
  tickIcon,
  heading,
  subHeading,
  reverse = false,
}) => {
  return (
    <div
      className={`bg-black utilize-bg px-4 sm:px-10 py-12 md:py-20 relative container mx-auto flex flex-col md:flex-row overflow-hidden ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Left or Right Image */}
      <div className="md:w-1/2 flex justify-center items-center">
        <Image
          src={image}
          alt={altText}
          width={522}
          height={382}
          className="object-contain"
        />
      </div>

      {/* Text & Points Section */}
      <div className="md:w-1/2 flex flex-col justify-center">
        {heading && (
          <Heading
            headingTag="h2"
            className="text-white text-3xl font-semibold pb-4"
            content={[{ text: heading }]}
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
      </div>
    </div>
  );
};

export default ImportanceSection;

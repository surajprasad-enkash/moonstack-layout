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
  reverse?: boolean;
  bgImg?: StaticImageData | string;
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
  bgImg,
}) => {
  return (
    <section
      className="w-full bg-cover bg-center"
      style={{
        backgroundImage: bgImg
          ? `url(${typeof bgImg === "string" ? bgImg : bgImg.src})`
          : "none",
      }}
    >
      <div
        className={`relative container mx-auto flex flex-col gap-20 overflow-hidden px-4 py-12 sm:px-4 md:flex-row md:px-8 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="flex items-center justify-center md:h-auto md:w-1/2">
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src={image}
              alt={altText}
              className="h-full max-h-full w-full rounded-2xl object-fill"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center md:w-1/2">
          {heading && (
            <Heading
              headingTag="h2"
              className="pb-4 font-bold"
              content={heading}
            />
          )}
          {subHeading && (
            <Heading
              headingTag="p"
              className="text-light-grey pb-6"
              content={[{ text: subHeading }]}
            />
          )}

          <ul className="flex flex-col gap-3 pt-4">
            {points.map((text, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-5 pb-3"
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
                  className="text-primary-grey text-start"
                  content={[{ text }]}
                />
              </motion.li>
            ))}
          </ul>

          {solutionHeading && (
            <>
              <Heading
                headingTag="h5"
                className="pt-5 font-semibold text-white"
                content={solutionHeading}
              />{" "}
              {solutionPoints && (
                <ul className="flex flex-col gap-3 pt-4">
                  {solutionPoints.map((text, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-5 pb-3"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <TbPointFilled className="text-[#0CE859]" />
                      <Heading
                        headingTag="p"
                        className="text-primary-grey text-start"
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
    </section>
  );
};

export default ImportanceSection;

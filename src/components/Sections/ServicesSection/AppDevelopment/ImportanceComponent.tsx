import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Heading from "../../../Heading/Heading";
import { TbPointFilled } from "react-icons/tb";

type ImportanceSectionProps = {
  image: StaticImageData | string;
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
  heading,
  subHeading,
  reverse = false,
  tickIcon,
  solutionHeading,
  solutionPoints,
}) => {
  return (
    <section className="w-full bg-gradient-to-b from-[#0B0B0B] to-[#121212]">
      <div
        className={`container mx-auto flex flex-col items-center gap-16 px-4 py-20 md:flex-row md:items-start ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE SIDE */}
        <div className="flex justify-center md:w-1/2">
          <motion.div
            className="relative rounded-2xl p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={image}
              alt={altText}
              height={860}
              className="rounded-2xl object-contain"
            />
          </motion.div>
        </div>

        {/* CONTENT SIDE */}
        <motion.div
          className="rounded-2xl bg-[#141414] p-8 shadow-[0_0_80px_rgba(0,0,0,0.6)] md:w-1/2 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {heading && (
            <Heading
              headingTag="h2"
              className="pb-4 text-3xl leading-tight font-semibold text-white"
              content={heading}
            />
          )}

          {subHeading && (
            <Heading
              headingTag="p"
              className="pb-6 text-base text-[#9CA3AF]"
              content={[{ text: subHeading }]}
            />
          )}

          {/* MAIN POINTS */}
          <ul className="flex flex-col gap-5">
            {points.map((text, index) => (
              <motion.li
                key={index}
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <span className="mt-1 contents items-center justify-center">
                  <Image src={tickIcon} alt="tick" />
                </span>

                <p className="text-sm leading-relaxed text-[#D1D5DB]">{text}</p>
              </motion.li>
            ))}
          </ul>

          {/* SOLUTION PART */}
          {solutionHeading && (
            <>
              <Heading
                headingTag="h5"
                className="pt-8 text-lg font-medium text-white"
                content={solutionHeading}
              />

              {solutionPoints && (
                <ul className="mt-4 flex flex-col gap-3">
                  {solutionPoints.map((text, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3 text-sm text-[#9CA3AF]"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.15 }}
                      viewport={{ once: true }}
                    >
                      <TbPointFilled className="text-[#6B7280]" />
                      {text}
                    </motion.li>
                  ))}
                </ul>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ImportanceSection;

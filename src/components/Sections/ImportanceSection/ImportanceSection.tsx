import React from "react";
import Image, { StaticImageData } from "next/image";
import Heading from "../../Heading/Heading";
import CustomButton from "@/components/CommanButton/CommanButton";
import Tag from "@/components/Tag/Tag";
import { motion } from "framer-motion";

interface IImportanceSectionProps {
  image: StaticImageData;
  title: string;
  highlightTitle?: string;
  description: string[];
  points?: string[]; // optional
  bgColor?: string;
  reverse?: boolean; // optional: for image on right
  buttonText?: string; // optional button
}

const ImportanceSection: React.FC<IImportanceSectionProps> = ({
  image,
  title,
  highlightTitle,
  description,
  points,
  bgColor = "bg-black",
  reverse = false,
  buttonText,
}) => {
  return (
    <div
      className={`${bgColor} utilize-bg px-4 sm:px-10 py-12 md:py-20 relative container mx-auto flex flex-col md:flex-row items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <Image
          src={image}
          alt={title}
          width={522}
          height={382}
          className="object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:px-8">
        {buttonText && (
          <div className="text-center pt-8 md:pt-0 md:text-start">
            <Tag text={buttonText} className="text-center" />
          </div>
        )}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Heading
            headingTag="h2"
            className="font-bold pt-3 font-36 text-start"
            content={[
              { text: `${title} `, color: "text-white" },
              highlightTitle
                ? { text: highlightTitle, color: "text-brand200" }
                : { text: "", color: "" },
            ]}
          />{" "}
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {description.map((desc, index) => (
            <Heading
              key={index}
              headingTag="p"
              className="font-medium pt-3 font-14 text-start"
              content={[{ text: desc, color: "text-white" }]}
            />
          ))}
        </motion.div>
        {points && points.length > 0 && (
          <ul className="flex flex-col gap-3 pt-8">
            {points.map((text, index) => (
              <li key={index} className="flex gap-4 items-start pb-3">
                <Image
                  src="/assets/green-tick-icon.svg"
                  alt="tick"
                  width={20}
                  height={20}
                />
                <Heading
                  headingTag="p"
                  className="font-medium font-14 text-start text-white"
                  content={[{ text }]}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ImportanceSection;
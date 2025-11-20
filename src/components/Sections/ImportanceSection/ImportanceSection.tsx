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
  points?: string[];
  bgColor?: string;
  reverse?: boolean;
  buttonText?: string;
  bgImage?: string | StaticImageData;
  services?: string[];
}

const ImportanceSection: React.FC<IImportanceSectionProps> = ({
  image,
  title,
  highlightTitle,
  description,
  points,
  bgImage,
  bgColor = "bg-black",
  reverse = false,
  buttonText,
  services,
}) => {
  return (
    <div
      style={
        bgImage
          ? {
              backgroundImage: `url(${
                typeof bgImage === "string" ? bgImage : bgImage.src
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
      className={`${bgColor} utilize-bg relative container mx-auto flex flex-col items-center px-4 py-12 sm:px-10 md:flex-row md:py-20 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="mt-8 w-full md:mt-0 md:w-1/2">
        {buttonText && (
          <div className="pt-8 text-center md:pt-0 md:text-start">
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
            className="font-36 pt-3 text-start font-bold"
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
              className="font-14 pt-3 text-start font-medium"
              content={[{ text: desc, color: "text-white" }]}
            />
          ))}
        </motion.div>
        {points && points.length > 0 && (
          <ul className="flex flex-col gap-3 pt-8">
            {points.map((text, index) => (
              <li key={index} className="flex items-start gap-4 pb-3">
                <Image
                  src="/assets/green-tick-icon.svg"
                  alt="tick"
                  width={20}
                  height={20}
                />
                <Heading
                  headingTag="p"
                  className="font-14 text-start font-medium text-white"
                  content={[{ text }]}
                />
              </li>
            ))}
          </ul>
        )}
        {services && services.length > 0 && (
          <ul className="flex flex-wrap gap-4 overflow-x-auto pt-8">
            {services.map((text, index) => (
              <li key={index} className="flex items-start gap-4">
                <CustomButton text={text} variant="services" />
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Image Section */}
      <div className="flex w-full justify-center md:w-1/2 md:justify-start">
        {/* <Image
          src={image}
          alt={title}
          width={522}
          height={382}
          className="object-contain"
        /> */}
      </div>
    </div>
  );
};

export default ImportanceSection;

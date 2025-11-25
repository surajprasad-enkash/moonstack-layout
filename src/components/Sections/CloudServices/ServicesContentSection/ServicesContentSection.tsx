import React from "react";
import Image, { StaticImageData } from "next/image";
import Heading from "../../../Heading/Heading";
import Tag from "@/components/Tag/Tag";
import { motion } from "framer-motion";

interface IServicesContentSectionProps {
  image?: string | StaticImageData;
  title: string;
  highlightTitle?: string;
  description: string[];
  bgColor?: string;
  reverse?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  bgImage?: string | StaticImageData;
}

const ServicesContentSection: React.FC<IServicesContentSectionProps> = ({
  image,
  title,
  highlightTitle,
  description,
  bgImage,
  bgColor = "bg-[#000]",
  reverse = false,
  buttonText,
  buttonUrl
}) => {
  return (
    <section
      className={`overflow-hidden md:pt-20 ${bgColor} py-12 px-[20px] md:px-[80px]`}
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
    >
      <div className="container mx-auto">
        <div
          className={`flex flex-col items-start md:flex-row gap-43 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Left Content */}
          <div className="w-full md:w-1/2 ">
            {buttonText && (
              <div className="pt-4 text-center md:text-left">
                <Tag text={buttonText} />
              </div>
            )}

            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Heading
                headingTag="h2"
                className="font-36 pt-3 font-bold"
                content={[
                  { text: `${title} `, color: "text-white" },
                  highlightTitle
                    ? { text: highlightTitle, className: "highlight-text" }
                    : { text: "", color: "" },
                ]}
              />
            </motion.div>

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
                  className="font-14 pt-3 font-medium text-white"
                  content={[{ text: desc }]}
                />
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 ">
            <div className="p-2 w-full md:w-auto">
              {image && (
                <Image
                  src={image}
                  alt={title}
                  width={800}
                  height={382}
                  className="object-contain"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContentSection;

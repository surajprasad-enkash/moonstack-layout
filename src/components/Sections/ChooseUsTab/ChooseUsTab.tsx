"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import Heading from "../../Heading/Heading";

interface TabItem {
  title: string;
  description: string;
  image: string | StaticImageData;
  imgHeight?: string | "400";
}

interface ChooseUsTabSectionProps {
  headingLines: { text: string; color?: string }[];
  subHeadingLines?: { text: string; color?: string }[];
  tabs: TabItem[];
  reverse?: boolean; // 👉 Layout reverse option (image left / right)
  headingLayout?: "center" | "between"; // 👉 Heading layout option
}

const ChooseUsTabSection: React.FC<ChooseUsTabSectionProps> = ({
  headingLines,
  subHeadingLines,
  tabs,
  reverse = false,
  headingLayout = "center",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:px-8 md:py-20">
        <div
          className={`w-full ${
            headingLayout === "center"
              ? "m-auto text-center md:w-2/5 lg:w-2/5 xl:w-[50%]"
              : "flex flex-col items-center justify-between gap-4 md:flex-row"
          }`}
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className={headingLayout === "between" ? "text-left" : ""}
          >
            <Heading
              headingTag="h3"
              className="pt-3 font-semibold text-white"
              content={headingLines}
            />
          </motion.div>

          {/* Subheading */}
          {subHeadingLines && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className={
                headingLayout === "between"
                  ? "w-full text-left md:w-auto"
                  : "pt-3 text-center"
              }
            >
              <Heading
                headingTag="p"
                className="text-primary-grey"
                content={subHeadingLines}
              />
            </motion.div>
          )}
        </div>

        <div
          className={`grid items-stretch gap-16 pt-16 md:grid-cols-2 lg:gap-32 ${
            reverse ? "md:grid-flow-col-dense" : ""
          }`}
        >
          {/* Tabs */}
          <div
            className={`flex flex-col gap-4 rounded-lg ${
              reverse ? "order-2 md:order-1" : "order-1"
            }`}
          >
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer rounded-lg border-2 p-4 text-left transition-all duration-300 ${
                  activeIndex === index
                    ? "border-[#0A662A] bg-[#00290F] text-green-500"
                    : "border-transparent bg-[#00290F]/50 text-white hover:border-[#0A662A]/50"
                }`}
              >
                <div className="flex items-center gap-2">
                  {activeIndex === index ? <FaArrowRight /> : <FaArrowDown />}

                  <Heading
                    headingTag="h6"
                    className="font-16 font-semibold text-white"
                    content={tab.title}
                  />
                </div>

                {activeIndex === index && (
                  <Heading
                    headingTag="p"
                    className="text-light-grey mt-4 transition-all duration-300"
                    content={tab.description}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Image */}
          <div
            className={`flex items-center justify-center overflow-hidden ${
              reverse ? "order-1 md:order-2" : ""
            }`}
          >
            <Image
              src={tabs[activeIndex].image}
              alt={tabs[activeIndex].title}
              className="w-full rounded-lg object-cover transition-all duration-500"
              style={{ maxHeight: tabs[activeIndex].imgHeight || "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsTabSection;

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
    <div className="bg-black text-white px-4 sm:px-10 py-12 md:py-20 container mx-auto">
      {/* Heading Section */}
      <div
        className={`w-full ${
          headingLayout === "center"
            ? "md:w-2/5 lg:w-2/5 xl:w-[50%] text-center m-auto"
            : "flex flex-col md:flex-row justify-between items-center gap-4"
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
            headingTag="h2"
            className="font-bold pt-3 text-white font-36"
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
                ? "text-left md:w-auto w-full"
                : "pt-3 text-center"
            }
          >
            <Heading
              headingTag="p"
              className="font-bold text-white font-14"
              content={subHeadingLines}
            />
          </motion.div>
        )}
      </div>

      {/* Tabs and Image Section */}
      <div
        className={`grid md:grid-cols-2 gap-16 lg:gap-32 items-stretch pt-16 ${
          reverse ? "md:grid-flow-col-dense" : ""
        }`}
      >
        {/* Tabs */}
        <div
          className={`flex flex-col gap-4 rounded-lg p-5 ${
            reverse ? "order-2 md:order-1" : "order-1"
          }`}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-left p-4 rounded-lg transition-all duration-300 border-2 ${
                activeIndex === index
                  ? "bg-[#00290F] text-green-500 border-[#0A662A]"
                  : "text-white border-transparent bg-[#00290F]/50 hover:border-[#0A662A]/50"
              }`}
            >
              <div className="flex items-center gap-2">
                {activeIndex === index ? <FaArrowRight /> : <FaArrowDown />}
                <span className="font-semibold">{tab.title}</span>
              </div>

              {activeIndex === index && (
                <p className="mt-4 text-gray-300 font-14 transition-all duration-300">
                  {tab.description}
                </p>
              )}
            </button>
          ))}
        </div>

        {/* Image */}
        <div
          className={`flex justify-center items-center overflow-hidden ${
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
  );
};

export default ChooseUsTabSection;

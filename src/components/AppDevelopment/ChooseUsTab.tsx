"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import Heading from "../Heading/Heading";

interface TabItem {
  title: string;
  description: string;
  image: StaticImageData;
  imgHeight?: string | "400";
}

interface ChooseUsTabSectionProps {
  headingLines: { text: string; color?: string }[];
  subHeadingLines?: { text: string; color?: string }[];
  tabs: TabItem[];
}

const ChooseUsTabSection: React.FC<ChooseUsTabSectionProps> = ({
  headingLines,
  subHeadingLines,
  tabs,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-black text-white px-4 sm:px-10 py-12 md:py-20 container mx-auto">
      <div className="w-full md:w-2/5 lg:w-2/5 xl:w-[50%] text-center m-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Heading
            headingTag="h2"
            className="font-bold pt-3 text-white font-36 text-center"
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
          >
            <Heading
              headingTag="p"
              className="font-bold pt-3 text-white font-14 text-center"
              content={subHeadingLines}
            />
          </motion.div>
        )}
      </div>
      {/* Tabs and Image */}
      <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-stretch pt-16">
        {/* Left Tabs */}
        <div className="flex flex-col gap-4 rounded-lg p-5">
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

        {/* Right Image */}
        <div className="flex justify-center items-center overflow-hidden">
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

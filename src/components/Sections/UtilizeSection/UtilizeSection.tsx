"use client";
import React, { useState } from "react";
import Heading from "../../Heading/Heading";
import CategoryCard from "../../CategoryCard/CategoryCard";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

interface ICardItem {
  image: string | StaticImageData;
  title: string;
  desc: string;
  category: string;
}

interface UtilizeSectionProps {
  headingLines: { text: string; color?: string }[];
  subHeadingLines?: { text: string; color?: string }[];
  items: ICardItem[];
  tabs: string[];
  bgColor?: string;
  containerClass?: string;
  gridCols?: string;
}

const ReusableUtilizeSection: React.FC<UtilizeSectionProps> = ({
  headingLines,
  subHeadingLines,
  items,
  tabs,
  bgColor = "bg-black",
  containerClass = "  py-12 md:py-20",
  gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const filteredItems = items.filter((item) => item.category === activeTab);

  return (
    <section className={`${bgColor} text-white ${containerClass} px-5`}>
      <div className="container m-auto w-full text-center md:w-full lg:w-2/5 xl:w-[70%]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Heading
            headingTag="h2"
            className="pt-3 text-center font-bold text-white"
            content={headingLines}
          />
        </motion.div>

        {subHeadingLines && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Heading
              headingTag="p"
              className="text-light-grey pt-3 text-center"
              content={subHeadingLines}
            />
          </motion.div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 pt-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-font-16 cursor-pointer rounded-full px-4 py-2 font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#009936] text-white"
                  : "bg-[#003312] text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div
          key={activeTab} // 👈 ensures animation when tab changes
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`grid ${gridCols} mx-auto w-full gap-6 pt-20`}
        >
          {filteredItems.map((feature, index) => (
            <CategoryCard
              key={index}
              imgSrc={feature.image}
              title={feature.title}
              description={feature.desc}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReusableUtilizeSection;

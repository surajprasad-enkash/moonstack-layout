"use client";
import React from "react";
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

interface TechnologySectionProps {
  headingLines: { text: string; color?: string }[];
  subHeadingLines?: { text: string; color?: string }[];
  filteredItems: ICardItem[];
  bgColor?: string;
  containerClass?: string;
  gridCols?: string;
}

const ReusableTechnologySection: React.FC<TechnologySectionProps> = ({
  headingLines,
  subHeadingLines,
  filteredItems = [],
  bgColor = "bg-black",
  containerClass = "container mx-auto px-4 sm:px-10 py-12 md:py-20",
  gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
}) => {
  return (
    <section className={`${bgColor} text-white`}>
      <div className={`mx-auto max-w-5xl text-center ${containerClass}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Heading
            headingTag="h3"
            className="font-semibold text-white"
            content={headingLines}
          />
        </motion.div>

        {subHeadingLines && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-2"
          >
            <Heading
              headingTag="p"
              className="text-primary-grey"
              content={subHeadingLines}
            />
          </motion.div>
        )}
        <div className={`grid ${gridCols} gap-6 pt-16`}>
          {filteredItems.map((feature, index) => (
            <CategoryCard
              key={index}
              imgSrc={feature.image}
              title={feature.title}
              description={feature.desc}
              titlePosition="bottom"
              imgWidth={60}
              imgHeight={60}
              className="border-t border-[#33834F]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReusableTechnologySection;

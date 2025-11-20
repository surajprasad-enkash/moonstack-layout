"use client";
import React from "react";
import Heading from "../../Heading/Heading";
import { motion } from "framer-motion";

interface ICardItem {

  title: string;
  desc: string;
  category?: string;
}

interface WorkflowSectionProps {
  headingLines: { text: string; color?: string }[];
  subHeadingLines?: { text: string; color?: string }[];
  filteredItems: ICardItem[];
  bgColor?: string;
  containerClass?: string;
  gridCols?: string;
}

const ReusableWorkflowSection: React.FC<WorkflowSectionProps> = ({
  headingLines,
  subHeadingLines,
  filteredItems = [],
  bgColor = "bg-black",
  containerClass = "container mx-auto px-4 sm:px-10 py-12 md:py-20",
  gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
}) => {
  return (
    <section
      className={`${bgColor} text-white ${containerClass} bg-[url('/assets/process-bg.webp')]`}
    >
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Heading
            headingTag="h4"
            className="text-3xl font-bold text-white md:text-4xl"
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
              className="text-base text-gray-200 md:text-lg"
              content={subHeadingLines}
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className={`grid ${gridCols} gap-6 pt-16`}
        >
          {filteredItems.map((feature, index) => (
            <div
              key={index}
              className="relative min-h-[200px] rounded-xl border border-[#1CFF6C]/40 !bg-black p-6"
            >
              <span className="absolute top-4 left-4 bg-gradient-to-b from-[#1CFF6C] to-[#000704] bg-clip-text text-[190px] leading-[190px] font-bold text-transparent">
                {index + 1}
              </span>

              <div className="relative z-10 mt-4 ps-[66px] text-start">
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReusableWorkflowSection;

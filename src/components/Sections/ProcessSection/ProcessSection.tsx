import React from "react";
import Image, { StaticImageData } from "next/image";
import Tag from "../../Tag/Tag";
import Heading from "../../Heading/Heading";
import { motion } from "framer-motion";
import StepCard from "@/components/StepCard/StepCard";

interface ServiceItem {
  image: StaticImageData | string;
  title: string;
  desc: string;
}

interface ProcessSectionProps {
  buttonText?: string;
  buttonVariant?: "primary" | "rotating" | "small";
  headingLines: { text: string; color?: string }[];
  subHeadingLines?: { text: string; color?: string }[];

  servicesData: ServiceItem[];
  vectorImage?: StaticImageData | string;
  marginBottom?: string;
  className?: string;
  cardTag?: boolean;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({
  buttonText,
  headingLines,
  subHeadingLines,
  servicesData,
  vectorImage,
  className,
 
}) => {
  return (
    <div className="bg-black px-4 sm:px-10 py-12 md:py-20 relative z-10 container mx-auto overflow-hidden">
      {vectorImage && (
        <div className="absolute right-0 top-0 -z-10">
          <Image src={vectorImage} alt="vector" height={500} />
        </div>
      )}

      {buttonText && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Tag text={buttonText} className="text-center" />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-2/3 m-auto">
          <Heading
            headingTag="h2"
            className="font-bold font-36 text-center pt-3"
            content={headingLines}
          />
          <Heading
            headingTag="p"
            className=" text-center pt-3"
            content={subHeadingLines}
          />
        </div>
      </motion.div>

      <motion.div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 md:pt-20 ${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2, // stagger each card
            },
          },
        }}
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          
            <StepCard
              key={index}
              index={index}
              title={service.title}
              description={service.desc}
              accentColor="#0CE859"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProcessSection;

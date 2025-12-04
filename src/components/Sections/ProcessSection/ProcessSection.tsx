import React from "react";
import Image, { StaticImageData } from "next/image";
import Tag from "../../Tag/Tag";
import Heading from "../../Heading/Heading";
import { motion } from "framer-motion";
import StepCard from "@/components/StepCard/StepCard";

interface ServiceItem {
  image?: StaticImageData | string;
  title: string;
  description: string;
  id?: number;
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
    <section className="bg-black">
      <div className="relative z-10 container mx-auto overflow-hidden px-4 py-12 sm:px-10 md:py-20">
        {vectorImage && (
          <div className="absolute top-0 right-0 -z-10">
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
          <div className="m-auto w-2/3">
            <Heading
              headingTag="h2"
              className="font-36 pt-3 text-center font-semibold text-white"
              content={headingLines}
            />
            <Heading
              headingTag="p"
              className="pt-3 text-center text-white"
              content={subHeadingLines}
            />
          </div>
        </motion.div>

        <motion.div
          className={`grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 md:pt-20 lg:grid-cols-4 ${className}`}
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
                description={service.description}
                accentColor="#0CE859"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;

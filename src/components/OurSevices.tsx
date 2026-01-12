import React from "react";
import Image, { StaticImageData } from "next/image";
import Tag from "./Tag/Tag";
import Heading from "./Heading/Heading";
import BenifitsCard from "./BenifitsCard/BenifitsCard";
import { motion } from "framer-motion";

interface ServiceItem {
  image: StaticImageData | string;
  title: string;
  desc: string;
}

interface OurServicesProps {
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

const OurServices: React.FC<OurServicesProps> = ({
  buttonText,
  headingLines,
  subHeadingLines,
  servicesData,
  vectorImage,
  marginBottom,
  className,
  cardTag = false,
}) => {
  return (
    <section className="bg-black px-5">
      <div className="relative z-10 container mx-auto overflow-hidden py-12 md:py-20">
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
          <div className="m-auto w-3/4">
            <Heading
              headingTag="h2"
              className="text-center font-bold"
              content={headingLines}
            />
            <Heading
              headingTag="p"
              className="pt-3 text-center"
              content={subHeadingLines}
            />
          </div>
        </motion.div>

        <motion.div
          className={`grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 md:pt-20 lg:grid-cols-3 ${className}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
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
              <BenifitsCard
                imgSrc={service.image}
                title={service.title}
                description={service.desc}
                bgColor="bg-dark-grey"
                buttonLabel="Learn More"
                buttonLink="/about"
                className={marginBottom}
                cardTag={cardTag}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;

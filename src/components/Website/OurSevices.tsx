import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Tag from "../Tag/Tag";
import Heading from "../Heading/Heading";
import arrowUp from "public/assets/arrow-up.svg";
import { motion } from "framer-motion";

interface IServiceItem {
  image: StaticImageData;
  title: string;
  desc: string;
  buttonLabel?: string;
  buttonLink?: string;
}

interface ServicesSectionProps {
  tagText?: string;
  mainHeading: string;
  highlightHeading?: string;
  description?: string;
  services: IServiceItem[];
  columns?: number; // Default 2
  className?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  tagText = "Our Services",
  mainHeading,
  highlightHeading,
  description,
  services,
  columns = 2,
  className = "",
}) => {
  return (
    <section
      className={`bg-black text-white py-16 px-6 md:px-10 container mx-auto ${className}`}
    >
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
        {/* Left Heading Section */}
        <div>
          {" "}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -50 }} // 👈 starts from left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Tag text={tagText} className="text-center md:text-left" />
            <Heading
              headingTag="h2"
              className="font-bold pt-3 font-36 text-start"
              content={[
                { text: mainHeading, color: "text-white block" },
                ...(highlightHeading
                  ? [{ text: highlightHeading, color: "text-[#1CFF6C]" }]
                  : []),
              ]}
            />
          </motion.div>
          {/* Description Animation (slightly delayed, from left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // 👈 from left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {description && (
              <p className="mt-6 poppins-medium leading-[200%] font-16 text-white/90">
                {description}
              </p>
            )}
          </motion.div>
        </div>

        {/* Services Cards */}
        {services.map((service, index) => (
          <div
            key={index}
            className="group rounded-3xl border-t-[9px] border-t-[var(--Primary-500,#00B23F)] p-8 grid bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-[#0C4A0C] transition duration-400"
          >
            <div className="flex justify-between mb-4">
              <Image
                src={service.image}
                alt={service.title}
                className="w-10 h-auto"
              />
            </div>
            <div>
              <h3 className="poppins-semibold font-24 mb-4">{service.title}</h3>
              <p className="poppins-regular leading-[200%] font-16">
                {service.desc}
              </p>

              {service.buttonLabel && service.buttonLink && (
                <div className="mt-6">
                  <Link
                    href={service.buttonLink}
                    className="group flex items-center gap-2 bg-brand200 text-Color.primary-700 font-semibold rounded-lg px-4 py-2 hover:bg-brand400 transition"
                  >
                    <span className="transition group-hover:underline">
                      {service.buttonLabel}
                    </span>
                    <Image
                      src={arrowUp}
                      alt="arrow"
                      width={15}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

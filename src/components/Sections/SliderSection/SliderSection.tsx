"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Heading from "../../Heading/Heading";
import Tag from "../../Tag/Tag";
import { motion } from "framer-motion";
import { slides } from "./data";

interface ReusableSliderSectionProps {
  headingLines: { text: string; color?: string }[];

  bgColor?: string;
  slidesToShow?: number;
  autoplaySpeed?: number;
}

const ReusableSliderSection: React.FC<ReusableSliderSectionProps> = ({
  headingLines,

  bgColor = "bg-black",
  slidesToShow = 4,
  autoplaySpeed = 2000,
}) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow,
    autoplay: true,
    speed: autoplaySpeed,
    autoplaySpeed,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  return (
    <section className={`${bgColor} overflow-hidden py-12 text-white md:py-20`}>
      {/* 👆 overflow-hidden prevents horizontal scroll */}

      {/* Heading */}
      <div className="m-auto w-full text-center md:w-2/5 xl:w-[50%]">
        <motion.div
          className="pt-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Heading
            headingTag="h2"
            className="text-center font-bold text-white"
            content={headingLines}
          />
        </motion.div>
      </div>

      {/* Slider */}
      <div className="mt-20">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((service, index) => (
            <div key={index} className="px-1">
              {/* 👆 8px gap (4px + 4px) */}
              <div className="group relative cursor-pointer overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="h-[417px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071C0E] via-[#071C0E80] to-transparent">
                  <h5 className="absolute right-5 bottom-6 left-5 text-lg font-semibold text-white">
                    {service.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReusableSliderSection;

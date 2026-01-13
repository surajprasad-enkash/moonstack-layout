"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Heading from "../../Heading/Heading";
import { motion } from "framer-motion";
import { slides } from "./data";
import TeamBottomInfo from "@/components/TeamBottomInfo";
import CommanButton from "@/components/CommanButton/CommanButton";
import TeamBottomInfoImg1 from "@/assets/app-development-images/team-bottom-cards-1.svg";
import TeamBottomInfoImg2 from "../pub@/assets/opment-images/team-bottom-cards-2.svg";
import TeamBottomInfoImg3 from "../pub@/assets/opment-images/team-bottom-cards-3.svg";
import TeamBottomInfoImg4 from "../pub@/assets/opment-images/team-bottom-cards-4.svg";
import bgImageGradient from "../pub@/assets/opment-images/team-bg-1440.svg";

interface TeamSliderSectionProps {
  headingLines: { text: string; color?: string }[];
  bgColor?: string;
  slidesToShow?: number;
  autoplaySpeed?: number;
}

export const features = [
  {
    text: "Daily reports & time-tracking",
    bgImage: TeamBottomInfoImg1,
  },
  {
    text: "Transparent process where you get access to working files",
    bgImage: TeamBottomInfoImg2,
  },
  {
    text: "Meetings & regular feedback gathering",
    bgImage: TeamBottomInfoImg3,
  },
  {
    text: "Close cooperation where you get flexibility and comfort",
    bgImage: TeamBottomInfoImg4,
  },
];
const TeamSliderSection: React.FC<TeamSliderSectionProps> = ({
  headingLines,

  bgColor = "",
}) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={` ${bgColor} relative py-12 md:py-20`}>
      <Image
        src={bgImageGradient}
        alt="Background"
        className="absolute top-[15%] right-0 bottom-0 left-0 z-[-1] h-full w-full scale-y-150 object-contain object-center text-transparent [transform-style:preserve-3d]"
      />
      <div className="relative z-[2]">
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
              className="text-center font-bold"
              content={headingLines}
            />
          </motion.div>
        </div>

        <div className="mt-20">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((item, index) => (
              <div key={index} className="px-6">
                {item.type === "image" ? (
                  /* IMAGE CARD */
                  <div className="h-[260px] w-full overflow-hidden rounded-[24px] bg-[#D8D1CC]">
                    <Image
                      src={item.image}
                      alt="team"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-[260px] w-full flex-col items-center justify-center rounded-[24px] bg-gradient-to-b from-[#0AA38F] to-[#0B6E61] text-center text-white">
                    <Heading
                      headingTag="h3"
                      className="text-center font-bold text-white"
                      content={item.count}
                    />

                    <p className="mt-2 text-lg font-semibold">{item.label}</p>
                    <p className="text-sm opacity-80">{item.subLabel}</p>
                  </div>
                )}
              </div>
            ))}
          </Slider>
        </div>

        <div className="container pt-20">
          <div className="mx-auto grid max-w-[1048px] gap-0.5 md:grid-cols-2">
            {features.map((item, index) => (
              <TeamBottomInfo
                key={index}
                text={item.text}
                bgImage={item.bgImage}
                index={index}
              />
            ))}
          </div>
          <div className="relative z-10 mt-12 flex justify-center">
            <CommanButton
              text="Match me with a developer"
              variant="rounded16"
              href="/contact-us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSliderSection;

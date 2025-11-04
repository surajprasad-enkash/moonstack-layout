import React, { useRef } from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import Heading from "../../Heading/Heading";
import Tag from "../../Tag/Tag";
import { motion } from "framer-motion"; // <-- import Framer Motion

interface ISliderItem {
  image: string | StaticImageData;
  title: string;
  desc: string;
}

interface ReusableSliderSectionProps {
  headingLines: { text: string; color?: string }[];
  buttonText?: string;
  slides: ISliderItem[];
  bgColor?: string;
  slidesToShow?: number;
  autoplaySpeed?: number;
  containerClass?: string;
}

const ReusableSliderSection: React.FC<ReusableSliderSectionProps> = ({
  headingLines,
  buttonText = "Process",
  slides,
  bgColor = "bg-black",
  slidesToShow = 5,
  autoplaySpeed = 2000,
}) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow,
    autoplay: true,
    speed: autoplaySpeed,
    autoplaySpeed,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className={`${bgColor} text-white`}>
      <div className="w-full md:w-2/5 lg:w-2/5 xl:w-[50%] text-center m-auto py-5">
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
          className="pt-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Heading
            headingTag="h2"
            className="font-bold text-white font-36 text-center"
            content={headingLines}
          />
        </motion.div>
      </div>
      <div className="slider-container mt-20 relative">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((service, index) => (
            <div key={index}>
              <div className="relative group overflow-hidden cursor-pointer">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[417px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#071C0E] via-[#071C0E80] to-transparent px-5 pb-8 pt-16 flex flex-col justify-end">
                  <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-2">
                    <h3 className="text-white font-semibold text-lg leading-[125%]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-white text-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReusableSliderSection;
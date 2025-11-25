import React, { useRef } from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import Heading from "../../Heading/Heading";
import Tag from "../../Tag/Tag";
import { motion } from "framer-motion";

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
    <section className={`${bgColor} text-white`}>
      <div className="m-auto w-full py-5 text-center md:w-2/5 lg:w-2/5 xl:w-[50%]">
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
            className="font-36 text-center font-bold text-white"
            content={headingLines}
          />
        </motion.div>
      </div>
      <div className="slider-container relative mt-20">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((service, index) => (
            <div key={index}>
              <div className="group relative cursor-pointer overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="h-[417px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 flex w-full flex-col justify-end bg-gradient-to-t from-[#071C0E] via-[#071C0E80] to-transparent px-5 pt-16 pb-8">
                  <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-2">
                    <h3 className="text-lg leading-[125%] font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="translate-y-3 text-sm text-white opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    {service.desc}
                  </p>
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

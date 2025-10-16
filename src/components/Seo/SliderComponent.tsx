import React, { useRef } from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import CustomButton from "../CommanButton/CommanButton";
import Heading from "../Heading/Heading";

interface ISliderItem {
  image: StaticImageData;
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
    <div className={`${bgColor} text-white `}>
      {/* Rotating button */}
      <div className="rotating-btn text-center">
        <CustomButton text={buttonText} variant="rotating" />
      </div>

      {/* Heading */}
      <div className="pt-20">
        <Heading
          headingTag="h2"
          className="font-bold pt-3 text-white font-36 text-center"
          content={headingLines}
        />

        {/* Slider Section */}
        <div className="slider-container mt-10 relative">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((service, index) => (
              <div key={index}>
                <div className="relative group overflow-hidden cursor-pointer">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[417px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 pb-20 bg-gradient-to-t from-[#071C0E] via-[#071C0E80] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 flex flex-col justify-end">
                    <h3 className="text-white font-bold text-lg">
                      {service.title}
                    </h3>
                    <p className="text-white text-sm mt-2">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ReusableSliderSection;

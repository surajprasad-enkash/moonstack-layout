import React from "react";
import Image, { StaticImageData } from "next/image";
import Heading from "../Heading/Heading";
import ServicesCard from "../ServiceCard/ServiceCard";
import CustomButton from "../CommanButton/CommanButton";

interface ServiceItem {
  image: StaticImageData | string;
  title: string;
  desc: string;
}

interface OurServicesProps {
  buttonText?: string;
  buttonVariant?: "primary" | "rotating" | "small";
  headingLines: { text: string; color?: string }[];
  servicesData: ServiceItem[];
  vectorImage?: StaticImageData | string;
}

const OurServices: React.FC<OurServicesProps> = ({
  buttonText = "Our Services",
  buttonVariant = "rotating",
  headingLines,
  servicesData,
  vectorImage,
}) => {
  return (
    <div className="bg-black  px-4 sm:px-10 py-12 md:py-20  text-white relative z-10 container mx-auto">
      {vectorImage && (
        <div className="absolute right-0 top-0 -z-10">
          <Image src={vectorImage} alt="vector" height={500} />
        </div>
      )}

      {buttonText && (
        <div className="rotating-btn text-center">
          <CustomButton text={buttonText} variant={buttonVariant} />
        </div>
      )}

      <div className="pt-12 md:pt-20">
        <Heading
          headingTag="h2"
          className="font-bold pt-3 text-white font-36 text-center"
          content={headingLines}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 md:pt-20">
        {servicesData.map((service, index) => (
          <ServicesCard
            key={index}
            imgSrc={service.image}
            title={service.title}
            description={service.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;

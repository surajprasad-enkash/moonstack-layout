import React from "react";
import backgroundImg from "../../../public/assets/about-us/backgroundImg.webp";
import Heading from "@/components/Heading/Heading";
import CustomButton from "@/components/CommanButton/CommanButton";
import BenifitsCard from "@/components/BenifitsCard/BenifitsCard";
import { featuresData } from "../../constants/about";
import FeatureCard from "@/components/FeaturesCard/FeatureCard";

const HeroSection = (): React.JSX.Element => {
  return (
    <section
      className="bg-black"
      style={{
        backgroundImage: `url(${backgroundImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-12 text-center sm:px-8 md:pt-32 md:pb-20 lg:grid-cols-2">
        <div className="mx-auto w-3/4 text-center">
          <Heading
            headingTag="h1"
            className="text-gradient text-center font-semibold"
            content={[
              {
                text: "Building Digital Products ",
                color: "text-primary  text-center block",
              },
              {
                text: " That Scale Businesses  ",
                color: " text-white text-center ",
              },
            ]}
          />

          <Heading
            headingTag="p"
            className="pt-4 text-center text-white"
            content="With 15+ years of experience, Moonstack combines strategic thinking with advanced engineering to create high-performing websites, mobile apps, and digital solutions. Our team is committed to helping businesses accelerate growth, optimize operations, and deliver exceptional experiences across every digital touchpoint."
          />
          <Heading
            headingTag="p"
            className="py-4 text-center text-white"
            content="As for the working principles of Moonstack, the latter is known for bringing ideas to life. We are a team of enthusiastic developers, designers, and strategists who work towards creating the best digital solutions for businesses and organizations in today’s constantly changing world. Our goal is to facilitate our clients right from the technological aspect and help create new business ideas that can be launched in the market."
          />
          <CustomButton text="Connect with us" variant="primary" />
        </div>
        <div className="flex gap-4 pt-20">
          {" "}
          {featuresData.map((feature, index) => (
            <BenifitsCard
              key={index}
              imgSrc={feature.imgSrc}
              title={feature.title}
              description={feature.description}
              className="bg-primary-100 text-left"
              bgColor=""
              cardIconSize="w-8"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

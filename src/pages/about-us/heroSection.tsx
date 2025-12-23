import React from "react";
import backgroundImg from "../../../public/assets/about-us/backgroundImg.webp";
import Heading from "@/components/Heading/Heading";
import CustomButton from "@/components/CommanButton/CommanButton";
import MarqueeComponent from "@/components/Homepage/Marquee";

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
            className="text-center font-semibold"
            content={[
              {
                text: "Building Digital Products ",
                color: "text-white  text-center block",
              },
              {
                text: " That Scale Businesses  ",
                color: " text-gradient text-center ",
              },
            ]}
          />

          <Heading
            headingTag="p"
            className="py-4 text-center text-white"
            content="With 15+ years of experience, Moonstack combines strategic thinking with advanced engineering to create high-performing websites, mobile apps, and digital solutions. Our team is committed to helping businesses accelerate growth, optimize operations, and deliver exceptional experiences across every digital touchpoint."
          />

          <CustomButton text="Connect with us" variant="primary" />
        </div>
      </div>
      <MarqueeComponent />
    </section>
  );
};

export default HeroSection;

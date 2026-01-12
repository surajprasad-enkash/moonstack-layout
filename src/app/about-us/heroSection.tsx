import React from "react";
import Heading from "@/components/Heading/Heading";
import CustomButton from "@/components/CommanButton/CommanButton";
import MarqueeComponent from "@/components/Homepage/Marquee";

import bgImage from "public/assets/about-us/banner/hero-bg.svg";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

const breadcrumbs = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
];

const HeroSection = (): React.JSX.Element => {
  return (
    <section className="pt-[180px] px-[20px]">
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[0px] right-[0] left-[0] z-[1] h-[auto] w-[140%]"
        />
      )}
      <div className="container relative z-[2]">
        <div className="mb-[24px]">
          {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        </div>
        <div className="mx-auto md:w-3/4 text-center">
          <Heading
            headingTag="h1"
            className="text-center font-semibold"
            content={[
              {
                text: "Building Digital Products ",
                color: "text-white block",
              },
              {
                text: " That Scale Businesses ",
                color: "text-white",
                className: "libreItalic highlight-text",
              },
            ]}
          />

          <Heading
            headingTag="p"
            className="py-4 text-center text-white mb-[40]"
            content="With 15+ years of experience, Moonstack combines strategic thinking with advanced engineering to create high-performing websites, mobile apps, and digital solutions. Our team is committed to helping businesses accelerate growth, optimize operations, and deliver exceptional experiences across every digital touchpoint."
          />

          <CustomButton text="Connect with us" href="/contact-us" />
        </div>
      </div>
      <div className="relative opacity-[0.8] mt-[50] z-[2]">
        <MarqueeComponent />
      </div>
    </section>
  );
};

export default HeroSection;

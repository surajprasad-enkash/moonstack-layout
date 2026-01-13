import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import React from "react";

import Marquee from "@/components/Homepage/Marquee";
import Form from "@/components/Form/Form";
import ContactInfoCard from "@/components/ProjectInquiryModal/ContactInfoCard";

import bgImage from "@/assets/blogs/blogPageNewBg.svg";
import Breadcrumb from "@/components/Breadcrumb";
const breadcrumbs = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];
const HeroSection = () => {
  return (
    <section
      className="bg-black px-[20px] pt-[200px] pb-[80px]"
      id="contact-hero"
    >
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[-100px] right-[00px] z-[1] h-auto w-[80%]"
        />
      )}

      <div className="relative z-[2] container">
        <div className="mb-[30px]">
          {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        </div>
        <div className="relative flex">
          <ContactInfoCard className="mr-[10px] hidden w-[38%] flex-col justify-between rounded-[60px] rounded-tl-none bg-[#004619] p-[40px] text-white md:flex" />

          <div className="right_section relative w-full rounded-[60px] rounded-tl-none bg-white p-[40px] md:w-[62%]">
            <div className="contact_form">
              <Heading
                headingTag="h1"
                className="mb-[40px] !text-[48px] text-[#000]"
                content={[{ title: "Tell us about your project" }]}
              />
              <Form formName="contact_us" />
            </div>
          </div>
        </div>
      </div>

      <div className="logo_slider py-[30px]">
        <Marquee />
      </div>
    </section>
  );
};

export default HeroSection;

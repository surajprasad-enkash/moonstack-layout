import Heading from "@/components/Heading/Heading"
import Image from "next/image"
import React from "react"

import Marquee from "@/components/Homepage/Marquee"
import Form from "@/components/Form/Form"
import ContactInfoCard from "@/components/ProjectInquiryModal/ContactInfoCard"

import bgImage from "@/assets/blogs/blogPageNewBg.svg"
import Breadcrumb from "@/components/Breadcrumb"
const breadcrumbs = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
]
const HeroSection = () => {
  return (
    <section
      className="bg-black px-[20px] pt-[140px] pb-[20px] md:pt-[200px] md:pb-[80px]"
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
        <div className="relative md:flex">
          <ContactInfoCard className="mb:mb-[0px] mr-[10px] mb-[20px] w-[100%] flex-col justify-between rounded-[60px] rounded-tl-none bg-[#004619] p-[40px] text-white md:flex md:w-[38%]" />

          <div className="right_section relative w-full rounded-[60px] rounded-tl-none bg-white p-[40px] md:w-[62%]">
            <div className="contact_form">
              <Heading
                headingTag="h1"
                className="mb-[20px] !text-[48px] text-[#000] md:mb-[40px]"
                content={[{ title: "Tell Us About Your Project" }]}
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
  )
}

export default HeroSection

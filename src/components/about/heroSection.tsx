import React from "react"
import Heading from "@/components/Heading/Heading"
import CustomButton from "@/components/CommanButton/CommanButton"
import MarqueeComponent from "@/components/Homepage/Marquee"

import bgImage from "@/assets/about-us/banner/hero-bg.svg"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"

const breadcrumbs = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
]

const HeroSection = (): React.JSX.Element => {
  return (
    <section className="px-[20px] pt-[104px] md:pt-[180px]">
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[0px] right-[0] left-[0] z-[1] h-[auto] w-[140%]"
        />
      )}
      <div className="relative z-[2] container">
        <div className="mb-[24px]">
          {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        </div>
        <div className="mx-auto text-center md:w-3/4">
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
            className="mb-[40] py-4 text-center text-white"
            content="With 15+ years of experience, Moonstack combines strategic thinking with advanced engineering to create high-performing websites, mobile apps, and digital solutions. Our team is committed to helping businesses accelerate growth, optimize operations, and deliver exceptional experiences across every digital touchpoint."
          />

          <CustomButton text="Connect with us" href="/contact-us" />
        </div>
      </div>
      <div className="relative z-[2] mt-[50] opacity-[0.8]">
        <MarqueeComponent />
      </div>
    </section>
  )
}

export default HeroSection

"use client"

import { motion } from "framer-motion"
import React from "react"
import Image, { StaticImageData } from "next/image"
import CustomButton from "../../../CommanButton/CommanButton"
import Heading, { HeadingSegment } from "../../../Heading/Heading"
import LottiePlayer from "../../../LottieAnimation"
import Breadcrumb from "../../../Breadcrumb"
import IndustryTags from "../../../Industries/IndustriesBanner"
import HomeMarquee from "../../../Homepage/Marquee"

interface BreadcrumbItem {
  label: string
  href: string
}

interface AppCategoryBannerProps {
  title: string | HeadingSegment[]
  description: string | HeadingSegment[]
  mediaType?: "image" | "lottie"
  image?: StaticImageData | string
  lottieData?: object
  buttonText?: string
  bgColor?: string
  bgImage?: StaticImageData | string
  containerWidth?: string
  textAlign?: "left" | "center" | "right"
  breadcrumbs?: BreadcrumbItem[]
  tags?: string[]
  logoSlider?: boolean
  highlight?: string
  containerClass?: string
}

const AppCategoryBanner: React.FC<AppCategoryBannerProps> = ({
  title,

  description,
  mediaType = "image",
  image,
  lottieData,
  buttonText = "Get Started",
  bgColor = " ",
  bgImage,
  containerWidth = "w-full",
  textAlign = "left",
  breadcrumbs,
  tags = [],
  logoSlider = false,
  containerClass,
}) => {
  return (
    <section
      className={`${bgColor} relative px-[20px] pt-[150px] pb-[60px] md:pb-[130px]`}
    >
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[0] right-[0] left-[0] z-[1]"
        />
      )}
      <div className={`${containerClass} relative z-[2] container`}>
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div
            className={`flex w-[100%] flex-col justify-center gap-6 ${containerWidth} text-${textAlign}`}
          >
            {breadcrumbs && <Breadcrumb items={breadcrumbs} />}

            {tags.length > 0 && (
              <IndustryTags tags={tags} activeTag={tags[0]} />
            )}
            <Heading
              headingTag="h1"
              className="font-extrabold"
              content={title}
            />

            <Heading
              headingTag="p"
              className="!font-medium"
              content={description}
            />

            <div className="pt-6">
              <CustomButton text={buttonText} variant="rounded16" />
            </div>
          </div>

          <motion.div
            className="relative flex w-[100%] w-full justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {mediaType === "lottie" && lottieData ? (
              <LottiePlayer
                animationData={lottieData}
                className="h-full w-auto"
              />
            ) : (
              image && (
                <Image
                  src={image}
                  alt="banner media"
                  className="h-auto w-full max-w-[500px] object-contain"
                  priority
                />
              )
            )}
          </motion.div>
        </div>

        {/* STATS */}
        {logoSlider ? (
          <div className="mt-[30px]">
            <HomeMarquee />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 pt-12 md:grid-cols-3">
            {[
              {
                value: "250+",
                label: "Projects successfully ",
                label2: "completed in various niches",
              },
              {
                value: "5.0",
                label: "Average client rating ",
                label2: "on Clutch",
              },
              {
                value: "$1B+",
                label: "Funds raised by ",
                label2: "our partners",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <Heading
                  headingTag="h3"
                  className="!font-[40px] text-white"
                  content={item.value}
                />
                <div>
                  <Heading
                    headingTag="p"
                    className="text-white"
                    content={item.label}
                  />{" "}
                  <Heading
                    headingTag="p"
                    className="text-white"
                    content={item.label2}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default AppCategoryBanner

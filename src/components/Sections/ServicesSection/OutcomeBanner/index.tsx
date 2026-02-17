"use client"

import React from "react"
import Image, { StaticImageData } from "next/image"

import { FiCheck } from "react-icons/fi"
import { cn } from "@/lib/utils"
import Heading from "@/components/Heading/Heading"
import CustomButton from "@/components/CommanButton/CommanButton"

interface OutcomeBannerProps {
  heading: { text: string; color?: string; className?: string }[]
  checklist: string[]
  buttonText?: string
  onButtonClick?: () => void
  bgImage: string | StaticImageData
  className?: string
}

const OutcomeBanner: React.FC<OutcomeBannerProps> = ({
  heading,
  checklist,
  buttonText = "Get a quote",
  onButtonClick,
  bgImage,
  className,
}) => {
  return (
    <section className={cn("relative mt-0 px-4 md:mt-[72px]", className)}>
      <Image
        src={bgImage}
        alt="gradient background"
        className="absolute right-[0] bottom-[0] left-[0] z-[1]"
      />

      <div className="relative z-[2] container mx-auto">
        <div className="mx-auto grid max-w-[920px] items-center justify-items-start gap-10 rounded-3xl rounded-tl-none bg-[radial-gradient(93.15%_91.89%_at_29.35%_0%,rgba(13,150,97,0.9)_0%,rgba(12,24,30,0.9)_100%),linear-gradient(180deg,#1C1C1C_0%,rgba(28,28,28,0)_100%)] px-[70px] py-[90px] backdrop-blur-md md:grid-cols-2">
          <div>
            <Heading
              headingTag="h3"
              className="!text-[40px] text-white"
              content={heading}
            />

            <div className="mt-6">
              <CustomButton
                text={buttonText}
                variant="rounded16"
                onClick={onButtonClick}
                href="/contact-us"
              />
            </div>
          </div>

          {/* RIGHT */}
          <ul className="flex flex-col gap-4">
            {checklist.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-white">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D6FF00] text-black">
                  <FiCheck size={14} />
                </span>
                <span className="text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default OutcomeBanner

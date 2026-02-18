"use client"

import Image, { StaticImageData } from "next/image"
import Heading from "@/components/Heading/Heading"
import BgImg from "@/assets/app-development-images/banner-underrr-cases-bg-1440.svg"
import { cn } from "@/lib/utils"
import CalBookingButton from "@/components/CalBookingButton/CalBookingButton"

interface NewBannerProps {
  headingLines: {
    text: string
    color?: string
    className?: string
  }[]
  buttonText?: string
  onButtonClick?: () => void
  imageSrc: string | StaticImageData
  imageAlt?: string
  className?: string
}

export default function NewBanner({
  headingLines,
  buttonText = "Contact us",
  onButtonClick,
  imageSrc,
  imageAlt = "NewBanner illustration",
  className,
}: NewBannerProps) {
  return (
    <section className={cn("relative px-[20px] py-20", className)}>
      {BgImg && (
        <Image
          src={BgImg}
          alt="Background"
          className="absolute top-[0] right-[0] left-[0] z-[1] h-[1000px]"
        />
      )}
      <div className="relative z-[2] container mx-auto">
        <div className="items-center gap-10 rounded-[32px] rounded-tl-none bg-white bg-gradient-to-b from-[#FFFFFF] to-[#DDFFE8] px-6 py-10 md:flex md:px-12 md:py-14">
          <div className="w-[100%] md:w-[50%]">
            <Heading
              headingTag="h2"
              content={headingLines}
              className="mb-8 text-[28px] leading-tight font-semibold md:text-[40px]"
            />

            <CalBookingButton />
          </div>

          <div className="flex justify-center md:w-[50%] md:justify-end">
            <div className="relative h-[260px] w-[260px] md:h-[340px] md:w-[340px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import Heading from "../Heading/Heading"

export interface AwardItem {
  title: string
  subtitle?: string
  image: string
  icon?: string
}
export interface HeadingSegment {
  text?: string
  color?: string
  className?: string
}

interface AwardsSectionProps {
  label?: string
  showLabel?: boolean
  heading: HeadingSegment[]
  awards: AwardItem[]
  className?: string
  showBackground?: boolean
}

export default function AwardsSection({
  label = "Awards & Achievements",
  heading,
  awards,
  showLabel = true,
  className,
  showBackground = true,
}: AwardsSectionProps) {
  return (
    <section className={cn("relative z-[3] px-[20px] text-white", className)}>
      <div className="relative container">
        {/* Header */}
        <div className="mb-[50px] md:mb-[150px]">
          {showLabel && label && (
            <span className="mb-[20px] block text-xs font-[500] tracking-widest text-white/60 uppercase md:mb-0">
              {label}
            </span>
          )}
          <div className="awardsHeading m-[auto] max-w-[750px] text-center">
            <Heading headingTag="h2" className="text-white" content={heading} />
          </div>
        </div>

        {/* Cards */}
        <div className="">
          <div className="flex flex-wrap gap-[6px]">
            {awards.map((award, index) => (
              <div
                key={index}
                className="awardBoxInner flex min-h-[200px] w-[calc(50%-5px)] flex-col items-center justify-center overflow-hidden rounded-2xl bg-white/5 px-2 backdrop-blur-md transition hover:bg-white/10 first:hover:text-[#000] md:w-[calc(25%-5px)]"
              >
                <div className="flex">
                  <Image
                    src={award.image}
                    alt={award.title}
                    width={120}
                    height={120}
                    className="imageLogo mb-4 max-h-[100px] w-[auto] object-contain"
                  />
                  {/* {award.subtitle && <span>{award.subtitle}</span>} */}
                </div>
                {award.icon && (
                  <div className="awardIcon absolute bottom-[20px] left-[20px] flex hidden h-[30px] w-[30px] items-center justify-center rounded-full bg-[#d6ff00] md:flex">
                    <Image src={award.icon} alt="icon" width={15} height={15} />
                  </div>
                )}
                <p className="text-center !text-[12px] font-semibold">
                  {award.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

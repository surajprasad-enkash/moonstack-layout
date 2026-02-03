"use client"

import Image, { StaticImageData } from "next/image"
import Heading from "../Heading/Heading"

interface ShowcaseItem {
  image: StaticImageData | string
  label?: string
}
interface headingPros {
  text?: string
  color?: string
  className?: string
}
interface AIExperienceSectionProps {
  title: headingPros[]
  description: string
  items: ShowcaseItem[]
}

export default function AIExperienceSection({
  title,
  description,
  items,
}: AIExperienceSectionProps) {
  return (
    <section className="relative px-[20px]">
      <div className="container mx-auto">
        <div className="gap-[60px] md:flex">
          {/* LEFT CONTENT */}
          <div className="mb-[40px] md:mb-[0px] md:w-[calc(50%-30px)] md:max-w-[50%] md:pr-[60px]">
            <div className="sticky top-[100px]">
              <Heading
                headingTag="h2"
                className="mb-[20px] text-white"
                content={title}
              />

              <p className="text-white">{description}</p>
            </div>
          </div>

          {/* RIGHT STACKED CARDS */}
          <div className="relative flex flex-col gap-[5px] md:w-[calc(50%-30px)]">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-[#8B7CFF] to-[#A99BFF] shadow-xl"
              >
                <div className="overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={"images"}
                    className="h-auto w-full object-cover"
                    priority={index === 0}
                  />
                </div>
                {/* 
                <p className="mt-[10px] text-center text-[11px] uppercase tracking-wide text-white/70">
                  {item.label}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

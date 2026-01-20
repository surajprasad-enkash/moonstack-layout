"use client"

import Image from "next/image"
import Heading, { HeadingSegment } from "@/components/Heading/Heading"
import bgImage from "@/assets/industries/ai/icon/bndBGapproach-bg.svg"

interface InfoCard {
  title?: string
  description?: string
  stats?: string[]
  description2?: string
  icon?: string
  image?: string
}

interface BusinessNeedsDesignSectionProps {
  heading?: string | HeadingSegment[]
  subheading?: string
  leftCards: InfoCard[]
}

export default function BusinessNeedsDesignSection({
  heading,
  subheading,
  leftCards,
}: BusinessNeedsDesignSectionProps) {
  return (
    <section className="relative px-[20px]">
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[0] right-[0] left-[0] z-[1]"
        />
      )}
      <div className="relative z-[2] container">
        {/* HEADING */}
        {heading && (
          <div className="mx-auto mb-[50px] max-w-[780px] text-center">
            <Heading
              headingTag="h2"
              className="mb-[20px] text-white"
              content={
                typeof heading === "string"
                  ? [{ text: heading, color: "text-white" }]
                  : heading
              }
            />
            {subheading && (
              <p className="text-[15px] leading-relaxed text-white/70">
                {subheading}
              </p>
            )}
          </div>
        )}
        {/* CARDS */}
        {leftCards && (
          <div className="flex flex-col gap-[5px]">
            {leftCards.map((card, index) => (
              <div key={index} className="gap-[50px] rounded-[18px] md:flex">
                {/* LEFT CONTENT */}
                <div className="md:w-[50%]">
                  {card.icon && (
                    <Image
                      src={card.icon}
                      alt=""
                      width={80}
                      height={80}
                      className="mb-[32px]"
                    />
                  )}

                  <h3 className="mb-[16px] text-[32px] text-white">
                    {card.title}
                  </h3>

                  <p className="mb-[16px] text-white">{card.description}</p>

                  {card.stats && card.stats.length > 0 && (
                    <ul className="mb-[16px] space-y-1 text-[18px]">
                      {card.stats.map((stat: string, index: number) => (
                        <li key={index} className="text-white">
                          <strong>{stat}</strong>
                        </li>
                      ))}
                    </ul>
                  )}

                  {card.description2 && (
                    <p className="text-white">{card.description2}</p>
                  )}
                </div>

                {/* RIGHT IMAGE */}
                <div className="md:w-[50%]">
                  {card.image && (
                    <div className="relative">
                      <Image
                        src={card.image}
                        alt={card.title || "card Image"}
                        width={700}
                        height={500}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

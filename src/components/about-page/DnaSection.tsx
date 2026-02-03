"use client"

import Heading from "../Heading/Heading"
import bgImage from "@/assets/about-us/DnaSection/bgImage.svg"
import Image from "next/image"
interface DnaSectionProps {
  title: {
    before: string
    highlight: string
    after: string
    circled: string
  }
  mission: {
    label: string
    text: string
  }
  vision: {
    label: string
    text: string
  }
}

export default function DnaSection({
  title,
  mission,
  vision,
}: DnaSectionProps) {
  return (
    <section className="relative z-[0] px-[20px] pt-[60px] text-white md:py-[80px]">
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[-100%] right-[0] left-[0] z-[1] h-[auto] w-full"
        />
      )}
      <div className="relative z-[2] container">
        <div className="gap-[20px] md:flex">
          {/* LEFT TITLE */}
          <div className="md:w-[50%] md:pr-[150px]">
            <Heading
              headingTag="h2"
              className=""
              content={[
                { text: title.before, className: "" },
                {
                  text: title.highlight,
                  className: "highlight-text libreItalic",
                },
                { text: title.after, className: "" },
              ]}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:w-[50%]">
            {/* MISSION */}
            <div className="mt-[20px] mb-[60px] md:mt-[0]">
              <p className="mb-[20px] !text-[16px] !font-[500] text-[#fff]/50 uppercase md:!text-[20px]">
                {mission.label}
              </p>
              <p className="!font-[400] md:!text-[32px]">{mission.text}</p>
            </div>

            {/* VISION */}
            <div>
              <p className="mb-[20px] !text-[16px] !font-[500] text-[#fff]/50 uppercase md:!text-[20px]">
                {vision.label}
              </p>
              <p className="!font-[400] md:!text-[32px]">{vision.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

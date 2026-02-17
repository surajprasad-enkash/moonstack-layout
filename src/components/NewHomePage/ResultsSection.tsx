"use client"

import Heading from "../Heading/Heading"

interface ResultItem {
  text: string
}

interface ResultsSectionProps {
  label?: string
  brandName?: string
  heading?: string
  items?: ResultItem[]
}

export default function ResultsSection({
  label = "RESULTS",
  brandName = "Why businesses choose",
  heading = " Moonstack",
  items = [
    { text: "Ready-to-deploy hiring systems for immediate start" },
    { text: "On-time delivery, always guaranteed" },
    { text: "Flexible engagement models with predictable monthly costs" },
  ],
}: ResultsSectionProps) {
  return (
    <section className="relative px-[20px] text-white">
      <div className="relative z-10 container">
        {/* Label */}
        <div className="gap-[40px] md:flex">
          <div className="text-center md:w-[40%] md:text-start">
            <span className="mb-6 block text-xs font-[500] tracking-widest text-white/70 uppercase">
              {label}
            </span>
          </div>
          <div className="md:w-[60%]">
            <Heading
              headingTag="h2"
              className="mb-[50px] text-center text-white md:ml-[82px] md:text-start"
              content={[
                { text: brandName, className: "" },
                {
                  text: heading,
                  className: "italic LibreBaskervilleFont highlight-text",
                },
              ]}
            />
            <div>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[40px] border-b border-white/10 py-[16px] last:border-b-0 md:gap-[110px]"
                >
                  <span className="!text-[20px] text-[#fff6]">{`{/}`}</span>
                  <p className="!text-[20px] !font-[500] text-[#fff]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

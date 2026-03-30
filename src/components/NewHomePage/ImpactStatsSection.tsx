"use client"

import Image, { StaticImageData } from "next/image"

import bgImage from "@/assets/newHomePage/ImpactStatsSection/bgImage.webp"

interface StatItem {
  value: string
  title: string
  description: string
  badges?: StaticImageData[]
}

interface ImpactStatsSectionProps {
  stats?: StatItem[]
}

export default function ImpactStatsSection({
  stats = [
    {
      value: "+170%",
      title: "Engagement Rate",
      description:
        "Seamless user flows that convert visits into qualified leads",
      badges: [],
    },
    {
      value: "4.6x",
      title: "Revenue Growth After Redesign",
      description: "Scalable product enhancements that drive measurable growth",
      badges: [],
    },
    {
      value: "-37%",
      title: "Reduced Churn Across SaaS Clients",
      description: "Improved onboarding and UX that keep users longer",
      badges: [],
    },
  ],
}: ImpactStatsSectionProps) {
  return (
    <section className="relative px-[20px] text-white">
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[-600%] right-[0] z-[1] h-[auto] w-[900px]"
        />
      )}
      <div className="container">
        {" "}
        <div className="relative z-10 w-full flex-wrap justify-center md:flex lg:justify-between">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative mb-[60px] last:mb-[0] md:mb-[0] md:mb-[150px] badge_outer${
                index + 1
              } md:min-w-[350px]`}
            >
              {/* Stat value */}
              <h3 className="!text-[90px] leading-none font-semibold text-white/80 transition group-hover:text-white md:!text-[130px]">
                {stat.value}
              </h3>

              {/* Title */}
              <p className="mb-[5px] !text-[18px] !font-[500] text-white">
                {stat.title}
              </p>

              {/* Description */}
              <p className="max-w-[280px] !text-[18px] !font-[500] text-white/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

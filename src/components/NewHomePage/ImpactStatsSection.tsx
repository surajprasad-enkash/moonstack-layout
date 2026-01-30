"use client"

import Image, { StaticImageData } from "next/image"

import wordPress from "@/assets/newHomePage/ImpactStatsSection/icon/wordpress.avif"
import galaxy from "@/assets/newHomePage/ImpactStatsSection/icon/galaxy.avif"
import flair from "@/assets/newHomePage/ImpactStatsSection/icon/flair.png"
import gtprotocol from "@/assets/newHomePage/ImpactStatsSection/icon/gtprotocol.avif"
import mojo from "@/assets/newHomePage/ImpactStatsSection/icon/mojo-tag.avif"
import myso from "@/assets/newHomePage/ImpactStatsSection/icon/myso-tag.avif"
import preformance from "@/assets/newHomePage/ImpactStatsSection/icon/preformance.png"
import save from "@/assets/newHomePage/ImpactStatsSection/icon/save.avif"
import bgImage from "@/assets/newHomePage/ImpactStatsSection/bgImage.avif"

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
      badges: [wordPress, galaxy, flair],
    },
    {
      value: "4.6x",
      title: "Revenue Growth After Redesign",
      description: "Scalable product enhancements that drive measurable growth",
      badges: [gtprotocol, mojo, myso],
    },
    {
      value: "-37%",
      title: "Reduced Churn Across SaaS Clients",
      description: "Improved onboarding and UX that keep users longer",
      badges: [preformance, save],
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
        <div className="relative z-10 w-full justify-between md:flex">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative mb-[150px] last:mb-[0] md:mb-[0] badge_outer${
                index + 1
              } md:min-w-[350px]`}
            >
              {/* Floating badges */}
              {/* {stat.badges && (
                <div className="">
                  {stat.badges.map((badge, i) => (
                    <div
                      key={`${stat.title}-badge-${i}`}
                      className={`badge-item badge-item${
                        i + 1
                      } flex items-center justify-center rounded-full px-2 py-2 transition group-hover:bg-white/15`}
                    >
                      <Image
                        src={badge}
                        alt="Brand logo"
                        className="h-[60px] w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              )} */}

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

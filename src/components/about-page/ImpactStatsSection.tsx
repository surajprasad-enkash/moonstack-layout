"use client"

import Image from "next/image"
import LottiePlayer from "../LottieAnimation"
import bgImageFunding from "@/assets/about-us/ImpactStatsSection/funding-bg.svg"
import bgImageProject from "@/assets/about-us/project-card-bg.webp"
interface ImpactStatsSectionProps {
  data: any
}

export default function ImpactStatsSection({ data }: ImpactStatsSectionProps) {
  return (
    <section className="relative z-[1] px-[20px] pt-[0] pb-[0px] text-white md:py-[80px]">
      <div className="container">
        {/* HEADING */}
        <h2 className="mx-auto mb-16 max-w-[860px] text-center">
          {data.heading.prefix}{" "}
          <span className="highlight-text libreItalic">
            {data.heading.highlight}
          </span>{" "}
          {data.heading.suffix}
        </h2>

        {/* GRID */}
        <div className="flex-wrap gap-[20px] space-y-[20px] md:flex md:space-y-[0px]">
          {data.cards.map((card: any, index: number) => {
            /* ---------------- YEARS (LOTTIE) ---------------- */
            if (card.type === "years-lottie") {
              return (
                <div
                  key={index}
                  className="relative rounded-2xl px-5 pt-8 pb-0 text-black md:w-[40%] md:px-10"
                  style={{
                    background: `linear-gradient(91deg, #acffd1 -61.77%, #FFF 87.06%)`,
                  }}
                >
                  <div className="absolute z-10">
                    <h3 className="!text-[80px] font-[500]">{card.years}</h3>
                    <p className="mt-[-20px] !text-[32px] !font-[500] text-black">
                      {card.label}
                    </p>
                  </div>
                  <div className="">
                    <LottiePlayer
                      animationData={card.lottie}
                      className="h-full w-auto"
                    />
                  </div>
                </div>
              )
            }

            /* ---------------- TESTIMONIAL ---------------- */
            if (card.type === "testimonial") {
              return (
                <div
                  key={index}
                  className="rounded-2xl px-5 py-8 md:w-[calc(60%-20px)] md:pr-20 md:pl-10"
                  style={{
                    background: `linear-gradient(276.92deg, #1C1C1C 1.7%, #2b422f 97.05%)`,
                  }}
                >
                  <h3 className="mb-[20px] md:!text-[40px]">
                    {card.title} {card.subtitle}
                  </h3>

                  <blockquote className="text-[22px] font-[500] text-white">
                    “{card.quote}”
                  </blockquote>

                  <div className="mt-6 flex items-center gap-3">
                    <Image
                      src={card.author.avatar}
                      alt={card.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="!text-[18px] !font-[500]">
                        {card.author.name}
                      </p>
                      <p className="!text-[14px] text-gray-400">
                        {card.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              )
            }

            /* ---------------- FUNDING ---------------- */
            if (card.type === "funding") {
              return (
                <div
                  key={index}
                  className="rounded-2xl !bg-cover px-5 pt-[20px] pb-[92px] md:w-[calc(60%-20px)] md:p-[64px] md:pt-[0]"
                  style={{
                    background: `url(${bgImageFunding.src})`,
                    backgroundPosition: `50% 100%`,
                  }}
                >
                  <h3 className="mb-[100px] !text-[30px] font-semibold md:!text-[50px]">
                    {card.title}
                  </h3>

                  <div className="flex flex-wrap gap-[80px] md:gap-[120px]">
                    {card.companies.map((company: any, i: number) => (
                      <div
                        key={i}
                        className="flex w-[calc(50%-40px)] justify-center text-center md:w-[calc(50%-60px)]"
                      >
                        <Image
                          src={company.ImageLogo}
                          alt={company.amount}
                          width={100}
                          height={100}
                          className="h-[auto] w-[90%] object-contain md:w-[60%]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )
            }

            /* ---------------- PROJECTS ---------------- */
            if (card.type === "projects") {
              return (
                <div
                  key={index}
                  className="relative rounded-2xl !bg-cover px-5 pt-8 pb-10 text-black md:w-[40%] md:px-10 md:pb-0"
                  style={{
                    background: `url(${bgImageProject.src})`,
                    backgroundPosition: `bottom right`,
                  }}
                >
                  <h3 className="!text-[80px] font-[500]">{card.value}</h3>
                  <p className="max-w-[200px] !text-[32px] !font-[500]">
                    {card.label}
                  </p>
                </div>
              )
            }
            /* ---------------- Team Member ---------------- */
            if (card.type === "teamMembers") {
              return (
                <div
                  key={index}
                  className="relative flex flex-col justify-between gap-[60px] rounded-2xl px-5 pt-8 pb-8 text-black md:w-[40%] md:gap-[120px] md:px-10"
                  style={{
                    background: `linear-gradient(91deg, #acffc2 -61.77%, #FFF 87.06%), linear-gradient(91deg, #ACE1FF -61.77%, #FFF 87.06%)`,
                  }}
                >
                  <Image
                    src={card.teamMember}
                    alt={card.label}
                    width={200}
                    height={100}
                    className=""
                  />
                  <div>
                    <h3 className="!text-[80px] font-[500]">{card.value}</h3>
                    <p className="!text-[32px] !font-[500]">{card.label}</p>
                  </div>
                </div>
              )
            }
            /* ---------------- globalRemote ---------------- */
            if (card.type === "globalRemote") {
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-cover px-5 pt-[64px] pb-[92px] md:w-[calc(60%-20px)] md:px-[64px]"
                  style={{
                    backgroundImage: `url(${card.globalRemote}),linear-gradient(104deg, #2c4533 2%, #1c1c1c 32%)`,
                    backgroundPosition: "bottom right",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                >
                  <p className="!text-[32px] !font-[500]">{card.label}</p>
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    </section>
  )
}

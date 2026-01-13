"use client";

import Image from "next/image";
import LottiePlayer from "../LottieAnimation";
import bgImageFunding from "@/assets/about-us/ImpactStatsSection/funding-bg.svg";
import bgImageProject from "@/assets/about-us/project-card-bg.webp";
interface ImpactStatsSectionProps {
  data: any;
}

export default function ImpactStatsSection({ data }: ImpactStatsSectionProps) {
  return (
    <section className="relative  py-[80px] z-[1] px-[20px] text-white">
      <div className="container mx-auto px-4">
        {/* HEADING */}
        <h2 className="mx-auto mb-16 max-w-3xl text-center ">
          {data.heading.prefix}{" "}
          <span className="highlight-text libreItalic">
            {data.heading.highlight}
          </span>{" "}
          {data.heading.suffix}
        </h2>

        {/* GRID */}
        <div className="flex-wrap gap-[20px] md:flex">
          {data.cards.map((card: any, index: number) => {
            /* ---------------- YEARS (LOTTIE) ---------------- */
            if (card.type === "years-lottie") {
              return (
                <div
                  key={index}
                  className="relative rounded-2xl px-10 pt-8 pb-0 text-black md:w-[40%]"
                  style={{
                    background: `linear-gradient(91deg, #C7ACFF -61.77%, #FFF 87.06%)`,
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
              );
            }

            /* ---------------- TESTIMONIAL ---------------- */
            if (card.type === "testimonial") {
              return (
                <div
                  key={index}
                  className="rounded-2xl py-8 pr-20 pl-10 md:w-[calc(60%-20px)]"
                  style={{
                    background: `linear-gradient(276.92deg, #1C1C1C 1.7%, #2B2E42 97.05%)`,
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
              );
            }

            /* ---------------- FUNDING ---------------- */
            if (card.type === "funding") {
              return (
                <div
                  key={index}
                  className="rounded-2xl !bg-cover p-[64px] pb-[92px] md:w-[calc(60%-20px)]"
                  style={{
                    background: `url(${bgImageFunding.src})`,
                    backgroundPosition: `50% 100%`,
                  }}
                >
                  <h3 className="mb-[100px] !text-[50px] font-semibold">
                    {card.title}
                  </h3>

                  <div className="flex flex-wrap gap-[120px]">
                    {card.companies.map((company: any, i: number) => (
                      <div
                        key={i}
                        className="flex w-[calc(50%-60px)] justify-center text-center"
                      >
                        <Image
                          src={company.ImageLogo}
                          alt={company.amount}
                          width={100}
                          height={100}
                          className="h-[auto] w-[60%]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            /* ---------------- PROJECTS ---------------- */
            if (card.type === "projects") {
              return (
                <div
                  key={index}
                  className="relative rounded-2xl bg-cover px-10 pt-8 pb-0 text-black md:w-[40%]"
                  style={{
                    background: `url(${bgImageProject.src})`,
                    backgroundPosition: `bottom center`,
                  }}
                >
                  <h3 className="!text-[80px] font-[500]">{card.value}</h3>
                  <p className="max-w-[200px] !text-[32px] !font-[500]">
                    {card.label}
                  </p>
                </div>
              );
            }
            /* ---------------- Team Member ---------------- */
            if (card.type === "teamMembers") {
              return (
                <div
                  key={index}
                  className="relative flex flex-col justify-between gap-[120px] rounded-2xl px-10 pt-8 pb-8 text-black md:w-[40%]"
                  style={{
                    background: `linear-gradient(91deg, #C7ACFF -61.77%, #FFF 87.06%), linear-gradient(91deg, #ACE1FF -61.77%, #FFF 87.06%)`,
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
              );
            }
            /* ---------------- globalRemote ---------------- */
            if (card.type === "globalRemote") {
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-cover p-[64px] pb-[92px] md:w-[calc(60%-20px)]"
                  style={{
                    backgroundImage: `url(${card.globalRemote}),linear-gradient(104deg, #2c2f45 2%, #1c1c1c 32%)`,
                    backgroundPosition: "bottom right",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                >
                  <p className="!text-[32px] !font-[500]">{card.label}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}

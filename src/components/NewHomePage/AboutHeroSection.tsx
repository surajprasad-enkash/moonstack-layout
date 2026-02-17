"use client"

import Image, { StaticImageData } from "next/image"
import MarqueeComponent from "../Homepage/Marquee"
import Heading from "../Heading/Heading"
import bgImage from "@/assets/newHomePage/about/banner.png"

import dnwe from "@/assets/home/slider-logo/dnwe.svg"
import enetworks from "@/assets/home/slider-logo/enetworks.svg"
import enkash from "@/assets/home/slider-logo/enkash.svg"
import hydrocan from "@/assets/home/slider-logo/hydrocan.svg"
import pickright from "@/assets/home/slider-logo/pickright.svg"
import sabc from "@/assets/home/slider-logo/sabc.svg"
import barinmate from "@/assets/home/slider-logo/brainmate.svg"

/* ---------------- TYPES ---------------- */

interface TeamMember {
  image: StaticImageData | string
  name?: string
}

interface ClientLogo {
  image: StaticImageData | string
  alt: string
}

interface AboutHeroSectionProps {
  label?: string
  heading?: string
  highlightWord?: string
  subTextLeft?: string
  subTextRight?: string
  teamCount?: string
  teamMembers?: TeamMember[]
  clientLogos?: ClientLogo[]
  raisedAmount?: string
  unicornCount?: string
}

/* ---------------- COMPONENT ---------------- */

export default function AboutHeroSection({
  label = "ABOUT US",
  heading = "Digital design experts driving business",
  highlightWord = "growth",
  subTextLeft = "High-impact digital design and development, done right",
  subTextRight = "Powered by a global team that knows your users and your market",
  teamCount = "55+",
  teamMembers = [],
  clientLogos = [],
  raisedAmount = "$1B+",
  unicornCount = "3 clients",
}: AboutHeroSectionProps) {
  return (
    <section className="relative px-[20px] text-white">
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[-20%] left-[-30%] z-[1] h-[auto] w-[160%]"
        />
      )}
      <div className="relative z-10 container">
        {/* Label */}

        <span className="mb-[20px] block text-center text-xs font-[500] tracking-widest text-white/60 uppercase md:mb-[50px] md:text-start">
          {label}
        </span>

        <div className="justify-between gap-[110px] md:flex">
          {/* LEFT CONTENT */}
          <div className="max-w-[650px]">
            <Heading
              headingTag="h2"
              className="text-center !leading-[110%] md:text-start md:!text-[92px]"
              content={[
                { text: heading, className: "" },
                {
                  text: highlightWord,
                  className: "libreItalic text-[#d0f601]",
                },
              ]}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex items-center justify-center">
            <div className="relative mt-[100px] md:mt-[0] md:w-[max-content]">
              {/* Team Avatars */}
              <div className="homeTeamMemnerOuter">
                {teamMembers.slice(0, 5).map((member, i) => (
                  <div
                    key={i}
                    className={`absolute h-14 w-14 homeTeamMemner${
                      i + 1
                    } rounded-full`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name ?? "Team member"}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Team Count */}
              <div className="text-center">
                <p className="pt-[40px] !text-[150px] !leading-[90%] !font-[500] text-[#fff9] md:pt-[0] md:!text-[160px]">
                  {teamCount}
                </p>
                <p className="mt-2 text-[#fff9] md:mt-0">Team members</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[50px] max-w-[800px] gap-[20px] md:mt-[80px] md:flex">
          <div className="mb-[20px] md:mb-[0] md:w-[50%]">
            <span className="text-[#fff]/60">{`{/}`}</span>
            <p className="mt-[10px] max-w-[370px] text-sm !font-[500] text-white first-letter:pl-[30px]">
              {subTextLeft}
            </p>
          </div>
          <div className="md:w-[50%]">
            <span className="text-[#fff]/60">{`{/}`}</span>
            <p className="mt-[10px] max-w-[370px] text-sm !font-[500] text-white first-letter:pl-[30px]">
              {subTextRight}
            </p>
          </div>
        </div>
        {/* Divider */}

        {/* CLIENT LOGOS + STATS */}
        <div className="mt-[50px] grid items-center border-t border-[#ffffff1a] pt-[20px] md:mt-[80px] md:grid-cols-3 md:gap-10">
          {/* Logos */}
          <div className="flex flex-wrap items-center justify-between gap-5 overflow-hidden py-[20px] md:col-span-2">
            <Image
              src={enetworks.src}
              alt={"dnwe"}
              width={200}
              height={80}
              className="h-[auto] w-[100px]"
            />
            <Image
              src={enkash.src}
              alt={"enkash"}
              width={200}
              height={80}
              className="h-[auto] w-[100px]"
            />
            <Image
              src={pickright.src}
              alt={"pickright"}
              width={200}
              height={80}
              className="h-[auto] w-[100px]"
            />
            <Image
              src={barinmate.src}
              alt={"barinmate"}
              width={200}
              height={80}
              className="h-[auto] w-[100px]"
            />
            <Image
              src={hydrocan.src}
              alt={"hydrocan"}
              width={200}
              height={80}
              className="h-[auto] w-[100px]"
            />
            {/* <MarqueeComponent /> */}
          </div>

          {/* Stats */}
          <div className="flex gap-12 border-[#ffffff1a] py-[20px] md:border-l md:pl-[40px]">
            <div className="">
              <p className="mb-[15px] text-[16px] text-white/60">
                Our clients raised
              </p>
              <p className="!text-[32px] !font-[500]">{raisedAmount}</p>
            </div>
            <div>
              <p className="mb-[15px] text-sm text-white/60">Unicorns</p>
              <p className="!text-[32px] !font-[500]">{unicornCount}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

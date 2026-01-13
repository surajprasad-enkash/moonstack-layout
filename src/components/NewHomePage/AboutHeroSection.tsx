"use client";

import Image, { StaticImageData } from "next/image";
import MarqueeComponent from "../Homepage/Marquee";
import Heading from "../Heading/Heading";
import bgImage from "@/assets/newHomePage/about/banner.png";

import dnwe from "@/assets/home/slider-logo/dnwe.svg";
import enetworks from "@/assets/home/slider-logo/enetworks.svg";
import enkash from "@/assets/home/slider-logo/enkash.svg";
import hydrocan from "@/assets/home/slider-logo/hydrocan.svg";
import pickright from "@/assets/home/slider-logo/pickright.svg";
import sabc from "@/assets/home/slider-logo/sabc.svg";
import barinmate from "@/assets/home/slider-logo/brainmate.svg";

/* ---------------- TYPES ---------------- */

interface TeamMember {
  image: StaticImageData | string;
  name?: string;
}

interface ClientLogo {
  image: StaticImageData | string;
  alt: string;
}

interface AboutHeroSectionProps {
  label?: string;
  heading?: string;
  highlightWord?: string;
  subTextLeft?: string;
  subTextRight?: string;
  teamCount?: string;
  teamMembers?: TeamMember[];
  clientLogos?: ClientLogo[];
  raisedAmount?: string;
  unicornCount?: string;
}

/* ---------------- COMPONENT ---------------- */

export default function AboutHeroSection({
  label = "ABOUT US",
  heading = "Digital design experts who fuel",
  highlightWord = "growth",
  subTextLeft = "Your digital design and development agency for high-impact results",
  subTextRight = "A global team that understands your market, users, and how to make products win",
  teamCount = "55+",
  teamMembers = [],
  clientLogos = [],
  raisedAmount = "$1B+",
  unicornCount = "3 clients",
}: AboutHeroSectionProps) {
  return (
    <section className="relative text-white px-[20px]">
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[-20%] w-[160%] h-[auto] left-[-30%]  z-[1]"
        />
      )}
      <div className="relative z-10 container ">
        {/* Label */}

        <span className="mb-[50px] font-[500] block text-xs tracking-widest text-white/60 uppercase">
          {label}
        </span>

        <div className="justify-between gap-[110px] md:flex">
          {/* LEFT CONTENT */}
          <div className="max-w-[650px]">
            <Heading
              headingTag="h2"
              className="!leading-[110%] md:!text-[92px]"
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
            <div className="relative md:mt-[0] sm:w-[70%] mt-[100px]">
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
                <p className="!leading-[90%] pt-[40px] md:pt-[0] !font-[500] text-[#fff9] md:!text-[160px]">
                  {teamCount}
                </p>
                <p className="text-[#fff9]">Team members</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[50px] md:mt-[80px] max-w-[800px] gap-[20px] md:flex">
          <div className="md:w-[50%] mb-[20px] md:mb-[0]">
            <span className="text-[#fff]/60">{`{/}`}</span>
            <p className="text-sm !font-[500] mt-[10px]  max-w-[370px] text-white first-letter:pl-[30px]">
              {subTextLeft}
            </p>
          </div>
          <div className="md:w-[50%]">
            <span className="text-[#fff]/60">{`{/}`}</span>
            <p className="text-sm !font-[500] mt-[10px]  max-w-[370px] text-white first-letter:pl-[30px]">
              {subTextRight}
            </p>
          </div>
        </div>
        {/* Divider */}

        {/* CLIENT LOGOS + STATS */}
        <div className="grid md:mt-[80px] mt-[50px] pt-[20px] items-center md:gap-10 md:grid-cols-3 border-t border-[#ffffff1a]">
          {/* Logos */}
          <div className="flex flex-wrap py-[20px] gap-5 overflow-hidden md:col-span-2 justify-between items-center">
            <Image
              src={enetworks.src}
              alt={"dnwe"}
              width={200}
              height={80}
              className="w-[100px] h-[auto]"
            />
            <Image
              src={enkash.src}
              alt={"enkash"}
              width={200}
              height={80}
              className="w-[100px] h-[auto]"
            />
            <Image
              src={pickright.src}
              alt={"pickright"}
              width={200}
              height={80}
              className="w-[100px] h-[auto]"
            />
            <Image
              src={barinmate.src}
              alt={"barinmate"}
              width={200}
              height={80}
              className="w-[100px] h-[auto]"
            />
            <Image
              src={hydrocan.src}
              alt={"hydrocan"}
              width={200}
              height={80}
              className="w-[100px] h-[auto]"
            />
            {/* <MarqueeComponent /> */}
          </div>

          {/* Stats */}
          <div className="flex py-[20px] gap-12 md:pl-[40px]  md:border-l border-[#ffffff1a]">
            <div className="">
              <p className="text-[16px] text-white/60 mb-[15px]">
                Our clients raised
              </p>
              <p className="!text-[32px] !font-[500]">{raisedAmount}</p>
            </div>
            <div>
              <p className="text-sm text-white/60 mb-[15px]">Unicorns</p>
              <p className="!text-[32px] !font-[500]">{unicornCount}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

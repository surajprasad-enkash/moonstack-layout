"use client";

import React from "react";
import Video from "next-video";
import getStarted from "../../../videos/get-started.mp4";
import Heading from "../Heading/Heading";
import { Button, Link } from "@mui/material";
import Image from "next/image";
import pickright from '../../../public/assets/home/slider-logo/pickright.svg'
import coralogix from '../../../public/assets/home/slider-logo/coralogix.svg'
import hydrocan from '../../../public/assets/home/slider-logo/hydrocan.svg'
import enkash from '../../../public/assets/home/slider-logo/enkash.svg'
import nuvama from '../../../public/assets/home/slider-logo/nuvama.svg'
import pickrightImg from '../../../public/assets/home/caseStudy/pickright.png'
import coralogixImg from '../../../public/assets/home/caseStudy/coralogix.png'
import hydrocanImg from '../../../public/assets/home/caseStudy/hydrocan.png'
import enkashImg from '../../../public/assets/home/caseStudy/enkash.png'
import nuvamaImg from '../../../public/assets/home/caseStudy/nuvama.png'


const cardsData = [
  {
    id: "card-1",
    title: "Hydrocan",
    logo:hydrocan,
    description:
      "Moonstack designed and developed a modern, fast, and user-friendly website for Hydrocan Water, enhancing brand presence, performance, and product visibility.",
    tags: [
      { label: "React", link: "/" },
      { label: "tailwind", link: "/" },
    ],
    image:hydrocanImg,
    link:'https://www.hydrocanwater.com/',
  },
  {
    id: "card-2",
    title: "Enkash",
    logo:enkash,
    description:
      "Moonstack crafted a sleek, high-performance website for EnKash, a leading fintech spend-management and payment platform, enhancing brand presence and UX.",
    tags: [
      { label: "Next Js", link: "/" },
      { label: "Bootstrap", link: "/" },
      { label: "wordpress", link: "/" },
    ],
    image:enkashImg,
    link:'https://www.enkash.com/',
  },
  {
    id: "card-3",
    title: "Pickright",
    logo:pickright,
    description:
      "Moonstack developed a fast, intuitive Fintech website for Pickright, improving product discovery, UX, and performance to boost conversions and brand appeal",
    tags: [
      { label: "Angular", link: "/" },
      { label: "tailwind", link: "/" },
    ],
    image:pickrightImg,
    link:'https://pickright.in/',
  },
  {
    id: "card-4",
    title: "Coralogix",
    logo:coralogix,
    description:
      "Moonstack built a high-performance website for Coralogix, a real-time observability and analytics platform, enhancing UX, speed, and global brand presence.",
    tags: [
      { label: "PHP", link: "/" },
      { label: "Python", link: "/" },
    ],
    image:coralogixImg,
    link:'https://coralogix.com/',
  },
  {
    id: "card-5",
    title: "Nuvama",
    logo:nuvama,
    description:
      "Moonstack delivered a scalable, high-performance website for Nuvama Wealth, enhancing digital presence, UX, and trust for a leading wealth management brand.",
    tags: [
      { label: "React Native", link: "/" },
      { label: "React JS", link: "/" },
    ],
    image:nuvamaImg,
    link:'https://coralogix.com/',
  },
];

const TechnologyComponent = () => {
  return (
    <section className="techonologyhomePageSection relative z-1 px-[80px] pt-[0px] text-white">
      <div className="container">

        {/* ===== HEADER ===== */}
        <div className="techonologyhomePageSectionRight mb-[80px] flex flex-wrap">
          <div className="w-full md:w-[60%]">
            <Heading
              headingTag="h2"
              content={[
                { text: "Case Studies That Highlight Smart,", color: "text-white" },
                { text: "Scalable Solutions", className: "highlight-text" },
              ]}
            />
          </div>

          <div className="flex w-full items-end justify-end md:w-[40%]">
            <Link
              href="/services"
              className="primary-btn inline-flex cursor-pointer rounded-full !px-[40px] !py-[14px] text-[16px] font-[600] tracking-[0.8px] !text-black transition"
            >
              Explore Now
            </Link>
          </div>
        </div>

        {/* ===== CARDS ===== */}
        <div id="cards" className="mix-blend-difference m-auto max-w-[1068px]">
          {cardsData.map((card) => (
            <div className="card" id={card.id} key={card.id}>
              <div className="flex flex-col items-center justify-between gap-y-[20px] rounded-[20px] border-t-5 border-[#0A662A] p-10 pr-0 md:flex-row" style={{background: `linear-gradient(180deg, #000000 0%, #0C401E 100%)`}}
>

                {/* LEFT CONTENT */}
                <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[50%]">
                  <div className="mb-[20px]">
                    <Image src={card.logo} alt={card.title} className="max-w-[150px]"/>
                   
                  </div>

                  <div>
                    <p  className="mt-[20px]">
                    {card.description}
                    </p>
                  </div>

                  {/* TAGS */}
                  <div className="mt-6 flex flex-wrap gap-[12px] mb-[60px]">
                    {card.tags.map((tag, index) => (
                      <span className="rounded-full border leading-[16px] flex border-[#0A662A] px-[14px] pt-[6px] pb-[10px] text-[16px] text-[#fff] transition"> {tag.label}</span>
                     
                    ))}
                  </div>
                  <div>
                   <Link href="#"
                        className="inline-flex rounded-[10px] font-[500] !no-underline border border-[#fff] px-4 py-[6px] text-[16px]  !text-[#fff] transition"
                      >
                        Explore Now
                      </Link>
                  </div>
                </div>

                {/* RIGHT VIDEO */}
                <div className="w-full rounded-l md:w-[40%]">
                  <Image src={card.image} alt={card.title} />
                  {/* <Video
                    src={getStarted}
                    autoPlay
                    muted
                    controls={false}
                    loop
                    playsInline
                  /> */}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnologyComponent;

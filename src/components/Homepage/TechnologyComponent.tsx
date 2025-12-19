"use client";

import React from "react";
import Video from "next-video";
import getStarted from "../../../videos/get-started.mp4";
import Heading from "../Heading/Heading";
import { Link } from "@mui/material";
import Image from "next/image";
import pickright from '../../../public/assets/home/slider-logo/pickright.svg'
import coralogix from '../../../public/assets/home/slider-logo/coralogix.svg'
import hydrocan from '../../../public/assets/home/slider-logo/hydrocan.svg'
import enkash from '../../../public/assets/home/slider-logo/enkash.svg'

const cardsData = [
  {
    id: "card-1",
    title: "Hydrocan",
    logo:hydrocan,
    description:
      "Work with a team that brings your ideas to life on your terms. Moonstack is one of the most experienced...",
    tags: [
      { label: "Technology", link: "/technology" },
      { label: "Fintech", link: "/fintech" },
      { label: "SaaS", link: "/saas" },
      { label: "Startup", link: "/startup" },
    ],
    link:'https://www.hydrocanwater.com/',
  },
  {
    id: "card-2",
    title: "Enkash",
    logo:enkash,
    description:
      "Work with a team that brings your ideas to life on your terms. Moonstack is one of the most experienced...",
    tags: [
      { label: "Technology", link: "/technology" },
      { label: "Payments", link: "/payments" },
      { label: "Enterprise", link: "/enterprise" },
      { label: "SaaS", link: "/saas" },
    ],
    link:'https://www.enkash.com/',
  },
  {
    id: "card-3",
    title: "Pickright",
    logo:pickright,
    description:
      "Work with a team that brings your ideas to life on your terms. Moonstack is one of the most experienced...",
    tags: [
      { label: "Technology", link: "/technology" },
      { label: "E-commerce", link: "/ecommerce" },
      { label: "Marketplace", link: "/marketplace" },
      { label: "SaaS", link: "/saas" },
    ],
    link:'https://pickright.in/',
  },
  {
    id: "card-4",
    title: "Coralogix",
    logo:coralogix,
    description:
      "Work with a team that brings your ideas to life on your terms. Moonstack is one of the most experienced...",
    tags: [
      { label: "Technology", link: "/technology" },
      { label: "DevOps", link: "/devops" },
      { label: "Analytics", link: "/analytics" },
      { label: "Cloud", link: "/cloud" },
    ],
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
              href="#"
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
                   <Link
                        href={card.link} target="_blank"
                        className="inline-flex rounded-[10px] font-[500] !no-underline border border-[#fff] px-4 py-[6px] text-[16px]  !text-[#fff] transition"
                      >
                        Explore Now
                      </Link>
                  </div>
                </div>

                {/* RIGHT VIDEO */}
                <div className="w-full rounded-l md:w-[40%]">
                  <Video
                    src={getStarted}
                    autoPlay
                    muted
                    controls={false}
                    loop
                    playsInline
                  />
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

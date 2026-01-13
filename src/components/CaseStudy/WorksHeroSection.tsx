"use client";

import Image from "next/image";
import WorksImageSlider from "./BannerRightSlider";
import Heading from "../Heading/Heading";
import growthIcon from "@/assets/case-study/banner/works-hero-done.avif";
import bannerBg from "@/assets/case-study/banner/bannerBg.svg";

import CommanButton from "../CommanButton/CommanButton";
import Link from "next/link";
import Marquee from "../Homepage/Marquee";

export default function WorksHeroSection() {
  return (
    <section className="relative  px-[20px] pt-[160px] pb-[80px] text-white">
      {bannerBg.src && (
        <Image
          src={bannerBg.src}
          alt="Background"
          width={100}
          height={100}
          className="absolute top-[0px] right-[0] left-[0] z-[1] h-[auto] w-[100%]"
        />
      )}

      <div className="container relative z-[2]">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <p className="mb-4 text-sm text-gray-300">
              <Link href={"/"}>
                <span className="text-white">HOME</span>{" "}
              </Link>{" "}
              / WORKS
            </p>
            <Heading
              headingTag="h1"
              className=""
              content={[
                {
                  text: `We transform`,
                  color: "text-white block",
                },
                {
                  text: `Ideas`,
                  className:
                    "italic highlight-text font-[400] LibreBaskervilleFont",
                },
                {
                  text: `into design`,
                  color: "text-white",
                },
                {
                  text: `Success Stories`,
                  className:
                    "italic highlight-text font-[400] LibreBaskervilleFont",
                },
              ]}
            />

            {/* Stats */}
            <div className="mt-[20px] mb-8 flex items-center gap-4">
              <Image src={growthIcon} alt={"growth icon"} width={200} />
            </div>

            {/* Buttons & Ratings */}
            <div className="flex flex-wrap items-center gap-6 border-t border-[#ffffff14] pt-[20px]">
              <CommanButton text={"All Cases"} />

              <div className="ml-[20px] flex items-center gap-[30px]">
                <div className="border-r border-[#ffffff14] pr-[30px]">
                  <p className="font-medium text-white">Clutch</p>
                  <div className="caseStudyBannerRating flex gap-[4px]">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>{" "}
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white">Awarded</p>
                  <div className="caseStudyBannerRating flex gap-[4px]">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div className="">
              <WorksImageSlider />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[80px]">
        <Marquee />
      </div>
    </section>
  );
}

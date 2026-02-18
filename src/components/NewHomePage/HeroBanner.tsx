"use client"

import CommanButton from "@/components/CommanButton/CommanButton"
import Image from "next/image"
import Marquee from "@/components/Homepage/Marquee"

import brand1 from "@/assets/newHomePage/banner/icon/brand_tag_icon1.svg"
import brand2 from "@/assets/newHomePage/banner/icon/brand_tag_icon2.svg"
import brand3 from "@/assets/newHomePage/banner/icon/brand_tag_icon3.svg"

import website1 from "@/assets/newHomePage/banner/icon/website_tag_icon1.svg"
import website2 from "@/assets/newHomePage/banner/icon/website_tag_icon2.svg"
import website3 from "@/assets/newHomePage/banner/icon/website_tag_icon3.svg"

import design1 from "@/assets/newHomePage/banner/icon/design_tag_icon1.svg"
import design2 from "@/assets/newHomePage/banner/icon/design_tag_icon2.svg"
import design3 from "@/assets/newHomePage/banner/icon/design_tag_icon3.svg"

import heroVideoPlay from "@/assets/newHomePage/banner/icon/hero-video-play.webp"
import homeHeroTitleDecorPlay from "@/assets/newHomePage/banner/icon/home-hero-title-decor-play.webp"

import bgImage from "@/assets/newHomePage/banner/bg-hero-updated.png"
import bgImage2 from "@/assets/newHomePage/banner/baimage2.svg"

import Link from "next/link"
import Space from "../Space"
import { useVideoModal } from "@/context/VideoModalContext"
import CalBookingButton from "../CalBookingButton/CalBookingButton"

interface HeroTag {
  label: string
}

interface HeroSectionProps {
  eyebrowText?: string
  title?: string
  highlightedItems?: string[]
  subtitle?: string
  descriptionLeft?: string
  descriptionRight?: string
  tags?: HeroTag[]
  buttonText?: string
  onButtonClick?: () => void
}

export default function HeroSection({
  eyebrowText = "Digital Product Design And Development Company",
  title = "Your technology partner uniting",
  highlightedItems = ["App", "website", "UX/UI design"],
  subtitle = "into one powerful",
  descriptionLeft = "We work closely with reputable brands, growing businesses, and Fortune companies.",
  descriptionRight = "Helping organizations achieve impactful results since 2014.",
  tags = [{ label: "SaaS" }, { label: "AI" }, { label: "Web 3.0" }],
  buttonText = "Book a Call",
  onButtonClick,
}: HeroSectionProps) {
  const { openVideo } = useVideoModal()
  return (
    <section className="relative px-[20px] pt-[160px] text-white">
      {/* Background glow */}
      {bgImage && (
        <Image
          src={bgImage.src}
          alt="Background"
          width={1200}
          height={1200}
          className="absolute right-[0] left-[-26%] z-[1] h-[auto] w-[140%]"
        />
      )}
      {bgImage2 && (
        <Image
          src={bgImage2.src}
          alt="Background"
          width={1200}
          height={1500}
          className="absolute right-[0] bottom-[-90%] left-[0%] z-[1] h-[auto] w-[100%]"
        />
      )}
      <div className="relative z-10 container">
        {/* Eyebrow */}
        <p className="mb-[10px] text-center !font-[500] text-[#f5f7ff99]">
          {eyebrowText}
        </p>

        {/* Heading */}
        <h1 className="home-hero-title m-auto max-w-[1240px] text-center !leading-[150%] md:!leading-[130%]">
          <span>Your Fixed technology partner uniting</span>
          <Link
            href=""
            className="headingBrand home-hero-title-word-bg LibreBaskervilleFont !font-[400] italic"
          >
            App{" "}
            <span className="brand1 homeHeroTitleIcon top-[-47px] left-[-84px] inline-block rounded-[50%] rounded-tl-none bg-[#ffffff14] backdrop-blur">
              <Image src={brand1} alt="" width={75} height={75} className="" />
            </span>
            <span className="brand2 homeHeroTitleIcon top-[-70px] right-[10px] inline-block rounded-[50%] rounded-tl-none bg-[#ffffff14] backdrop-blur">
              <Image src={brand3} alt="" width={75} height={75} />
            </span>
            <span className="brand3 homeHeroTitleIcon right-[95px] bottom-[-60px] inline-block rounded-[50%] rounded-tl-none bg-[#ffffff14] backdrop-blur">
              <Image src={brand2} alt="" width={75} height={75} />
            </span>
          </Link>
          <span>,</span>
          <Link
            href=""
            className="headingwebsite home-hero-title-word-bg LibreBaskervilleFont !font-[400] italic"
          >
            website{" "}
            <span className="website1 homeHeroTitleIcon top-[-55px] left-[81px] inline-block rounded-[50%] rounded-tl-none bg-[#ffffff14] backdrop-blur">
              <Image src={website1} alt="" width={75} height={75} />
            </span>
            <span className="website2 homeHeroTitleIcon top-[25px] right-[-65px] inline-block rounded-[50%] rounded-tl-none bg-[#ffffff14] backdrop-blur">
              <Image src={website2} alt="" width={75} height={75} />
            </span>
            <span className="website3 homeHeroTitleIcon bottom-[-54px] left-[-50px] z-[1] inline-block rounded-[50%] rounded-tl-none bg-[#ffffff14] backdrop-blur">
              <Image src={website3} alt="" width={75} height={75} />
            </span>
          </Link>
          <span>,</span>
          <Link
            href=""
            className="headingdesign home-hero-title-word-bg LibreBaskervilleFont !font-[400] italic"
          >
            ux/ui design{" "}
            <span className="design1 homeHeroTitleIcon top-[43px] right-[-65px] inline-block rounded-[50%] rounded-tl-none bg-[#ffffff14] backdrop-blur">
              <Image src={design3} alt="" width={75} height={75} />
            </span>
            <span className="design2 homeHeroTitleIcon top-[-48px] right-[85px] inline-block rounded-[50%] rounded-tl-none bg-[#ffffff14] backdrop-blur">
              <Image
                src={design2}
                alt=""
                width={75}
                height={75}
                className="h-[75px] w-[75px] object-cover"
              />
            </span>
            <span className="design3 homeHeroTitleIcon bottom-[-45px] left-[05px] inline-block rounded-[50%] rounded-tl-none bg-[#ffffff14] backdrop-blur">
              <Image src={design1} alt="" width={75} height={75} />
            </span>
          </Link>
          <span className="headingtext"> into </span>
          <span className="mt-2 items-center !justify-center gap-5 md:!flex">
            <span
              className="home-hero-title-decor-play relative hidden cursor-pointer md:!inline-block"
              onClick={openVideo}
            >
              <Image
                src={homeHeroTitleDecorPlay}
                alt=""
                width={130}
                height={90}
                className="overflow-hidden rounded-[10px]"
              />
              <Image
                src={heroVideoPlay}
                alt=""
                width={80}
                height={40}
                className="home-hero-title-decor-play_btn absolute bottom-[-20px]"
              />
            </span>
            <span>
              <span> one powerful digital </span>
              <span className="home-hero-title-word-purple LibreBaskervilleFont italic">
                {" "}
                product{" "}
              </span>
            </span>
          </span>
        </h1>
        <Space size={62} mobileSize={0} />
        <div className="home-hero-quotes mb-[22px] flex flex-wrap gap-[46px] md:w-[60%] md:flex-nowrap">
          <div className="home-hero-quote md:w-[50%]">
            <p className="home-hero-quote_decor text-white/60">{"{/}"}</p>
            <p className="home-hero-quote_text home-hero-quote_text-1 mt-2 !font-[500] first-letter:pl-[30px]">
              {descriptionLeft}
            </p>
          </div>
          <div className="home-hero-quote md:w-[50%]">
            <p className="home-hero-quote_decor text-white/60">{"{/}"}</p>
            <p className="home-hero-quote_text home-hero-quote_text-2 mt-2 !font-[500] first-letter:pl-[30px]">
              {descriptionRight}
            </p>
          </div>
        </div>
        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-[2px]">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-white/10 px-[20px] py-[7px] text-[14px] transition hover:bg-[#fff] hover:text-[#000]"
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex max-w-[1024px] justify-end">
   
          <CalBookingButton />
        </div>
        <Space />
        <div className="opacity-[0.2]">
          <Marquee />
        </div>
      </div>
    </section>
  )
}

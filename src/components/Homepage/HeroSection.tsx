"use client";
import Image from "next/image";
import Marquee from "@/components/Homepage/Marquee";
import bannerImg from "../../../public/assets/home/banner-img.svg";
import headingIcon from "../../../public/assets/home/heading-icon.svg";
import Link from "next/link";
interface Review {
  icon: string;
  platform: string;
  reviews: number;
}

export default function HeroSection({
  tagline = "Welcome to Moonstack Community",
  title = "Achieve Otherworldly",
  highlight = "Growth with Moonstack",
  description = "Work with a team that brings your ideas to life on your terms. Moonstack is one of the most experienced and reliable app and web development agencies in India. Skyrocket your business growth with Moonstack today!",
  reviews = [] as Review[],
  buttonText = "Get Started",
  buttonLink = "/content-us",
}) {
  return (
    <section
      className="relative mt-[62px] w-full overflow-hidden bg-cover bg-center pt-[110px] pb-[0px] text-white"
      style={{ backgroundImage: `url(${bannerImg.src})` }}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center mb-[80px]">
        {/* Tagline */}
        <p className="mb-[6px] inline-block rounded-full border border-[#114624] bg-[#092413] px-5 py-2 text-sm tracking-wide text-white">
          {tagline}
        </p>

        {/* Heading */}

        <h1 className="">
          <span className="flex justify-center">{title}<Image src={headingIcon} width={60} height={60} alt={""}></Image></span>
          <span className="highlight-text">{highlight}</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-[12px] max-w-[950px] text-[16px] leading-[200%] font-[400] text-[#EDEDED]">
          {description}
        </p>

        {/* Review Boxes */}
        <div className="mt-10 flex flex-wrap justify-center gap-[10px]">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="rounded-[6px] border border-[#0E3A0E] bg-[#08140C] px-[20px] py-[15px]"
            >
              <p className="flex items-center text-start text-[14px] leading-[200%] font-[400] tracking-[0.8px] text-[#fff]">
                Review on
                <span className="ps-[9px]">
                  <svg
                    width="100"
                    height="20"
                    viewBox="0 0 73 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.485 0L7.94097 4.48102H12.6526L8.84081 7.25045L10.2968 11.7315L6.485 8.96205L2.67321 11.7315L4.12919 7.25045L0.317399 4.48102H5.02903L6.485 0Z"
                      fill="#FF9E2F"
                    />
                    <path
                      d="M21.4538 0L22.9097 4.48102H27.6214L23.8096 7.25045L25.2655 11.7315L21.4538 8.96205L17.642 11.7315L19.0979 7.25045L15.2861 4.48102H19.9978L21.4538 0Z"
                      fill="#FF9E2F"
                    />
                    <path
                      d="M36.4225 0L37.8785 4.48102H42.5901L38.7783 7.25045L40.2343 11.7315L36.4225 8.96205L32.6107 11.7315L34.0667 7.25045L30.2549 4.48102H34.9665L36.4225 0Z"
                      fill="#FF9E2F"
                    />
                    <path
                      d="M51.3913 0L52.8472 4.48102H57.5589L53.7471 7.25045L55.203 11.7315L51.3913 8.96205L47.5795 11.7315L49.0354 7.25045L45.2236 4.48102H49.9353L51.3913 0Z"
                      fill="#FF9E2F"
                    />
                    <path
                      d="M66.3678 0L67.8238 4.48102H72.5354L68.7236 7.25045L70.1796 11.7315L66.3678 8.96205L62.556 11.7315L64.012 7.25045L60.2002 4.48102H64.9118L66.3678 0Z"
                      fill="#FF9E2F"
                    />
                  </svg>
                </span>
              </p>
              <div className="mt-1 flex items-center gap-2">
                <Image src={item.icon} alt="logo" width={78} height={20} />
                <span className="text-[14px] font-[400]">
                  ({item.reviews} Reviews)
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-[40px] text-center">
          {" "}
          <Link href={buttonLink} className="  tracking-[0.8px]  primary-btn text-black !px-[40px] !py-[14px] rounded-full font-[600]  transition inline-flex text-[16px] ">
            {buttonText}
          </Link>
        </div>
      </div>
        <Marquee />
    </section>
  );
}

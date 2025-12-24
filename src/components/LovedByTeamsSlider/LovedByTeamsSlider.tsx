"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

import entworksImg from "../../../public/assets/clientImg/img1.png";
import pickrightImg from "../../../public/assets/clientImg/img1.png";
import hydrocanImg from "../../../public/assets/clientImg/img1.png";
import avilaImg from "../../../public/assets/clientImg/img1.png";

import entworksLogo from "../../../public/assets/home/slider-logo/enetworks.svg";
import pickrightLogo from "../../../public/assets/home/slider-logo/pickright.svg";
import hydrocanLogo from "../../../public/assets/home/slider-logo/hydrocan.svg";
import avilaLogo from "../../../public/assets/home/slider-logo/accord.svg";
import Heading from "../Heading/Heading";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ---------------- SLIDE DATA ---------------- */
const slides = [
  {
    company: "entworks",
    name: "Karan Sharma",
    role: "Founder & CEO",
    text: "Work with a team that brings your ideas to life on your terms. Moonstack is one of the most experienced and reliable.",
    image: entworksImg,
    logo: entworksLogo,
  },
  {
    company: "pickright",
    name: "Karan Sharma",
    role: "Founder & CEO",
    text: "Work with a team that brings your ideas to life on your terms. Moonstack is one of the most experienced and reliable.",
    image: pickrightImg,
    logo: pickrightLogo,
  },
  {
    company: "hydrocan",
    name: "Karan Sharma",
    role: "Founder & CEO",
    text: "Work with a team that brings your ideas to life on your terms. Moonstack is one of the most experienced and reliable.",
    image: hydrocanImg,
    logo: hydrocanLogo,
  },
  {
    company: "avila",
    name: "Karan Sharma",
    role: "Founder & CEO",
    text: "Work with a team that brings your ideas to life on your terms. Moonstack is one of the most experienced and reliable.",
    image: avilaImg,
    logo: avilaLogo,
  },
  {
    company: "avila",
    name: "Karan Sharma",
    role: "Founder & CEO",
    text: "Work with a team that brings your ideas to life on your terms. Moonstack is one of the most experienced and reliable.",
    image: avilaImg,
    logo: avilaLogo,
  },
  {
    company: "avila",
    name: "Karan Sharma",
    role: "Founder & CEO",
    text: "Work with a team that brings your ideas to life on your terms. Moonstack is one of the most experienced and reliable.",
    image: avilaImg,
    logo: avilaLogo,
  },
  {
    company: "avila",
    name: "Karan Sharma",
    role: "Founder & CEO",
    text: "Work with a team that brings your ideas to life on your terms. Moonstack is one of the most experienced and reliable.",
    image: avilaImg,
    logo: avilaLogo,
  },
  {
    company: "avila",
    name: "Karan Sharma",
    role: "Founder & CEO",
    text: "Work with a team that brings your ideas to life on your terms. Moonstack is one of the most experienced and reliable.",
    image: avilaImg,
    logo: avilaLogo,
  },
  {
    company: "avila",
    name: "Karan Sharma",
    role: "Founder & CEO",
    text: "Work with a team that brings your ideas to life on your terms. Moonstack is one of the most experienced and reliable.",
    image: avilaImg,
    logo: avilaLogo,
  },
];

/* ---------------- CUSTOM ARROWS ---------------- */
const NextArrow = (props: { className: any; style: any; onClick: any; }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-45px" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: { className: any; style: any; onClick: any; }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-45px" }}
      onClick={onClick}
    />
  );
};

/* ---------------- COMPONENT ---------------- */
export default function LovedByTeamsSlider() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    autoplay: true,      // ✅ fixed
  autoplaySpeed: 3000,
    swipeToSlide: true,
    focusOnSelect: true,
    // cssEase: "cubic-bezier(0.1, 0.045, 0.1, 0.1)",
    nextArrow: <NextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <PrevArrow className={undefined} style={undefined} onClick={undefined} />,
    beforeChange: (current: any, next: any) => {
      console.log(`Changing from slide ${current} to ${next}`);
    },
    afterChange: (current: any) => {
      console.log(`Now on slide ${current}`);
    },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
          dots: true,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <section className="lovedTeramsSliderSection relative  pt-[80px] px-[80px] ">
      <div className="container ">
        {/* ---------- HEADER ---------- */}
        <div className="mb-[80px] flex flex-col lg:flex-row justify-between items-center gap-[100px]">
          <div className="lg:w-1/2">
            <Heading
              headingTag="h2"
              content={[
                { text: "Loved by ", color: "text-white" },
                { text: "teams ", className: "highlight-text" },
                { text: "around the world", color: "text-white" },
              ]}
            />
          </div>
          
          <div className="lg:w-1/2">
            <Heading
              headingTag="p"
              content={[
                {
                  text: "Work with a team that brings your ideas to life on your terms. Moonstack is one of the most experienced and reliable.",
                  color: "text-gray-300",
                },
              ]}
            />
          </div>
        </div>

        {/* ---------- SLIDER ---------- */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="outline-none focus:outline-none">
                <div className="lovedSlide px-2">
                  <div className="lovedSlideInner">
                    {/* LEFT CONTENT */}
                    <div className="lovedSlideContent">
                      <p className="text-sm lg:text-base">{slide.text}</p>

                      <div className="mt-4">
                        <p className="name text-base lg:text-lg">{slide.name}</p>
                        <p className="role text-xs lg:text-sm">{slide.role}</p>
                      </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="lovedSlideImage">
                      <Image
                        src={slide.image}
                        alt={slide.company}
                        className="object-cover client"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <button className="playBtn" aria-label="Play video">
                        ▶
                      </button>

                      <div className="logoWrap">
                        <Image
                          src={slide.logo}
                          alt={`${slide.company} logo`}
                          className="object-contain"
                          sizes="80px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
"use client";

import Slider from "react-slick";
import Image from "next/image";

const people = [
  {
    name: "Sahil Lavingia",
    title: "Founder & CEO, Gumroad",
    quote:
      "Pesto’s results in their prior fellowship cohorts speak for themselves.",
    image: "/assets/sliderOne.webp",
  },
  {
    name: "Sahil Lavingia",
    title: "Founder & CEO, Gumroad",
    quote:
      "Pesto’s results in their prior fellowship cohorts speak for themselves.",
    image: "/assets/sliderTwo.webp",
  },
  {
    name: "Sahil Lavingia",
    title: "Founder & CEO, Gumroad",
    quote:
      "Pesto’s results in their prior fellowship cohorts speak for themselves.",
    image: "/assets/SliderThree.webp",
  },
  {
    name: "Sahil Lavingia",
    title: "Founder & CEO, Gumroad",
    quote:
      "Pesto’s results in their prior fellowship cohorts speak for themselves.",
    image: "/assets/sliderFour.webp",
  },
  {
    name: "Sahil Lavingia",
    title: "Founder & CEO, Gumroad",
    quote:
      "Pesto’s results in their prior fellowship cohorts speak for themselves.",
    image: "/assets/SliderFive.webp",
  },
];

export default function BackedByBestSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="overflow-hidden py-20">
      <div className="container mx-auto w-full">
        <h2 className="mb-14 text-center text-4xl font-bold text-white">
          Backed by the best in business.
        </h2>

        <Slider {...settings} className="backed-slider px-6">
          {people.map((item, index) => (
            <div key={index} className="px-3">
              <div className="slide-wrapper">
                {/* CENTER CARD */}
                <div className="center-card">
                  <div className="flex h-[420px] w-[520px] rounded-3xl bg-[#1f1f1f] p-8 text-white transition duration-150 ease-in-out">
                    <div className="flex w-1/2 flex-col justify-between">
                      <p className="text-xl leading-relaxed font-medium">
                        <span className="mr-2 text-4xl text-purple-400">“</span>
                        {item.quote}
                      </p>

                      <div>
                        <p className="mt-6 font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-400">{item.title}</p>
                      </div>
                    </div>

                    <div className="relative h-full w-1/2 overflow-hidden rounded-2xl">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* SIDE CARD */}
                <div className="side-card">
                  <div className="relative h-[420px] w-[160px] overflow-hidden rounded-3xl">
                    <Image
                      src={item.image}
                      alt="brand"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

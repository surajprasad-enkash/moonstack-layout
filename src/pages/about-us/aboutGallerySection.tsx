"use client";
import VerticalImageSlider from "@/components/AutoVerticalSlider";
import Image from "next/image";
import React from "react";

const AboutGallery = () => {
  const images = [
    "/assets/about-us/gallary.png",
    "/assets/about-us/gallary.png",
    "/assets/about-us/gallary.png",
    "/assets/about-us/gallary.png",
    "/assets/about-us/gallary.png",
  ];

  return (
    <section className="bg-black px-4 py-16 md:px-10">
      <div className="container mx-auto mb-12 text-center">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-white">About us</h2>
          <p className="text-[15px] leading-relaxed text-gray-300">
            Onboard brings together talent and companies on a single, powerful
            platform built for efficiency. It simplifies hiring by offering
            clear options, easy communication, and a trust-based environment for
            freelancers and full-time job seekers. With modern design,
            intelligent filters, and a seamless user journey, Onboard empowers
            individuals and businesses to grow without limitations.
          </p>
        </div>
        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="col-span-2 h-full">
            <Image
              src="/assets/about-us/gallary.png"
              width={850}
              height={700}
              className="h-full w-full rounded-xl object-cover"
              alt={""}
            />
          </div>

          <div className="h-full">
            <VerticalImageSlider images={images} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;

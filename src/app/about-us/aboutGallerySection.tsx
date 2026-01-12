"use client";

import Image from "next/image";
import React from "react";
// import teams from "public/assets/about-us/moonstack-teams.png";
import teams from "public/assets/about-us/moonstack-teams.webp";

const AboutGallery = () => {
  return (
    <section className="relative z-[2] px-[20px] pt-[80] pb-[150]">
      <div className="container">
        <div className="flex rounded-3xl">
          <Image
            src={teams}
            alt={"teams"}
            width={1000}
            height={1000}
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;

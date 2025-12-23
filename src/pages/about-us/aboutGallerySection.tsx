"use client";

import Image from "next/image";
import React from "react";
import teams from "../../../public/assets/about-us/teams.jpg";

const AboutGallery = () => {
  return (
    <section className="px-4 py-16 md:px-10">
      <div className="container mx-auto">
        <div className="flex rounded-3xl">
          <Image src={teams} alt={"teams"} className="w-full rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;

"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import usaFlag from "public/assets/contact-us/usa-flag.png";
import indiaFlag from "public/assets/contact-us/india-flag.png";
import CustomButton from "@/components/CommanButton/CommanButton";

const WorldMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

type LocationSectionProps = {
  heading: {
    text: string;
    color?: string;
    className?: string;
  }[];
  subHeading?: string;
  buttonText: string;
  buttonLink: string;
};

const LocationSection = ({
  heading,
  subHeading,
  buttonText,
  buttonLink,
}: LocationSectionProps) => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <section className="relative z-[1] px-[20px] py-[80px]">
      <div className="container">
        {/* TOP CONTENT */}
        <div className="mx-auto w-3/4 text-center">
          <Heading
            headingTag="h2"
            className="text-center font-semibold"
            content={heading}
          />

          <Heading
            headingTag="p"
            className="py-4 text-center text-white"
            content={subHeading}
          />

          <CustomButton text={buttonText} href={buttonLink} />
        </div>

        {/* MAP + CARDS */}
        <div>
          <WorldMap
            activeLocation={activeLocation}
            setActiveLocation={setActiveLocation}
          />

          <div className="mx-auto flex items-center justify-center gap-4">
            {/* USA CARD */}
            <div
              onMouseEnter={() => setActiveLocation("USA")}
              onMouseLeave={() => setActiveLocation(null)}
              className={`rounded-2xl p-5 transition ${
                activeLocation === "USA"
                  ? "bg-[#D0F601] text-black"
                  : "bg-[#04230F] text-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <Heading
                  headingTag="p"
                  content={[{ text: "Moonstack Pvt. Ltd" }]}
                />
                <Image src={usaFlag} alt="USA" width={20} height={20} />
              </div>
              <p className="mt-3 text-sm">
                8 The Green, STE R, Dover, DE 19901, USA
              </p>
            </div>

            {/* INDIA CARD */}
            <div
              onMouseEnter={() => setActiveLocation("INDIA")}
              onMouseLeave={() => setActiveLocation(null)}
              className={`rounded-2xl p-5 transition ${
                activeLocation === "INDIA"
                  ? "bg-[#D0F601] text-black"
                  : "bg-[#04230F] text-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <Heading
                  headingTag="p"
                  content={[{ text: "Moonstack Pvt. Ltd" }]}
                />
                <Image src={indiaFlag} alt="India" width={20} height={20} />
              </div>
              <p className="mt-3 text-sm">
                E6, Vaishali Nagar, Jaipur, Rajasthan 302021
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

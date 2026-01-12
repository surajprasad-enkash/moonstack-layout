"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import CustomButton from "../CommanButton/CommanButton";
import Heading from "@/components/Heading/Heading";

interface BannerProps {
  title: { text: string; color?: string }[];
  description: { text: string; color?: string }[];
  buttonLabel?: string;
  buttonLink?: string;
  rightImg?: StaticImageData | string;
  bgImg: StaticImageData | string;
}

const ReusableBanner: React.FC<BannerProps> = ({
  title,
  description,
  buttonLabel = "Talk with us",
  buttonLink = "#",
  rightImg,
  bgImg,
}) => {
  return (
    <div
      className="relative w-full bg-cover bg-center px-5"
      style={{
        backgroundImage: `url(${typeof bgImg === "string" ? bgImg : bgImg.src})`,
      }}
    >
      <div className="container mx-auto">
        <div className="grid w-3/4 items-center gap-10 py-24">
          {/* LEFT TEXT CONTENT */}
          <div className="text-white">
            <Heading
              headingTag="h3"
              className="text-left font-bold"
              content={title}
            />
            <Heading
              headingTag="p"
              className="max-w-md pt-4 pb-8 text-left"
              content={description}
            />

            {buttonLabel && (
              <>
                <div className="mt-16 inline-block">
                  <CustomButton text={buttonLabel} href={buttonLink} />
                </div>
              </>
            )}
          </div>
        </div>
        {rightImg && (
          <div className="absolute right-32 bottom-0 pr-4">
            <Image
              src={typeof rightImg === "string" ? rightImg : rightImg.src}
              alt="Banner Right Image"
              width={380}
              height={380}
              className="pointer-events-none select-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReusableBanner;

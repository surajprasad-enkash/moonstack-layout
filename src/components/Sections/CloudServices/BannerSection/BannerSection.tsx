"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading/Heading";
import React from "react";

interface HighlightText {
  className: string;
  text: string;
  color?: string;
}

interface HeroCloudSectionProps {
  title: HighlightText[];
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  image?: StaticImageData | string;
  bgImage?: StaticImageData | string;
  bgColor?: string;
  className?: string;
  padding?: string;
  marginRight?: string;
  imgSize?: string;
}

export default function HeroCloudSection({
  title,
  description,
  buttonText,
  buttonUrl = "#",
  image,
  bgImage,
  bgColor = "black",
  className = "",
  padding = "80px 0px",
  marginRight = '',
  imgSize='md:w-[100%]'
}: HeroCloudSectionProps) {
  return (
    <section
      className="relative w-full overflow-hidden md:!px-[80px] py-20 px-[20px] text-white"
      style={{
        padding: padding,
        backgroundColor: bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* Title using Heading */}
          <Heading
            headingTag="h1"
            className="!text-[40px] !md:text-[46px] font-bold leading-tight tracking-[1.3px]"
            content={title.map((t) => ({
              text: t.text + " ",
              color: t.color || "",
              className: t.className || "",
            }))}
          />

          {/* Description */}
          {description && (
            <Heading
              headingTag="p"
              className="text-sm md:text-base text-white/80 leading-relaxed max-w-lg"
              content={[{ text: description, color: "text-white/80" }]}
            />
          )}

          {/* Button */}
          {buttonText && (
            <Link href={buttonUrl}>
              <button className="mt-4 px-6 py-3 bg-[#00CF49] text-black font-semibold rounded-lg hover:bg-[#00b53f] transition">
                {buttonText}
              </button>
            </Link>
          )}
        </div>

        {/* RIGHT IMAGE */}
        {image && (
          <div className="flex justify-center md:justify-end">
            <div className={`w-[100%] md:w-[100%] ${marginRight} justify-center flex`}>
            <Image
              src={image}
              alt="Cloud Services"
              className={`w-[100%] ${imgSize} object-contain`}
            />
            </div>
          </div>
        )}
      </div>

      {/* Optional Background Glow Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#00CF49]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#00CF49]/10 blur-3xl rounded-full"></div>
      </div>
    </section>
  );
}

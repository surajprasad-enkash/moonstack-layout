"use client";

import { valuesData } from "@/constants/about";
import Image from "next/image";
import bgImage from "@/assets/about-us/OurValuesSection/bgImage.svg";
import Heading from "@/components/Heading/Heading";

export default function OurValuesSection() {
  return (
    <section className="relative px-[20px] py-[80px]">
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[0px] right-[0] left-[0] z-[1] h-[auto] w-[100%]"
        />
      )}
      <div className="relative z-[1] container">
        {/* Heading */}
        <div className="mb-16 text-center">
          <Heading
            headingTag="h2"
            className="text-white"
            content={[
              { text: "Our", className: "" },
              { text: "values", className: "highlight-text libreItalic" },
            ]}
          />
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/80">
            People, awareness and growth. Our people, being the main value of
            the company, come to effective growth while remaining purposeful.
          </p>
        </div>

        {/* Cards */}
        <div className="grid auto-rows-[260px] grid-cols-1 gap-6 md:grid-cols-3">
          {valuesData.map((card, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 ${
                card.className ?? "bg-white"
              }`}
            >
              {/* IMAGE CARD */}
              {card.image && (
                <Image
                  src={card.image}
                  alt={card.title ?? "value image"}
                  fill
                  className="object-cover"
                />
              )}

              {/* TEXT CARD */}
              {card.title && (
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="mt-3 text-sm opacity-80">
                      {card.description}
                    </p>
                  </div>

                  {card.ctaText && (
                    <div className="flex">
                      <button className="mt-4 w-fit items-center gap-2 rounded-full bg-[#d0f601] px-4 py-2 text-sm font-medium text-black transition hover:scale-105">
                        {card.ctaText}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Overlay for image cards */}
              {card.image && <div className="absolute inset-0 bg-black/10" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { valuesData } from "@/constants/about";
import Image from "next/image";

export default function OurValuesSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#2b2e8f] to-[#3c2fa3] py-24">
      {/* Heading */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-semibold text-white">Our values</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/80">
          People, awareness and growth. Our people, being the main value of the
          company, come to effective growth while remaining purposeful.
        </p>
      </div>

      {/* Cards */}
      <div className="container mx-auto grid auto-rows-[260px] grid-cols-1 gap-6 md:grid-cols-3">
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
                  <p className="mt-3 text-sm opacity-80">{card.description}</p>
                </div>

                {card.ctaText && (
                  <button className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#d0f601] px-4 py-2 text-sm font-medium text-black transition hover:scale-105">
                    {card.ctaText}
                  </button>
                )}
              </div>
            )}

            {/* Overlay for image cards */}
            {card.image && <div className="absolute inset-0 bg-black/10" />}
          </div>
        ))}
      </div>
    </section>
  );
}

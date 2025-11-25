"use client";
import Heading from "@/components/Heading/Heading";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardItem {
  icon: string | StaticImageData;

  title: string;
  description: string;
}

// Heading should now accept an array of { text, color }
interface WhyChooseSectionProps {
  heading: { text: string; color?: string }[];
  description: string;
  cards: CardItem[];
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  heading,
  description,
  cards,
}) => {
  return (
    <section className="bg-black bg-[url('/assets/choose-bg-img.webp')] bg-cover bg-center">
      <div className="container mx-auto items-center px-4 py-12 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Section (Sticky) */}
          <div className="self-start lg:sticky lg:top-24">
            <Heading
              headingTag="h3"
              className="text-start font-semibold"
              content={heading}
            />

            <Heading
              headingTag="p"
              className="primary-grey pt-6 text-start"
              content={[{ text: description }]}
            />
          </div>

          <div className="scrollbar-hide flex max-h-[600px] flex-col gap-5 overflow-y-auto pr-2">
            {cards.map((card, index) => (
              <div key={index} className="bg-primary-50 rounded-xl p-[40px]">
                <div className="flex items-center gap-[40px]">
                  <Image
                    src={card.icon}
                    alt="banner image"
                    height={40}
                    width={40}
                    className="object-contain"
                  />
                  <div>
                    <Heading
                      headingTag="h5"
                      className="text-start font-bold"
                      content={[{ text: card.title }]}
                    />
                    <Heading
                      headingTag="p"
                      className="primary-grey mt-2 text-start"
                      content={[{ text: card.description }]}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default WhyChooseSection;

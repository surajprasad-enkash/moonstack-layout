"use client";

import Heading from "@/components/Heading/Heading";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ExpertiseCard {
  icon: StaticImageData | string;
  title: string;
  description: string;
}

interface ExpertiseSectionProps {
  heading: { text: string; color?: string }[];
  subHeading?: { text: string; color?: string }[];
  cards: ExpertiseCard[];
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  heading,
  subHeading,
  cards,
}) => {
  return (
    <section className="bg-black py-16 text-white md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-6 pb-20 md:grid-cols-2">
          <Heading
            headingTag="h3"
            className="text-start font-semibold"
            content={heading}
          />
          <Heading
            headingTag="p"
            className="text-light-grey text-start"
            content={subHeading}
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const isRight = i === 0 || i === 5;

            const spanClass = isRight
              ? "col-span-1 row-span-2 flex flex-col gap-10"
              : "col-span-2 flex  gap-10";

            return (
              <div key={i} className={`my-gradient-border ${spanClass}`}>
                <div>
                  <Image
                    src={card.icon}
                    alt="icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                <div>
                  <Heading
                    headingTag="h5"
                    className="text-start font-semibold"
                    content={card.title}
                  />
                  <Heading
                    headingTag="p"
                    className="text-primary-grey text-start"
                    content={card.description}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const isRight = i === 0 || i === 2;

            const spanClass = isRight
              ? "col-span-2 flex  gap-10"
              : "col-span-1 row-span-2 flex flex-col gap-10";

            return (
              <div key={i} className={`my-gradient-border ${spanClass}`}>
                <div>
                  <Image
                    src={card.icon}
                    alt="icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                <div>
                  <Heading
                    headingTag="h5"
                    className="text-start font-semibold"
                    content={card.title}
                  />
                  <Heading
                    headingTag="p"
                    className="text-primary-grey text-start"
                    content={card.description}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ExpertiseSection;

"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Heading from "@/components/Heading/Heading";
import { FeatureSectionProps } from "../../../../types/feature-section-types";

export default function FeatureSection({
  heading,
  column = 3,
  features,
  className,
}: FeatureSectionProps) {
  const columnClass =
    column === 2
      ? "md:grid-cols-2"
      : column === 4
        ? "md:grid-cols-4"
        : "md:grid-cols-3 !gap-[100px]";

  return (
    <section className={cn("relative z-[2] px-4 py-24 text-white", className)}>
      <div className="container mx-auto">
        <Heading
          headingTag="h2"
          content={heading}
          className="mx-auto mb-20 max-w-3xl text-center text-white"
        />

        <div className={cn("grid grid-cols-1 gap-14", columnClass)}>
          {features.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-16 flex items-start justify-start">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>

              <Heading
                headingTag="h4"
                content={item.title}
                className="mb-3 text-start text-white"
              />

              <Heading
                headingTag="p"
                content={item.description}
                className="text-start text-white/70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

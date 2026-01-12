"use client";

import Image, { StaticImageData } from "next/image";
import Heading from "@/components/Heading/Heading";
import { cn } from "@/lib/utils";

interface FeatureItem {
  id: number;
  title: string;
  icon: string | StaticImageData;
}

interface QualitySectionProps {
  heading?: string;
  features: FeatureItem[];
  className?: string;
}

export default function QualitySection({
  features,
  className,
}: QualitySectionProps) {
  return (
    <section className={cn("relative py-24 text-white", className)}>
      <div className="pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative z-10 container">
        <div className="mb-20 text-center">
          <Heading
            headingTag="h2"
            content={[
              {
                text: "We get things ",
                className: "text-white ",
              },
              {
                text: "done with quality",
                className: "block highlight-text libreItalic",
              },
            ]}
            className="text-[28px] font-semibold md:text-[40px]"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-[130px] w-[130px]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h4 className="mt-[64px] leading-relaxed text-white/90">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

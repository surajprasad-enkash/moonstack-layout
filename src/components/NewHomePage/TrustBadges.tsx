"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TrustBadgeItem {
  id?: string;
  icon: string;
  title?: string;
  subtitle: string;
}

interface TrustBadgesProps {
  items: TrustBadgeItem[];
  className?: string;
}

export default function TrustBadges({
  items,
  className,
}: TrustBadgesProps) {
  return (
    <section
      className={cn( "relative text-white px-[20px]", className )}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:gap-[123px] gap-[50px] text-center grid-cols-2 lg:grid-cols-4">
          {items.map((item,index) => (
            <div
              key={index}
              className="flex flex-col items-center  justify-center"
            >
              {/* Icon */}
              <Image
                src={item.icon}
                alt={item.subtitle}
                width={160}
                height={100}
                className="mb-6 object-contain"
              />

              {/* Text */}
              <p className="max-w-[170px] !font-[500] text-white/90">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

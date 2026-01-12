"use client";

import Heading from "@/components/Heading/Heading";
import Image from "next/image";

interface ServiceItem {
  title: string;
  desc: string;
  icon?: string; // Arrow 24x24 image
}

interface OurServicesProps {
  subtitle: string;
  title: string;
  highlight: string;
  services: ServiceItem[];
}

export default function OurServices({
  subtitle,
  title,
  highlight,
  services,
}: OurServicesProps) {
  return (
    <section className="bg-black px-6 py-20 md:px-20 relative">
      <div className="container ">


<div className="">

        {/* Subtitle */}
        <span className="text-center text-sm text-green-400 pb-2">
          {subtitle}
        </span>

        {/* Main Heading */}
        <Heading
          headingTag="h2"
          className="text-center text-3xl md:text-4xl font-bold mb-14"
          content={[
            { title: title, color: "text-white", className: " " },
            { title: highlight, className: "highlight-text" },
          ]}
        />
</div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="group p-[1px] rounded-xl 
              bg-gradient-to-r from-green-600/30 to-transparent 
              hover:from-green-500/60 transition-all duration-300"
            >
              <div className="bg-[#0e0f0f] rounded-xl p-6 h-full group-hover:bg-black transition-all">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  {/* Arrow / Icon */}
                  <Image
                    src={item.icon || "/icons/arrow-up-right.svg"}
                    alt="arrow icon"
                    width={24}
                    height={24}
                    className="opacity-80 group-hover:opacity-100 transition-all"
                  />
                </div>

                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

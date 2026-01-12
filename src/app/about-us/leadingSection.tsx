import StatsParallaxCard from "@/components/StatsParallaxCard";
import Image from "next/image";
import React from "react";
import projectImg from "public/assets/about-us/projectImg.webp";

const LeadingSection = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <Image src={projectImg} alt={""} />
          </div>
          <div>
            {" "}
            <StatsParallaxCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingSection;

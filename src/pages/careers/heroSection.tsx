"use client";

import Heading from "@/components/Heading/Heading";
import BiDirectionalMarquee from "@/components/Marquee";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-12 md:pt-32 md:pb-20">
      <BiDirectionalMarquee />
      <div className="container mx-auto">
        <div className="absolute top-[32%] left-1/2 z-10 flex w-1/2 -translate-x-1/2 items-center justify-center bg-black p-2 shadow-[0_0_26px_15px_#000]">
          <div>
            <Heading
              headingTag="h1"
              className="text-center leading-tight font-extrabold"
              content={[
                {
                  text: "Explore new job vacancies all",
                  color: "text-white",
                },
                {
                  text: " over the world",
                  color: "text-gradient",
                },
              ]}
            />

            <Heading
              headingTag="p"
              className="text-primary-grey mt-4 text-center"
              content={[
                {
                  text: "Find opportunities that match your skills and ambition. Join teams building meaningful products across the globe.",
                  color: "",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

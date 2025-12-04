import Heading from "@/components/Heading/Heading";
import React from "react";
import backgroundImg from "../../../public/assets/about-us/missionBg.webp";

interface MissionSectionProps {
  title: string;
  highlight: string;
  subtitle?: string;
  services: {
    number: string | number;
    title: string;
    description: string;
  }[];
}

export default function MissionSection({ services }: MissionSectionProps) {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage: `
      linear-gradient(0deg, rgba(21,21,21,0.2), rgba(21,21,21,0.2)),
      linear-gradient(0deg, rgba(0,0,0,0.25), rgba(0,0,0,0.25)),
      url(${backgroundImg.src})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-[20px] py-10 text-white md:px-[80px]">
        <div className="row"></div>
        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <>
            <div className="rounded-xl bg-[#006223] p-15 text-left shadow-xl">
              <Heading
                headingTag="h3"
                className="mt-6 font-semibold"
                content={[{ text: "Our Story", color: "text-white" }]}
              />
              <Heading
                headingTag="p"
                className="font-14 pt-3 text-[12px] leading-[28px] font-medium tracking-[-0.04em] tracking-wider text-white md:text-[14px] md:leading-[200%]"
                content={[
                  {
                    text: "Moonstack was established on the ground that digital change is inevitable in today’s business environment. Assembling a few fundamental specialists, we started to develop the company, for which not only technical abilities are important, but also the perspective of the user and his goals.Since then Moonstack has evolved into one of the most prominent IT solution companies, specializing in website and application development for web and mobile platforms, cloud computing, application hosting, and internet marketing. Our development process has always been focused on such values as efficiency, continuous improvement, and outstanding client outcomes.",
                    color: "text-white",
                  },
                ]}
              />
            </div>
            <div className="rounded-xl bg-[#ffffff12] p-15 text-left shadow-xl backdrop-blur-md">
              <Heading
                headingTag="h3"
                className="mt-6 font-semibold"
                content={[{ text: "Our Mission", color: "text-white" }]}
              />
              <Heading
                headingTag="p"
                className="font-14 pt-3 text-[12px] leading-[28px] font-medium tracking-[-0.04em] tracking-wider text-white md:text-[14px] md:leading-[200%]"
                content={[
                  {
                    text: "This encapsulates our current mission statement as a company; to develop solutions that can change the world. As an organization, if our aim is to establish long term relationships with our clients by assisting them to be relevant in a world that is fast transitioning to the online environment then it must have the above characteristics. Thus, the focus will be on quality, creativity, and satisfaction of the customer’s needs to become a reliable partner for businesses trying to start using technology as a tool to meet their objectives.",
                    color: "text-white",
                  },
                ]}
              />
            </div>
          </>
        </div>
      </div>
    </section>
  );
}

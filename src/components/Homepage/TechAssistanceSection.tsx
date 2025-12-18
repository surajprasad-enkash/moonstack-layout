"use client";

import Image from "next/image";
import bgImg from "../../../public/assets/home/our-tech/our-tech.svg";
import Heading from "../Heading/Heading";

export default function TechAssistanceSection() {
  return (
    <section
      className="bg-bottom-center relative w-full overflow-hidden bg-cover md:py-[80px] px-[20px] md:px-[80px]"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="container">
        {/* LEFT CONTENT */}
        <div className="w-full max-w-xl text-white">
          <Heading
            headingTag="h2"
            className="mb-[12px] text-[40px]"
            content={[
              { text: `Need Assistance? Our Tech `, color: "text-white block" },
              {
                text: `Experts are Just a Click Away`,
                className: "text-gradient",
              },
            ]}
          />
          <Heading
            headingTag="p"
            className="mb-[29px]"
            content={[
              {
                text: ` Work with a team that brings your ideas to life on your terms. Moonstack is one. `,
                color: "text-white block",
              },
            ]}
          />

          <button className="  tracking-[0.8px]  primary-btn text-black !px-[40px] !py-[14px] rounded-full font-[600]  transition inline-flex text-[16px] cursor-.01pointer">
            Get a quote
          </button>
        </div>
      </div>
    </section>
  );
}

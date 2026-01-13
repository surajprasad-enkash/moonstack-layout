"use client";

import Heading from "../Heading/Heading";
import bgImage from "@/assets/about-us/DnaSection/bgImage.svg";
import Image from "next/image";
interface DnaSectionProps {
  title: {
    before: string;
    highlight: string;
    after: string;
    circled: string;
  };
  mission: {
    label: string;
    text: string;
  };
  vision: {
    label: string;
    text: string;
  };
}

export default function DnaSection({
  title,
  mission,
  vision,
}: DnaSectionProps) {
  return (
    <section className="relative text-white px-[20px] z-[0] py-[80px]">
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[-100%] right-[0] left-[0] z-[1] h-[auto] w-full"
        />
      )}
      <div className="relative container z-[2]">
        <div className="md:flex gap-[20px]">
          {/* LEFT TITLE */}
          <div className="md:w-[50%] md:pr-[150px]">
            <Heading
              headingTag="h2"
              className=""
              content={[
                { text: title.before, className: "" },
                {
                  text: title.highlight,
                  className: "highlight-text libreItalic",
                },
                { text: title.after, className: "" },
              ]}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:w-[50%]">
            {/* MISSION */}
            <div className="mb-[60px]">
              <p className="mb-[20px] !text-[20px] !font-[500] text-[#fff]/50 uppercase">
                {mission.label}
              </p>
              <p className="!text-[32px] !font-[400]">{mission.text}</p>
            </div>

            {/* VISION */}
            <div>
              <p className="mb-[20px] !text-[20px] !font-[500] text-[#fff]/50 uppercase">
                {vision.label}
              </p>
              <p className="!text-[32px] !font-[400]">{vision.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

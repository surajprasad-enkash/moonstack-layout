"use client";

import Heading from "../Heading/Heading";

interface ResultItem {
  text: string;
}

interface ResultsSectionProps {
  label?: string;
  brandName?: string;
  heading?: string;
  items?: ResultItem[];
}

export default function ResultsSection({
  label = "RESULTS",
  brandName = "Moonstack",
  heading = "is your perfect choice in terms of",
  items = [
    { text: "Hiring system with immediate start" },
    { text: "Guaranteed on-time deliverables" },
    { text: "Flexible collaboration & fixed monthly rate" },
  ],
}: ResultsSectionProps) {
  return (
    <section className="relative text-white px-[20px]">
      <div className="relative z-10 container">
        {/* Label */}
        <div className="gap-[40px] md:flex">
          <div className="md:w-[40%]">
            <span className="mb-6 block font-[500] text-xs tracking-widest text-white/70 uppercase">
              {label}
            </span>
          </div>
          <div className="md:w-[60%]">
            <Heading
              headingTag="h2"
              className="mb-[50px] md:ml-[82px] text-white"
              content={[
                { text: brandName, className: "italic LibreBaskervilleFont highlight-text" },
                { text: heading, className: "" },
              ]}
            />
            <div>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[110px] border-b last:border-b-0 border-white/10 py-[16px]"
                >
                  <span className="text-[#fff6] !text-[20px]">{`{/}`}</span>
                  <p className="text-[#fff] !text-[20px] !font-[500]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}

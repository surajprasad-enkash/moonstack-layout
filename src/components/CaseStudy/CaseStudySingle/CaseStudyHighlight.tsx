"use client";

import Heading from "@/components/Heading/Heading";
import React from "react";
import secondBanner from "@/assets/case-study/single-case-study/secondBanner.svg";

const CaseStudyHighlight = () => {
  return (
    <section
      className="w-full bg-gradient-to-r bg-cover bg-bottom bg-center"
      style={{ backgroundImage: `url(${secondBanner.src})` }}
    >
      <div className="mx-auto max-w-[1140px] px-6 py-16 md:py-20">
        <Heading
          className="text-center text-[#fff] md:!text-[92px] md:!leading-[110%]"
          headingTag="h2"
          content={[
            { text: "Build", className: "libreItalic highlight-text" },
            {
              text: "a modern, high-performing website that earns trust and",
              className: "",
            },
            { text: "converts", className: "libreItalic highlight-text" },
            { text: "with", className: "" },
            { text: "Moonstack", className: "libreItalic highlight-text" },
          ]}
        />
      </div>
    </section>
  );
};

export default CaseStudyHighlight;

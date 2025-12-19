"use client";

import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../../../public/assets/home/SmartSolutions/img1.svg";
import img2 from "../../../../public/assets/home/SmartSolutions/img2.svg";
import img3 from "../../../../public/assets/home/SmartSolutions/img3.svg";
import img4 from "../../../../public/assets/home/SmartSolutions/img4.svg";
import arrowIcon from "../../../../public/assets/home/SmartSolutions/arrow_icon.svg";
import banner from "../../../../public/assets/home/SmartSolutions/banner.webp";

export default function SmartSolutions() {
  return (
    <section className="relative overflow-hidden  py-[80px] text-white smartSolutionSectionHome" 
    // style={{backgroundImage:`url(${banner.src})`}}
    >
   

      <div className="relative container">
        {/* HEADING */}
        <div className="mb-[80px] text-center">
          <Heading
            headingTag="h2"
            className="mx-[auto] max-w-[700px]"
            content={[
              {
                text: "Smart Solutions That Scale With ",
                color: "text-white",
                className: "",
              },
              { text: "Your Business", color: "", className: "highlight-text" },
            ]}
          />
        </div>

        {/* GRID */}
        <div className="flex gap-[20px] flex-wrap">
          {cards.map((item, i) => (
            <div
              key={i}
              className="SmartSolutionsBox relative h-[400px] overflow-hidden rounded-[10px] border border-[#0C401E] bg-[#05200E] p-[40px] transition [&:nth-child(1)]:w-[522px] [&:nth-child(2)]:w-[calc(100%-542px)] [&:nth-child(3)]:w-[calc(100%-542px)] [&:nth-child(4)]:w-[522px]"
            >
              {/* TEXT */}
              <div className="relative z-10 flex h-[100%] max-w-[100%] flex-col justify-between md:max-w-[50%]">
                <div className="top_content">
                  <Heading
                    headingTag="h3"
                    className="mb-[20px]"
                    content={[
                      { text: item.title, color: "text-white", className: "" },
                    ]}
                  />
                  <Heading
                    headingTag="p"
                    className="mb-[0]"
                    content={[
                      { text: item.desc, color: "text-white", className: "" },
                    ]}
                  />
                </div>
                <div className="bottom_link">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-[16px] font-[400] text-white"
                  >
                    Explore now{" "}
                    <span>
                      <Image
                        src={arrowIcon}
                        alt="arrow icon"
                        className="h-[10.75px] w-[21.5px]"
                      />
                    </span>
                  </Link>
                </div>
              </div>
              {/* IMAGE */}
              <div className="pointer-events-none absolute right-0 bottom-0 max-w-[45%] imageBox">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= DATA ================= */

const cards = [
  {
    title: "Product Design",
    desc: "Work with a team that brings your ideas to life on your terms.",
    image: img1.src,
  },
  {
    title: "Web Development",
    desc: "Work with a team that brings your ideas to life on your terms.",
    image: img2.src,
  },
  {
    title: "Application Development",
    desc: "Work with a team that brings your ideas to life on your terms.",
    image: img3.src,
  },
  {
    title: "Cloud Solutions",
    desc: "Work with a team that brings your ideas to life on your terms.",
    image: img4.src,
  },
];

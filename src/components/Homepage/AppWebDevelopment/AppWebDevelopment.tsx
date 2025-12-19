"use client";

import { useEffect, useState } from "react";
import Heading from "@/components/Heading/Heading";
import Link from "next/link";
import Image from "next/image";

import appWebIcon from "../../../../public/assets/home/app-web/dot_arrow.svg";
import appWebImage from "../../../../public/assets/home/app-web/app_web_img.webp";
import icon1 from "../../../../public/assets/home/app-web/icon1.svg";
import icon2 from "../../../../public/assets/home/app-web/icon2.svg";
import icon3 from "../../../../public/assets/home/app-web/icon3.svg";
import icon4 from "../../../../public/assets/home/app-web/icon4.svg";
import banner from "../../../../public/assets/home/app-web/banner.webp";

/* =========================
   COUNTER COMPONENT
   Supports: 150+, 98%, 10+, 07+
========================= */
function Counter({ value }: { value: string }) {
  const hasPlus = value.includes("+");
  const hasPercent = value.includes("%");

  const endValue = parseInt(value.replace(/[^\d]/g, ""), 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = endValue / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= endValue) {
        start = endValue;
        clearInterval(counter);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [endValue]);

  return (
    <>
      {count}
      {hasPercent && "%"}
      {hasPlus && "+"}
    </>
  );
}

export default function AppWebDevelopment() {
  return (
    <section
      className="relative overflow-hidden  text-white px-[80px] py-[80px] bg-cover"
      // style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="container relative">
        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="left_box w-[50%]">
            <Heading
              headingTag="h2"
              content={[
                { text: "Custom ", color: "text-white", className: "" },
                { text: "App & Web", color: "", className: "highlight-text" },
                {
                  text: "Development in India & USA",
                  color: "text-white",
                  className: "block",
                },
              ]}
            />
          </div>

          <div className="right_box flex items-end gap-5 w-[50%] justify-end">
            <Image src={appWebIcon} alt="app web icon" />
            <Link
              href="/about-us"
              className="primary-btn inline-flex rounded-full !px-[40px] !py-[14px] text-[16px] font-[600] tracking-[0.8px] whitespace-nowrap text-black transition"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-[60px] mb-[60px] flex bg-[#299E6B]/14 p-[40px] backdrop-blur gap-[60px] rounded-[10px] counterSectionRightDesign">
          {[
            { value: "150+", label: "Project we have complete" },
            { value: "98%", label: "Customer satisfaction" },
            { value: "10", label: "Mins average answer time" },
            { value: "13+", label: "Years of experience in this field" },
          ].map((item, i) => (
            <div
              key={i}
              className="w-[25%] p-[10px] border-r border-[#00531D] last:border-r-0"
            >
              <h2>
                <Counter value={item.value} />
              </h2>
              <p className="mt-[12px] md:max-w-[180px]">{item.label}</p>
            </div>
          ))}
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-16 flex gap-[60px] items-center">
          {/* LEFT IMAGE */}
          <div className="cricleLeftSideOuter relative flex items-center justify-center max-w-[400px]">
            <span className="cricleLeftSide"></span>
            <Image
              src={appWebImage}
              alt="app web image"
              className="w-[367px]"
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="grid gap-[20px] md:grid-cols-2 flex-1 w-full">
            {features.map((item, i) => (
              <div
                key={i}
                className="border border-[#37BE78]/13 bg-[#37BE78]/17 backdrop-blur p-[40px] rounded-[10px]"
              >
                <div className="mb-[20px]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="w-[40px] h-[40px]"
                  />
                </div>

                <h5 className="mb-[20px]">{item.title}</h5>
                <p className="text-white mb-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= FEATURES DATA ================= */
const features = [
  {
    title: "Expertise and Innovation",
    desc: "We pride ourselves staying at the front of innovation, constantly pushing boundaries a redefining what is possible.",
    icon: icon1,
  },
  {
    title: "Transparent Process",
    desc: "Our transparent process is designed to demystify the journey from concept to delivery.",
    icon: icon2,
  },
  {
    title: "Client-Centric Approach",
    desc: "Our dedicated team takes the time to listen, & collaborate, ensuring that every interaction a step towards your success.",
    icon: icon3,
  },
  {
    title: "Cost-Effective",
    desc: "Our commitment to providing cost-effective solutions is ingrained in our mission.",
    icon: icon4,
  },
];

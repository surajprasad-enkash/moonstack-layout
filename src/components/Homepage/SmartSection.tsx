"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import StatCounter from "./StatCounter";
import Heading from "../Heading/Heading";
import { Button } from "@mui/material";
import Link from "next/link";
import CustomButton from "../CommanButton/CommanButton";

interface SmartSectionProps {
  title: string;
  highlight: string;
  description: string;
  buttonText?: string;
  stats?: { value: number; suffix?: string; label: string }[];
  backgroundImage?: string;
  buttonUrl?:string;
}

export default function SmartSection({
  title,
  highlight,
  description,
  buttonText,
  buttonUrl = '/about-us',
  stats = [],
  backgroundImage,
}: SmartSectionProps) {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Viewport Detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` } }
      ref={sectionRef}
      className="relative w-full overflow-hidden px-[20px] py-24 md:px-[80px] md:py-[80px] bg-[bottom center] bg-cover"
    >
      <div className="container mx-auto">
        {/* LEFT CONTENT */}
        <div className="row flex">
          <div className="left_box w-[50%]">
            <Heading
              headingTag="h2"
              className="font-36 font-[500]"
              content={[
                { text: `${title} `, color: "text-white block" },
                { text: highlight, className: "highlight-text" },
              ]}
            />
           {buttonUrl && <Link className="tracking-[0.8px] mt-[20px]  primary-btn text-black !px-[40px] !py-[10px] rounded-full font-[600]  transition inline-flex text-[16px] " href={buttonUrl}>{buttonText}</Link>}
          </div>

          <div className="right_box w-[50%]">
             <Heading
              headingTag="p"
              className=""
              content={[
                { text: `${description} `, color: "text-[#B3B3B3]" },
              ]}
            />
          </div>
          
        </div>

        {/* STATS */}
        <div className="mt-10 flex items-end justify-between md:mt-[60px]">
          {stats.map((item, index) => (
            <StatCounter
              key={index}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              play={visible}
              countBox={4}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

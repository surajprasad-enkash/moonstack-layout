"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Heading from "@/components/Heading/Heading";
import bgImage from "@/assets/about-us/AboutStepper/bgImage.svg";
import Image from "next/image";
const text =
  "As for the working principles of Moonstack, the latter is known for bringing ideas to life. We are a team of enthusiastic developers, designers, and strategists who work towards creating the best digital solutions.";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const wordAnimation: Variants = {
  hidden: {
    color: "#9ca3af",
  },
  show: {
    color: "#ffffff",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1], // ✅ FIX
    },
  },
};

const AboutStepper = () => {
  return (
    <section className="relative px-[20px] ">
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background"
          className="absolute top-[-200px] right-[0] left-[0] z-[1] h-[auto] w-[100%]"
        />
      )}
      <div className="container relative z-[2]">
        <Heading
          headingTag="p"
          className="!text-[26px] !font-[500] w-full py-4 text-left text-white"
          content="Let`s get to know each other"
        />

        <motion.h2
          className="!leading-[100%] !text-[50px] w-full py-4 text-left leading-relaxed"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {text.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordAnimation}
              className="mr-2 inline-block leading-normal"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
};

export default AboutStepper;

"use client";

import React from "react";
import { motion } from "framer-motion";
import Heading from "@/components/Heading/Heading";

const text =
  "As for the working principles of Moonstack, the latter is known for bringing ideas to life. We are a team of enthusiastic developers, designers, and strategists who work towards creating the best digital solutions . ";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const wordAnimation = {
  hidden: {
    color: "#9ca3af",
  },
  show: {
    color: "#ffffff",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const AboutStepper = () => {
  return (
    <section>
      <div className="container mx-auto">
        <Heading
          headingTag="p"
          className="font-24 w-2/3 py-4 text-left text-white"
          content="Let`s get to know each other"
        />
        <motion.h2
          className="w-2/3 py-4 text-left text-[32px] leading-relaxed"
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

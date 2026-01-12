"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

// Logos
import figma from "public/assets/figma.svg";
import React from "../pubpublic/assets/n.svg";
import node from "../pubpublic/assets/.svg";
import php from "../pubpublic/assets/svg";
import ios from "../pubpublic/assets/svg";
import adobe from "../pubpublic/assets/svg";
import flutter from "../pubpublic/assets/con.svg";
import swift from "../pubpublic/assets/n.svg";
import android from "../pubpublic/assets/con.svg";
import angular from "../pubpublic/assets/con.svg";
import aws from "../pubpublic/assets/svg";
import cakePhp from "../pubpublic/assets/icon.svg";
import css from "../pubpublic/assets/svg";
import docker from "../pubpublic/assets/on.svg";
import dotNet from "../pubpublic/assets/on.svg";
import framer from "../pubpublic/assets/on.svg";
import googleAnalytics from "../pubpublic/assets/alytics-icon.svg";
import html from "../pubpublic/assets/;
import illustrator from "../pubpublic/assets/tor.svg";
import java from "../pubpublic/assets/.svg";
import kubernets from "../pubpublic/assets/s-icon.svg";

import logo from "../pubpublic/assets/opment-images/moonstackIcon.svg";

import { motion } from "framer-motion";
import Heading from "@/components/Heading/Heading";

/* ---------------- TYPES ---------------- */

type MarqueeItem =
  | { type: "logo"; src: string; label: string }
  | { type: "text"; text: string };

/* ---------------- DATA ---------------- */

const marqueeItems: MarqueeItem[] = [
  { type: "logo", src: figma, label: "Accord" },

  { type: "logo", src: React, label: "Aligneur" },

  { type: "logo", src: node, label: "Backend Developer" },

  { type: "logo", src: php, label: "Crafty We Kabar" },

  { type: "logo", src: ios, label: "eNetworks" },

  { type: "logo", src: adobe, label: "EnKash" },

  { type: "logo", src: flutter, label: "Hydrocan" },

  { type: "logo", src: swift, label: "PickRight" },
  { type: "logo", src: android, label: "Accord" },

  { type: "logo", src: angular, label: "Aligneur" },

  { type: "logo", src: aws, label: "Backend Developer" },

  { type: "logo", src: cakePhp, label: "Crafty We Kabar" },

  { type: "logo", src: css, label: "eNetworks" },

  { type: "logo", src: docker, label: "EnKash" },

  { type: "logo", src: dotNet, label: "Hydrocan" },

  { type: "logo", src: googleAnalytics, label: "PickRight" },
  { type: "logo", src: html, label: "eNetworks" },

  { type: "logo", src: java, label: "EnKash" },

  { type: "logo", src: kubernets, label: "Hydrocan" },
  { type: "logo", src: framer, label: "EnKash" },

  { type: "logo", src: illustrator, label: "Hydrocan" },
];

/* ---------------- ROW COMPONENT ---------------- */

const MarqueeRow = ({ direction }: { direction: "left" | "right" }) => {
  return (
    <div className="relative py-20">
      <div className="techMarqueeLogo">
        {" "}
        <Image src={logo} alt={"logo"} height="115" width="155" />
      </div>

      <div className="m-auto w-1/2 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Heading
            headingTag="h2"
            className="font-semibold text-white"
            content={[
              { text: " We Use ", color: "text-white" },

              {
                text: "Technology to Build ",
                className: "highlight-text libreItalic",
              },
              { text: " What Matters", color: "text-white" },
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-2"
        >
          <Heading
            headingTag="p"
            className="text-primary-grey pt-6 pb-28 !font-[500]"
            content="We leverage cutting-edge tech stacks to craft seamless experiences."
          />
        </motion.div>
      </div>
      <Marquee autoFill direction={direction} speed={60} pauseOnHover>
        {marqueeItems.map((item, index) => (
          <div key={index} className="mr-3 pt-10">
            {item.type === "logo" ? (
              <div className="techMarqueeItem flex h-[82px] w-[82px] items-center justify-center">
                <Image src={item.src} alt={item.label} className="w-auto" />
              </div>
            ) : (
              <div className="flex min-h-[75px] items-center justify-center rounded-[8px] bg-white/20 px-8 text-sm font-semibold whitespace-nowrap text-white shadow-lg">
                {item.text}
              </div>
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

const TechMarqueeComponent = () => {
  return (
    <section className="space-y-4 overflow-x-hidden py-6">
      {/* Row 1 */}
      <MarqueeRow direction="left" />
    </section>
  );
};

export default TechMarqueeComponent;

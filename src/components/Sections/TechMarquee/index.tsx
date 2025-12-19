"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

// Logos
import figma from "../../../../public/assets/figma.svg";
import React from "../../../../public/assets/react-icon.svg";
import node from "../../../../public/assets/node-icon.svg";
import php from "../../../../public/assets/php-icon.svg";
import Mobile from "../../../../public/assets/mobile-green-icon.svg";
import ios from "../../../../public/assets/ios-icon.svg";
import adobe from "../../../../public/assets/adobe-xd.svg";
import flutter from "../../../../public/assets/flutter-icon.svg";
import swift from "../../../../public/assets/swift-icon.svg";
import logo from "../../../../public/assets/app-development-images/moonstackIcon.svg";

import { motion } from "framer-motion";
import Heading from "@/components/Heading/Heading";

/* ---------------- TYPES ---------------- */

type MarqueeItem =
  | { type: "logo"; src: any; label: string }
  | { type: "text"; text: string };

/* ---------------- DATA ---------------- */

const marqueeItems: MarqueeItem[] = [
  { type: "logo", src: figma, label: "Accord" },

  { type: "logo", src: React, label: "Aligneur" },

  { type: "logo", src: node, label: "Backend Developer" },

  { type: "logo", src: php, label: "Crafty We Kabar" },

  //   { type: "logo", src: Mobile, label: "DNWE" },

  { type: "logo", src: ios, label: "eNetworks" },

  { type: "logo", src: adobe, label: "EnKash" },

  { type: "logo", src: flutter, label: "Hydrocan" },

  { type: "logo", src: swift, label: "PickRight" },
];

/* ---------------- ROW COMPONENT ---------------- */

const MarqueeRow = ({ direction }: { direction: "left" | "right" }) => {
  return (
    <div className="relative py-20">
      <div className=" techMarqueeLogo">
        {" "}
        <Image src={logo} alt={"logo"} height="115" width="155" />
      </div>

      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Heading
            headingTag="h3"
            className="font-semibold text-white"
            content="We Use Technology to Build What Matters"
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
            className="text-primary-grey pb-8"
            content="We leverage cutting-edge tech stacks to craft seamless experiences."
          />
        </motion.div>
      </div>
      <Marquee autoFill direction={direction} speed={40} pauseOnHover>
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
    <section className="techMarqueeComponent space-y-4 overflow-x-hidden py-6">
      {/* Row 1 */}
      <MarqueeRow direction="left" />
    </section>
  );
};

export default TechMarqueeComponent;

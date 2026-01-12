"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

// Logos
import figma from "public/assets/figma.svg";
import React from "public/assets/react-icon.svg";
import node from "public/assets/node-icon.svg";
import php from "public/assets/php-icon.svg";
import Mobile from "public/assets/js-icon.svg";
import ios from "public/assets/ios-icon.svg";
import adobe from "public/assets/adobe-xd.svg";
import flutter from "public/assets/flutter-icon.svg";
import swift from "public/assets/swift-icon.svg";

/* ---------------- TYPES ---------------- */

type MarqueeItem =
  | { type: "logo"; src: any; label: string }
  | { type: "text"; text: string };

/* ---------------- DATA ---------------- */

const marqueeItems: MarqueeItem[] = [
  { type: "logo", src: figma, label: "Accord" },
  { type: "text", text: "UI" },
  { type: "text", text: "Ux" },
  { type: "text", text: "Designer" },

  { type: "logo", src: React, label: "Aligneur" },
  { type: "text", text: "Frontend Developer" },
  { type: "text", text: "React" },
  { type: "text", text: "Angular" },

  { type: "logo", src: node, label: "Backend Developer" },
  { type: "text", text: "Node" },

  { type: "logo", src: php, label: "Crafty We Kabar" },
  { type: "text", text: "Php" },
  { type: "text", text: "Wordpress" },

  { type: "logo", src: Mobile, label: "DNWE" },
  { type: "text", text: "Mobile Development" },
  { type: "text", text: "React Native" },

  { type: "logo", src: ios, label: "eNetworks" },
  { type: "text", text: "Android" },

  { type: "logo", src: adobe, label: "EnKash" },
  { type: "text", text: "Designing" },
  { type: "text", text: "Adobe" },

  { type: "logo", src: flutter, label: "Hydrocan" },
  { type: "text", text: "Flutter" },

  { type: "logo", src: swift, label: "PickRight" },
  { type: "text", text: "Swift" },
];

/* ---------------- ROW COMPONENT ---------------- */

const MarqueeRow = ({ direction }: { direction: "left" | "right" }) => {
  return (
    <Marquee autoFill direction={direction} speed={40} pauseOnHover>
      {marqueeItems.map((item, index) => (
        <div key={index} className="mr-3">
          {item.type === "logo" ? (
            <div className="flex h-[55px] items-center justify-center rounded-[8px] border border-white/30 bg-white/20 p-2 px-6 backdrop-blur-[30px]">
              <Image
                src={item.src}
                alt={item.label}
                className="h-[100%] w-[100%]"
              />
            </div>
          ) : (
            <div className="flex h-[55px] items-center justify-center rounded-[8px] bg-white/20 px-8 text-sm font-semibold whitespace-nowrap text-white shadow-lg">
              {item.text}
            </div>
          )}
        </div>
      ))}
    </Marquee>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

const MarqueeComponent = () => {
  return (
    <div className="marqueeComponent space-y-4 overflow-x-hidden py-6 ">
      {/* Row 1 */}
      <MarqueeRow direction="left" />

      {/* Row 2 (opposite) */}
      <MarqueeRow direction="right" />

      {/* Row 3 */}
      <MarqueeRow direction="left" />
    </div>
  );
};

export default MarqueeComponent;

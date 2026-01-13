import { StaticImageData } from "next/image";
import Member1 from "@/assets/members/member1.webp";
import Member2 from "../pub@/assets/ember2.webp";
import Member3 from "../pub@/assets/ember3.webp";
import Member4 from "../pub@/assets/ember4.webp";
import Member5 from "../pub@/assets/ember5.webp";
import Member6 from "../pub@/assets/ember6.webp";
import Member7 from "../pub@/assets/ember7.webp";
import Member8 from "../pub@/assets/ember8.webp";
import Member9 from "../pub@/assets/ember9.webp";
import Member10 from "../pub@/assets/ember10.webp";
import Member11 from "../pub@/assets/atin.webp";
import Member12 from "../pub@/assets/yush.webp";
import Member13 from "../pub@/assets/epender.webp";
import Member14 from "../pub@/assets/amparsad.webp";
import Member15 from "../pub@/assets/avinder.webp";
import Member16 from "../pub@/assets/achin.webp";
import Member17 from "../pub@/assets/hubham.webp";
import Member18 from "../pub@/assets/uraj.webp";
import Member19 from "../pub@/assets/ara.webp";

export type SlideItem =
  | {
      type: "image";
      image: StaticImageData | string;
      title: string;
    }
  | {
      type: "stat";
      count: string;
      label: string;
      subLabel: string;
    };

export const slides: SlideItem[] = [
  { type: "image", image: Member1, title: "Designer" },
  { type: "image", image: Member2, title: "Designer" },
  { type: "image", image: Member3, title: "Designer" },

  {
    type: "stat",
    count: "+55",
    label: "Developer",
    subLabel: "in Moonstack team",
  },

  { type: "image", image: Member4, title: "Designer" },
  { type: "image", image: Member5, title: "Designer" },
  {
    type: "stat",
    count: "You",
    label: "can join",
    subLabel: "our Moonstack team",
  },
  { type: "image", image: Member6, title: "Designer" },

  { type: "image", image: Member7, title: "Designer" },
  { type: "image", image: Member8, title: "Designer" },
  { type: "image", image: Member9, title: "Designer" },
  { type: "image", image: Member10, title: "Designer" },
  { type: "image", image: Member11, title: "Designer" },
  { type: "image", image: Member12, title: "Designer" },
  { type: "image", image: Member13, title: "Designer" },
  { type: "image", image: Member14, title: "Designer" },
  { type: "image", image: Member15, title: "Designer" },
  { type: "image", image: Member16, title: "Designer" },
  { type: "image", image: Member17, title: "Designer" },
  { type: "image", image: Member18, title: "Designer" },
  { type: "image", image: Member19, title: "Designer" },
];

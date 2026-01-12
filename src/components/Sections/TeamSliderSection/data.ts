import { StaticImageData } from "next/image";
import Member1 from "public/assets/members/member1.webp";
import Member2 from "../pubpublic/assets/ember2.webp";
import Member3 from "../pubpublic/assets/ember3.webp";
import Member4 from "../pubpublic/assets/ember4.webp";
import Member5 from "../pubpublic/assets/ember5.webp";
import Member6 from "../pubpublic/assets/ember6.webp";
import Member7 from "../pubpublic/assets/ember7.webp";
import Member8 from "../pubpublic/assets/ember8.webp";
import Member9 from "../pubpublic/assets/ember9.webp";
import Member10 from "../pubpublic/assets/ember10.webp";
import Member11 from "../pubpublic/assets/atin.webp";
import Member12 from "../pubpublic/assets/yush.webp";
import Member13 from "../pubpublic/assets/epender.webp";
import Member14 from "../pubpublic/assets/amparsad.webp";
import Member15 from "../pubpublic/assets/avinder.webp";
import Member16 from "../pubpublic/assets/achin.webp";
import Member17 from "../pubpublic/assets/hubham.webp";
import Member18 from "../pubpublic/assets/uraj.webp";
import Member19 from "../pubpublic/assets/ara.webp";

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

import { StaticImageData } from "next/image"
import Member1 from "@/assets/members/member1.webp"
import Member2 from "@/assets/members/member2.webp"
import Member3 from "@/assets/members/member3.webp"
import Member4 from "@/assets/members/member4.webp"
import Member5 from "@/assets/members/member5.webp"
import Member6 from "@/assets/members/member6.webp"
import Member7 from "@/assets/members/member7.webp"
import Member8 from "@/assets/members/member8.webp"
import Member9 from "@/assets/members/member9.webp"
import Member10 from "@/assets/members/member10.webp"
import Member11 from "@/assets/members/ravinder.webp"
import Member12 from "@/assets/members/Jatin.webp"
// import Member13 from "@/assets/members/ramparsad.webp";
// import Member14 from "@/assets/members/depender.webp"
// import Member15 from "@/assets/members/Jatin.webp"
import Member16 from "@/assets/members/sachin.webp"
import Member17 from "@/assets/members/suraj.webp"
import Member18 from "@/assets/members/shubham.webp"
import Member19 from "@/assets/members/tara.webp"

import TeamBottomInfoImg1 from "@/assets/app-development-images/team-bottom-cards-1.svg"
import TeamBottomInfoImg2 from "@/assets/app-development-images/team-bottom-cards-2.svg"
import TeamBottomInfoImg3 from "@/assets/app-development-images/team-bottom-cards-3.svg"
import TeamBottomInfoImg4 from "@/assets/app-development-images/team-bottom-cards-4.svg"

export type SlideItem =
  | {
    type: "image"
    image: StaticImageData | string
    title: string
  }
  | {
    type: "stat"
    count: string
    label: string
    subLabel: string
  }

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
  // { type: "image", image: Member13, title: "Designer" },
  // { type: "image", image: Member14, title: "Designer" },
  // { type: "image", image: Member15, title: "Designer" },
  { type: "image", image: Member16, title: "Designer" },
  { type: "image", image: Member17, title: "Designer" },
  { type: "image", image: Member18, title: "Designer" },
  { type: "image", image: Member19, title: "Designer" },
]

export const features = [
  {
    text: "Daily reports & time-tracking",
    bgImage: TeamBottomInfoImg1,
  },
  {
    text: "Transparent process where you get access to working files",
    bgImage: TeamBottomInfoImg2,
  },
  {
    text: "Meetings & regular feedback gathering",
    bgImage: TeamBottomInfoImg3,
  },
  {
    text: "Close cooperation where you get flexibility and comfort",
    bgImage: TeamBottomInfoImg4,
  },
]

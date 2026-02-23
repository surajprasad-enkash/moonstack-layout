import tastimonial1 from "@/assets/newHomePage/awards/tastimonial/tastimonial1.svg"
import tastimonial2 from "@/assets/newHomePage/awards/tastimonial/tastimonial2.svg"
import tastimonial3 from "@/assets/newHomePage/awards/tastimonial/tastimonial3.svg"
import tastimonial4 from "@/assets/newHomePage/awards/tastimonial/tastimonial4.svg"
import clutchLogo from "@/assets/newHomePage/awards/tastimonial/clutchLogo.svg"
import clutchLogoBlack from "@/assets/newHomePage/awards/tastimonial/clutchBloack.svg"

import clutchBadges from "@/assets/newHomePage/TrustBadges/clutch.webp"
import upwork from "@/assets/newHomePage/TrustBadges/upwork.webp"
import dribbble from "@/assets/newHomePage/TrustBadges/dribble.webp"
import behance from "@/assets/newHomePage/TrustBadges/behance.webp"

import admissify from "@/assets/clientsImages/admissifyceo.webp"
import coralogix from "@/assets/clientsImages/coralogixceo.webp"
import authbridge from "@/assets/clientsImages/authbridge.webp"
import brainmates from "@/assets/clientsImages/brainmates.webp"

export const tabs = [
  {
    id: "admissify",
    company: "admissify",
    logo: tastimonial1.src,
    quote:
      "Moonstack’s communication was clear and proactive throughout the project. The team was easy to work with and delivered exactly what we needed.",
    author: "Ishant Aggarwal",
    role: "Founder & CEO",
    avatar: admissify.src,
    rating: 5.0,
    rightBg: "#D0F601",
    clutchLogo: clutchLogoBlack.src,
    color: "#000",
  },
  {
    id: "tixbase",
    company: "Tixbase",
    logo: tastimonial2.src,
    quote:
      "The Moonstack team moved fast without compromising on quality. From concept to delivery, everything was handled efficiently.",
    author: "Ariel Assaraf",
    role: "Co-Founder & CEO",
    avatar: coralogix.src,
    rating: 5.0,
    rightBg: "linear-gradient(300.37deg, #D7CAFE 20.68%, #F8F9FF 67.91%)",
    clutchLogo: clutchLogoBlack.src,
    color: "#000",
  },
  {
    id: "brainmates",
    company: "brainmates",
    logo: tastimonial3.src,
    quote:
      "Moonstack perfectly balanced design and development. The final product looks great and performs even better.",
    author: "Adrienne Tan",
    role: "Co-Founder and Chief Executive Officer",
    avatar: brainmates.src,
    rating: 5.0,
    rightBg:
      "linear-gradient(79.44deg, rgb(31, 96, 83) 17.64%, rgb(41, 170, 151) 40%)",
    color: "#fff",
    clutchLogo: clutchLogo.src,
  },
  {
    id: "enzyme",
    company: "enzyme",
    logo: tastimonial4.src,
    quote:
      "We see Moonstack as a reliable long-term partner. Their expertise and commitment made the entire process smooth and successful.",
    author: "Ajay Trehan",
    role: "Founder and CEO",
    avatar: authbridge.src,
    rating: 5.0,
    rightBg: "linear-gradient(268.33deg, #BBB0FE 16.45%, #DED8FF 67.27%)",
    color: "#000",
    clutchLogo: clutchLogoBlack.src,
  },
]

export const badges = [
  {
    icon: clutchBadges.src,
    subtitle: "89+ Reviews on Clutch",
  },
  {
    icon: upwork.src,
    subtitle: "Top Rated Plus Agency on Upwork",
  },
  {
    icon: dribbble.src,
    subtitle: "Top 50 Trending team on Dribbble",
  },
  {
    icon: behance.src,
    subtitle: "Projects are Featured on Behance platform",
  },
]

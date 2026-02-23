import industryicon1 from "@/assets/industries/icon/dbd2_i1.webp"
import industryicon2 from "@/assets/industries/icon/b_i2.webp"
import industryicon3 from "@/assets/industries/icon/b_i4.webp"
import industryicon4 from "@/assets/industries/icon/_i5.webp"

import revenue1 from "@/assets/revenue.svg"
import neeta from "@/assets/about-us/neetaMan2.webp"
import dheeraj from "@/assets/about-us/dheerajSirHoldingMIc.webp"
import gallary from "@/assets/about-us/gallary.webp"
import team from "@/assets/about-us/teams2.webp"

export const featuresData = [
  {
    imgSrc: revenue1.src,
    title: "115+",
    description: "Project we have complete",
  },
  {
    imgSrc: revenue1.src,
    title: "98%",
    description: "Project success rate",
  },
  {
    imgSrc: revenue1.src,
    title: "10 mins",
    description: "Avg reply time",
  },
  {
    imgSrc: revenue1.src,
    title: "13 years",
    description: "Experience",
  },
]

export const timelineData = [
  {
    title: "2016 - The Beginning",
    description:
      "Onboard is designed to make hiring easier, faster, and more transparent for everyone.",
    day: "SAT",
    date: "24",
    image: gallary.src,
  },
  {
    title: "2017 - Expansion",
    description:
      "Onboard introduced new features and improved filtering options.",
    day: "SAT",
    date: "24",
    image: gallary.src,
  },
  {
    title: "2018 - Growth",
    description:
      "Our platform grew rapidly, enabling more freelancers and companies to work together.",
    day: "SAT",
    date: "24",
    image: gallary.src,
  },
  {
    title: "2020 - Innovation",
    description:
      "We launched AI-powered intelligent matching and advanced hiring tools.",
    day: "SAT",
    date: "24",
    image: gallary.src,
  },
]

export const steps = [
  {
    number: 1,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
  {
    number: 2,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
  {
    number: 3,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
  {
    number: 4,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
  {
    number: 5,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
  {
    number: 6,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
  {
    number: 7,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
  {
    number: 8,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
]

export type ValueCard = {
  title?: string
  description?: string
  image?: string
  icon?: string
  ctaText?: string
  className?: string
}

export const valuesData: ValueCard[] = [
  {
    image: neeta.src,
    className: "",
  },
  {
    title: "Innovative Solutions",
    description:
      "Our team is always on the lookout for the latest technologies and methodologies to provide clients with the freshest solutions we can think of. Whether it’s a new mobile application for a company or a complicated cloud project, we will not stop at what is currently possible.",
    className: "aboutValueSectionBoxBg1 text-black",
  },
  { image: dheeraj.src },
  {
    title: "Expert Team",
    description:
      "Our team consists of experienced administrators, engineers, designers, and developers across diverse technologies. We combine deep web development expertise with passion for every project, valuing collaboration to create outstanding products.",
    className: "aboutValueSectionBoxBg2 text-white",
  },
  {
    image: team.src,
    ctaText: "Send your CV to join",
    className: "relative",
  },
  {
    title: "Proven Track Record",
    description:
      "With years of experience and proven accomplishments, Moonstack is a reliable partner across industries. We deliver high-quality solutions and take pride in building strong, lasting relationships with our clients.",
    className: "aboutValueSectionBoxBg2 text-white",
  },
]

export const aboutDnaData = {
  title: {
    before: "What is",
    highlight: "Imprinted",
    after: "in our DNA",
    circled: "",
  },
  mission: {
    label: "Mission",
    text: "To help businesses worldwide turn ideas into impactful digital products through innovation-driven design, robust engineering, and performance-focused technology.",
  },
  vision: {
    label: "Vision",
    text: "To shape the future of digital experiences by building scalable, intelligent, and human-centric solutions for the world’s most forward-thinking companies.",
  },
}

export const aboutLocationData = {
  heading: [
    { text: "Let`s Create ", color: "text-white" },
    {
      text: "‍Amazing ",
      className: "highlight-text libreItalic",
    },
    {
      text: "‍Digital Experiences Together",
      color: "text-white",
    },
  ],
  buttonText: "Schedule a call",
  buttonLink: "/contact-us",
}

export const aboutIndustryExperienceData = {
  heading: [
    { text: "We have ", color: "text-white" },
    { text: "Extensive ", className: "highlight-text libreItalic" },
    {
      text: "Industry Experiences",
      color: "text-white",
      className:
        "relative inline-block after:absolute after:-bottom-2 after:left-0 after:h-[6px] after:w-full after:bg-[url('/underline.svg')] after:bg-contain after:bg-no-repeat",
    },
  ],
  description:
    "Our product designers have completed projects in different niches. They know how to add business value and provide personalized design solutions for your digital product.",
  industries: [
    {
      title: "Web 3, Blockchain",
      icon: industryicon1.src,
      tags: ["Apps", "DeFi", "IPFS", "Exchanges", "Play2Earn"],
    },
    {
      title: "SaaS",
      icon: industryicon2.src,
      tags: ["CRM", "HR", "AI", "ERP", "Automation tools"],
    },
    {
      title: "Healthcare",
      icon: industryicon3.src,
      tags: ["Mental health", "Wellness", "Insurance", "Fitness"],
    },
    {
      title: "Fintech",
      icon: industryicon4.src,
      tags: ["Banking", "Exchanges", "Digital Payments"],
    },
  ],
}

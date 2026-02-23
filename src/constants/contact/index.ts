import award1 from "@/assets/newHomePage/awards/clutch.svg"
import award2 from "@/assets/newHomePage/awards/Top_Design_company_2025.webp"
import award3 from "@/assets/newHomePage/awards/Top_Digital_Design_Company_2025.webp"
import award4 from "@/assets/newHomePage/awards/clutch-badge-6.svg"
import award5 from "@/assets/newHomePage/awards/clutch-badge.svg"
import award6 from "@/assets/newHomePage/awards/dribbble.svg"
import award7 from "@/assets/newHomePage/awards/good-firms.svg"
import award8 from "@/assets/newHomePage/awards/upwork.svg"
import icon from "@/assets/newHomePage/awards/icon.svg"

import step1 from "@/assets/contact-us/NextStepsSection/step1Icon.webp"
import step2 from "@/assets/contact-us/NextStepsSection/step2Icon.webp"
import step3 from "@/assets/contact-us/NextStepsSection/step3Icon.webp"
import step4 from "@/assets/contact-us/NextStepsSection/step4Icon.webp"
import stepdes from "@/assets/contact-us/NextStepsSection/process-desktop-line.svg"
import step4Tab from "@/assets/contact-us/NextStepsSection/process-line-tablet.svg"

import userImage from "@/assets/clientsImages/manshi.webp"

export interface IAccordionItem {
  answer: string
  question: string
}

export const accordionData: IAccordionItem[] = [
  {
    question: "How soon will Moonstack respond after I submit the form?",
    answer:
      "We usually respond within 1–2 business hours. For urgent requests, we prioritize even faster.",
  },
  {
    question: "Do you offer a free consultation?",
    answer:
      "Yes, we offer a free initial consultation to understand your requirements and suggest the best approach.",
  },
  {
    question: "Can Moonstack help with an ongoing or stuck project?",
    answer:
      "Absolutely. We often step in to fix, improve, or scale existing websites and applications.",
  },
  {
    question: "Do you work with startups as well as enterprises?",
    answer:
      "Yes, we work with startups, SMEs, and large enterprises across multiple industries.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer:
      "Yes, we offer ongoing support, maintenance, and performance optimization as needed.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, Moonstack works with clients across India, the US, Europe, and other global markets.",
  },
]

export const contactTestimonial = {
  points: [
    "Moonstack showed exceptional commitment, adaptability, and technical expertise, delivering quality results through true partnership and proactive collaboration.",
  ],
  authorName: "Mansi Bhatia",
  authorRole: "Manager at Enkash",
  authorImage: userImage,
}

export const contactAwards = [
  {
    title: "89+ REVIEWS ON CLUTCH",
    subtitle: "5.0",
    icon: icon.src,
    image: award1,
  },
  {
    title: "TOP DESIGN COMPANY 2025",
    image: award2,
  },
  {
    title: "TOP DIGITAL DESIGN COMPANY 2025",
    image: award3,
  },
  {
    title: "GLOBAL 100 B2B UI/UX COMPANY",
    image: award4,
  },
  {
    title: "GLOBAL 100 B2B UI/UX COMPANY",
    image: award5,
  },
  {
    title: "GLOBAL 100 B2B UI/UX COMPANY",
    image: award6,
  },
  {
    title: "GLOBAL 100 B2B UI/UX COMPANY",
    image: award7,
  },
  {
    title: "GLOBAL 100 B2B UI/UX COMPANY",
    image: award8,
  },
]

export const nextSteps = [
  {
    step: "STEP 1",
    description: "Our team connects with you within 24 hours.",
    icon: step1.src,
  },
  {
    desktop: stepdes.src,
    tablet: step4Tab.src,
  },
  {
    step: "STEP 2",
    description:
      "We discuss your goals, clarify requirements, and understand project expectations.",
    icon: step2.src,
  },
  {
    desktop: stepdes.src,
    tablet: step4Tab.src,
  },
  {
    step: "STEP 3",
    description:
      "Our experts analyze the inputs and craft a clear, actionable project brief.",
    icon: step3.src,
  },
  {
    desktop: stepdes.src,
    tablet: step4Tab.src,
  },
  {
    step: "STEP 4",
    description:
      "We prepare detailed estimates and present a tailored proposal.",
    icon: step4.src,
  },
]

export default {}

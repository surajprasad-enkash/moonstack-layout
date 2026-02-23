import dynamic from "next/dynamic"
import Layout from "@/components/Layout"

//components
import HeroSection from "./heroSection"
const LocationSection = dynamic(() => import("./locationSection"))
const FAQSection = dynamic(() => import("@/components/Sections/FaqSection/FaqSection"))
const AwardsSection = dynamic(() => import("@/components/NewHomePage/AwardsSection"))
import { type AwardItem } from "@/components/NewHomePage/AwardsSection"
import { accordionData } from "@/constants/contact"
import award1 from "@/assets/newHomePage/awards/clutch.svg"
import award2 from "@/assets/newHomePage/awards/Top_Design_company_2025.png"
import award3 from "@/assets/newHomePage/awards/Top_Digital_Design_Company_2025.png"
import award4 from "@/assets/newHomePage/awards/clutch-badge-6.svg"
import award5 from "@/assets/newHomePage/awards/clutch-badge.svg"
import award6 from "@/assets/newHomePage/awards/dribbble.svg"
import award7 from "@/assets/newHomePage/awards/good-firms.svg"
import award8 from "@/assets/newHomePage/awards/upwork.svg"
import icon from "@/assets/newHomePage/awards/icon.svg"

const NextStepsSection = dynamic(() => import("@/components/ContactPage/NextStepsSection/NextStepsSection"))
const TestimonialCard = dynamic(() => import("@/components/Sections/ServicesSection/ReviewCardSection"))

import step1 from "@/assets/contact-us/NextStepsSection/step1Icon.webp"
import step2 from "@/assets/contact-us/NextStepsSection/step2Icon.webp"
import step3 from "@/assets/contact-us/NextStepsSection/step3Icon.webp"
import step4 from "@/assets/contact-us/NextStepsSection/step4Icon.webp"
import stepdes from "@/assets/contact-us/NextStepsSection/process-desktop-line.svg"
import step4Tab from "@/assets/contact-us/NextStepsSection/process-line-tablet.svg"

import userImage from "@/assets/clientsImages/manshi.jpg"
import { Metadata } from "next"
import { buildMetadata } from "@/helper/generateMetadata "

export const generateMetadata = (): Metadata => {
  return buildMetadata({
    title: "Contact Moonstack | Start Your Project Now",
    description:
      "Ready to discuss your app, website, or product idea? Share your project details and our Moonstack team will get back with a clear plan and timeline. Call Now!",
    canonical: "https://www.moonstack.com/contact-us",
  })
}

const points = [
  "Moonstack showed exceptional commitment, adaptability, and technical expertise, delivering quality results through true partnership and proactive collaboration.",
]
const awards: AwardItem[] = [
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
const contactUs = (): React.JSX.Element => {
  //
  return (
    <>
      <Layout>
        <HeroSection />

        <AwardsSection
          showLabel={false}
          heading={[
            { text: "Trusted and Recognized", className: "" },
            {
              text: " Across Top Industry",
              className: "libreItalic highlight-text font-[400]",
            },
            { text: " Review Platforms", className: "" },
          ]}
          awards={awards}
        />
        <NextStepsSection
          steps={[
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
          ]}
        />
        <TestimonialCard
          quote={points.join(" ")}
          highlightText="partnership and proactive"
          authorName="Mansi Bhatia"
          authorRole="Manager at Enkash"
          authorImage={userImage}
        />
        <LocationSection
          heading={[
            { text: "Let's Discuss", color: "text-white block" },
            {
              text: "‍Your Next Project",
              className: "text-white libreItalic highlight-text",
            },
          ]}
          buttonText="Schedule a call"
          buttonLink="/contact-us"
        />
        <FAQSection
          title="Frequently Asked"
          highlight="Questions."
          description="To decide means to choose a direction with clarity and confidence. It’s the process of thinking through different possibilities, understanding what truly matters, and then taking a stand. Every decision."
          faqs={accordionData}
        />
        {/* <ProjectCTA /> */}
        {/* <Space /> */}
      </Layout>
    </>
  )
}

export default contactUs

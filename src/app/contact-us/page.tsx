import dynamic from "next/dynamic"
import Layout from "@/components/Layout"

//components
import HeroSection from "./heroSection"
const LocationSection = dynamic(() => import("./locationSection"))
const FAQSection = dynamic(() => import("@/components/Sections/FaqSection/FaqSection"))
const AwardsSection = dynamic(() => import("@/components/NewHomePage/AwardsSection"))
import { type AwardItem } from "@/components/NewHomePage/AwardsSection"
import {
  accordionData,
  contactAwards,
  contactTestimonial,
  nextSteps,
} from "@/constants/contact"

const NextStepsSection = dynamic(() => import("@/components/ContactPage/NextStepsSection/NextStepsSection"))
const TestimonialCard = dynamic(() => import("@/components/Sections/ServicesSection/ReviewCardSection"))

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
          awards={contactAwards}
        />
        <NextStepsSection steps={nextSteps} />
        <TestimonialCard
          quote={contactTestimonial.points.join(" ")}
          highlightText="partnership and proactive"
          authorName={contactTestimonial.authorName}
          authorRole={contactTestimonial.authorRole}
          authorImage={contactTestimonial.authorImage}
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

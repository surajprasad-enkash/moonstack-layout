import dynamic from "next/dynamic"
import Layout from "@/components/Layout"
import HeroSection from "./heroSection"
const GetQuoteBanner = dynamic(() => import("@/components/GetQuoteBanner/GetQuoteBanner"))
const WhyJoinSection = dynamic(() => import("./whyJoin"))
const LatestOpportunity = dynamic(() => import("./latestOpp"))
const ProcessSection = dynamic(() => import("./process"))

//data
import { benefitsData, whyJoinData, processData, quoteBannerData } from "./data"

//utils
import bannerImg from "@/assets/android-app-bg.webp"
import { Metadata } from "next"
import { buildMetadata } from "@/helper/generateMetadata "

export const generateMetadata = (): Metadata => {
  return buildMetadata({
    title: " Check Careers at Moonstack | Join Our Innovative Team",
    description:
      "Discover career opportunities at Moonstack. Join our product-focused teams and grow your future building innovative digital products. Apply Now!",
    canonical: "https://www.moonstack.com/careeers",
  })
}

const carreers = (): React.JSX.Element => {
  //
  return (
    <>
      <Layout>
        <HeroSection />
        <WhyJoinSection
          heading={whyJoinData.heading}
          description={whyJoinData.description}
          benefits={benefitsData}
        />
        <ProcessSection
          heading={processData.heading}
          description={processData.description}
        />
        <LatestOpportunity
          heading="Latest Opportunity"
          description="Work doesn’t feel like work when you’re supported by a driven team, fuelled by limitless opportunities and empowered by remarkable benefits"
        />

        <GetQuoteBanner
          headingContent={quoteBannerData.heading}
          subHeadingContent={quoteBannerData.subHeading}
          buttonText="Connect with us"
          image={bannerImg}
        />
      </Layout>
    </>
  )
}

export default carreers

import dynamic from "next/dynamic"
import LottieData from "../../../public/lottie/services/banner.json"
import bgImagehero from "@/assets/industries/hero-bg.svg"
import Layout from "@/components/Layout"
import AppCategoryBanner from "@/components/Sections/ServicesSection/AppDevelopment/AppCategoryBanner"
import Space from "@/components/Space"

const ServicesSection = dynamic(() => import("@/components/NewHomePage/ServicesSection"))
const CaseStudyHighlight = dynamic(() => import("@/components/NewHomePage/CaseStudyHighlight"))
const TestimonialsTabs = dynamic(() => import("@/components/NewHomePage/TestimonialsTabs"))
const BlogInsightsSection = dynamic(() => import("@/components/NewHomePage/BlogInsightsSection"))
const ProjectCTA = dynamic(() => import("@/components/ProjectCTA/ProjectCTA"))
const TrustBadges = dynamic(() => import("@/components/NewHomePage/TrustBadges"))

import { tabs, badges } from "@/constants/services/mainPage"
import clutch from "@/assets/newHomePage/caseStudy/clutch.svg"

import screen1 from "@/assets/newHomePage/caseStudy/screenOne.webp"
import screen2 from "@/assets/newHomePage/caseStudy/nuwamaScreen1.webp"
import screen3 from "@/assets/newHomePage/caseStudy/nuwamaScreen2.webp"

import Pickrightscreen1 from "@/assets/newHomePage/caseStudy/pickrightScreen1.webp"
import Pickrightscreen2 from "@/assets/newHomePage/caseStudy/pickrightScreen2.webp"
import Pickrightscreen3 from "@/assets/newHomePage/caseStudy/pickrightScreen3.webp"
import amitnuvama from "@/assets/clientsImages/amitnuvama.jpg"
import pickright from "@/assets/clientsImages/numanbhatiyapikright.jpg"
export default function ApplicationPage() {
  return (
    <>
      <Layout>
        <AppCategoryBanner
          title={[
            {
              text: " Experienced designers for",
              color: "text-white",
            },
            {
              text: " AI products",
              color: "",
              className: "highlight-text",
            },
          ]}
          highlight={"AI products"}
          description={
            "We deliver design solutions that turn your complex AI product into intuitive, easy to use, transparent and trustworthy digital experience."
          }
          mediaType="lottie"
          lottieData={LottieData}
          buttonText="Talk to our experts"
          bgColor="text-white"
          bgImage={bgImagehero}
          logoSlider={true}
        />
        <ServicesSection
          showLabel={false}
          heading={[
            { text: "Digital Product Design & Development" },
            { text: "Services We Offer", className: "libreItalic" },
          ]}
        />
        <Space />
        <CaseStudyHighlight
          tag="CASE STUDY"
          showTag={false}
          badges={[{ label: "Web 3.0" }, { label: "$2.4M raised" }]}
          clutchLogo={clutch}
          title="Nuvama Wealth: Wealth Management Done Right"
          description="Moonstack helped improve our product design and development, leading to better user engagement and strong business results."
          testimonial={{
            name: "Amit Ahuja",
            role: "CEO",
            clientImage: amitnuvama,
            rating: 5,
            text: "Moonstack excels with meticulous attention to detail and creative problem-solving.",
          }}
          images={[screen2, screen1, screen3]}
        />
        <Space size={240} />
        <CaseStudyHighlight
          tag="CASE STUDY"
          showTag={false}
          badges={[{ label: "Web 3.0" }, { label: "$2.4M raised" }]}
          clutchLogo={clutch}
          title="Stock Trading Ideas - Advisory Services for Stock Market | Pickright"
          description="Professional, responsive, and reliable — Moonstack delivered exactly what they promised while maintaining excellent quality."
          testimonial={{
            name: "Naman Bhatia",
            role: "CEO",
            clientImage: pickright,
            rating: 5,
            text: "Moonstack excels with meticulous attention to detail and creative problem-solving.",
          }}
          images={[Pickrightscreen1, Pickrightscreen2, Pickrightscreen3]}
        />
        <Space />
        <TestimonialsTabs tabs={tabs} />
        <Space />
        <BlogInsightsSection />
        <Space size={50} />
        <ProjectCTA />
        <Space size={24} />
        <TrustBadges items={badges} />;
        <Space size={100} />
      </Layout>
    </>
  )
}

import dynamic from "next/dynamic"
import LottieData from "../../../public/lottie/services/banner.json"
import bgImagehero from "@/assets/industries/hero-bg.svg"
import Layout from "@/components/Layout"
import { ServiceSchema } from "@/components/StructuredData"
import AppCategoryBanner from "@/components/Sections/ServicesSection/AppDevelopment/AppCategoryBanner"
import Space from "@/components/Space"

import ServicesSection from "@/components/NewHomePage/ServicesSection"
import CaseStudyHighlight from "@/components/NewHomePage/CaseStudyHighlight"
import TestimonialsTabs from "@/components/NewHomePage/TestimonialsTabs"
import BlogInsightsSection from "@/components/NewHomePage/BlogInsightsSection"
import ProjectCTA from "@/components/ProjectCTA/ProjectCTA"
import TrustBadges from "@/components/NewHomePage/TrustBadges"

import { tabs, badges } from "@/constants/services/mainPage"
import clutch from "@/assets/newHomePage/caseStudy/clutch.svg"
import OgImageIcon from "@/assets/ogImage.svg"
import { Metadata } from "next"
import { buildMetadata } from "@/helper/generateMetadata "

import screen1 from "@/assets/newHomePage/caseStudy/screenOne.webp"
import screen2 from "@/assets/newHomePage/caseStudy/nuwamaScreen1.webp"
import screen3 from "@/assets/newHomePage/caseStudy/nuwamaScreen2.webp"

import Pickrightscreen1 from "@/assets/newHomePage/caseStudy/pickrightScreen1.webp"
import Pickrightscreen2 from "@/assets/newHomePage/caseStudy/pickrightScreen2.webp"
import Pickrightscreen3 from "@/assets/newHomePage/caseStudy/pickrightScreen3.webp"
import amitnuvama from "@/assets/clientsImages/amitnuvama.webp"
import pickright from "@/assets/clientsImages/numanbhatiyapikright.webp"
export const generateMetadata = (): Metadata => {
  return buildMetadata({
    title: "Our Services",
    description:
      "Transform your ideas into powerful digital products. Explore our expert services in App Development, Website Design, and UI/UX solutions tailored for growth.",
    canonical: "https://www.moonstack.com/services",
    ogImage: OgImageIcon.src,
  })
}
export default function ApplicationPage() {
  return (
    <>
      <ServiceSchema 
        name="Digital Product Design & Development" 
        description="Transform your ideas into powerful digital products. Explore our expert services in App Development, Website Design, and UI/UX solutions tailored for growth."
        providerName="Moonstack"
        url="https://moonstack.co/services"
      />
      <Layout>
        <AppCategoryBanner
          title={[
            {
              text: "Expert partners for your next",
              color: "text-white",
            },
            {
              text: " Digital Product",
              color: "",
              className: "highlight-text",
            },
          ]}
          highlight={"Digital Product"}
          description={
            "We deliver end-to-end design and development solutions that turn your complex ideas into intuitive, scalable, and impactful digital experiences."
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
            { text: "Digital Product " },
            {
              text: "Design & Development",
              className: "libreItalic font-[400] highlight-text",
            },
            {
              text: "Services We Offer",
              className: "",
            },
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

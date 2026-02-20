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

import clutch from "@/assets/newHomePage/caseStudy/clutch.svg"
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

import screen1 from "@/assets/newHomePage/caseStudy/screenOne.webp"
import screen2 from "@/assets/newHomePage/caseStudy/nuwamaScreen1.webp"
import screen3 from "@/assets/newHomePage/caseStudy/nuwamaScreen2.webp"

import Pickrightscreen1 from "@/assets/newHomePage/caseStudy/pickrightScreen1.webp"
import Pickrightscreen2 from "@/assets/newHomePage/caseStudy/pickrightScreen2.webp"
import Pickrightscreen3 from "@/assets/newHomePage/caseStudy/pickrightScreen3.webp"
import admissify from "@/assets/clientsImages/admissifyceo.jpg"
import coralogix from "@/assets/clientsImages/coralogixceo.jpg"
import authbridge from "@/assets/clientsImages/authbridge.jpg"
import brainmates from "@/assets/clientsImages/brainmates.jpg"
import amitnuvama from "@/assets/clientsImages/amitnuvama.jpg"
import pickright from "@/assets/clientsImages/numanbhatiyapikright.jpg"
const tabs = [
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

const badges = [
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
            text: "Arounda excels with meticulous attention to detail and creative problem-solving.",
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
            text: "Arounda excels with meticulous attention to detail and creative problem-solving.",
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

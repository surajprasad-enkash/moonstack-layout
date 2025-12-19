import Layout from "@/components/Layout";
import TechnologyComponent from "@/components/Homepage/TechnologyComponent";
import CaseStudies from "@/components/Homepage/CaseStudies";

import { accordionData } from "../constants/home";
import Meta from "@/components/MetaData";
import HeroSection from "@/components/Homepage/HeroSection";

import upwork from "../../public/assets/home/upwork.svg";
import google from "../../public/assets/home/google.svg";
import clutch from "../../public/assets/home/clutch.svg";
import FAQSection from "@/components/Sections/FaqSection/FaqSection";
import BackedByBestSlider from "@/components/BestSlider";
import BlogCardGrid2 from "@/components/BlogCardGrid/BlogCardGrid2";
import TechAssistanceSection from "@/components/Homepage/TechAssistanceSection";
import AppWebDevelopment from "@/components/Homepage/AppWebDevelopment/AppWebDevelopment";
import SmartSolutions from "@/components/Homepage/SmartSolutions/SmartSolutions";
import BackgroundLines from "@/components/Homepage/BackgroundLines";
import LovedByTeamsSlider from "@/components/LovedByTeamsSlider/LovedByTeamsSlider";
// import BlogCardGrid from "@/components/BlogCardGrid/BlogCardGrid";


export default function Home() {
  return (
    <>
      <Meta
        title=" Product Focused App & Web Development Company in India & USA"
        description="We're product-focused app and web development company in India. Moonstack’s senior engineers and designers help companies in building World class AI-powered full-stack development, UI/UX, SEO and ongoing support."
        keywords=" Website Development,Mobile app development service India, SEO, Next.js, React, Moonstack,AI solutions for businesses "
        canonical="https://www.moonstack.com/"
        ogImage="https://www.moonstack.com/og-image.jpg"
      />

      <Layout>
     
        <HeroSection
          reviews={[
            { platform: "Upwork", reviews: 94, icon: upwork },
            { platform: "Google", reviews: 30, icon: google },
            { platform: "Clutch", reviews: 10, icon: clutch },
          ]}
          buttonText="Get Started"
          buttonLink="/contact"
        />
        
        <AppWebDevelopment />
        <TechAssistanceSection />
        <SmartSolutions />

        <BlogCardGrid2 />
        <TechnologyComponent />
        <CaseStudies />
        <LovedByTeamsSlider />
        {/* <BackedByBestSlider /> */}
        <FAQSection
          title=""
          highlight="FAQs"
          description="Wondering whether Moonstack is the right fit for your business or not? Here are the most important client queries answered from our side."
          faqs={accordionData.map((item) => ({
            question: item.title,
            answer: item.desc,
          }))}
          classname=""
        />
        {/* <ContactUs /> */}
      </Layout>
    </>
  );
}

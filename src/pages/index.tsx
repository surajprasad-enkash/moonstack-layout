import Layout from "@/components/Layout";
import InsightsIdeas from "@/components/Homepage/InsightsIdeas";
import Marquee from "@/components/Homepage/Marquee";
import OurServices from "@/components/Homepage/OurSevices";
import ProvenProcess from "@/components/Homepage/ProvenProcess";
import TechnologyComponent from "@/components/Homepage/TechnologyComponent";
import ContactUs from "@/components/Homepage/ContactUs";
import CaseStudies from "@/components/Homepage/CaseStudies";

import { accordionData } from "../constants/home";
import Meta from "@/components/MetaData";
import HeroSection from "@/components/Homepage/HeroSection";

import upwork from "../../public/assets/home/upwork.svg";
import google from "../../public/assets/home/google.svg";
import clutch from "../../public/assets/home/clutch.svg";
import FAQSection from "@/components/Sections/FaqSection/FaqSection";
import SmartSection from "@/components/Homepage/SmartSection";

import counterBg from "../../public/assets/home/counter/counterBg.webp";
import BlogCardGrid from "@/components/BlogCardGrid/BlogCardGrid2";
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
       
       
        <SmartSection
          title="Why Moonstack Is the"
          highlight="Smart Choice for"
          description="Work with a team that brings your ideas to life on your terms. Moonstack is one of the most reliable development agencies in India."
          buttonText="About us"
          backgroundImage={counterBg.src}
          stats={[
            { value: 115, suffix: "+", label: "Project we have complete" },
            { value: 98, suffix: "%", label: "Project success rate" },
            { value: 10, suffix: "mins", label: "Avg reply time" },
            { value: 13, suffix: "year", label: "Experience" },
          ]}
        />
        {/* <HomepageBanner /> */}

        {/* <SolutionsComponent /> */}
        <OurServices />

        <CaseStudies />
        <TechnologyComponent />
        <ProvenProcess />
        {/* <InsightsIdeas /> */}
         <BlogCardGrid />
        <FAQSection
          title="Our FAQs "
          highlight=" Questions"
          description="Wondering whether Moonstack is the right fit for your business or not? Here are the most important client queries answered from our side."
          faqs={accordionData.map((item) => ({
            question: item.title,
            answer: item.desc,
          }))}
          classname=""
        />

        <ContactUs />
      </Layout>
    </>
  );
}

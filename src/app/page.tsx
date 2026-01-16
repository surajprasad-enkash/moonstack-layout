import Layout from "@/components/Layout"

import Meta from "@/components/MetaData"

import HeroSection from "@/components/NewHomePage/HeroBanner"
import Space from "@/components/Space"
import ResultsSection from "@/components/NewHomePage/ResultsSection"
import ImpactStatsSection from "@/components/NewHomePage/ImpactStatsSection"
import ServicesSection from "@/components/NewHomePage/ServicesSection"
import CaseStudyHighlight from "@/components/NewHomePage/CaseStudyHighlight"

import screen1 from "@/assets/newHomePage/caseStudy/screenOne.webp"
import screen2 from "@/assets/newHomePage/caseStudy/nuwamaScreen1.webp"
import screen3 from "@/assets/newHomePage/caseStudy/nuwamaScreen2.webp"

import Pickrightscreen1 from "@/assets/newHomePage/caseStudy/pickrightScreen1.webp"
import Pickrightscreen2 from "@/assets/newHomePage/caseStudy/pickrightScreen2.webp"
import Pickrightscreen3 from "@/assets/newHomePage/caseStudy/pickrightScreen3.webp"

import Enkashscreen1 from "@/assets/newHomePage/caseStudy/EnkashScreen1.webp"
import Enkashscreen2 from "@/assets/newHomePage/caseStudy/EnkashScreen2.webp"
import Enkashscreen3 from "@/assets/newHomePage/caseStudy/EnkashScreen3.webp"

import clientImage from "@/assets/newHomePage/caseStudy/clientimage.png"
import clutch from "@/assets/newHomePage/caseStudy/clutch.svg"
import AboutHeroSection from "@/components/NewHomePage/AboutHeroSection"

import person1 from "@/assets/newHomePage/about/team/about.png"
import person2 from "@/assets/newHomePage/about/team/team2.png"
import person3 from "@/assets/newHomePage/about/team/team3.png"
import person4 from "@/assets/newHomePage/about/team/team4.png"
import person5 from "@/assets/newHomePage/about/team/team5.png"
import AwardsSection, {
  AwardItem,
} from "@/components/NewHomePage/AwardsSection"

import award1 from "@/assets/newHomePage/awards/clutch.svg"
import award2 from "@/assets/newHomePage/awards/Top_Design_company_2025.png"
import award3 from "@/assets/newHomePage/awards/Top_Digital_Design_Company_2025.png"
import award4 from "@/assets/newHomePage/awards/clutch-badge-6.svg"
import award5 from "@/assets/newHomePage/awards/clutch-badge.svg"
import award6 from "@/assets/newHomePage/awards/dribbble.svg"
import award7 from "@/assets/newHomePage/awards/good-firms.svg"
import award8 from "@/assets/newHomePage/awards/upwork.svg"
import icon from "@/assets/newHomePage/awards/icon.svg"
import TestimonialsTabs from "@/components/NewHomePage/TestimonialsTabs"

import tastimonial1 from "@/assets/newHomePage/awards/tastimonial/tastimonial1.avif"
import tastimonial2 from "@/assets/newHomePage/awards/tastimonial/tastimonial2.svg"
import tastimonial3 from "@/assets/newHomePage/awards/tastimonial/tastimonial3.svg"
import tastimonial4 from "@/assets/newHomePage/awards/tastimonial/tastimonial4.svg"

import clientLogo from "@/assets/newHomePage/awards/tastimonial/client_logo.png"
import clutchLogo from "@/assets/newHomePage/awards/tastimonial/clutchLogo.svg"
import clutchLogoBlack from "@/assets/newHomePage/awards/tastimonial/clutchBloack.svg"
import ProjectCTA from "@/components/ProjectCTA/ProjectCTA"
import TrustBadges from "@/components/NewHomePage/TrustBadges"

import clutchBadges from "@/assets/newHomePage/TrustBadges/clutch.avif"
import upwork from "@/assets/newHomePage/TrustBadges/upwork.avif"
import dribbble from "@/assets/newHomePage/TrustBadges/dribble.avif"
import behance from "@/assets/newHomePage/TrustBadges/behance.avif"
import BlogInsightsSection from "@/components/NewHomePage/BlogInsightsSection"

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

const tabs = [
  {
    id: "mojo",
    company: "MojoCX",
    logo: tastimonial1.src,
    quote:
      "I was impressed with the high levels of detail and polish for all the features.",
    author: "Jimmy Hosang",
    role: "Founder & CEO",
    avatar: clientLogo.src,
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
      "Their professionalism, dedication, responsiveness, and determination are commendable.",
    author: "John Smith",
    role: "CTO",
    avatar: clientLogo.src,
    rating: 5.0,
    rightBg: "linear-gradient(300.37deg, #D7CAFE 20.68%, #F8F9FF 67.91%)",
    clutchLogo: clutchLogoBlack.src,
    color: "#000",
  },
  {
    id: "myso",
    company: "myso",
    logo: tastimonial3.src,
    quote:
      "Their expertise and guidance were instrumental. They demonstrated their commitment to creating a product that resonated with our target audience, which led to improved user satisfaction",
    author: "John Smith",
    role: "CTO",
    avatar: clientLogo.src,
    rating: 5.0,
    rightBg: "linear-gradient(79.44deg, #3B1F60 17.64%, #5C29AA 40%)",
    color: "#fff",
    clutchLogo: clutchLogo.src,
  },
  {
    id: "enzyme",
    company: "enzyme",
    logo: tastimonial4.src,
    quote:
      "Working with Moonstack is really smooth in terms of communication and workflow",
    author: "John Smith",
    role: "CTO",
    avatar: clientLogo.src,
    rating: 5.0,
    rightBg: "linear-gradient(268.33deg, #BBB0FE 16.45%, #DED8FF 67.27%)",
    color: "#000",
    clutchLogo: clutchLogoBlack.src,
  },
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
        <HeroSection />
        <Space size={140} />
        <ResultsSection />
        <Space size={240} />
        <ImpactStatsSection />
        <Space size={160} />
        <ServicesSection />
        <Space size={140} />
        <CaseStudyHighlight
          tag="CASE STUDY"
          showTag={true}
          badges={[{ label: "Web 3.0" }, { label: "$2.4M raised" }]}
          clutchLogo={clutch}
          title="EnKash: Best Expense Management & Payment Solutions for Businesses."
          description="Unlock growth with the best payments and spend management platform with products across corporate cards, vouchers, loyalty and more"
          testimonial={{
            name: "Artemine Sarden",
            role: "Founder, MYSO Finance",
            clientImage: clientImage,
            rating: 5,
            text: "Arounda excels with meticulous attention to detail and creative problem-solving.",
          }}
          images={[Enkashscreen1, Enkashscreen2, Enkashscreen3]}
        />
        <Space size={240} />
        <CaseStudyHighlight
          tag="CASE STUDY"
          showTag={false}
          badges={[{ label: "Web 3.0" }, { label: "$2.4M raised" }]}
          clutchLogo={clutch}
          title="Nuvama Wealth: Wealth Management Done Right"
          description="Shaping the future of your financial journey"
          testimonial={{
            name: "Artemine Sarden",
            role: "Founder, MYSO Finance",
            clientImage: clientImage,
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
          description="Explore top-notch trading ideas with Pickrights advisory services for the stock market. Make confident investment decisions based on ideas."
          testimonial={{
            name: "Artemine Sarden",
            role: "Founder, MYSO Finance",
            clientImage: clientImage,
            rating: 5,
            text: "Arounda excels with meticulous attention to detail and creative problem-solving.",
          }}
          images={[Pickrightscreen1, Pickrightscreen2, Pickrightscreen3]}
        />
        <Space size={150} />
        <AboutHeroSection
          teamMembers={[
            { image: person1 },
            { image: person2 },
            { image: person3 },
            { image: person4 },
            { image: person5 },
          ]}
        />
        <Space size={160} />
        <AwardsSection
          label="Awards & Achievements"
          heading={[
            { text: "While the growth " },
            {
              text: "of our clients ",
              className: "libreItalic highlight-text font-[400]",
            },
            { text: "is what " },
            {
              text: "matters ",
              className: "libreItalic highlight-text font-[400]",
            },
            { text: "most, it’s nice to get awards" },
          ]}
          awards={awards}
        />
        <Space size={160} />
        <TestimonialsTabs tabs={tabs} />
        <Space size={160} />
        <BlogInsightsSection />
        <Space size={50} />
        <ProjectCTA
          title="Ready to scale"
          subtitle="your business?"
          description="Book a free consultation to get clarity, direction, and expert advice you can implement right away."
          fontSize="!text-[80px]"
          marginBottom="mb-0"
          whiteBoxClass=""
        />
        <Space size={24} />
        <TrustBadges items={badges} />;
        <Space size={100} />
      </Layout>
    </>
  )
}

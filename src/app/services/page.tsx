import LottieData from "../../../public/lottie/services/banner.json";
import bgImagehero from "public/assets/industries/ai/hero-bg.svg";
import Layout from "@/components/Layout";
import AppCategoryBanner from "@/components/Sections/ServicesSection/AppDevelopment/AppCategoryBanner";
import ServicesSection from "@/components/NewHomePage/ServicesSection";
import Space from "@/components/Space";
import CaseStudyHighlight from "@/components/NewHomePage/CaseStudyHighlight";
import screen1 from "public/assets/newHomePage/caseStudy/screen1.avif";
import screen2 from "public/assets/newHomePage/caseStudy/screen2.avif";
import screen3 from "public/assets/newHomePage/caseStudy/screen3.avif";
import clientImage from "public/assets/newHomePage/caseStudy/clientimage.png";
import clutch from "public/assets/newHomePage/caseStudy/clutch.svg";
import TestimonialsTabs from "@/components/NewHomePage/TestimonialsTabs";

import tastimonial1 from "public/assets/newHomePage/awards/tastimonial/tastimonial1.avif";
import tastimonial2 from "public/assets/newHomePage/awards/tastimonial/tastimonial2.svg";
import tastimonial3 from "public/assets/newHomePage/awards/tastimonial/tastimonial3.svg";
import tastimonial4 from "public/assets/newHomePage/awards/tastimonial/tastimonial4.svg";

import clientLogo from "public/assets/newHomePage/awards/tastimonial/client_logo.png";
import clutchLogo from "public/assets/newHomePage/awards/tastimonial/clutchLogo.svg";
import clutchLogoBlack from "public/assets/newHomePage/awards/tastimonial/clutchBloack.svg";
import BlogInsightsSection from "@/components/NewHomePage/BlogInsightsSection";
import ProjectCTA from "@/components/ProjectCTA/ProjectCTA";
import TrustBadges from "@/components/NewHomePage/TrustBadges";

import clutchBadges from "public/assets/newHomePage/TrustBadges/clutch.avif";
import upwork from "public/assets/newHomePage/TrustBadges/upwork.avif";
import dribbble from "public/assets/newHomePage/TrustBadges/dribble.avif";
import behance from "public/assets/newHomePage/TrustBadges/behance.avif";
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
];

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
];
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
          showTag={true}
          badges={[{ label: "Web 3.0" }, { label: "$2.4M raised" }]}
          clutchLogo={clutch}
          title="MYSO Finance raised $2.4M and reached 85% user engagement with our design"
          description="Arounda excels with meticulous attention to detail, creative problem-solving, and clear communication. Their innovative solutions significantly enhanced usability and engagement."
          testimonial={{
            name: "Artemine Sarden",
            role: "Founder, MYSO Finance",
            clientImage: clientImage,
            rating: 5,
            text: "Arounda excels with meticulous attention to detail and creative problem-solving.",
          }}
          images={[screen1, screen2, screen3]}
        />
        <Space size={240} />
        <CaseStudyHighlight
          tag="CASE STUDY"
          showTag={false}
          badges={[{ label: "Web 3.0" }, { label: "$2.4M raised" }]}
          clutchLogo={clutch}
          title="MYSO Finance raised $2.4M and reached 85% user engagement with our design"
          description="Arounda excels with meticulous attention to detail, creative problem-solving, and clear communication. Their innovative solutions significantly enhanced usability and engagement."
          testimonial={{
            name: "Artemine Sarden",
            role: "Founder, MYSO Finance",
            clientImage: clientImage,
            rating: 5,
            text: "Arounda excels with meticulous attention to detail and creative problem-solving.",
          }}
          images={[screen1, screen2, screen3]}
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
  );
}

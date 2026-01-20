import Layout from "@/components/Layout"

/* ===================== CONSTANTS ===================== */
import { pagesData, pagesKeys, TPageKeys } from "@/constants/services"

/* ===================== SECTIONS ===================== */
import AppCategoryBanner from "@/components/Sections/ServicesSection/AppDevelopment/AppCategoryBanner"
import FeatureSection from "@/components/Sections/ServicesSection/FeatureSection"
import OutcomeBanner from "@/components/Sections/ServicesSection/OutcomeBanner"
import ImpactSection from "@/components/Sections/ServicesSection/ImpactSection"
import AndroidCaseStudySection from "@/components/Sections/ServicesSection/AndroidCaseStudySection"
import TechMarqueeComponent from "@/components/Sections/TechMarquee"
import QualitySection from "@/components/Sections/QualitySection"
import ProcessStages from "@/components/Sections/ServicesSection/AgencyWorkFlowSection"
import TestimonialsSection from "@/components/Industries/TestimonialsSection"
import TeamSliderSection from "@/components/Sections/TeamSliderSection/SliderSection"
import FAQSection from "@/components/Sections/FaqSection/FaqSection"
import ProjectCTA from "@/components/ProjectCTA/ProjectCTA"
import TestimonialCard from "@/components/Sections/ServicesSection/ReviewCardSection"
import NewBanner from "@/components/Sections/NewBanner"
import AwardsSection, {
  AwardItem,
} from "@/components/NewHomePage/AwardsSection"

/* ===================== UI ===================== */
import Space from "@/components/Space"

/* ===================== ASSETS ===================== */
import gradientBg from "@/assets/app-development-images/bannerGradientBg.svg"
import userImage from "@/assets/app-development-images/autorImg.webp"

import androidBgImg from "@/assets/app-development-images/hero-bg-1440.svg"
import projectCtaBgImg from "@/assets/app-development-images/af_match-bg-1440.svg"
import reviewBgImg from "@/assets/app-development-images/review-under-hero-bg-1440.svg"
import bccKristenCheng from "@/assets/industries/ai/icon/bcc_kristen-cheng.avif"
import bndimage1 from "@/assets/industries/ai/icon/bndImage1.webp"
import bndicon1 from "@/assets/industries/ai/icon/bndicon1.webp"
/* ===================== AWARDS ===================== */
import award1 from "@/assets/newHomePage/awards/clutch.svg"
import award2 from "@/assets/newHomePage/awards/Top_Design_company_2025.png"
import award3 from "@/assets/newHomePage/awards/Top_Digital_Design_Company_2025.png"
import award4 from "@/assets/newHomePage/awards/clutch-badge-6.svg"
import award5 from "@/assets/newHomePage/awards/clutch-badge.svg"
import award6 from "@/assets/newHomePage/awards/dribbble.svg"
import award7 from "@/assets/newHomePage/awards/good-firms.svg"
import award8 from "@/assets/newHomePage/awards/upwork.svg"
import icon from "@/assets/newHomePage/awards/icon.svg"

import type { Metadata } from "next"
import BusinessNeedsDesignSection from "@/components/Industries/BusinessNeedsDesignSection"
import CloudTimeline from "@/components/Sections/CloudServices/CloudTimeline/CloudTimeline"

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = pagesData[pagesKeys[params.slug as TPageKeys] as TPageKeys]

  if (!page?.seo) {
    return {
      title: "Services | Moonstack",
      description: "Moonstack services",
    }
  }

  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
    alternates: {
      canonical: page.seo.canonical,
    },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url: page.seo.canonical,
      siteName: "Moonstack",
      type: "website",
      images: page.seo.ogImage ? [{ url: page.seo.ogImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seo.title,
      description: page.seo.description,
      images: page.seo.ogImage ? [page.seo.ogImage] : [],
    },
  }
}

/* ===================== DATA ===================== */
const awards: AwardItem[] = [
  {
    title: "89+ REVIEWS ON CLUTCH",
    subtitle: "5.0",
    icon: icon.src,
    image: award1,
  },
  { title: "TOP DESIGN COMPANY 2025", image: award2 },
  { title: "TOP DIGITAL DESIGN COMPANY 2025", image: award3 },
  { title: "GLOBAL 100 B2B UI/UX COMPANY", image: award4 },
  { title: "GLOBAL 100 B2B UI/UX COMPANY", image: award5 },
  { title: "GLOBAL 100 B2B UI/UX COMPANY", image: award6 },
  { title: "GLOBAL 100 B2B UI/UX COMPANY", image: award7 },
  { title: "GLOBAL 100 B2B UI/UX COMPANY", image: award8 },
]

interface PageProps {
  params: { slug: string }
}

/* ===================== PAGE ===================== */
export default function ApplicationPage({ params }: PageProps) {
  const slug = params.slug

  const page = pagesData[pagesKeys[slug as TPageKeys] as TPageKeys]

  if (!page) {
    return <p className="p-10 text-center">Page not found</p>
  }

  return (
    <>
      <Layout>
        <AppCategoryBanner
          title={page.hero.title}
          description={page.hero.description}
          mediaType="lottie"
          lottieData={page.hero.lottieData}
          buttonText="Talk to our experts"
          bgColor="bg-black"
          bgImage={androidBgImg}
          breadcrumbs={page.hero.breadcrumbs}
        />

        <Space />

        <TestimonialCard
          quote={page.points}
          highlightText={page.highlightText}
          authorName="Aetienne Sardon"
          authorRole="CEO"
          authorImage={userImage}
          bgImage={reviewBgImg}
        />

        <Space size={160} />
        {page.leftCardData && (
          <BusinessNeedsDesignSection leftCards={page.leftCardData} />
        )}

        <Space size={160} />

        <FeatureSection
          heading={page.solutions.headingContent}
          subHeadingText={page.solutions.subHeadingText}
          features={page.featuresData}
        />
        <OutcomeBanner
          heading={[
            { text: "Exploring AI, ", color: "text-white" },
            {
              text: "but Don’t Know Where to Start?",
              color: "text-white libreItalic font-[400]",
            },
          ]}
          checklist={[
            "Generative AI & LLM Integration",
            "Intelligent Business Process Automation",
            "Predictive Analytics & Forecasting",
            "Custom Computer Vision & NLP Solutions",
          ]}
          bgImage={gradientBg}
          buttonText="Talk To Us"
        />
        {page?.processSteps && (
          <ProcessStages
            heading={page.processSteps.headingText}
            description={page.processSteps.subHeadingText}
          />
        )}

        <Space size={160} />

        {page.impactSection && (
          <ImpactSection
            heading={page.impactSection.heading}
            description={page.impactSection.description}
            cards={page.impactSection.cards}
          />
        )}

        {/* <AndroidCaseStudySection
          title={[
            { text: "Our mobile app design ", color: "text-white" },
            {
              text: "works prove themselves",
              color: "text-white libreItalic font-[400] highlight-text",
            },
          ]}
          description="We've helped many startups and companies design high-quality mobile applications."
        /> */}

        <NewBanner
          headingLines={[
            { text: "Want AI that Delivers " },
            { text: "Measurable ROI, Not Just Experiments?" },
          ]}
          imageSrc={page.mobDesignBanner}
          buttonText="Book a meeting"
        />

        <TechMarqueeComponent />
        {page.qualitySectionData && (
          <QualitySection features={page.qualitySectionData} />
        )}

        {page.CloudTimelineData && (
          <CloudTimeline
            title={page.CloudTimelineData.title}
            highlight={page.CloudTimelineData.highlight}
            subtitle={page.CloudTimelineData.subtitle}
            steps={page.CloudTimelineData.steps}
          />
        )}

        <TeamSliderSection
          headingLines={[
            { text: "Qualified mobile developer  ", color: "text-white" },
            {
              text: "who know their business",
              color: "text-white libreItalic font-[400] highlight-text",
            },
          ]}
          autoplaySpeed={2000}
        />
        <TestimonialsSection
          heading={[
            {
              text: "Expertise you’ll appreciate.",
              className: "highlight-text libreItalic",
            },
            { text: " Collaboration you’ll love.", color: "text-white" },
          ]}
          className="pt-[80px]"
          testimonials={[
            {
              quote:
                "Moonstack turned our complex vision into an intuitive experience. Their design-first approach significantly boosted our user retention from day one.",
              name: "Kristen Cheng",
              role: " CEO, USA",
              avatar: bccKristenCheng.src,
            },
            {
              quote:
                "They are more than developers—they are technical consultants. Moonstack solved our toughest backend hurdles with scalable, future-proof architecture.",
              name: "Aetienne Sardon",
              role: " CEO, UK",
              avatar: bccKristenCheng.src,
            },
            {
              quote:
                "Working with Moonstack feels like having an in-house team. Their transparent communication and on-time delivery set a new standard for us.",
              name: "Mohamed Shegow",
              role: "CEO, Australia",
              avatar: bccKristenCheng.src,
            },
            {
              quote:
                "They truly turn projects into partnerships. Moonstack stayed involved post-launch, using real data to help us iterate and grow.",
              name: "Kirill Onasenko",
              role: "CEO, South Africa",
              avatar: bccKristenCheng.src,
            },
            {
              quote:
                "Moonstack helped us launch in record time. They knew exactly which features to prioritize to get our MVP to market without sacrificing quality",
              name: "Esme Guevara",
              role: "CMO & Head of Product, UK",
              avatar: bccKristenCheng.src,
            },
            {
              quote:
                "The best ROI we've seen this year. Their efficiency and high-quality code led to a 30% spike in engagement immediately after launch.",
              name: "Ola Olusoga",
              role: "Vice President, Canada",
              avatar: bccKristenCheng.src,
            },
          ]}
        />
        <Space />
        <FAQSection
          title="Frequently Asked "
          highlight="Questions."
          description="To decide means to choose a direction with clarity and confidence."
          faqs={page.accordionData}
        />

        <ProjectCTA bgImage={projectCtaBgImg} />

        <Space />
      </Layout>
    </>
  )
}

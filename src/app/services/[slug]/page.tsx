import Layout from "@/components/Layout"

/* ===================== CONSTANTS ===================== */
import { pagesData, pagesKeys } from "@/constants/services"

/* ===================== SECTIONS ===================== */
import AppCategoryBanner from "@/components/Sections/ServicesSection/AppDevelopment/AppCategoryBanner"
import FeatureSection from "@/components/Sections/ServicesSection/FeatureSection"
import OutcomeBanner from "@/components/Sections/ServicesSection/OutcomeBanner"
import ImpactSection from "@/components/Sections/ServicesSection/ImpactSection"
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

import { testimonialsSectionData } from "@/constants/industries"
/* ===================== UI ===================== */
import Space from "@/components/Space"

/* ===================== ASSETS ===================== */
import gradientBg from "@/assets/app-development-images/bannerGradientBg.svg"
// import userImage from "@/assets/app-development-images/autorImg.webp"

import androidBgImg from "@/assets/app-development-images/hero-bg-1440.svg"
import projectCtaBgImg from "@/assets/app-development-images/af_match-bg-1440.svg"
import reviewBgImg from "@/assets/app-development-images/review-under-hero-bg-1440.svg"
import bccKristenCheng from "@/assets/industries/icon/bcc_kristen-cheng.webp"

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

import { notFound } from "next/navigation"
import CloudTimeline from "@/components/Sections/CloudTimeline/CloudTimeline"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params

  const page = getPageBySlug(slug)

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

export default async function ApplicationPage({ params }: PageProps) {
  const { slug } = await params

  const page = getPageBySlug(slug)

  if (!page) {
    notFound()
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

        <Space mobileSize={0} />
        {page.points && (
          <>
            <TestimonialCard
              quote={page.points ?? ""}
              highlightText={page.highlightText ?? ""}
              authorName={page.userName ?? ""}
              authorRole={page.userRole ?? ""}
              authorImage={page.userImage ?? ""}
              bgImage={reviewBgImg}
            />

            <Space size={160} />
          </>
        )}

        {page.leftCardData.length > 0 && (
          <>
            <BusinessNeedsDesignSection leftCards={page.leftCardData} />
            <Space size={160} mobileSize={0} />
          </>
        )}

        {page.featuresData.length > 0 && (
          <FeatureSection
            heading={page.solutions.headingContent}
            subHeadingText={page.solutions.subHeadingText}
            features={page.featuresData}
          />
        )}
        {page.OutcomeBanner && (
          <OutcomeBanner
            heading={page.OutcomeBanner.heading}
            checklist={page.OutcomeBanner.checklist}
            buttonText={page.OutcomeBanner.buttonText}
            bgImage={gradientBg}
          />
        )}

        {page?.processSteps && (
          <ProcessStages
            heading={page.processSteps.headingText}
            description={page.processSteps.subHeadingText}
          />
        )}

        <Space size={160} mobileSize={0} />

        {page.impactSection && page.impactSection.cards.length > 0 && (
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

        {page.NewBanner && (
          <NewBanner
            headingLines={page.NewBanner.headingLines}
            imageSrc={page.mobDesignBanner}
            buttonText="Book a meeting"
          />
        )}

        <TechMarqueeComponent />
        {page.qualitySectionData && (
          <QualitySection
            heading={page.qualitySectionData.heading}
            description={page.qualitySectionData.description}
            features={page.qualitySectionData.list}
            columsClass={page.qualitySectionData.columsClass}
          />
        )}

        {page.CloudTimelineData && page.CloudTimelineData.steps?.length > 0 && (
          <CloudTimeline
            title={page.CloudTimelineData.title}
            highlight={page.CloudTimelineData.highlight}
            subtitle={page.CloudTimelineData.subtitle}
            steps={page.CloudTimelineData.steps}
          />
        )}

        <TeamSliderSection
          headingLines={[
            { text: "Qualified Mobile Developer  ", color: "text-white" },
            {
              text: "Who Know Their Business",
              color: "text-white libreItalic font-[400] highlight-text",
            },
          ]}
          autoplaySpeed={2000}
        />
        <TestimonialsSection
          heading={[
            {
              text: "Expertise You’ll Appreciate.",
              className: "highlight-text libreItalic",
            },
            { text: " Collaboration You’ll Love.", color: "text-white" },
          ]}
          className="pt-[80px]"
          testimonials={testimonialsSectionData.testimonials}
        />
        <Space />
        {page.accordionData.length > 0 && (
          <FAQSection
            title="Frequently Asked "
            highlight="Questions."
            description="To decide means to choose a direction with clarity and confidence."
            faqs={page.accordionData}
          />
        )}
        <ProjectCTA bgImage={projectCtaBgImg} />

        <Space />
      </Layout>
    </>
  )
}
function getPageBySlug(slug?: string) {
  if (!slug) return null

  if (!(slug in pagesKeys)) return null

  const pageKey = pagesKeys[slug as keyof typeof pagesKeys]
  return pagesData[pageKey] ?? null
}

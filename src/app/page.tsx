import nextDynamic from "next/dynamic"
import Layout from "@/components/Layout"
import Meta from "@/components/MetaData"
import HeroSection from "@/components/NewHomePage/HeroBanner"
import Space from "@/components/Space"

const ResultsSection = nextDynamic(
  () => import("@/components/NewHomePage/ResultsSection")
)
const ImpactStatsSection = nextDynamic(
  () => import("@/components/NewHomePage/ImpactStatsSection")
)
const ServicesSection = nextDynamic(
  () => import("@/components/NewHomePage/ServicesSection")
)
const CaseStudyHighlight = nextDynamic(
  () => import("@/components/NewHomePage/CaseStudyHighlight")
)
const AboutHeroSection = nextDynamic(
  () => import("@/components/NewHomePage/AboutHeroSection")
)
const AwardsSection = nextDynamic(
  () => import("@/components/NewHomePage/AwardsSection")
)
const TestimonialsTabs = nextDynamic(
  () => import("@/components/NewHomePage/TestimonialsTabs")
)
const ProjectCTA = nextDynamic(() => import("@/components/ProjectCTA/ProjectCTA"))
const TrustBadges = nextDynamic(
  () => import("@/components/NewHomePage/TrustBadges")
)
const BlogInsightsSection = nextDynamic(
  () => import("@/components/NewHomePage/BlogInsightsSection")
)

import {
  badges,
  tabs,
  awards,
  caseStudies,
  teamMembers,
  awardsHeading,
  projectCtaData,
  processData,
  faqData,
} from "@/constants/home"
import FAQSection from "@/components/Sections/FaqSection/FaqSection"
import ProcessSection from "@/components/Sections/ProcessSection/ProcessSection"


export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Moonstack",
    url: "https://moonstack.co/",
    logo: "https://moonstack.co/wp-content/uploads/2024/03/logo_moon_dark.svg",
    sameAs: [
      "https://www.linkedin.com/company/moonstack",
      "https://twitter.com/moonstack",
    ],
  }
  return (
    <>
      <Meta
        title="Product Focused App & Web Development Company in India & USA"
        description="We're product-focused app and web development company in India. Moonstack’s senior engineers and designers help companies in building World class AI-powered full-stack development, UI/UX, SEO and ongoing support."
        keywords=" Website Development,Mobile app development service India, SEO, Next.js, React, Moonstack,AI solutions for businesses "
        canonical="https://moonstack.co/"
        ogImage="https://moonstack.co/wp-content/uploads/2024/03/logo_moon_dark.svg"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
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
        {caseStudies.map((study, index) => (
          <div key={index}>
            <CaseStudyHighlight
              tag={study.tag}
              showTag={study.showTag}
              badges={study.badges}
              clutchLogo={study.clutchLogo}
              title={study.title}
              description={study.description}
              testimonial={study.testimonial}
              images={study.images}
            />
            {/* Add space after each case study except the last one if needed, or keeping original spacing logic */}
            {index < caseStudies.length - 1 && <Space size={240} />}
            {index === caseStudies.length - 1 && <Space size={150} />}
          </div>
        ))}
        <AboutHeroSection teamMembers={teamMembers} />
        <Space size={160} />
        <AwardsSection
          label="Awards & Achievements"
          heading={awardsHeading}
          awards={awards}
        />
        <Space size={160} />
        <TestimonialsTabs tabs={tabs} />
        <Space size={160} />
        <ProcessSection
          title={processData.title}
          highlight={processData.highlight}
          subtitle={processData.subtitle}
          steps={processData.steps}
        />
        <Space size={160} />
        <BlogInsightsSection imageHeight="h-[280px]" />
        <Space size={50} mobileSize={0} />
        <ProjectCTA
          title={projectCtaData.title}
          subtitle={projectCtaData.subtitle}
          description={projectCtaData.description}
          fontSize={projectCtaData.fontSize}
          marginBottom={projectCtaData.marginBottom}
          whiteBoxClass={projectCtaData.whiteBoxClass}
        />
        <Space size={24} />
        <TrustBadges items={badges} />;
        <Space size={100} />
        <FAQSection
          title="Frequently Asked "
          highlight="Questions."
          description="To decide means to choose a direction with clarity and confidence."
          faqs={faqData}
        />
        <Space size={100} />
      </Layout>
    </>
  )
}

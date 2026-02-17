import Layout from "@/components/Layout"

import Meta from "@/components/MetaData"

import HeroSection from "@/components/NewHomePage/HeroBanner"
import Space from "@/components/Space"
import ResultsSection from "@/components/NewHomePage/ResultsSection"
import ImpactStatsSection from "@/components/NewHomePage/ImpactStatsSection"
import ServicesSection from "@/components/NewHomePage/ServicesSection"
import CaseStudyHighlight from "@/components/NewHomePage/CaseStudyHighlight"
import AboutHeroSection from "@/components/NewHomePage/AboutHeroSection"
import AwardsSection from "@/components/NewHomePage/AwardsSection"
import TestimonialsTabs from "@/components/NewHomePage/TestimonialsTabs"
import ProjectCTA from "@/components/ProjectCTA/ProjectCTA"
import TrustBadges from "@/components/NewHomePage/TrustBadges"
import BlogInsightsSection from "@/components/NewHomePage/BlogInsightsSection"

import {
  badges,
  tabs,
  awards,
  caseStudies,
  teamMembers,
  awardsHeading,
  projectCtaData,
} from "@/constants/home"

export default function Home() {
  return (
    <>
      <Meta
        title="Product Focused App & Web Development Company in India & USA"
        description="We're product-focused app and web development company in India. Moonstack’s senior engineers and designers help companies in building World class AI-powered full-stack development, UI/UX, SEO and ongoing support."
        keywords=" Website Development,Mobile app development service India, SEO, Next.js, React, Moonstack,AI solutions for businesses "
        canonical="/"
        ogImage="https://moonstack.co/wp-content/uploads/2024/03/logo_moon_dark.svg"
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
      </Layout>
    </>
  )
}

import AppCategoryBanner from "@/components/Sections/ServicesSection/AppDevelopment/AppCategoryBanner"
import Layout from "@/components/Layout"
import TestimonialCard from "@/components/Sections/ServicesSection/ReviewCardSection"
import Space from "@/components/Space"
import NewBanner from "@/components/Sections/NewBanner"
import DesignPrinciplesSection from "@/components/Industries/DesignPrinciplesSection"
import AIExperienceSection from "@/components/Industries/AIExperienceSection"

import AIProductsGrid from "@/components/Industries/AIProductsGrid"

import BusinessNeedsDesignSection from "@/components/Industries/BusinessNeedsDesignSection"
import TrustBanner from "@/components/Industries/TrustBanner"

import TestimonialsSection from "@/components/Industries/TestimonialsSection"
import IndustryExperienceSection from "@/components/Industries/IndustryExperienceSection"

import ProjectCTA from "@/components/ProjectCTA/ProjectCTA"
import FAQSection from "@/components/Sections/FaqSection/FaqSection"

import {
  accordionData,
  appCategoryBannerData,
  testimonialCardData,
  aiProductsGridData,
  businessNeedsDesignSectionData,
  newBannerData,
  designPrinciplesData,
  aiExperienceData,
  trustBannerData,
  testimonialsSectionData,
  industryExperienceData,
  projectCtaBgData,
} from "@/constants/industries"

const Industries = () => {
  return (
    <>
      <Layout>
        <AppCategoryBanner
          title={appCategoryBannerData.title}
          highlight={appCategoryBannerData.highlight}
          description={appCategoryBannerData.description}
          mediaType={appCategoryBannerData.mediaType}
          lottieData={appCategoryBannerData.lottieData}
          buttonText={appCategoryBannerData.buttonText}
          bgColor={appCategoryBannerData.bgColor}
          bgImage={appCategoryBannerData.bgImage}
          tags={appCategoryBannerData.tags}
          logoSlider={appCategoryBannerData.logoSlider}
        />
        <TestimonialCard
          quote={testimonialCardData.quote}
          highlightText={testimonialCardData.highlightText}
          authorName={testimonialCardData.authorName}
          authorRole={testimonialCardData.authorRole}
          authorImage={testimonialCardData.authorImage}
          bgImage={testimonialCardData.bgImage}
        />
        <Space size={160} />
        <AIProductsGrid
          heading={aiProductsGridData.heading}
          items={aiProductsGridData.items}
        />
        <Space size={160} />
        <BusinessNeedsDesignSection
          heading={businessNeedsDesignSectionData.heading}
          subheading={businessNeedsDesignSectionData.subheading}
          leftCards={businessNeedsDesignSectionData.leftCards}
        />
        <NewBanner
          headingLines={newBannerData.headingLines}
          imageSrc={newBannerData.imageSrc}
          buttonText={newBannerData.buttonText}
        />{" "}
        <DesignPrinciplesSection
          heading={designPrinciplesData.heading}
          principles={designPrinciplesData.principles}
        />
        <Space size={160} />
        <AIExperienceSection
          title={aiExperienceData.title}
          description={aiExperienceData.description}
          items={aiExperienceData.items}
        />
        <Space size={160} />
        <TrustBanner
          highlight={trustBannerData.highlight}
          title={trustBannerData.title}
        />
        <TestimonialsSection
          heading={testimonialsSectionData.heading}
          className={testimonialsSectionData.className}
          testimonials={testimonialsSectionData.testimonials}
        />
        <Space size={160} />
        <IndustryExperienceSection
          heading={industryExperienceData.heading}
          description={industryExperienceData.description}
          industries={industryExperienceData.industries}
        />
        <Space size={160} mobileSize={0} />
        <div className="relative z-[2]">
          <FAQSection
            faqs={accordionData}
            title="Frequently Asked"
            highlight="Questions."
            description="Everything you need to know"
          />
        </div>
        <ProjectCTA bgImage={projectCtaBgData} />
        <Space />
      </Layout>
    </>
  )
}
export default Industries

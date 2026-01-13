import Layout from "@/components/Layout";

/* ===================== CONSTANTS ===================== */
import { pagesData, pagesKeys, TPageKeys } from "@/constants/services";

/* ===================== SECTIONS ===================== */
import AppCategoryBanner from "@/components/Sections/ServicesSection/AppDevelopment/AppCategoryBanner";
import FeatureSection from "@/components/Sections/ServicesSection/FeatureSection";
import OutcomeBanner from "@/components/Sections/ServicesSection/OutcomeBanner";
import ImpactSection from "@/components/Sections/ServicesSection/ImpactSection";
import AndroidCaseStudySection from "@/components/Sections/ServicesSection/AndroidCaseStudySection";
import TechMarqueeComponent from "@/components/Sections/TechMarquee";
import QualitySection from "@/components/Sections/QualitySection";
import ProcessStages from "@/components/Sections/ServicesSection/AgencyWorkFlowSection";
import TestimonialsSection from "@/components/Industries/TestimonialsSection";
import TeamSliderSection from "@/components/Sections/TeamSliderSection/SliderSection";
import FAQSection from "@/components/Sections/FaqSection/FaqSection";
import ProjectCTA from "@/components/ProjectCTA/ProjectCTA";
import TestimonialCard from "@/components/Sections/ServicesSection/ReviewCardSection";
import NewBanner from "@/components/Sections/NewBanner";
import AwardsSection, {
  AwardItem,
} from "@/components/NewHomePage/AwardsSection";

/* ===================== UI ===================== */
import Space from "@/components/Space";

/* ===================== ASSETS ===================== */
import gradientBg from "@/assets/app-development-images/bannerGradientBg.svg";
import userImage from "@/assets/app-development-images/autorImg.webp";
import infinityIcon from "@/assets/app-development-images/infinityLogo.svg";
import playerIcon from "@/assets/app-development-images/playerIcon.svg";
import voxeIcon from "@/assets/app-development-images/voxeIcon.svg";
import designer from "@/assets/app-development-images/work-directly.webp";
import hiring from "@/assets/app-development-images/hiring.webp";
import delivery from "@/assets/app-development-images/guarante.webp";
import collaboration from "@/assets/app-development-images/flexible.webp";
import androidBgImg from "@/assets/app-development-images/hero-bg-1440.svg";
import projectCtaBgImg from "@/assets/app-development-images/af_match-bg-1440.svg";
import reviewBgImg from "@/assets/app-development-images/review-under-hero-bg-1440.svg";
import bccKristenCheng from "@/assets/industries/ai/icon/bcc_kristen-cheng.avif";

/* ===================== AWARDS ===================== */
import award1 from "@/assets/newHomePage/awards/clutch.svg";
import award2 from "@/assets/newHomePage/awards/Top_Design_company_2025.png";
import award3 from "@/assets/newHomePage/awards/Top_Digital_Design_Company_2025.png";
import award4 from "@/assets/newHomePage/awards/clutch-badge-6.svg";
import award5 from "@/assets/newHomePage/awards/clutch-badge.svg";
import award6 from "@/assets/newHomePage/awards/dribbble.svg";
import award7 from "@/assets/newHomePage/awards/good-firms.svg";
import award8 from "@/assets/newHomePage/awards/upwork.svg";
import icon from "@/assets/newHomePage/awards/icon.svg";

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
];

interface PageProps {
  params: { slug: string };
}

/* ===================== PAGE ===================== */
export default function ApplicationPage({ params }: PageProps) {
  const slug = params.slug;

  const page = pagesData[pagesKeys[slug as TPageKeys] as TPageKeys];

  if (!page) {
    return <p className="p-10 text-center">Page not found</p>;
  }

  return (
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
        authorRole="Founder at MYSO Finance"
        authorImage={userImage}
        bgImage={reviewBgImg}
      />

      <Space size={160} />

      <FeatureSection
        heading={page.solutions.headingContent}
        features={page.featuresData}
      />

      {page?.processSteps && (
        <ProcessStages
          heading={page.processSteps.headingText}
          description={page.processSteps.subHeadingText}
        />
      )}

      <OutcomeBanner
        heading={[
          { text: "Business outcomes", color: "text-white" },
          {
            text: " you will get:",
            color: "text-white libreItalic font-[400]",
          },
        ]}
        checklist={[
          "Boosted engagement",
          "Improved brand recognition",
          "High app downloads",
          "Maximize user satisfaction",
        ]}
        bgImage={gradientBg}
        buttonText="Get a quote"
      />

      <Space size={160} />

      <AwardsSection
        label=""
        heading={[
          { text: "While the growth " },
          {
            text: "of our clients ",
            className: "libreItalic font-[400] highlight-text",
          },
          { text: "is what " },
          {
            text: "matters ",
            className: "libreItalic font-[400] highlight-text",
          },
          { text: "most, it’s nice to get awards" },
        ]}
        awards={awards}
      />

      <ImpactSection
        heading={[
          { text: "Investing in your ", color: "text-white" },
          {
            text: "own mobile app is a ",
            color: "text-white libreItalic font-[400] highlight-text",
          },
          { text: "competitive advantage", color: "text-white" },
        ]}
        description="Our mobile design services and approach are result-driven..."
        cards={[
          {
            id: "infinity",
            logo: infinityIcon,
            title: "Infinity",
            value: "x5",
            label: "Retention rate boost",
            description:
              "Our experts delivered a top-notch mobile app for Infinity Web3 platform.",
            variant: "dark",
          },
          {
            id: "voxe",
            title: "VOXE",
            logo: voxeIcon,
            value: "7.1M",
            label: "Audience reach",
            description:
              "Outstanding mobile app design helped VOXE reach a wider audience.",
            variant: "light",
          },
          {
            id: "players",
            logo: playerIcon,
            title: "Players Health",
            value: "85%",
            label: "User satisfaction rate",
            description:
              "Players Health users’ needs are covered with intuitive design.",
            variant: "accent",
          },
        ]}
      />

      <AndroidCaseStudySection
        title={[
          { text: "Our mobile app design ", color: "text-white" },
          {
            text: "works prove themselves",
            color: "text-white libreItalic font-[400] highlight-text",
          },
        ]}
        description="We've helped many startups and companies design high-quality mobile applications."
      />

      <NewBanner
        headingLines={[
          { text: "Strengthen your user" },
          { text: "connection with an" },
          { text: "intuitive mobile app" },
        ]}
        imageSrc={page.mobDesignBanner}
        buttonText="Contact us"
      />

      <TechMarqueeComponent />

      <QualitySection
        features={[
          { id: 1, title: "Adaptable collaboration approach", icon: collaboration },
          { id: 2, title: "Commitment to deadlines", icon: delivery },
          { id: 3, title: "Quick onboarding", icon: hiring },
          { id: 4, title: "Work directly with the team", icon: designer },
        ]}
      />

      <TestimonialsSection
        heading={[
          { text: "Our partners ", className: "highlight-text libreItalic" },
          { text: "find numerous reasons to love us", color: "text-white" },
        ]}
        testimonials={[
          {
            quote: "They understood our idea and gave us more feedback than expected.",
            name: "Kristen Cheng",
            role: "Founder & CEO, BehindTitles",
            avatar: bccKristenCheng.src,
          },
        ]}
      />

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

      <FAQSection
        title="Frequently Asked "
        highlight="Questions."
        description="To decide means to choose a direction with clarity and confidence."
        faqs={page.accordionData}
      />

      <ProjectCTA bgImage={projectCtaBgImg} />

      <Space />
    </Layout>
  );
}

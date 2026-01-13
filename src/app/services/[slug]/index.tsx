import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Meta from "@/components/MetaData";

/* ===================== CONSTANTS ===================== */
import { pagesData, pagesKeys, TPageKeys } from "../../../constants/services";

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

/* ===================== PAGE ===================== */

export default function ApplicationPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || typeof slug !== "string") return <p>Loading...</p>;

  const page = pagesData[pagesKeys[slug as TPageKeys] as TPageKeys];
  if (!page) return <p>Page not found</p>;

  return (
    <>
      <Meta
        title={page.seo?.title}
        description={page.seo?.description}
        keywords={page.seo?.keywords}
        canonical={page.seo?.canonical}
        ogImage={page.seo?.ogImage}
      />
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
        />{" "}
        <Space size={160} />
        <FeatureSection
          heading={page.solutions.headingContent}
          features={page.featuresData}
        />{" "}
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
          className=""
        />{" "}
        <Space size={160} />
        <AwardsSection
          label=""
          heading={[
            { text: "While the growth " },
            {
              text: "of our clients ",
              className: "libreItalic font-[400]  highlight-text",
            },
            { text: "is what " },
            {
              text: "matters ",
              className: "libreItalic font-[400]  highlight-text",
            },
            { text: "most, it’s nice to get awards" },
          ]}
          awards={awards}
        />
        <ImpactSection
          heading={[
            {
              text: "Investing in your ",
              color: "text-white",
            },
            {
              text: "own mobile app is a ",
              color: "text-white libreItalic font-[400] highlight-text",
            },
            {
              text: "competitive advantage",
              color: "text-white",
            },
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
                "Our experts delivered a top-notch mobile app for Infinity Web3 platform, which increased the retention rates and loyalty of users.",
              variant: "dark",
            },
            {
              id: "voxe",
              title: "VOXE",
              logo: voxeIcon,
              value: "7.1M",
              label: "Audience reach",
              description:
                "Outstanding mobile app design helped VOXE to reach and attract high amount of audience that later resulted in high user retention rates.",
              variant: "light",
            },
            {
              id: "players",
              logo: playerIcon,
              title: "Players Health",
              value: "85%",
              label: "User satisfaction rate",
              description:
                "Players Health user's needs, expectations, and preferences are covered with intuitive and fast mobile app design created by our team.",
              variant: "accent",
            },
          ]}
        />
        <AndroidCaseStudySection
          title={[
            {
              text: "Our mobile app design ",
              color: "text-white",
            },
            {
              text: "works prove themselves",
              color: "text-white libreItalic font-[400] highlight-text",
            },
          ]}
          description="We've helped many startups and companies design high-quality mobile applications that drive conversions and meet users' needs. Check the success stories of our clients below."
        />
        <NewBanner
          headingLines={[
            { text: "Strengthen your user" },
            { text: "connection with an" },
            { text: "intuitive mobile app" },
          ]}
          imageSrc={page.mobDesignBanner}
          buttonText="Contact us"
        />{" "}
        <TechMarqueeComponent />
        <QualitySection
          features={[
            {
              id: 1,
              title:
                "Adaptable collaboration approach with a fixed monthly cost",
              icon: collaboration,
            },
            {
              id: 2,
              title: "Commitment to deadlines and timely execution",
              icon: delivery,
            },
            {
              id: 3,
              title: "Quick onboarding with instant project kickoff",
              icon: hiring,
            },
            {
              id: 4,
              title: "Work directly with the team",
              icon: designer,
            },
          ]}
        />
        <TestimonialsSection
          heading={[
            { text: "Our partners ", className: "highlight-text libreItalic" },
            { text: "find numerous reasons to love us", color: "text-white" },
          ]}
          testimonials={[
            {
              quote:
                "They understood our idea and gave us more feedback than expected. Around produces excellent quality work.",
              name: "Kristen Cheng",
              role: "Founder & CEO, BehindTitles",
              avatar: bccKristenCheng.src,
            },
            {
              quote:
                "Their expertise and guidance were instrumental. They demonstrated commitment to creating a product that resonated.",
              name: "Aetienne Sardon",
              role: "Founder, MYSO Finance",
              avatar: bccKristenCheng.src,
            },
            {
              quote:
                "The process was something to be admired. They would also make immediate improvements when mentioned.",
              name: "Mohamed Shegow",
              role: "CEO, Sinta",
              avatar: bccKristenCheng.src,
            },
            {
              quote:
                "Arounda is not just a contractor but part of our startup company. Communication was excellent.",
              name: "Kirill Onasenko",
              role: "CEO, VOXE",
              avatar: bccKristenCheng.src,
            },
            {
              quote:
                "Their UI/UX design skills were impressive. Modern, creative, and intuitive without hand-holding.",
              name: "Esme Guevara",
              role: "CMO & Head of Product, QTalent",
              avatar: bccKristenCheng.src,
            },
            {
              quote:
                "Throughout the project all I saw was sheer will to keep pushing forward and adapting to requests.",
              name: "Ola Olusoga",
              role: "Vice President, WordPress",
              avatar: bccKristenCheng.src,
            },
          ]}
        />
        <TeamSliderSection
          headingLines={[
            { text: "Qualified mobile developer  ", color: "text-white" },
            {
              text: "who  know their business",
              color: "text-white libreItalic font-[400] highlight-text",
            },
          ]}
          autoplaySpeed={2000}
        />
        <FAQSection
          title="Frequently Asked "
          highlight="Questions."
          description="To decide means to choose a direction with clarity and confidence. "
          faqs={page.accordionData}
        />
        <ProjectCTA bgImage={projectCtaBgImg} />
        <Space />
        {/* ........ */}
      </Layout>
    </>
  );
}

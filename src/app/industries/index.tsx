import AppCategoryBanner from "@/components/Sections/ServicesSection/AppDevelopment/AppCategoryBanner";
import Layout from "@/components/Layout";
import bgImagehero from "@/assets/industries/ai/hero-bg.svg";
import LottieData from "../../../public/lottie/industries.json";
import TestimonialCard from "@/components/Sections/ServicesSection/ReviewCardSection";
import userImage from "@/assets/app-development-images/autorImg.webp";
import tastimonialBg from "@/assets/industries/ai/review-under-hero-bg.svg";
import mobDesignBanner from "@/assets/app-development-images/mob-design-banner.webp";
import AndroidCaseStudySection from "@/components/Sections/ServicesSection/AndroidCaseStudySection";
import Space from "@/components/Space";
import NewBanner from "@/components/Sections/NewBanner";
import DesignPrinciplesSection from "@/components/Industries/DesignPrinciplesSection";
import AIExperienceSection from "@/components/Industries/AIExperienceSection";

import img1 from "@/assets/industries/ai/xp-1-p-500.webp";
import img2 from "@/assets/industries/ai/xp-2.webp";
import img3 from "@/assets/industries/ai/xp-3-p-500.webp";
import img4 from "@/assets/industries/ai/xp-4-p-500.webp";
import AIProductsGrid from "@/components/Industries/AIProductsGrid";

import icon from "@/assets/industries/ai/icon/ai-p-icon.webp";

import bndicon1 from "@/assets/industries/ai/icon/bndicon1.webp";
import bndicon2 from "@/assets/industries/ai/icon/bndicon2.webp";
import bndicon3 from "@/assets/industries/ai/icon/bndicon3.webp";
import bndicon4 from "@/assets/industries/ai/icon/bndicon4.webp";
import bndimage1 from "@/assets/industries/ai/icon/bndImage1.webp";
import bndimage2 from "@/assets/industries/ai/icon/bndImage2.webp";
import bndimage3 from "@/assets/industries/ai/icon/bndImage3.webp";
import bndimage4 from "@/assets/industries/ai/icon/bndImage4.webp";

import BusinessNeedsDesignSection from "@/components/Industries/BusinessNeedsDesignSection";
import TrustBanner from "@/components/Industries/TrustBanner";
import FeatureSection from "@/components/Sections/ServicesSection/FeatureSection";

import intuitiveIcon from "@/assets/industries/ai/icon/work1.webp";
import engagingIcon from "@/assets/industries/ai/icon/work2.webp";
import brandingIcon from "@/assets/industries/ai/icon/work3.webp";
import brandingIcon4 from "@/assets/industries/ai/icon/work4.webp";

import bccKristenCheng from "@/assets/industries/ai/icon/bcc_kristen-cheng.avif";
import TestimonialsSection from "@/components/Industries/TestimonialsSection";
import IndustryExperienceSection from "@/components/Industries/IndustryExperienceSection";

import industryicon1 from "@/assets/industries/ai/icon/dbd2_i1.png";
import industryicon2 from "@/assets/industries/ai/icon/b_i2.png";
import industryicon3 from "@/assets/industries/ai/icon/b_i4.png";
import industryicon4 from "@/assets/industries/ai/icon/_i5.png";
import projectCtaBg from "@/assets/industries/ai/projectCtaBg.svg";

import ProjectCTA from "@/components/ProjectCTA/ProjectCTA";
import FAQSection from "@/components/Sections/FaqSection/FaqSection";
const mobileDesignFeatures = [
  {
    imgSrc: intuitiveIcon.src,
    title: "Daily reports & time-tracking",
  },
  {
    imgSrc: engagingIcon.src,
    title: "Transparent process with access to all working files",
  },
  {
    imgSrc: brandingIcon.src,
    title: "Meetings & regular feedback gathering",
  },
  {
    imgSrc: brandingIcon4.src,
    title: "Close cooperation,flexibility, and comfort",
  },
];

const accordionData = [
  {
    question: "How much does Android app development cost in India?",
    answer:
      "The actual development cost of an Android app depends on the app’s purpose, technology stack, features, and scale. For a quick quotation, feel free to reach out to our team at Moonstack.",
  },
  {
    question: "Will AI replace Android developers in India?",
    answer:
      "No, while AI is gradually becoming a good tool that can assist developers, it is not advanced enough to replace Android developers in India.",
  },
  {
    question: "Which is the best Android app development company in India?",
    answer:
      "Moonstack. We pride ourselves on being the best Android app development company in India, thanks to our years of experience developing popular Android apps that are downloaded and loved by millions of users.",
  },
  {
    question: "Can Moonstack develop Android e-commerce applications?",
    answer:
      "Yes, we can help you build completely custom e-commerce Android applications, complete with payment gateway integration and even chat support.",
  },
  {
    question: "How long does it take to develop an Android app?",
    answer:
      "The timeline for app development depends on various factors; however, the development process can generally take between a few weeks to a few months, based on underlying factors.",
  },
];
const Industries = () => {
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
              className: "highlight-text libreItalic",
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
          tags={["Chatbots", "Marketing", "Education", "Crypto"]}
          logoSlider={true}
        />
        <TestimonialCard
          quote="Android is the most popular mobile phone operating system in the world, with an estimated 4.5 billion users worldwide. Our native Android development service in India can help your business develop applications that allow you to reach that humongous audience. Every day, over 250 million Android apps are downloaded globally. "
          highlightText="Android development service"
          authorName="Aetienne Sardon"
          authorRole="Founder at MYSO Finance"
          authorImage={userImage}
          bgImage={tastimonialBg}
        />
        <Space size={160} />
        <AndroidCaseStudySection
          title={[
            {
              text: "Our mobile",
              color: "text-white",
            },
            {
              text: " app design  ",
              color: "text-white",
              className: "highlight-text libreItalic",
            },
            {
              text: "works prove themselves",
              color: "text-white",
            },
          ]}
          description="We've helped many startups and companies design high-quality mobile applications that drive conversions and meet users' needs. Check the success stories of our clients below."
        />
        {/* <Space size={160} /> */}
        <NewBanner
          headingLines={[
            { text: "Strengthen your user" },
            {
              text: "connection with ",
              className: "highlight-text libreItalic",
            },
            { text: "an intuitive mobile app" },
          ]}
          imageSrc={mobDesignBanner}
          buttonText="Contact us"
        />{" "}
        <DesignPrinciplesSection
          heading={[
            { text: "How we create designs for " },
            { text: "AI products", className: "highlight-text libreItalic" },
            { text: "that respond to user needs" },
          ]}
          principles={[
            {
              id: "01",
              title: "Prioritizing the accessibility and ease of learning",
              description:
                "We pay high attention on familiarizing users with your product and making the interaction easy. It is crucial to reduce uncertainties.",
              gradient: "bg-gradient-to-br from-[#7FD3FF] to-[#f3c5d1]",
            },
            {
              id: "02",
              title: "Ensure data privacy & transparency",
              description:
                "Communicating how data is collected, used and protected so that users could own control over their personal information.",
              gradient: "bg-gradient-to-br from-[#A6AEFF] to-[#83ffb3]",
            },
            {
              id: "03",
              title: "Building trust with users through design",
              description:
                "AI technologies can still be considered as something mysterious. We add explanations and visualizations to build trust with your users.",
              gradient: "bg-gradient-to-br from-[#D7B8FF] to-[#70bb79]",
            },
            {
              id: "04",
              title: "Improvements are made based on user’s insights",
              description:
                "We improve and redesign AI products based on the information and valuable insights provided by users.",
              gradient: "bg-gradient-to-br from-[#6EE7D8] to-[#f3c5d1]",
            },
          ]}
        />
        <Space size={160} />
        <AIExperienceSection
          title={[
            { text: "You hire a" },
            {
              text: "professional designer",
              className: "highlight-text libreItalic",
            },
            { text: "with suitable AI experience" },
          ]}
          description="When it comes to artificial intelligence design, it is crucial to be responsive to user needs and prioritize the accessibility of every feature. Our designers can offer you relevant expertise that would be a perfect match for your AI-powered product."
          items={[
            {
              image: img1,
            },
            {
              image: img2,
            },
            {
              image: img3,
            },
            {
              image: img4,
            },
          ]}
        />
        <Space size={160} />
        <AIProductsGrid
          heading={[
            {
              text: "AI products",
              className: "libreItalic highlight-text",
              color: "",
            },
            {
              text: "that we can create together",
              color: "",
              className: "",
            },
          ]}
          items={[
            {
              title: "AI Chatbots",
              description:
                "Ensuring your chatbot engages users and provides meaningful assistance.",
              icon: icon.src,
              href: "/contact-us",
              gradient: "linear-gradient(91deg, #ACB4FF -61.77%, #FFF 87.06%)",
            },
            {
              title: "AI Marketing",
              description:
                "Content optimization tools and SEO assistants with strong UX.",
              icon: icon.src,
              href: "/contact-us",
              gradient:
                "linear-gradient(91deg, #ACE1FF -61.77%, #FFF 87.06%), #1C1C1C",
            },
            {
              title: "Crypto AI",
              description:
                "AI solutions tailored for the crypto and blockchain industry.",
              icon: icon.src,
              href: "/contact-us",
              gradient: "linear-gradient(91deg, #ACB4FF -61.77%, #FFF 87.06%)",
            },
            {
              title: "Education AI",
              description: "Remote learning tools and language learning apps.",
              icon: icon.src,
              href: "/contact-us",
              gradient:
                "linear-gradient(91deg, #ACE1FF -61.77%, #FFF 87.06%), #1C1C1C",
            },
            {
              title: "Healthcare AI",
              description:
                "Design solutions improving diagnosis and patient outcomes.",
              icon: icon.src,
              href: "/contact-us",
              gradient: "linear-gradient(91deg, #ACB4FF -61.77%, #FFF 87.06%)",
            },
            {
              title: "AI-powered HR",
              description:
                "Recruitment automation with intuitive and consistent UI/UX.",
              icon: icon.src,
              href: "/contact-us",
              gradient:
                "linear-gradient(91deg, #ACE1FF -61.77%, #FFF 87.06%), #1C1C1C",
            },
          ]}
        />
        <Space size={160} />
        <BusinessNeedsDesignSection
          heading={[
            { text: "We have a special approach to" },
            { text: "AI design", className: "libreItalic highlight-text" },
            { text: "that wraps around your business needs" },
          ]}
          subheading="Our designers unite Business-Driven + User-Centered UX approach while creating AI design to cover business goals and user’s needs."
          leftCards={[
            {
              title: "Holding a user research",
              description:
                "We conduct thorough user research to understand motivations, pain points, and behavior patterns. This helps us identify workable solutions and high-demand features.",
              icon: bndicon1.src,
              image: bndimage1.src,
            },
            {
              title: "Thoughtful user flow",
              description:
                "Our experts map intuitive, goal-oriented user flows that make it easy to accomplish tasks, discover value, and stay engaged.",
              icon: bndicon2.src,
              image: bndimage2.src,
            },
            {
              title: "Thoughtful user flow",
              description:
                "Our experts map intuitive, goal-oriented user flows that make it easy to accomplish tasks, discover value, and stay engaged.",
              icon: bndicon3.src,
              image: bndimage3.src,
            },
            {
              title: "Thoughtful user flow",
              description:
                "Our experts map intuitive, goal-oriented user flows that make it easy to accomplish tasks, discover value, and stay engaged.",
              icon: bndicon4.src,
              image: bndimage4.src,
            },
          ]}
        />
        <Space size={160} />
        <TrustBanner
          highlight="Turning projects"
          title="into trusting partnerships"
        />
        <TestimonialsSection
          heading={[
            { text: "Our partners ", className: "highlight-text libreItalic" },
            { text: "find numerous reasons to love us", color: "text-white" },
          ]}
          className="pt-[80px]"
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
        <Space size={160} />
        <IndustryExperienceSection
          heading={[
            { text: "We have ", color: "text-white" },
            { text: "extensive ", color: "text-lime-400" },
            {
              text: "industry experiences",
              color: "text-white",
              className: "highlight-text libreItalic block",
            },
          ]}
          description="Our product designers have completed projects in different niches. They know how to add business value and provide personalized design solutions for your digital product."
          industries={[
            {
              title: "Web 3, Blockchain",
              icon: industryicon1.src,
              tags: ["Apps", "DeFi", "IPFS", "Exchanges", "Play2Earn"],
            },
            {
              title: "SaaS",
              icon: industryicon2.src,
              tags: ["CRM", "HR", "AI", "ERP", "Automation tools"],
            },
            {
              title: "Healthcare",
              icon: industryicon3.src,
              tags: ["Mental health", "Wellness", "Insurance", "Fitness"],
            },
            {
              title: "Fintech",
              icon: industryicon4.src,
              tags: ["Banking", "Exchanges", "Digital Payments"],
            },
          ]}
        />
        <Space size={160} />
        <div className="relative z-[2]">
          <FAQSection
            faqs={accordionData}
            title="Frequently Asked"
            highlight="Questions."
            description="Everything you need to know"
          />
        </div>
        <ProjectCTA bgImage={projectCtaBg.src} />
        <Space />
      </Layout>
    </>
  );
};
export default Industries;

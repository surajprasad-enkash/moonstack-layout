import AppCategoryBanner from "@/components/Sections/ServicesSection/AppDevelopment/AppCategoryBanner"
import Layout from "@/components/Layout"
import bgImagehero from "@/assets/industries/ai/hero-bg.svg"
import LottieData from "../../../public/lottie/industries.json"
import TestimonialCard from "@/components/Sections/ServicesSection/ReviewCardSection"
import userImage from "@/assets/app-development-images/autorImg.webp"
import tastimonialBg from "@/assets/industries/ai/review-under-hero-bg.svg"
import mobDesignBanner from "@/assets/app-development-images/mob-design-banner.webp"
import AndroidCaseStudySection from "@/components/Sections/ServicesSection/AndroidCaseStudySection"
import Space from "@/components/Space"
import NewBanner from "@/components/Sections/NewBanner"
import DesignPrinciplesSection from "@/components/Industries/DesignPrinciplesSection"
import AIExperienceSection from "@/components/Industries/AIExperienceSection"

import img1 from "@/assets/industries/ai/xp-1-p-500.webp"
import img2 from "@/assets/industries/ai/xp-2.webp"
import img3 from "@/assets/industries/ai/xp-3-p-500.webp"
import img4 from "@/assets/industries/ai/xp-4-p-500.webp"
import AIProductsGrid from "@/components/Industries/AIProductsGrid"

import icon from "@/assets/industries/ai/icon/ai-p-icon.webp"

import BusinessNeedsDesignSection from "@/components/Industries/BusinessNeedsDesignSection"
import TrustBanner from "@/components/Industries/TrustBanner"
import FeatureSection from "@/components/Sections/ServicesSection/FeatureSection"

import intuitiveIcon from "@/assets/industries/ai/icon/work1.webp"
import engagingIcon from "@/assets/industries/ai/icon/work2.webp"
import brandingIcon from "@/assets/industries/ai/icon/work3.webp"
import brandingIcon4 from "@/assets/industries/ai/icon/work4.webp"

import bccKristenCheng from "@/assets/industries/ai/icon/bcc_kristen-cheng.avif"
import TestimonialsSection from "@/components/Industries/TestimonialsSection"
import IndustryExperienceSection from "@/components/Industries/IndustryExperienceSection"

import industryicon1 from "@/assets/industries/ai/icon/dbd2_i1.png"
import industryicon2 from "@/assets/industries/ai/icon/b_i2.png"
import industryicon3 from "@/assets/industries/ai/icon/b_i4.png"
import industryicon4 from "@/assets/industries/ai/icon/_i5.png"
import projectCtaBg from "@/assets/industries/ai/projectCtaBg.svg"

import ProjectCTA from "@/components/ProjectCTA/ProjectCTA"
import FAQSection from "@/components/Sections/FaqSection/FaqSection"
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
]

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
]
const Industries = () => {
  return (
    <>
      <Layout>
        <AppCategoryBanner
          title={[
            {
              text: "Empowering Businesses Across Industries with",
              color: "text-white",
            },
            {
              text: " Digital Excellence",
              color: "",
              className: "highlight-text libreItalic",
            },
          ]}
          highlight={"AI products"}
          description={
            "Moonstack partners with businesses across industries, delivering digital solutions that drive growth, streamline operations, and enhance user experiences."
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
          quote="The Moonstack team is highly professional, responsive, and reliable. From planning to execution, everything was handled smoothly. Their ability to meet deadlines while maintaining high-quality standards makes them a trusted long-term partner for us."
          highlightText="high-quality standards"
          authorName="Naman Bhatia"
          authorRole="CEO"
          authorImage={userImage}
          bgImage={tastimonialBg}
        />
        <Space size={160} />
        {/* <AndroidCaseStudySection
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
        /> */}
        <AIProductsGrid
          heading={[
            {
              text: "Elevating Brands ",
              className: "libreItalic highlight-text md:block",
              color: "",
            },
            {
              text: "Across Multiple Sectors",
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
              title: "Education",
              description:
                "Learning platforms, e-learning tools, and student management software.",
              icon: icon.src,
              href: "/contact-us",
              gradient:
                "linear-gradient(91deg, #ACE1FF -61.77%, #FFF 87.06%), #1C1C1C",
            },
            {
              title: "E-commerce",
              description:
                "Online platforms for buying and selling products with seamless UX.",
              icon: icon.src,
              href: "/contact-us",
              gradient: "linear-gradient(91deg, #ACB4FF -61.77%, #FFF 87.06%)",
            },
            {
              title: "Healthcare",
              description:
                "Patient care solutions, telemedicine, and hospital management systems.",
              icon: icon.src,
              href: "/contact-us",
              gradient:
                "linear-gradient(91deg, #ACE1FF -61.77%, #FFF 87.06%), #1C1C1C",
            },
            {
              title: "Finance",
              description:
                "Banking apps, investment tools, and financial management software.",
              icon: icon.src,
              href: "/contact-us",
              gradient: "linear-gradient(91deg, #ACB4FF -61.77%, #FFF 87.06%)",
            },
            {
              title: "Travel & Hospitality",
              description:
                "Booking platforms, travel planning apps, and hotel management solutions.",
              icon: icon.src,
              href: "/contact-us",
              gradient:
                "linear-gradient(91deg, #ACE1FF -61.77%, #FFF 87.06%), #1C1C1C",
            },
            {
              title: "Retail",
              description:
                "Store management, POS solutions, and omnichannel experiences.",
              icon: icon.src,
              href: "/contact-us",
              gradient: "linear-gradient(91deg, #ACB4FF -61.77%, #FFF 87.06%)",
            },
            {
              title: "Real Estate",
              description:
                "Property listing platforms, virtual tours, and real estate management tools.",
              icon: icon.src,
              href: "/contact-us",
              gradient:
                "linear-gradient(91deg, #ACE1FF -61.77%, #FFF 87.06%), #1C1C1C",
            },
            {
              title: "Logistics & Supply Chain",
              description:
                "Shipping automation, route optimization, and inventory tracking.",
              icon: icon.src,
              href: "/contact-us",
              gradient: "linear-gradient(91deg, #ACB4FF -61.77%, #FFF 87.06%)",
            },
            {
              title: "Media & Entertainment",
              description:
                "Streaming platforms, content management, and recommendation engines.",
              icon: icon.src,
              href: "/contact-us",
              gradient:
                "linear-gradient(91deg, #ACE1FF -61.77%, #FFF 87.06%), #1C1C1C",
            },
            {
              title: "Legal & Compliance",
              description:
                "Case management, document automation, and compliance tracking tools.",
              icon: icon.src,
              href: "/contact-us",
              gradient: "linear-gradient(91deg, #ACB4FF -61.77%, #FFF 87.06%)",
            },
            {
              title: "Event and Planner",
              description:
                "Powering high-performance websites for the creators of unforgettable experiences.",
              icon: icon.src,
              href: "/contact-us",
              gradient:
                "linear-gradient(91deg, #ACE1FF -61.77%, #FFF 87.06%), #1C1C1C",
            },
          ]}
        />
        {/* <Space size={160} /> */}
        {/* <Space size={160} /> */}
        <Space size={160} />
        <BusinessNeedsDesignSection
          heading={[
            { text: "Why Choose " },
            { text: "Moonstack", className: "libreItalic highlight-text" },
            { text: " for Your Industry Needs?" },
          ]}
          subheading="Moonstack is a leader in app development services providers, offering customized mobile applications and websites that cater to the specific needs of your industries. Our applications are designed to enhance operational efficiency, improve customer engagement, and drive business growth across various sectors."
          leftCards={[]}
        />
        <NewBanner
          headingLines={[
            { text: "Scale Your Reach" },
            {
              text: " with a World-Class",
              className: " libreItalic",
            },
            { text: " Development solution " },
          ]}
          imageSrc={mobDesignBanner}
          buttonText="Start Your Project"
        />{" "}
        <DesignPrinciplesSection
          heading={[
            { text: "How Our " },
            {
              text: "Design Principles ",
              className: "highlight-text libreItalic",
            },
            { text: "Work Across Every Industry" },
          ]}
          principles={[
            {
              id: "01",
              title: "Clarity Over Cleverness",
              description:
                "We design for understanding first. Clear communication beats visual tricks. Users should never guess what to do next.",
              gradient: "bg-gradient-to-br from-[#7FD3FF] to-[#f3c5d1]",
            },
            {
              id: "02",
              title: "Consistency Builds Trust",
              description:
                "Familiar patterns reduce friction. When interfaces behave predictably, users feel confident and work faster with less errors.",
              gradient: "bg-gradient-to-br from-[#A6AEFF] to-[#83ffb3]",
            },
            {
              id: "03",
              title: "Speed Without Sacrifice",
              description:
                "Performance is a feature, not an afterthought. Fast experiences keep users engaged while maintaining quality and accessibility.",
              gradient: "bg-gradient-to-br from-[#D7B8FF] to-[#70bb79]",
            },
            {
              id: "04",
              title: "Design That Evolves With Users",
              description:
                "Great design adapts based on real feedback and behavior. We continuously refine experiences to match how people actually work and learn.",
              gradient: "bg-gradient-to-br from-[#6EE7D8] to-[#f3c5d1]",
            },
          ]}
        />
        <Space size={160} />
        <AIExperienceSection
          title={[
            { text: "Partner with " },
            {
              text: "Moonstack ",
              className: "highlight-text libreItalic",
            },
            { text: "for Industry-Leading Solutions" },
          ]}
          description="Our expert team combines industry knowledge with innovative technology to deliver solutions that drive business growth and enhance customer satisfaction. Contact us today to learn how our innovative solutions can transform your business operations and help you stay ahead in a competitive market."
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
        <TrustBanner
          highlight="Elevating project "
          title="success into trusted collaborations"
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
        <Space size={160} />
        <IndustryExperienceSection
          heading={[
            { text: "Proven ", color: "text-white" },
            { text: "Experience, ", color: "text-lime-400" },
            {
              text: " Multi-Niche Expertise",
              color: "text-white",
              className: "highlight-text libreItalic block",
            },
          ]}
          description="Having launched successful products across various sectors, our team knows how to drive ROI through design. We combine industry-best practices with tailored strategies to ensure your digital product stands out in its market."
          industries={[
            {
              title: "Artificial Intelligence",
              icon: industryicon1.src,
              tags: ["Apps", "Web", "Chat Bot", "Automation", "Use Cases"],
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
  )
}
export default Industries

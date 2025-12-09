import Layout from "@/components/Layout";
import icon1 from "../../../public/assets/it-support-service/TechnicalImplementationIcon.svg";
import icon2 from "../../../public/assets/it-support-service/TechnicalImplementationIcon.svg";
import icon3 from "../../../public/assets/it-support-service/TechnicalImplementationIcon.svg";
import icon4 from "../../../public/assets/it-support-service/TechnicalImplementationIcon.svg";
import icon5 from "../../../public/assets/it-support-service/TechnicalImplementationIcon.svg";
import React from "react";
import BgImg from "../../../public/assets/it-support-service/banner-bg.png"; // Adjust the path as needed
import heroImg from "../../../public/assets/it-support-service/banner-right-4.webp"; // Adjust the path as needed

import {
  ServicesContentSection as ServicesContent,
  accordionData,
} from "../../constants/it-support-service";

import FAQ from "@/components/Sections/FaqSection/FaqSection";
import EdgeToolsSection from "@/components/Sections/CloudServices/EdgeToolsSection/EdgeToolsSection";
import CloudServicesSection from "@/components/Sections/CloudServices/CloudServicesSection/CloudServicesSection";
import CloudTimeline from "@/components/Sections/CloudServices/CloudTimeline/CloudTimeline";
import ServicesContentSection from "@/components/Sections/CloudServices/ServicesContentSection/ServicesContentSection";
import HeroCloudSection from "@/components/Sections/CloudServices/BannerSection/BannerSection";
import FAQSection from "@/components/Sections/FaqSection/FaqSection";
const ItSupportService = () => {
  return (
    <>
      <Layout>
        <HeroCloudSection
          title={[
            {
              text: "Moonstack: Supporting India And USA Businesses With",
              className: "",
            },
            {
              text: "Seamless IT Solutions",
              color: "",
              className: "highlight-text block",
            },
          ]}
          imgSize="md:w-[80%]"
          padding="150px 0px 100px 0px"
          description="The fox is a smart and clever animal known for its quick movements and sharp instincts. It lives in forests, grasslands, and even near cities. With its bright orange fur, bushy tail, and pointed ears, the fox is easy to recognize. It hunts mainly at night and eats small animals, fruits, and insects."
          buttonText="Connect With Us"
          buttonUrl="/contact"
          image={''}
          bgImage={BgImg.src}
          bgColor=""
        />

        {ServicesContent.map((item, index) => (
          <ServicesContentSection
            key={index}
            image={item.image}
            title={item.title}
            highlightTitle={item.highlightTitle}
            description={item.description}
            reverse={item.reverse}
            bgImage={item.bgImage}
            buttonText={item.buttonText}
            buttonUrl={item.buttonUrl}
          />
        ))}

        <EdgeToolsSection
          title="Edge tools Drive That"
          highlight="Performance."
          description="Feel free adapt this based on the specific managed services, features, and unique selling points your IT service company provides."
          services={[
            {
              icon: icon1,
              title: "Technical Implementation",
              description:
                "Plan, design, and deploy cloud systems, ensuring seamless integration, functionality, and alignment with business goals.",
            },
            {
              icon: icon2,
              title: "IT Helpdesk Support",
              description:
                "Provide timely technical assistance, troubleshoot cloud-related issues, and resolve user problems to ensure smooth operations and minimal downtime.",
            },
            {
              icon: icon3,
              title: "Managed IT Services",
              description:
                "Proactively monitor, maintain, and optimize cloud infrastructure to enhance performance, security, and scalability for business growth.",
            },
            {
              icon: icon4,
              title: "IT Consulting",
              description:
                "Analyze business needs, recommend tailored cloud solutions, and guide strategic decisions to improve efficiency and drive innovation.",
            },
            {
              icon: icon5,
              title: "Network Support",
              description:
                "Monitor, maintain, and troubleshoot cloud network systems to ensure reliable connectivity, security, and optimal performance.",
            },
          ]}
        />

        <CloudServicesSection
          title="Get in Touch "
          highlight="with Moonstack"
          subtitle="Are you ready to embrace flawless IT support services? Please get in touch with Moonstack now to learn more about our IT services in this valuable journey of your business, and we shall assist you in every difficult situation to stand by you with pride. This ranges from data backup and recovery services to server administration and the complete IT solutions that you require."
          services={[]}
        />

        <CloudTimeline
          title="Bringing the best IT"
          highlight="Agency To You."
          subtitle=""
          steps={[
            {
              number: "01",
              title: " Client Consultation",
              description:
                "We begin by understanding your unique business needs, challenges, and goals through in-depth consultations. This helps us tailor our IT support services to align perfectly with your objectives, ensuring a seamless and efficient partnership.",
              position: "right",
            },
            {
              number: "02",
              title: " Strategy Development",
              description:
                "Our experts craft a customized IT strategy designed to optimize your operations, enhance productivity, and future-proof your business. We focus on scalable solutions that grow with your organization while addressing immediate IT requirements.",
              position: "left",
            },
            {
              number: "03",
              title: " Market Research",
              description:
                "We conduct thorough market research to identify industry trends, competitor strategies, and technological advancements. This ensures that the IT solutions we recommend are not only innovative but also relevant to your business landscape.",
              position: "right",
            },
            {
              number: "04",
              title: " Campaign Planning",
              description:
                "For businesses leveraging IT for marketing or operational campaigns, we assist in planning and integrating IT infrastructure to support your initiatives.",
              position: "left",
            },
          ]}
        />

   
        <FAQSection
          title="Frequently Asked"
          highlight="Questions."
          description="To decide means to choose a direction with clarity and confidence. It’s the process of thinking through different possibilities, understanding what truly matters, and then taking a stand. Every decision."
          faqs={accordionData}
        />
      </Layout>
    </>
  );
};
export default ItSupportService;

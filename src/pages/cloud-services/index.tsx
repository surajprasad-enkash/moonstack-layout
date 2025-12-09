import Layout from "@/components/Layout";
import importanceImg from "../../../public/assets/backend-importance.webp";
import icon1 from "../../../public/assets/cloud-services/TechnicalImplementationIcon.svg";
import icon2 from "../../../public/assets/cloud-services/TechnicalImplementationIcon.svg";
import icon3 from "../../../public/assets/cloud-services/TechnicalImplementationIcon.svg";
import icon4 from "../../../public/assets/cloud-services/TechnicalImplementationIcon.svg";
import icon5 from "../../../public/assets/cloud-services/TechnicalImplementationIcon.svg";
import React from "react";
import BgImg from "../../../public/assets/cloud-services/banner-bg.png"; // Adjust the path as needed
import heroImg from "../../../public/assets/cloud-services/banner-right-4.webp"; // Adjust the path as needed

import {
  ServicesContentSection as ServicesContent,
  accordionData,
} from "../../constants/cloud-services";

import EdgeToolsSection from "@/components/Sections/CloudServices/EdgeToolsSection/EdgeToolsSection";
import CloudServicesSection from "@/components/Sections/CloudServices/CloudServicesSection/CloudServicesSection";
import CloudTimeline from "@/components/Sections/CloudServices/CloudTimeline/CloudTimeline";
import ServicesContentSection from "@/components/Sections/CloudServices/ServicesContentSection/ServicesContentSection";
import HeroCloudSection from "@/components/Sections/CloudServices/BannerSection/BannerSection";
import FAQSection from "@/components/Sections/FaqSection/FaqSection";
const cloudServices = () => {
  return (
    <>
      <Layout>
        <HeroCloudSection
          title={[
            {
              text: "Transforming Ideas into Reality with Moonstack's ",
              className: ""
            },
            { text: "Custom Product Design Services", color: "", className:"highlight-text block" },
            
          ]}
          marginRight="md:mr-[-80px]"
          description="The fox is a smart and clever animal known for its quick movements and sharp instincts. It lives in forests, grasslands, and even near cities. With its bright orange fur, bushy tail, and pointed ears, the fox is easy to recognize. It hunts mainly at night and eats small animals, fruits, and insects."
          buttonText="Connect With Us"
          buttonUrl="/contact"
          image={heroImg}
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
          title="Flawless UI and UX Design in USA:"
          highlight="Artistry with Accurateness"
          subtitle=""
          services={[
            {
              number: "01",
              title: "End-to-End Services",
              description:
                "Our user experience design company is highly creative in making designs that can relate to local consumers in India. The importance of the Indian market is fully understood, and this means the creation of products that meet each and every consumer’s expectations. Whether you are a young company or a large business, we will help you design efficient UI and UX enhancing your company’s productivity",
            },
            {
              number: "02",
              title: "Boost Your Online Presence",
              description:
                "We at Moonstack deliver innovative UI and UX design services to mobilize clients across industries to create new designs that better suit the target users and improve on their engagement. Great attention is paid to the fact that our team’s goal is to create digital products that are efficient and visually appealing but also oriented to the USA cultural context and consumer values.",
            },
          ]}
        />

        <CloudTimeline
          title="Bringing the best cloud solution"
          highlight="Agency To You."
          subtitle=""
          steps={[
            {
              number: "01",
              title: "Discovery & Research",
              description:
                "Research user needs, market trends, and business goals through interviews, surveys, and analysis to define the product vision and scope.",
              position: "right",
            },
            {
              number: "02",
              title: "Concept & Structure",
              description:
                "Create wireframes to outline the product’s structure, functionality, and user flows, forming the foundation for the experience.",
              position: "left",
            },
            {
              number: "03",
              title: "Design & Systems",
              description:
                "Design intuitive, visually appealing UI/UX and build scalable design systems to ensure consistency and strong brand alignment.",
              position: "right",
            },
            {
              number: "04",
              title: "Prototyping & Validation",
              description:
                "Develop interactive prototypes and conduct usability testing with real users to validate concepts and identify improvements.",
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
export default cloudServices;

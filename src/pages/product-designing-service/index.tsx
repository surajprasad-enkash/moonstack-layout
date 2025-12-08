import Layout from "@/components/Layout";
import icon1 from "../../../public/assets/product-designing-service/TechnicalImplementationIcon.svg";
import icon2 from "../../../public/assets/product-designing-service/TechnicalImplementationIcon.svg";
import icon3 from "../../../public/assets/product-designing-service/TechnicalImplementationIcon.svg";
import icon4 from "../../../public/assets/product-designing-service/TechnicalImplementationIcon.svg";
import icon5 from "../../../public/assets/product-designing-service/TechnicalImplementationIcon.svg";
import React from "react";
import BgImg from "../../../public/assets/product-designing-service/banner-bg.png"; // Adjust the path as needed
import heroImg from "../../../public/assets/product-designing-service/banner-right-4.webp"; // Adjust the path as needed


import {
  ServicesContentSection as ServicesContent,
  accordionData,
} from "./data";

import FAQ from "@/components/Homepage/FAQ";
import EdgeToolsSection from "@/components/Sections/CloudServices/EdgeToolsSection/EdgeToolsSection";
import CloudServicesSection from "@/components/Sections/CloudServices/CloudServicesSection/CloudServicesSection";
import CloudTimeline from "@/components/Sections/CloudServices/CloudTimeline/CloudTimeline";
import ServicesContentSection from "@/components/Sections/CloudServices/ServicesContentSection/ServicesContentSection";
import HeroCloudSection from "@/components/Sections/CloudServices/BannerSection/BannerSection";
import FAQSection from "@/components/Sections/FaqSection/FaqSection";

const ProductDesigningService = () => {
  return (
    <>
 
      <Layout>
        <HeroCloudSection
          title={[
            {
              text: "Moonstack: Trusted",
              className: ""
            },
            { text: "Cloud Service Providers", color: "", className:"highlight-text block" },
            {
              text: "in India and USA", color: "#fff",
              className: ""
            },
          ]}
          padding="150px 0px 100px 0px"
          description="The fox is a smart and clever animal known for its quick movements and sharp instincts. It lives in forests, grasslands, and even near cities. With its bright orange fur, bushy tail, and pointed ears, the fox is easy to recognize. It hunts mainly at night and eats small animals, fruits, and insects.."
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
          title="Flawless Product Design Service in "
          highlight="USA: The Art of Innovation"
          subtitle="At Moonstack, we work on product design and development, and we help your ideas get materialized through unique design and perfect execution. Our staff is always focused on the goal, which is to achieve success, whether it is the introduction of a new product into the market or the redesign of an already existing product"
          services={[
            {
              number: "01",
              title: "Product Design Service India: Innovation Meets Practicality",
              description:
                "India is well known for its comparatively tougher terrain and lifestyle, hence, our Product Design Service in India is diverse. We aim our attention at those inventions that will be useful and unique for use in India, being resistant to the physical and climatic conditions in the country. We maintain an approach of proper market analysis and consumer trials, so that each product created can adequately prepare to meet the requirements of India.",
            },
            {
              number: "02",
              title: "Let's Create Something Extraordinary",
              description:
                "Collaborate with Moonstack for any product design and development solutions and feel the difference between innovation and creativity. If you are looking for Product Design Services in Jaipur, we have you covered. Call us today for concepts to create and experience astonishing outcomes with the help of Moonstack’s proficient product design solutions.",
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
            {
              number: "05",
              title: "Iteration, Collaboration & Delivery",
              description:
                "Refine designs based on feedback, collaborate closely with developers and stakeholders, and deliver final assets and guidelines for a smooth build and launch.",
              position: "right",
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
export default ProductDesigningService;

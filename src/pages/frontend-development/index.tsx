import Layout from "@/components/Layout";
import icon1 from "../../../public/assets/cloud-services/TechnicalImplementationIcon.svg";
import React from "react";
import BgImg from "../../../public/assets/cloud-services/banner-bg.png"; // Adjust the path as needed
import heroImg from "../../../public/assets/cloud-services/banner-right-4.webp"; // Adjust the path as needed

import {
  ServicesContentSection as ServicesContent,
  accordionData,
} from "../../constants/frontend-development";


import CloudTimeline from "@/components/Sections/CloudServices/CloudTimeline/CloudTimeline";
import HeroCloudSection from "@/components/Sections/CloudServices/BannerSection/BannerSection";
import FAQSection from "@/components/Sections/FaqSection/FaqSection";
import BenefitsSection from "@/components/Sections/BenefitsSection/BenefitsSection";

import banifitsImg from "../../../public/assets/frontend/benifits-img.png";
import OurServices from "@/components/Sections/OurServices/OurServices";
import arrow from '../../../public/assets/frontend/arrow.svg'

const cloudServices = () => {
  return (
    <>
      <Layout>
        <HeroCloudSection
          title={[
            {
              text: "Transforming Ideas into Reality with Moonstack's ",
              className: "",
            },
            {
              text: "Custom Product Design Services",
              color: "",
              className: "highlight-text block",
            },
          ]}
          marginRight="md:mr-[-80px]"
          description="The fox is a smart and clever animal known for its quick movements and sharp instincts. It lives in forests, grasslands, and even near cities. With its bright orange fur, bushy tail, and pointed ears, the fox is easy to recognize. It hunts mainly at night and eats small animals, fruits, and insects."
          buttonText="Connect With Us"
          buttonUrl="/contact"
          image={heroImg}
          bgImage={BgImg.src}
          bgColor=""
        />

        <BenefitsSection
          title="Benefits of"
          highlight="Choosing Us?"
          description="If you are looking for a perfect laptop picture on Freepik for your project, use specific search keywords that match your design style."
          image={banifitsImg.src}
          benefits={[
            {
              icon: icon1,
              title: "Responsive Design",
              desc: "Our frontend development team focuses on building.",
            },
            {
              icon: icon1,
              title: "Fast Performance",
              desc: "Our frontend development team focuses on building.",
            },
            {
              icon: icon1,
              title: "Cross-Compatible",
              desc: "Our frontend development team focuses on building.",
            },
            {
              icon: icon1,
              title: "SEO-Friendly",
              desc: "Our frontend development team focuses on building.",
            },
          ]}
        />
        <OurServices
          subtitle="Our Service"
          title="Our Frontend"
          highlight="Expertise"
          services={[
            {
              title: "Angular JS Development",
              desc: "If you are looking for a perfect laptop picture.",
              icon: arrow,
            },
            {
              title: "React.js Development",
              desc: "If you are looking for a perfect laptop picture.",
              icon: arrow,
            },
            {
              title: "Vue.js Development",
              desc: "If you are looking for a perfect laptop picture.",
              icon: arrow,
            },
            {
              title: "Javascript Development",
              desc: "If you are looking for a perfect laptop picture.",
              icon: arrow,
            },
            {
              title: "Html5 Development",
              desc: "If you are looking for a perfect laptop picture.",
              icon: arrow,
            },
            {
              title: "Css3 Development",
              desc: "If you are looking for a perfect laptop picture.",
              icon: arrow,
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

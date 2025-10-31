import revenue from "../../../public/assets/revenue.svg";
import sol1 from "../../../public/assets/sol1.svg";
import sol2 from "../../../public/assets/sol2.svg";
import sol3 from "../../../public/assets/sol3.svg";
import SliderOne from "../../../public/assets/sliderOne.webp";
import SliderTwo from "../../../public/assets/sliderTwo.webp";
import SliderThree from "../../../public/assets/SliderThree.webp";
import SliderFour from "../../../public/assets/sliderFour.webp";
import SliderFive from "../../../public/assets/SliderFive.webp";
import html from "../../../public/assets/htmlWithoutBg.svg";
import tabImg from "../../../public/assets/app-development-images/tab-img.webp";
import { IAccordionItem } from "@/components/Homepage/FAQ";

interface IServiceArray {
  image: string;
  title: string;
  desc: string;
}

export const utilisArr = [
  {
    image: html,
    category: "Mobile App",
    title: "Experienced in Multi-Platform App Development",
    desc: "At Moonstack, we have optimal experience in building native Android and iOS apps, as well as multi-platform React-Native apps and PWAs.",
  },
  {
    image: html,
    category: "Mobile App",
    title: "100% Custom Mobile App Solutions",
    desc: "We don’t believe in templates at Moonstack. Thanks to our experienced team of designers and developers, we build every app from scratch, ensuring unparalleled functionality and security across platforms.",
  },
  {
    image: html,
    category: "Mobile App",
    title: "Real World App Building Experience",
    desc: " Moonstack has worked with startups, SMEs, and even MNCs. This gives us real-world experience in managing our development to meet your business goals optimally.",
  },
  {
    image: html,
    category: "Mobile App",
    title: "Scalable Architecturet",
    desc: "All our apps are built for scalability without hampering existing functions. This allows our clients to grow and expand their apps as per business requirements without fail.",
  },
  {
    image: html,
    category: "Mobile App",
    title: "Transparent Development",
    desc: "We ensure our code is clean and accessible to the developers on board the project. Even after the app launch, we ensure the entire codebase is accessible to our client easily.",
  },
  {
    image: html,
    category: "Frontend",
    title: "Intent Focused UI/UX Design",
    desc: "At Moonstack, we ensure our design principles are focused on practicality and user ease of use. We work tirelessly on our app designs to ensure each interface is clean, professional, and easy to use with optimal functionality.",
  },

  {
    image: html,
    category: "Frontend",
    title: "Experienced in Multi-Platform App Development",
    desc: "At Moonstack, we have optimal experience in building native Android and iOS apps, as well as multi-platform React-Native apps and PWAs.",
  },
  {
    image: html,
    category: "Frontend",
    title: "100% Custom Mobile App Solutions",
    desc: "We don’t believe in templates at Moonstack. Thanks to our experienced team of designers and developers, we build every app from scratch, ensuring unparalleled functionality and security across platforms.",
  },
  {
    image: html,
    category: "Frontend",
    title: "Real World App Building Experience",
    desc: " Moonstack has worked with startups, SMEs, and even MNCs. This gives us real-world experience in managing our development to meet your business goals optimally.",
  },
  {
    image: html,
    category: "Frontend",
    title: "Scalable Architecturet",
    desc: "All our apps are built for scalability without hampering existing functions. This allows our clients to grow and expand their apps as per business requirements without fail.",
  },
  {
    image: html,
    category: "Frontend",
    title: "Transparent Development",
    desc: "We ensure our code is clean and accessible to the developers on board the project. Even after the app launch, we ensure the entire codebase is accessible to our client easily.",
  },
  {
    image: html,
    category: "Frontend",
    title: "Intent Focused UI/UX Design",
    desc: "At Moonstack, we ensure our design principles are focused on practicality and user ease of use. We work tirelessly on our app designs to ensure each interface is clean, professional, and easy to use with optimal functionality.",
  },
  {
    image: html,
    category: "Backend",
    title: "Experienced in Multi-Platform App Development",
    desc: "At Moonstack, we have optimal experience in building native Android and iOS apps, as well as multi-platform React-Native apps and PWAs.",
  },
  {
    image: html,
    category: "Backend",
    title: "100% Custom Mobile App Solutions",
    desc: "We don’t believe in templates at Moonstack. Thanks to our experienced team of designers and developers, we build every app from scratch, ensuring unparalleled functionality and security across platforms.",
  },
  {
    image: html,
    category: "Backend",
    title: "Real World App Building Experience",
    desc: " Moonstack has worked with startups, SMEs, and even MNCs. This gives us real-world experience in managing our development to meet your business goals optimally.",
  },
  {
    image: html,
    category: "Backend",
    title: "Scalable Architecturet",
    desc: "All our apps are built for scalability without hampering existing functions. This allows our clients to grow and expand their apps as per business requirements without fail.",
  },
  {
    image: html,
    category: "Backend",
    title: "Transparent Development",
    desc: "We ensure our code is clean and accessible to the developers on board the project. Even after the app launch, we ensure the entire codebase is accessible to our client easily.",
  },
  {
    image: html,
    category: "Backend",
    title: "Intent Focused UI/UX Design",
    desc: "At Moonstack, we ensure our design principles are focused on practicality and user ease of use. We work tirelessly on our app designs to ensure each interface is clean, professional, and easy to use with optimal functionality.",
  },
  {
    image: html,
    category: "Devops",
    title: "Experienced in Multi-Platform App Development",
    desc: "At Moonstack, we have optimal experience in building native Android and iOS apps, as well as multi-platform React-Native apps and PWAs.",
  },
  {
    image: html,
    category: "Devops",
    title: "100% Custom Mobile App Solutions",
    desc: "We don’t believe in templates at Moonstack. Thanks to our experienced team of designers and developers, we build every app from scratch, ensuring unparalleled functionality and security across platforms.",
  },
  {
    image: html,
    category: "Devops",
    title: "Real World App Building Experience",
    desc: " Moonstack has worked with startups, SMEs, and even MNCs. This gives us real-world experience in managing our development to meet your business goals optimally.",
  },
  {
    image: html,
    category: "Devops",
    title: "Scalable Architecturet",
    desc: "All our apps are built for scalability without hampering existing functions. This allows our clients to grow and expand their apps as per business requirements without fail.",
  },
  {
    image: html,
    category: "Devops",
    title: "Transparent Development",
    desc: "We ensure our code is clean and accessible to the developers on board the project. Even after the app launch, we ensure the entire codebase is accessible to our client easily.",
  },
  {
    image: html,
    category: "Devops",
    title: "Intent Focused UI/UX Design",
    desc: "At Moonstack, we ensure our design principles are focused on practicality and user ease of use. We work tirelessly on our app designs to ensure each interface is clean, professional, and easy to use with optimal functionality.",
  },
  {
    image: html,
    category: "SEO",
    title: "Experienced in Multi-Platform App Development",
    desc: "At Moonstack, we have optimal experience in building native Android and iOS apps, as well as multi-platform React-Native apps and PWAs.",
  },
  {
    image: html,
    category: "SEO",
    title: "100% Custom Mobile App Solutions",
    desc: "We don’t believe in templates at Moonstack. Thanks to our experienced team of designers and developers, we build every app from scratch, ensuring unparalleled functionality and security across platforms.",
  },
  {
    image: html,
    category: "SEO",
    title: "Real World App Building Experience",
    desc: " Moonstack has worked with startups, SMEs, and even MNCs. This gives us real-world experience in managing our development to meet your business goals optimally.",
  },
  {
    image: html,
    category: "SEO",
    title: "Scalable Architecturet",
    desc: "All our apps are built for scalability without hampering existing functions. This allows our clients to grow and expand their apps as per business requirements without fail.",
  },
  {
    image: html,
    category: "SEO",
    title: "Transparent Development",
    desc: "We ensure our code is clean and accessible to the developers on board the project. Even after the app launch, we ensure the entire codebase is accessible to our client easily.",
  },
  {
    image: html,
    category: "SEO",
    title: "Intent Focused UI/UX Design",
    desc: "At Moonstack, we ensure our design principles are focused on practicality and user ease of use. We work tirelessly on our app designs to ensure each interface is clean, professional, and easy to use with optimal functionality.",
  },
];

export const slides = [
  {
    image: SliderOne,
    title: "Web Designing",
    desc: "Earney is a financial solution Our UI design approach focuses on creating.",
  },
  {
    image: SliderTwo,
    title: "Mobile Development",
    desc: "Earney is a financial solution...",
  },
  {
    image: SliderThree,
    title: "Cloud Service",
    desc: "Earney is a financial solution...",
  },
  {
    image: SliderOne,
    title: "Web Designing",
    desc: "Earney is a financial solution Our UI design approach focuses on creating.",
  },
  {
    image: SliderFour,
    title: "Frontend Development",
    desc: "Earney is a financial solution...",
  },
  {
    image: SliderFive,
    title: "Backend Development",
    desc: "Earney is a financial solution...",
  },
];

export const featuresData = [
  {
    imgSrc: revenue,
    title: "Mobile App Development",
    description:
      "Our mobile app consulting services in India can be utilised to develop any mobile application you need. We offer custom mobile app development services in India.",
  },
  {
    imgSrc: revenue,
    title: "Android App Development",
    description:
      "Moonstack offers high-performance mobile app development services in India. Our mobile application developers in India work alongside top designers to create a consistent front-end design for your Android applications.",
  },
  {
    imgSrc: revenue,
    title: "iOS App Development",
    description:
      "Moonstack offers the best mobile app development services in India for iOS development. Our team of top mobile app developers in India is experienced in developing iOS applications for all Apple devices.",
  },
  {
    imgSrc: revenue,
    title: "React Native App Development",
    description:
      "If you’re looking for affordable mobile app development services in India, our React native app development services are perfect for you. This is one of our most sought-after services for mobile app design and development in India.",
  },
  {
    imgSrc: revenue,
    title: "Progressive Web App (PWA) Development",
    description:
      "Our on-demand mobile app development service in India for progressive web apps is reliable, secure, and offers unmatched functionality with minimal friction for users.",
  },
  {
    imgSrc: revenue,
    title: "App Maintenance & Post Deployment Support",
    description:
      "As a part of our mobile app development for startups in India, at Moonstack, we offer ongoing app maintenance and post-deployment support.",
  },
];

export const infoData = [
  {
    icon: sol1,
    title: "Generate Leads",
    description: "Our frontend development team focuses on building.",
  },
  {
    icon: sol2,
    title: "Generate Leads",
    description: "Our frontend development team focuses on building.",
  },
  {
    icon: sol3,
    title: "Generate Leads",
    description: "Our frontend development team focuses on building.",
  },
];

export const servicesArr: IServiceArray[] = [
  {
    image: revenue,
    title: "Web Designing",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: revenue,
    title: "Mobile Development",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: revenue,
    title: "Cloud Service",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: revenue,
    title: "Frontend Development",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: revenue,
    title: "Backend Development",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
];

export const processSteps = [
  {
    title: "Initial Discussion & Understanding Project Scope",
    description:
      "We get to work right from the first discussion to help you get started. Whether you’re trying to hire mobile app developers in India through Moonstack or you’re interested in our full-service app development solutions to outsource mobile app development in India, we can do it all. We also take confidentiality very seriously, which is why we sign a Non-Disclosure Agreement (NDA) with our clients to ensure they can trust us with their app ideas confidently.",
  },
  {
    title: "Research & Prototyping",
    description:
      "Our experienced mobile app developers in India create every app from scratch, methodically creating a truly custom application that’s built specifically as per your security, design, and functionality specifications. Whether it is a cross-platform Native-React application or a native Android or iOS app, our QA engineers follow a strict quality standard to ensure there are no bugs or performance issues in your app.",
  },
  {
    title: "Development & Testing",
    description:
      "Our experienced mobile app developers in India create every app from scratch, methodically creating a truly custom application that’s built specifically as per your security, design, and functionality specifications. Whether it is a cross-platform Native-React application or a native Android or iOS app, our QA engineers follow a strict quality standard to ensure there are no bugs or performance issues in your app.",
  },
  {
    title: "Deployment & Launch Support",
    description:
      "As a part of our enterprise mobile app solutions in India, once the mobile application has passed testing and quality standards, we offer complete launch support to our clients. This includes the deployment of the apps on popular app stores like Google Play Store and Apple App Store. We also help our clients optimise their app listings on app stores to improve visibility and help with a successful app launch. We also offer app maintenance and monitoring support to our clients after the app launch is complete.",
  },
];

export const accordionData: IAccordionItem[] = [
  {
    title: "What is the cost to develop a mobile app in India?",
    desc: "While it is not possible to put a number directly, it is generally maintained that cross-platform React-Native apps are more affordable to build than dedicated native Android or iOS apps.",
  },
  {
    title: "Which company is best for app development in India?",
    desc: "Moonstack is the best mobile app development company in India, with years of experience in offering full-service, affordable mobile app development services in India.",
  },
  {
    title: "What is the best approach for app development in India?",
    desc: "The best approach for app building is generally considered to be native app development as it ensures maximum platform-specific features and backend security.",
  },
  {
    title: "Does Moonstack make commercial apps with e-commerce functionality?",
    desc: "Yes, we have experience building commercial apps with full payment gateway integration and e-commerce functionality. We can even help our clients create e-commerce apps from their Shopify stores.",
  },
  {
    title: "Can I hire developers from Moonstack to join my in-house team?",
    desc: "Yes, if you want to hire a mobile app developer in India from our team, it is possible to do so with our liaison program that allows clients to contractually hire our team members for in-house development projects.",
  },
];

export const points = [
  "At Moonstack, we understand the power of mobile applications and deliver complete end-to-end mobile app solutions in India for businesses. When built right, mobile apps can scale businesses and build brands. They are the most direct connection customers have with brands and a gateway to customer retention and business growth.",
  "As a premier mobile app development company in India, we excel in building custom Android, iOS, web, and cross-platform apps tailored to your business goals. Our team consists of developers, UI designers, and UX specialists who collaborate to build scalable apps with robust and secure backend systems and intuitive front-end design over a scalable architecture.",
  "From helping startups develop their MVP concepts to working with MNCs seeking enterprise mobile app solutions in India, we’ve worked across industries such as e-commerce, healthcare, finance, and logistics with great success. So, if you’re looking for an experienced mobile app development agency in India that offers an optimal balance of technical expertise and design fluency, choose Moonstack today",
];

export const tabs = [
  {
    title: "Custom Solutions",
    description:
      "Moonstack. We pride ourselves on being the best Android app development company in India...",
    image: tabImg,
    imgHeight: "492px",
  },
  {
    title: "End-to-End Solutions",
    description: "Full lifecycle app development...",
    image: tabImg,
    imgHeight: "492px",
  },
  {
    title: "Highly Qualified Developers",
    description: "Our team consists of highly skilled developers...",
    image: tabImg,
    imgHeight: "492px",
  },
  {
    title: "Focus on User Intent",
    description: "We prioritize the user experience in every app...",
    image: tabImg,
    imgHeight: "492px",
  },
  {
    title: "Production Transparency",
    description: "We maintain transparency during development...",
    image: tabImg,
    imgHeight: "492px",
  },
  {
    title: "Maintenance & Support",
    description: "Reliable post-launch support and maintenance...",
    image: tabImg,
    imgHeight: "492px",
  },
];

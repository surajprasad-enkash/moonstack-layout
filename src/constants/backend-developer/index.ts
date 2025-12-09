import revenue from "../../../public/assets/revenue.svg";
import sol1 from "../../../public/assets/sol1.svg";
import sol2 from "../../../public/assets/sol2.svg";
import sol3 from "../../../public/assets/sol3.svg";
import arrowUp from "../../../public/assets/arrow-up.svg";
import SliderOne from "../../../public/assets/sliderOne.webp";
import SliderTwo from "../../../public/assets/sliderTwo.webp";
import SliderThree from "../../../public/assets/SliderThree.webp";
import SliderFour from "../../../public/assets/sliderFour.webp";
import SliderFive from "../../../public/assets/SliderFive.webp";
import html from "../../../public/assets/htmlWithoutBg.svg";
import { IAccordionItem } from "@/components/Homepage/FAQ";

interface IServiceArray {
  image: string;
  title: string;
  desc: string;
}

export const utilisArr = [
  {
    image: html,
    title: "Web Designing",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
    category: "service",
  },
  {
    image: html,
    title: "Mobile Development",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
    category: "service",
  },
  {
    image: html,
    title: "Cloud Service",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
    category: "service",
  },
  {
    image: html,
    title: "Frontend Development",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
    category: "service",
  },
  {
    image: html,
    title: "Backend Development",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
    category: "service",
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
    title: "Generate Leads",
    description: "Our frontend development team focuses on building.",
  },
  {
    imgSrc: revenue,
    title: "Generate Leads",
    description: "Our frontend development team focuses on building.",
  },
  {
    imgSrc: revenue,
    title: "Generate Leads",
    description: "Our frontend development team focuses on building.",
  },
  {
    imgSrc: revenue,
    title: "Generate Leads",
    description: "Our frontend development team focuses on building.",
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

export const points = [
  "Creates first impressions that captivate users.",
  "Boosts engagement and improves user retention.",
  "Enhances overall brand credibility.",
  "Enhances overall brand credibility user retention.",
];

export const servicesArr: IServiceArray[] = [
  {
    image: arrowUp,
    title: "Web Designing",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: arrowUp,
    title: "Mobile Development",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: arrowUp,
    title: "Cloud Service",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: arrowUp,
    title: "Frontend Development",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: arrowUp,
    title: "Backend Development",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
];

export const accordionData: IAccordionItem[] = [
  {
    title: "Do you provide post-launch support?",
    desc: "Yes, we offer 24/7 support.",
  },
  {
    title: "Can I request custom features?",
    desc: "Absolutely, we customize solutions per your needs.",
  },
  {
    title: "What technologies do you use?",
    desc: "We use React, Next.js, Node.js, and more.",
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

export default {}
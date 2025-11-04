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
import flutterIcon from "../../../public/assets/flutter-icon.svg";
import swiftIcon from "../../../public/assets/swift-icon.svg";
import angularIcon from "../../../public/assets/angular-icon.svg";
import nextIcon from "../../../public/assets/next-icon.svg";
import jsIcon from "../../../public/assets/js-icon.svg";
import dotNetIcon from "../../../public/assets/dotNet-icon.svg";
import javaIcon from "../../../public/assets/java-icon.svg";
import phpIcon from "../../../public/assets/php-icon.svg";
import pythonIcon from "../../../public/assets/python-icon.svg";
import cakePhpIcon from "../../../public/assets/cake-php-icon.svg";
import laravelIcon from "../../../public/assets/laravel-icon.svg";
import codeIgniteIcon from "../../../public/assets/codeIgnite-icon.svg";
import cssIcon from "../../../public/assets/css-icon.svg";
import dockerIcon from "../../../public/assets/docker-icon.svg";
import kubernetesIcon from "../../../public/assets/kubernetes-icon.svg";
import azureIcon from "../../../public/assets/azure-kubernetes-service.svg";
import cloudIcon from "../../../public/assets/cloud-icon.svg";
import microsoftIcon from "../../../public/assets/microsoft-azure-icon.svg";
import adobeIcon from "../../../public/assets/adobe-xd.svg";
import illustatorIcon from "../../../public/assets/iullustrator.svg";
import framerIcon from "../../../public/assets/framer-icon.svg";
import sketchIcon from "../../../public/assets/sketch.svg";
import photoshopIcon from "../../../public/assets/photoshop-icon.svg";
import googleAnalyticsIcon from "../../../public/assets/google-analytics-icon.svg";
import ahrefsIcon from "../../../public/assets/ahrefs-icon.svg";
import mozIcon from "../../../public/assets/moz-icon.svg";
import ubersuggestIcon from "../../../public/assets/ubersuggest-icon.svg";
import grammerlyIcon from "../../../public/assets/grammerly-icon.svg";
import woorankIcon from "../../../public/assets/woorank-icon.svg";
import androidIcon from "../../../public/assets/android-icon.svg";
import iosIcon from "../../../public/assets/ios-icon.svg";
import reactIcon from "../../../public/assets/react-icon.svg";
import pwaIcon from "../../../public/assets/pwa-icon.svg";
import nodeIcon from "../../../public/assets/node-icon.svg";
import awsIcon from "../../../public/assets/aws-icon.svg";
import figmaIcon from "../../../public/assets/figma-icon.svg";
import { IAccordionItem } from "@/components/Homepage/FAQ";
import { Step } from "@/components/Seo/StepperComponent";

interface IServiceArray {
  image: string;
  title: string;
  desc: string;
}

export const utilisArr = [
  {
    image: androidIcon,
    category: "Mobile App",
    title: "Android Development",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: iosIcon,
    category: "Mobile App",
    title: "iOS Development",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: reactIcon,
    category: "Mobile App",
    title: "React Native App Development",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: flutterIcon,
    category: "Mobile App",
    title: "Flutter",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: pwaIcon,
    category: "Mobile App",
    title: "PWA Development",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: swiftIcon,
    category: "Mobile App",
    title: "Swift",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: angularIcon,
    category: "Frontend",
    title: "AngularJs Development",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: reactIcon,
    category: "Frontend",
    title: "ReactJS Development",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: nextIcon,
    category: "Frontend",
    title: "Next.js",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: jsIcon,
    category: "Frontend",
    title: "JavaScript",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: html,
    category: "Frontend",
    title: "HTML5 Development",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: cssIcon,
    category: "Frontend",
    title: "CSS3",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: nodeIcon,
    category: "Backend",
    title: "NodeJS Development",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: dotNetIcon,
    category: "Backend",
    title: ".NET",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: phpIcon,
    category: "Backend",
    title: "PHP",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: javaIcon,
    category: "Backend",
    title: "Java",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: pythonIcon,
    category: "Backend",
    title: "Python",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: laravelIcon,
    category: "Backend",
    title: "Laravel",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: cakePhpIcon,
    category: "Backend",
    title: "CakePHP Development",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: codeIgniteIcon,
    category: "Backend",
    title: "CodeIgniter Development",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: dockerIcon,
    category: "Devops",
    title: "Docker",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: kubernetesIcon,
    category: "Devops",
    title: "Kubernetes",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: azureIcon,
    category: "Devops",
    title: "Azure Service",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: cloudIcon,
    category: "Devops",
    title: "Google Cloud Platform",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: awsIcon,
    category: "Devops",
    title: "Amazon Web Services",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: microsoftIcon,
    category: "Devops",
    title: "Microsoft Azure",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: googleAnalyticsIcon,
    category: "SEO",
    title: "Google Analytics",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: ahrefsIcon,
    category: "SEO",
    title: "Ahrefs",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: mozIcon,
    category: "SEO",
    title: "Moz",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: ubersuggestIcon,
    category: "SEO",
    title: "Ubersuggest",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: grammerlyIcon,
    category: "SEO",
    title: "Grammerly",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: woorankIcon,
    category: "SEO",
    title: "Woorank",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: figmaIcon,
    category: "UI/UX",
    title: "Figma",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: adobeIcon,
    category: "UI/UX",
    title: "Adobe Xd",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: photoshopIcon,
    category: "UI/UX",
    title: "Photoshop",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: illustatorIcon,
    category: "UI/UX",
    title: "Illustrator",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: framerIcon,
    category: "UI/UX",
    title: "Framer",
    desc: "At Moonstack, we believe in building technology.",
  },
  {
    image: sketchIcon,
    category: "UI/UX",
    title: "Sketch",
    desc: "At Moonstack, we believe in building technology.",
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

import sol1 from "../../../public/assets/sol1.svg";
import sol2 from "../../../public/assets/sol2.svg";
import sol3 from "../../../public/assets/sol3.svg";
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
import serviceIconOne from "../../../public/assets/ios-green-icon.svg";
import serviceIconTwo from "../../../public/assets/android-green-icon.svg";
import serviceIconThree from "../../../public/assets/mobile-green-icon.svg";
import serviceIconFour from "../../../public/assets/react-green-icon.svg";
import serviceIconFive from "../../../public/assets/pwa-green-icon.svg";
import serviceIconSix from "../../../public/assets/maintanance-green-icon.svg";
import featureIconOne from "../../../public/assets/app-development-images/why-choose-icon-one.svg";
import featureIconTwo from "../../../public/assets/app-development-images/why-choose-icon-two.svg";
import featureIconThree from "../../../public/assets/app-development-images/why-choose-icon-three.svg";
import featureIconFour from "../../../public/assets/app-development-images/why-choose-icon-four.svg";
import featureIconFive from "../../../public/assets/app-development-images/why-choose-icon-five.svg";

import tabImg from "../../../public/assets/app-development-images/tab-img.webp";
import { IAccordionItem } from "@/components/Homepage/FAQ";

interface IServiceArray {
  image: string;
  title: string;
  desc: string;
}

interface ProcessStep {
  title: string;
  description: string;
  position: "left" | "right"; // controls layout
  number: number; // step number
}

interface ProcessStepsData {
  headingText: string;
  subHeadingText: string;
  steps: ProcessStep[];
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
    title: "React Native ",
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
    imgSrc: featureIconOne,
    title: "Experienced in Multi-Platform App Development",
    description:
      "At Moonstack, we have optimal experience in building native Android and iOS apps, as well as multi-platform React-Native apps and PWAs.",
  },
  {
    imgSrc: featureIconTwo,
    title: "100% Custom Mobile App Solutions",
    description:
      "We don’t believe in templates at Moonstack. Thanks to our experienced team of designers and developers, we build every app from scratch, ensuring unparalleled functionality and security across platforms.",
  },
  {
    imgSrc: featureIconThree,
    title: "Real World App Building Experience",
    description:
      "Moonstack has worked with startups, SMEs, and even MNCs. This gives us real-world experience in managing our development to meet your business goals optimally.",
  },
  {
    imgSrc: featureIconFour,
    title: "Scalable Architecture",
    description:
      "All our apps are built for scalability without hampering existing functions. This allows our clients to grow and expand their apps as per business requirements without fail.",
  },
  {
    imgSrc: featureIconFive,
    title: "Transparent Development",
    description:
      "We ensure our code is clean and accessible to the developers on board the project. Even after the app launch, we ensure the entire codebase is accessible to our client easily.",
  },
  {
    imgSrc: serviceIconThree,
    title: "Intent Focused UI/UX Design",
    description:
      "At Moonstack, we ensure our design principles are focused on practicality and user ease of use. We work tirelessly on our app designs to ensure each interface is clean, professional, and easy to use with optimal functionality.",
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
    image: serviceIconTwo,
    title: "Android App Development",
    desc: "Moonstack offers high-performance mobile app development services in India. Our mobile application developers in India work alongside top designers to create a consistent front-end design for your Android applications.",
  },
  {
    image: serviceIconOne,
    title: "iOS App Development",
    desc: "Moonstack offers the best mobile app development services in India for iOS development. Our team of top mobile app developers in India is experienced in developing iOS applications for all Apple devices.",
  },
  {
    image: serviceIconFour,
    title: "React Native App Development",
    desc: "If you’re looking for affordable mobile app development services in India, our React native app development services are perfect for you. This is one of our most sought-after services for mobile app design and development in India.",
  },
  {
    image: serviceIconFive,
    title: "Progressive Web App (PWA) Development",
    desc: "Our on-demand mobile app development service in India for progressive web apps is reliable, secure, and offers unmatched functionality with minimal friction for users.",
  },
  {
    image: serviceIconThree,
    title: "App Maintenance & Post Deployment Support",
    desc: "As a part of our mobile app development for startups in India, at Moonstack, we offer ongoing app maintenance and post-deployment support.",
  },
];

export const processSteps: ProcessStepsData = {
  headingText: "Our Process",
  subHeadingText: "From idea to deployment",
  steps: [
    {
      number: 1,
      title: "Initial Discussion & Understanding Project Scope",
      description:
        "We get to work right from the first discussion to help you get started. Whether you want to hire mobile app developers in India through Moonstack or need full-service mobile app development solutions, we can do it all. We also sign a Non-Disclosure Agreement (NDA) to ensure complete confidentiality and protect your app idea.",
      position: "left",
    },
    {
      number: 2,
      title: "Research & Prototyping",
      description:
        "After formalities, we begin with detailed market and industry research based on your app idea. We then create a project roadmap and a wireframe of the application. Our research helps identify market opportunities, ensuring your product meets user needs and offers an exceptional user experience.",
      position: "right",
    },
    {
      number: 3,
      title: "Development & Testing",
      description:
        "Our skilled mobile app developers in India build every application from scratch as per your design, security, and functionality specifications. Whether it’s a cross-platform Native-React app or a native Android/iOS application, our QA engineers ensure strict quality standards, eliminating bugs and performance issues.",
      position: "left",
    },
    {
      number: 4,
      title: "Deployment & Launch Support",
      description:
        "Once the app passes all quality checks, we provide complete launch support — including deployment on the Google Play Store and Apple App Store. We also optimise your app listing for better visibility and help with a successful launch. Post-launch, we offer maintenance and monitoring support.",
      position: "right",
    },
  ],
};

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
  "As a premier mobile app development company in India, we excel in building custom Android, iOS, web, and cross-platform apps tailored to your business goals. Our team consists of developers, UI designers, and UX specialists who collaborate to build scalable apps with robust and secure backend systems and intuitive front-end design over a scalable architecture.",
  "From helping startups develop their MVP concepts to working with MNCs seeking enterprise mobile app solutions in India, we’ve worked across industries such as e-commerce, healthcare, finance, and logistics with great success. So, if you’re looking for an experienced mobile app development agency in India that offers an optimal balance of technical expertise and design fluency, choose Moonstack today",
  "At Moonstack, we understand the power of mobile applications and deliver complete end-to-end mobile app solutions in India for businesses. When built right, mobile apps can scale businesses and build brands. They are the most direct connection customers have with brands and a gateway to customer retention and business growth.",
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

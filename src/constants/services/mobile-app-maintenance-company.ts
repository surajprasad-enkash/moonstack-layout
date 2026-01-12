import { PageData } from "@/types/web-development-data-type";
import androidBannerImg from "public/assets/app-development-images/android-banner.webp";

import managementImg from "public/assets/app-development-images/mantainance-hero-img.webp";

import appMaintenanceLottie from "../../../public/lottie/app-maintenance.json";
import mobAppBanner from "public/assets/app-development-images/mob-design-banner.webp";
import mainIconOne from "public/assets/app-development-images/main-icon-one.webp";
import mainIconTwo from "public/assets/app-development-images/main-icon-two.webp";
import mainIconThree from "public/assets/app-development-images/main-icon-three.webp";
import maintenanceContactbannerImg from "public/assets/app-development-images/maintanance-contact-img.webp";

export const app_maintenance: PageData = {
  hero: {
    title: [
      {
        text: "Mobile App Maintenance ",
        color: "text-white",
      },

      {
        text: "Services in India",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Mobile applications require periodic maintenance and updates to function optimally. That’s why Moonstack offers the best mobile app maintenance services in India. Whether you’ve availed of our development services or not, we can help you maintain your app to the highest standards of security, stability, future-proof compatibility, and user experience. We even help apps fix bugs, optimise performance issues, and monitor analytics as a part of our app performance monitoring services in India.",
        color: "text-white",
      },
    ],

    image: managementImg,

    lottieData: appMaintenanceLottie,

    breadcrumbs: [
      { label: "Home", href: "/" },
      {
        label: " Application Development",
        href: "/application-development",
      },
      {
        label: "Android App Maintenance",
        href: "/application-development/android-app",
      },
    ],
  },
  mobDesignBanner: mobAppBanner,
  seo: {
    title: "Mobile App Maintenance & Support in India & USA | Moonstack",
    description:
      "Want mobile app maintenance Service? We provide ongoing updates, crash fixes, performance tuning, and OS compatibility support for your Android and iOS apps.",
    keywords:
      "Mobile app maintenance services India, Mobile app maintenance company India,  App support and maintenance India, App optimization services India",
    canonical:
      "https://www.moonstack.com/android-app-development-service/mobile-app-maintenance -service",
    ogImage: "/opengraph-image.png",
  },
  points:
    "As the premier mobile app maintenance company in India, we pride ourselves on offering bespoke maintenance solutions to our clients. Our team is led by dedicated maintenance and QA specialists who ensure your app’s code is routinely tested and updated to meet the highest standards of latest OS compatibility. We offer both Android and iOS app maintenance services in India, and if you’re interested, we can offer a mobile app AMC (annual maintenance contract) in India too for our clients. So, hurry and contact us today.",
  highlightText: "Android and iOS app maintenance services in India",

  solutions: {
    headingContent: [
      {
        text: "  Discover how efficient ",
        color: "text-white",
      },
      {
        text: "  Android App Developer  ",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: " company can affect your product",
        color: "text-white",
      },
    ],
    subHeadingText:
      "After 15+ years in the industry and 450+ projects completed, Moonstack has specialised expertise in providing services for app support and maintenance in India.",
  },
  featuresData: [
    {
      imgSrc: mainIconOne,
      title: "Performance Optimisation",
      description:
        "As a part of our Android app maintenance service in India and our mobile app troubleshooting service in India, we offer complete performance optimisation for the mobile apps we maintain. This includes removing bottlenecks and optimising backend processes.",
    },
    {
      imgSrc: mainIconTwo,
      title: "Feature Improvements",
      description:
        "Moonstack offers the most thorough app updates and upgrades service in India. Our mobile app enhancement service in India can be used to refine design elements, improve usability, and enhance features based on user feedback.",
    },
    {
      imgSrc: mainIconThree,
      title: "Security Improvements & Compliance",
      description:
        "Afraid of data breaches or corruption of user data? Avail of Moonstack’s app security maintenance services in India. We offer complete assistance in monitoring and fixing code vulnerabilities while ensuring OS and app store compatibility.",
    },
  ],

  processSteps: {
    headingText: [
      {
        text: " Our Application development ",
        color: "text-white",
      },
      {
        text: "   process wraps around ",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: " your unique business needs",
        color: "text-white",
      },
    ],
    subHeadingText:
      "Moonstack is the leading provider of app optimisation services in India. So, if you want to know what makes us the best, here’s an overview of how we provide tangible results to our clients.",
    steps: [],
  },

  accordionData: [
    {
      question: "What is mobile app maintenance?",
      answer:
        "Mobile app maintenance refers to continuous updates required to optimise an app’s performance, compatibility, and responsiveness across devices and platforms. It also includes fixing bugs and resolving performance issues to ensure a smooth user experience.",
    },
    {
      question: "How much does mobile app maintenance cost?",
      answer:
        "Mobile app maintenance is generally a fixed cost, with annual maintenance contracts typically ranging from 10% to 20% of the app’s original development cost. The final cost may vary depending on the level of maintenance and optimisation required.",
    },
    {
      question: "How long does mobile app maintenance take?",
      answer:
        "Mobile app maintenance is an ongoing process that involves monitoring analytics, reviewing user feedback, and continuously updating the app’s codebase. This helps prevent user experience issues and ensures long-term app stability.",
    },
    {
      question:
        "Does Moonstack offer a yearly mobile app maintenance contract?",
      answer:
        "Yes, Moonstack offers yearly mobile app maintenance (AMC) contracts. You can contact our team to learn more and receive a free AMC quotation tailored to your app’s requirements.",
    },
    {
      question:
        "Can Moonstack help fix performance issues and bugs as part of app maintenance?",
      answer:
        "Yes, Moonstack provides complete app optimisation services, including fixing performance issues and resolving bugs, as part of our mobile app maintenance services.",
    },
  ],

  banner: {
    headingText: [
      {
        text: "Opt for your custom Mobile App Maintenance services now",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: "Mobile App Maintenance services goes through different stages of work.",
        color: "text-white",
      },
    ],
    image: androidBannerImg,
  },
  quoteBanner: {
    headingText: [
      {
        text: "Don’t Let App Downtime Stagger Your Business: Choose Our App Optimisation Services in India at Moonstack",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: "Our third-party app maintenance and management services can ensure your app is optimally functioning at all times. ",
        color: "text-white",
      },
    ],
    image: maintenanceContactbannerImg,

    buttonText: "Connect with us",
  },
  whyChooseData: {
    headingText: "",
    subHeadingText: "",
    steps: [],
  },
  slides: [],
};

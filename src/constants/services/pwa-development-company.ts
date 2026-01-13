import { PageData } from "@/types/web-development-data-type";

import pwaImg from "@/assets/app-development-images/pwa-hero-img.webp";
import pwaLottie from "../../../public/lottie/pwa.json";
import mobAppBanner from "@/assets/app-development-images/mob-design-banner.webp";
import pwaBannerImg from "@/assets/app-development-images/pwa-banner-img.webp";
import iosContactbannerBg from "@/assets/app-development-images/ios-contact-img.webp";

import intuitiveIcon from "@/assets/app-development-images/featureImgOne.webp";
import engagingIcon from "@/assets/app-development-images/featureImgTwo.webp";
import brandingIcon from "@/assets/app-development-images/featureImgThree.webp";

export const pwa: PageData = {
  hero: {
    title: [
      { text: "PWA Development ", color: "text-white" },
      { text: "Service in India", color: "text-white" },
    ],
    description: [
      {
        text: "Moonstack offers highly advanced PWA solutions in India. Progressive Web Apps provide the benefits of app-like cross-platform performance and responsiveness to any device right from the user’s web browser. This is what makes them the hottest development asset in the market today. At Moonstack, we have the best PWA developers in India who can help you build consistent, functional, and reliable web apps.",
        color: "text-white",
      },
    ],
    image: pwaImg,

    lottieData: pwaLottie,

    breadcrumbs: [
      { label: "Home", href: "/" },
      {
        label: " Application Development",
        href: "/application-development",
      },
      {
        label: "Android App Development",
        href: "/application-development/android-app",
      },
    ],
  },
  mobDesignBanner: mobAppBanner,
  seo: {
    title: "Progressive Web App (PWA) Development in India & USA | Moonstack",
    description:
      " Build fast, installable PWAs that work offline, feel native, and boost conversions across devices with our expert PWA development team. Request a PWA strategy session.",
    keywords:
      "PWA development service India, PWA development company India,  Progressive web app development service India,  Hire PWA developer in India",
    canonical:
      "https://www.moonstack.com/android-app-development-service/ PWA-development-service",
    ogImage: "/opengraph-image.png",
  },

  points:
    "Moonstack offers highly advanced PWA solutions in India. Progressive Web Apps provide the benefits of app-like cross-platform performance and responsiveness to any device right from the user’s web browser. This is what makes them the hottest development asset in the market today. At Moonstack, we have the best PWA developers in India who can help you build consistent, functional, and reliable web apps.",
  highlightText: "PWA solutions in India",
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
      "As the top PWA development company in India, Moonstack has significant experience with PWA development, design, deployment, and maintenance. Here’s an overview of the different speciality services that make up our PWA development service in India.",
  },
  featuresData: [
    {
      imgSrc: intuitiveIcon,
      title: "Custom PWA Development",
      description:
        "Our custom PWA development services are some of the most affordable PWA development services in India. We ensure each aspect of your PWA is optimised for speed and performance across devices with custom code that’s built as per your business requirements and not templates.",
    },
    {
      imgSrc: engagingIcon,
      title: "PWA Migration",
      description:
        "Our PWA migration services in India are curated to help businesses transform existing applications into full-featured PWAs. We ensure each application has its unique set of features, while being perfectly compliant across devices and platforms. Best of all? Our service retains the existing design and data seamlessly.",
    },
    {
      imgSrc: brandingIcon,
      title: "Secure PWA Development",
      description:
        "Backend security is one of the most crucial aspects of PWA development. That’s why we offer the most trusted secure PWA development service in India at Moonstack. We ensure your code is secure, and specifically, user information and backend data are safe against breaches.",
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
      "As the top PWA development agency in India, our working process relies on transparency. We ensure our production process hinges on personalised and tailored solutions rather than cookie-cutter designs and development. Here’s a brief overview of our working process.",
    steps: [],
  },

  accordionData: [
    {
      question: "What is the cost of PWA development in India?",
      answer:
        "The cost of PWA development in India depends on your project requirements and whether you already have an existing application. Migration projects are generally more cost-effective than building a PWA from scratch. You can contact Moonstack for a free quotation tailored to your PWA needs.",
    },
    {
      question: "How long does it take to develop a PWA?",
      answer:
        "Developing a PWA from scratch typically takes one to two months. Migration projects may take less time, depending on your requirements. If you have a specific timeline, Moonstack strives to meet your deadlines.",
    },
    {
      question: "Can Moonstack migrate my existing application into a PWA?",
      answer:
        "Yes, Moonstack offers dedicated PWA migration services in India. We can transform your existing application into a fully functional PWA without altering its design or core functionalities.",
    },
    {
      question: "Are PWAs accessible across devices?",
      answer:
        "Yes, PWAs are accessible across devices and support offline functionality directly from a web browser. For more information about PWAs, feel free to reach out to the Moonstack team.",
    },
    {
      question: "What is the best platform for PWA development?",
      answer:
        "PWAs are commonly developed using robust frameworks such as React, Vue.js, or Angular. The choice of platform depends on your specific PWA requirements, and all major frameworks support building scalable and high-performance PWAs.",
    },
  ],

  banner: {
    headingText: [
      {
        text: "Opt for your custom PWA services now",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: "PWA services goes through different stages of work.",
        color: "text-white",
      },
    ],
    image: pwaBannerImg,

    imageHeight: "md:w-[434px]",
  },
  quoteBanner: {
    headingText: [
      {
        text: "Build Scalable PWAs For Your Dynamic Business: Choose Moonstack",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: "Our services are tailored to meet your business needs and create fully custom PWAs based on your requirements.",
        color: "text-white",
      },
    ],

    image: iosContactbannerBg,
    buttonText: "Connect with us",
  },
  whyChooseData: {
    headingText: "",
    subHeadingText: "",
    steps: [],
  },
  slides: [],
};

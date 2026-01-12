import { PageData } from "@/types/web-development-data-type";

import iosImg from "public/assets/app-development-images/ios-hero-img.webp";
import iosLottie from "../../../public/lottie/ios.json";
import mobIosBanner from "public/assets/app-development-images/ux-audit-banner.webp";
import iosBannerImg from "public/assets/app-development-images/ios-hire-img.webp";
import iosContactbannerBg from "public/assets/app-development-images/ios-contact-img.webp";
import satisfaction from "public/assets/app-development-images/satisfaction.webp";
import frontendDevelopment from "public/assets/app-development-images/frontend-development.webp";
import consultancy from "public/assets/app-development-images/consultancy.webp";

export const ios: PageData = {
  hero: {
    title: [
      {
        text: "IOS App Development ",
        color: "text-white",
      },
      {
        text: "Services in India",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "With Moonstack, you can build iOS apps that seamlessly function across every Apple device responsively. As the top iOS app development agency in India, we ensure multi-device compatibility for our iOS apps, including Macs, iPhones, iPads, and even Apple Watches. The Apple device ecosystem is vast, with new products added to it every few years. ",
        color: "text-white",
      },
    ],
    image: iosImg,

    lottieData: iosLottie,
    breadcrumbs: [
      { label: "Home", href: "/" },
      {
        label: " Application Development",
        href: "/application-development",
      },
      {
        label: "IOS App Development",
        href: "/application-development/iOS-app",
      },
    ],
  },
  mobDesignBanner: mobIosBanner,
  seo: {
    title: "IOS App Development Company in India & USA | Moonstack",
    description:
      "Searching for expert IOS app developers in India? Moonstack designs and builds iPhone and iPad apps with pixel‑perfect UI and App Store–ready performance. Call Now!",
    keywords:
      " iOS app development Service India, iOS app development company India, Best iOS app developers India,  Custom iOS application development service India",
    canonical:
      "https://www.moonstack.com/android-app-development-service/iOS-app-development-service",
    ogImage: "/opengraph-image.png",
  },

  points:
    "With Moonstack, you can build iOS apps that seamlessly function across every Apple device responsively. As the top iOS app development agency in India, we ensure multi-device compatibility for our iOS apps, including Macs, iPhones, iPads, and even Apple Watches. The Apple device ecosystem is vast, with new products added to it every few years. This is why our custom iOS application development service in India allows businesses to stay on top of the newest iOS and Apple trends and scale their businesses exponentially.",
  highlightText: " you can build iOS apps that ",
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
      "We are proud to work with the best iOS app developers in India, and here’s a selection of what we offer to help you understand our team's strength and expertise.",
  },
  featuresData: [
    {
      imgSrc: satisfaction,
      title: "iOS App Consultation & Strategy",
      description:
        "Moonstack delivers expert iOS app development in India, aligning business goals with robust planning and clear frameworks to build scalable, high-performing applications.",
    },
    {
      imgSrc: frontendDevelopment,
      title: "Modern front-end UI/UX with  third-party API integration",
      description:
        "Moonstack delivers intuitive, accessible iOS UI/UX design with secure API integrations, third-party analytics, and seamless performance, ensuring scalable, user-friendly apps tailored to your brand.",
    },
    {
      imgSrc: consultancy,
      title: "Testing & Debugging App Store Deployment",
      description:
        "Moonstack delivers rigorous iOS testing, secure performance across devices, seamless App Store deployment, and reliable post-launch support, maintenance, and migration for end-to-end app success.",
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
      "At Moonstack, we value transparency and confidentiality for our enterprise iOS app development services in India. Our team manages this dichotomy with a stringent set of guidelines and a working structure. Here’s an overview of our collaborative process for iOS app development at Moonstack.",
    steps: [],
  },

  accordionData: [
    {
      question: "How much does it cost to develop an iOS app in India?",
      answer:
        "The development cost is determined based on multiple factors such as the build platform, app purpose, and functionality. If you want a detailed quote, you can contact our team at Moonstack, and we can offer a free quotation for your iOS app build.",
    },
    {
      question: "Who is the best iOS app developer in India?",
      answer:
        "If you’re looking for an iOS app developer that provides the most value through affordable and scalable services in India, Moonstack is your best choice.",
    },
    {
      question: "Are iOS developers in demand in India?",
      answer:
        "Yes, Apple users are growing exponentially in India with every new iPhone launch. As a result, iOS developers are more in demand than ever, especially for premium apps targeting Apple’s user base.",
    },
    {
      question: "Which language is best for iOS development?",
      answer:
        "iOS app development is best done using Swift and SwiftUI, which are specifically designed for Apple platforms. At Moonstack, we use Swift along with other specialised tools to build responsive and high-performance iOS applications.",
    },
    {
      question: "Can Moonstack help upgrade an existing iOS application?",
      answer:
        "Yes, Moonstack offers comprehensive iOS app upgrade services in India. You can contact us through our website, and our team will help you get started quickly.",
    },
  ],

  banner: {
    headingText: [
      {
        text: "Opt for your custom IOS app development services now",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: "IOS app development  services goes through different stages of work.",
        color: "text-white",
      },
    ],
    image: iosBannerImg,
  },
  quoteBanner: {
    headingText: [
      {
        text: "Develop an Optimised Proof of Concept With Our iOS App Development for Startups in India",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: "Build investor confidence with a proof-of-concept iOS application with our iOS app development services in India. ",
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

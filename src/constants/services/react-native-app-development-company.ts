import { PageData } from "@/types/web-development-data-type";

import mobIosBanner from "public/assets/app-development-images/ux-audit-banner.webp";
import iosBannerImg from "public/assets/app-development-images/ios-hire-img.webp";
import iosContactbannerBg from "public/assets/app-development-images/ios-contact-img.webp";
import reactNativeImg from "public/assets/app-development-images/native-hero-img.webp";
import nativeLottie from "../../../public/lottie/react-native.json";
import nativeIconOne from "public/assets/app-development-images/native-icon-one.webp";
import nativeIconTwo from "public/assets/app-development-images/native-icon-two.webp";
import nativeIconThree from "public/assets/app-development-images/native-icon-three.webp";

export const react_native: PageData = {
  hero: {
    title: [
      {
        text: " React Native Development  ",
        color: "text-white",
      },
      {
        text: "Service in India ",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Moonstack is a leading React Native app development company in India with 15+ years of experience and 450+ successful projects. We build scalable, secure, and user-friendly apps with intuitive design and UX-focused front ends. Our expert React Native developers help you create high-quality multi-platform apps within your budget. Get in touch to get started.",
        color: "text-white",
      },
    ],

    image: reactNativeImg,
    lottieData: nativeLottie,
    breadcrumbs: [
      { label: "Home", href: "/" },
      {
        label: " Application Development",
        href: "/application-development",
      },
      {
        label: "React Native App Development",
        href: "/application-development/react-native-app",
      },
    ],
  },
  mobDesignBanner: mobIosBanner,
  seo: {
    title: " React Native App Development Company in India & USA | Moonstack",
    description:
      "Want a cross‑platform app built with React Native? Moonstack helps Companies in India & USA ship fast, stable React Native apps for Android and iOS from a single codebase.",
    keywords:
      "React Native app development Service India, React Native app development company India,  Best React Native app developers India, React Native developers India",
    canonical:
      "https://www.moonstack.com/android-app-development-service/react-native-app-development-service",
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
      imgSrc: nativeIconOne,
      title: "Custom App Design & Development",
      description:
        "Moonstack delivers affordable custom React Native development in India, building complete codebases from scratch for better stability and fewer bugs. Our deep code ownership ensures reliable apps—hire Moonstack to build with confidence.",
    },
    {
      imgSrc: nativeIconTwo,
      title: "Clean Backend Code & API Integrations",
      description:
        "Cross-platform apps demand strong security and quality standards. Moonstack ensures clean, secure backend code to reduce data-breach risks, making us a trusted React Native agency for startups in India.",
    },
    {
      imgSrc: nativeIconThree,
      title: "Launch Support & Future Maintenance",
      description:
        "Moonstack offers robust React Native maintenance in India, including full launch support, optimized App Store and Play Store listings, and ongoing updates for future Android and iOS compatibility.",
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
      "Moonstack is the trusted partner for React Native enterprise app development in India across industries. Our success can be attributed to our working process, which is built around transparency and confidentiality. What sets us apart? Find out here.",
    steps: [],
  },
  accordionData: [
    {
      question:
        "Which is the best React Native app development company in India?",
      answer:
        "Moonstack is one of the best React Native app development companies in India, with over 15 years of experience and 450+ completed app development projects. We offer scalable and affordable React Native development services tailored to business needs.",
    },
    {
      question: "Which popular apps have been built using React Native?",
      answer:
        "Many popular apps are built using React Native, including Facebook, Instagram, Twitter, and Netflix, showcasing the framework’s scalability and performance for large-scale applications.",
    },
    {
      question: "Which is better, React Native or Flutter?",
      answer:
        "Both React Native and Flutter are powerful cross-platform frameworks. The right choice depends on your project requirements, target platforms, performance expectations, and development preferences.",
    },
    {
      question: "Are React Native apps secure and bug-free?",
      answer:
        "Yes, React Native is a secure and stable framework used by large-scale applications like Facebook and Instagram. When developed by an experienced agency like Moonstack, React Native apps can be highly secure, scalable, and reliable.",
    },
    {
      question:
        "Is it better to choose Native app development or React Native app development?",
      answer:
        "Native app development offers deeper system-level access, while React Native focuses on faster cross-platform development. Each approach has its advantages, and the best choice depends entirely on your business goals and technical requirements.",
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

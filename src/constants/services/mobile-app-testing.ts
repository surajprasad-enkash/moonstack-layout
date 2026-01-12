import { PageData } from "@/types/web-development-data-type";

import androidLottie from "../../../public/lottie/android.json";
import nativeBannerImg from "public/assets/app-development-images/native-banner-img.webp";
import androidImg from "public/assets/app-development-images/android-hero-img.webp";
import androidContactbannerImg from "public/assets/app-development-images/contact-app-img.webp";
import androidBannerImg from "public/assets/app-development-images/android-banner.webp";

import intuitiveIcon from "public/assets/app-development-images/featureImgOne.webp";
import engagingIcon from "public/assets/app-development-images/featureImgTwo.webp";
import brandingIcon from "public/assets/app-development-images/featureImgThree.webp";
export const testing: PageData = {
  hero: {
    title: [
      {
        text: "  Android ",
        color: "text-white",
      },
      {
        text: "  Application  Development",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: " Service in India",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "So, whether you need a simple on-demand Android app or one with full e-commerce functionality, Moonstack can help you build your dream concept into a scalable Android app as the most secure Android app development company in India.",
        color: "text-white",
      },
    ],
    image: androidImg,

    lottieData: androidLottie,
    breadcrumbs: [
      { label: "Home", href: "/" },

      {
        label: "Android App Development",
        href: "/application-development/android-app",
      },
    ],
  },
  seo: {
    title: "Android App Development Company India & USA | Moonstack",
    description:
      "Find Android app development partner in India? Moonstack delivers secure, scalable Android apps using modern architecture and long‑term maintenance support. call today",
    keywords:
      "Android app development Service India, Best Android app developers India,  Custom Android application development India,Android app development agency India",
    canonical:
      "https://www.moonstack.com/android-app-development-service/android-app-development-service",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points:
    "Android is the most popular mobile phone operating system in the world, with an estimated 4.5 billion users worldwide. Our native Android development service in India can help your business develop applications that allow you to reach that humongous audience. Every day, over 250 million Android apps are downloaded globally.",
  highlightText: "Android development service in India",
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
    subHeadingText: "",
  },
  featuresData: [
    {
      imgSrc: intuitiveIcon,
      title: "UI/UX Design For Android Applications",
      description:
        "Moonstack works with the best Android app developers in India to create consistent, clean, and intuitive UI designs for any app we build. .",
    },
    {
      imgSrc: engagingIcon,
      title: "Backend Development & API Integrations",
      description:
        "The functionality and security of apps developed by Moonstack are unparalleled due to two factors. We build a robust backend framework for all applications we develop from scratch. ",
    },

    {
      imgSrc: brandingIcon,
      title: "Code Testing, Debugging, & Play Store Deployment",
      description:
        "Moonstack delivers comprehensive Android app testing and Play Store deployment in India, ensuring bug-free performance through rigorous functional, performance, and device testing before launch.",
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
      "Moonstack values privacy and transparency as one of the top Android app development agencies in India. Here’s a brief overview of how our Android app development services in India take shape from concept to launch.",
  },

  accordionData: [
    {
      question: "How much does Android app development cost in India?",
      answer:
        "The actual development cost of an Android app depends on the app’s purpose, technology stack, features, and scale. For a quick quotation, feel free to reach out to our team at Moonstack.",
    },
    {
      question: "Will AI replace Android developers in India?",
      answer:
        "No, while AI is gradually becoming a good tool that can assist developers, it is not advanced enough to replace Android developers in India.",
    },
    {
      question: "Which is the best Android app development company in India?",
      answer:
        "Moonstack. We pride ourselves on being the best Android app development company in India, thanks to our years of experience developing popular Android apps that are downloaded and loved by millions of users.",
    },
    {
      question: "Can Moonstack develop Android e-commerce applications?",
      answer:
        "Yes, we can help you build completely custom e-commerce Android applications, complete with payment gateway integration and even chat support.",
    },
    {
      question: "How long does it take to develop an Android app?",
      answer:
        "The timeline for app development depends on various factors; however, the development process can generally take between a few weeks to a few months, based on underlying factors.",
    },
  ],

  banner: {
    headingText: [
      {
        text: "Opt for your custom Android app development services now",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: "Android app development goes through different stages of work.",
        color: "text-white",
      },
    ],
    image: androidBannerImg,
  },
  quoteBanner: {
    headingText: [
      {
        text: "Looking To Hire Android Developers in India? ",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: "We offer top-rated Android e-commerce app development in India. ",
        color: "text-white",
      },
    ],
    image: androidContactbannerImg,

    buttonText: "Connect with us",
  },
  whyChooseData: {
    headingText: "",
    subHeadingText: "",
    steps: [],
  },
  slides: [],
};

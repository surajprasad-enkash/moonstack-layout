import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/app-development-images/native-banner-img.webp"
import androidImg from "@/assets/app-development-images/android-hero-img.webp"
import androidContactbannerImg from "@/assets/app-development-images/contact-app-img.webp"
import androidBannerImg from "@/assets/app-development-images/android-banner.webp"
import bndimage1 from "@/assets/industries/ai/icon/bndImage1.webp"
import intuitiveIcon from "@/assets/app-development-images/featureImgOne.webp"
import engagingIcon from "@/assets/app-development-images/featureImgTwo.webp"
import brandingIcon from "@/assets/app-development-images/featureImgThree.webp"

import designer from "@/assets/app-development-images/work-directly.webp"
import hiring from "@/assets/app-development-images/hiring.webp"
import delivery from "@/assets/app-development-images/guarante.webp"
import collaboration from "@/assets/app-development-images/flexible.webp"

export const android: PageData = {
  hero: {
    title: [
      {
        text: "Android Application Development",
        color: "text-white",
      },
      {
        text: " Service",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "100+ Apps Delivered. Global Reach. Seamless Performance.I specialize in crafting intuitive, bug-free Android applications that bridge the gap between ideas and reality. Join 100+ satisfied clients worldwide who have scaled their businesses through my dedicated development process.",
        color: "text-white",
      },
    ],
    image: androidImg,

    lottieData: androidLottie,
    breadcrumbs: [
      { label: "Home", href: "/" },
      {
        label: " Services",
        href: "/services",
      },
      {
        label: "Android Application Development",
        href: "/services/android-app-development-company",
      },
    ],
  },
  seo: {
    title: "Android App Development Company India & USA | Moonstack",
    description:
      "Find Android app development partner in India? Moonstack delivers secure, scalable Android apps using modern architecture and long‑term maintenance support. call today",
    keywords:
      "Android app development Service India,Android app development company USA,Best Android app developers India,Custom Android application development USA,Android app development agency UK",
    canonical: "/services/android-app-development-company",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

  leftCardData: [
    {
      title: "Building High-Performance Android Apps for a Global Market",
      description:
        "Android is the most popular mobile phone operating system in the world, with an estimated 4.5 billion users worldwide. Our native Android development service in India can help your business develop applications that allow you to reach that humongous audience. Every day, over 250 million Android apps are downloaded globally. With Moonstack’s custom Android application development in USA, we can help you build apps that meet your customer’s needs, while meeting your business goals and technical requirements.",
      stats: [
        "Thanks to our years of experience building industry-defining Android apps with intuitive UI/UX, secure backend support, and detailed functionality, we are proudly among the top Android app development company in India. Our experience encompasses building high-performance Android applications from concepts for startups to building highly complex enterprise Android apps for major MNCs.",
      ],
      description2:
        "So, whether you need a simple on-demand Android app or one with full e-commerce functionality, Moonstack can help you build your dream concept into a scalable Android app as the most secure Android app development company in USA.",
      image: bndimage1.src,
      bolds: false,
    },
  ],
  solutions: {
    headingContent: [
      {
        text: "Our Specialities in  ",
        color: "text-white",
      },
      {
        text: " Android App Development ",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: "Service",
        color: "text-white",
      },
    ],
    subHeadingText:
      "Android app development goes through different stages of work. As the premier Android app development agency in India, Moonstack offers specialised services for Android app development for businesses in India. Here is a detailed look at our Android app development services in India.",
  },
  featuresData: [
    {
      imgSrc: intuitiveIcon.src,
      title: "UI/UX Design For Android Applications",
      description:
        "Moonstack works with the best Android app developers in India to create consistent, clean, and intuitive UI designs for any app we build. We work with the top designers to create a front-end design that’s visually appealing and integrates the client’s brand image, creating a truly custom Android application for our clients. This level of attention to detail allows us to rank as the top Android UI/UX designing service in India.",
    },
    {
      imgSrc: engagingIcon.src,
      title: "Backend Development & API Integrations",
      description:
        "The functionality and security of apps developed by Moonstack are unparalleled due to two factors. We build a robust backend framework for all applications we develop from scratch. And to help our apps function optimally, sync data automatically, and improve the app’s responsiveness and functionality across devices, we use trusted third-party APIs. These practices power us as the top Android app development firm in India.",
    },

    {
      imgSrc: brandingIcon.src,
      title: "Cross-Platform Development & Clean Code Embedding",
      description:
        "As a part of our Android app development for startups in India, our team offers proficient cross-platform app development services. Our cross-platform development services are powered by Flutter, Dart, and Native React, which allows us to build Android apps that are compatible across devices and platforms using a single codebase. What sets our services apart is the use of clean code in our development process.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Code Testing, Debugging, & Troubleshooting",
      description:
        "Moonstack offers one of the most comprehensive Android app testing services in India. This is one of the areas where we leave no stone unturned to ensure that your app is adequately prepared for its launch with no glitches or bugs that hamper the functionality of your app. Our testing services are reliable as every app we develop goes through a rigorous three-step, functional, performance, and device testing process before launch.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Play Store Deployment",
      description:
        "Once the Android applications are ready, we help our clients deploy the apps to the Play Store and even optimize their listing for easy access by users. All of this comes standard as a part of our premier and affordable Android app development service in India. ",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Android App Maintenance & Support",
      description:
        "As a top Android software development company in India, our work doesn’t end with Play Store deployment. We also offer detailed services for Android app support and maintenance in India. This includes optimising the apps for post-launch performance, checking performance analytics, and offering periodic app maintenance for Android compatibility and app security. We also offer Android app migration services in India as a part of our extended app maintenance and support services.",
    },
  ],
  OutcomeBanner: {
    heading: [
      { text: "Ready for ", color: "text-white", className: "" },
      {
        text: "Android App That Stands Out?",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Engaging UI/UX Design",
      "Custom Feature Engineering",
      "Secure Global Deployment",
      "Maintenance and support",
    ],
    buttonText: "Talk To Us",
  },
  qualitySectionData: {
    heading: [],
    description: "",
    columsClass: "",
    list: [],
  },
  CloudTimelineData: {
    title: "How We Build ",
    highlight: "Smarter Android Experiences",
    subtitle:
      "Moonstack values privacy and transparency as one of the top Android app development agencies in India. Here’s a brief overview of how our Android app development services in India take shape from concept to launch.",
    steps: [
      {
        number: 1,
        title: "Consultation & Discussion",
        description:
          "Our consultation and discussion sessions are highly productive as we help our clients realise their app idea into a working development plan. But first, we also ensure our clients get a signed NDA from our end, ensuring their app ideas are safe with us. We follow a stringent process of understanding our client’s vision to help them turn that into an idea that’s built specifically to their purpose.",
        position: "left",
      },
      {
        number: 2,
        title: "App Framework & UI/UX Design",
        description:
          "Once we have a plan for what the app is going to be, our first job is to create a framework for the app, going into every detail to understand the scope of development. Then we move into the UI/UX development phase as a part of our Android UI/UX designing service in India to create clean and intuitive designs that are in line with the client’s brand image.",
        position: "right",
      },
      {
        number: 3,
        title: "Custom Backend Development & Integrations",
        description:
          "For complex enterprise Android app solutions in India, Moonstack goes into great detail to develop the complete codebase from scratch. This allows us to have complete control over the application, preventing glitches and bugs from hampering functionality. It also helps us keep the application and its data secure, which is crucial for large-scale enterprise Android apps.",
        position: "left",
      },
      {
        number: 4,
        title: "Testing, Launch, & Support",
        description:
          "Lastly, our Android app testing services in India, led by experienced app testers and engineers, allow us to optimise the app’s performance and fix any performance issues or bugs. This completes the development process, post which we offer launch support, including deployment of the Android application to Google’s Play Store, and post-launch support.",
        position: "right",
      },
      {
        number: 5,
        title: "Deployment & System Integration",
        description:
          "Once the model is ready, we deploy it seamlessly into your existing environment. Whether on cloud platforms or custom infrastructure, we ensure smooth integration, rigorous testing, and a stable launch, so your AI solution works flawlessly from day one.",
        position: "left",
      },
      {
        number: 6,
        title: "Monitoring, Support & Continuous Improvement",
        description:
          "After deployment, we continuously monitor performance, track system behavior, and retrain models as new data becomes available. This ensures your AI solution keeps improving and stays aligned with your business as it grows.",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "The Global Choice " },
      {
        text: "for High-Performance ",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: "Android Development" },
    ],
    description:
      "Still wondering if you should avail our Android app development service in India? Here are six reasons why we’re your best choice for an Android app development agency.",
    cards: [
      {
        id: "Custom Solutions",
        label: "Custom Solutions",
        description:
          "At Moonstack, we ensure every app is built specifically as per our client’s requirements. This means even if you want a specific functionality in your Android app that’s generally not standard in your market, we can make it for you, no questions asked.",
        variant: "light",
      },
      {
        id: "End-to-End Solutions",

        label: "End-to-End Solutions",
        description:
          "We offer complete Android app development support from frameworking, UI/UX design, backend development, to app testing and launch support.",
        variant: "accent",
      },
      {
        id: "Highly Qualified Developers",

        label: "Highly Qualified Developers",
        description:
          "Our development team at Moonstack is led by highly qualified developers and designers with years of real-world professional experience.",
        variant: "dark",
      },
      {
        id: "Focus on User Intent",

        label: "Focus on User Intent",
        description:
          " There’s an innate focus on user intent in our Android app development services in India. We ensure every app we build is practical in terms of design and engaging for users.",
        variant: "dark",
      },
      {
        id: "Production Transparency",

        label: "Production Transparency",
        description:
          "When you work with Moonstack, you’ll always be in the loop with regular updates and milestones. We ensure the work flows smoothly and production timelines are always met.",
        variant: "light",
      },
      {
        id: "Maintenance & Support",

        label: "Maintenance & Support",
        description:
          "Our enterprise Android app solutions in India always come with maintenance and post-launch support to ensure your app is functioning optimally and doesn’t have any compatibility issues moving forward.",
        variant: "accent",
      },
    ],
  },
  NewBanner: {
    headingLines: [
      { text: "Looking To Hire Professional Android App Developers?" },
      { text: "" },
    ],
  },
  // processSteps: {
  //   headingText: [
  //     {
  //       text: " Our Application development ",
  //       color: "text-white",
  //     },
  //     {
  //       text: "   process wraps around ",
  //       color: "text-white libreItalic font-[400] highlight-text",
  //     },
  //     {
  //       text: " your unique business needs",
  //       color: "text-white",
  //     },
  //   ],
  //   subHeadingText:
  //     "Moonstack values privacy and transparency as one of the top Android app development agencies in India. Here’s a brief overview of how our Android app development services in India take shape from concept to launch.",
  // },

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
}

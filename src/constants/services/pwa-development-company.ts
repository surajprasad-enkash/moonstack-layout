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

export const pwa: PageData = {
  hero: {
    title: [
      {
        text: "Create Dynamic PWAs & Custom PWA Development Service",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Transform your web presence with progressive web apps that deliver native app experiences. Our custom PWA development combines speed, reliability, and offline functionality to engage users across all devices.",
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
        label: "PWA Development Company",
        href: "/services/pwa-development-company",
      },
    ],
  },
  seo: {
    title: "Progressive Web App (PWA) Development in India & USA | Moonstack",
    description:
      "Build fast, installable PWAs that work offline, feel native, and boost conversions across devices with our expert PWA development team. Request a PWA strategy session.",
    keywords:
      "PWA development service USA,PWA development company USA,Progressive web app development service India,Best PWA developers in India,Custom PWA development service India",
    canonical: "/services/pwa-development-company",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

  leftCardData: [
    {
      title: "Custom Progressive Web App Development Services",
      description:
        "Moonstack offers highly advanced PWA solutions in India. Progressive Web Apps provide the benefits of app-like cross-platform performance and responsiveness to any device right from the user’s web browser. This is what makes them the hottest development asset in the market today. At Moonstack, we have the best PWA developers in India who can help you build consistent, functional, and reliable web apps.",
      stats: [],
      description2:
        "The best part about web apps? They do not require any additional downloads or app store visits. As a part of our custom PWA development service in India, we help clients learn how to protect revenue and scale businesses using PWAs. So, if you’re new to PWAs and want an agency with over 15 years of experience to help you develop highly scalable PWAs, be sure to choose our progressive web app development services in India. Contact our team and we can get started on your project stat",
      image: bndimage1.src,
      bolds: false,
    },
  ],
  solutions: {
    headingContent: [
      {
        text: "Our Specialities in ",
        color: "text-white",
      },
      {
        text: "PWS Development",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: "Services ",
        color: "text-white",
      },
    ],
    subHeadingText:
      "As the top PWA development company in India, Moonstack has significant experience with PWA development, design, deployment, and maintenance. Here’s an overview of the different speciality services that make up our PWA development service in India.",
  },
  featuresData: [
    {
      imgSrc: intuitiveIcon.src,
      title: "Custom PWA Development",
      description:
        "Our custom PWA development services are some of the most affordable PWA development services in India. We ensure each aspect of your PWA is optimised for speed and performance across devices with custom code that’s built as per your business requirements and not templates.",
    },
    {
      imgSrc: engagingIcon.src,
      title: "PWA Migration",
      description:
        "Our PWA migration services in India are curated to help businesses transform existing applications into full-featured PWAs. We ensure each application has its unique set of features, while being perfectly compliant across devices and platforms. Best of all? Our service retains the existing design and data seamlessly.",
    },

    {
      imgSrc: brandingIcon.src,
      title: "Secure PWA Development",
      description:
        "Backend security is one of the most crucial aspects of PWA development. That’s why we offer the most trusted secure PWA development service in India at Moonstack. We ensure your code is secure, and specifically, user information and backend data are safe against breaches.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Fast Loading PWA Development",
      description:
        "Fine-tuning the performance of a PWA we’re developing is a major part of our backend process. That’s why we’re the premier provider of fast-loading PWA development service in India. We take loading time very seriously while ensuring that our responsive PWA development service in India is able to offer a holistic solution to our clients.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "UI/UX Design for PWAs",
      description:
        "Creating a web app with an immaculate user experience is at the cornerstone of our PWA design and development services in India at Moonstack. We ensure clean navigation and accessibility in all apps we develop across devices, ensuring perfect harmony with our cross-platform PWA development services in India.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "QA & Deployment",
      description:
        "Whether it is deployment assistance and rigorous testing, if you’re looking to hire PWA developers in India, Moonstack can be your help. We handle the entire PWA lifecycle to ensure your app is performing optimally at all times.",
    },
  ],
  OutcomeBanner: {
    heading: [
      { text: "Get Progressive ", color: "text-white", className: "" },
      {
        text: "Web App That Delivers ",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
      { text: " Native Experiences", color: "text-white", className: "" },
    ],
    checklist: [
      "Cross-Platform Compatibility",
      "Offline Functionality & Fast Loading",
      "App-Like Features Without Downloads",
      "Cost-Effective Development",
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
    title: "Our Process for Progressive ",
    highlight: "Web App Development",
    subtitle:
      "As the top PWA development agency in India, our working process relies on transparency. We ensure our production process hinges on personalised and tailored solutions rather than cookie-cutter designs and development. Here’s a brief overview of our working process.",
    steps: [
      {
        number: 1,
        title: "Confidentiality Agreement",
        description:
          "We provide a promise of confidentiality to all our clients with a signed NDA, ensuring their app idea and development process is safe with our team. We also hit the ground running with a detailed and robust working architecture that involves getting started with our work from the first call itself. This is why we’re the top PWA consulting service in India.",
        position: "left",
      },
      {
        number: 2,
        title: "Development & Prototyping",
        description:
          "The development process starts with designing the UI and creating the different functions of the app over a scalable architecture and framework. There’s a lot of focus on user experience, which includes ensuring the design is accessible across devices. Ensuring design translation across devices is a big part of our enterprise PWA development service in India at Moonstack.",
        position: "right",
      },
      {
        number: 3,
        title: "Quality Assurance",
        description:
          "Moonstack puts every app we build through rigorous quality assurance. This helps us ensure the app’s functionality is not compromised in any situation, especially for core services to create a seamless user experience. Our quality assurance makes us the best agency for PWA development for small businesses in India.",
        position: "left",
      },
      {
        number: 4,
        title: "Deployment & Support",
        description:
          "Once the development process is complete, we offer complete deployment support for PWA for e-commerce services in India. This allows businesses to streamline online operations and increase their reach among customers with our PWA deployment and maintenance services.",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Why Choose Us for" },
      {
        text: " PWA Development?",
        className: "libreItalic font-[400] highlight-text",
      },
    ],
    description:
      "From offering PWA development for startups in India to developing enterprise PWA solutions, Moonstack has done it all. If you’re still not convinced, here are six reasons why you must choose Moonstack for all your PWA development requirements.",
    cards: [
      {
        id: "Custom Business Solutions",
        label: "Custom Business Solutions",
        description:
          "We provide tailored services that are custom-built for your business, keeping your requirements in mind. Everything is custom-built from scratch, just for you.",
        variant: "light",
      },
      {
        id: "Performance Focused Architecture",

        label: "Performance Focused Architecture",
        description:
          "Our development process at Moonstack focuses on optimising code to ensure the app is fast and offers smooth navigation across devices.",
        variant: "accent",
      },
      {
        id: "Ensemble Developers",

        label: "Ensemble Developers",
        description:
          "We work with a team of the most experienced and talented developers with multi-platform development experience. Our experienced team always delivers native app-like performance for PWAs.",
        variant: "dark",
      },
      {
        id: "Scalable Solutions",

        label: "Scalable Solutions",
        description:
          "Scalability is a factor that limits many PWAs. This is why we always build our PWAs on scalable platforms, which allow future expansion without complete redevelopment.",
        variant: "dark",
      },
      {
        id: "24/7 Support",

        label: "24/7 Support",
        description:
          "Need to discuss updates regarding your project? Our team is always available to discuss and talk to you. Never be in the dark when you choose Moonstack.",
        variant: "light",
      },
      {
        id: "Proven Experience Across Industries",

        label: "Proven Experience Across Industries",
        description:
          "We have worked with businesses like startups, MNCs, and everything in between across industries. Our proven track record allows us to be the best PWA development agency in India.",
        variant: "accent",
      },
    ],
  },
  NewBanner: {
    headingLines: [
      {
        text: "Build Scalable PWAs For Your Business: Hire our professional developers now",
      },
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
      question: "What is the cost of PWA development in India?",
      answer:
        "The cost of PWA development in India depends on your requirements and whether you have an existing app or not. Migration projects are less costly compared to full-fledged development projects. You can get a free quote from Moonstack for your PWA requirements. So feel free to contact us today.",
    },
    {
      question: "How long does it take to develop PWAs?",
      answer:
        "A full PWA development takes one or two months when building from scratch. Migration projects can take less time than that, depending on your requirements. However, no matter your requirement, if you have a timeline, Moonstack can try its best to meet your deadlines.",
    },
    {
      question: "Can Moonstack migrate my existing app into a PWA?",
      answer:
        "Yes, it is called migrating the application, and Moonstack offers dedicated PWA migration services in India. We can help you transform your existing application into a fully-functioning PWA without changing its design or functionalities.",
    },
    {
      question: "Are PWAs accessible across devices?",
      answer:
        "Yes, PWAs are accessible across devices and even feature offline functionality right from your web browser. For more information about PWAs, feel free to reach out to our team at Moonstack.",
    },
    {
      question: "What is the best platform for PWA development?",
      answer:
        "Most PWAs are developed using strong and capable platforms like React, Vue.js, or Angular. The build platform is decided based on the type of PWA you require. The best part is that all of the popular PWA development platforms allow businesses to build scalable PWAs.",
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

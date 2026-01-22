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
import { color } from "framer-motion"

export const cloud: PageData = {
  hero: {
    title: [
      {
        text: "Moonstack: Trusted Cloud Service Providers in India and USA",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "",
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
        label: "Cloud",
        href: "/services/cloud-company",
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
    "After struggling with another agency for months, Moonstack came in and delivered what we needed in record time. Their Laravel expertise is unmatched—they not only built exactly what we envisioned but suggested improvements we hadn't considered. The application is scalable, secure, and performs beautifully under heavy load. They've become our go-to development partner for all future projects.",
  highlightText: "The application is scalable",

  leftCardData: [],
  solutions: {
    headingContent: [
      {
        text: "Our ",
        color: "text-white",
      },
      {
        text: "Laravel web Development",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: "Services Includes",
        color: "text-white",
      },
    ],
    subHeadingText:
      "We have best Laravel web developers and with them we offer affordable laravel development service in India - from consultation to migration all your needs will fulfill at one stop ",
  },
  featuresData: [
    {
      imgSrc: intuitiveIcon.src,
      title: "We will maintain your website by our extensive cloud service",
      description:
        "Cloud services have already had a great impact on the digital transformation worldwide. However, businesses face new hurdles, questions, and considerations when they want to adopt cloud services, compared to traditional IT services.",
    },
    {
      imgSrc: engagingIcon.src,
      title: "Cloud-Based Services in India and USA",
      description:
        "We are one of the most reliable and top cloud service providers in India, aiming to optimize your business processes. Moonstack, a trusted cloud server service provider, delivers pioneering and efficient solutions for you to be able to handle your data and applications well. Our team is proficient in offering you various cloud-based services to help you transform your business. Moonstack, one of the leading cloud service providers in USA, has several cloud server solutions for efficient and high performing servers. It’s vital to note that our cloud servers are optimized for demanding applications; they offer all the possibilities your business wants for development.",
    },

    {
      imgSrc: brandingIcon.src,
      title: "Streamline Your Business with DBaaS and PaaS Solutions",
      description:
        "Let me tell you, there are countless benefits to adopting the cloud hosting services offered by Moonstack for your business. You don’t have to invest time and money into hardware and software systems that are tedious and problematic to implement cloud-based solutions. We deliver DBaaS services in India to give you flexible and elastic computing resource solutions that can help you get only the best hosting platforms at reasonable prices. Our PaaS services solution in India can help you build, run, and manage your applications while sparing you the trouble of constructing the base infrastructure.",
    },
  ],

  NewBanner: {
    headingLines: [
      { text: "Scale Your Business With Our Expert Laravel Development Team" },
    ],
  },
  OutcomeBanner: {
    heading: [
      {
        text: "Build Once, Scale Forever: Your ",
        color: "text-white",
        className: "",
      },
      {
        text: "Expert Laravel Development Partner",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Robust & Secure Architecture",
      "Rapid Development & Deployment",
      "High-Performance & Scalable Code",
      "Easy Maintenance & Updates",
    ],
    buttonText: "Start Your Project Today",
  },

  CloudTimelineData: {
    title: "Bringing the best ",
    highlight: "cloud solution Agency To You.",
    subtitle: "",
    steps: [
      {
        number: 1,
        title: " Client Consultation",
        description:
          "Understand client needs, cloud goals, and business processes to tailor a cloud solution that aligns with their objectives.",
        position: "left",
      },
      {
        number: 2,
        title: " Strategy Development",
        description:
          "Create a detailed cloud adoption plan, including migration, integration, and scalability strategies to meet specific business requirements.",
        position: "right",
      },
      {
        number: 3,
        title: " Market Research",
        description:
          "Analyze industry trends, competitor cloud solutions, and customer preferences to ensure the cloud strategy is competitive and effective.",
        position: "left",
      },
      {
        number: 4,
        title: " Campaign Planning",
        description:
          "Design a marketing and adoption strategy to promote cloud services internally and externally, ensuring seamless integration and user engagement.",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Edge tools ." },
      {
        text: "Drive That ",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: "performance" },
    ],
    description:
      "Feel free adapt this based on the specific managed services, features, and unique selling points your IT service company provides.",
    cards: [
      {
        id: "Technical Implementation",
        label: "Technical Implementation",
        description:
          "Plan, design, and deploy cloud systems, ensuring seamless integration, functionality, and alignment with business goals.",
        variant: "light",
      },
      {
        id: "IT Helpdesk Support",

        label: "IT Helpdesk Support",
        description:
          "Provide timely technical assistance, troubleshoot cloud-related issues, and resolve user problems to ensure smooth operations and minimal downtime.",
        variant: "accent",
      },
      {
        id: "Managed IT Services",

        label: "Managed IT Services",
        description:
          "Proactively monitor, maintain, and optimize cloud infrastructure to enhance performance, security, and scalability for business growth.",
        variant: "dark",
      },
      {
        id: "IT Consulting",

        label: "IT Consulting",
        description:
          "Analyze business needs, recommend tailored cloud solutions, and guide strategic decisions to improve efficiency and drive innovation.",
        variant: "dark",
      },
      {
        id: "Network Support",

        label: "Network Support",
        description:
          "Monitor, maintain, and troubleshoot cloud network systems to ensure reliable connectivity, security, and optimal performance.",
        variant: "light",
      },
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
  qualitySectionData: {
    heading: [
      {
        text: "Choose Moonstack for ",
        color: "text-white",
      },
      {
        text: "healthy cloud ",
        className: "libreItalic font-[400] highlight-text",
      },
      {
        text: " Services",
        color: "text-white",
      },
    ],
    description:
      "As your reliable cloud transformation company, we deliver efficient cloud solutions and composable services that are designed to enhance operational efficiency in multiple ways. Our cloud transformation tactic combines cloud strategy, an industry-oriented cloud marketplace, and an intellectual cloud delivery platform with integrated GenAI.",
    columsClass: "lg:grid-cols-3",
    list: [
      {
        id: 1,
        title: "Benefits of cloud service",
        icon: collaboration.src,
        description:
          "Our patrons can rest assured that the whole process of storing and protecting their data is entirely transparent and customer driven. While your data is being stored with us, you can have endless access to our friendly, professional, and tremendously knowledgeable team of support staff, equipped to provide help and guidance whenever needed. ",
      },
      {
        id: 2,
        title: "How it help businesses",
        icon: collaboration.src,
        description:
          "To help businesses maximize the value and potential of cloud services, Moonstack, the leading cloud service provider in India, intends to offer vast and all-encompassing cloud solutions and support to enhance the overall exploitation of cloud solutions. We have developed a range of cloud based services in USA necessary for the company’s smooth functioning and tailored for your individual requirements ",
      },
    ],
  },
  accordionData: [],

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

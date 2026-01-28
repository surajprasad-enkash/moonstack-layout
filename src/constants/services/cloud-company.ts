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
        text: "Expert cloud services for seamless digital transformation. We handle cloud migration, infrastructure management, DevOps, and optimization across AWS, Azure, and Google Cloud—delivering secure, scalable solutions that drive efficiency and business growth.",
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
    title: "Cloud Solutions Company | Scalable Cloud Infrastructure",
    description:
      "Transform your business with expert cloud solutions. We offer cloud migration, architecture design, security, and 24/7 management services. Trusted cloud company in India.",
    keywords:
      "best cloud computing services USA,affordable cloud hosting services India,cloud migration services for enterprises India,multi-cloud management company India,cloud infrastructure services USA",
    canonical: "/services/cloud-company",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

  leftCardData: [],
  solutions: {
    headingContent: [
      {
        text: "Empower Your Growth with  ",
        color: "text-white",
      },
      {
        text: "Scalable Cloud ",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: "Infrastructure",
        color: "text-white",
      },
    ],
    subHeadingText: "",
  },
  featuresData: [
    {
      imgSrc: intuitiveIcon.src,
      title: "We will maintain your website by our extensive cloud service",
      description:
        "Cloud infrastructure has revolutionized digital transformation for modern businesses across the globe. However, companies frequently encounter complex technical hurdles and security considerations when migrating away from traditional IT services. Our team simplifies this transition by providing managed cloud ecosystems that eliminate downtime and optimize performance. We specialize in proactive monitoring and seamless maintenance, ensuring your digital assets remain secure, updated, and fully operational around the clock. By leveraging our extensive cloud expertise, you can focus on core innovation while we handle the complexities of your backend architecture and server stability.",
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
      {
        text: "Scale Your Infrastructure With Our Expert Cloud Development Team",
      },
    ],
  },
  OutcomeBanner: {
    heading: [
      {
        text: "Bringing your vision to life quickly ",
        color: "text-white",
        className: "",
      },
      {
        text: "with high-fidelity, interactive designs.",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "User-Centric & Intuitive Layouts",
      "Rapid Prototyping & Wireframing",
      "High-Performance Visual Identity",
      "Responsive & Accessible Design",
    ],
    buttonText: "Start Your Design Today",
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
      {
        id: 3,
        title: "Advanced security and compliance management",
        icon: collaboration.src,
        description:
          "We implement robust security frameworks and industry-standard compliance practices to safeguard critical business data. Our solutions include continuous monitoring, threat detection, and regulatory alignment, helping organizations maintain trust, reliability, and uninterrupted digital operations.",
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

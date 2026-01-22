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

export const wordPress: PageData = {
  hero: {
    title: [
      {
        text: "WordPress Development Services in India",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Launch your powerful, user centric and secure custom wordpress based website that leads to increased traffic and conversion.",
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
        label: "Wordpress Development",
        href: "/services/wordpress-website-development-company",
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

  leftCardData: [
    {
      title: "Leading WordPress Development Company in India",
      description:
        "Moonstack is known as the leading IT company in India. We have delivered a wide range of CMS based websites to our clients. Our WordPress experts have a blend of professional and technical expertise that ensure us to deliver best WordPress website development services in India. From start ups, mid sized to large enterprises, we have delivered successful WordPress solutions to different businesses. ",
      stats: [
        "We are not limited to only the development company - but consider us your digital WordPress partner in India. At Moonstack, we understand our client’s demand and create strategies that align with specific business needs. From custom development to ready to use templates we offer end to end WordPress development services to our clients. Our focus is to deliver responsive, advanced integrated functionalities with brand design based solutions. In order to stay ahead in the market competition, our WordPress development team keeps them updated with the latest tools and technologies.",
      ],
      description2:
        "Along with this, our core values that make us different is timely project delivery, transparent communication, and different engagement modules that meet all our clients hiring needs.",
      image: bndimage1.src,
    },
  ],
  solutions: {
    headingContent: [
      {
        text: "Our End to End Custom ",
        color: "text-white",
      },
      {
        text: "WordPress Development ",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: "Service in India",
        color: "text-white",
      },
    ],
    subHeadingText:
      "We offer end to end WordPress development services in India. From custom WordPress development to maintenance - Moonstack is your one stop solution for your WordPress development needs.",
  },
  featuresData: [
    {
      imgSrc: intuitiveIcon.src,
      title: "Custom WordPress Development Services",
      description:
        "We offer custom WordPress development services. Our team builds responsive and powerful WordPress based solutions from scratch that reflect the company brand and integrate functionalities that are aligned with business goals. We focus on building interactive and modern websites that ensure to stay ahead among competitors.",
    },
    {
      imgSrc: engagingIcon.src,
      title: "WordPress Theme Customization",
      description:
        "Our WordPress development team provides full theme customisation services that allow you to transform your brand into brand focused and reflect your style. We create top notch web designs with the best combination of colors, fonts, and features integrated that match your business and today’s tech design needs.",
    },

    {
      imgSrc: brandingIcon.src,
      title: "Third Party Integration Services",
      description:
        "Integrate third party functionalities with API integration services. Our team is proficient in integrating third party features into WordPress development services that allow the access of additional features and can link via API only.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "WordPress Plugin Integration",
      description:
        "We are proficient with WordPress plugin integration services. Our team of WordPress coders integrate plugins that allow you to enhance website features. At Moonstack - we choose, install, and configure the right plugins as per your tech needs. We integrate plugins for performance improvement and that support your business needs.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "WordPress Testing Services",
      description:
        "Our WordPress development team offers end to end testing for our clients. We test Wordpress based solutions with automated and manual processes that allow us to deliver bug free websites in the market. Our team has top quality assurance testing coders with us who test all features and deliver successful solutions.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "WordPress Maintenance and Support",
      description:
        "Maintain your full WordPress requirements with us. We offer end to end maintenance and support services that ensure to stay ahead in the market. Our team keeps your website fully secure and updated with the latest trends. Additionally, if we find any gaps we resolve them instantly that helps to grow your business.",
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
    title: "",
    highlight: "",
    subtitle: "",
    steps: [
      // {
      //   number: 1,
      //   title: "Fixed Model",
      //   description:
      //     "We collect all the information about the project to understand what our client actually needs that allow us to align with the project.",
      //   position: "left",
      // },
    ],
  },

  impactSection: {
    heading: [
      {
        text: "Engagement models to choose the best ",
      },
      {
        text: "WordPress Development ",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: "Team" },
    ],
    description:
      "Build your team as per your preference. We offer the best hiring models that ensure to create your own WordPress developer team for your project with right experience and skills who will work according to you. ",
    cards: [
      {
        id: "Fixed Model",
        label: "Fixed Model",
        description:
          "With a fixed model, outsource your WordPress full project to the dedicated team that will develop and manage the team on our own. In this, we work on Clear scope, defined timelines, and specific costing.",
        variant: "light",
      },
      {
        id: "Hire WordPress Developer",

        label: "Hire WordPress Developer",
        description:
          "Hire WordPress developers on hourly, full time, and part time basis. You can hire the best WordPress resources from us as per their skills and work with them on your hourly model.",
        variant: "accent",
      },
      {
        id: "Dedicated Team",

        label: "Dedicated Team",
        description:
          "At Moonstack, we offer a dedicated hire team module in which you build your best WordPress team. In our pool, you can do hiring of designers, coders, testers as per your project needs. The dedicated WordPress team ensures faster delivery, better quality, and you can have full control on resources with direct communication and daily reporting.",
        variant: "dark",
      },
      {
        id: "Time and Material Model ",

        label: "Time and Material Model ",
        description:
          "Moonstack, known as the professional WordPress development services in  India offers a time and material model in which you can pay for the actual time and resources that are used for the specific WordPress tasks including integrated functionalities and on the basis of priorities. This model is ideal for the companies who have ongoing projects with limited or expertise resources.",
        variant: "dark",
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
        text: " Why choose us for your",
        color: "text-white",
      },
      {
        text: " WordPress Development ",
        className: "libreItalic font-[400] highlight-text",
      },
      {
        text: " Services in India?",
        color: "text-white",
      },
    ],
    description:
      "Moonstack is the leading WordPress development company. We offer end to end custom WordPress development services. From designing to launching we can be your best WordPress partner who meets with all your tech and business needs. ",
    columsClass: "lg:grid-cols-3",
    list: [
      {
        id: 1,
        title: "End to End custom web development",
        icon: collaboration.src,
        description:
          "We are proficient in building end to end custom WordPress web development services in which we create solutions from scratch. Our team understands your business needs and launches solutions that ensure to leverage the benefits of modern tech and meet the business needs.",
      },
      {
        id: 2,
        title: "Expert WordPress Developers",
        icon: collaboration.src,
        description:
          "Moonstack has a team of professionals who are skilled professionals with deep technical expertise. Our expert WordPress development team focuses on custom development, performance optimisation, advanced integration that ensures to meet high standard and professional services.",
      },
      {
        id: 3,
        title: "Hire Skilled Developers",
        icon: collaboration.src,
        description:
          "With us you can have access to a pool of WordPress developers. You can hire different types of developers as per their experience level. Our WordPress coders can collaborate as an extension in your team and deliver secure, responsive and high performance based WordPress solutions that meet your project needs.",
      },
      {
        id: 4,
        title: "On Time Delivery",
        icon: collaboration.src,
        description:
          "We deliver all your projects on time. Our focus is to be on our commitments.With our experts we follow a structured roadmap that ensures us to deliver all projects on time without any timely delay and compromise in quality.",
      },
      {
        id: 5,
        title: "User Centric Design",
        icon: collaboration.src,
        description:
          "Design is the backbone of any website. We don’t only focus on development aspects but also experience  in custom wordpress designing service in  India. We create interactive and engaging designs that are user centric and innovative that match the latest modern trends.",
      },
      {
        id: 6,
        title: "Strong Communication",
        icon: collaboration.src,
        description:
          "Strong and clear communication is our core value. We understand communication is important and at every stage we believe to convey our ideas and progress to our clients. At Moonstack, we keep all information and progress transparent with our clients and make collaboration stress free.",
      },
    ],
  },
  accordionData: [
    {
      question: "How long will you take to deliver WordPress websites?",
      answer:
        "There is no fixed time to deliver WordPress websites. It all depends on several factors: time, cost, hiring model, and many more development aspects. Majorly, it takes two weeks for custom WordPress development, but again it depends on project needs.",
    },
    {
      question: "Will you provide source code for WordPress development?",
      answer:
        "Yes, we provide source code for WordPress development that your  coders can edit, add, and delete features or modify as per their future needs. As soon as our WordPress development will finish we will handover our source code to you.",
    },
    {
      question: "Will my WordPress website be mobile friendly?",
      answer:
        "Yes, we will make sure that your Website will be mobile friendly and compatible with all platforms including desktop and tab. Our coders deliver responsive and mobile friendly websites for our clients. ",
    },
    {
      question:
        "Do you offer support and maintenance services after delivering the website?",
      answer:
        "We are always available for our clients. After completion of the project also we offer end to end support and maintenance WordPress services to our clients. Our experts are available full time for them - detect bugs and update solutions as per the latest market demands.",
    },
    {
      question: "Will my project details be secure with you?",
      answer:
        "Yes, all your personal and project details are fully secure to us. Don’t stress yourself for that as we sign NDA with our clients as well as developers that are associated with us. In any case, we don’t lead any of your project details to any third party.",
    },
    {
      question:
        "What tips and tricks do you use for WordPress website security?",
      answer:
        "First of all our WordPress are experienced as per their experience they opt for the best coding practise. They have an idea how to keep a website fully secure but then also they opt for firewall setups, malware protection, backups, updates, and continuous monitor websites to keep your solution fully safe.",
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

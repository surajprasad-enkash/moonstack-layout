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

export const it_support: PageData = {
  hero: {
    title: [
      {
        text: "Moonstack: Supporting India and USA businesses with seamless IT solutions",
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
        label: "it support",
        href: "/services/it-support-company",
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
      title: "Transform Your Business with Custom Laravel Solutions",
      description:
        "Moonstack is known as the leading Laravel development company in India across the globe. We have delivered a wide range of PHP based Laravel web solutions to different businesses. With our expert Laravel developers, we have built custom Laravel web apps, POS systems, CRMs, video streaming apps, and many more solutions to meet diverse needs of different businesses.",
      stats: [],
      description2:
        "Our main aim is to meet our clients expectations. We have created a Laravel web development strategy that allows us to offer secure Laravel web development services to our customers. At Moonstack, we have a blend of professional Laravel web experts, who have decades of experience in the industry. We keep ourselves updated with all the Laravel framework updates that allow us to stay ahead in the market competition and integrate advanced functionalities in the system as per the specific business needs.",
      image: bndimage1.src,
    },
  ],
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
    subHeadingText: "",
  },
  featuresData: [
    {
      imgSrc: intuitiveIcon.src,
      title: "How our IT support will help you",
      description:
        "Keep your business running smoothly with our range of IT solutions that keep you ahead of the curve. Don't put up with outmoded technologies and communications. Let our IT support company deliver smooth service and support so you can focus on what you do best.",
    },
    {
      imgSrc: intuitiveIcon.src,
      title: "Complete IT Support. One Reliable Partner.",
      description:
        " We are one of the Famous India based IT support companies having a team of expert IT consultants that collaborate with you to offer an assortment of professional services, such as help desk support, server administration, cloud services support, data backup and recovery, IT asset management, and vendor management.",
    },
    {
      imgSrc: engagingIcon.src,
      title: "Server Administration in India and USA",
      description:
        "We know that data loss can be catastrophic for any business. We at Moonstack, provide robust Data Backup and Recovery services in India to safeguard your valuable data. Our innovative backup solutions safeguard that your data is always secure and easily recoverable in the event of unexpected events. We comprehend the importance of data integrity and strive to deliver peace of mind through our reliable services.",
    },
    {
      imgSrc: engagingIcon.src,
      title: "Expert Server Management Solutions You Can Trust",
      description:
        "Our cutting-edge services, like Server Administration in India, are personalized to meet your specific business needs. We offer a wide range of server management services that include security updates, regular maintenance, and performance optimization. With us, you can be assured that your servers are in skilled hands, allowing you to focus on growing your business.",
    },
    {
      imgSrc: engagingIcon.src,
      title: "Protecting Your Data, Powering Your Digital Growth",
      description:
        "We will be your trusted partner in providing flawless services of Data Backup and Recovery in India for your team, which include phone, internet, and local managed services. Our inclusive end-to-end Server Administration in India offers unmatched cloud computing solutions that redefine the potential of the digital landscape. We know that data loss can be catastrophic for any business.",
    },

    {
      imgSrc: brandingIcon.src,
      title: "Why Choose Moonstack?",
      description:
        "Choosing Moonstack means partnering with a company that values your business as much as you do. At Moonstack we are focused on quality and doing the right thing by serving our customers. Being a trusted IT support company, we employ preventive measures that help solve future challenges before they escalate. Our intent is to produce efficient and effective solutions that improve the modalities of your enterprise.",
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
    title: "Get in Touch",
    highlight: " with Moonstack",
    subtitle:
      "Are you ready to embrace flawless IT support services? Please get in touch with Moonstack now to learn more about our IT services in this valuable journey of your business, and we shall assist you in every difficult situation to stand by you with pride. This ranges from data backup and recovery services to server administration and the complete IT solutions that you require.",
    steps: [
      {
        number: 1,
        title: " Client Consultation",
        description:
          "We begin by understanding your unique business needs, challenges, and goals through in-depth consultations. This helps us tailor our IT support services to align perfectly with your objectives, ensuring a seamless and efficient partnership.",
        position: "left",
      },
      {
        number: 2,
        title: " Strategy Development",
        description:
          "Our experts craft a customized IT strategy designed to optimize your operations, enhance productivity, and future-proof your business. We focus on scalable solutions that grow with your organization while addressing immediate IT requirements.",
        position: "right",
      },
      {
        number: 3,
        title: " Market Research",
        description:
          "We conduct thorough market research to identify industry trends, competitor strategies, and technological advancements. This ensures that the IT solutions we recommend are not only innovative but also relevant to your business landscape.",
        position: "left",
      },
      {
        number: 4,
        title: " Campaign Planning",
        description:
          "For businesses leveraging IT for marketing or operational campaigns, we assist in planning and integrating IT infrastructure to support your initiatives. This includes ensuring seamless data flow, security, and performance for your campaigns.",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Edge tools Drive That" },
      {
        text: "performance",
        className: "libreItalic font-[400] highlight-text",
      },
    ],
    description:
      "Feel free adapt this based on the specific managed services, features, and unique selling points your IT service company provides.",
    cards: [
      {
        id: "Technical Implementation",
        label: "Technical Implementation",
        description:
          "Our team handles the end-to-end implementation of IT systems, ensuring smooth deployment with minimal disruption to your operations. From software installation to system configuration, we ensure everything is set up for optimal performance.",
        variant: "light",
      },
      {
        id: "IT Helpdesk Support",

        label: "IT Helpdesk Support",
        description:
          "We provide round-the-clock IT helpdesk support to address your technical issues promptly. Whether it’s troubleshooting, software updates, or user assistance, our team is always ready to keep your business running smoothly.",
        variant: "accent",
      },
      {
        id: "Managed IT Services",

        label: "Managed IT Services",
        description:
          "Our managed IT services take the burden of IT management off your shoulders. From monitoring and maintenance to security and backups, we ensure your IT infrastructure is always up-to-date, secure, and efficient.",
        variant: "dark",
      },
      {
        id: "IT Consulting",

        label: "IT Consulting",
        description:
          "Our IT consulting services offer expert guidance on technology adoption, system optimization, and digital transformation. We help you make informed decisions to leverage technology for business growth and innovation.",
        variant: "dark",
      },
      {
        id: "Network Support",

        label: "Network Support",
        description:
          "We provide comprehensive network support to ensure your business connectivity remains fast, reliable, and secure. From setup and configuration to troubleshooting and optimization, we keep your network running at peak performance",
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
    heading: [],
    description: "",
    columsClass: "lg:grid-cols-3",
    list: [
      // {
      //   id: 1,
      //   title: "Decade of Experience",
      //   icon: collaboration.src,
      //   description:
      //     "Our Laravel experts have decades of experience that allows them to meet all clients' needs. Laravel coders have delivered scalable, secure, and high performance web apps with advanced integrated functionalities.",
      // },
    ],
  },
  accordionData: [
    {
      question:
        "Will you be able to work long term for my Laravel project requirements?",
      answer:
        "Yes, our Laravel web developers are always available and they are proficient with all types of Laravel web development requirements. Our team offers professional Laravel web development services to our customers. ",
    },
    {
      question: "How long will you take to build my Laravel website?",
      answer:
        "There is no fixed time - the completion of Laravel websites are fully dependent on different factors - time, no of Laravel developers, complexity of app. But, we make sure we will put our high efforts and deliver your solutions with all essential features.",
    },
    {
      question: "Will you provide Laravel migration services in India?",
      answer:
        "Yes, we will provide Laravel migration services in India. Our Laravel expert team specializes in migrating solutions from other technologies to Laravel without affecting design, performance, and even your data.",
    },
    {
      question: "Can I hire Laravel web developers from your team?",
      answer:
        "Yes, of course you can hire the best Laravel developers from our team on full time, part time, and hourly basis. We have a pool of dedicated Laravel developers.",
    },
    {
      question:
        "Can you integrate API or third party services into my Laravel solutions?",
      answer:
        "Yes, we can extend functionalities in Laravel solutions with third party services via API. Our experts have hands-on experience in third party integration services. ",
    },
    {
      question: "How much does it cost for Laravel web development services? ",
      answer:
        "There is no fixed cost for Laravel web development services. The Laravel web development factors are based on several factors such as features, design, hiring model, third party integration requirement.",
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

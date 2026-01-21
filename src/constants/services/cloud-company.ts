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
        text: "Laravel Website Development Service Provider",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Need a fast, secure, and scalable web solution? Our Laravel development services deliver enterprise-grade applications with clean code, optimal performance, and seamless functionality.",
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
        label: "Laravel",
        href: "/services/laravel-website-development-company",
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
    subHeadingText:
      "We have best Laravel web developers and with them we offer affordable laravel development service in India - from consultation to migration all your needs will fulfill at one stop ",
  },
  featuresData: [
    {
      imgSrc: intuitiveIcon.src,
      title: "Laravel Consulting Services",
      description:
        "Bring your idea into reality with the right strategy and roadmap with Laravel web experts. Our Moonstack’s expert Laravel consulting professionals will understand your business needs and provide you with the right development strategy to deliver secure and scalable Laravel solutions in the market.",
    },
    {
      imgSrc: engagingIcon.src,
      title: "Custom Laravel Website Development Service",
      description:
        "We build high performance, secure, and functional custom Laravel web apps in India. We develop custom  Laravel websites for clients as per their business requirements. Our Laravel web development experts understand the gap in your operational process  and integrate modern features to meet latest business demands. ",
    },

    {
      imgSrc: brandingIcon.src,
      title: "Laravel Custom  E-Commerce Development Services ",
      description:
        "Grow your online presence with Laravel ecommerce development service in India. We build high performance and secure custom e-commerce solutions integrated with advanced functionalities and deliver smooth shopping experiences to customers. Our team's main aim is to increase website conversions on your websites.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Laravel UI/UX Designing Services ",
      description:
        "Our architect designers create interactive and engaging designs for our customers. We hold expertise with custom designing in which we bring your business brand identity to the real world and connect with customers. At Moonstack, our designers create interactive designs with easy to use aspects.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Laravel API Integration Services",
      description:
        "Extend your web and mobile app functionalities with seamless laravel REST API development service in India by partnering with the best Laravel development agency. We integrate Laravel web solutions with third party services via API such as secure payment gateway, internal systems, and many more. ",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Laravel Maintenance and Support Services ",
      description:
        "We offer end to end Laravel maintenance and support services. With our expert Laravel team, we run Laravel web solutions smoothly without any errors. We provide constant updates, optimize performance, and fix bugs to run solutions smoothly and deliver long term business commitment. ",
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
    title: "Our Process of ",
    highlight: "Laravel website Development Service",
    subtitle:
      "We have defined a process of Laravel website development that allows us to deliver successful Laravel web solutions in the market. As the best Laravel development agency in  India, our experts have defined the structured roadmap that allows us to deliver solutions on time and exclude last minute complex challenges.",
    steps: [
      {
        number: 1,
        title: "Gather Requirements",
        description:
          "We collect all the information about the project to understand what our client actually needs that allow us to align with the project.",
        position: "left",
      },
      {
        number: 2,
        title: "Client Discussion",
        description:
          "Once we have proper requirements then our Laravel team experts conduct a formal client discussion to solve all queries.",
        position: "right",
      },
      {
        number: 3,
        title: "Internal Strategy Discussion",
        description:
          "After that we have an internal strategy discussion in which we have our tech brainstorming to deliver the best outcome.",
        position: "left",
      },
      {
        number: 4,
        title: "Designing - UI/UX Services",
        description:
          "Designers start the designing process in which they focus on interactive user interface and easy to use for the users.",
        position: "right",
      },
      {
        number: 5,
        title: "Development",
        description:
          "Tech team start the development process in which frontend developers and backend coders work together.",
        position: "left",
      },
      {
        number: 6,
        title: "Deployment and Testing",
        description:
          "We deploy and test the Laravel software with automated and manual processes that allow us to deliver bug free solutions. ",
        position: "right",
      },
      {
        number: 7,
        title: "Delivery and Post Support ",
        description:
          "After testing, we deliver Laravel based solutions in the market with post support that ensure our team is always there.",
        position: "left",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Our Scalable " },
      {
        text: "Laravel Web development",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: "Solutions" },
    ],
    description:
      "For decades MoonStack has been creating a wide range of Laravel web solutions for our clients for different industries that are ready to use as per different business with minor and major customisation processes. ",
    cards: [
      {
        id: "Laravel Web Apps",
        label: "Laravel Web Apps",
        description:
          "We have developed high performance and secure PHP based Laravel framework web apps for different industries with next generation functionalities that allow us to meet modern business needs. Also, have created interactive UI and engaging UX that allow users to connect with users.",
        variant: "light",
      },
      {
        id: "Laravel E-commerce Solutions",

        label: "Laravel E-commerce Solutions",
        description:
          "The best ecommerce website developers in India build innovative and highly functional Laravel online stores. We have integrated essential functionalities such as product catalog, shopping carts, order tracking, and secure payment gateways that increase conversion rates and user experience.",
        variant: "accent",
      },
      {
        id: "Laravel CRM Solutions ",

        label: "Laravel CRM Solutions ",
        description:
          "Moonstack builds Laravel based CRM solutions that improve customer relationship management processes in companies. We design custom CRM solutions that allow us to track leads and automate conversions that lead to data driven decisions and streamline client communication processes.",
        variant: "dark",
      },
      {
        id: "Laravel CMS Solutions",

        label: "Laravel CMS Solutions",
        description:
          "Professional Laravel experts offer robust Laravel based CMS development in India. We have built the best Laravel CMS solutions that allow businesses to easily update, publish, and manage content effortlessly on their websites. We deliver CMS solutions to businesses that  have full control on content management systems. ",
        variant: "dark",
      },
      {
        id: "POS Systems",

        label: "POS Systems",
        description:
          "Integrate modern Laravel powered POS systems that are developed by Laravel experts in India. Our POS systems help to streamline different operational processes, allow retailers to manage multiple outlets, and deliver best outcomes for customers. We have delivered a wide range of POS (Point of Sale solutions) to our retail businesses.",
        variant: "light",
      },
      {
        id: "Video Streaming and Media Apps",

        label: "Video Streaming and Media Apps",
        description:
          "Develop your Laravel based video streaming and media apps with  expert laravel web developers in India. We designed video streaming and media apps that support secure content delivery and content management. We develop video streaming and media apps in such a way that offer seamless streaming and integrated with user authentication and support multiple platforms. ",
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
        text: " Why Choose us for your ",
        color: "text-white",
      },
      {
        text: "Laravel  Web Development",
        className: "libreItalic font-[400] highlight-text",
      },
      {
        text: " Services?",
        color: "text-white",
      },
    ],
    description:
      "Laravel is known for the best Laravel framework development in India. At Moonstack, we have delivered a wide range of custom Laravel web development services to our customers. Our professional Laravel experts have delivered secure, high performance, and future ready web apps.",
    columsClass: "lg:grid-cols-3",
    list: [
      {
        id: 1,
        title: "Decade of Experience",
        icon: collaboration.src,
        description:
          "Our Laravel experts have decades of experience that allows them to meet all clients' needs. Laravel coders have delivered scalable, secure, and high performance web apps with advanced integrated functionalities.",
      },
      {
        id: 2,
        title: "Custom Solutions for Every Business",
        icon: collaboration.src,
        description:
          "We have delivered 450+ custom web development solutions across the world. Our professional Laravel experts have built high performance, scalable different solutions specifically designed for different business needs.",
      },
      {
        id: 3,
        title: "End to End Laravel Development Services",
        icon: collaboration.src,
        description:
          "Delivering end to end Laravel development services to our clients. From consultation to development to migration - Moonstack is known as a one stop solution for all our client’s Laravel web development needs.",
      },
      {
        id: 4,
        title: "Transparent Communication",
        icon: collaboration.src,
        description:
          "At Moonstack, we maintain open communication with our clients with constant updates, demos, and progress reports that ensure us to stay connected with our customers. Moreover, that also allows us to understand each other's mindset in a better way.",
      },
      {
        id: 5,
        title: "Confidential Details",
        icon: collaboration.src,
        description:
          "Every project idea is unique - we understand the importance of your business module. We keep all your information fully secure and confidential with us. Our team keeps all details to them, and in any case we don’t leak any of your project ideas to third parties.",
      },
      {
        id: 6,
        title: "Creative and Business oriented solutions",
        icon: collaboration.src,
        description:
          "We just don’t build Laravel solutions only for the web development purpose. At Moonstack, we build business oriented solutions that align with your business needs and attract users with advanced based next generation features.",
      },
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

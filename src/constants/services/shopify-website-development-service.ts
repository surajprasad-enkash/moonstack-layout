import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/app-development-images/native-banner-img.webp"
import androidContactbannerImg from "@/assets/app-development-images/contact-app-img.webp"
import androidBannerImg from "@/assets/app-development-images/android-banner.webp"
import bndimage1 from "@/assets/industries/icon/bndImage1.webp"

import ShopifyIcon1 from "@/components/ServicesSvg/ShopifyIcon/ShopifyIcon1"
import ShopifyIcon2 from "@/components/ServicesSvg/ShopifyIcon/ShopifyIcon2"
import ShopifyIcon3 from "@/components/ServicesSvg/ShopifyIcon/ShopifyIcon3"
import ShopifyIcon4 from "@/components/ServicesSvg/ShopifyIcon/ShopifyIcon4"
import ShopifyIcon5 from "@/components/ServicesSvg/ShopifyIcon/ShopifyIcon5"
import ShopifyIcon6 from "@/components/ServicesSvg/ShopifyIcon/ShopifyIcon6"
import ShopifyIcon7 from "@/components/ServicesSvg/ShopifyIcon/ShopifyIcon7"
import ShopifyIcon8 from "@/components/ServicesSvg/ShopifyIcon/ShopifyIcon8"
import ShopifyIcon9 from "@/components/ServicesSvg/ShopifyIcon/ShopifyIcon9"
import ShopifyIcon10 from "@/components/ServicesSvg/ShopifyIcon/ShopifyIcon10"
import ShopifyIcon11 from "@/components/ServicesSvg/ShopifyIcon/ShopifyIcon11"
import ShopifyIcon12 from "@/components/ServicesSvg/ShopifyIcon/ShopifyIcon12"

export const shopify: PageData = {
  hero: {
    title: [
      {
        text: "Build a High-Converting ",
        color: "text-white",
      },
      {
        text: "Shopify Store ",
        color: "",
        className: "libreItalic font-[400] highlight-text",
      },
      {
        text: "That Scales with Your Business",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "In the competitive world of e-commerce, your store design can make or break sales. We create stunning Shopify stores optimized for conversions—combining beautiful design with smart functionality. ",
        color: "text-white",
      },
    ],
    image: "",

    lottieData: androidLottie,
    breadcrumbs: [
      { label: "Home", href: "/" },
      {
        label: " Services",
        href: "/services",
      },
      {
        label: "Shopify",
        href: "/services/shopify-website-development-company",
      },
    ],
  },
  seo: {
    title: "Shopify Website Development Company India & USA | Moonstack",
    description:
      "Looking to build and scale a Shopify store? Moonstack develops custom Shopify themes, apps, and optimized funnels to increase your online sales. Call Now!",
    keywords:
      "shopify website development company USA,affordable shopify website developers India,shopify website design services India,shopify website experts USA,custom shopify store development service USA",
    canonical: "/services/shopify-website-development-company",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

  leftCardData: [
    {
      title: "Famous Shopify Website Development Company Globally",
      description:
        "Moonstack is the leading Shopify development company in India. We have delivered a wide range of IT solutions to different industries, and among them, Shopify is our core e-commerce development service. At Moonstack, we offer end-to-end customised Shopify development services in India that allow us to develop high-performing, innovative solutions. We have a blend of professional designers and developers who have hands-on experience with Shopify and Shopify Plus.",
      stats: [],
      description2:
        "Our main aim is to launch powerful e-commerce-based Shopify stores for clients. In order to meet all our customers' needs, we offer end-to-end Shopify development services in India that include store setup, custom theme development, responsive designs, third-party API integration services, testing, and many more services. We are considered as a one-stop solution for all our clients' needs. We serve our customers from start ups to large enterprises. Moreover, we believe in effective transparent communication, and deliver things in a timely manner. With technical aspects, our team also focuses on creating appealing and engaging designs for the customers that ensure to meet all market standards.",
      image: bndimage1.src,
      bolds: false,
    },
  ],
  solutions: {
    headingContent: [
      {
        text: "Our ",
        color: "text-white",
      },
      {
        text: "Shopify Development",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: " Services in India",
        color: "text-white",
      },
    ],
    subHeadingText:
      "We offer end to end Shopify development services in India that meet all our clients needs that ensure to run their business smoothly.",
  },
  featuresData: [
    {
      Icon: ShopifyIcon1,
      imgSrc: "",
      title: "Shopify Consulting Services",
      description:
        "Discuss all your Shopify related project needs with top tech experts. With our expert Shopify consulting services, we allow businesses to set up, optimize, and grow their shopify business. We also offer theme customisation and conversion focused strategies that meet all modern tech guidelines as well as stay ahead in the market competition. ",
    },
    {
      Icon: ShopifyIcon2,
      imgSrc: "",
      title: "Shopify Set up and Product Import",
      description:
        "We help you in the complete Shopify store set up that reflects fully professional and with an appealing user interface. With our experts, we also offer seamless product import with accurate information including product description, prices, variants, and many more things. Experts focus is to set up modern error free stores with more conversions and easy navigation.",
    },

    {
      Icon: ShopifyIcon3,
      imgSrc: "",
      title: "Shopify Designing Services",
      description:
        "Grow your online store with stunning and engaging user interface. Our expert Shopify team builds modern, mobile friendly, and user centric designs for the users. We focus to reflect on brand identity that can connect with your customers and increase conversion rates. Our designs are easy to use and deliver a next generation shopping experience to the users.",
    },
    {
      Icon: ShopifyIcon4,
      imgSrc: "",
      title: "Shopify Third Party Integrations",
      description:
        "Extend your Shopify functionalities with third party integration services that will match your business needs. Our Shopify experts connect third party platforms via API that ensure to connect different platforms such as CRM, ERP, payment gateway, marketing tools that allow to automate the processes and improve efficiency. With Shopify API integration services developers can save time and effort as they don’t have to build features from scratch. ",
    },
    {
      Icon: ShopifyIcon5,
      imgSrc: "",
      title: "Shopify Testing Services",
      description:
        "Launch your error free Shopify store bug free. We offer comprehensive testing services from manual to automated testing. In our Shopify development services in India we constantly conduct functionality checks, speed optimisation, UI/UX reviews, and payment gateway testing that ensure our clients enjoy seamless shopping experiences.",
    },
    {
      Icon: ShopifyIcon6,
      imgSrc: "",
      title: "Shopify Support and Maintenance Services",
      description:
        "We offer end to end Shopify support and maintenance services to our clients that ensure high performance optimization. Our team of Shopify coders are always available for 24*7 that helps to manage updates, constant back ups, and continuous monitoring. You can get reliable support and instant solutions for all your Shopify related needs that help you maintain your store with full security and maintain responsiveness.",
    },
  ],

  NewBanner: {
    headingLines: [
      {
        text: "Scale Your Storefront With Our ",
      },
      {
        text: "Expert Shopify Development Team",
        className: "libreItalic font-[400]",
      },
    ],
  },
  OutcomeBanner: {
    heading: [
      {
        text: "Build Once, Sell Limitless: Your Expert",
        color: "text-white",
        className: "",
      },
      {
        text: " Shopify Development Partner",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Conversion-First Architecture",
      "Rapid Storefront Deployment",
      "Precision API & App Logic",
      "Lightning-Fast Performance",
    ],
    buttonText: "Launch Your Success Story Today",
  },

  CloudTimelineData: {
    title: "Process We Follow To Deliver Best ",
    highlight: "Shopify Development Services",
    subtitle:
      "We follow a structured pattern and quality focus process that allows us to deliver high performance and optimised Shopify stores in the market. With our experience, our Shopify experts have defined a proper process that delivers seamless development, smooth functionalities that lead to maximum conversion for businesses.",
    steps: [
      {
        number: 1,
        title: "Requirement Analysis",
        description:
          "We collect all the information about the project with our clients to understand, actually what they require and what is existing data.",
        position: "left",
      },
      {
        number: 2,
        title: "Shopify Custom Design & Theme Set Up",
        description:
          "Start with custom UI/UX designing services, we start design for our clients as per their brand identity and connect their audience via designs.",
        position: "right",
      },
      {
        number: 3,
        title: "Shopify Development",
        description:
          "Start development for our clients with appropriate frontend and backend technologies that fit the project needs",
        position: "left",
      },
      {
        number: 4,
        title: "Integrations ",
        description:
          "We opt for integration services that help to add on third party integration services via API. This extends additional functionalities",
        position: "right",
      },
      {
        number: 5,
        title: "Testing & Optimization",
        description:
          "We provide an end to end testing and optimisation process to launch error free and bug free solutions in the market.",
        position: "left",
      },
      {
        number: 6,
        title: "Launch & Ongoing Support",
        description:
          "At Moonstack, our experts launch your Shopify solution in the market successfully and provide support and maintenance services.",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Why Are Our " },
      {
        text: "Shopify Solutions",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: " Different?" },
    ],
    description:
      "As the leading Shopify development company in India. We offer complete set of Shopify development services that match all your market needs",
    cards: [
      {
        id: "Simplify Shopify Set up",
        label: "Simplify Shopify Set up",
        description:
          "We simplify Shopify store set up for our clients that ensure best store optimisation. Our developers manage all processings from start to finish, In store optimization - we set up your account, upload your products, and create stores that match your design needs and reflect the same brand identity. ",
        variant: "light",
      },
      {
        id: "Shopify Brand Theme",
        label: "Shopify Brand Theme",
        description:
          "At Moonstack, we create online stores that match your brand standards and theme. From logo to color palettes, and typography we create a user interface with eye catchy colors and reflect your online store that gives the same feel like your offline business. The user interface will connect with your audience.",
        variant: "accent",
      },
      {
        id: "Shopify Website Development",
        label: "Shopify Website Development",
        description:
          "Our Shopify website developers build powerful websites that are integrated with customized designs, responsive layouts, and essential functionalities. We opt for the best backend and frontend development technologies that launch secure websites for customers. From homepage to product pages, we create the best websites that enhance shopping experiences. ",
        variant: "dark",
      },
      {
        id: "Shopify Mobile Apps",
        label: "Shopify Mobile Apps",
        description:
          "Create your interactive and user-friendly mobile applications for Android and iOS that help Shopify businesses to grow effortlessly. Our Shopify designing team creates interactive mobile apps with intuitive designs and smooth navigation that allow users to shop at their fingertips. With interactive designs, we focus on responsive layouts that will never turn off the customers.",
        variant: "dark",
      },
      {
        id: "Integration Services",
        label: "Integration Services",
        description:
          "Our team makes your Shopify platform advanced and modern with our third party integration services. We integrate third party functionalities easily with API. Our Shopify coders have hands-on experience in integrating third party API services security without any issues that allow your customers to have access to a wide range of functionalities.",
        variant: "light",
      },
      {
        id: "Advanced Functionalities",
        label: "Advanced Functionalities",
        description:
          "Make your Shopify platform modern with advanced integration functionalities. With our advanced features such as AI driven recommendations, real time analytics, and automation processes improve user experiences, create smart workflow, and connect with your customers easily. Moreover, allow your clients to leverage the benefits of modern functionalities powered by next gen technologies.",
        variant: "dark",
      },
    ],
  },

  qualitySectionData: {
    heading: [
      {
        text: "Why Choose Moonstack for ",
        color: "text-white",
      },
      {
        text: "Your Shopify",
        className: "libreItalic font-[400] highlight-text",
      },
      {
        text: " Platform?",
        color: "text-white",
      },
    ],
    description:
      "As a leading Shopify development company, we offer end to end Shopify development services that offer high performance, increase conversion rates, and long term support in business. Our team only only delivers solutions but become your Shopify tech partner that meets tech demands as well as business goals. From custom development to maintenance we are always with our clients for all their needs.",
    columsClass: "lg:grid-cols-3",
    list: [
      {
        id: 1,
        title: "Certified Shopify Experts",
        icon: "",
        Icon: ShopifyIcon7,
        description:
          "We have a team of certified Shopify experts who have hands-on experience with who understand custom themes and business systems. Our Shopify developers have managed several projects from planning to execution. They are proficient in delivering to deployment and solving all last minute complex challenges",
      },
      {
        id: 2,
        title: "Custom Brand Focused",
        icon: "",
        Icon: ShopifyIcon8,
        description:
          "Our Shopify designers create the Shopify website that reflects your brand identity. We not only focus on development aspects that our team also put their ideology to truly reflect the brand identity. We make sure that your store stands out with a smooth navigation process that helps in better understanding and helps to increase conversion rates.",
      },
      {
        id: 3,
        title: "Transparent Process",
        icon: "",
        Icon: ShopifyIcon9,
        description:
          "We believe in keeping transparency with our clients. We work as a tech partner and share information with them. With us, whatever the strategy we create and team involvement and future roadmap everything we clearly discuss with our customers. We have created a process that ensures zero hidden surprises.",
      },
      {
        id: 4,
        title: "On-Time Delivery",
        icon: "",
        Icon: ShopifyIcon10,
        description:
          "With our Shopify developers in India, we make sure that we will deliver all your tasks on time without any delay. Our team discusses internally and then only we provide deadlines to our clients. We believe in delivering all tasks on time or before deadlines. At Moonstack, deadlines are strictly followed without any quality compromise.",
      },
      {
        id: 5,
        title: "Client Centric Approach",
        icon: "",
        Icon: ShopifyIcon11,
        description:
          "We work as one team and follow a client-centric approach. We listen to all your requirements and deliver all projects as per our clients' expectations. Our team is always available for open communication and we are always open to discuss our ideas and next steps that we will take for the project. All functionalities we decide for our clients will match all your standards and deliver next-generation experiences to clients.",
      },
      {
        id: 6,
        title: "Long-Term Partnership",
        icon: "",
        Icon: ShopifyIcon12,
        description:
          "At Moonstack, we are here not for limited functionality integration. We are for our clients to offer them long term partnership and stand with them in every thick and thin decision making. We focus on building relationships not only to fulfill technical requirements. We help you to grow your Shopify store for a long term. Our team doesn't deal with clients for a limited period, we offer long term support without any delay to them.",
      },
    ],
  },
  accordionData: [
    {
      question: "What services do you offer for Shopify development?",
      answer:
        "We provide end to end Shopify development services to our clients from Shopify consulting services to launching and maintenance.  Our End to end Shopify developments services - custom theme development, store setup, app integration, UI/UX design, advanced functionalities, performance optimization, and ongoing support and maintenance.",
    },
    {
      question: "How long will it take to build a Shopify store? ",
      answer:
        "It will majorly take 2 weeks to set up the Shopify store, but it all depends on the project and different aspects such as hiring model and complex features required.",
    },
    {
      question: "Will my Shopify store be mobile-friendly?",
      answer:
        "Yes, your Shopify store will be fully mobile-friendly and even responsive on all devices.",
    },
    {
      question: "Will you offer post-launch support?",
      answer:
        "Yes, we provide ongoing maintenance and ongoing support for our clients. As we said we associate as your partner in your project, we are not for limited time or for tasks.",
    },
    {
      question: "Can you integrate third-party services in Shopify solutions?",
      answer:
        "Yes, we can integrate third party services in Shopify mobile apps via secure API.",
    },
    {
      question: "Will you be able to do the Shopify migration?",
      answer:
        "Yes, our team is proficient in the Shopify migration process. In the process we make sure none of your data will be missed or lost. We migrate all your data with best industry practices..",
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

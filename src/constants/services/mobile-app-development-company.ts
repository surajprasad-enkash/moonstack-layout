import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/services/bannerImages/mobile-app-dev.webp"
import bndimage1 from "@/assets/services/androidDevelopment/androidApp.webp"
import OgImageIcon from "@/assets/ogImage.svg"
// Svg Icons Components
import MadIcon1 from "@/components/ServicesSvg/MadIcon/MadIcon1"
import MadIcon2 from "@/components/ServicesSvg/MadIcon/MadIcon2"
import MadIcon3 from "@/components/ServicesSvg/MadIcon/MadIcon3"
import MadIcon4 from "@/components/ServicesSvg/MadIcon/MadIcon4"
import MadIcon5 from "@/components/ServicesSvg/MadIcon/MadIcon5"
import MadIcon6 from "@/components/ServicesSvg/MadIcon/MadIcon6"

export const mobileAppDev: PageData = {
  hero: {
    title: [
      {
        text: "Customised ",
        color: "text-white",
      },
      {
        text: "Mobile App Development ",
        color: "",
        className: "libreItalic highlight-text",
      },
      {
        text: "Service",
        color: "text-white",
      },
    ],
    description: [
      {
        text: 'Precision Engineering for Unique Digital Products.At Moonstack, "Customized" means a deep dive into your technical requirements. We combine native performance with custom-built features—including Gen-AI, secure backend architectures, and seamless third-party integrations.',
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
        label: "Mobile App Development Company",
        href: "/services/mobile-app-development-company",
      },
    ],
  },
  seo: {
    title: "Custom Mobile App Development Company India & USA ",
    description:
      "Build high-performing Android, iOS, & cross-platform apps with senior developer team that ships fast and scales with your roadmap. Book a free consultation",
    keywords:
      "Mobile app maintenance services India,Mobile app maintenance company USA,App support and maintenance India,Mobile app troubleshooting service USA,App updates and upgrade service UK",
    canonical: "/services/mobile-app-development-company",
    ogImage: OgImageIcon.src,
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

  leftCardData: [
    {
      title:
        "Transform Your Business with Industry-Leading End-to-End Mobile Solutions",
      description:
        "At Moonstack, we understand the power of mobile applications and deliver complete end-to-end mobile app solutions in India for businesses. When built right, mobile apps can scale businesses and build brands. They are the most direct connection customers have with brands and a gateway to customer retention and business growth. ",
      stats: [
        "As a premier mobile app development company in India, we excel in building custom Android, iOS, web, and cross-platform apps tailored to your business goals. Our team consists of developers, UI designers, and UX specialists who collaborate to build scalable apps with robust and secure backend systems and intuitive front-end design over a scalable architecture.",
      ],
      description2:
        "From helping startups develop their MVP concepts to working with MNCs seeking enterprise mobile app solutions in India, we’ve worked across industries such as e-commerce, healthcare, finance, and logistics with great success. So, if you’re looking for an experienced mobile app development agency in India that offers an optimal balance of technical expertise and design fluency, choose Moonstack today.",
      image: bndimage1.src,
      bolds: false,
    },
  ],
  solutions: {
    headingContent: [
      {
        text: "Specialized Engineering for ",
        color: "text-white",
      },
      {
        text: "Complex Mobile applications",
        color: "text-white libreItalic font-[400] highlight-text",
      },
    ],
    subHeadingText:
      "Our experienced mobile app developers in India at Moonstack offer a range of custom app development and app modernisation services in India. Here’s a detailed overview of our selection of speciality services in mobile app development for businesses in India.",
  },
  featuresData: [
    {
      Icon: MadIcon1,
      imgSrc: "",
      title: "Android App Development",
      description:
        "Moonstack offers high-performance mobile app development services in India. Our mobile application developers in India work alongside top designers to create a consistent front-end design for your Android applications.",
    },
    {
      Icon: MadIcon2,
      imgSrc: "",
      title: "iOS App Development",
      description:
        "Moonstack offers the best mobile app development services in India for iOS development. Our team of top mobile app developers in India is experienced in developing iOS applications for all Apple devices.",
    },

    {
      Icon: MadIcon3,
      imgSrc: "",
      title: "React Native App Development",
      description:
        "If you’re looking for affordable mobile app development services in India, our React native app development services are perfect for you. This is one of our most sought-after services for mobile app design and development in India.",
    },
    {
      Icon: MadIcon4,
      imgSrc: "",
      title: "Flutter app development",
      description:
        "Launch Faster & Scale Smarter with Flutter App Solutions: Don't let platform boundaries slow your growth. Our Flutter development service allows you to reach both Android and iOS users simultaneously with 50% faster development cycles",
    },
    {
      Icon: MadIcon5,
      imgSrc: "",
      title: "Progressive Web App (PWA) Development",
      description:
        "Our on-demand mobile app development service in India for progressive web apps is reliable, secure, and offers unmatched functionality with minimal friction for users.",
    },
    {
      Icon: MadIcon6,
      imgSrc: "",
      title: "App Maintenance & Post Deployment Support",
      description:
        "As a part of our mobile app development for startups in India, at Moonstack, we offer ongoing app maintenance and post-deployment support.",
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
    title: "How We Build Smarter: Our ",
    highlight: "Tech-Driven Development Process",
    subtitle:
      "At Moonstack, our process is focused on transparency, confidentiality, and a personalised working experience for our clients. Here’s a detailed overview of our working process for our mobile app development services in India.",
    steps: [
      {
        number: 1,
        title: "Initial Discussion & Understanding Project Scope",
        description:
          "We get to work right from the first discussion to help you get started. Whether you’re trying to hire mobile app developers in India through Moonstack or you’re interested in our full-service app development solutions to outsource mobile app development in India, we can do it all. We also take confidentiality very seriously, which is why we sign a Non-Disclosure Agreement (NDA) with our clients to ensure they can trust us with their app ideas confidently.",
        position: "left",
      },
      {
        number: 2,
        title: "Research & Prototyping",
        description:
          "Once the formalities are complete, we start our work with a thorough background and market research for our client’s industry, as well as their app idea. Based on our findings, we start our work with a project roadmap and a wireframe of the app’s functionality. We identify market opportunities for our clients to ensure their product meets user needs and offer an excellent user experience.",
        position: "right",
      },
      {
        number: 3,
        title: "Development & Testing",
        description:
          "Our experienced mobile app developers in India create every app from scratch, methodically creating a truly custom application that’s built specifically as per your security, design, and functionality specifications. Whether it is a cross-platform Native-React application or a native Android or iOS app, our QA engineers follow a strict quality standard to ensure there are no bugs or performance issues in your app.",
        position: "left",
      },
      {
        number: 4,
        title: "Deployment & Launch Support",
        description:
          "As a part of our enterprise mobile app solutions in India, once the mobile application has passed testing and quality standards, we offer complete launch support to our clients. This includes the deployment of the apps on popular app stores like Google Play Store and Apple App Store. We also help our clients optimize their app listings on app stores to improve visibility and help with a successful app launch. We also offer app maintenance and monitoring support to our clients after the app launch is complete.",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Why Smart Businesses Choose Our " },
      {
        text: "Mobile Development",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: "Expertise" },
    ],
    description:
      "As one of the top local mobile app development firms in India, Moonstack offers solutions that are rooted in practicality, transparency, and efficiency. Here are some of the highlight reasons on why you should work with us.",
    cards: [
      {
        id: "Experienced in Multi-Platform App Development",
        label: "Experienced in Multi-Platform App Development",
        description:
          " At Moonstack, we have optimal experience in building native Android and iOS apps, as well as multi-platform React-Native apps and PWAs.",
        variant: "light",
      },
      {
        id: "100% Custom Mobile App Solutions",
        label: "100% Custom Mobile App Solutions",
        description:
          "We don’t believe in templates at Moonstack. Thanks to our experienced team of designers and developers, we build every app from scratch, ensuring unparalleled functionality and security across platforms.",
        variant: "accent",
      },
      {
        id: "Real World App Building Experience",
        label: "Real World App Building Experience",
        description:
          "Moonstack has worked with startups, SMEs, and even MNCs. This gives us real-world experience in managing our development to meet your business goals optimally.",
        variant: "dark",
      },
      {
        id: "Scalable Architecture",
        label: "Scalable Architecture",
        description:
          "All our apps are built for scalability without hampering existing functions. This allows our clients to grow and expand their apps as per business requirements without fail.",
        variant: "dark",
      },
      {
        id: "Transparent Development",
        label: "Transparent Development",
        description:
          "We ensure our code is clean and accessible to the developers on board the project. Even after the app launch, we ensure the entire codebase is accessible to our client easily.",
        variant: "light",
      },
      {
        id: "Intent Focused UI/UX Design",
        label: "Intent Focused UI/UX Design",
        description:
          "At Moonstack, we ensure our design principles are focused on practicality and user ease of use. We work tirelessly on our app designs to ensure each interface is clean, professional, and easy to use with optimal functionality.",
        variant: "accent",
      },
    ],
  },
  NewBanner: {
    headingLines: [
      {
        text: "Want to Hire Scalable ",
      },
      {
        text: "Mobile App Developers ",
        className: "libreItalic font-[400]",
      },
      {
        text: "To Build Your Vision",
      },
    ],
  },

  accordionData: [
    {
      question: "What is the cost to develop a mobile app in India?",
      answer:
        "While it is not possible to put a number directly, it is generally maintained that cross-platform React-Native apps are more affordable to build than dedicated native Android or iOS apps.",
    },
    {
      question: "Which company is best for app development in India?",
      answer:
        "Moonstack is the best mobile app development company in India, with years of experience in offering full-service, affordable mobile app development services in India.",
    },
    {
      question: "What is the best approach for app development in India?",
      answer:
        "The best approach for app building is generally considered to be native app development as it ensures maximum platform-specific features and backend security.",
    },
    {
      question:
        "Does Moonstack make commercial apps with e-commerce functionality?",
      answer:
        "Yes, we have experience building commercial apps with full payment gateway integration and e-commerce functionality. We can even help our clients create e-commerce apps from their Shopify stores.",
    },
    {
      question:
        "Can I hire developers from Moonstack to join my in-house team?",
      answer:
        "You can consider hiring developers from Moonstack Pvt. Ltd. to join your in-house team.",
    },
  ],

  banner: {
    headingText: [],
    subHeadingText: [],
    image: "",
  },
  quoteBanner: {
    headingText: [],
    subHeadingText: [],
    image: "",
    buttonText: "",
  },
  whyChooseData: {
    headingText: "",
    subHeadingText: "",
    steps: [],
  },
  slides: [],
}

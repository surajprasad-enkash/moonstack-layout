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

export const react_native: PageData = {
  hero: {
    title: [
      {
        text: "Expert React Native app  Development Service Provider",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Modern Mobile Engineering for the Cross-Platform Era. We provide end-to-end React Native services designed to maximize ROI and user engagement.",
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
        label: "React Native  App  development  company",
        href: "/services/react-native-app-development-company",
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
    "15 years of experience really shows. Moonstack transformed our complex app idea into a sleek React Native reality. By using a single codebase, they made our long-term maintenance easier and significantly more affordable. Secure, scalable, and beautifully designed—Moonstack is easily the top React Native agency in India.",
  highlightText: "single codebase",

  leftCardData: [
    {
      title: "Globally Leading React Native Development Partner",
      description:
        "In 2025, we recommend our cross-platform app development service in India to all our clients. Dedicated and separate native development of both platforms can be excessively time-consuming, expensive, and offer a different user experience to users across different platforms. That’s why we develop custom React Native applications in India that function seamlessly across Android and iOS devices as they feature the same codebase.",
      stats: [],
      description2:
        "With over 15 years of experience and 450+ completed projects, Moonstack shines as the top React Native app development company in India. We thrive in building highly functional apps that feature an intuitive design, a UX-focused front-end, secure user data storage, and a scalable framework. Armed with the best React Native app developers in India, Moonstack is ready to help your business build multi-platform apps on a budget. Contact us today, and we can help you get started.",
      image: bndimage1.src,
    },
  ],
  solutions: {
    headingContent: [
      {
        text: "Our Specialities In",
        color: "text-white",
      },
      {
        text: " React Native",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: " Service",
        color: "text-white",
      },
    ],
    subHeadingText:
      "What makes Moonstack the top React Native development agency in India? It is our focus on specialised services that are built to offer maximum value to our clients. Here’s a peek at what we offer as part of our services for React Native mobile solutions in India.",
  },
  featuresData: [
    {
      imgSrc: intuitiveIcon.src,
      title: "Cross-Platform App Development",
      description:
        "The most important part of React Native app development is working on cross-platform compatibility. That’s why we at Moonstack hire the top React Native developers in India who have real-world experience in React Native building. This allows us to create apps that offer seamless access to users across platforms like Web, Android, and iOS.",
    },
    {
      imgSrc: engagingIcon.src,
      title: "Custom App Design & Development",
      description:
        "At Moonstack, we take custom development very seriously. As the best affordable React Native development service in India, we provide more value than any other agency by creating entire codebases from scratch. This helps our applications have fewer bugs or glitches because our team is familiar with the entire codebase. So, if you want to hire React Native developers in India, choose Moonstack to build with confidence.",
    },

    {
      imgSrc: brandingIcon.src,
      title: "Cross-Platform UX Design",
      description:
        "When applications are built natively and independently of each other, they can have vastly different UIs and UX for users. This is not good for brand consistency, and that’s why always prioritise cross-platform UX while building apps. Our key design strategy as the top company for React Native UI/UX design in India is to build apps that are accessible, easily navigable, and suit our clients’ brand image across platforms. This focus on cross-platform accessibility is the reason we’re the top React Native developers in India.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Clean Backend Code & API Integrations",
      description:
        "Cross-platform builds come with their significant challenges of maintaining the privacy, security, and quality standards of every platform. So, it is crucial to have clean backend code in cross-platform apps for added security and a lower risk of data breach. This is something we always follow as the top agency with React Native developers for startups in India.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Launch Support & Future Maintenance",
      description:
        "Our React Native maintenance services in India are robust and offer complete launch support for every app we build. We ensure your apps are deployed in the respective Play Store and App Store with optimised listing pages for search engine performance. Our services also include future maintenance and compatibility coverage for future Android and iOS versions.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "React Native Migration",
      description:
        "We offer a full-fledged React Native migration service in India as well for businesses that have existing applications and just want to migrate them to React Native for seamless cross-platform functionality and accessibility. Our services improve the app’s performance and ensure the applications are scalable for future expansions. It also helps reduce long-term costs associated with Native app development, maintenance, and updates.",
    },
  ],
  qualitySectionData: {
    heading: [],
    description: "",
    columsClass: "",
    list: [],
  },
  NewBanner: {
    headingLines: [
      { text: "Scale Your Business With Our React Native Apps Developers " },
    ],
  },
  OutcomeBanner: {
    heading: [
      {
        text: "Build Once, Reach Everyone: Your",
        color: "text-white",
        className: "",
      },
      {
        text: " Expert React Native Partner",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Cross-Platform Mastery",
      "Rapid Development Cycles",
      "Native-Like UI & Performance",
      "Cost-Efficiency & Scalability",
    ],
    buttonText: "Start Your Project Today",
  },

  CloudTimelineData: {
    title: "Our Process in providing",
    highlight: " React Native Development Service",
    subtitle:
      "Moonstack is the trusted partner for React Native enterprise app development in India across industries. Our success can be attributed to our working process, which is built around transparency and confidentiality. What sets us apart? Find out here.",
    steps: [
      {
        number: 1,
        title: "Crucial Pre-Work Formalities",
        description:
          "When you choose Moonstack, we want to build a relationship with our clients that’s built around mutual trust. So, along with our project contract, we also provide a signed NDA from our side to the client, offering complete secrecy for their app idea when and after they’re working with us. This is the most crucial part of our working partnership with every client.",
        position: "left",
      },
      {
        number: 2,
        title: "Idea Discussion & Scope of Work",
        description:
          "Once the formalities are complete, we extensively discuss the app idea with our clients, trying to understand their requirements, the app’s goal and functionality. We also create a visual framework for the app’s navigation and functioning that will allow the client to clearly see their idea laid out and green signal for final production.",
        position: "right",
      },
      {
        number: 3,
        title: "App Design & Development",
        description:
          "During production as a part of our service for React Native prototype development in India, we create a proof of concept or Minimum Viable Product for our clients. It helps them stay up-to-date with our production process. This also helps us make changes and add features on a regular basis without disrupting the workflow or causing errors in the code.",
        position: "left",
      },
      {
        number: 4,
        title: "Launch and Post-launch Support",
        description:
          "After the development and testing, we complete our React Native app performance optimisation in India to the gleaming approval of our clients. Post development, it's just about deploying the application on relevant app stores and optimising the listing for better search engine indexing. We also offer detailed post-launch support and app maintenance services.",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Why Choose Moonstack for your" },
      {
        text: " React Native",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: " Project?" },
    ],
    description:
      "Moonstack is the premier React Native development agency in India, and here are six ways we offer more value to our clients than the competition.",
    cards: [
      {
        id: "15 Years of Industry Experience",
        label: "15 Years of Industry Experience",
        description:
          "We have 15+ years of hands-on experience at Moonstack. Our expertise ranges across industries with a solid track record of helping businesses scale with our app development services.",
        variant: "light",
      },
      {
        id: "Truly Custom App Builds",

        label: "Truly Custom App Builds",
        description:
          "Moonstack delivers completely custom app builds made from scratch by our experienced React Native developers. We never use templates or shortcuts when it comes to client projects.",
        variant: "accent",
      },
      {
        id: "End-to-end Service",

        label: "End-to-end Service",
        description:
          "An app that’s easy to use is one that users come back to. We ensure our app designs are intuitive, clean, and offer functionality with convenience to users.We provide complete development solutions for startups and enterprises, from developing a proof-of-concept to deploying complete cross-platform React Native applications to app stores.",
        variant: "dark",
      },
      {
        id: "Experienced Team",

        label: "Experienced Team",
        description:
          "We work with the top React Native developers in India. Our team functions as one with industry-leading experts from each field collaborating to build top-tier React Native applications.",
        variant: "dark",
      },
      {
        id: "Client-Centric Approach",

        label: "Client-Centric Approach",
        description:
          "Our focus on every project is to create applications that fit our client’s business goals without fail.",
        variant: "light",
      },
      {
        id: "Quick Development Timeline",

        label: "Quick Development Timeline",
        description:
          "Our React Native app development services in India offer a quick development timeline thanks to our team’s experience and React Native’s multi-platform building capabilities.",
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

  accordionData: [
    {
      question:
        "Which is the best React Native app development company in India?",
      answer:
        "Moonstack is the best React Native app development company in India. We have 15 years of experience and have completed 450+ app development projects. We have thorough experience in React Native development and offer affordable React Native development services in India.",
    },
    {
      question: "Which popular apps have been built using React Native?",
      answer:
        "Many of the popular apps that you use on a daily basis have been developed using React Native, starting with the biggest names such as Facebook, Instagram, Twitter, and Netflix.",
    },
    {
      question: "Which is better, React Native or Flutter?",
      answer:
        "Both platforms are very strong and offer excellent cross-platform development access. The one you choose depends largely on your requirements and preferences.",
    },
    {
      question: "Are React Native apps secure and bug-free?",
      answer:
        "Yes, as the platform that was used to build multi-billion dollar applications like Facebook, Instagram, and Twitter, it is safe to say React Native apps can be safe and bug-free. Especially when you work with the right agency like Moonstack.",
    },
    {
      question:
        "Is it better to choose Native app development or React Native app development?",
      answer:
        "Native app development offers more system-specific development features, while React Native focuses on cross-platform compatibility. Each has its pros and cons; the better option depends solely on your requirements.",
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

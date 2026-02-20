import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/meeting-banner-images/ios.webp"
import androidContactbannerImg from "@/assets/app-development-images/contact-app-img.webp"
import androidBannerImg from "@/assets/app-development-images/android-banner.webp"
import bndimage1 from "@/assets/services/ios/ios.webp"

// Svg Icons Components
import IosIcon1 from "@/components/ServicesSvg/IosIcons/IosIcon1"
import IosIcon2 from "@/components/ServicesSvg/IosIcons/IosIcon2"
import IosIcon3 from "@/components/ServicesSvg/IosIcons/IosIcon3"
import IosIcon4 from "@/components/ServicesSvg/IosIcons/IosIcon4"
import IosIcon5 from "@/components/ServicesSvg/IosIcons/IosIcon5"
import IosIcon6 from "@/components/ServicesSvg/IosIcons/IosIcon6"
import bccKristenCheng6 from "@/assets/clientsImages/admissifyceo.jpg"

export const ios: PageData = {
  hero: {
    title: [
      {
        text: "Powerful ",
        color: "text-white",
      },
      {
        text: "iOS App Development ",
        color: "",
        className: "libreItalic highlight-text",
      },
      {
        text: "for the Apple Ecosystem",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Elite iOS development tailored for global reach. We combine Apple’s stringent security standards with industry-leading UI/UX design to build apps that stand out on the App Store.",
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
        label: "ISO App Development",
        href: "/services/iso-app-development-company",
      },
    ],
  },
  seo: {
    title: "IOS App Development Company in India & USA ",
    description:
      "Searching for expert IOS app developers in India? Moonstack designs and builds iPhone and iPad apps with pixel‑perfect UI and App Store–ready performance. Call Now!",
    keywords:
      "iOS app development Service India,iOS app development company USA,Best iOS app developers India,Custom iOS application development service USA,iOS app development agency UK",
    canonical: "/services/iso-app-development-company",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points:
    "Moonstack’s IOS Development mastery was a game-changer. They engineered a high-performance architecture that boosted our app’s fluidity by 45%. From navigating strict App Store security to delivering a premium, native feel, Moonstack is the premier partner for high-converting iOS solutions.",
  highlightText: "boosted our app’s fluidity by 45%",
  userImage: bccKristenCheng6,
  userRole: "CEO",
  userName: "Kristen Cheng",
  leftCardData: [
    {
      title: "IOS App Development Services",
      description:
        " With Moonstack, you can build iOS apps that seamlessly function across every Apple device responsively. As the top iOS app development agency in India, we ensure multi-device compatibility for our iOS apps, including Macs, iPhones, iPads, and even Apple Watches. The Apple device ecosystem is vast, with new products added to it every few years. This is why our custom iOS application development service in India allows businesses to stay on top of the newest iOS and Apple trends and scale their businesses exponentially.",
      stats: [
        "The number of Apple users is growing rapidly in India rapidly with most users choosing iPhones over Android devices for a premium mobile experience. Brands that have taken note of this trend and invested in iPhone application development services in India have benefited exponentially. As the premier iOS app development company in India, choosing Moonstack can help you develop a truly custom, secure, responsive, and scalable iOS app that suits your every business goal.",
      ],
      description2:
        "With over 15 years of experience and 450+ completed projects, we have worked with a range of businesses right from startups to enterprises. Our iOS application consulting services in India are highly specialised and built to suit your needs. Contact us, and we can help you build your dream app starting today.",
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
        text: "iOS Development",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: " Services",
        color: "text-white",
      },
    ],
    subHeadingText:
      "We are proud to work with the best iOS app developers in India, and here’s a selection of what we offer to help you understand our team's strength and expertise.",
  },
  featuresData: [
    {
      Icon: IosIcon1,
      title: "iOS App Consultation & Strategy",
      description:
        "Building an iOS application is a long process, which involves first understanding your business goals and formulating how to create an application that fits your needs. Luckily, when you choose Moonstack, the best iOS app development service in India, you don’t have to make these decisions alone. Our team of highly qualified developers helps you create a framework that helps you visualise exactly how the app functionality will work, as well as the entire development structure. This attention to detail helps us rank as the top iOS app development firm in India.",
      imgSrc: "",
    },
    {
      Icon: IosIcon2,
      title: "Custom iOS App Development",
      description:
        "Our iOS mobile app development services in India at Moonstack are always keeping in mind the stringent quality standards of Apple. We not only follow these standards, but also ensure your application performs seamlessly across different iOS devices. Our native iOS app development service in India focuses on complete custom iOS app development for our clients, including developing the entire codebase from scratch using clean code.",
      imgSrc: "",
    },

    {
      Icon: IosIcon3,
      title: "Frontend Development With Intuitive UI/UX Design",
      description:
        "An intuitive UI and UX design is crucial for an iOS application’s success in 2025. We at Moonstack ensure our iOS app designing service in India is focused on designing clean interfaces that are easy to navigate and visually soft. We try to develop unique design languages for each app based on our client’s branding and market positioning. We also integrate accessibility in our designs to make the apps convenient for all users.",
      imgSrc: "",
    },
    {
      Icon: IosIcon4,
      title: "iOS App Integrations & 3rd Party API Deployment",
      description:
        "When you hire iOS app developers in India through Moonstack, we always take care of two things in the backend of every app. First, we ensure the app is connected to third-party platforms for monitoring of analytics and user request fulfilment. Secondly, we guarantee there’s secure connectivity with APIs to ensure a smooth and seamless application user experience. Our API calls are adequately marked in code to ensure it's easy to recheck or debug later if required.",
      imgSrc: "",
    },
    {
      Icon: IosIcon5,
      title: "iOS App Testing & Debugging",
      description:
        "Once the developmental phase is complete, our QA engineers at Moonstack ensure there are no bugs or glitches in the app’s code or functioning. We ensure the app runs smoothly across Apple devices and it's able to perform fast, have proper user data security, and be responsive across different screen sizes. This is the testament to our service and what makes us the best iOS app testing company in India.",
      imgSrc: "",
    },
    {
      Icon: IosIcon6,
      title: "App Store Deployment & Post-launch Support",
      description:
        "Most agencies that offer iOS app development skim on the post-launch support and app maintenance parts, but not us. At Moonstack, we pride ourselves on our iOS app support and maintenance services in India. We provide iOS app migration services in India to ensure your application is compatible with the latest iOS releases. This, along with our App Store deployment and optimisation of your listing, guarantees you get end-to-end iOS app development service when you choose Moonstack.",
      imgSrc: "",
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
      {
        text: "Develop an Optimised Proof ",
      },
      {
        text: "of Concept With Our ",
        className: "libreItalic font-[400]",
      },
      {
        text: "iOS App Developers",
      },
    ],
  },
  OutcomeBanner: {
    heading: [
      { text: "Ready to Launch ", color: "text-white", className: "" },
      {
        text: " Your Premium iOS App?",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Privacy-First Security Framework",
      "Seamless Ecosystem Integration",
      "Apple Intelligence & CoreML",
      "App Store Excellence",
    ],
    buttonText: "Talk To Us",
  },

  CloudTimelineData: {
    title: "Our Process for ",
    highlight: "iOS App Development",
    subtitle:
      "At Moonstack, we value transparency and confidentiality for our enterprise iOS app development services in India. Our team manages this dichotomy with a stringent set of guidelines and a working structure. Here’s an overview of our collaborative process for iOS app development at Moonstack.",
    steps: [
      {
        number: 1,
        title: "Strategy Discussion & Frameworking",
        description:
          "Our initial discussions with you start productively with a clear understanding of your requirements. We sign an NDA upfront to ensure you have confidence in our professionalism. This also ensures your app idea is safe with Moonstack. Next, we ask you relevant questions to better understand the functionality and purpose of the app. Once that’s done, our team begins work from day one, and we start creating a framework for your app.",
        position: "left",
      },
      {
        number: 2,
        title: "Design Flow & Prototyping",
        description:
          "After the framework is approved, we create a design flow to logically lay out the navigation of the application. This is also done to optimize the UX of the application, ensuring the application is easy to navigate and accessible to all users. Each design prototype is approved by your team to ensure you’re always up-to-date with the production process.",
        position: "right",
      },
      {
        number: 3,
        title: "Customisation, Development, & Testing",
        description:
          "The development process involves completing the design and connecting your applications to relevant external platforms and APIs to complete their functionality. We ensure each app is coded from scratch and there’s clean code in the codebase to ensure it's accessible to the client team on demand.",
        position: "left",
      },
      {
        number: 4,
        title: "Launch & Future Maintenance",
        description:
          "At Moonstack, our affordable iOS app development services in India include complete launch support and future maintenance of your application. We ensure your app is easy to find on the App Store, along with maintenance support for future iOS upgrades. For any future feature upgrades, clients can always avail our iOS app upgrade services in India as well.",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Why Choose Moonstack for Your " },
      {
        text: "iOS App ",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: "Service?" },
    ],
    description:
      "If you wanted to know what sets our iPad app development service in India apart, here are six reasons to help you get started.",
    cards: [
      {
        id: "450+ Real World Project Experience",
        label: "450+ Real World Project Experience",
        description:
          "We’ve developed over 450 projects in the span of 15 years as the top iOS app development company in India.",
        variant: "light",
      },
      {
        id: "Truly Custom App Builds",
        label: "Truly Custom App Builds",
        description:
          "We create apps from scratch for our clients that are suited to their requirements. No templates, no starter packs.",
        variant: "accent",
      },
      {
        id: "User Experience Centric Design",
        label: "User Experience Centric Design",
        description:
          "An app that’s easy to use is one that users come back to. We ensure our app designs are intuitive, clean, and offer functionality with convenience to users.",
        variant: "dark",
      },
      {
        id: "Transparent Building",
        label: "Transparent Building",
        description:
          "We always ensure you’re a part of the team when you work with Moonstack. Our developers use clean code to guarantee the codebase is accessible, and we provide regular updates so you’re always up-to-date with developments.",
        variant: "dark",
      },
      {
        id: "Scalable Builds For Growing Businesses",
        label: "Scalable Builds For Growing Businesses",
        description:
          "We create scalable apps that can adapt to the growing needs of a successful business. And we always offer ongoing support for builds to all our clients.",
        variant: "light",
      },
    ],
  },

  accordionData: [
    {
      question: "How much does it cost to develop an iOS app in India?",
      answer:
        "The development cost is determined based on multiple factors such as the build platform and app purpose, and functionality. If you want a detailed quote, you can contact our team at Moonstack, and we can offer a free quotation to you for your iOS app build.",
    },
    {
      question: "Who is the best iOS app developer in India?",
      answer:
        "If you’re going by the iOS app developer that provides the most value to their clients as part of their affordable iOS app development services in India? It's Moonstack.",
    },
    {
      question: "Are iOS devs in demand?",
      answer:
        "Yes, as Apple users are exponentially growing in India with the launch of every new iPhone, iOS devs are more in demand now than ever before. This is because most apps want to capitalise on the growing premium mobile user base in India that uses Apple products with their premium apps and services.",
    },
    {
      question: "Which language is best for iOS development?",
      answer:
        "iOS app development is best done using Swift and Swift UI platforms that are specifically built for iOS app development. We use both Swift as well as other specialised iOS build platforms at Moonstack to develop specialised and responsive iOS applications.",
    },
    {
      question: "Can Moonstack help us upgrade an existing iOS application?",
      answer:
        "Yes, you can easily avail of our iOS app upgrade services in India. Simply contact us through our website, and we will help you get started as soon as possible.",
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

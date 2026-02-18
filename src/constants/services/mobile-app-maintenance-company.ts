import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/meeting-banner-images/mobile-main.webp"
import bndimage1 from "@/assets/industries/icon/bndImage1.webp"

// svg icons components
import MamIcon1 from "@/components/ServicesSvg/MamIcon/MamIcon1"
import MamIcon2 from "@/components/ServicesSvg/MamIcon/MamIcon2"
import MamIcon3 from "@/components/ServicesSvg/MamIcon/MamIcon3"
import MamIcon4 from "@/components/ServicesSvg/MamIcon/MamIcon4"
import MamIcon5 from "@/components/ServicesSvg/MamIcon/MamIcon5"
import MamIcon6 from "@/components/ServicesSvg/MamIcon/MamIcon6"

export const app_maintenance: PageData = {
  hero: {
    title: [
      {
        text: "Future-Proof Your App: ",
        color: "text-white",
      },
      {
        text: "Expert App Maintenance ",
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
        text: "Keep your digital product at peak performance. Our maintenance services go beyond bug fixes; we provide proactive monitoring, security patching, and OS compatibility updates to ensure your app remains fast and reliable. Partner with Moonstack to eliminate downtime and provide your users with a flawless experience, 24/7",
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
        label: "Mobile App Maintenance Company",
        href: "/services/mobile-app-maintenance-company",
      },
    ],
  },
  seo: {
    title: "Mobile App Maintenance & Support in India & USA | Moonstack",
    description:
      "Want mobile app maintenance Service? We provide ongoing updates, crash fixes, performance tuning, and OS compatibility support for your Android and iOS apps.",
    keywords:
      "Mobile app maintenance services USA,Mobile app maintenance company USA,App support and maintenance India,Mobile app troubleshooting service India,App updates and upgrade service India,Mobile app bug fixing service India",
    canonical: "/services/mobile-app-maintenance-company",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

  leftCardData: [
    {
      title: "Reliable Mobile App Maintenance Services for Peak Performance",
      description:
        "Mobile applications require periodic maintenance and updates to function optimally. That’s why Moonstack offers the best mobile app maintenance services in India. Whether you’ve availed of our development services or not, we can help you maintain your app to the highest standards of security, stability, future-proof compatibility, and user experience. We even help apps fix bugs, optimise performance issues, and monitor analytics as a part of our app performance monitoring services in India.",
      stats: [],
      description2:
        "As the premier mobile app maintenance company in India, we pride ourselves on offering bespoke maintenance solutions to our clients. Our team is led by dedicated maintenance and QA specialists who ensure your app’s code is routinely tested and updated to meet the highest standards of latest OS compatibility. We offer both Android and iOS app maintenance services in India, and if you’re interested, we can offer a mobile app AMC (annual maintenance contract) in India too for our clients. So, hurry and contact us today.",
      image: bndimage1.src,
      bolds: false,
    },
  ],
  solutions: {
    headingContent: [
      {
        text: "Our Specialities In",
        color: "text-white",
      },
      {
        text: "App Maintenance",
        color: "text-white libreItalic font-[400] highlight-text",
      },
    ],
    subHeadingText:
      "After 15+ years in the industry and 450+ projects completed, Moonstack has specialised expertise in providing services for app support and maintenance in India.",
  },
  featuresData: [
    {
      Icon: MamIcon1,
      imgSrc: "",
      title: "Performance Optimisation",
      description:
        "As a part of our Android app maintenance service in India and our mobile app troubleshooting service in India, we offer complete performance optimisation for the mobile apps we maintain. This includes removing bottlenecks and optimising backend processes.",
    },
    {
      Icon: MamIcon2,
      imgSrc: "",
      title: "Feature Improvements",
      description:
        "Moonstack offers the most thorough app updates and upgrades service in India. Our mobile app enhancement service in India can be used to refine design elements, improve usability, and enhance features based on user feedback.",
    },

    {
      Icon: MamIcon3,
      imgSrc: "",
      title: "Security Improvements & Compliance",
      description:
        "Afraid of data breaches or corruption of user data? Avail of Moonstack’s app security maintenance services in India. We offer complete assistance in monitoring and fixing code vulnerabilities while ensuring OS and app store compatibility.",
    },
    {
      Icon: MamIcon4,
      imgSrc: "",
      title: "Bug Fixes",
      description:
        "Bugs can ruin the user experience of your app; that’s why you should try our mobile app bug fixing services in India. We offer quick debugging and issue-based resolution to minimise your app’s downtime during maintenance.",
    },
    {
      Icon: MamIcon5,
      imgSrc: "",
      title: "OS Update Compatibility",
      description:
        "We offer a proactive mobile app support service in India at Moonstack. This includes UI adjustments and API changes to match the latest OS updates and optimise app compatibility across devices.",
    },
    {
      Icon: MamIcon6,
      imgSrc: "",
      title: "Analytics & Reporting",
      description:
        "As a leading app maintenance agency, we help businesses with third-party mobile app maintenance services in India that are tailored to their needs. Our analytics and reporting services offer crucial insights on app performance and user behaviour, which can be used to optimise the app further.",
    },
  ],
  OutcomeBanner: {
    heading: [
      { text: "Keep Your ", color: "text-white", className: "" },
      {
        text: "Android App Running ",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
      { text: "at Peak Performance", color: "text-white", className: "" },
    ],
    checklist: [
      "24/7 Performance Monitoring",
      "Regular Security Updates & Bug Fixes",
      "OS Compatibility Maintenance",
      "Proactive Issue Resolution",
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
    title: "Our Process to Assist You in ",
    highlight: "App Maintenance",
    subtitle:
      "Moonstack is the leading provider of app optimisation services in India. So, if you want to know what makes us the best, here’s an overview of how we provide tangible results to our clients.",
    steps: [
      {
        number: 1,
        title: "App Audit",
        description:
          "As a part of our ongoing app support service in India, we get to work from the first call itself. We gather crucial data regarding the app’s bugs and user reports, and based on that, we start studying the codebase as a part of our audit process.",
        position: "left",
      },
      {
        number: 2,
        title: "Maintenance Strategy",
        description:
          "Based on user reports, backend performance bottlenecks, and compatibility issues, we create a maintenance plan strategy that helps fix the problems with the least possible downtime. However, we always first recommend our clients to use our app data backup services in India to protect their codebase against any malfunctions.",
        position: "right",
      },
      {
        number: 3,
        title: "Upgrade Implementation",
        description:
          "Once the strategy is in place, we quickly implement the necessary changes in the code to fix the pertinent issues. We monitor our changes and also keep an eye out for any new bugs at all times. This helps us ensure the changes are functional and align with your user experience requirements.",
        position: "left",
      },
      {
        number: 4,
        title: "Continuous Improvement",
        description:
          "We work tirelessly to continuously improve our maintenance efforts. We also include our clients in the process of our application troubleshooting support service in India by sending them regular updates and reports of key analytical metrics.",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Why Choose Us for Maintaining Your " },
      {
        text: "App to Run Smoothly?",
        className: "libreItalic font-[400] highlight-text",
      },
    ],
    description:
      "Our emergency app support services in India have helped many businesses across industries. Apart from our stellar records and highly appreciative clientele, here are some more reasons why you should work with Moonstack.",
    cards: [
      {
        id: "Dedicated Team",
        label: "Dedicated Team",
        description:
          "We are proud to work with a dedicated team of QA specialists, developers, and maintenance engineers who handle all our maintenance services.",
        variant: "light",
      },
      {
        id: "Platform Independent Expertise",
        label: "Platform Independent Expertise",
        description:
          "Our team is experienced in offering maintenance services for apps built across platforms such as Android, iOS, and even hybrid frameworks.",
        variant: "accent",
      },
      {
        id: "Security First Approach",
        label: "Security First Approach",
        description:
          "When you choose Moonstack, you can rest assured that the security standards and OS policies will always be followed, ensuring app compliance across platforms and app stores.",
        variant: "dark",
      },
      {
        id: "Proactive Maintenance",
        label: "Proactive Maintenance",
        description:
          "We create failsafes in the code that prevent major outages or problems with the core function of the app. This helps us prevent problems in the first place and offer a seamless user experience to users.",
        variant: "dark",
      },
      {
        id: "Tailored Maintenance",
        label: "Tailored Maintenance",
        description:
          "Not only do we offer tailored maintenance for your apps, but we also offer tailored pricing for every project and do not overcharge or oversell our clients, services that they wouldn’t need.",
        variant: "light",
      },
      {
        id: "Transparency Always",
        label: "Transparency Always",
        description:
          " When you choose Moonstack, you will always be a part of the loop with regular updates and reports delivered to you at every stage of our mobile app SLA support service in India.",
        variant: "accent",
      },
    ],
  },
  NewBanner: {
    headingLines: [
      {
        text: "Need Reliable ",
      },
      {
        text: "Mobile App Maintenance ",
        className: "libreItalic font-[400]",
      },
      {
        text: "For Happy Users",
      },
    ],
  },

  accordionData: [
    {
      question: "What is mobile app maintenance?",
      answer:
        "Mobile app maintenance refers to the continuous updates to the app that are required to optimise an app’s performance, compatibility, and responsiveness across devices and platforms. This process also includes fixing bugs and performance issues of mobile apps.",
    },
    {
      question: "How much does mobile app maintenance cost?",
      answer:
        "Mobile app maintenance is generally a fixed cost, and annual contracts can range anywhere from 10 to 20% of the app’s build cost. However, this cost can change based on the level of maintenance and upkeep required to optimize your app’s performance.",
    },
    {
      question: "How long does mobile app maintenance take?",
      answer:
        "Mobile app maintenance is an ongoing work that involves studying analytics and reading user bug reports to continually update the app’s codebase. It helps prevent user experience failures in the app and creates a cohesive experience for all users.",
    },
    {
      question:
        "Does Moonstack offer a yearly mobile app maintenance contract?",
      answer:
        "Yes, Moonstack offers yearly mobile app maintenance (AMC) contracts. You can contact our team to learn more about them and to get a free AMC quotation for your app.",
    },
    {
      question:
        "Can Moonstack help me fix performance issues and bugs as a part of app maintenance?",
      answer:
        "Yes, we provide complete app optimisation services that include fixing performance issues and bugs as part of our maintenance services.",
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

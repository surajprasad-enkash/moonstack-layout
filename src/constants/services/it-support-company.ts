import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/app-development-images/native-banner-img.webp"
import androidContactbannerImg from "@/assets/app-development-images/contact-app-img.webp"
import androidBannerImg from "@/assets/app-development-images/android-banner.webp"

import Icon1 from "@/components/ServicesSvg/ItSupportIcon/ItSupportIcon1"
import Icon2 from "@/components/ServicesSvg/ItSupportIcon/ItSupportIcon2"
import Icon3 from "@/components/ServicesSvg/ItSupportIcon/ItSupportIcon3"
import Icon4 from "@/components/ServicesSvg/ItSupportIcon/ItSupportIcon4"
import Icon5 from "@/components/ServicesSvg/ItSupportIcon/ItSupportIcon5"
import Icon6 from "@/components/ServicesSvg/ItSupportIcon/ItSupportIcon6"

export const it_support: PageData = {
  hero: {
    title: [
      {
        text: "Supporting India & USA Businesses With ",
        color: "text-white",
      },
      {
        text: "Seamless IT Solutions",
        color: "",
        className: "libreItalic highlight-text",
      },
    ],
    description: [
      {
        text: "We provide seamless, end-to-end technical support that bridges the gap between complex challenges and streamlined operations for businesses in India and the USA.",
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
        label: "IT Support",
        href: "/services/it-support-company",
      },
    ],
  },
  seo: {
    title: "Managed IT Support Services India & USA | Moonstack",
    description:
      "Looking for reliable IT support Service? Moonstack provides managed IT services, monitoring, & incident response to keep your systems secure and teams productive.",
    keywords:
      "managed IT support company USA,affordable IT helpdesk services India,remote IT support for businesses India,IT infrastructure support USA,24/7 IT support providers India,enterprise IT support services India,IT network troubleshooting services USA",
    canonical: "/services/it-support-company",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

  leftCardData: [],
  solutions: {
    headingContent: [
      {
        text: "Maximize Efficiency With ",
        color: "text-white",
      },
      {
        text: "Proactive IT Support ",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: "And Management",
        color: "text-white",
      },
    ],
    subHeadingText:
      "Eliminate technical bottlenecks and propel your business forward with Moonstack’s premier IT infrastructure management. Our proactive support model keeps you ahead of the curve by delivering smooth, end-to-end technical services that allow you to focus entirely on your core business goals.",
  },
  featuresData: [
    {
      Icon: Icon1,
      imgSrc: "",
      title: "How Our IT Support Will Help You",
      description:
        "Keep your business running smoothly with our range of IT solutions that keep you ahead of the curve. Don't put up with outmoded technologies and communications. Let our IT support company deliver smooth service and support so you can focus on what you do best.",
    },
    {
      Icon: Icon2,
      imgSrc: "",
      title: "Complete IT Support. One Reliable Partner.",
      description:
        " We are one of the Famous India based IT support companies having a team of expert IT consultants that collaborate with you to offer an assortment of professional services, such as help desk support, server administration, cloud services support, data backup and recovery, IT asset management, and vendor management.",
    },
    {
      Icon: Icon3,
      imgSrc: "",
      title: "Server Administration in India and USA",
      description:
        "We know that data loss can be catastrophic for any business. We at Moonstack, provide robust Data Backup and Recovery services in India to safeguard your valuable data. Our innovative backup solutions safeguard that your data is always secure and easily recoverable in the event of unexpected events. We comprehend the importance of data integrity and strive to deliver peace of mind through our reliable services.",
    },
    {
      Icon: Icon4,
      imgSrc: "",
      title: "Expert Server Management Solutions You Can Trust",
      description:
        "Our cutting-edge services, like Server Administration in India, are personalized to meet your specific business needs. We offer a wide range of server management services that include security updates, regular maintenance, and performance optimization. With us, you can be assured that your servers are in skilled hands, allowing you to focus on growing your business.",
    },
    {
      Icon: Icon5,
      imgSrc: "",
      title: "Protecting Your Data, Powering Your Digital Growth",
      description:
        "We will be your trusted partner in providing flawless services of Data Backup and Recovery in India for your team, which include phone, internet, and local managed services. Our inclusive end-to-end Server Administration in India offers unmatched cloud computing solutions that redefine the potential of the digital landscape. We know that data loss can be catastrophic for any business.",
    },

    {
      Icon: Icon6,
      imgSrc: "",
      title: "Why Choose Moonstack?",
      description:
        "Choosing Moonstack means partnering with a company that values your business as much as you do. At Moonstack we are focused on quality and doing the right thing by serving our customers. Being a trusted IT support company, we employ preventive measures that help solve future challenges before they escalate. Our intent is to produce efficient and effective solutions that improve the modalities of your enterprise.",
    },
  ],

  NewBanner: {
    headingLines: [
      {
        text: "Scale Your Global Infrastructure ",
      },
      {
        text: "With Our 5-Star ",
        className: "libreItalic",
      },
      {
        text: "IT Support Team",
      },
    ],
  },
  OutcomeBanner: {
    heading: [
      {
        text: "Maximize Your Efficiency With ",
        color: "text-white",
        className: "",
      },
      {
        text: "Our Expert IT Support Team",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Robust & Secure Architecture",
      "Proactive Monitoring & Support",
      "High-Performance Server Admin",
      "Reliable Backup & Recovery",
    ],
    buttonText: "Book a meeting",
  },

  CloudTimelineData: {
    title: "Get in Touch",
    highlight: " With Moonstack",
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
      { text: "Edge Tools Drive That" },
      {
        text: "Performance",
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

  qualitySectionData: {
    heading: [],
    description: "",
    columsClass: "lg:grid-cols-3",
    list: [],
  },
  accordionData: [
    {
      question: "What types of businesses do you provide IT support for?",
      answer:
        "We support businesses of all sizes, from startups to large enterprises, across various industries. Our scalable solutions are designed to meet the unique needs of each client.",
    },
    {
      question: "Do you offer 24/7 IT support?",
      answer:
        "Yes, our helpdesk and monitoring services operate 24/7/365 to ensuring critical issues are addressed immediately, minimizing downtime and keeping your business running smoothly.",
    },
    {
      question: "Can you support remote or hybrid teams?",
      answer:
        "Absolutely. We specialize in setting up and securing remote work environments, providing seamless access to company resources, VPN management, and ongoing support for distributed teams.",
    },
    {
      question: "Do you provide proactive monitoring?",
      answer:
        "Yes, our managed IT services include proactive monitoring to detect and resolve potential issues before they impact your operations, ensuring better system reliability and performance.",
    },
    {
      question: "How quickly can we expect a response to our support tickets?",
      answer:
        "We prioritize urgent issues and adhere to strict SLAs (Service Level Agreements). Our team is committed to providing rapid responses and efficient resolutions to minimize any disruption to your workflow.",
    },
    {
      question: "Is your IT support scalable as my business grows?",
      answer:
        "Yes, our IT solutions are built to scale. As your business expands, we can easily adjust our services, add more resources, and upgrade your infrastructure to support your growth.",
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

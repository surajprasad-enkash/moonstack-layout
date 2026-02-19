import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/app-development-images/native-banner-img.webp"
import bndimage1 from "@/assets/services/wordpress/wordpress.webp"

import Icon1 from "@/components/ServicesSvg/WordPressIcon/WordPressIcon1"
import Icon2 from "@/components/ServicesSvg/WordPressIcon/WordPressIcon2"
import Icon3 from "@/components/ServicesSvg/WordPressIcon/WordPressIcon3"
import Icon4 from "@/components/ServicesSvg/WordPressIcon/WordPressIcon4"
import Icon5 from "@/components/ServicesSvg/WordPressIcon/WordPressIcon5"
import Icon6 from "@/components/ServicesSvg/WordPressIcon/WordPressIcon6"
import Icon7 from "@/components/ServicesSvg/WordPressIcon/WordPressIcon7"
import Icon8 from "@/components/ServicesSvg/WordPressIcon/WordPressIcon8"
import Icon9 from "@/components/ServicesSvg/WordPressIcon/WordPressIcon9"
import Icon10 from "@/components/ServicesSvg/WordPressIcon/WordPressIcon10"
import Icon11 from "@/components/ServicesSvg/WordPressIcon/WordPressIcon11"
import Icon12 from "@/components/ServicesSvg/WordPressIcon/WordPressIcon12"

export const wordPress: PageData = {
  hero: {
    title: [
      {
        text: "WordPress Development ",
        color: "",
        className: "libreItalic font-[400] highlight-text",
      },
      {
        text: "Services in India",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Launch your powerful, user centric and secure custom wordpress based website that leads to increased traffic and conversion.",
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
        label: "Wordpress Development",
        href: "/services/wordpress-website-development-company",
      },
    ],
  },
  seo: {
    title: "WordPress Website Development Company India & USA | Moonstack",
    description:
      "Looking for WordPress developers in India? Moonstack launches and maintains secure, fast WordPress sites with custom themes, plugins, and SEO‑ready setups. call now!",
    keywords:
      "wordpress development company USA,wordpress development service India,custom wordpress development service India,hire wordpress website developers USA,affordable wordpress website development service",
    canonical: "/services/wordpress-website-development-company",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

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
      bolds: false,
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
      Icon: Icon1,
      imgSrc: "",
      title: "Custom WordPress Development Services",
      description:
        "We offer custom WordPress development services. Our team builds responsive and powerful WordPress based solutions from scratch that reflect the company brand and integrate functionalities that are aligned with business goals. We focus on building interactive and modern websites that ensure to stay ahead among competitors.",
    },
    {
      Icon: Icon2,
      imgSrc: "",
      title: "WordPress Theme Customization",
      description:
        "Our WordPress development team provides full theme customisation services that allow you to transform your brand into brand focused and reflect your style. We create top notch web designs with the best combination of colors, fonts, and features integrated that match your business and today’s tech design needs.",
    },

    {
      Icon: Icon3,
      imgSrc: "",
      title: "Third Party Integration Services",
      description:
        "Integrate third party functionalities with API integration services. Our team is proficient in integrating third party features into WordPress development services that allow the access of additional features and can link via API only.",
    },
    {
      Icon: Icon4,
      imgSrc: "",
      title: "WordPress Plugin Integration",
      description:
        "We are proficient with WordPress plugin integration services. Our team of WordPress coders integrate plugins that allow you to enhance website features. At Moonstack - we choose, install, and configure the right plugins as per your tech needs. We integrate plugins for performance improvement and that support your business needs.",
    },
    {
      Icon: Icon5,
      imgSrc: "",
      title: "WordPress Testing Services",
      description:
        "Our WordPress development team offers end to end testing for our clients. We test Wordpress based solutions with automated and manual processes that allow us to deliver bug free websites in the market. Our team has top quality assurance testing coders with us who test all features and deliver successful solutions.",
    },
    {
      Icon: Icon6,
      imgSrc: "",
      title: "WordPress Maintenance and Support",
      description:
        "Maintain your full WordPress requirements with us. We offer end to end maintenance and support services that ensure to stay ahead in the market. Our team keeps your website fully secure and updated with the latest trends. Additionally, if we find any gaps we resolve them instantly that helps to grow your business.",
    },
  ],

  NewBanner: {
    headingLines: [
      { text: "Scale Your Presence With Our " },
      {
        text: "Expert WordPress Development Team",
        className: "libreItalic font-[400]",
      },
    ],
  },
  OutcomeBanner: {
    heading: [
      {
        text: "Build Faster, Scale Smarter: Your ",
        color: "text-white",
        className: "",
      },
      {
        text: "Expert WordPress Development Partner",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Performance-Driven Custom Themes",
      "Next-Gen Security & Scalability",
      "Tailored Plugin Engineering",
      "Total Content Control",
    ],
    buttonText: "Launch Your Vision Today",
  },

  CloudTimelineData: {
    title: "Our Process of ",
    highlight: "WordPress development in India",
    subtitle:
      "Moonstack follows a structured and agile WordPress development process designed to deliver high-quality, scalable, and secure websites. Our proven methodology ensures transparency, timely delivery, and results that exceed expectations.",
    steps: [
      {
        number: 1,
        title: "Requirement Analysis",
        description:
          "We begin by thoroughly analyzing your business goals, target audience, and functional requirements to create a detailed project roadmap.",
        position: "left",
      },
      {
        number: 2,
        title: "UI/UX Design Strategy",
        description:
          "Our designers create intuitive and visually appealing prototypes and wireframes that align with your brand identity and ensure an optimal user experience.",
        position: "right",
      },
      {
        number: 3,
        title: "Theme & Plugin Development",
        description:
          "We develop custom themes and plugins or customize existing ones, ensuring clean code, performance optimization, and seamless functionality.",
        position: "left",
      },
      {
        number: 4,
        title: "Content & SEO Integration",
        description:
          "We integrate your content and optimize the website structure for search engines to ensure better visibility and ranking from day one.",
        position: "right",
      },
      {
        number: 5,
        title: "Testing & QA",
        description:
          "Rigorous rigorous testing across devices and browsers ensures your WordPress site is bug-free, secure, and performs flawlessly under various conditions.",
        position: "left",
      },
      {
        number: 6,
        title: "Deployment & Maintenance",
        description:
          "After a smooth launch, we provide ongoing support and maintenance to keep your website updated, secure, and performing at its peak.",
        position: "right",
      },
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
  qualitySectionData: {
    heading: [
      {
        text: " Why Choose Us for Your",
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
        title: "End to End Custom Web Development",
        Icon: Icon7,
        icon: "",
        description:
          "We are proficient in building end to end custom WordPress web development services in which we create solutions from scratch. Our team understands your business needs and launches solutions that ensure to leverage the benefits of modern tech and meet the business needs.",
      },
      {
        id: 2,
        title: "Expert WordPress Developers",
        Icon: Icon8,
        icon: "",
        description:
          "Moonstack has a team of professionals who are skilled professionals with deep technical expertise. Our expert WordPress development team focuses on custom development, performance optimisation, advanced integration that ensures to meet high standard and professional services.",
      },
      {
        id: 3,
        title: "Hire Skilled Developers",
        Icon: Icon9,
        icon: "",
        description:
          "With us you can have access to a pool of WordPress developers. You can hire different types of developers as per their experience level. Our WordPress coders can collaborate as an extension in your team and deliver secure, responsive and high performance based WordPress solutions that meet your project needs.",
      },
      {
        id: 4,
        title: "On Time Delivery",
        Icon: Icon10,
        icon: "",
        description:
          "We deliver all your projects on time. Our focus is to be on our commitments.With our experts we follow a structured roadmap that ensures us to deliver all projects on time without any timely delay and compromise in quality.",
      },
      {
        id: 5,
        title: "User Centric Design",
        Icon: Icon11,
        icon: "",
        description:
          "Design is the backbone of any website. We don’t only focus on development aspects but also experience  in custom wordpress designing service in  India. We create interactive and engaging designs that are user centric and innovative that match the latest modern trends.",
      },
      {
        id: 6,
        title: "Strong Communication",
        Icon: Icon12,
        icon: "",
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

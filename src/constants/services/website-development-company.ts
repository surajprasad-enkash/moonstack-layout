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

export const websiteDevelopment: PageData = {
  hero: {
    title: [
      {
        text: "Website Development Service for Businesses",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Launch advanced, integrated functionalities-based websites with best web development services for your customers.",
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
        label: "Website Development",
        href: "/services/website-development-company",
      },
    ],
  },
  seo: {
    title: "Customized Website Development Company in India & US | Moonstack",
    description:
      "Get fast, secure, SEO-friendly websites built by full-stack experts focused on performance, scalability, & business results. Start your website project with Moonstack.",
    keywords:
      "web development service in USA,web development company in USA,affordable website development service India,custom web development service India,best web development agency India,website development services for startups",
    canonical: "/services/website-development-company",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points:
    "Exceptional work from start to finish.Moonstack transformed our outdated website into a sleek, high-performing digital asset. Their full-stack expertise was evident in every detail—from the intuitive UI to the robust backend architecture. What impressed us most was their proactive communication and commitment to delivering on time. Our online engagement has tripled, and customers constantly compliment the seamless experience. Highly recommended!",
  highlightText: "Our online engagement has tripled",

  leftCardData: [
    {
      title: "Futuristic Website Development Company",
      description:
        "MoonStack is known as a leading website development company. We have delivered a wide range of powerful, AI driven, and user centric websites to different businesses from start ups to large enterprises. Our top industry web experts in India and USA build high performance and innovative websites that deliver smart automation and personalized user experience that ensures to meet the modern trends.",
      stats: [],
      description2:
        "We have a team of full stack website developers in India and USA, who have hands-on experience to build websites from scratch and integrate latest trending features that allow businesses to stay ahead in the market competition. Our professional web developers build websites from scratch that can automate workflows, analyse user experiences, and deliver personalized experiences that deliver next generation user experience and reduce internal workflow processes. At Moonstack, we are experienced in developing websites from scratch as well as upgrading existing websites with advanced user centric designs that meet all modern IT trends and innovations. ",
      image: bndimage1.src,
      bolds: false,
    },
  ],
  solutions: {
    headingContent: [
      {
        text: "Moonstack offers ",
        color: "text-white",
      },
      {
        text: "website development",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: "  services Globally",
        color: "text-white",
      },
    ],
    subHeadingText:
      "We are known as the one stop solution for all your website development needs. From development to support you can fully rely on us.",
  },
  featuresData: [
    {
      imgSrc: intuitiveIcon.src,
      title: "Custom website development",
      description:
        "Our web programmers develop custom websites for start ups to large enterprises that meet all business needs. Our web developers in India have a strategic approach that ensures to deliver high performance and responsive mobile friendly websites for your clients.",
    },
    {
      imgSrc: engagingIcon.src,
      title: "Website Designing Services",
      description:
        "We focus on UI and UX website designing services that allow designers to create interactive and engaging for our clients. Our web designers create easy to use and eye catchy designs that reflect your business brand presence.",
    },

    {
      imgSrc: brandingIcon.src,
      title: "Website Backend Services",
      description:
        "Our backend website experts build a strong backend digital ecosystem with modern technologies and frameworks such as React, Node.js , and many more. With the right tech stack we deliver high performance and response websites to our clients.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Website Frontend Services",
      description:
        "Our team creates an engaging and impressive frontend based user interface. We fully focus on user centric and interactive designs that ensure us to connect with the audiences. Our frontend development strategies are designed to deliver highly engaging and responsive experiences.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Website Testing and Migration Service",
      description:
        "Before launching websites our team opt for end to end testing and migration services. We opt for manual as well automotive testing with advanced tools for error free launching. Moreover, we also hold expertise in migration website services.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Website Support and Maintenance",
      description:
        "Our website development team is available for our clients 24/7. We keep your websites fully responsive, detect bugs on the initial stage, and fix issues on an instant basis to avoid any future complex challenges.",
    },
  ],

  NewBanner: {
    headingLines: [
      { text: "Scale Your Business With Our Expert Web Development Team" },
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
        text: " Expert Web Development Partner",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Responsive Cross-Device Design",
      "Fast Development & Deployment",
      "High-Performance & SEO-Optimized",
      "Scalable & Future-Ready Solutions",
    ],
    buttonText: "Start Your Project Today",
  },

  CloudTimelineData: {
    title: "Our Process of ",
    highlight: "website development in India",
    subtitle:
      "Moonstack the leading website development company in India has defined our web development process that is designed by top web experts. Our process helps us to strategize the process and avoid last minute complex challenges and delays.",
    steps: [
      {
        number: 1,
        title: "Requirement Gatherings",
        description:
          "We collect all the information and understand what the business is all about and things that it requires.",
        position: "left",
      },
      {
        number: 2,
        title: "Client Discussion",
        description:
          "After our understanding we have proper discussion with clients and have knowledge of what they are actually looking for.",
        position: "right",
      },
      {
        number: 3,
        title: "Research and Brainstorming",
        description:
          "Our web development team researches what is going on in a market that can align and have internal discussions.",
        position: "left",
      },
      {
        number: 4,
        title: "Designing and Development",
        description:
          "Designers bring innovative and immersive designs that connect with audiences and with technologies to develop websites.",
        position: "right",
      },
      {
        number: 5,
        title: "Testing and Deployment",
        description:
          "Before launching the website in the market we do end to end testing and deployment process that ensure to launch websites error free ",
        position: "left",
      },
      {
        number: 6,
        title: "Launching",
        description:
          "We launch websites in the market with the right SEO Strategies. Users can browse it from web and mobile easily. ",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Our End-to-End " },
      {
        text: "Web Development",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: " Expertise" },
    ],
    description:
      "We offer comprehensive end to end custom website development services in India. From website consulting - designing - development to migration - we are one stop for all your website development needs.",
    cards: [
      {
        id: "Laravel Website Development Services",
        label: "Laravel Website Development Services",
        description:
          "Leverage all the benefits of PHP based Laravel framework with dedicated web experts. We provide full stack Laravel development services in India that allow us to build dynamic to complex web apps with clean codes and in-built testing models as per the business requirements",
        variant: "light",
      },
      {
        id: "E-commerce Website Development Service",

        label: "E-commerce Website Development Service",
        description:
          "Launch your powerful online store that allows start ups - mid sized and large enterprises to reach wider audiences and double their sales. Our top e-commerce web developers in India integrate modern functionalities such as AI driven product recommendation, and seamless payment integration, ",
        variant: "accent",
      },
      {
        id: "Full Stack Web Development Services",

        label: "Full Stack Web Development Services",
        description:
          "Get your end to end secure and customised website with best modern practises. Our web developers in India are proficient with both front end and back end development that deliver responsive and user friendly experiences with latest innovations.",
        variant: "dark",
      },
      {
        id: "WordPress Development Services",

        label: "WordPress Development Services",
        description:
          "Launch high performance secure and dynamic wordpress based websites with us. We develop corporate, e-commerce, and dynamic sites for our clients that are user and SEO  friendly and fully secure that meet all our clients needs.",
        variant: "dark",
      },
      {
        id: "Shopify Website Development Service",

        label: "Shopify Website Development Service",
        description:
          "Build custom Shopify online stores or upgrade existing ones with inbuilt customizable themes, easy store step up, and fully optimised mobile designs that increase sales and drive growth.",
        variant: "light",
      },
      {
        id: "CRM Development Service",

        label: "CRM Development Service",
        description:
          "Integrate custom CRM development solutions into your enterprise that turn complex processes into easier and faster. Our custom CRM solutions are designed in such a way that all information stored at a centralized platform with limited access and automated workflow enhances overall efficiency.",
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
        text: "Why Choose us for your ",
        color: "text-white",
      },
      {
        text: "next website development  ",
        className: "libreItalic font-[400] highlight-text",
      },
      {
        text: "services in India?",
        color: "text-white",
      },
    ],
    description:
      "Moonstack is the leading website development company in India. Serving a wide range of clients across the globe. We have top web professionals in India, who have in-depth experience on the latest tools and technologies to deliver successful solutions to a wide range of businesses.",
    columsClass: "lg:grid-cols-3",
    list: [
      {
        id: 1,
        title: "Decade of Experience",
        icon: collaboration.src,
        description:
          "Moonstack has delivered 450+ projects across different industries. Our affordable website development service India  is in high demand among start ups, mid sized, and large enterprises.",
      },
      {
        id: 2,
        title: "Data Security & Compliance",
        icon: collaboration.src,
        description:
          "We don’t only build websites to deliver. At Moonstack - leading website development company in Jaipur,  we know the importance of data security and to match the standards and protection with essential compliance.",
      },
      {
        id: 3,
        title: "Next Generation Technology Stack",
        icon: collaboration.src,
        description:
          "Our secure website development service provider opt for the modern and latest technology stack AI and Machine Learning. Moreover, in languages we opt for React, Next.js , and Laravel that allow us to launch powerful and high performance websites.",
      },
      {
        id: 4,
        title: "Custom web Solutions ",
        icon: collaboration.src,
        description:
          "Opt for custom business website development service in India. We offer end to end custom website solutions for our clients that includes consultation to post support. Our team builds custom websites that align with your business goals. ",
      },
      {
        id: 5,
        title: "Confidential Details",
        icon: collaboration.src,
        description:
          "We are considered as one of the  top website developments for small business in India. Our team keeps all your ideas and execution strategies fully secure and 100% confidential with us only. In any case, we will not share your idea or any details to any third party.",
      },
      {
        id: 6,
        title: "Post Launch Support ",
        icon: collaboration.src,
        description:
          "For us we don’t only deliver websites, but we partner as the top website development service provider. After launching the start ups to large enterprise level websites, we provide post launch support to our clients. We always stand with them to match the latest tech innovations and meet their customer expectations.",
      },
    ],
  },
  accordionData: [
    {
      question:
        "Will you build a website that aligns with my business requirements?",
      answer:
        "Yes, at Moonstack we don’t just build websites. We create custom websites in India for our clients that meet all their business needs. In the first two steps, our top industry experts will understand your business and then set a bridge that you can overcome with an effective digital solution.",
    },
    {
      question:
        "Will you be able to integrate automation processes and trending AI functionalities in websites?",
      answer:
        "Moonstack  is recognised as the best  business website development service in  India. In order to maintain that we keep ourselves updated with the latest trending technologies and solve business complex challenges such as turning manual to automation. Yes, we have a proficient team of AI experts, who integrate automation processes.",
    },
    {
      question:
        "How will you make sure that all my company details and  website are fully secure?",
      answer:
        "You are partnering with the top website development company in India. We follow top industry standard security protocols such as security encryption, best web development practices, and meet demands of latest region wise compliances. Our website developers also perform constant audits to make sure that user information is fully protected.",
    },
    {
      question: "Will you provide source code to our team?",
      answer:
        "Ofcourse, after completion of the website development services, we will provide source code access to your team. With source code your team can add and edit functionalities as per your requirements.",
    },
    {
      question: "Do you sign an NDA with your team members?",
      answer:
        "Yes, we sign proper NDA not only with our website development team. We also sign NDA (Non Disclosure Agreement) and other contracts that are valid as per region with our clients that helps us to secure project details and to maintain long term relationships. ",
    },
    {
      question: "Can I hire web developers for my project?",
      answer:
        "Yes, you can hire web developers for your project. We offer different hiring modules that allow you to hire developers on hourly, part time, and full time basis. Our web development team makes sure they provide you a resume of the best resources as per you are looking for, and you can choose your web development resources who work dedicatedly for your project. ",
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

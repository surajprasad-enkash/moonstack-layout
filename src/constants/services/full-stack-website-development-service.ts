import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/meeting-banner-images/full-stack.webp"
import androidContactbannerImg from "@/assets/app-development-images/contact-app-img.webp"
import androidBannerImg from "@/assets/app-development-images/android-banner.webp"
import bndimage1 from "@/assets/industries/icon/bndImage1.webp"

// SVG Icons Components
import Icon1 from "@/components/ServicesSvg/FullStackIcon/FullStackIcon1"
import Icon2 from "@/components/ServicesSvg/FullStackIcon/FullStackIcon2"
import Icon3 from "@/components/ServicesSvg/FullStackIcon/FullStackIcon3"
import Icon4 from "@/components/ServicesSvg/FullStackIcon/FullStackIcon4"
import Icon5 from "@/components/ServicesSvg/FullStackIcon/FullStackIcon5"
import Icon6 from "@/components/ServicesSvg/FullStackIcon/FullStackIcon6"
import Icon7 from "@/components/ServicesSvg/FullStackIcon/FullStackIcon7"
import Icon8 from "@/components/ServicesSvg/FullStackIcon/FullStackIcon8"
import Icon9 from "@/components/ServicesSvg/FullStackIcon/FullStackIcon9"
import Icon10 from "@/components/ServicesSvg/FullStackIcon/FullStackIcon10"
import Icon11 from "@/components/ServicesSvg/FullStackIcon/FullStackIcon11"
import Icon12 from "@/components/ServicesSvg/FullStackIcon/FullStackIcon12"
import bccKristenCheng6 from "@/assets/clientsImages/authbridge.jpg"

export const fullstack: PageData = {
  hero: {
    title: [
      {
        text: "Our Vision, Our ",
        color: "text-white",
      },
      {
        text: "Full Stack Expertise: ",
        color: "",
        className: "libreItalic highlight-text",
      },
      {
        text: "End-to-End Web Solutions",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Partner with developers who see the full picture. Our full stack expertise covers frontend, backend, databases, and deployment—delivering cohesive web solutions that perform flawlessly, scale effortlessly, and exceed expectations every time.",
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
        label: "Full Stack Development",
        href: "/services/full-stack-website-development-company",
      },
    ],
  },
  seo: {
    title: "Full-Stack Web Development Company India & USA | Moonstack",
    description:
      "Looking for a full stack web development team in India? We handling frontend, backend, APIs, and cloud infrastructure under one roof. Book a product discovery call.",
    keywords:
      "full stack development company USA,hire full stack developers India,best full stack web development service India,affordable full stack developers USA,full stack web application development USA",
    canonical: "/services/full-stack-website-development-company",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points:
    "Moonstack is a game-changer. Their full-stack expertise is unmatched—they delivered a scalable, high-performance ecosystem in record time where others failed. They didn’t just build what we asked; they proactively improved our entire technical strategy. They are our #1 recommended partner for any complex development project.",
  highlightText: "scalable, high-performance ecosystem",
  userImage: bccKristenCheng6,
  userRole: "CEO",
  userName: "Mohamed Shegow",
  leftCardData: [
    {
      title: "Leading Full Stack Development Company Globally",
      description:
        "Moonstack is the leading full stack development company Globally. We build powerful and modern websites that are user friendly and deliver high performance experiences  to the customers. Our team of Full stack coders handles the entire development cycle from start to end that deliver engaging, faster loading, and increase conversation rates. We adopt  the combination of modern technological advancement and have hands-on experience to deliver client centric and modern solutions in the market. ",
      stats: [],
      description2:
        "We are not in the market only to build advanced solutions, but with our full stack team we extend the full digital ecosystem for our customers. Apart from only custom full stack  development solutions in India and U/X designing, we also focus on API and Cloud integration. Moreover, our professional full stack developers in India ensure to opt for the best practices and modern technologies that align with the project goals. We are a one stop solution for all your Full stack development needs from start up to large enterprises - we are considered as the leading full stack development company that holds the power to turn ideas into reality. Our full stack engineers are available for full time, hourly, and freelance basis.",
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
        text: "Full Stack Development ",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: "Services",
        color: "text-white",
      },
    ],
    subHeadingText:
      "We provide end to end full stack development services in India. From consulting to launching your solutions, you can fully rely on us for all your digital solution needs.",
  },
  featuresData: [
    {
      Icon: Icon1,
      imgSrc: "",
      title: "Frontend Development ",
      description:
        "Our front end developers create engaging and immersive user interfaces with the right usage of technologies such as HTML, CSS/SCSS, and JavaScript. With high performance our tech experts also focus to deliver interactive and easy to use UI/UX that provides next generation experiences to users.",
    },
    {
      Icon: Icon2,
      imgSrc: "",
      title: "Backend Development",
      description:
        "With our Moonstack engineers in India, we deliver end to end high performance server side solutions to different businesses. We provide secure, scalable, and highly optimized API for seamless database integration. Our experienced back end developers main aim is to write clean codes and offer smooth execution with best industry practices.",
    },

    {
      Icon: Icon3,
      imgSrc: "",
      title: "Full Stack API Integration Services",
      description:
        "Extend your website functionalities with simple API integration services. Our full stack coders in India offer secure, scalable APIs that support third party platforms that improve features, automate different processes, and develop a unified digital ecosystem that match all your business needs that increase efficiency and improve customer experiences.",
    },
    {
      Icon: Icon4,
      imgSrc: "",
      title: "Full Stack Testing Services",
      description:
        "At Moonstack, our focus is to deliver secure and bug free solutions to our customers. We provide end to end solution testing that offers functional, performance, and integration testing. Our full stack coders provide automated and unit testing that allow us to deliver high performance and bug free solutions in the market.",
    },
    {
      Icon: Icon5,
      imgSrc: "",
      title: "Full Stack Support & Maintenance",
      description:
        "Our Full stack engineers offer end to end support and maintenance services to our customers.By partnering with the leading full stack company - your enterprise's solutions will be fully updated with functionalities and modern trends, issues will be fixed immediately. Moreover, we will offer proactive support on a constant basis that will lead to maintaining stability.",
    },
    {
      Icon: Icon6,
      imgSrc: "",
      title: "Full Stack Custom Designing Services",
      description:
        "Launch interactive custom designing services to your users. We create custom designs that reflect your brand identity and deliver next generation experiences to your users. Our focus is to create best front end designs with responsive layouts and modern interfaces that deliver next generation user experiences.",
    },
  ],

  NewBanner: {
    headingLines: [
      {
        text: "Scale Your Business ",
      },
      {
        text: "With Our Expert ",
        className: "libreItalic font-[400]",
      },
      {
        text: "Full-Stack Development Team",
      },
    ],
  },
  OutcomeBanner: {
    heading: [
      {
        text: "Vision to Velocity: Your Premier ",
        color: "text-white",
        className: "",
      },
      {
        text: "Full-Stack Partner",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Future-Ready Tech Stacks",
      "Agile End-to-End Delivery",
      "Performance-Driven Engineering",
      "Proactive System Maintenance",
    ],
    buttonText: "Launch Your Innovation",
  },

  CloudTimelineData: {
    title: "",
    highlight: "",
    subtitle: "",
    steps: [
      // {
      //   number: "",
      //   title: "",
      //   description: "",
      //   position: "left",
      // },
    ],
  },

  impactSection: {
    heading: [
      { text: "AI Integration for " },
      {
        text: "Full Stack Development",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: " Services" },
    ],
    description:
      "To make the apps more modern and smarter we integrate trending AI services in our solutions. By integrating AI services we allow clients to leverage the benefits of intelligent automation, real time data processings, and offer personalized user experiences that deliver next generation and advanced user experience with our best full stack web development service India.",
    cards: [
      {
        id: "AI Driven Automation",
        label: "AI Driven Automation",
        description:
          "With our AI integration in full stack development services, our aim is to streamline different business processes for diverse industries. By integrating AI we reduce manual work, integrate workflows with intelligent triggers, and offer smart decision making for users.",
        variant: "light",
      },
      {
        id: "AI Chatbots and Virtual Assistance",
        label: "AI Chatbots and Virtual Assistance",
        description:
          "We integrate virtual assistance in the form of modern bots that allow us to increase user interaction. Our AI bots offer instant responses, personalized recommendations, and 24/7 assistance to users that reduces work load as well as improve customer satisfaction.",
        variant: "accent",
      },
      {
        id: "Predictive Data Analytics",
        label: "Predictive Data Analytics",
        description:
          "We opt for predictive data analytics with smart AI models that help users to get real time information, identify patterns that help to analyze human behaviour. With our full stack experts we integrate best tools that provide actionable insights, boost performance, and help to stay ahead in the market.",
        variant: "dark",
      },
      {
        id: "AI Enabled API Integration",
        label: "AI Enabled API Integration",
        description:
          "Integrate modern existing AI based features into your solution by integrating them via API. With our team of full stack experts, we integrate API that ensures to extend functionalities and provide next generation experiences to the users. Our full stack professionals deal in secure integration such as automate operations, backend processes that ensure smooth data exchange and scalable performance",
        variant: "dark",
      },
      {
        id: "Computer Vision Integration",
        label: "Computer Vision Integration",
        description:
          "We launch powerful intelligent digital products with image recognition, object detection, and automated scanning.  Our full stack experts integrate full stack architecture that enhance your operational accuracy and allow business to opt for advanced intelligent solutions. We offer smarter and reliable services for our clients that deliver next generation user experiences.",
        variant: "light",
      },
      {
        id: "Natural Language Processing (NLP)",
        label: "Natural Language Processing (NLP)",
        description:
          "Moonstack NLP apps offer apps that help to understand, interpret, and respond to human languages. We provide high performance full stack solutions that automate content processings, voice command, and contextual responses that transform apps into real answers that solve all queries. We build user friendly, intuitive and easy to use platforms.",
        variant: "dark",
      },
    ],
  },

  qualitySectionData: {
    heading: [
      {
        text: " Why Choose Us for Your ",
        color: "text-white",
      },
      {
        text: "Full Stack Development",
        className: "libreItalic font-[400] highlight-text",
      },
      {
        text: " Services?",
        color: "text-white",
      },
    ],
    description:
      "We are the leading full stack development company in India. We have been offering our end to end full stack development services for decades to our customers. Our expert full stack coders have in-depth knowledge and experience related to different types of tech from React full stack development to MERN.",
    columsClass: "lg:grid-cols-3",
    list: [
      {
        id: 1,
        Icon: Icon7,
        title: "End-to-End Expertise",
        icon: "",
        description:
          "We offer end to end full stack development services. Our Full Stack coders have hands-on experience from development to launching full time innovative solutions in the market. Along with this, they are proficient with different types of technologies - React, MERN,and many more.",
      },
      {
        id: 2,
        Icon: Icon8,
        title: "Hands-On Experience on Different Technologies",
        icon: "",
        description:
          "Our team has hands-on experience with a wide range of technologies and frameworks including React development in India to MERN. We have a team that is skilled in Cloud platforms, DevOps, and scalable architectures that ensure smooth performance and integrate modern API for future ready digital solutions for different industries.",
      },
      {
        id: 3,
        Icon: Icon9,
        title: "Strong Communication",
        icon: "",
        description:
          "At Moonstack, we believe in strong communication with our clients. We keep transparent communication in this we share and convey all information to our clients. We have a structured communication process that ensures us to understand all your goals and bring clarity in the workflow.",
      },
      {
        id: 4,
        Icon: Icon10,
        title: "On-Time Delivery Commitment",
        icon: "",
        description:
          "As the leading Full stack development company in India, we value time. We stick to different timelines that offer a clear roadmap and ensure to meet all milestones as promised in a particular time frame. With us we guarantee, there are no hidden surprises as we follow all essential industry standard practices.",
      },
      {
        id: 5,
        Icon: Icon11,
        title: "Dedicated Support and Maintenance",
        icon: "",
        description:
          "We provide full stack full support and maintenance services to our clients. Here we just don’t believe in delivery solutions but stay with you from updates to performance improvements. Our team is always with you to solve any tech bug and we do it instantly without any delay.",
      },
      {
        id: 6,
        Icon: Icon12,
        title: "Client Centric Approach",
        icon: "",
        description:
          "We have a client centric approach. Our team doesn't only build solutions, but we think in the perspective of our clients and then deliver solutions in the market. At Moonstack, we build solutions that meet all our clients' needs and what the customer is looking for. ",
      },
    ],
  },
  accordionData: [
    {
      question: "What is the full stack development process?",
      answer:
        "Full stack development process covers both frontend and backend development. The process includes integration of API, designing, and all development and designing parts.",
    },
    {
      question: "How much will it take to deliver a full stack solution?",
      answer:
        "There is no fixed timeline; it depends fully on the requirement. The timeline depends on several factors including features,complexities, and many more aspects.",
    },
    {
      question:
        "Will you provide us with source code after completion of the project?",
      answer:
        "Yes, we will provide you the source code as soon as we complete the project, so you can add, edit, and delete as per your project needs.",
    },
    {
      question: "Do you provide post launch support?",
      answer:
        "Yes, our team is always available for our clients. We provide full support with our support and maintenance services.",
    },
    {
      question: "Can you upgrade my existing application?",
      answer:
        "Yes, we can upgrade your existing application with the latest functionalities and updated technologies.",
    },
    {
      question: "How do you ensure the quality of the project?",
      answer:
        "We believe in delivering the best projects in the market - we review codes, opt for the automated testing, and continuous performance that maintain high standards in the industry.",
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

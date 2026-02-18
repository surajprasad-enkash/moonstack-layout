import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/app-development-images/native-banner-img.webp"
import bndimage1 from "@/assets/industries/icon/bndImage1.webp"

// SVG Icons Components
import Icon1 from "@/components/ServicesSvg/CRMDevIcon/CRMDevIcon1"
import Icon2 from "@/components/ServicesSvg/CRMDevIcon/CRMDevIcon2"
import Icon3 from "@/components/ServicesSvg/CRMDevIcon/CRMDevIcon3"
import Icon4 from "@/components/ServicesSvg/CRMDevIcon/CRMDevIcon4"
import Icon5 from "@/components/ServicesSvg/CRMDevIcon/CRMDevIcon5"
import Icon6 from "@/components/ServicesSvg/CRMDevIcon/CRMDevIcon6"
import Icon7 from "@/components/ServicesSvg/CRMDevIcon/CRMDevIcon7"
import Icon8 from "@/components/ServicesSvg/CRMDevIcon/CRMDevIcon8"
import Icon9 from "@/components/ServicesSvg/CRMDevIcon/CRMDevIcon9"
import Icon10 from "@/components/ServicesSvg/CRMDevIcon/CRMDevIcon10"
import Icon11 from "@/components/ServicesSvg/CRMDevIcon/CRMDevIcon11"
import Icon12 from "@/components/ServicesSvg/CRMDevIcon/CRMDevIcon12"

export const crm: PageData = {
  hero: {
    title: [
      {
        text: "Custom Affordable",
        color: "text-white",
      },
      {
        text: "CRM Development",
        color: "",
        className: "libreItalic highlight-text",
      },
      {
        text: "for Your Business",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Develop powerful, intelligent, and fully customised CRM solutions that allow to manage diverse customer communication, support automate workflows, and increase operational processes. Our expert team has integrated modern CRM software for start ups and large enterprises. We focus on building CRM Software that convert insights into action that increases communication and streamline different sales processes.",
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
        label: "CRM Development",
        href: "/services/crm-development-company",
      },
    ],
  },
  seo: {
    title: "Custom CRM Development Company India & USA | Moonstack",
    description:
      "Need a custom CRM For your business in India? Moonstack designs and develops CRM systems that match your workflows and integrate with your existing tools.",
    keywords:
      "crm development company USA,affordable crm solutions India,custom crm software development India,crm app developers India,best crm development service USA",
    canonical: "/services/crm-development-company",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

  leftCardData: [
    {
      title: "Leading CRM Development Company in  India",
      description:
        "Moonstack is the leading CRM development company in India. Our team of CRM experts are trusted by small businesses and large enterprises. We build high performance, intelligent, and customised CRM solutions that align with different business needs. With our CRM expert team, our aim is to streamline workflows, support customer relationships, and increase leads and sales processes. Along with different feature functionality, we also focus on clean UI/UX codes, security, and other aspects that need to be considered for businesses. We offer open source,  cloud based CRM solutions that allows you to integrate third party software and your team can access customer data, leads, and reports anytime, anywhere.",
      stats: [],
      description2:
        "We offer end to end CRM development services in India that includes custom CRM development, module development solutions, integration services, migration services, database integration, and many more. Moreover, with tech expertise, we are also known for strong communication, on time delivery, and constant updates with our team. In order to stay ahead in the market competition, our CRM app developers in India keep themselves updated with the latest technological advancements and sort last minute complex challenges. With CRM development services to meet the latest business needs, we also offer CRM solutions in India that are ready to use such as CRM software, CRM mobile app, Cloud based CRM software, and many more.",
      image: bndimage1.src,
      bolds: false,
    },
  ],
  solutions: {
    headingContent: [
      {
        text: "Our  ",
        color: "text-white",
      },
      {
        text: "CRM Development",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: " Services in India",
        color: "text-white",
      },
    ],
    subHeadingText:
      "We offer end to end CRM development  services in India. We offer custom CRM solutions, integration, automation, cloud based access, and many more CRM based functionalities that ensure to improve business efficiency, improve customer relationship, and boost sales. Our CRM services in India includes",
  },
  featuresData: [
    {
      Icon: Icon1,
      imgSrc: "",
      title: "Custom CRM Development",
      description:
        "We build fully customised CRM solutions that are designed as per your business needs. Our CRM experts build software that are integrated with modern features, modules, and several workflows that are with the motive to improve efficiency, boost productivity, and support growth. Moreover, we design CRM software that reflect your brand identity and style that align with your business needs.",
    },
    {
      Icon: Icon2,
      imgSrc: "",
      title: "CRM Integration Services",
      description:
        "Integrate best CRM services that help to grow your business. Extend the functionalities of your CRM software with the integration of WhatsApp, ERP, HRMS, and secure payment gateways. We identify the specific features that are required in your business that ensure to reduce time, improve accuracy, and respond faster to customers. We focus on delivering smart CRM integration services India via a secure API that offers real time syncing and delivers smarter and faster experiences.",
    },

    {
      Icon: Icon3,
      imgSrc: "",
      title: "CRM Mobile Applications",
      description:
        "Build custom CRM mobile applications for Android and iOS platforms. We build fast, secure, and easy to use CRM mobile apps that bring the entire business infrastructure to the mobility of the users. With our CRM mobile apps our customers can track leads, manage different follow ups, opt for seamless communication processes. Our mobile apps are easy to use and users can access the information from anywhere and at any time.",
    },
    {
      Icon: Icon4,
      imgSrc: "",
      title: "Cloud-Based CRM Services",
      description:
        "Moonstack delivers Cloud based CRM solutions that turn the processings into faster and secure. Our cloud based CRM software offers automatic back ups, real time syncing, and high performance so that the team can work smoothly and don’t have to be hesitant about being connected with server and maintenance processes. Our CRM solution allows users to manage data from anywhere and at any time with instant updates with no delay that helps to connect users and team with each other.",
    },
    {
      Icon: Icon5,
      imgSrc: "",
      title: "CRM Migration & Upgradation",
      description:
        "Our custom CRM software development in  India offers complete CRM migration services in India. We offer data transfer to set up services that guarantee all existing feature optimisation, performance, and constant support to improve performance. Along with this, Moonstack CRM development services in India include updates to increase performance, add new functionalities, and make sure that your CRM solution runs smoothly.",
    },
    {
      Icon: Icon6,
      imgSrc: "",
      title: "CRM Ongoing Support & Maintenanc",
      description:
        "As the leading CRM development company in India, we offer full time ongoing support and maintenance services to our clients that offer continuous support, fix bugs immediately, provide feature enhancements for smooth operations, and many more. Our end to end ongoing support and maintenance services. From trouble shooting issues to managing different operations we manage the end to end process with our clients to enhance performance and meet all tech standards",
    },
  ],

  NewBanner: {
    headingLines: [
      {
        text: "Optimize Operations ",
      },
      {
        text: "With Expert ",
        className: "libreItalic font-[400]",
      },
      {
        text: "CRM Development Team",
      },
    ],
  },
  OutcomeBanner: {
    heading: [
      {
        text: "Build Once, Automate Forever: Your ",
        color: "text-white",
        className: "",
      },
      {
        text: "Expert CRM Development Partner",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Centralised Data Architecture",
      "Rapid Workflow Automation",
      "Scalable & High-Performance Logic",
      "Seamless Integration & Support",
    ],
    buttonText: "Start Your CRM Project Now",
  },

  CloudTimelineData: {
    title: "Process We Follow to Integrate",
    highlight: "CRM Solutions in Your Business Infrastructure",
    subtitle:
      "At Moonstack, we have a defined and structured approach that delivers the best CRM solutions to our clients with the right strategy. We have delivered a wide range of CRM solutions and have hands-on experience with the delivery process and know the exact method to implement in the CRM delivery process. We have opted for the agile methodology and include best CRM development experts in India who focus on timely delivery and ensure to solve last minute complex challenges.",
    steps: [
      {
        number: 1,
        title: "Understand Business",
        description:
          "For the right CRM integration services, it is important to understand the business in depth. Our CRM software developers understand your business in depth to identify the gaps and provide you the best CRM solution in India.",
        position: "left",
      },
      {
        number: 2,
        title: "Planning and Discussions",
        description:
          "Once our CRM development team will get an idea of what your business needs and they will have proper discussions about future strategies and make roadmaps for the same. Proper discussion helps to clear your mind and bring the best strategies.",
        position: "right",
      },
      {
        number: 3,
        title: "Customisation and Set up",
        description:
          "At Moonstack, we configure different modules, automation flows, dashboards, and user roles that match specific business needs. We customised different CRM solutions and conducted proper set up processes for our customers.",
        position: "left",
      },
      {
        number: 4,
        title: "Integration and Testing",
        description:
          "We integrate CRM solutions into your business and conduct an end to end testing process to run the solutions smoothly and without any tech issues. After the CRM integration process, our CRM app development team does end to end testing including manually and automatic testing for our clients",
        position: "right",
      },
      {
        number: 5,
        title: "Full Time Support",
        description:
          "Our CRM team is available for our clients full time. We offer full time support for our clients in which we provide dedicated experts who monitor entire CRM and manage different updates to resolve issues instantly. Moonstack's main aim is to ensure zero downtime, offer smooth operations, and continuous operations with tech experts.",
        position: "left",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Our" },
      {
        text: "CRM Solutions",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: "that Takes Your Business to Next Level" },
    ],
    description:
      "As the leading CRM service provider in India, we have designed different CRM solutions for our clients to streamline different operations, improve customer interactions, and boost team productivity. We have ready to use CRM solutions that are easy to integrate in the workflow process that automate your internal operations and deliver faster responses  that are designed for all business needs.",
    cards: [
      {
        id: "Personalised AI Solutions",
        label: "Personalised AI Solutions",
        description:
          "Our CRM app developers in India have designed the best CRM AI solution for businesses that provide personalized customer experiences to the users. With CRM based functionalities, CRM solutions offer personalized recommendations, offers, and content that match all the customer satisfaction needs and increase customer engagement.  With our smarter CRM solution we offer end to end automation that boost engagement, conversion rates, and long term loyalty.",
        variant: "light",
      },
      {
        id: "Data Analysis",
        label: "Data Analysis",
        description:
          "With our Data analysis CRM based solution you can analyse a large set of customer data that is collected via different sources such as social media, email integration platforms, website, and many more different platforms. Our Artificial Intelligence and Machine Learning CRM solutions are enabled to identify patterns and trends that help you to make the right decision for your business with data driven decisions. This also excludes manual tasks that excludes repetitive tasks and saves huge amounts of time.",
        variant: "accent",
      },
      {
        id: "Chatbots and Virtual Assistants",
        label: "Chatbots and Virtual Assistants",
        description:
          "We integrate smart chat bots and modern virtual assistants in the CRM solutions that help to increase customer engagement and exclude human dependency. Our bots are designed and trained in such a way that provide instant replies and solve queries of the users instantly without any delay. We have integrated wide range chat bots and virtual assistants in the solutions with the aim to support or manage different routine based customer inquiries. ",
        variant: "dark",
      },
      {
        id: "Automated CRM Based Marketing Campaigns",
        label: "Automated CRM Based Marketing Campaigns",
        description:
          "Automate your marketing with our advanced CRM solutions. We integrate AI to streamline content creation, email campaigns, and social media scheduling. By analyzing customer behavior, our AI-driven tools help you target the right audience, ensuring successful campaigns and maximum conversion rates.",
        variant: "dark",
      },
      {
        id: "Cloud Based CRM Solution ",
        label: "Cloud Based CRM Solution ",
        description:
          "Our CRM integration services in India offer Cloud based CRM solutions that allow sales people to access data from anywhere and at any time with simple credentials. They don’t require any complicated real time servers. Enterprise all data, interactions, and inclusive all information is stored securely on Cloud that offers easy access to the platform and supports real time updates across several devices.",
        variant: "light",
      },
      {
        id: "Sales Pipeline Management",
        label: "Sales Pipeline Management",
        description:
          "Monitor and manage your sales pipeline effectively with our CRM solutions. Visual dashboards provide real-time insights into deal stages, fostering better forecasting and resource allocation. Keep your sales team aligned and focused on high-priority opportunities to accelerate revenue growth.",
        variant: "accent",
      },
    ],
  },
  qualitySectionData: {
    heading: [
      {
        text: "Why Choose Us for Your ",
        color: "text-white",
      },
      {
        text: "CRM Software Development",
        className: "libreItalic font-[400] highlight-text",
      },
      {
        text: "Services in India?",
        color: "text-white",
      },
    ],
    description:
      "We are the best CRM Software development company in India. Our CRM team offers end to end services from small to large enterprises. At Moonstack, we have delivered a wide range of CRM solutions to different industries as per the latest technological advancements and market trends. With tech expertise, we also focus on timely delivery and strong communication processes.",
    columsClass: "lg:grid-cols-3",
    list: [
      {
        id: 1,
        Icon: Icon7,
        title: "Experience Team",
        icon: "",
        description:
          "We have a team of CRM developers, who have decades of experience in delivering a wide range of CRM solutions to different industries like Real estate, healthcare, education, Fintech, and many more. At Moonstack, we are enabled to sort last minute complex challenges and put our experience in delivering best CRM solutions that align with your business needs and meet latest market innovations.",
      },
      {
        id: 2,
        Icon: Icon8,
        title: "Updated with Latest Tech Trends",
        icon: "",
        description:
          "Our CRM professionals keep them updated with the latest technological trends and updated frameworks that help us to meet the market trends. We have hands-on experience on different tools and technologies, but it is also important for us to keep ourselves updated with the new innovations and what's going on in the market. At Moonstack, we don’t opt for the outdated strategies but opt for the modern technological advancements.",
      },
      {
        id: 3,
        Icon: Icon9,
        title: "On Time Delivery",
        icon: "",
        description:
          "We believe in on time delivery. Our focus is to deliver projects on time and without delay and compromising on quality. At Moonstack, we plan, execute, and review all details in detail and provide CRM solutions on a promised timeline. We always focus on being committed to our words and deliver solutions without any delay and you can face no surprises in future. Hence, punctuality is our priority.",
      },
      {
        id: 4,
        Icon: Icon10,
        title: "Strong Communication",
        icon: "",
        description:
          "Our team opt for a strong communication process as we understand the value of clear and transparent. We focus on professional communication at every stage that helps our clients to stay informed at every stage of the development and have an idea what's going on in the process. We offer end to end strong communication that ensures clear, structured, and professional communication among clients and with us.",
      },
      {
        id: 5,
        Icon: Icon11,
        title: "Seamless Integrations",
        icon: "",
        description:
          "At Moonstack, we offer seamless integration with CRM tools like WhatsApp, ERP, HRMS, emails, and payment gateways. Our CRM app development team works collaboratively and delivers best performance that matches real time data flow that leads to more accuracy, faster operations, and reduces manual work.",
      },
      {
        id: 6,
        Icon: Icon12,
        title: "Dedicated Support and Maintenance",
        icon: "",
        description:
          "We offer end to end dedicated support and maintenance to our clients. At Moonstack, if we start with a journey, we will go till the end. For us it's not only to deploy the CRM solutions, we aim to focus on dedicated support and maintenance services that allow clients to leverage the benefits of modern technologies and smooth performance for a long period of time.",
      },
    ],
  },
  accordionData: [
    {
      question: "What is CRM software and why should we opt in our business?",
      answer:
        "CRM software refers to Customer Relationship Management. This is the present need of today’s business as it helps to manage leads, customer sales, and communication all in one place. CRM helps to improve efficiency, reduce manual work, and offer better team visibility that leads to smarter decisions.",
    },
    {
      question: "How much time would you take to deliver CRM solutions?",
      answer:
        "There is not any specific time duration defined to deliver CRM solutions. The CRM development services in India time depends on several factors such as time, complexity, and many more things. ",
    },
    {
      question:
        "Can you help me with the integration of the CRM tool with the existing enterprise tools?",
      answer:
        "Yes, we can integrate custom CRM software with the existing tools into your business infrastructure.",
    },
    {
      question: "Is Cloud based infrastructure secure with CRM?",
      answer:
        "Yes,  cloud based CRM solutions are secure and use encrypted storage, secure servers, and have access to advanced controls. Cloud also provides access to automatic backups, safe accessibility from anywhere",
    },
    {
      question: "Will you provide training to our staff after CRM integration?",
      answer:
        "Yes, we will provide end to end training after installation of CRM integration software so you can leverage all the benefits of the modern tech stack.",
    },
    {
      question: "Can I upgrade CRM software as my business grows?",
      answer:
        "Yes, of course with CRM team experts in India, you can upgrade your CRM solutions with advanced technologies and integrate additional functionalities to streamline your next level business operations.",
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

import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/app-development-images/native-banner-img.webp"
import androidImg from "@/assets/app-development-images/android-hero-img.webp"
import androidContactbannerImg from "@/assets/app-development-images/contact-app-img.webp"
import androidBannerImg from "@/assets/app-development-images/android-banner.webp"
import bndimage1 from "@/assets/industries/icon/bndImage1.webp"
import collaboration from "@/assets/app-development-images/flexible.webp"

import PythonIcon1 from "@/components/ServicesSvg/PythonIcon/PythonIcon1"
import PythonIcon2 from "@/components/ServicesSvg/PythonIcon/PythonIcon2"
import PythonIcon3 from "@/components/ServicesSvg/PythonIcon/PythonIcon3"
import PythonIcon4 from "@/components/ServicesSvg/PythonIcon/PythonIcon4"
import PythonIcon5 from "@/components/ServicesSvg/PythonIcon/PythonIcon5"
import PythonIcon6 from "@/components/ServicesSvg/PythonIcon/PythonIcon6"
import PythonIcon7 from "@/components/ServicesSvg/PythonIcon/PythonIcon7"
import PythonIcon8 from "@/components/ServicesSvg/PythonIcon/PythonIcon8"
import PythonIcon9 from "@/components/ServicesSvg/PythonIcon/PythonIcon9"
import PythonIcon10 from "@/components/ServicesSvg/PythonIcon/PythonIcon10"
import PythonIcon11 from "@/components/ServicesSvg/PythonIcon/PythonIcon11"
import PythonIcon12 from "@/components/ServicesSvg/PythonIcon/PythonIcon12"

export const python: PageData = {
  hero: {
    title: [
      {
        text: "Python website development service",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Launch your powerful and high performance web solutions with Python web development services. At Moonstack, we have an ability to deliver full stack web development solutions with clean code, modern seamless user experiences, and opt for the best industry standard practices. We are ideal Python partner for all your Python web development services in India",
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
        label: "Python",
        href: "/services/python-development-company",
      },
    ],
  },
  seo: {
    title: "Python Development Company in India | Moonstack",
    description:
      "Get custom Python development services for web, AI, and cloud applications. Moonstack delivers secure, scalable, and fast solutions.",
    keywords:
      "Python development Service USA,best Python development company India,affordable Python developers India,hire dedicated Python developers USA,custom Python web app development India,scalable Python software solutions USA",
    canonical: "/services/python-development-company",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

  leftCardData: [
    {
      title: "Leading Python Development Company",
      description:
        "Moonstack is known as the leading Python web development company all over the world. We offer end to end Python web development services in India that includes custom Python website development, API integration, UI and UX designing services, and many more. Our Python website developers have in-depth expertise with the latest technological advancements and frameworks such as Django and Flask. With our team of Python experts, we have an in-depth understanding of clean architectures, cloud infrastructure, and ensure to meet modern tech market standards. Moreover, our professional Python experts can build Python based websites from scratch as well as migrate from one platform to other easily with the third party integration services. ",
      stats: [],
      bolds: false,
      description2:
        "We don’t only focus on Full-stack Python development but we are committed to the innovation, in providing latest modern technology, and result driven Python development services. At Moonstack, we opt for the Python web development best practices that allow us to offer our clients to  leverage the benefits of modern tech stack and ensure to meet industry standards with an agile methodology process. Our enterprise Python solutions are not developed with only technology mindset but, our dedicated professional Python development team​ deliver products that deliver high performance and are reliable as per the market standards. You can hire Python developers on hourly, full time, and part time basis that ensure to meet all modern tech development needs.",
      image: bndimage1.src,
    },
  ],
  solutions: {
    headingContent: [
      {
        text: "Our ",
        color: "text-white",
      },
      {
        text: " Python web Development",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: " Services",
        color: "text-white",
      },
    ],
    subHeadingText:
      "We offer end to end Python backend development and frontend development services. All over the world, Moonstack is known as the one stop Python web development company that delivers best web solutions with best Python development practices. From custom Python development to support and maintenance we deliver speed, security, and high performance solutions to our clients.",
  },
  featuresData: [
    {
      Icon: PythonIcon1,
      imgSrc: "",
      title: "Custom Python Website Application Development ",
      description:
        "Our Python web development packages are designed in such a way that support end to end custom Python web app development services. With our Python outsourcing services, we build custom websites from scratch that deliver user centric and high performance based next level experience to users. The right Python web development services ensure to meet modern business needs and make your business win in the competitive edge. ",
    },
    {
      Icon: PythonIcon2,
      imgSrc: "",
      title: " Python Backend Development Services",
      description:
        "With our Professional Python developers we opt for the backend development solutions that ensure businesses to operate smoothly with best industry practices. Our Python web developers opt for backend design that support heavy traffic, solve complex issues, and a large number of databases that meet customer expectations and streamline enterprise workflow without any hurdles. We utilise best industry Python frameworks and deliver AI ready backends for our clients to stay ahead in the market.",
    },

    {
      Icon: PythonIcon3,
      imgSrc: "",
      title: "Python API Development & Integration Services",
      description:
        "Extend your functionalities in the website with secure API development and integration services. With our RESTful API development with Python or GraphQL - we ensure smooth data flow and interoperability. Our developers integrate additional functionalities with simple API development or integration services that helps them to not reduce manual efforts, and saves huge amounts of time. Along with this, deliver the same experience via third party support or they can reuse their original ones.",
    },
    {
      Icon: PythonIcon4,
      imgSrc: "",
      title: "Python  Migration & Modernization to Python",
      description:
        "Our Python experts allow enterprises to migrate their data from one platform to another without losing anything. We also  help enterprises to upgrade outdated systems with modern functionalities. Our Python developers ensure easy transition with minimum downtime that allows us to experience advanced functionalities and optimised workflows. Our Python experts are always available for our clients to migrate data from one to another or upgrade it to the next level or rich digital ecosystem.",
    },
    {
      Icon: PythonIcon5,
      imgSrc: "",
      title: "Python Django & Flask Framework Development",
      description:
        "We allow our clients to leverage the benefits of powerful Python frameworks such as Django & Flask that allow them to deliver structured, high performance, and secure web apps in the market. Our Python Django & Flask framework development offers different solutions with faster deployment, increased performance, and delivers seamless integrations that match all technical requirements.",
    },
    {
      Icon: PythonIcon6,
      imgSrc: "",
      title: "Python Support and Maintenance Services",
      description:
        "At Moonstack, we offer full time ongoing support and maintenance services for our clients. Our Python support and maintenance services include bug fixes instantly, feature enhancements, security updates, and performance optimisation. With our proactive monitoring, we offer quick response time that leads to zero downtime and instant solution offers strong digital performance for the clients.",
    },
  ],

  NewBanner: {
    headingLines: [
      { text: "Grow Faster With Our Professional Python Development Experts" },
    ],
  },
  OutcomeBanner: {
    heading: [
      {
        text: "Build Smart, Scale Faster: Your",
        color: "text-white",
        className: "",
      },
      {
        text: "Expert Python Development Partner",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Secure & Reliable Application Architecture",
      "Fast Development with Clean, Maintainable Code",
      "High-Performance & Scalable Solutions",
      "Easy Integration with AI, Data & Cloud Systems",
    ],
    buttonText: "Start Your Project Today",
  },

  CloudTimelineData: {
    title: "Process we follow for ",
    highlight: "Python web development Services",
    subtitle:
      "To launch the successful Python web solutions we opt for the best Python web development process. Our Python experts have defined the structure approach on the basis of agile methodology and best Python industry practices. In our Python application development we understand our clients' demand and then deliver the best end to end Python solution for your business.",
    steps: [
      {
        number: 1,
        title: "Requirement Analysis",
        description:
          "At Moonstack, we understand the project requirement in depth and then align Python web solutions that match exactly your business needs. With our Python top business experts we analyze your product and understand business needs, challenges, and all technical aspects that allow us to create a clear project roadmap and deliver the best solution for your business.",
        position: "left",
      },
      {
        number: 2,
        title: "Planning and Discussion",
        description:
          "After gathering requirements, we conduct proper planning for our clients and do discussions in depth that ensure us to deliver right solutions for our customers. We plan, create right strategies via proper discussions that ensure that we are on the appropriate path and will not face any obstacle in future and give confidence to tech industry experts.",
        position: "right",
      },
      {
        number: 3,
        title: "Custom Python Development",
        description:
          "We built Python solutions from scratch with the right strategy and by opting for clean codes and industry practices.Our main aim is to deliver high performance, secure, and seamless functionalities at every development stage. In our custom Python web development, we opt for the modern Python web development tools and frameworks that support end to end development cycle. ",
        position: "left",
      },
      {
        number: 4,
        title: "API Integration",
        description:
          "Our professional Python development team​ integrates API via third party integration services. We opt for third party platforms that allow us to extend additional functionalities, automated tools, and backend services that ensure to run all platforms smoothly and offer next generation digital experiences to the users. Our API integration saves developers time and efforts. Along with this, integrate additional features that make Python more advanced and smarter.",
        position: "right",
      },
      {
        number: 5,
        title: "Testing & Quality Assurance",
        description:
          "We offer end to end testing services to our client and assure that it meets all quality standards. Our Python experts opt for an end to end testing process that includes both  manual and automation to deliver high performance and bug free Python solutions in the market. At Moonstack, we believe in rigorous testing, high performance, and secure solutions and in that we don't compromise at all.",
        position: "left",
      },
      {
        number: 6,
        title: "Support and Maintenance",
        description:
          "We offer end to end support and maintenance services to our clients for their Python web solutions. Here, we provide continuous maintenance, updates, fix bugs, upgrade Python web solutions to next level modernise solutions that allow to run web apps smoothly and offer continuous  next generation experience to the users. Customers never experience downtime and have access to outdated features.",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Our Customised " },
      {
        text: "Python Web Development",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: "Solutions" },
    ],
    description:
      "At Moonstack, we offer fully ready to use Python web solutions that are designed by top industry experts to match your major business needs. With market research, our Python experts have identified the gaps and with best Python practices deploy  ready to use solutions for start ups to large enterprises that ensure to meet different business needs and meet with clients expectations.",
    cards: [
      {
        id: "Python CMS Solution",
        label: "Python CMS Solution",
        description:
          "We have built an end to end CMS platform with the right utilisation of powerful frameworks including Django and others. Our Python CMS solution is easy to use and supports seamless updates, has access to multi user people, and is an ideal solution for start ups to enterprises. Our CMS solution is built for a future ready  content management system that helps to save you development time and is easy to deploy in your business.",
        variant: "light",
      },
      {
        id: "DevOps and Automation Solutions",

        label: "DevOps and Automation Solutions",
        description:
          "At Moonstack, we have built DevOps and automation solutions to streamline your development, deployment, and operational workflow far faster and in a reliable delivery process. In our Python DevOps and deployment services we integrate CI/CD pipelines, automated testing process, cloud infrastructure management, and monitor different systems to decrease manual efforts, and boost development process. We ensure continuous improvements across the deployment and development cycle in the entire technology ecosystem.",
        variant: "accent",
      },
      {
        id: "Python IoT Solutions",

        label: "Python IoT Solutions",
        description:
          "Our Python IoT solutions allow businesses to connect, automate, and manage smart devices easily. We have developed secure IoT ecosystems that support real time data collection, intelligent processings, and device interoperability. At Moonstack, we support sensor integration to cloud connectivity that ensures increased automation, productivity, and offer insightful decision making across the operational departments.",
        variant: "dark",
      },
      {
        id: "Blockchain Python Development Services",

        label: "Blockchain Python Development Services",
        description:
          "Deploy our Blockchain powered platforms and smart contracts that will help in transparency, trust, and to maintain reliable and stronger digital transactions. We have built Blockchain Python solutions with powerful libraries and modern Blockchain frameworks that allow businesses to leverage the benefits of next generation technologies. Along with this, Python Blockchain solutions support data integrity and allow users to experience decentralised Blockchain capabilities.",
        variant: "dark",
      },
      {
        id: "Python Chatbot Development",

        label: "Python Chatbot Development",
        description:
          "Our Python app coders have built modern smart chatbots by using advanced NLP and AI frameworks. We have built Python chatbots that understand user intent, provide accurate responses, and integrate seamlessly with several platforms. Our Python smart bots streamline operations, customer engagement, and provide full customer support that accelerate business growth. The main aim is to deliver Python bot is to improve customer engagement and solve their queries instantly without any disruptions.",
        variant: "light",
      },
      {
        id: "Custom Python CMS Development",

        label: "Custom Python CMS Development",
        description:
          "With powerful and intuitive custom Python CMS development services, we have launched secure and flexible CMS platforms for start ups and large enterprises. For our clients we have built interactive dashboards, role based access, and seamless integration with the blend of powerful frameworks like Django that ensure effortless content control and deliver high performance and allow users to experience modern digital experiences.",
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
        text: "Why Choose Moonstack for your ",
        color: "text-white",
      },
      {
        text: "Python web ",
        className: "libreItalic font-[400] highlight-text",
      },
      {
        text: "development Services?",
        color: "text-white",
      },
    ],
    description:
      "Moonstack is the leading Python web development company. We offer end to end Python web development services from consultation to deployment. Our Python web experts have in-depth expertise with different tools and technologies that allow them to deliver clean coding based digital solutions with best Python web development practices. Along with this, we support highly transparent communication, on time delivery, and dedicated support that accelerate different business growth.",
    columsClass: "lg:grid-cols-3",
    list: [
      {
        id: 1,
        title: "Expert Python Developer",
        icon: collaboration.src,
        Icon: PythonIcon7,
        description:
          "Moonstack offers a highly skilled team of Python developers who have in-depth knowledge in modern Python frameworks that includes Django, Flask, and several API integration. Our Python developers focus to deliver future ready solutions that meet all your modern tech demands and meet your needs.",
      },
      {
        id: 2,
        title: "Fully Customised Solution",
        icon: collaboration.src,
        Icon: PythonIcon8,
        description:
          "We provide a fully customized solution as per your business needs. Our team offers tailored Python solutions that meet all your business needs. We offer a custom development approach in which we highly focus on smoother operations, better user experiences, and advanced modern experience. At Moonstack, we focus on different functionalities and integration that match our exact project requirements on our clients. ",
      },
      {
        id: 3,
        title: "OnTime Delivery",
        icon: collaboration.src,
        Icon: PythonIcon9,
        description:
          "Time is important and we understand its value. At Moonstack ,we focus on a structured approach that allows us to deliver our projects on time without compromising quality. Our team plans their daily routine as per the structured way that helps them to meet all the business needs with regular updates. Our strategic roadmap will not allow any productive task to delay in any care.",
      },
      {
        id: 4,
        title: "Transparent Communication",
        icon: collaboration.src,
        Icon: PythonIcon10,
        description:
          "At Moonstack, we offer end to end transparent communication with structured updates, clear timelines, and constant progress reports. Our team always ensures to keep our clients in loop and convey all information to them with clear timelines. We believe in an open communication approach and our main aim is to improve collaboration with our clients and meet their expectations constantly.",
      },
      {
        id: 5,
        title: "Long Term Support and Maintenance",
        icon: collaboration.src,
        Icon: PythonIcon11,
        description:
          "Our focus is to not only deploy the solutions in the market. We believe in long term commitments and provide end to end maintenance services to our customers. At Moonstack, we properly plan the project and ensure that we meet with all committed milestones that are required in the business. With a constant work process, our python web developers ensure to maintain the quality and meet customer experience for the long period.",
      },
      {
        id: 6,
        title: "End to End Security ",
        icon: collaboration.src,
        Icon: PythonIcon12,
        description:
          "We offer end to end security standards to our clients with optimised codes and high performance frameworks. At Moonstack, we focus on high speed, stability, and keep all our clients' information fully secure and details confidential. Our python web app developers will not leak any information in any case, it would only be shared with the team who is constantly working on the project. We opt for high security frameworks not only to protect your solutions but also all details.",
      },
    ],
  },
  accordionData: [
    {
      question: "Should we use Django or Flask?",
      answer:
        "Django is the ideal Python platform for large structured web app solutions that has inbuilt features such as admin panel, authentication, and ORM. On the other hand, Flask is lightweight and ideal for small business and highly customised platforms.",
    },
    {
      question: "How is Python used for web development?",
      answer:
        "Python is used to create backend, API, and server logic with automation scripts to deliver web apps. This technology supports frameworks like  Django and Flask that makes the development process more faster and secure.",
    },
    {
      question: "Can Python handle large-scale applications?",
      answer:
        "Yes, Python can manage large scale apps and -high traffic apps. Many global platforms also support Python such as Instagram and Spotify due to scalability.",
    },
    {
      question: "What are Python keywords?",
      answer:
        "Python keywords are reserved words that define structure of language. Such as def, class,if, try and import. They are used for control logic, functions, and loops.",
    },
    {
      question: "Is Python good for AI and Machine Learning?",
      answer:
        "Yes, Python is best for both AI and Machine Learning as it also supports powerful frameworks. Also, known for a strong community and ready to use AI and ML tools.",
    },
    {
      question: " Is Python secure for web development?",
      answer:
        "Yes, Python is fully secure for web development as it supports modern frameworks like Django and has inbuilt projections against CSRF,SQL injection, XSS, and other vulnerabilities. We opt for best coding practices and provide regular updates. No doubt, Python is fully secure and reliable web solution.",
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

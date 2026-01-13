import { PageData } from "@/types/web-development-data-type";
import managmentIconOne from "@/assets/app-development-images/managment-icon-one.svg";
import androidIcon from "@/assets/android-icon.svg";
import iosIcon from "@/assets/next-icon.svg";
import reactIcon from "@/assets/react-icon.svg";
import nodeIcon from "@/assets/node-icon.svg";
import pwaIcon from "@/assets/docker-icon.svg";

import flutterIcon from "@/assets/python-icon.svg";
import swiftIcon from "@/assets/aws-icon.svg";
import nativeIconOne from "@/assets/app-development-images/native-icon-one.webp";
import nativeIconTwo from "@/assets/app-development-images/native-icon-two.webp";
import nativeIconThree from "@/assets/app-development-images/native-icon-three.webp";
import nativeIconFour from "@/assets/app-development-images/native-icon-four.svg";
import nativeIconFive from "@/assets/app-development-images/native-icon-five.svg";
import nativeIconSix from "@/assets/app-development-images/native-icon-six.svg";
import figmaIcon from "@/assets/figma-icon.svg";

import bannerImg from "@/assets/app-development-images/native-banner-img.webp";

import nativeBannerImg from "@/assets/app-development-images/native-banner-img.webp";

import androidLottie from "../../../public/lottie/full-stack.json";

export const fullstack: PageData = {
  hero: {
    title: [
      {
        text: "Best Full Stack Web Development  ",
        color: "text-white",
      },
      {
        text: "Service in  India ",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "At Moonstack, we are one stop solution for all your development needs. We develop end to end websites from ideation to launching you can rely on us. Our full stack web developers deliver user friendly designs and scalable back end architectures that ensure successful launching or powerful solutions. ",
        color: "text-white",
      },
    ],
    lottieData: androidLottie,
    breadcrumbs: [
      { label: "Home", href: "/" },
      {
        label: " Application Development",
        href: "/application-development",
      },
      {
        label: "Android App Development",
        href: "/application-development/android-app",
      },
    ],

    buttonText: "Get your full stack development partner now ",
  },
  seo: {
    title: "Full-Stack Web Development Company India & USA | Moonstack",
    description:
      "Looking for a fullstack web development team in India? We handling frontend, backend, APIs, and cloud infrastructure under one roof. Book a product discovery call.",
    keywords:
      "full stack development company India, hire full stack developers India,  best full stack web development service India, affordable full stack developers India",
    canonical:
      "https://www.moonstack.com/website-development-service/full-stack-website-development-service",
    ogImage: "/opengraph-image.png",
  },
  pointsTitle: [
    {
      text: "Leading Full Stack Development Company   ",
      color: "text-white ",
    },
  ],
  points:
    "Moonstack is the leading full stack development company in  India. We build powerful and modern websites that are user friendly and deliver high performance experiences  to the customers. Our team of Full stack coders handles the entire development cycle from start to end that deliver engaging, faster loading, and increase conversation rates. We adopt  the combination of modern technological advancement and have hands-on experience to deliver client centric and modern solutions in the market. ",
  highlightText: "Android development service in India",

  mobDesignBanner: nativeBannerImg,
  quoteBanner: {
    headingText: [
      {
        text: "Choose your hiring model now ",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: "We offer different hiring modules to our clients that help to meet their hiring preferences for a long term, short term, and hourly basis. At Moonstack, our focus is too simple to meet our client’s expectations. ",
        color: "text-white",
      },
    ],
    image: bannerImg,
    buttonText: "Connect with us",
  },
  solutions: {
    headingContent: [
      {
        text: "  Discover how efficient ",
        color: "text-white",
      },
      {
        text: "  Android App Developer  ",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: " company can affect your product",
        color: "text-white",
      },
    ],
    subHeadingText:
      "We provide end to end full stack development services in India. From consulting to launching your solutions, you can fully rely on us for all your digital solution needs.",
  },
  featuresData: [
    {
      imgSrc: nativeIconOne,
      title: "Front End Development",
      description:
        "Our front end developers create engaging and immersive user interfaces with the right usage of technologies such as HTML, CSS/SCSS, and JavaScript. With high performance, our tech experts also focus on delivering interactive and easy to use UI/UX that provides next generation experiences to users.",
    },
    {
      imgSrc: nativeIconTwo,
      title: "Back End Development",
      description:
        "With our Moonstack engineers in India, we deliver end to end high performance server side solutions to different businesses. We provide secure, scalable, and highly optimized API for seamless database integration. Our experienced back end developers aim to write clean code and offer smooth execution with best industry practices.",
    },
    {
      imgSrc: nativeIconThree,
      title: "Full Stack API Integration Services",
      description:
        "Extend your website functionalities with simple API integration services. Our full stack coders in India offer secure, scalable APIs that support third party platforms, improving features, automating processes, and developing a unified digital ecosystem that meets business needs and enhances customer experiences.",
    },
    {
      imgSrc: nativeIconFour,
      title: "Full Stack Testing Services",
      description:
        "At Moonstack, our focus is to deliver secure and bug free solutions to our customers. We provide end to end solution testing that includes functional, performance, and integration testing. Our full stack coders offer automated and unit testing to deliver high performance and bug free solutions in the market.",
    },
    {
      imgSrc: nativeIconFive,
      title: "Full Stack Support and Maintenance",
      description:
        "Our full stack engineers offer complete support and maintenance services to our clients. By partnering with the leading full stack company, your enterprise solutions will always stay updated with new functionalities and modern trends, with issues fixed immediately and proactive support to maintain long-term stability.",
    },
    {
      imgSrc: nativeIconSix,
      title: "Full Stack Custom Designing Services",
      description:
        "Launch interactive custom design services for your users. We create tailored designs that reflect your brand identity and deliver next generation experiences. Our focus is on building the best front end designs with responsive layouts and modern interfaces that elevate user experience.",
    },
  ],

  tabs: {
    headingText: "Why Choose Us?",
    subHeadingText:
      "Moonstack is the premier React Native development agency in India, and here are six ways we offer more value to our clients than the competition.",

    tabs: [
      {
        id: 1,
        title: "15 Years of Industry Experience",
        description:
          "We have 15+ years of hands-on experience at Moonstack. Our expertise ranges across industries with a solid track record of helping businesses scale with our app development services.",
        image: androidIcon,
      },
      {
        id: 2,
        title: "Truly Custom App Builds",
        description:
          "Moonstack delivers completely custom app builds made from scratch by our experienced React Native developers. We never use templates or shortcuts when it comes to client projects.",
        image: figmaIcon,
      },
      {
        id: 3,
        title: "End-to-end Service",
        description:
          "We provide complete development solutions for startups and enterprises, from developing a proof-of-concept to deploying complete cross-platform React Native applications to app stores.",
        image: reactIcon,
      },
      {
        id: 4,
        title: "Experienced Team",
        description:
          "We work with the top React Native developers in India. Our team functions as one with industry-leading experts from each field collaborating to build top-tier React Native applications.",
        image: androidIcon,
      },
      {
        id: 5,
        title: "Client-Centric Approach",
        description:
          "Our focus on every project is to create applications that fit our client’s business goals without fail.",
        image: figmaIcon,
      },
      {
        id: 6,
        title: "Quick Development Timeline",
        description:
          "Our React Native app development services in India offer a quick development timeline thanks to our team’s experience and React Native’s multi-platform building capabilities.",
        image: reactIcon,
      },
    ],
  },
  utilisArr: [
    {
      image: reactIcon,
      category: "Mobile App",
      title: "React.js",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: iosIcon,
      category: "Mobile App",
      title: "Next.js",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: nodeIcon,
      category: "Mobile App",
      title: "Node.js",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: flutterIcon,
      category: "Mobile App",
      title: "Python (Django / Flask)",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: pwaIcon,
      category: "Mobile App",
      title: "Docker",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: swiftIcon,
      category: "Mobile App",
      title: "AWS S3",
      desc: "At Moonstack, we believe in building technology.",
    },
  ],
  processSteps: {
    headingText: [
      {
        text: " Our Application development ",
        color: "text-white",
      },
      {
        text: "   process wraps around ",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: " your unique business needs",
        color: "text-white",
      },
    ],
    subHeadingText:
      "Moonstack is the trusted partner for React Native enterprise app development in India across industries. Our success can be attributed to our working process, which is built around transparency and confidentiality. What sets us apart? Find out here.",
  },
  whyChooseData: {
    headingText: "Our Process of Laravel website in India ",
    subHeadingText:
      "We have defined a process of Laravel website development that allows us to deliver successful Laravel web solutions in the market. As the best Laravel development agency in  India, our experts have defined the structured roadmap that allows us to deliver solutions on time and exclude last minute complex challenges. ",
    steps: [
      {
        icon: managmentIconOne,
        title: "Gather Requirements",
        description:
          "We collect all the information about the project to understand what our client actually needs that allows us to align with the project.",
      },
      {
        icon: managmentIconOne,
        title: "Client Discussion",
        description:
          "Once we have proper requirements, our Laravel team experts conduct a formal discussion with the client to resolve all queries.",
      },
      {
        icon: managmentIconOne,
        title: "Internal Strategy Discussion",
        description:
          "After gathering requirements, we have an internal strategy discussion where our team brainstorms to deliver the best outcome.",
      },
      {
        icon: managmentIconOne,
        title: "Designing - UI/UX Services",
        description:
          "Our designers begin the UI/UX design process focusing on creating an interactive and easy-to-use interface for the end users.",
      },
      {
        icon: managmentIconOne,
        title: "Development",
        description:
          "The development process begins with both frontend and backend teams collaborating to build the solution efficiently.",
      },
      {
        icon: managmentIconOne,
        title: "Deployment and Testing",
        description:
          "We deploy and test the Laravel software with automated and manual processes, ensuring that we deliver bug-free and optimized solutions.",
      },
      {
        icon: managmentIconOne,
        title: "Delivery and Post Support",
        description:
          "After testing, we deliver the Laravel-based solution and provide post-launch support to ensure our team is always there when needed.",
      },
    ],
  },
  slides: [],
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
};

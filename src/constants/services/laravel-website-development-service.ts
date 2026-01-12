import { PageData } from "@/types/web-development-data-type";
import laravelImg from "public/assets/laravel-hero-img.webp";
import laravelBgImg from "public/assets/laravel-bg.webp";
import android from "public/assets/app-development-images/android-icon.svg";
import apiIcon from "public/assets/app-development-images/api-icon.svg";
import testingIcon from "public/assets/app-development-images/testing-icon.svg";
import playstoreIcon from "public/assets/app-development-images/playstore-icon.svg";
import settingIcon from "public/assets/app-development-images/setting-icon.svg";
import codeIcon from "public/assets/app-development-images/code-icon.svg";
import androidTabImgOne from "public/assets/app-development-images/android-tab-img-one.webp";
import androidTabImgTwo from "public/assets/app-development-images/android-tab-img-two.webp";
import androidTabImgThree from "public/assets/app-development-images/android-tab-img-three.webp";
import androidTabImgFour from "public/assets/app-development-images/android-tab-img-four.webp";
import androidTabImgFive from "public/assets/app-development-images/android-tab-img-five.webp";
import androidTabImgSix from "public/assets/app-development-images/android-tab-img-six.webp";
import managmentIconOne from "public/assets/app-development-images/managment-icon-one.svg";
import androidIcon from "public/assets/android-icon.svg";
import iosIcon from "public/assets/ios-icon.svg";
import reactIcon from "public/assets/react-icon.svg";
import pwaIcon from "public/assets/pwa-icon.svg";

import flutterIcon from "public/assets/flutter-icon.svg";
import swiftIcon from "public/assets/swift-icon.svg";
import bannerImg from "public/assets/app-development-images/native-banner-img.webp";

import androidLottie from "../../../public/lottie/laravel.json";
import nativeBannerImg from "public/assets/app-development-images/native-banner-img.webp";

export const laravel: PageData = {
  hero: {
    title: [
      {
        text: "Laravel Web Development Services in India ",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Grow your business with secure, scalable, and high performance based PHP laravel solutions. At Moonstack, we discuss, develop, and launch responsive and modern functionality based Laravel web solutions for start ups, mid sized business, and large enterprises that ensure to meet client requirements and stay ahead in the competitive edge. ",
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
    image: laravelImg,
    backgroundImage: laravelBgImg,
    buttonText: "Discuss your tech needs now ",
  },
  seo: {
    title: " Laravel Web Development Company in India & USA | Moonstack",
    description:
      " Build secure, scalable Laravel websites and web apps with experienced developers, clean code, and long-term maintainability. Share your Laravel requirements with us today.",
    keywords:
      " laravel web development service India,laravel web development company India,  Custom laravel website development service,hire laravel developer India",
    canonical:
      "https://www.moonstack.com/website-development-service/laravel-website-development-service",
    ogImage: "/opengraph-image.png",
  },
  pointsTitle: [
    {
      text: "Moonstack - Leading Laravel Development Company  ",
      color: "text-white ",
    },
    { text: " for your business ", color: "text-[#0CE859]" },
  ],
  points:
    "Moonstack is known as the leading Laravel development company in India across the globe. We have delivered a wide range of PHP based Laravel web solutions to different businesses. With our expert Laravel developers, we have built custom Laravel web apps, POS systems, CRMs, video streaming apps, and many more solutions to meet diverse needs of different businesses. .",
  highlightText: "Android development service in India",
  banner: {
    headingText: [
      {
        text: "Scale Your Business with Laravel Experts",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: " Laravel development goes through different stages of work.",
        color: "text-white",
      },
    ],
    image: bannerImg,
    imageHeight: "md:w-[394px]",
  },
  quoteBanner: {
    headingText: [
      {
        text: "Opt for your custom Laravel services now",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: "Laravel services goes through different stages of work.",
        color: "text-white",
      },
    ],
    image: bannerImg,
    buttonText: "Connect with us",
  },
  solutionTitle: [
    {
      text: "We are best Laravel development company in India for -   ",
      color: "text-white ",
    },
  ],
  solutionPoints: [
    "We offer custom Laravel website development services in India",
    "From Moonstack, Hire Laravel web developers on hourly, full time, and part time basis",
    "Offer end to end Laravel web development services such as custom development, e-commerce, API, migration and updates",
    "We keep 100% transparency in project and keep all information fully secure",
    "At Moonstack, we have team of highly professional and skilled Laravel developers ",
  ],
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
      "We have best Laravel web developers and with them we offer affordable laravel development service in India - from consultation to migration all your needs will fulfill at one stop -",
  },
  featuresData: [
    {
      imgSrc: android,
      title: "Laravel Consulting Services",
      description:
        "Bring your idea into reality with the right strategy and roadmap with Laravel web experts. Our Moonstack’s expert Laravel consulting professionals will understand your business needs and provide you with the right development strategy to deliver secure and scalable Laravel solutions in the market.",
    },
    {
      imgSrc: apiIcon,
      title: "Custom Laravel Website Development Service",
      description:
        "We build high performance, secure, and functional custom Laravel web apps in India. We develop custom Laravel websites for clients as per their business requirements. Our Laravel web development experts understand the gap in your operational process and integrate modern features to meet latest business demands.",
    },
    {
      imgSrc: codeIcon,
      title: "Laravel Custom E-Commerce Development Services",
      description:
        "Grow your online presence with Laravel ecommerce development service in India. We build high performance and secure custom e-commerce solutions integrated with advanced functionalities and deliver smooth shopping experiences to customers. Our team's main aim is to increase website conversions on your websites.",
    },
    {
      imgSrc: testingIcon,
      title: "Laravel UI/UX Designing Services",
      description:
        "Our architect designers create interactive and engaging designs for our customers. We hold expertise with custom designing in which we bring your business brand identity to the real world and connect with customers. At Moonstack, our designers create interactive designs with easy to use aspects.",
    },
    {
      imgSrc: playstoreIcon,
      title: "Laravel API Integration Services",
      description:
        "Extend your web and mobile app functionalities with seamless Laravel REST API development service in India by partnering with the best Laravel development agency. We integrate Laravel web solutions with third party services via API such as secure payment gateway, internal systems, and many more.",
    },
    {
      imgSrc: settingIcon,
      title: "Laravel Maintenance and Support Services",
      description:
        "We offer end to end Laravel maintenance and support services. With our expert Laravel team, we run Laravel web solutions smoothly without any errors. We provide constant updates, optimize performance, and fix bugs to run solutions smoothly and deliver long term business commitment.",
    },
  ],
  mobDesignBanner: nativeBannerImg,
  tabs: {
    headingText: "Our Scalable Laravel Web Solutions in India",
    subHeadingText:
      "For decades MoonStack has been creating a wide range of Laravel web solutions for our clients for different industries that are ready to use as per different business with minor and major customisation processes. ",
    tabs: [
      {
        id: 1,
        title: "Laravel Web Apps",
        description:
          "We have developed high performance and secure PHP based Laravel framework web apps for different industries with next generation functionalities that allow us to meet modern business needs. Also, have created interactive UI and engaging UX that allow users to connect with users.",
        image: androidTabImgOne,
        imgHeight: "540px",
      },
      {
        id: 2,
        title: "Laravel E-commerce Solutions",
        description:
          "The best ecommerce website developers in India build innovative and highly functional Laravel online stores. We have integrated essential functionalities such as product catalog, shopping carts, order tracking, and secure payment gateways that increase conversion rates and user experience.",
        image: androidTabImgTwo,
        imgHeight: "540px",
      },
      {
        id: 3,
        title: "Laravel CRM Solutions",
        description:
          "Moonstack builds Laravel based CRM solutions that improve customer relationship management processes in companies. We design custom CRM solutions that allow us to track leads and automate conversions that lead to data driven decisions and streamline client communication processes.",
        image: androidTabImgThree,
        imgHeight: "540px",
      },
      {
        id: 4,
        title: "Laravel CMS Solutions",
        description:
          "Professional Laravel experts offer robust Laravel based CMS development in India. We have built the best Laravel CMS solutions that allow businesses to easily update, publish, and manage content effortlessly on their websites. We deliver CMS solutions to businesses that have full control on content management systems.",
        image: androidTabImgFour,
        imgHeight: "540px",
      },
      {
        id: 5,
        title: "POS Systems",
        description:
          "Integrate modern Laravel powered POS systems that are developed by Laravel experts in India. Our POS systems help to streamline different operational processes, allow retailers to manage multiple outlets, and deliver best outcomes for customers. We have delivered a wide range of POS (Point of Sale solutions) to our retail businesses.",
        image: androidTabImgFive,
        imgHeight: "540px",
      },
      {
        id: 6,
        title: "Video Streaming and Media Apps",
        description:
          "Develop your Laravel based video streaming and media apps with expert laravel web developers in India. We designed video streaming and media apps that support secure content delivery and content management. We develop video streaming and media apps in such a way that offer seamless streaming and integrated with user authentication and support multiple platforms.",
        image: androidTabImgSix,
        imgHeight: "540px",
      },
    ],
  },
  utilisArr: [
    {
      image: androidIcon,
      category: "Mobile App",
      title: "PHPStorm",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: iosIcon,
      category: "Mobile App",
      title: "Xdebug",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: reactIcon,
      category: "Mobile App",
      title: "Eloquent ORM",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: flutterIcon,
      category: "Mobile App",
      title: "Laravel Forge",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: pwaIcon,
      category: "Mobile App",
      title: "Laravel Sanctum",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: swiftIcon,
      category: "Mobile App",
      title: "Laravel Horizon",
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
      "We have defined a process of Laravel website development that allows us to deliver successful Laravel web solutions in the market. As the best Laravel development agency in  India, our experts have defined the structured roadmap that allows us to deliver solutions on time and exclude last minute complex challenges. ",
  },
  whyChooseData: {
    headingText:
      "Why Choose us for your Laravel  Web Development Services in India? ",
    subHeadingText:
      "Laravel is known for the best Laravel framework development in India. At Moonstack, we have delivered a wide range of custom Laravel web development services to our customers. Our professional Laravel experts have delivered secure, high performance, and future ready web apps. ",
    steps: [
      {
        icon: managmentIconOne,
        title: "Decade of Experience",
        description:
          "Our Laravel experts have decades of experience that allows them to meet all clients' needs. Laravel coders have delivered scalable, secure, and high performance web apps with advanced integrated functionalities.",
      },
      {
        icon: managmentIconOne,
        title: "Custom Solutions for Every Business",
        description:
          "We have delivered 450+ custom web development solutions across the world. Our professional Laravel experts have built high performance, scalable solutions specifically designed for different business needs.",
      },
      {
        icon: managmentIconOne,
        title: "End to End Laravel Development Services",
        description:
          "Delivering end to end Laravel development services to our clients. From consultation to development to migration, Moonstack is known as a one stop solution for all our client’s Laravel web development needs.",
      },
      {
        icon: managmentIconOne,
        title: "Transparent Communication",
        description:
          "At Moonstack, we maintain open communication with our clients with constant updates, demos, and progress reports. This ensures stronger alignment and mutual understanding throughout the project lifecycle.",
      },
      {
        icon: managmentIconOne,
        title: "Confidential Details",
        description:
          "Every project idea is unique – we understand the importance of your business model. We keep all your information fully secure and protected, and never share confidential details with third parties.",
      },
      {
        icon: managmentIconOne,
        title: "Creative and Business Oriented Solutions",
        description:
          "We don’t just build Laravel solutions for development. We deliver business-driven, next-generation solutions that align with your goals and engage users with modern and advanced capabilities.",
      },
    ],
  },
  slides: [],

  accordionData: [
    {
      question:
        "Will you be able to work long term for my Laravel project requirements?",
      answer:
        "Yes, our Laravel web developers are always available and they are proficient with all types of Laravel web development requirements. Our team offers professional Laravel web development services to our customers.",
    },
    {
      question: "How long will you take to build my Laravel website?",
      answer:
        "There is no fixed time - the completion of Laravel websites depends on various factors such as project complexity, timeline, number of Laravel developers, and scope. However, we ensure maximum effort and deliver solutions with all essential features.",
    },
    {
      question: "Will you provide Laravel migration services in India?",
      answer:
        "Yes, we provide Laravel migration services in India. Our expert Laravel team specializes in migrating solutions from other technologies to Laravel without affecting design, UI, performance, or data.",
    },
    {
      question: "Can I hire Laravel web developers from your team?",
      answer:
        "Yes, you can hire the best Laravel developers from our team on full time, part time, or hourly basis. We have a dedicated pool of experienced Laravel engineers available.",
    },
    {
      question:
        "Can you integrate API or third party services into my Laravel solutions?",
      answer:
        "Yes, we can enhance your Laravel solutions with third-party integrations via APIs. Our experts have hands-on experience with various external service integrations.",
    },
    {
      question: "How much does it cost for Laravel web development services?",
      answer:
        "There is no fixed cost for Laravel web development services. The final cost depends on multiple factors such as features, design, hiring model, integrations, and project requirements.",
    },
  ],
};

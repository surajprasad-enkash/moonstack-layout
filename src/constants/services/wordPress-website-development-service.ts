import { PageData } from "@/types/web-development-data-type";

import androidIcon from "public/assets/android-icon.svg";
import iosIcon from "public/assets/ios-icon.svg";
import reactIcon from "public/assets/react-icon.svg";
import pwaIcon from "public/assets/pwa-icon.svg";
import flutterIcon from "public/assets/flutter-icon.svg";
import swiftIcon from "public/assets/swift-icon.svg";
import managementImg from "public/assets/app-development-images/contact-app-img.webp";

import figmaIcon from "public/assets/figma-icon.svg";
import managmentIconOne from "public/assets/app-development-images/managment-icon-one.svg";
import managmentIconTwo from "public/assets/app-development-images/managment-icon-two.svg";
import managmentIconThree from "public/assets/app-development-images/managment-icon-three.svg";
import managmentIconFour from "public/assets/app-development-images/managment-icon-four.svg";
import managmentIconFive from "public/assets/app-development-images/managment-icon-five.svg";
import managmentIconSix from "public/assets/app-development-images/managment-icon-six.svg";

import androidLottie from "../../../public/lottie/wordpress.json";
import nativeBannerImg from "public/assets/app-development-images/native-banner-img.webp";

export const wordPress: PageData = {
  hero: {
    title: [
      {
        text: "WordPress Development   ",
        color: "text-white",
      },
      {
        text: "Services in India",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Launch your powerful, user centric and secure custom wordpress based website that leads to increased traffic and conversion. ",
        color: "text-white",
      },
    ],
    image: managementImg,

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
  },
  mobDesignBanner: nativeBannerImg,
  seo: {
    title: "WordPress Website Development Company India & USA | Moonstack",
    description:
      "Looking for WordPress developers in India? Moonstack launches and maintains secure, fast WordPress sites with custom themes, plugins, and SEO‑ready setups. call now!",
    keywords:
      "wordpress development company India,wordpress development service India,custom wordpress development service India,hire wordpress website developers India",
    canonical:
      "https://www.moonstack.com/website-development-service/wordPress-website-development-service",
    ogImage: "/opengraph-image.png",
  },
  pointsTitle: [
    {
      text: "Leading WordPress Development Company in India ",
      color: "text-white ",
    },
  ],
  points:
    "Moonstack is known as the leading IT company in India. We have delivered a wide range of CMS based websites to our clients. Our WordPress experts have a blend of professional and technical expertise that ensure us to deliver best WordPress website development services in India. From start ups, mid sized to large enterprises, we have delivered successful WordPress solutions to different businesses. ",
  highlightText: "Android development service in India",
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
      "We offer end to end WordPress development services in India. From custom WordPress development to maintenance - Moonstack is your one stop solution for your WordPress development needs. ",
  },
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
      "At Moonstack, we have a defined and structured approach that delivers the best CRM solutions to our clients with the right strategy. We have delivered a wide range of CRM solutions and have hands-on experience with the delivery process and know the exact method to implement in the CRM delivery process. We have opted for the agile methodology and include best CRM development experts in India who focus on timely delivery and ensure to solve last minute complex challenges. ",
  },
  featuresData: [
    {
      imgSrc: managmentIconOne,
      title: "Custom WordPress Development Services",
      description:
        "We offer custom WordPress development services. Our team builds responsive and powerful WordPress based solutions from scratch that reflect the company brand and integrate functionalities aligned with business goals. We focus on building interactive and modern websites that help you stay ahead of competitors.",
    },
    {
      imgSrc: managmentIconTwo,
      title: "WordPress Theme Customization",
      description:
        "Our WordPress development team provides full theme customization services to transform your brand identity and reflect your style. We create top-notch web designs with the perfect combination of colors, fonts, and features that match your business and modern technology trends.",
    },
    {
      imgSrc: managmentIconThree,
      title: "Third Party Integration Services",
      description:
        "Integrate third-party functionalities with our API integration services. Our team is proficient in integrating external features into WordPress solutions, enabling extended functionality and seamless connectivity through APIs.",
    },
    {
      imgSrc: managmentIconFour,
      title: "WordPress Plugin Integration",
      description:
        "We specialize in WordPress plugin integration services. Our team installs, configures, and customizes plugins to enhance your website’s features. At Moonstack, we ensure the right plugins are integrated for performance, scalability, and business-specific needs.",
    },
    {
      imgSrc: managmentIconFive,
      title: "WordPress Testing Services",
      description:
        "Our WordPress team offers end-to-end testing services. We use both automated and manual testing techniques to deliver bug-free, stable, and high-quality WordPress solutions. Our QA experts ensure every feature functions flawlessly.",
    },
    {
      imgSrc: managmentIconSix,
      title: "WordPress Maintenance and Support",
      description:
        "We provide complete WordPress maintenance and support to ensure your website remains secure, updated, and high-performing. Our team monitors, updates, and resolves issues instantly, helping your business grow without interruptions.",
    },
  ],

  quoteBanner: {
    headingText: [
      {
        text: "Opt for your custom CRM services now",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: "CRM services goes through different stages of work.",
        color: "text-white",
      },
    ],
    image: managementImg,
    buttonText: "Connect with us",
  },
  tabs: {
    headingText:
      "Engagement models to choose the best WordPress Development Team ",
    subHeadingText:
      "Build your team as per your preference. We offer the best hiring models that ensure to create your own WordPress developer team for your project with right experience and skills who will work according to you. ",
    tabs: [
      {
        id: 1,
        title: "Fixed Model",
        description:
          "With a fixed model, outsource your full WordPress project to our dedicated team that will develop and manage everything end-to-end. This model works with a clear scope, defined timelines, and specific costing.",
        image: figmaIcon,
      },
      {
        id: 2,
        title: "Hire WordPress Developer",
        description:
          "Hire expert WordPress developers on an hourly, full-time, or part-time basis. Select the best resources from our pool based on their skills and work directly with them under the hourly model.",
        image: reactIcon,
      },
      {
        id: 3,
        title: "Dedicated Team",
        description:
          "At Moonstack, we provide a dedicated hire team model where you can build your ideal WordPress team. Hire designers, developers, and testers based on your project needs. This ensures faster delivery, better quality, complete control over resources, direct communication, and daily reporting.",
        image: reactIcon,
      },
      {
        id: 4,
        title: "Time and Material Model",
        description:
          "Moonstack offers a time and material model where you pay only for the actual time and resources used for specific WordPress tasks, enhancements, or integrations. This model is ideal for companies with ongoing projects that need flexible or specialized resources.",
        image: reactIcon,
      },
    ],
  },
  utilisArr: [
    {
      image: androidIcon,
      category: "Mobile App",
      title: "XAMPP / MAMP / WAMP",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: iosIcon,
      category: "Mobile App",
      title: "WordPress Admin Dashboard",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: reactIcon,
      category: "Mobile App",
      title: "cPanel / Plesk",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: flutterIcon,
      category: "Mobile App",
      title: "Composer",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: pwaIcon,
      category: "Mobile App",
      title: "phpMyAdmin",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: swiftIcon,
      category: "Mobile App",
      title: "WP-CLI",
      desc: "At Moonstack, we believe in building technology.",
    },
  ],

  slides: [],
  whyChooseData: {
    headingText:
      "Why choose us for your WordPress Development Services in India? ",
    subHeadingText:
      "Moonstack is the leading WordPress development company. We offer end to end custom WordPress development services. From designing to launching we can be your best WordPress partner who meets with all your tech and business needs.  ",
    steps: [
      {
        icon: managmentIconOne,
        title: "End to End Custom Web Development",
        description:
          "We specialise in building complete custom WordPress solutions from scratch. Our team understands your business needs and develops modern, scalable, and fully customised web solutions aligned with your goals.",
      },
      {
        icon: managmentIconOne,
        title: "Expert WordPress Developers",
        description:
          "Moonstack has a team of highly skilled WordPress professionals with deep technical expertise. We focus on custom development, performance optimisation, and advanced integrations to deliver high-standard and professional solutions.",
      },
      {
        icon: managmentIconOne,
        title: "Hire Skilled Developers",
        description:
          "Gain access to our pool of experienced WordPress developers. Hire based on experience levels and let our coders work as an extension of your in-house team to deliver secure, responsive, and high-performance WordPress solutions.",
      },
      {
        icon: managmentIconOne,
        title: "On Time Delivery",
        description:
          "We maintain strict timelines and follow a structured development roadmap to ensure every project is delivered on schedule without compromising on quality.",
      },
      {
        icon: managmentIconOne,
        title: "User-Centric Design",
        description:
          "We focus not only on development but also on providing exceptional UI/UX. Our team designs interactive, engaging, and modern WordPress interfaces that elevate user experience and match current design trends.",
      },
      {
        icon: managmentIconOne,
        title: "Strong Communication",
        description:
          "Clear and transparent communication is one of our core values. We keep clients updated at every project stage, ensuring stress-free collaboration and complete visibility.",
      },
      {
        icon: managmentIconOne,
        title: "Post-Launch Support",
        description:
          "We provide ongoing post-launch support for your WordPress solutions, ensuring continuous updates, security, and performance improvements whenever needed.",
      },
    ],
  },
  accordionData: [
    {
      question: "How long will you take to deliver WordPress websites?",
      answer:
        "There is no fixed timeline for delivering WordPress websites, as it depends on project complexity, features, hiring model, and overall scope. On average, a custom WordPress website takes around two weeks, but the time may vary depending on specific requirements.",
    },
    {
      question: "Will you provide source code for WordPress development?",
      answer:
        "Yes, we provide complete source code after the development is finished. Your developers can easily edit, modify, add, or remove features as needed in the future. The entire codebase is handed over to you after project completion.",
    },
    {
      question: "Will my WordPress website be mobile friendly?",
      answer:
        "Absolutely. We ensure your WordPress website is fully responsive and mobile friendly across all devices including desktop, mobile, and tablets. Our developers follow best practices to deliver seamless, device-compatible experiences.",
    },
    {
      question:
        "Do you offer support and maintenance services after delivering the website?",
      answer:
        "Yes, we offer complete post-launch support and maintenance services. Our team remains available to fix bugs, optimise performance, and update your WordPress solution according to the latest market standards.",
    },
    {
      question: "Will my project details be secure with you?",
      answer:
        "Yes, your project and personal details are completely secure with us. We follow strict confidentiality practices and sign NDAs with clients as well as developers to ensure your data is never shared with any third party.",
    },
    {
      question:
        "What tips and tricks do you use for WordPress website security?",
      answer:
        "Our experienced WordPress developers follow best coding practices and implement strong security measures including firewalls, malware protection, regular backups, timely updates, and continuous monitoring to keep your website fully safe.",
    },
  ],
};

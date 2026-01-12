import { PageData } from "@/types/web-development-data-type";

import managmentIconOne from "public/assets/app-development-images/managment-icon-one.svg";
import androidIcon from "public/assets/figma-icon.svg";
import iosIcon from "public/assets/adobe-xd.svg";
import reactIcon from "public/assets/photoshop-icon.svg";
import pwaIcon from "public/assets/framer-icon.svg";

import flutterIcon from "public/assets/iullustrator.svg";
import swiftIcon from "public/assets/swift-icon.svg";

import pwaIconOne from "public/assets/app-development-images/pwa-icon-one.svg";
import pwaIconTwo from "public/assets/app-development-images/pwa-icon-two.svg";
import pwaIconThree from "public/assets/app-development-images/pwa-icon-three.svg";
import pwaIconFour from "public/assets/app-development-images/pwa-icon-four.svg";
import pwaIconFive from "public/assets/app-development-images/pwa-icon-five.svg";
import pwaIconSix from "public/assets/app-development-images/pwa-icon-six.svg";
import bannerImg from "public/assets/e-commerce-hire.webp";
import androidLottie from "../../../public/lottie/web-desining.json";
import nativeBannerImg from "public/assets/app-development-images/native-banner-img.webp";

export const webDesigning: PageData = {
  hero: {
    title: [
      {
        text: "Best Website Design  Services in India",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Connect with your customers with interactive and engaging designs. Moonstack offers best website design services in India that are responsive, user friendly, and easy to use that also ensure to connect with your brand. ",
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

    buttonText: "Create your customised design now ",
  },
  seo: {
    title: " Affordable Website Design Services India & USA | Moonstack",
    description:
      "Want a modern, conversion focused website design service on affordable price, aligns with your brand and improves engagement and leads. Explore our web design services.",
    keywords:
      "website designing company in India,affordable website designing service India, best website design services India, custom website design company India",
    canonical:
      "https://www.moonstack.com/website-development-service/web-designing-service",
    ogImage: "/opengraph-image.png",
  },

  pointsTitle: [
    {
      text: "Website Designing Company in India  ",
      color: "text-white ",
    },
  ],

  points:
    "Moonstack is known as a one stop solution for all your IT needs. We specialize in creating stunning and mobile friendly designs that can connect with your audience. Our UI UX web designing services in India are designed in such a way that attracts users with animations, font color, and other latest designing trends. Along with this, experts also focus on delivering easy to navigate designs.",
  highlightText: "Android development service in India",

  banner: {
    headingText: [
      {
        text: "Create your brand web design today",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: "Web Designing goes through different stages of work.",
        color: "text-white",
      },
    ],
    image: bannerImg,
  },

  quoteBanner: {
    headingText: [
      {
        text: "Start your web design process now ",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: "Web Design  goes through different stages of work.",
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
      "We offer end to end website designing services in India with the motive to deliver powerful digital identities. Our focus is to deliver powerful, responsive, and user friendly designs. ",
  },
  mobDesignBanner: nativeBannerImg,
  featuresData: [
    {
      imgSrc: pwaIconOne,
      title: "Website Design Consulting Services",
      description:
        "Discuss your ideas with professional web design experts. Our designers understand your business and provide the right strategy including technology, color, and layout decisions required to create a user interface that satisfies your customers and transforms your brand identity.",
    },
    {
      imgSrc: pwaIconTwo,
      title: "Custom Web Design",
      description:
        "Our professional custom web design service in India is structured to offer premium tailor-made designs that align with your brand identity and business goals. We create connected, user-friendly designs that deliver next-generation experiences to users.",
    },
    {
      imgSrc: pwaIconThree,
      title: "Responsive Web and App Designs",
      description:
        "As a creative website designing service in India, our goal is to deliver highly responsive web designs that operate flawlessly across devices, screen sizes, and platforms, ensuring seamless user experiences everywhere.",
    },
    {
      imgSrc: pwaIconFour,
      title: "UI/UX Designing Services",
      description:
        "We build engaging and interactive user interfaces that provide seamless digital experiences, increase engagement, and boost conversion rates. Our goal is to ensure a consistent brand feel across all digital touchpoints.",
    },
    {
      imgSrc: pwaIconFive,
      title: "Website Redesign Services",
      description:
        "Moonstack is known for modern redesign solutions that upgrade outdated websites with clean layouts, enhanced navigation, and modern functionality. We ensure the fresh designs align with your current brand image and market positioning.",
    },
    {
      imgSrc: pwaIconSix,
      title: "Landing Page Design",
      description:
        "We create high-impact landing pages for marketing campaigns and lead generation. Our approach focuses on urgency, clarity, and strong messaging while keeping pages fully SEO-optimised to deliver maximum conversions.",
    },
  ],

  utilisArr: [
    {
      image: androidIcon,
      category: "Mobile App",
      title: "Figma",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: iosIcon,
      category: "Mobile App",
      title: "Adobe XD",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: reactIcon,
      category: "Mobile App",
      title: "Adobe Photoshop",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: flutterIcon,
      category: "Mobile App",
      title: "Adobe Illustrator",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: pwaIcon,
      category: "Mobile App",
      title: "Framer",
      desc: "At Moonstack, we believe in building technology.",
    },
    {
      image: swiftIcon,
      category: "Mobile App",
      title: "Sketch",
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
      "We have simplified the web design service  process that allows us to meet our client’s expectations. Our process is defined based on agile methodology and ensures to overcome last minute complex challenges. ",
  },

  whyChooseData: {
    headingText: "Why Choose us for Website Designing Services in India? ",
    subHeadingText:
      "We are the top notch website designing company in India who blends creativity with strategy and technology that results in the best outcome. At Moonstack, as the professional web designing services in India, we believe in full transparency and timely delivery. ",
    steps: [
      {
        icon: managmentIconOne,
        title: "Experienced Professionals",
        description:
          "We have a team of proficient designing experts with hands-on experience across diverse projects. At Moonstack, our designers not only create creative designs but also build meaningful connections between brands and customers.",
      },
      {
        icon: managmentIconOne,
        title: "Focus on Both UI/UX",
        description:
          "Our designers focus on both UI and UX to create interactive, engaging, and easy-to-navigate designs. At Moonstack, we craft mobile-friendly, modern layouts that deliver next-generation user experiences.",
      },
      {
        icon: managmentIconOne,
        title: "SEO and Performance Optimised",
        description:
          "We create fully SEO-optimized designs that load fast, rank better, and deliver high performance. Our strategically SEO-driven, lightweight websites attract more customers and boost conversion rates.",
      },
      {
        icon: managmentIconOne,
        title: "Transparent Process",
        description:
          "As a modern website design company, we follow a fully transparent process. We clearly convey all design-related information to clients and never hide anything — we believe in working collaboratively.",
      },
      {
        icon: managmentIconOne,
        title: "Ongoing Support and Maintenance",
        description:
          "We provide complete support and maintenance even after deployment. Our services include continuous design updates and instant issue resolution to ensure users never face technical problems.",
      },
      {
        icon: managmentIconOne,
        title: "Responsive Design",
        description:
          "We build fully responsive designs that offer seamless performance across all devices. Before launch, we thoroughly ensure compatibility so users can access the website effortlessly on any device.",
      },
    ],
  },

  slides: [],

  accordionData: [
    {
      question:
        "What services are included in your web designing services in India?",
      answer:
        "We offer a complete range of web designing services including custom website design, responsive layouts, UI/UX designing, landing page design, website redesign, and consulting services tailored to meet modern business needs.",
    },
    {
      question: "Do you provide responsive web design for all devices?",
      answer:
        "Yes, all our web designs are fully responsive and optimized for mobile, tablet, and desktop devices. We ensure seamless performance and accessibility across every screen size.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Absolutely. Our redesigning services help modernize outdated websites with fresh UI/UX, improved navigation, faster loading speed, and additional functionalities that align with your current brand identity.",
    },
    {
      question: "How important is UI/UX design for my website?",
      answer:
        "UI/UX plays a major role in customer retention and conversions. Our designers focus on creating visually appealing, user-friendly, and engaging interfaces that provide next-generation experiences to users.",
    },
    {
      question: "Do you provide SEO-friendly web design services?",
      answer:
        "Yes, we ensure every design is SEO-optimized with lightweight structure, fast loading speed, and search-friendly hierarchy to help your website rank higher and attract more users.",
    },
    {
      question:
        "Do you offer support and maintenance after designing the website?",
      answer:
        "Yes, we provide ongoing support and maintenance after deployment. This includes regular updates, design optimizations, and resolving any issues to ensure your website remains flawless and up-to-date.",
    },
  ],
};

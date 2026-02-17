import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/meeting-banner-images/e-commerce.webp"
import androidImg from "@/assets/app-development-images/android-hero-img.webp"
import androidContactbannerImg from "@/assets/app-development-images/contact-app-img.webp"
import androidBannerImg from "@/assets/app-development-images/android-banner.webp"
import bndimage1 from "@/assets/industries/icon/bndImage1.webp"
import collaboration from "@/assets/app-development-images/flexible.webp"

import EcommerceIcon1 from "@/components/ServicesSvg/EcommerceIcon/EcommerceIcon1"
import EcommerceIcon2 from "@/components/ServicesSvg/EcommerceIcon/EcommerceIcon2"
import EcommerceIcon3 from "@/components/ServicesSvg/EcommerceIcon/EcommerceIcon3"
import EcommerceIcon4 from "@/components/ServicesSvg/EcommerceIcon/EcommerceIcon4"
import EcommerceIcon5 from "@/components/ServicesSvg/EcommerceIcon/EcommerceIcon5"
import EcommerceIcon6 from "@/components/ServicesSvg/EcommerceIcon/EcommerceIcon6"
import EcommerceIcon7 from "@/components/ServicesSvg/EcommerceIcon/EcommerceIcon7"
import EcommerceIcon8 from "@/components/ServicesSvg/EcommerceIcon/EcommerceIcon8"
import EcommerceIcon9 from "@/components/ServicesSvg/EcommerceIcon/EcommerceIcon9"
import EcommerceIcon10 from "@/components/ServicesSvg/EcommerceIcon/EcommerceIcon10"
import EcommerceIcon11 from "@/components/ServicesSvg/EcommerceIcon/EcommerceIcon11"
import EcommerceIcon12 from "@/components/ServicesSvg/EcommerceIcon/EcommerceIcon12"

export const ecommerce: PageData = {
  hero: {
    title: [
      {
        text: "E-commerce Website Development Services Provider",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Launch your advanced functionalities integrated based  online powerful  portal that allows your customers to check in anytime via their devices - web and app. Partner with  Moonstack for your e-commerce web development services that leads to enhancing your brand presence as well as increases conversion rates.",
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
        label: "E-commerce",
        href: "/services/ecommerce-website-development-company",
      },
    ],
  },
  seo: {
    title: "Ecommerce Website Development Company India & USA | Moonstack",
    description:
      "Need an ecommerce site that increase sells? We designs and develops conversion‑focused online stores with secure payments and mobile‑first UX. Get Quote Now!",
    keywords:
      "ecommerce SEO services provider USA,SEO for ecommerce websites India,affordable ecommerce SEO service India,ecommerce SEO experts USA,Shopify ecommerce SEO USA",
    canonical: "/services/ecommerce-website-development-company",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

  leftCardData: [
    {
      title: "Trusted E-commerce Development Company to maximize digital sales",
      description:
        "Moonstack is the leading e-commerce development company. With our ecommerce website developers in India, we have built powerful and user centric  online stores that align with brand identity and increase conversion rates. We integrate modern functionalities powered by advanced technologies such as secure payment gateways, mobile responsive, and create interactive user interfaces for users that are easy to use. Our main aim is to deliver a seamless shopping experience to your customers that 2X sales.",
      stats: [
        "B2C E-Commerce Development",
        "B2B E-Commerce Development",
        "C2C Marketplace Development",
        "Multi-Vendor Marketplace Development",
        "Mobile Commerce (M-Commerce) Development",
        "Headless E-Commerce Solutions",
      ],
      bolds: true,
      description2:
        "Our secure e-commerce website developers in India have hands-on experience and are proficient in online store development. We build different types of e-commerce solutions including custom built websites, marketplace integration, and multi channel e-commerce websites. We strategize our development process in such a way that ensures a smooth operational process and meets all our clients' demands. Grow your online business and spread your brand presence world wide that leads to 2x sales.",
      image: bndimage1.src,
    },
  ],
  solutions: {
    headingContent: [
      {
        text: "Our",
        color: "text-white",
      },
      {
        text: " E-commerce Development",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: " Services Includes",
        color: "text-white",
      },
    ],
    subHeadingText:
      "We have different end to end e-commerce development services to our customers from designing - development - deployment with the aim to deliver seamless user experience. Make your brand smarter, faster, and popular at global level with best E-commerce developers service providers.",
  },
  featuresData: [
    {
      Icon: EcommerceIcon1,
      imgSrc: "",
      title: "Custom e-commerce website development  Services ",
      description:
        "We build e-commerce solutions for small business and large enterprises that are fully customised and align with the brand identity that deliver high performance and seamless shopping experience to the users. In e-commerce web development, we integrate advanced functionalities that offer next generation shopping experience to the users.",
    },
    {
      Icon: EcommerceIcon2,
      imgSrc: "",
      title: "E-commerce Designing Services ",
      description:
        "Moonstack creates user friendly, interactive, and engaging e-commerce solutions that reflect the brand identity and increase sales conversion. Professional ecommerce design company in India aim is to focus on delivering impressive designs that are based on 2D and 3D animations as well as easy to use. ",
    },

    {
      Icon: EcommerceIcon3,
      imgSrc: "",
      title: "E-commerce API and Integration Services",
      description:
        "Add on the functionalities in your e-commerce solutions with mobile ecommerce website development in India. Our e-commerce developers integrate third party features via API that allow customers to experience a wide range of functionalities. Designers can integrate different tools such as  CRM, real time synchronization, and secure payment gateway platforms.",
    },
    {
      Icon: EcommerceIcon4,
      imgSrc: "",
      title: " E-commerce Testing Services ",
      description:
        "Before launching your e-commerce web solution in the market, make sure that your online store is fully secure and bug free. With our expert e-commerce web developers opt for manual and unit testing services for your e-commerce solutions that allow you to meet your clients expectations and exclude risk of failure.",
    },
    {
      Icon: EcommerceIcon5,
      imgSrc: "",
      title: "E-commerce Migration Services",
      description:
        "Transfer all your data from one platform to another without any technical hassle. We allow our clients to migrate all the data from existing platforms to others without losing any confidential internal data or records or even SEO ranking. Our e-commerce experts in Jaipur have defined the approach hassle free migrate the data from one to other.",
    },
    {
      Icon: EcommerceIcon6,
      imgSrc: "",
      title: "E-commerce Support and Maintenance Services ",
      description:
        "Our e-commerce coders offer full time support and maintenance services for our clients. We offer end to end support and maintenance services allowing e-commerce businesses to have tech partners, who detect bugs for 24/7 and resolve them on immediate basis. Along with this, experts keep e-commerce solutions updated with the latest technologies on a constant basis.",
    },
  ],

  NewBanner: {
    headingLines: [
      { text: "Scale Your Store With Our Expert E-commerce Development Team" },
    ],
  },
  OutcomeBanner: {
    heading: [
      {
        text: "Build Once, Sell Everywhere: Your Expert",
        color: "text-white",
        className: "",
      },
      {
        text: "E-commerce Development Partner",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Secure & PCI-Compliant Architecture",
      "Conversion-Optimized Checkout",
      "Seamless Third-Party Integrations",
      "Mobile-First Performance",
    ],
    buttonText: "Launch Your Store Today",
  },

  CloudTimelineData: {
    title: "Advanced Features that ",
    highlight: "our e-commerce portal integrated with",
    subtitle:
      "We integrated modern  functionalities that are powered by next generation technologies. With our B2B & B2C ecommerce website development services we integrate advanced features such as real time analytics and deliver seamless inventory management to enhance customer experience",
    steps: [
      {
        number: 1,
        title: "AI Powered Product Recommendation",
        description:
          "Offering personalized shopping experiences with smart suggestions that meet customer expectations.",
        position: "left",
      },
      {
        number: 2,
        title: "Advanced Search & Filters",
        description:
          "Users can search their preferred items fast and opt for the category their prefer for that saves time",
        position: "right",
      },
      {
        number: 3,
        title: "Real Time Inventory Management ",
        description:
          "Track real time inventory management, users can have all data on their fingertips. They have all product related access.",
        position: "left",
      },
      {
        number: 4,
        title: "Payment Gateway Integration",
        description:
          "Integrate Payment gateways secure and allow users to pay their bills from their preferred third party tools.",
        position: "right",
      },
      {
        number: 5,
        title: "Order Tracking and Notifications",
        description:
          "Keep your customers informed about the orders and notify them with pop up notifications.",
        position: "left",
      },
      {
        number: 6,
        title: "Data Analytics & Reporting Dashboard",
        description:
          "Users have access to actionable insights with performance metrics, sales trends, and also track customer behavior.",
        position: "right",
      },
      {
        number: 7,
        title: "Delivery and Post Support ",
        description:
          "After testing, we deliver Laravel based solutions in the market with post support that ensure our team is always there.",
        position: "left",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Moonstack Ready to use" },
      {
        text: "E-commerce ",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: "Solutions" },
    ],
    description:
      "We offer a wide range of e-commerce web solutions to our customers that align with their business model. Our e-commerce coders build high performance, modern, secure online based solutions for different businesses.",
    cards: [
      {
        id: "E-commerce Portals",
        label: "E-commerce Portals",
        description:
          "We provide  ready to use e-commerce portals for our clients that allow e-commerce businesses to integrate solutions that streamline the purchasing and internal operational processes. Moreover, e-commerce portals also manage bulk orders and volume based pricing systems. We deliver all types of e-commerce portals including apps, marketplaces, multi vendor, and many more.",
        variant: "light",
      },
      {
        id: "Mobile E-commerce Apps",

        label: "Mobile E-commerce Apps",
        description:
          "Moonstack is known as the best  mobile ecommerce website development in India. We deliver mobile e-commerce mobile apps that are user friendly and integrated with advanced technologies. We provide ready to use e-commerce mobile apps that offer shopping-like experiences. Our e-commerce mobile app experts have designed apps that provide faster loading times and have easy to navigate user interface.",
        variant: "accent",
      },
      {
        id: "Marketplaces ",

        label: "Marketplaces ",
        description:
          "Create and operate your marketplaces and connect you with your target audiences. We build B2B and B2C e-commerce marketplaces that incorporate functionalities like inventory management, payment processing, and CRM based on modern technologies. Our e-commerce marketplace features are powered by modern technologies. As the leading marketplace website development in India, we provide a one stop marketplace that fit all needs. ",
        variant: "dark",
      },
      {
        id: "Multi-Vendor Marketplaces",

        label: "Multi-Vendor Marketplaces",
        description:
          "We offer multi vendor marketplace solutions that allow multiple sellers to list, manage, and sell their products at one place. Our multi-vendor marketplace is designed in such a way that is integrated by a powerful dashboard, easy vendor management, and delivers smooth shopping experiences.",
        variant: "dark",
      },
      {
        id: "Subscription-Based E-Commerce",

        label: "Subscription-Based E-Commerce",
        description:
          "Opt for subscription based e-commerce portals that keep customers engaged on premium models. We build powerful online stores that offer recurring revenue streams with different custom subscription plans. Our e-commerce developers integrate automated billing to seamless systems that maximize retention. ",
        variant: "light",
      },
      {
        id: "E-Commerce Analytics & Automation Solutions",

        label: "E-Commerce Analytics & Automation Solutions",
        description:
          "With our e-commerce developers we offer analytics and automation ready to use solutions that ensure to optimize operations with real time, automate several workflows, and deliver data driven strategies that streamline workflow process as well as maximise revenue.",
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
        text: "Why choose us for ",
        color: "text-white",
      },
      {
        text: "ecommerce portal",
        className: "libreItalic font-[400] highlight-text",
      },
      {
        text: "  development in India?",
        color: "text-white",
      },
    ],
    description:
      "We are the leading e-commerce development company in India. Our team has delivered a wide range of online portals in the market from that blend of creativity, tech stack, and powerful strategy that deliver next generation customer experiences.",
    columsClass: "lg:grid-cols-3",
    list: [
      {
        id: 1,
        title: " Experts E-commerce Developers",
        icon: collaboration.src,
        Icon: EcommerceIcon7,
        description:
          "Being the leading e-commerce development company in India we have skilled e-commerce coders that build customised, high performance, and e-commerce solutions. With our highly skilled team, we guarantee to meet latest development standards as well deliver seamless shopping experiences.",
      },
      {
        id: 2,
        title: "Customised e-commerce Business Solution",
        icon: collaboration.src,
        Icon: EcommerceIcon8,
        description:
          "We develop customized e-commerce business solutions that match your business needs. Our secure ecommerce website developers in India create personalized e-commerce strategies that match brand identity and customer expectations.",
      },
      {
        id: 3,
        title: " User Centric Designs",
        icon: collaboration.src,
        Icon: EcommerceIcon9,
        description:
          "Our e-commerce developers team focuses on conversion focused design that not only looks appealing but also user centric. We create designs that are interactive and help to convert users to loyal customers. Our e-commerce designing services in India main aim is to meet the latest industry standards and deliver next generation experiences to customers.",
      },
      {
        id: 4,
        title: "Hire E-Commerce Developers",
        icon: collaboration.src,
        Icon: EcommerceIcon10,
        description:
          "With our advanced ecommerce development in India we offer you an opportunity to hire the best e-commerce developers in India that will allow you to hire part time, full time, and on hourly basis. We allow you to extend your e-commerce development team with the proficient designers and developers for your project.",
      },
      {
        id: 5,
        title: "Transparent Process",
        icon: collaboration.src,
        Icon: EcommerceIcon11,
        description:
          "Our e-commerce development team believes in a transparent process. We share all records and information with our clients in a transparent manner. In any case, we don’t hide anything from our customers. All the information is shared without any hiding parameters as we associate with business and believe to sort everything together. ",
      },
      {
        id: 6,
        title: "Seamless Integration",
        icon: collaboration.src,
        Icon: EcommerceIcon12,
        description:
          "At Moonstack, our e-commerce development team supports a seamless integration process. We provide seamless API integration that allows us to extend functionalities with third party advanced functionalities in less time and effort. We hold expertise with advanced seamless feature integration processes via API.",
      },
    ],
  },
  accordionData: [
    {
      question:
        "Do you provide custom e-commerce development services in India or are ready to use ecommerce solutions?",
      answer:
        "Yes, we provide custom e-commerce development solutions in which our e-commerce developers built online powerful portals as per the business needs. Moreover, if you need ready to use e-commerce solutions we provide a wide range of online portals including custom websites, marketplaces, API based solutions and many more.",
    },
    {
      question: "What services are included in e-commerce web solutions?",
      answer:
        "There are a wide range of e-commerce solutions we offer that include - custom e-commerce web portals, e-commerce designing services, e-commerce API integration services, B2B e-commerce web development and B2C e-commerce solutions and many more.",
    },
    {
      question: "Can you integrate payment gateway and shipping partners?",
      answer:
        "Yes,our e-commerce development team in Jaipur has hands-on experience with the payment gateway and shipping partners integration process.",
    },
    {
      question: "Do you provide e-commerce business  source code to customers?",
      answer:
        "Yes, we provide e-commerce business source code to our customers that they can add, edit, and delete as per the future business needs.",
    },
    {
      question: "Will e-commerce websites be user friendly?",
      answer:
        "Yes, we deliver user friendly e-commerce portals that are also responsive on all devices - web and mobile.",
    },
    {
      question:
        "How long does it take you to deliver an e-commerce web portal?",
      answer:
        "There is no fixed time to deliver e-commerce web solutions. The e-commerce development process is based on several factors such as hiring model, portal complexity, API integration. So, there is no fixed cost and still you require at earliest you can opt for a ready to use portal with minor and major modifications or have discussion with e-commerce experts.",
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

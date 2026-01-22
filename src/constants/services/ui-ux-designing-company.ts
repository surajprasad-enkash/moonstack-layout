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

export const ui_ux: PageData = {
  hero: {
    title: [
      {
        text: "Transform Your Digital Presence with Moonstack’s UI/UX Design Services",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "",
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
        label: "ui/ux Designing",
        href: "/services/ui-ux-designing-company",
      },
    ],
  },
  seo: {
    title: "Android App Development Company India & USA | Moonstack",
    description:
      "Find Android app development partner in India? Moonstack delivers secure, scalable Android apps using modern architecture and long‑term maintenance support. call today",
    keywords:
      "Android app development Service India, Best Android app developers India,  Custom Android application development India,Android app development agency India",
    canonical:
      "https://www.moonstack.com/android-app-development-service/android-app-development-service",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points:
    "After struggling with another agency for months, Moonstack came in and delivered what we needed in record time. Their Laravel expertise is unmatched—they not only built exactly what we envisioned but suggested improvements we hadn't considered. The application is scalable, secure, and performs beautifully under heavy load. They've become our go-to development partner for all future projects.",
  highlightText: "The application is scalable",

  leftCardData: [
    // {
    //   title: "Transform Your Business with Custom Laravel Solutions",
    //   description:
    //     "Moonstack is known as the leading Laravel development company in India across the globe. We have delivered a wide range of PHP based Laravel web solutions to different businesses. With our expert Laravel developers, we have built custom Laravel web apps, POS systems, CRMs, video streaming apps, and many more solutions to meet diverse needs of different businesses.",
    //   stats: [],
    //   description2:
    //     "Our main aim is to meet our clients expectations. We have created a Laravel web development strategy that allows us to offer secure Laravel web development services to our customers. At Moonstack, we have a blend of professional Laravel web experts, who have decades of experience in the industry. We keep ourselves updated with all the Laravel framework updates that allow us to stay ahead in the market competition and integrate advanced functionalities in the system as per the specific business needs.",
    //   image: bndimage1.src,
    // },
  ],
  solutions: {
    headingContent: [
      // {
      //   text: "Our ",
      //   color: "text-white",
      // },
      // {
      //   text: "Laravel web Development",
      //   color: "text-white libreItalic font-[400] highlight-text",
      // },
      // {
      //   text: "Services Includes",
      //   color: "text-white",
      // },
    ],
    subHeadingText: "",
    //   "We have best Laravel web developers and with them we offer affordable laravel development service in India - from consultation to migration all your needs will fulfill at one stop ",
  },
  featuresData: [
    {
      imgSrc: intuitiveIcon.src,
      title: "How we create attractive and engaging design to attract users",
      description:
        "Nowadays, the experience that a user gets while interacting with a business strongly determines its success. Moonstack is among the finest UI UX design agencies in India that specializes in creating visually appealing, customized digital solutions that engage and compel users and yield the desired organizational outcomes. We have professional UI UX designers in our team, ensuring that your digital products are not only visually stunning but also highly functional and user-friendly.",
    },
    {
      imgSrc: engagingIcon.src,
      title: "Reach New Heights and Take Your Branding UI and UX to New Levels",
      description:
        "User interface design is an indispensable part of virtually any present-day web site or application, as it defines how consumers engage with your web property. Our UI UX designer in Jaipur specializes in the enhancement of products’ UI and UX, while focusing on usability and accessibility, as well as the overall aesthetic of the final product. Our user experience design team listens to your instructions, your brand vision, your goals, and your target clients to create a uniform design that will take the user on a smooth journey.",
    },

    {
      imgSrc: brandingIcon.src,
      title: "User Experience Design: Creating Impact-full Encounters",
      description:
        "We, as a leading user experience design company, focus on developing products that shows significant and pertinent experiences to users. We use an approach where the layout, content, and overall experience of the application, product, or website are tailored to the user for a delightful experience. At Moonstack, we supercharge the aesthetic of interfaces because, from our perspective, interface design is not only about the looks; it is the look that works. Our UI UX designers in the India focus on each pixel, starting with the variation of fonts, through the selection of colors, buttons, interactions, and animations, to make sure that your product shines",
    },
  ],

  NewBanner: {
    headingLines: [
      { text: "Scale Your Business With Our Expert Laravel Development Team" },
    ],
  },
  OutcomeBanner: {
    heading: [
      {
        text: "Build Once, Scale Forever: Your ",
        color: "text-white",
        className: "",
      },
      {
        text: "Expert Laravel Development Partner",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Robust & Secure Architecture",
      "Rapid Development & Deployment",
      "High-Performance & Scalable Code",
      "Easy Maintenance & Updates",
    ],
    buttonText: "Start Your Project Today",
  },

  CloudTimelineData: {
    title: "Bringing the best",
    highlight: "UI/UX Agency To You",
    subtitle: "",
    steps: [
      {
        number: 1,
        title: " Product Discovery",
        description:
          "Research user needs, market trends, and business goals to define product vision and scope.",
        position: "left",
      },
      {
        number: 2,
        title: " User Research",
        description:
          "Conduct interviews, surveys, and usability tests to understand user pain points and preferences.",
        position: "right",
      },
      {
        number: 3,
        title: " Wireframing",
        description:
          "Create low-fidelity layouts to outline structure, functionality, and user flow of the product.",
        position: "left",
      },
      {
        number: 4,
        title: " Prototyping",
        description:
          "Develop interactive prototypes to visualize and test product concepts before development.",
        position: "right",
      },
      {
        number: 5,
        title: " UI/UX Design",
        description:
          "Design intuitive, visually appealing interfaces focused on enhancing user experience and engagement.",
        position: "left",
      },
      {
        number: 6,
        title: " Design Systems",
        description:
          "Build consistent design frameworks for scalability and brand alignment across the product.",
        position: "right",
      },
      {
        number: 7,
        title: " Usability Testing",
        description:
          "Evaluate designs with real users to identify improvements and ensure ease of use.",
        position: "left",
      },
      {
        number: 8,
        title: " Iterative Design",
        description:
          "Refine designs based on feedback, testing, and evolving requirements for optimal results.",
        position: "left",
      },
      {
        number: 9,
        title: " Collaboration",
        description:
          "Work closely with developers, stakeholders, and teams to ensure seamless design implementation.",
        position: "left",
      },
      {
        number: 10,
        title: " Delivery",
        description:
          "Provide final design assets, guidelines, and support for smooth product development and launch.",
        position: "left",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Edge tools Drive That" },
      {
        text: "performance",
        className: "libreItalic font-[400] highlight-text",
      },
    ],
    description:
      "Feel free adapt this based on the specific managed services, features, and unique selling points your IT service company provides.",
    cards: [
      {
        id: "Technical Implementation",
        label: "Technical Implementation",
        description:
          "Deploy and configure technology solutions, ensuring seamless integration and functionality for optimal performance",
        variant: "light",
      },
      {
        id: "IT Helpdesk Support",

        label: "IT Helpdesk Support",
        description:
          "Provide timely assistance, troubleshoot issues, and resolve technical problems to ensure uninterrupted operations.",
        variant: "accent",
      },
      {
        id: "Managed IT Services",

        label: "Managed IT Services",
        description:
          "Offer proactive monitoring, maintenance, and management of IT infrastructure for reliability and efficiency.",
        variant: "dark",
      },
      {
        id: "IT Consulting",

        label: "IT Consulting",
        description:
          "Advise on technology strategies, optimize systems, and align IT solutions with business goals for growth.",
        variant: "dark",
      },
      {
        id: "Network Support",

        label: "Network Support",
        description:
          "Ensure secure, stable, and efficient network operations through monitoring, troubleshooting, and maintenance.",
        variant: "light",
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
        text: "Flawless ",
        color: "text-white",
      },
      {
        text: "UI and UX Design ",
        className: "libreItalic font-[400] highlight-text",
      },
      {
        text: "in USA: Artistry with Accurateness",
        color: "text-white",
      },
    ],
    description: "",
    columsClass: "lg:grid-cols-3",
    list: [
      {
        id: 1,
        title: "End-to-End Services",
        icon: collaboration.src,
        description:
          "Our user experience design company is highly creative in making designs that can relate to local consumers in India. The importance of the Indian market is fully understood, and this means the creation of products that meet each and every consumer’s expectations. Whether you are a young company or a large business, we will help you design efficient UI and UX enhancing your company’s productivity",
      },
      {
        id: 2,
        title: "Boost Your Online Presence",
        icon: collaboration.src,
        description:
          "We at Moonstack deliver innovative UI and UX design services to mobilize clients across industries to create new designs that better suit the target users and improve on their engagement. Great attention is paid to the fact that our team’s goal is to create digital products that are efficient and visually appealing but also oriented to the USA cultural context and consumer values.",
      },
    ],
  },
  accordionData: [
    // {
    //   question:
    //     "Will you be able to work long term for my Laravel project requirements?",
    //   answer:
    //     "Yes, our Laravel web developers are always available and they are proficient with all types of Laravel web development requirements. Our team offers professional Laravel web development services to our customers. ",
    // },
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

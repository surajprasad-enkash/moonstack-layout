import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/app-development-images/native-banner-img.webp"
import androidImg from "@/assets/app-development-images/android-hero-img.webp"
import androidContactbannerImg from "@/assets/app-development-images/contact-app-img.webp"
import androidBannerImg from "@/assets/app-development-images/android-banner.webp"
import bndimage1 from "@/assets/industries/icon/bndImage1.webp"
import intuitiveIcon from "@/assets/app-development-images/featureImgOne.webp"
import engagingIcon from "@/assets/app-development-images/featureImgTwo.webp"
import brandingIcon from "@/assets/app-development-images/featureImgThree.webp"

import designer from "@/assets/app-development-images/work-directly.webp"
import hiring from "@/assets/app-development-images/hiring.webp"
import delivery from "@/assets/app-development-images/guarante.webp"
import collaboration from "@/assets/app-development-images/flexible.webp"
import { color } from "framer-motion"

export const webDesigning: PageData = {
  hero: {
    title: [
      {
        text: "Website Design Services That Turn Visitors into Customers",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "We design websites with one clear purpose: conversion. By combining beautiful aesthetics with strategic UX, persuasive design elements, and clear calls-to-action, we create digital experiences that engage visitors and turn them into paying customers.",
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
        label: "Web Designing",
        href: "/services/web-designing-company",
      },
    ],
  },
  seo: {
    title: "Affordable Website Design Services India & USA | Moonstack",
    description:
      "Want a modern, conversion focused website design service on affordable price, aligns with your brand and improves engagement and leads. Explore our web design services.",
    keywords:
      "web development service in India,web development company in India,affordable website development service USA,custom web development service USA,best web development agency USA,website development services for startups",
    canonical: "/services/web-designing-company",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

  leftCardData: [
    {
      title: "Trusted Website Designing Company near you",
      description:
        "Moonstack is known as a one stop solution for all your IT needs. We specialize in creating stunning and mobile friendly designs that can connect with your audience. Our UI UX web designing services in India are designed in such a way that attracts users with animations, font color, and other latest designing trends. Along with this, experts also focus on delivering easy to navigate designs.",
      stats: [],
      description2:
        "At Moonstack, we blend creativity and technology that ensure to exclude all the gaps between client and businesses. Our web design agency in Jaipur offers affordable designing services for startups, mid sizes, and large enterprises. We not only create designs but make connections with customers across the globe. With our designs you can deliver your brand message as well as offer premium experiences.",
      image: bndimage1.src,
      bolds: false,
    },
  ],
  solutions: {
    headingContent: [
      {
        text: "Here are Our",
        color: "text-white",
      },
      {
        text: " Web Designing ",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: "Services",
        color: "text-white",
      },
    ],
    subHeadingText:
      "We offer end to end website designing services in India with the motive to deliver powerful digital identities. Our focus is to deliver powerful, responsive, and user friendly designs. ",
  },
  featuresData: [
    {
      imgSrc: intuitiveIcon.src,
      title: "Website Design  Consulting Services",
      description:
        "Discuss about your idea with the professional web design experts. Our web designers understand your business and provide you with the right strategy (technology, colour, and steps)  that you should implement in your user interface that satisfies your customers. We create web designs that transform your brand identity.",
    },
    {
      imgSrc: engagingIcon.src,
      title: "Custom web Design",
      description:
        "Our professional web designers service in  India is designed in such a way that it offers premium custom tailor made designs that align with brand identity and goals. We create connected user friendly designs that deliver next generation experience to the users. ",
    },

    {
      imgSrc: brandingIcon.src,
      title: "Responsive Web and App Designs",
      description:
        "As the creative website designing service in India, our aim is to provide responsive  web designs to our customers. Our web designs are created in such a way that are compatible with all devices on different screens and sizes of devices.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "UI/UX Designing Services",
      description:
        "We create engaging and interactive user interfaces that deliver seamless user experiences that increase engagement and conversion rates. Our main aim is to offer the same brand experience to users in the digital era that allow us to connect with brands.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Website Redesign Services",
      description:
        "Moonstack is known as the top web designers company in India. With custom web designs we offer redesigning services that help to modernise outdated websites with fresh designs and additional next generation functionalities. Our UI UX designers understand and bring innovative designs that match your current brand image.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Landing Page Design",
      description:
        "Our web designers create highly impactful and creative landing pages for different marketing campaigns and lead generation processes. Our landing page design services strategy is to create emergencies for clients and deliver the same experience that they want in service. Our landing page is fully SEO optimized",
    },
  ],

  NewBanner: {
    headingLines: [
      { text: "Elevate Your Brand With Our Expert Website Designing Team" },
    ],
  },
  OutcomeBanner: {
    heading: [
      {
        text: "Design Once, Captivate Forever: Your Expert",
        color: "text-white",
        className: "",
      },
      {
        text: " Web Design Partner",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "User-Centric & Responsive Layouts",
      "Intuitive UI/UX Design",
      "High-Impact Visual Branding",
      "Performance-First Design",
    ],
    buttonText: "Start Your Project Today",
  },

  CloudTimelineData: {
    title: "Process we opt to deliver successful  ",
    highlight: "web design services Globally",
    subtitle:
      "We have simplified the web design service  process that allows us to meet our client’s expectations. Our process is defined based on agile methodology and ensures to overcome last minute complex challenges.",
    steps: [
      {
        number: 1,
        title: "Requirement Gathering",
        description:
          "Our foremost step is to collect information about the project that gives us proper understanding.",
        position: "left",
      },
      {
        number: 2,
        title: "Research and Planning",
        description:
          "Analyze market needs and research what competitors are executing and then create a proper plan.",
        position: "right",
      },
      {
        number: 3,
        title: "Wireframing and Structure",
        description:
          "Design layouts and best structure that provides appealing layouts and user friendly interfaces that increase engagement.",
        position: "left",
      },
      {
        number: 4,
        title: "UI/UX Designing ",
        description:
          "We create interactive and engaging designing services that lead to the best user interface that ensures responsive coding and eye catchy designs.",
        position: "right",
      },
      {
        number: 5,
        title: "Testing and Quality Check",
        description:
          "Our web designing team in India rigorously tests different functionalities with the motive to deliver a flawless user experience.",
        position: "left",
      },
      {
        number: 6,
        title: "Launch and Support",
        description:
          "After deployment we offer constant support and regular modification as per the latest trends to meet latest demands.",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [],
    description: "",
    cards: [
      // {
      //   id: "Laravel Web Apps",
      //   label: "Laravel Web Apps",
      //   description:
      //     "We have developed high performance and secure PHP based Laravel framework web apps for different industries with next generation functionalities that allow us to meet modern business needs. Also, have created interactive UI and engaging UX that allow users to connect with users.",
      //   variant: "light",
      // },
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
        text: " Why Choose us for ",
        color: "text-white",
      },
      {
        text: "Website Designing",
        className: "libreItalic font-[400] highlight-text",
      },
      {
        text: " Services in India?",
        color: "text-white",
      },
    ],
    description:
      "We are the top notch website designing company in India who blends creativity with strategy and technology that results in the best outcome. At Moonstack, as the professional web designing services in India, we believe in full transparency and timely delivery.",
    columsClass: "lg:grid-cols-3",
    list: [
      {
        id: 1,
        title: "Experienced Professionals",
        icon: collaboration.src,
        description:
          "We have a team of proficient designing experts, who have hands-on experience on different projects. At Moonstack, we have a team of designers, who not only design creative designs but also build connections between brands and customers.",
      },
      {
        id: 2,
        title: "Focus on Both UI/UX",
        icon: collaboration.src,
        description:
          "Our designers focus on both UI and UX in that designers create interactive and engaging designs that are easy to navigate and deliver immersive experiences. At Moonstack, we create design layouts that are mobile friendly,  modern, and deliver next generation experiences to the users.",
      },
      {
        id: 3,
        title: "SEO and Performance Optimised",
        icon: collaboration.src,
        description:
          "Create designs that are fully SEO optimised and deliver high performance experience to the users. We create designs that load faster, rank better, and deliver best outcomes. Our website designs are strategically SEO driven and light weight that attract more customers and increase conversion rates.",
      },
      {
        id: 4,
        title: "Transparent Process",
        icon: collaboration.src,
        description:
          "As the best modern website design company in India, we focus on a fully transparent process. In our web design services, we convey all information transparently to our clients. In any case, we don’t hide any things from our clients as we believe to work or associate together.",
      },
      {
        id: 5,
        title: "Ongoing Support and Maintenance",
        icon: collaboration.src,
        description:
          "We provide full support and maintenance to our clients after deployment also as per the hiring model. Our support and maintenance designing services include constant updates regarding designs and resolve issues immediately so users don’t face any technical error.",
      },
      {
        id: 6,
        title: "Responsive Design",
        icon: collaboration.src,
        description:
          "At Moonstack, we provide responsive web designs to our clients. Our designs are mobile friendly, deliver seamless performance, and compatible with all devices. Before launching, we make sure that our web designs are compatible with all different devices and users don’t face any challenge to access them.",
      },
    ],
  },
  accordionData: [
    {
      question: "How much is web design in India?",
      answer:
        "There is no fixed cost of web design in India. The actual web designing cost depends on several factors that depend on type, functionalities, and complexity of apps for your project. Prices can vary from small, mid, and enterprise level designs.",
    },
    {
      question: "How long does it take for web design?",
      answer:
        "Again, the time of web designing services is dependent on several factors - such as complexity, hiring model, and many more. Typically, a standard website design service takes 2 to 4 weeks. But, this can be discussed.",
    },
    {
      question: "Can you redesign my existing websites?",
      answer:
        "Yes, we can redesign your website as per your business brand identity. With our web designing team in India we can bring fresh, clean layout and modern latest trends web designs.",
    },
    {
      question: "Will my website be mobile friendly? ",
      answer:
        "Yes, your website will be fully responsive not only on browsers, but also on different devices. We create designs that are engaging and highly interactive and compatible with all devices including desktops, tablets, and smartphones.",
    },
    {
      question: "Do you work on customised web designing services?",
      answer:
        "Yes, we work on customised web designing services in India. We opt for ready to use templates. Along with this, we work on ready to use templates also that saves time. As the top web designing services in India, we offer both customised and ready to use designing services.",
    },
    {
      question: "Will my details be fully secure with you?",
      answer:
        "Yes, your details would be fully confidential and secure within our team. In any case, our team will not share your information, it is only with the team who are working on your project.",
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

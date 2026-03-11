import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/services/bannerImages/webdesigning.webp"
import bndimage1 from "@/assets/services/webDesining/webDesinning.webp"
import OgImageIcon from "@/assets/ogImage.svg"

import Icon1 from "@/components/ServicesSvg/WebDesigningIcon/WebDesigningIcon1"
import Icon2 from "@/components/ServicesSvg/WebDesigningIcon/WebDesigningIcon2"
import Icon3 from "@/components/ServicesSvg/WebDesigningIcon/WebDesigningIcon3"
import Icon4 from "@/components/ServicesSvg/WebDesigningIcon/WebDesigningIcon4"
import Icon5 from "@/components/ServicesSvg/WebDesigningIcon/WebDesigningIcon5"
import Icon6 from "@/components/ServicesSvg/WebDesigningIcon/WebDesigningIcon6"
import Icon7 from "@/components/ServicesSvg/WebDesigningIcon/WebDesigningIcon7"
import Icon8 from "@/components/ServicesSvg/WebDesigningIcon/WebDesigningIcon8"
import Icon9 from "@/components/ServicesSvg/WebDesigningIcon/WebDesigningIcon9"
import Icon10 from "@/components/ServicesSvg/WebDesigningIcon/WebDesigningIcon10"
import Icon11 from "@/components/ServicesSvg/WebDesigningIcon/WebDesigningIcon11"
import Icon12 from "@/components/ServicesSvg/WebDesigningIcon/WebDesigningIcon12"

export const webDesigning: PageData = {
  hero: {
    title: [
      {
        text: "Website Design Services ",
        color: "",
        className: "libreItalic font-[400] highlight-text",
      },
      {
        text: "That Turn Visitors into Customers",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "We design websites with one clear purpose: conversion. By combining beautiful aesthetics with strategic UX, persuasive design elements, and clear calls-to-action, we create digital experiences that engage visitors and turn them into paying customers.",
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
        label: "Web Designing",
        href: "/services/web-designing-company",
      },
    ],
  },
  seo: {
    title: "Affordable Website Design Services India & USA ",
    description:
      "Want a modern, conversion focused website design service on affordable price, aligns with your brand and improves engagement and leads. Explore our web design services.",
    keywords:
      "web development service in India,web development company in India,affordable website development service USA,custom web development service USA,best web development agency USA,website development services for startups",
    canonical: "/services/web-designing-company",
    ogImage: OgImageIcon.src,
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

  leftCardData: [
    {
      title: "Trusted Website Designing Company Near You",
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
        text: "Here Are Our",
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
      Icon: Icon1,
      imgSrc: "",
      title: "Website Design Consulting Services",
      description:
        "Discuss about your idea with the professional web design experts. Our web designers understand your business and provide you with the right strategy (technology, colour, and steps)  that you should implement in your user interface that satisfies your customers. We create web designs that transform your brand identity.",
    },
    {
      Icon: Icon2,
      imgSrc: "",
      title: "Custom Web Design",
      description:
        "Our professional web designers service in  India is designed in such a way that it offers premium custom tailor made designs that align with brand identity and goals. We create connected user friendly designs that deliver next generation experience to the users. ",
    },

    {
      Icon: Icon3,
      imgSrc: "",
      title: "Responsive Web and App Designs",
      description:
        "As the creative website designing service in India, our aim is to provide responsive  web designs to our customers. Our web designs are created in such a way that are compatible with all devices on different screens and sizes of devices.",
    },
    {
      Icon: Icon4,
      imgSrc: "",
      title: "UI/UX Designing Services",
      description:
        "We create engaging and interactive user interfaces that deliver seamless user experiences that increase engagement and conversion rates. Our main aim is to offer the same brand experience to users in the digital era that allow us to connect with brands.",
    },
    {
      Icon: Icon5,
      imgSrc: "",
      title: "Website Redesign Services",
      description:
        "Moonstack is known as the top web designers company in India. With custom web designs we offer redesigning services that help to modernise outdated websites with fresh designs and additional next generation functionalities. Our UI UX designers understand and bring innovative designs that match your current brand image.",
    },
    {
      Icon: Icon6,
      imgSrc: "",
      title: "Landing Page Design",
      description:
        "Our web designers create highly impactful and creative landing pages for different marketing campaigns and lead generation processes. Our landing page design services strategy is to create emergencies for clients and deliver the same experience that they want in service. Our landing page is fully SEO optimized",
    },
  ],

  NewBanner: {
    headingLines: [
      { text: "Elevate Your Brand With Our " },
      {
        text: "Expert Website Designing Team",
        className: "libreItalic font-[400]",
      },
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
    title: "Process We Opt To Deliver Successful  ",
    highlight: "Web Design Services Globally",
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
        title: "Testing And Quality Check",
        description:
          "Our web designing team in India rigorously tests different functionalities with the motive to deliver a flawless user experience.",
        position: "left",
      },
      {
        number: 6,
        title: "Launch And Support",
        description:
          "After deployment we offer constant support and regular modification as per the latest trends to meet latest demands.",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Why Choose Our " },
      {
        text: "Web Design Services?",
        className: "libreItalic font-[400] highlight-text",
      },
    ],
    description:
      "We go beyond aesthetics to deliver comprehensive web design solutions that drive results. From custom layouts to robust e-commerce platforms, our designs are built to enhance user engagement and boost your bottom line.",
    cards: [
      {
        id: "Custom Website Design",
        label: "Custom Website Design",
        description:
          "We create unique, tailor-made website designs that perfectly reflect your brand identity. Our custom solutions ensure your website stands out from the competition and provides a memorable experience for your visitors.",
        variant: "light",
      },
      {
        id: "E-commerce Web Design",
        label: "E-commerce Web Design",
        description:
          "Drive sales with our high-converting e-commerce designs. We focus on seamless navigation, secure checkout processes, and attractive product displays to maximize your online store's potential and revenue.",
        variant: "accent",
      },
      {
        id: "CMS Web Design",
        label: "CMS Web Design",
        description:
          "We specialize in designing for popular Content Management Systems like WordPress, Shopify, and more. Our CMS designs are flexible, easy to manage, and scalable, allowing you to update your content effortlessly.",
        variant: "dark",
      },
      {
        id: "Mobile-First Design",
        label: "Mobile-First Design",
        description:
          "With the majority of web traffic coming from mobile devices, we prioritize mobile-first design. We ensure your website looks and functions dramatically well on smartphones and tablets, providing an optimal user experience everywhere.",
        variant: "dark",
      },
      {
        id: "Landing Page Design",
        label: "Landing Page Design",
        description:
          "Maximize your marketing campaigns with high-converting landing pages. We design focused, persuasive pages optimized for specific goals, whether it's lead generation, product sales, or event registrations.",
        variant: "light",
      },
      {
        id: "Website Redesign",
        label: "Website Redesign",
        description:
          "Transform your outdated website into a modern digital asset. We revamp your existing site with improved aesthetics, enhanced usability, and better performance to meet current web standards and user expectations.",
        variant: "accent",
      },
    ],
  },

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
        Icon: Icon7,
        title: "Experienced Professionals",
        icon: "",
        description:
          "We have a team of proficient designing experts, who have hands-on experience on different projects. At Moonstack, we have a team of designers, who not only design creative designs but also build connections between brands and customers.",
      },
      {
        id: 2,
        Icon: Icon8,
        title: "Focus on Both UI/UX",
        icon: "",
        description:
          "Our designers focus on both UI and UX in that designers create interactive and engaging designs that are easy to navigate and deliver immersive experiences. At Moonstack, we create design layouts that are mobile friendly,  modern, and deliver next generation experiences to the users.",
      },
      {
        id: 3,
        Icon: Icon9,
        title: "SEO and Performance Optimised",
        icon: "",
        description:
          "Create designs that are fully SEO optimised and deliver high performance experience to the users. We create designs that load faster, rank better, and deliver best outcomes. Our website designs are strategically SEO driven and light weight that attract more customers and increase conversion rates.",
      },
      {
        id: 4,
        Icon: Icon10,
        title: "Transparent Process",
        icon: "",
        description:
          "As the best modern website design company in India, we focus on a fully transparent process. In our web design services, we convey all information transparently to our clients. In any case, we don’t hide any things from our clients as we believe to work or associate together.",
      },
      {
        id: 5,
        Icon: Icon11,
        title: "Ongoing Support and Maintenance",
        icon: "",
        description:
          "We provide full support and maintenance to our clients after deployment also as per the hiring model. Our support and maintenance designing services include constant updates regarding designs and resolve issues immediately so users don’t face any technical error.",
      },
      {
        id: 6,
        Icon: Icon12,
        title: "Responsive Design",
        icon: "",
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
    headingText: [],
    subHeadingText: [],
    image: "",
  },
  quoteBanner: {
    headingText: [],
    subHeadingText: [],
    image: "",
    buttonText: "Connect with us",
  },
  whyChooseData: {
    headingText: "",
    subHeadingText: "",
    steps: [],
  },
  slides: [],
}

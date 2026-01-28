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

export const product: PageData = {
  hero: {
    title: [
      {
        text: "Transforming Ideas into Reality with Moonstack's Custom Product Design Services",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "We craft user-focused, innovative, and scalable product designs that turn your ideas into impactful digital experiences, driving growth, engagement, and long-term success.",
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
        label: "Product Designing ",
        href: "/services/product-designing-company",
      },
    ],
  },
  seo: {
    title: "Digital Product Design Service India & USA | Moonstack",
    description:
      "Validating a new digital product in India? Moonstack’s product design team runs discovery, UX research, and prototyping to de risk development and improve usability.",
    keywords:
      "product design company India 2026,affordable product design services USA,best product design firms India,custom product design and development USA,innovative product designing solutions India,user-centered product design agency USA",
    canonical: "/services/product-designing-company",
    ogImage: "/opengraph-image.png",
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

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
      {
        text: "Ignite Your Brand's Potential with ",
        color: "text-white",
      },
      {
        text: "Excellence in Innovation ",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: " Product Design",
        color: "text-white",
      },
    ],
    subHeadingText:
      "Transform your boldest ideas into market-leading digital assets with our comprehensive design mastery. We combine logical strategy with high-fidelity prototyping to ensure your product isn't just aesthetically elegant, but also functionally superior.",
  },
  featuresData: [
    {
      imgSrc: intuitiveIcon.src,
      title:
        "Enlighten Your Product's Potential with Moonstack's Design Mastery",
      description:
        "The development of our products is a logical and successful scenario presented from idea to implementation. Our product design and development service begin with an evaluation session to get a clear understanding of the client’s expectations. This is followed by our design team coming up with various ideas that implement the latest trends and unique characteristics. After choosing a concept, we proceed to the prototyping stage, whereby we build a model of the item as a means of implementation and evaluation to ensure that the concept is in line with functional, structural, and aesthetic needs.",
    },
    {
      imgSrc: engagingIcon.src,
      title: "Product Design Company in the India",
      description:
        "If you choose a category that is slightly different from the one you would initially select for a specific contest, it will be highly effective to go with ‘Excellence in Innovation.’ We deliver Product Design Services in India for creating new and innovative products that will meet or exceed the needs of end-users. We are experienced in interpreting the workings of the Indian market and thus offer a form of service delivery that fits the needs and wants of your targeted customers. From idea generation to the development of only prototypes and fully established products, the team works to create products that will have a niche in the market.",
    },

    {
      imgSrc: brandingIcon.src,
      title: "Best Product Design Service in the India",
      description:
        "Every product has some unique style and elegance that are appreciated within the market and this is why Moonstack focuses on such products. Our Product Designing Service in India is crafted to capture the essence of British design, combining traditional aesthetics with modern functionality. In the process of implementing projects, our team collaborates with clients, focusing on the fact that the individual products should match the brand of our clients as well as attract those users from India.",
    },
  ],

  NewBanner: {
    headingLines: [
      { text: "Scale Your Innovation With Our Expert Product Design Team" },
    ],
  },
  OutcomeBanner: {
    heading: [
      {
        text: "Design Once, Innovate Forever: Your ",
        color: "text-white",
        className: "",
      },
      {
        text: "Expert Product Design Partner",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "End-to-End Product Strategy",
      "Rapid Prototyping & Iteration",
      "Scalable & Future-Proof Logic",
      "User-Centric Visual Identity",
    ],
    buttonText: "Start Your Project Today",
  },

  CloudTimelineData: {
    title: "Bringing the best Designing",
    highlight: "Agency To You",
    subtitle: "",
    steps: [
      {
        number: 1,
        title: " Product Discovery",
        description:
          " Research user needs, market trends, and business goals to define product vision and scope.",
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
        title: "Iterative Design",
        description:
          "Refine designs based on feedback, testing, and evolving requirements for optimal results.",
        position: "right",
      },
      {
        number: 9,
        title: " Collaboration",
        description:
          " Work closely with developers, stakeholders, and teams to ensure seamless design implementation.",
        position: "left",
      },
      {
        number: 10,
        title: "Delivery",
        description:
          "Provide final design assets, guidelines, and support for smooth product development and launch.",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Edge tools " },
      {
        text: "Drive That",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: "performance" },
    ],
    description:
      "Feel free adapt this based on the specific managed services, features, and unique selling points your IT service company provides.",
    cards: [
      {
        id: "Technical Implementation",
        label: "Technical Implementation",
        description:
          "Deploy and configure technology solutions, ensuring seamless integration and functionality for optimal performance.",
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
        text: "Product Design Service ",
        className: "libreItalic font-[400] highlight-text",
      },
      {
        text: " in USA: The Art of Innovation",
        color: "text-white",
      },
    ],
    description:
      "At Moonstack, we work on product design and development, and we help your ideas get materialized through unique design and perfect execution. Our staff is always focused on the goal, which is to achieve success, whether it is the introduction of a new product into the market or the redesign of an already existing product",
    columsClass: "lg:grid-cols-3",
    list: [
      {
        id: 1,
        title: "Product Design Service India: Innovation Meets Practicality",
        icon: collaboration.src,
        description:
          "India is well known for its comparatively tougher terrain and lifestyle, hence, our Product Design Service in India is diverse. We aim our attention at those inventions that will be useful and unique for use in India, being resistant to the physical and climatic conditions in the country. We maintain an approach of proper market analysis and consumer trials, so that each product created can adequately prepare to meet the requirements of India.",
      },
      {
        id: 2,
        title: "Flawless Product Design USA: The Art of Innovation",
        icon: collaboration.src,
        description:
          "At Moonstack, our product design and development team helps materialize your boldest ideas through unique design and perfect execution. Our staff is always focused on the primary goal: achieving success, whether through the introduction of a brand-new product into the global market or the strategic redesign of an existing one. We bring a world-class perspective to every project, ensuring that your digital assets meet the rigorous standards of the USA market while maintaining a competitive edge.",
      },
      {
        id: 3,
        title: "Let's Create Something Extraordinary",
        icon: collaboration.src,
        description:
          "Collaborate with Moonstack for any product design and development solutions and feel the difference between innovation and creativity. If you are looking for Product Design Services in Jaipur, we have you covered. Call us today for concepts to create and experience astonishing outcomes with the help of Moonstack’s proficient product design solutions.",
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

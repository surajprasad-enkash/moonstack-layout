import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/services/bannerImages/uiux.webp"
import bndimage1 from "@/assets/services/uiUx/uiUx.webp"
import OgImageIcon from "@/assets/ogImage.svg"
import Icon1 from "@/components/ServicesSvg/UiUxDesigning/UiUxDesigning1"
import Icon2 from "@/components/ServicesSvg/UiUxDesigning/UiUxDesigning2"
import Icon3 from "@/components/ServicesSvg/UiUxDesigning/UiUxDesigning3"
import Icon4 from "@/components/ServicesSvg/UiUxDesigning/UiUxDesigning4"
import Icon5 from "@/components/ServicesSvg/UiUxDesigning/UiUxDesigning5"
import Icon6 from "@/components/ServicesSvg/UiUxDesigning/UiUxDesigning6"

export const ui_ux: PageData = {
  hero: {
    title: [
      {
        text: "Transform Your Digital Presence with Moonstack’s ",
        color: "text-white",
      },
      {
        text: "UI/UX Design Services",
        color: "",
        className: "libreItalic font-[400] highlight-text",
      },
    ],
    description: [
      {
        text: "With a track record of 250+ successful projects and a 5.0 client rating, our expert team specializes in transforming complex ideas into seamless, high-performance digital products that resonate with users across every device.",
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
        label: "ui/ux Designing",
        href: "/services/ui-ux-designing-company",
      },
    ],
  },
  seo: {
    title: "UI/UX Design Services India USA | Web & Mobile ",
    description:
      "Need UI/UX designers in India for your web or mobile app? Moonstack delivers user centric interfaces, design systems, and tested flows that boost engagement.",
    keywords:
      "UI UX design company India 2026,best UI UX design agency USA,affordable UI UX services providers India,UI UX design for ecommerce websites USA,app UI UX designing experts India,UI UX prototyping services USA",
    canonical: "/services/ui-ux-designing-company",
    ogImage: OgImageIcon.src,
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

  leftCardData: [
    {
      title: "Leading UI/UX Company Globally",
      description:
        "Moonstack stands as a premier UI/UX design agency in India, recognized globally for excellence. We have successfully delivered a broad spectrum of intuitive design solutions across various industries. Our core expertise lies in crafting seamless user experiences for web and mobile platforms. At Moonstack, we offer comprehensive, custom UI/UX design services that result in highly engaging and innovative digital products. Our team of seasoned designers brings extensive hands-on experience in creating user-centered designs that resonate with audiences.",
      stats: [],
      description2:
        "Our primary goal is to launch impactful digital experiences for our clients. To fulfill diverse business requirements, we provide end-to-end UI/UX design services in India, encompassing user research, wireframing, prototyping, visual design, and usability testing. We position ourselves as a holistic design partner for startups and enterprises alike. We believe in transparent communication and timely delivery. Beyond aesthetics, our team emphasizes functional design that aligns with market standards and drives user engagement.",
      image: bndimage1.src,
      bolds: false,
    },
  ],
  solutions: {
    headingContent: [
      {
        text: "Mastering User-Centric Design:  ",
        color: "text-white",
      },
      {
        text: "From Aesthetic Brilliance ",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: "to Impactful Digital Experiences",
        color: "text-white",
      },
    ],
    subHeadingText:
      "Elevate your brand with high-performance digital solutions designed to captivate and convert. We combine visual excellence with strategic usability to ensure every user interaction is seamless and goal-oriented.",
  },
  featuresData: [
    {
      Icon: Icon1,
      imgSrc: "",
      title: "How we Create Attractive and Engaging Design to Attract Users",
      description:
        "Nowadays, the experience that a user gets while interacting with a business strongly determines its success. Moonstack is among the finest UI UX design agencies in India that specializes in creating visually appealing, customized digital solutions that engage and compel users and yield the desired organizational outcomes. We have professional UI UX designers in our team, ensuring that your digital products are not only visually stunning but also highly functional and user-friendly.",
    },
    {
      Icon: Icon2,
      imgSrc: "",
      title: "Reach New Heights and Take Your Branding UI and UX to New Levels",
      description:
        "User interface design is an indispensable part of virtually any present-day web site or application, as it defines how consumers engage with your web property. Our UI UX designer in Jaipur specializes in the enhancement of products’ UI and UX, while focusing on usability and accessibility, as well as the overall aesthetic of the final product. Our user experience design team listens to your instructions, your brand vision, your goals, and your target clients to create a uniform design that will take the user on a smooth journey.",
    },

    {
      Icon: Icon3,
      imgSrc: "",
      title: "User Experience Design: Creating Impact-full Encounters",
      description:
        "We, as a leading user experience design company, focus on developing products that shows significant and pertinent experiences to users. We use an approach where the layout, content, and overall experience of the application, product, or website are tailored to the user for a delightful experience. At Moonstack, we supercharge the aesthetic of interfaces because, from our perspective, interface design is not only about the looks; it is the look that works. Our UI UX designers in the India focus on each pixel, starting with the variation of fonts, through the selection of colors, buttons, interactions, and animations, to make sure that your product shines",
    },
  ],

  NewBanner: {
    headingLines: [
      { text: "Scale Your Vision With Our " },
      {
        text: "Elite UI/UX Design Specialists",
        className: "libreItalic font-[400]",
      },
    ],
  },
  OutcomeBanner: {
    heading: [
      {
        text: "Scale Your Engagement With Our ",
        color: "text-white",
        className: "",
      },
      {
        text: "Expert UI/UX Design Team",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Data-Driven User Research",
      "Rapid Interactive Prototyping",
      "Performance-First Aesthetics",
      "Proven Global Excellence",
    ],
    buttonText: "Start Your Project Today",
  },

  processData: {
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
        position: "right",
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
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Edge Tools Drive That" },
      {
        text: "Performance",
        className: "libreItalic font-[400] highlight-text",
      },
    ],
    description:
      "At Moonstack, our design philosophy is rooted in data and empathy. We leverage cutting-edge tools and methodologies to deliver designs that not only look exceptional but also perform flawlessly, driving user engagement and business growth.",
    cards: [
      {
        id: "User Research & Strategy",
        label: "User Research & Strategy",
        description:
          "We dive deep into understanding your users through comprehensive research methods including interviews, surveys, and competitive analysis. This data-driven approach allows us to build a solid strategic foundation, ensuring that every design decision is aligned with user needs and business objectives for maximum impact.",
        variant: "light",
      },
      {
        id: "Wireframing & Prototyping",
        label: "Wireframing & Prototyping",
        description:
          "Our team transforms complex concepts into intuitive structural layouts and interactive prototypes. We rigorously test these early-stage designs to validate flows and functionality, allowing for rapid iteration and refinement before moving into the final visual design phase, saving time and resources.",
        variant: "accent",
      },
      {
        id: "Visual User Interface Design",
        label: "Visual User Interface Design",
        description:
          "We craft visually stunning and brand-aligned interfaces that captivate users from the first glance. Our designers meticulously detail every element, from typography and color palettes to iconography and spacing, creating a cohesive and aesthetically pleasing digital environment that enhances brand perception.",
        variant: "dark",
      },
      {
        id: "Interactive Experience Design",
        label: "Interactive Experience Design",
        description:
          "Beyond static visuals, we design dynamic interactions and micro-animations that breathe life into your product. These subtle yet powerful details guide users through their journey, providing feedback and delight, significantly improving the overall user experience and perceived performance.",
        variant: "dark",
      },
      {
        id: "Usability Testing & Optimization",
        label: "Usability Testing & Optimization",
        description:
          "We don't just design; we validate. Through rigorous usability testing with real users, we identify friction points and areas for improvement. We continuously iterate and optimize the design based on actionable insights to ensure the final product is seamless, intuitive, and highly effective.",
        variant: "light",
      },
    ],
  },

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
        Icon: Icon4,
        title: "End-to-End Services",
        icon: "",
        description:
          "Our user experience design company is highly creative in making designs that can relate to local consumers in India. The importance of the Indian market is fully understood, and this means the creation of products that meet each and every consumer’s expectations. Whether you are a young company or a large business, we will help you design efficient UI and UX enhancing your company’s productivity",
      },
      {
        id: 2,
        Icon: Icon5,
        title: "Boost Your Online Presence",
        icon: "",
        description:
          "We at Moonstack deliver innovative UI and UX design services to mobilize clients across industries to create new designs that better suit the target users and improve on their engagement. Great attention is paid to the fact that our team’s goal is to create digital products that are efficient and visually appealing but also oriented to the USA cultural context and consumer values.",
      },
      {
        id: 3,
        Icon: Icon6,
        title: "Performance-Optimized Interfaces: Bridging Art and Analytics",
        icon: "",
        description:
          "By utilizing data-driven insights and rigorous user testing, our team ensures that every design element serves a specific purpose in enhancing your company's productivity. Whether you are a large enterprise or a growing business, we deliver flawless digital products that bridge the gap between creative artistry and the technical accuracy required for the competitive market.",
      },
    ],
  },
  accordionData: [
    {
      question: "What tools do you use for UI/UX design?",
      answer:
        "We primarily use industry-standard tools like Figma and Adobe XD for designing and prototyping. For specific needs, we also utilize tools like Sketch, InVision, and Adobe Creative Cloud suite to ensure high-quality deliverables.",
    },
    {
      question: "Can you redesign an existing website or app?",
      answer:
        "Yes, we specialize in redesigning existing digital products. We analyze the current user experience, identify pain points, and create a fresh, modern design that improves usability and aesthetics while aligning with your brand goals.",
    },
    {
      question: "How long does the UI/UX design process take?",
      answer:
        "The timeline varies depending on the project's complexity and scope. A typical project might take anywhere from a few weeks to a couple of months. We provide a detailed timeline after understanding your specific requirements during the initial consultation.",
    },
    {
      question: "What deliverables will I receive?",
      answer:
        "You will receive high-fidelity design screens, interactive prototypes, source files (Figma/Adobe XD), a style guide or design system, and all necessary assets (icons, images, fonts) ready for development handoff.",
    },
    {
      question: "Do you follow a mobile-first approach?",
      answer:
        "Absolutely. We prioritize mobile-first design principles to ensure your website or application provides an optimal experience on smaller screens before scaling up to larger desktop displays, catering to the growing number of mobile users.",
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
    buttonText: "",
  },
  whyChooseData: {
    headingText: "",
    subHeadingText: "",
    steps: [],
  },
  slides: [],
}

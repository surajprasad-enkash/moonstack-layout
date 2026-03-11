import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/services/bannerImages/seo.webp"
import bndimage1 from "@/assets/services/seo/seo.webp"
import OgImageIcon from "@/assets/ogImage.svg"

import SeoIcon1 from "@/components/ServicesSvg/SeoIcon/SeoIcon1"
import SeoIcon2 from "@/components/ServicesSvg/SeoIcon/SeoIcon2"
import SeoIcon3 from "@/components/ServicesSvg/SeoIcon/SeoIcon3"
import SeoIcon4 from "@/components/ServicesSvg/SeoIcon/SeoIcon4"
import SeoIcon5 from "@/components/ServicesSvg/SeoIcon/SeoIcon5"
import SeoIcon6 from "@/components/ServicesSvg/SeoIcon/SeoIcon6"

export const seo: PageData = {
  hero: {
    title: [
      {
        text: "AI-Powered SEO Services for ",
        color: "text-white",
      },
      {
        text: "AEO, AIO, GEO & Semantic Search ",
        color: "",
        className: "libreItalic highlight-text",
      },
      {
        text: "Growth",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "At Moonstack, we enable start-ups and large enterprises to increase their brand visibility, improve rankings, and generate 2X leads that optimize as per Google AI's overview, semantic search, and modern user intent.",
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
        label: "search engine optimization",
        href: "/services/search-engine-optimization-company",
      },
    ],
  },
  seo: {
    title: "SEO Services | Increase Website Traffc | AEO/GEO/SGE",
    description:
      "Increase traffic and leads with our SEO Service, Our team handles technical SEO and focus on AEO/GEO/SGE with EEAT content and aware with latest Google updates.",
    keywords:
      "Search Engine Optimization Service,affordable SEO services provider USA,Professional SEO company in USA,SEO services for small business India,professional SEO agency India,SEO consultant near me USA",
    canonical: "/services/search-engine-optimization-company",
    ogImage: OgImageIcon.src,
  },
  mobDesignBanner: nativeBannerImg,

  points: "",
  highlightText: "",

  leftCardData: [
    {
      title: "Trusted SEO Service Provider Company",
      description:
        "Moonstack is recognized as one of the top SEO service providers. We have 10+ years of SEO experience in different industries. Our blend of SEO professionals has worked with start-ups, agencies, and global trends. As the leading  SEO consulting services provider globally, we have provided proven results with 2x traffic in 30 days with the right strategic manner as per the specific projects. Our certified SEO professionals opt for modern SEO practices and have hands-on experience with AI overview optimisation and AEO (Answer Engine Optimisation) that ensure to stay your brand keyword on top of search engines. ",
      stats: [],
      description2:
        "With Moonstack, you are not just shaking hands for SEO services, but it's a growth engine that you are creating the future of your business. From technical SEO to content optimisation, we are delivering the best seo and content services that are based on measurable outcomes, lead-driven growth, and long-term search dominance. We are offering end-to-end SEO services that make us a top SEO service provider Worldwide.",
      image: bndimage1.src,
      bolds: false,
    },
  ],
  solutions: {
    headingContent: [
      {
        text: "Our Specialities In ",
        color: "text-white",
      },
      {
        text: "SEO ",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: "Services",
        color: "text-white",
      },
    ],
    subHeadingText:
      "Moonstack is a leading SEO agency that offers comprehensive SEO solutions to businesses worldwide. We specialize in driving organic traffic, improving search rankings, and enhancing brand visibility through data-driven strategies and ethical SEO practices.",
  },
  featuresData: [
    {
      Icon: SeoIcon1,
      imgSrc: "",
      title: "On-Page SEO Optimization",
      description:
        "We optimize your website's content, structure on-page elements, and ensure proper keyword usage to improve relevancy and user experience.",
    },
    {
      Icon: SeoIcon2,
      imgSrc: "",
      title: "Off-Page SEO & Link Building",
      description:
        "Our experts build high-quality backlinks and execute strategic off-page campaigns to boost your domain authority and search engine trust.",
    },
    {
      Icon: SeoIcon3,
      imgSrc: "",
      title: "Technical SEO Services",
      description:
        "We resolve technical issues like site speed, crawl errors, and mobile-friendliness to ensure search engines can index and rank your site effectively.",
    },
    {
      Icon: SeoIcon4,
      imgSrc: "",
      title: "Local SEO Services",
      description:
        "Dominate your local market with our targeted local SEO strategies. We optimize your GMB profile and build local citations to attract nearby customers.",
    },
    {
      Icon: SeoIcon5,
      imgSrc: "",
      title: "E-Commerce SEO",
      description:
        "Drive more sales with our specialized E-commerce SEO. We optimize product pages, improve site architecture, and target transactional keywords to boost conversions.",
    },
    {
      Icon: SeoIcon6,
      imgSrc: "",
      title: "Content Marketing Strategy",
      description:
        "Engage your audience with high-quality, SEO-optimized content. Our team creates compelling blog posts, articles, and guides that drive traffic and build authority.",
    },
  ],

  NewBanner: {
    headingLines: [
      {
        text: "Scale Your Search Visibility With Our ",
      },
      {
        text: "Expert SEO Strategy ",
        className: "libreItalic font-[400]",
      },
      {
        text: "Team",
      },
    ],
  },
  OutcomeBanner: {
    heading: [
      {
        text: "Rank Once, Scale Forever: Your ",
        color: "text-white",
        className: "",
      },
      {
        text: "Expert SEO Growth Partner",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Comprehensive On-Page Optimization",
      "High-Authority Link Building",
      "Technical SEO Excellence",
      "Continuous Analytics & Reporting",
    ],
    buttonText: "Start Your Growth Now",
  },

  CloudTimelineData: {
    title: "Modern SEO Process That ",
    highlight: "We Follow for Your Website",
    steps: [
      {
        number: 1,
        title: "SEO Audit & Analysis",
        description:
          "Leverage advanced tools to conduct comprehensive website audits, analyzing technical performance, content quality, competitor strategies, and user behavior patterns. We identify opportunities and SEO gaps.",
        position: "left",
      },
      {
        number: 2,
        title: "Strategic Keyword Research & Intent Mapping",
        description:
          "Utilize AI-powered keyword research tools to discover high-value opportunities aligned with user intent. We go beyond traditional keyword targeting to understand semantic relationships, conversational queries, and AI search patterns (ChatGPT, Bard, Bing AI).",
        position: "right",
      },
      {
        number: 3,
        title: "AI-Enhanced Content Strategy & Creation",
        description:
          "Develop a data-driven content strategy that combines human expertise with AI assistance. Create high-quality, E-E-A-T focused content optimized for both traditional search engines and AI-powered platforms, ensuring visibility across all search channels.",
        position: "left",
      },
      {
        number: 4,
        title: "Technical SEO & Performance Optimization",
        description:
          "Implement advanced technical optimizations using AI-driven tools to enhance site speed, mobile experience, and crawlability. Ensure your website meets the latest Core Web Vitals standards and is optimized for AI crawler accessibility.",
        position: "right",
      },
      {
        number: 5,
        title: "Intelligent Link Building & Authority Development",
        description:
          "Execute strategic, AI-assisted link building campaigns that focus on quality over quantity. Build domain authority through genuine relationships, high-value content partnerships, and data-driven outreach strategies.",
        position: "left",
      },
      {
        number: 6,
        title: "Continuous Monitoring, AI Insights & Adaptation",
        description:
          "Deploy advanced analytics and AI-powered monitoring systems to track performance, predict trends, and adapt strategies in real-time. Stay ahead of algorithm updates and emerging AI search patterns with proactive optimization.",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Advance SEO Built " },
      {
        text: "for the AI",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: "Era" },
    ],
    description:
      "Moonstack, the best digital marketing and SEO agency in India, does not only aim to just optimize for rankings. We create an SEO based strategy that targets rankings primarily. With the best SEO certified professionals, our SEO strategy is to optimize for visibility, trust, and conversion rates that result in AI-driven search platforms. In this competition era, your solution is to partner with the leading Moonstack SEO service provider company, who have a blend of professional and dedicated certified SEO experts in India. We have created end-to-end SEO strategies that are built for the AI era.",
    cards: [
      {
        id: "AI Optimization (AIO)",
        label: "AI Optimization (AIO)",
        description:
          "We are a data-driven SEO agency in India that provides accurate content structured for AI comprehension that is not created for the sake of human readers. With our SEO strategy, we create an end-to-end AIO-based strategy that focuses on entity mapping, semantic relationships, and contextual relevance. Our SEO strategy focuses on entity mapping, semantic relationships, and contextual relevance that connect your audience. ",
        variant: "light",
      },
      {
        id: "Answer Engine Optimization (AEO)",

        label: "Answer Engine Optimization (AEO)",
        description:
          "At Moonstack, we strategize your content strategy in a way that it appears in AI overviews, and provides direct answers. Our AEO SEO strategy provides impactful, well-defined, structured, and concise responses as per user behaviour. The Answer engine optimization helps users to make their decisions faster and provides clarity to users.",
        variant: "accent",
      },
      {
        id: "Generative Engine Optimization (GEO)",

        label: "Generative Engine Optimization (GEO)",
        description:
          "Our transparent SEO services company in India aims to improve brand presence that providing AI-generated summaries and conversational results. Our Generative engine optimisation (Google Search engine) is designed in such a way that delivers the best AI-driven search engine experiences that ensure your brand is referred to when users don’t even click traditional links. It also improves brand visibility appropriately.",
        variant: "dark",
      },
      {
        id: "Semantic SEO",

        label: "Semantic SEO",
        description:
          "At Moonstack, we develop topical authority via intent-driven content clusters that reduce reliance on single keywords. Our systematic approach aligns with modern search engines, which is measured with a modern search engine optimisation process, evaluates expertise, and relevance of the target audience that connects with the audience.",
        variant: "dark",
      },
      {
        id: "Technical SEO & Performance",

        label: "Technical SEO & Performance",
        description:
          "Our SEO audit and analysis services in India are designed to deliver strong results. With industry-best SEO experts, we optimize core web vitals, crawlability, and indexing that ensure the best search engine results and provide a full AI system that can access, understand, and rank sites in an appropriate manner.",
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
      // {
      //   text: " Why Choose us for your ",
      //   color: "text-white",
      // },
      // {
      //   text: "Laravel  Web Development",
      //   className: "libreItalic font-[400] highlight-text",
      // },
      // {
      //   text: " Services?",
      //   color: "text-white",
      // },
    ],
    description: "",

    // columsClass: "lg:grid-cols-3",
    list: [
      // {
      //   id: 1,
      //   title: "Decade of Experience",
      //   icon: collaboration.src,
      //   description:
      //     "Our Laravel experts have decades of experience that allows them to meet all clients' needs. Laravel coders have delivered scalable, secure, and high performance web apps with advanced integrated functionalities.",
      // },
      // {
      //   id: 2,
      //   title: "Custom Solutions for Every Business",
      //   icon: collaboration.src,
      //   description:
      //     "We have delivered 450+ custom web development solutions across the world. Our professional Laravel experts have built high performance, scalable different solutions specifically designed for different business needs.",
      // },
      // {
      //   id: 3,
      //   title: "End to End Laravel Development Services",
      //   icon: collaboration.src,
      //   description:
      //     "Delivering end to end Laravel development services to our clients. From consultation to development to migration - Moonstack is known as a one stop solution for all our client’s Laravel web development needs.",
      // },
      // {
      //   id: 4,
      //   title: "Transparent Communication",
      //   icon: collaboration.src,
      //   description:
      //     "At Moonstack, we maintain open communication with our clients with constant updates, demos, and progress reports that ensure us to stay connected with our customers. Moreover, that also allows us to understand each other's mindset in a better way.",
      // },
      // {
      //   id: 5,
      //   title: "Confidential Details",
      //   icon: collaboration.src,
      //   description:
      //     "Every project idea is unique - we understand the importance of your business module. We keep all your information fully secure and confidential with us. Our team keeps all details to them, and in any case we don’t leak any of your project ideas to third parties.",
      // },
      // {
      //   id: 6,
      //   title: "Creative and Business oriented solutions",
      //   icon: collaboration.src,
      //   description:
      //     "We just don’t build Laravel solutions only for the web development purpose. At Moonstack, we build business oriented solutions that align with your business needs and attract users with advanced based next generation features.",
      // },
    ],
  },
  accordionData: [
    {
      question: "Why is my website not ranking on Google?",
      answer:
        "There can be several reasons affecting your website ranking, including poor content optimization, technical issues, or lack of proper SEO strategies. Google frequently updates its SEO algorithms, which can also impact rankings.",
    },
    {
      question: "How to improve website visibility in India?",
      answer:
        "Partner with a leading SEO agency with proven case studies in India. Focus on India-specific keywords, use terms like INR, prioritize local SEO, list your business on Indian directories, and publish India-relevant content. Additionally, build high-quality backlinks from Indian websites.",
    },
    {
      question: "What SEO services does Moonstack provide?",
      answer:
        "Moonstack is a one-stop solution and a Google-certified SEO partner in India. We provide end-to-end SEO services including website audits, keyword research, on-page optimization, technical SEO, content optimization, link building, local SEO, and performance monitoring tailored to business needs.",
    },
    {
      question:
        "How long does it take to get results from SEO services in India?",
      answer:
        "There is no fixed timeline for SEO results. At Moonstack, we focus on consistent optimization and strategic execution, and typically aim to start delivering measurable results within approximately three months.",
    },
    {
      question: "Do you use white hat SEO practices?",
      answer:
        "Yes, we strictly follow white-hat SEO techniques aligned with Google search engine guidelines to ensure sustainable, long-term online growth.",
    },
    {
      question: "Can SEO help me generate leads?",
      answer:
        "Yes, our data-driven SEO strategies are designed to attract the right audience, generate qualified leads, and help grow your business effectively.",
    },
    {
      question: "Do you provide constant SEO reports and performance tracking?",
      answer:
        "Yes, Moonstack provides regular SEO performance reports and tracking updates to maintain transparency. These reports help clients understand progress, performance metrics, and ongoing optimization efforts.",
    },
    {
      question: "Is SEO suitable for small businesses and large enterprises?",
      answer:
        "Yes, SEO is highly effective for both small businesses and large enterprises. It helps increase audience reach, improve conversion rates, build credibility, and support long-term business growth.",
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

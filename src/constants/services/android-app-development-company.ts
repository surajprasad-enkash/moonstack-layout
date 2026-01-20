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

export const android: PageData = {
  hero: {
    title: [
      {
        text: " AI Development Company for",
        color: "text-white",
      },
      {
        text: " Agents & Automation",
        color: "text-white",
      },
    ],
    description: [
      {
        text: "Build AI agents, copilots, and intelligent automation systems that turn your business chaos into organization-wide productivity and accuracy. We are here to help SaaS companies, startups, and enterprises leverage AI to enhance their product offerings, customer experience, and operational efficiency. ",
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
        label: "Ai agent development company",
        href: "/services/ai-agent-development-company",
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
    "Moonstack’s AI expertise was a game-changer. They engineered a custom predictive layer that cut our manual processing by 45%. Navigating complex security was seamless, delivering an intelligent system that scales with our users. For AI that impacts the bottom line, Moonstack is the premier partner.",
  highlightText: "cut our manual processing by 45%",

  leftCardData: [
    {
      title: "Why Consider AI for Your Business?",
      description:
        "Manual work, inefficiencies, delayed timelines, human errors, lengthy processes, and lack of transparency in business operations are a thing of the past. Welcome to the AI age, powered by AI agents, copilots, multi-agent workflows, and agentic automation systems that breathe in fresh whiffs of high accuracy and efficiency into your operations. From customer support to sales, marketing, finance, business analytics, logistics management, and compliance, AI solutions are transforming how we work by introducing autonomous and intelligent workflows. Results?",
      stats: [
        "66% improvement in employee performance",
        "2.3x higher revenue growth using AI agents",
        "70% reduction in repetitive tasks",
        "30% lower operational costs with AI automation",
      ],
      // description2:
      //   "So, looking to make your business future-ready and get a competitive edge? It's time to think the AI way. We are a leading custom AI development company in India, helping businesses of all sizes build custom AI solutions aligned to their needs. Whether you are looking to build an AI assistant, AI agent, or AI app, we can get you cutting-edge solutions to turn your business into an AI-powered success story.",
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
        text: " AI Agent Development ",
        color: "text-white libreItalic font-[400] highlight-text",
      },
      {
        text: " Services",
        color: "text-white",
      },
    ],
    subHeadingText:
      "At Moonstack, a credible AI agent development company for business, we are dedicated to delivering sophisticated end-to-end AI product development services to power your business ambitions. Design, build, and deploy AI agent solutions that are robust, scalable, and adaptable to your business needs, industry trends, market sentiment, and customer demands. ",
  },
  featuresData: [
    {
      imgSrc: intuitiveIcon.src,
      title: "AI Consulting & Strategy",
      description:
        "Cut through the AI hype and build a clear and execution-ready AI roadmap aligned to your real business needs. Our AI consulting and strategy services for SMEs help identify high-ROI AI agent use cases in your business, select the right LLM, recommend architecture, assess your data readiness, outline success metrics, and draft a plan so your AI investment delivers results.",
    },
    {
      imgSrc: engagingIcon.src,
      title: "Custom AI Agent Development",
      description:
        "Build custom AI agents tailored to your business logic, tools, and workflows, turning your challenges into opportunities for success. Hire our AI developers to build highly functional and autonomous AI agents capable of processing data, reasoning, executing tasks, and improving on feedback without any human involvement.",
    },

    {
      imgSrc: brandingIcon.src,
      title: "AI Agent Support and Maintenance",
      description:
        "Maintain the reliability and relevance of your AI agents with our ongoing support and maintenance services. Our team ensures your AI agents stay accurate and aligned to your changing business needs and vision. From performance monitoring and optimization to model tuning, knowledge base updates, error handling, security, and compliance, we take care of everything.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "RAG & AI Chatbot Development",
      description:
        "Build a RAG-based AI chatbot on your company's knowledge base to give your employees easy and instant access to accurate data. Our RAG-based AI chatbot development services fine-tune LLM with your documents, databases, and knowledge sources for multiple internal use cases like knowledge base chatbots, PDF chatbots, and Q&A assistants.",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Process Automation Development",
      description:
        "Automate and streamline your processes with agentic automations, multi-agent systems, or AI agent workflows for faster processes, lower operational costs, and teams freed to focus on high-value work. Our AI-powered workflow automation for small business solutions combines AI agents with tools and integrations to automate simple to complex and even multi-step workflows. ",
    },
    {
      imgSrc: brandingIcon.src,
      title: "Agentic AI Development",
      description:
        "Develop advanced agentic AI systems capable of planning, decision-making, and autonomous execution across complex workflows. We can deploy a set of AI agents, each trained to execute a specific task and capable of collaborating with other agents to collectively execute the target task and deliver intended results. ",
    },
  ],
  qualitySectionData: [
    {
      id: 1,
      title: "Improved Decision Making",
      icon: collaboration.src,
      description:
        "We help you turn your raw business data into valuable insights for accurate, faster, and smarter business decision-making.",
    },
    {
      id: 2,
      title: "High Efficiency & Accuracy",
      icon: delivery.src,
      description:
        "Our AI solutions and AI agents will enable you to intelligently automate complex processes effortlessly to reduce manual work, delays, and errors, delivering high efficiency and precision.",
    },
    {
      id: 3,
      title: "Lower Operational Costs",
      icon: hiring.src,
      description:
        "By automating processes and implementing AI agents for multiple tasks, we bring down the workload on your employees and save you from hiring more staff.",
    },
    {
      id: 4,
      title: "Better Customer Experience",
      icon: designer.src,
      description:
        "Moonstack’s AI developers can boost your customer experience by building AI solutions that offer insight into customer preferences by analyzing their data, recommending products, and instantly resolving customer queries.",
    },
  ],
  CloudTimelineData: {
    title: "Insight into Our AI ",
    highlight: "Development Process",
    subtitle:
      "We take an agile, client-centric, and result-driven approach to building AI solutions that resonate with excellence. Focusing on speed, adaptability, and continuous improvement, we move from idea to impact without unnecessary delays or endless revisions.",
    steps: [
      {
        number: 1,
        title: "Discovery & Strategic Insights",
        description:
          "We start by deeply understanding your business, which includes your goals, challenges, and existing systems. Our team evaluates where AI can deliver the most value and reviews your current data and infrastructure. The result is a clear, practical roadmap aligned with your business objectives.",
        position: "left",
      },
      {
        number: 2,
        title: "Data Collection & Preparation",
        description:
          "AI is only as good as the data behind it. We gather relevant data from internal and external sources, clean and structure it, and optimize it for performance. Using proven tools and frameworks, we ensure your data is accurate, reliable, and ready to power intelligent models.",
        position: "right",
      },
      {
        number: 3,
        title: "Model Design & Experimentation",
        description:
          "At this stage, we design and test AI models tailored to your specific use case. Whether the solution requires supervised learning, unsupervised learning, or deep learning techniques, we experiment with multiple approaches to identify the most effective model for your needs.",
        position: "left",
      },
      {
        number: 4,
        title: "Training & Model Optimization",
        description:
          "We train models using real business data and fine-tune them for accuracy, speed, and scalability. Through continuous testing and refinement, we build robust AI systems that can handle complexity and perform reliably in real-world scenarios.",
        position: "right",
      },
      {
        number: 5,
        title: "Deployment & System Integration",
        description:
          "Once the model is ready, we deploy it seamlessly into your existing environment. Whether on cloud platforms or custom infrastructure, we ensure smooth integration, rigorous testing, and a stable launch, so your AI solution works flawlessly from day one.",
        position: "left",
      },
      {
        number: 6,
        title: "Monitoring, Support & Continuous Improvement",
        description:
          "After deployment, we continuously monitor performance, track system behavior, and retrain models as new data becomes available. This ensures your AI solution keeps improving and stays aligned with your business as it grows.",
        position: "right",
      },
    ],
  },

  impactSection: {
    heading: [
      { text: "Building AI Solutions," },
      {
        text: " Transforming Industries,",
        className: "libreItalic font-[400] highlight-text",
      },
      { text: " Creating Real Impact" },
    ],
    description:
      "Hire our AI developers to build state-of-the-art AI solutions aligned to your industry and supporting your business operations, processes, and strategies. From healthcare to fintech, e-commerce, energy, manufacturing, education, travel, and logistics, we are proficient in helping you realize what artificial intelligence can do for your business and achieve your annual targets like before.",
    cards: [
      {
        id: "Healthcare",
        label: "Healthcare",
        description:
          "We offer AI development services for healthcare and clinics, enabling automated administrative processes, quality patient care, faster diagnosis, and better patient outcomes. Our team is adept at developing a wide array of solutions like telemedicine apps, smart real-time monitoring solutions, medical imaging analysis software, AI agents for appointment booking, follow-ups, and patient support, patient data analytics platforms, predictive diagnostic tools, and more.",
        variant: "light",
      },
      {
        id: "Fintech",

        label: "Fintech",
        description:
          "As a trusted AI development company for fintech and banking, we equip organizations to offer secure, faster, and smarter banking experiences to users. Our expertise lies in developing AI-powered systems that cater to your business challenges and open new revenue opportunities. This includes fraud detection systems, personalized banking experiences, AI agents for financial advisory & customer support, risk assessment tools, data analytics tools for trading, AI agents for portfolio management, compliance management solutions, credit scoring tools, and AI assistants for loan processing.",
        variant: "accent",
      },
      {
        id: "e-Commerce",

        label: "e-Commerce",
        description:
          "At Moonstack, we offer cutting-edge AI solutions for e-commerce companies, helping them enhance customer experience, engage users, run campaigns, manage inventories, and get valuable data insights for strategic business decision-making. This is possible by integrating AI solutions like virtual shopping assistants, AI custom support solutions, inventory forecasting solutions, dynamic pricing solutions, data analytics tools, AI sales agents, and more such smart solutions with our help.",
        variant: "dark",
      },
      {
        id: "Travel",

        label: "Travel",
        description:
          "Moonstack AI developers are experienced in developing intelligent solutions for the travel and hospitality industry, enabling them to offer memorable guest experiences and achieve operational excellence. We can build AI tools and AI agents for room booking, personalized travel support, itinerary creation, predictive maintenance, dynamic pricing, and business analytics.",
        variant: "dark",
      },
      {
        id: "Education",

        label: "Education",
        description:
          "Our AI developers bring in their technical expertise and years of experience in building robust smart solutions for the education sector, enhancing overall learning experience, quality, and process. Be it AI teaching assistants, student performance analytics tools, scoring tools, mock exam platforms, AI assistants for admission help, or AI agents to automate administrative tasks, we can do all.",
        variant: "light",
      },
      {
        id: "Logistics",

        label: "Logistics",
        description:
          "Our AI development services are here to make your logistics processes streamlined, automated, seamless, and on time. What our developers can do for your logistics company can transform it from a chaotic business to a system of effortless workflows. With route optimization solutions, real-time fleet tracking systems, analytics tools, AI agents for vendor management, and demand forecasting tools, we are here to help you welcome AI-backed logistics where there is no space for delays, manual work, human errors, or missed consignments, just high efficiency. ",
        variant: "accent",
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

  accordionData: [
    {
      question: "How much does Android app development cost in India?",
      answer:
        "The actual development cost of an Android app depends on the app’s purpose, technology stack, features, and scale. For a quick quotation, feel free to reach out to our team at Moonstack.",
    },
    {
      question: "Will AI replace Android developers in India?",
      answer:
        "No, while AI is gradually becoming a good tool that can assist developers, it is not advanced enough to replace Android developers in India.",
    },
    {
      question: "Which is the best Android app development company in India?",
      answer:
        "Moonstack. We pride ourselves on being the best Android app development company in India, thanks to our years of experience developing popular Android apps that are downloaded and loved by millions of users.",
    },
    {
      question: "Can Moonstack develop Android e-commerce applications?",
      answer:
        "Yes, we can help you build completely custom e-commerce Android applications, complete with payment gateway integration and even chat support.",
    },
    {
      question: "How long does it take to develop an Android app?",
      answer:
        "The timeline for app development depends on various factors; however, the development process can generally take between a few weeks to a few months, based on underlying factors.",
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

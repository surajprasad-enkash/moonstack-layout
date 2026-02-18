import { PageData } from "@/types/web-development-data-type"

import androidLottie from "../../../public/lottie/android.json"
import nativeBannerImg from "@/assets/app-development-images/native-banner-img.webp"
import androidContactbannerImg from "@/assets/app-development-images/contact-app-img.webp"
import androidBannerImg from "@/assets/app-development-images/android-banner.webp"
import bndimage1 from "@/assets/industries/icon/bndImage1.webp"

import AiIcon1 from "@/components/ServicesSvg/AiIcon/AiIcon1"
import AiIcon2 from "@/components/ServicesSvg/AiIcon/AiIcon2"
import AiIcon3 from "@/components/ServicesSvg/AiIcon/AiIcon3"
import AiIcon4 from "@/components/ServicesSvg/AiIcon/AiIcon4"
import AiIcon5 from "@/components/ServicesSvg/AiIcon/AiIcon5"
import AiIcon6 from "@/components/ServicesSvg/AiIcon/AiIcon6"
import AiIcon7 from "@/components/ServicesSvg/AiIcon/AiIcon7"
import AiIcon8 from "@/components/ServicesSvg/AiIcon/AiIcon8"
import AiIcon9 from "@/components/ServicesSvg/AiIcon/AiIcon9"
import AiIcon10 from "@/components/ServicesSvg/AiIcon/AiIcon10"

export const ai: PageData = {
  hero: {
    title: [
      {
        text: " AI Development Company for",
        color: "text-white",
      },
      {
        text: " Agents & Automation",
        color: "text-white highlight-text libreItalic",
      },
    ],
    description: [
      {
        text: "Build AI agents, copilots, and intelligent automation systems that turn your business chaos into organization-wide productivity and accuracy. We are here to help SaaS companies, startups, and enterprises leverage AI to enhance their product offerings, customer experience, and operational efficiency. ",
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
        label: "Ai Agent Development Company",
        href: "/services/ai-agent-development-company",
      },
    ],
  },
  seo: {
    title: "AI Agent Development Services | Expert AI Solutionsk",
    description:
      "Get Professional AI agent development services. We build custom AI agents, chatbots, and intelligent automation solutions that enhance efficiency and drive growth.",
    keywords:
      "custom ai development company in USA,ai development services for startups,ai agent development company for businesses,hire ai developers for custom automation,enterprise ai development services for digital transformation",
    canonical: "/services/ai-agent-development-company",
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
      bolds: false,
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
      Icon: AiIcon1,
      imgSrc: "",
      title: "AI Consulting & Strategy",
      description:
        "Cut through the AI hype and build a clear and execution-ready AI roadmap aligned to your real business needs. Our AI consulting and strategy services for SMEs help identify high-ROI AI agent use cases in your business, select the right LLM, recommend architecture, assess your data readiness, outline success metrics, and draft a plan so your AI investment delivers results.",
    },
    {
      Icon: AiIcon2,
      imgSrc: "",
      title: "Custom AI Agent Development",
      description:
        "Build custom AI agents tailored to your business logic, tools, and workflows, turning your challenges into opportunities for success. Hire our AI developers to build highly functional and autonomous AI agents capable of processing data, reasoning, executing tasks, and improving on feedback without any human involvement.",
    },

    {
      Icon: AiIcon3,
      imgSrc: "",
      title: "AI Agent Support and Maintenance",
      description:
        "Maintain the reliability and relevance of your AI agents with our ongoing support and maintenance services. Our team ensures your AI agents stay accurate and aligned to your changing business needs and vision. From performance monitoring and optimization to model tuning, knowledge base updates, error handling, security, and compliance, we take care of everything.",
    },
    {
      Icon: AiIcon4,
      imgSrc: "",
      title: "RAG & AI Chatbot Development",
      description:
        "Build a RAG-based AI chatbot on your company's knowledge base to give your employees easy and instant access to accurate data. Our RAG-based AI chatbot development services fine-tune LLM with your documents, databases, and knowledge sources for multiple internal use cases like knowledge base chatbots, PDF chatbots, and Q&A assistants.",
    },
    {
      Icon: AiIcon5,
      imgSrc: "",
      title: "Process Automation Development",
      description:
        "Automate and streamline your processes with agentic automations, multi-agent systems, or AI agent workflows for faster processes, lower operational costs, and teams freed to focus on high-value work. Our AI-powered workflow automation for small business solutions combines AI agents with tools and integrations to automate simple to complex and even multi-step workflows. ",
    },
    {
      Icon: AiIcon6,
      imgSrc: "",
      title: "Agentic AI Development",
      description:
        "Develop advanced agentic AI systems capable of planning, decision-making, and autonomous execution across complex workflows. We can deploy a set of AI agents, each trained to execute a specific task and capable of collaborating with other agents to collectively execute the target task and deliver intended results. ",
    },
  ],
  qualitySectionData: {
    heading: [
      {
        text: "Engineering Intelligence into ",
        color: "text-white",
      },
      {
        text: "Every Workflow",
        color: "text-white libreItalic font-[400] highlight-text",
      },
    ],
    description:
      "We go beyond simple automation. Our team architects sophisticated AI agents that understand context, execute variable-dependent decisions, and integrate deeply with your enterprise ecosystem to drive genuine operational excellence.",
    columsClass: "",
    list: [
      {
        id: 1,
        Icon: AiIcon7,
        title: "Improved Decision Making",
        icon: "",
        description:
          "We help you turn your raw business data into valuable insights for accurate, faster, and smarter business decision-making.",
      },
      {
        id: 2,
        Icon: AiIcon8,
        title: "High Efficiency & Accuracy",
        icon: "",
        description:
          "Our AI solutions and AI agents will enable you to intelligently automate complex processes effortlessly to reduce manual work, delays, and errors, delivering high efficiency and precision.",
      },
      {
        id: 3,
        Icon: AiIcon9,
        title: "Lower Operational Costs",
        icon: "",
        description:
          "By automating processes and implementing AI agents for multiple tasks, we bring down the workload on your employees and save you from hiring more staff.",
      },
      {
        id: 4,
        Icon: AiIcon10,
        title: "Better Customer Experience",
        icon: "",
        description:
          "Moonstack’s AI developers can boost your customer experience by building AI solutions that offer insight into customer preferences by analyzing their data, recommending products, and instantly resolving customer queries.",
      },
    ],
  },

  NewBanner: {
    headingLines: [
      { text: "Want AI that Delivers " },
      { text: "Measurable ROI, Not Just Experiments?" },
    ],
  },
  OutcomeBanner: {
    heading: [
      { text: "Exploring AI, ", color: "text-white", className: "" },
      {
        text: "but Don’t Know Where to Start?",
        className: "text-white libreItalic font-[400]",
        color: "",
      },
    ],
    checklist: [
      "Generative AI & LLM Integration",
      "Intelligent Business Process Automation",
      "Predictive Analytics & Forecasting",
      "Custom Computer Vision & NLP Solutions",
    ],
    buttonText: "Talk To Us",
  },

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

        label: "E-Commerce",
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

  accordionData: [
    {
      question: "What is an AI agent?",
      answer:
        "An AI agent is a software program that can perceive its environment, reason, and take actions to achieve specific goals autonomously. Unlike traditional software, AI agents can learn from their interactions and improve their performance over time.",
    },
    {
      question: "How can AI agents benefit my business?",
      answer:
        "AI agents can automate repetitive tasks, improve decision-making, enhance customer service, and optimize operations. They can work 24/7, handle large volumes of data, and provide personalized experiences to users.",
    },
    {
      question: "What industries can benefit from AI agents?",
      answer:
        "AI agents can benefit a wide range of industries, including healthcare, finance, e-commerce, customer service, logistics, and more. Any industry that involves data processing, decision-making, or customer interaction can benefit from AI agents.",
    },
    {
      question: "How long does it take to develop an AI agent?",
      answer:
        "The development time for an AI agent depends on the complexity of the project, the features required, and the availability of data. Simple agents can be developed in a few weeks, while complex agents may take several months.",
    },
    {
      question: "How much does it cost to develop an AI agent?",
      answer:
        "The cost of developing an AI agent varies depending on the scope of the project, the technology stack, and the level of customization required. Contact us for a quote based on your specific needs.",
    },
  ],

  banner: {
    headingText: [
      {
        text: "Opt for your custom AI Agent development services now",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: "AI Agent development goes through different stages of work.",
        color: "text-white",
      },
    ],
    image: androidBannerImg,
  },
  quoteBanner: {
    headingText: [
      {
        text: "Looking To Hire AI Developers in India? ",
        color: "text-white",
      },
    ],
    subHeadingText: [
      {
        text: "We offer top-rated AI development services in India. ",
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

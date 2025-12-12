import androidImg from "../../../public/assets/app-development-images/android-hero-img.webp";
import iosImg from "../../../public/assets/app-development-images/ios-hero-img.webp";
import pwaImg from "../../../public/assets/app-development-images/pwa-hero-img.webp";
import reactNativeImg from "../../../public/assets/app-development-images/native-hero-img.webp";
import managementImg from "../../../public/assets/app-development-images/mantainance-hero-img.webp";
import flutterIcon from "../../../public/assets/flutter-icon.svg";
import swiftIcon from "../../../public/assets/swift-icon.svg";
import angularIcon from "../../../public/assets/angular-icon.svg";
import nextIcon from "../../../public/assets/next-icon.svg";
import jsIcon from "../../../public/assets/js-icon.svg";
import androidIcon from "../../../public/assets/android-icon.svg";
import iosIcon from "../../../public/assets/ios-icon.svg";
import reactIcon from "../../../public/assets/react-icon.svg";
import pwaIcon from "../../../public/assets/pwa-icon.svg";
import figmaIcon from "../../../public/assets/figma-icon.svg";
import SliderOne from "../../../public/assets/sliderOne.webp";
import SliderTwo from "../../../public/assets/sliderTwo.webp";
import SliderThree from "../../../public/assets/SliderThree.webp";
import SliderFour from "../../../public/assets/sliderFour.webp";
import SliderFive from "../../../public/assets/SliderFive.webp";
import revenue from "../../../public/assets/revenue.svg";
import android from "../../../public/assets/app-development-images/android-icon.svg";
import apiIcon from "../../../public/assets/app-development-images/api-icon.svg";
import testingIcon from "../../../public/assets/app-development-images/testing-icon.svg";
import playstoreIcon from "../../../public/assets/app-development-images/playstore-icon.svg";
import settingIcon from "../../../public/assets/app-development-images/setting-icon.svg";
import codeIcon from "../../../public/assets/app-development-images/code-icon.svg";
import appleIcon from "../../../public/assets/app-development-images/apple-icon.svg";
import mobileIconcon from "../../../public/assets/app-development-images/mobile-icon.svg";
import developmentIcon from "../../../public/assets/app-development-images/development-icon.svg";
import integrationIcon from "../../../public/assets/app-development-images/integration-icon.svg";
import debbugingIcon from "../../../public/assets/app-development-images/debbuging-icon.svg";
import appStoreIcon from "../../../public/assets/app-development-images/app-store.svg";
import nativeIconOne from "../../../public/assets/app-development-images/native-icon-one.svg";
import nativeIconTwo from "../../../public/assets/app-development-images/native-icon-two.svg";
import nativeIconThree from "../../../public/assets/app-development-images/native-icon-three.png";
import nativeIconFour from "../../../public/assets/app-development-images/native-icon-four.svg";
import nativeIconFive from "../../../public/assets/app-development-images/native-icon-five.svg";
import nativeIconSix from "../../../public/assets/app-development-images/native-icon-six.svg";
import androidBannerImg from "../../../public/assets/app-development-images/android-banner.webp";
import androidBannerBg from "../../../public/assets/app-development-images/app-hire-banner.webp";
import iosBannerImg from "../../../public/assets/app-development-images/ios-hire-img.webp";
import nativeBannerImg from "../../../public/assets/app-development-images/native-banner-img.webp";
import pwaBannerImg from "../../../public/assets/app-development-images/pwa-banner-img.webp";
import androidBgImg from "../../../public/assets/android-app-bg.webp";
import androidContactbannerImg from "../../../public/assets/app-development-images/contact-app-img.webp";
import androidContactbannerBg from "../../../public/assets/app-development-images/contact-app-bg.webp";
import iosContactbannerBg from "../../../public/assets/app-development-images/ios-contact-img.webp";
import nativeContactbannerImg from "../../../public/assets/app-development-images/react-native-contact-img.webp";
import nativeContactbannerBg from "../../../public/assets/app-development-images/react-native-contact-bg.webp";
import maintenanceContactbannerImg from "../../../public/assets/app-development-images/maintanance-contact-img.webp";
import maintenanceContactbannerBg from "../../../public/assets/app-development-images/maintanance-contact-bg.webp";
import { IAccordionItem } from "@/components/Homepage/FAQ";
import { StaticImageData } from "next/image";

export const pagesData: Record<
  string,
  {
    hero: {
      title: { text: string; color: string }[];
      description: { text: string; color: string }[];
      image: StaticImageData | string;
      bgImage?: StaticImageData | string;
    };
    solutions: {
      headingText: string;
      subHeadingText: string;
    };
    points: string[];
    heading?: { text: string; color: string }[];
    featuresData: {
      imgSrc: StaticImageData | string;
      title: string;
      description: string;
    }[];
    tabs: {
      headingText: string;
      subHeadingText: string;
      tabs: {
        title: string;
        description: string;
        image: StaticImageData | string;
      }[];
    };
    utilisArr: {
      image: StaticImageData | string;
      category: string;
      title: string;
      desc: string;
    }[];
    processSteps: {
      headingText: string;
      subHeadingText: string;
      steps: {
        title: string;
        description: string;
        position: "left" | "right";
        number: number;
      }[];
    };
    seo: {
      title: string;
      description: string;
      keywords: string;
      canonical: string;
      ogImage: string;
    };

    slides: { image: StaticImageData | string; title: string; desc: string }[];
    accordionData: IAccordionItem[];

    banner?: {
      headingText: { text: string; color?: string }[];
      subHeadingText?: { text: string; color?: string }[];
      image: StaticImageData | string;
      imageHeight?: string;
      bgImage?: StaticImageData | string;
    };

    quoteBanner?: {
      headingText: { text: string; color?: string }[];
      subHeadingText?: { text: string; color?: string }[];
      image?: StaticImageData | string;
      bgImg: StaticImageData | string;
      buttonText?: string;
    };
  }
> = {
  // ✅ ANDROID APP DEVELOPMENT
  "android-app-development-service": {
    hero: {
      title: [
        {
          text: "  Android Application  Development",
          color: "text-gradient",
        },
        {
          text: " Service in India",
          color: "text-gradient",
        },
      ],
      description: [],
      image: androidImg,
      bgImage: androidBgImg,
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
    points: [
      "Android is the most popular mobile phone operating system in the world, with an estimated 4.5 billion users worldwide. Our native Android development service in India can help your business develop applications that allow you to reach that humongous audience. Every day, over 250 million Android apps are downloaded globally. With Moonstack’s custom Android application development in India, we can help you build apps that meet your customer’s needs, while meeting your business goals and technical requirements.",
      "Thanks to our years of experience building industry-defining Android apps with intuitive UI/UX, secure backend support, and detailed functionality, we are proudly among the top Android app development company in India. Our experience encompasses building high-performance Android applications from concepts for startups to building highly complex enterprise Android apps for major MNCs. ",
      "So, whether you need a simple on-demand Android app or one with full e-commerce functionality, Moonstack can help you build your dream concept into a scalable Android app as the most secure Android app development company in India.",
    ],
    solutions: {
      headingText: "Our Specialities",
      subHeadingText:
        "Android app development goes through different stages of work. As the premier Android app development agency in India, Moonstack offers specialised services for Android app development for businesses in India. Here is a detailed look at our Android app development services in India.",
    },
    featuresData: [
      {
        imgSrc: android,
        title: "UI/UX Design For Android Applications",
        description:
          "Moonstack works with the best Android app developers in India to create consistent, clean, and intuitive UI designs for any app we build. We work with the top designers to create a front-end design that’s visually appealing and integrates the client’s brand image, creating a truly custom Android application for our clients. This level of attention to detail allows us to rank as the top Android UI/UX designing service in India.",
      },
      {
        imgSrc: apiIcon,
        title: "Backend Development & API Integrations",
        description:
          "The functionality and security of apps developed by Moonstack are unparalleled due to two factors. We build a robust backend framework for all applications we develop from scratch. And to help our apps function optimally, sync data automatically, and improve the app’s responsiveness and functionality across devices, we use trusted third-party APIs. These practices power us as the top Android app development firm in India.",
      },
      {
        imgSrc: codeIcon,
        title: "Cross-Platform Development & Clean Code Embedding",
        description:
          "As a part of our Android app development for startups in India, our team offers proficient cross-platform app development services. Our cross-platform development services are powered by Flutter, Dart, and Native React, which allows us to build Android apps that are compatible across devices and platforms using a single codebase. What sets our services apart is the use of clean code in our development process.",
      },
      {
        imgSrc: testingIcon,
        title: "Code Testing, Debugging, & Troubleshooting",
        description:
          "Moonstack offers one of the most comprehensive Android app testing services in India. This is one of the areas where we leave no stone unturned to ensure that your app is adequately prepared for its launch with no glitches or bugs that hamper the functionality of your app. Our testing services are reliable as every app we develop goes through a rigorous three-step, functional, performance, and device testing process before launch.",
      },
      {
        imgSrc: playstoreIcon,
        title: "Play Store Deployment",
        description:
          "Once the Android applications are ready, we help our clients deploy the apps to the Play Store and even optimize their listing for easy access by users. All of this comes standard as a part of our premier and affordable Android app development service in India. ",
      },
      {
        imgSrc: settingIcon,
        title: "Android App Maintenance & Support",
        description:
          "As a top Android software development company in India, our work doesn’t end with Play Store deployment. We also offer detailed services for Android app support and maintenance in India. This includes optimising the apps for post-launch performance, checking performance analytics, and offering periodic app maintenance for Android compatibility and app security. We also offer Android app migration services in India as a part of our extended app maintenance and support services.",
      },
    ],
    tabs: {
      headingText: "Why Choose Us?",
      subHeadingText:
        "Still wondering if you should avail our Android app development service in India? Here are six reasons why we’re your best choice for an Android app development agency.",
      tabs: [
        {
          title: "Custom Solutions:",
          description:
            "At Moonstack, we ensure every app is built specifically as per our client’s requirements. This means even if you want a specific functionality in your Android app that’s generally not standard in your market, we can make it for you, no questions asked.",
          image: androidIcon,
        },
        {
          title: "End-to-End Solutions:",
          description:
            "We offer complete Android app development support from frameworking, UI/UX design, backend development, to app testing and launch support.",
          image: figmaIcon,
        },
        {
          title: "Highly Qualified Developers: ",
          description:
            " Our development team at Moonstack is led by highly qualified developers and designers with years of real-world professional experience.",
          image: reactIcon,
        },
        {
          title: "Focus on User Intent:",
          description:
            " There’s an innate focus on user intent in our Android app development services in India. We ensure every app we build is practical in terms of design and engaging for users ",
          image: reactIcon,
        },
        {
          title: "Production Transparency: ",
          description:
            "Our enterprise Android app solutions in India always come with maintenance and post-launch support to ensure your app is functioning optimally and doesn’t have any compatibility issues moving forward.",
          image: reactIcon,
        },
        {
          title: "Maintenance & Support:  ",
          description:
            "Our enterprise Android app solutions in India always come with maintenance and post-launch support to ensure your app is functioning optimally and doesn’t have any compatibility issues moving forward.",
          image: reactIcon,
        },
      ],
    },
    utilisArr: [
      {
        image: androidIcon,
        category: "Mobile App",
        title: "Android Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: iosIcon,
        category: "Mobile App",
        title: "iOS Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: reactIcon,
        category: "Mobile App",
        title: "React Native App Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: flutterIcon,
        category: "Mobile App",
        title: "Flutter",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: pwaIcon,
        category: "Mobile App",
        title: "PWA Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: swiftIcon,
        category: "Mobile App",
        title: "Swift",
        desc: "At Moonstack, we believe in building technology.",
      },
    ],
    processSteps: {
      headingText: "Our Process",
      subHeadingText:
        "Moonstack values privacy and transparency as one of the top Android app development agencies in India. Here’s a brief overview of how our Android app development services in India take shape from concept to launch.",
      steps: [
        {
          number: 1,
          position: "left",
          title: "Consultation & Discussion",
          description:
            "Our consultation and discussion sessions are highly productive as we help our clients realise their app idea into a working development plan. But first, we also ensure our clients get a signed NDA from our end, ensuring their app ideas are safe with us. We follow a stringent process of understanding our client’s vision to help them turn that into an idea that’s built specifically to their purpose.",
        },
        {
          number: 2,
          position: "right",
          title: "App Framework & UI/UX Design",
          description:
            "Once we have a plan for what the app is going to be, our first job is to create a framework for the app, going into every detail to understand the scope of development. Then we move into the UI/UX development phase as a part of our Android UI/UX designing service in India to create clean and intuitive designs that are in line with the client’s brand image.",
        },
        {
          number: 3,
          position: "left",
          title: "Custom Backend Development & Integrations",
          description:
            "For complex enterprise Android app solutions in India, Moonstack goes into great detail to develop the complete codebase from scratch. This allows us to have complete control over the application, preventing glitches and bugs from hampering functionality. It also helps us keep the application and its data secure, which is crucial for large-scale enterprise Android apps.",
        },
        {
          number: 4,
          position: "right",
          title: "Testing, Launch, & Support",
          description:
            "Lastly, our Android app testing services in India, led by experienced app testers and engineers, allow us to optimise the app’s performance and fix any performance issues or bugs. This completes the development process, post which we offer launch support, including deployment of the Android application to Google’s Play Store, and post-launch support.",
        },
      ],
    },

    slides: [
      {
        image: SliderOne,
        title: "Web Designing",
        desc: "Earney is a financial solution Our UI design approach focuses on creating.",
      },
      {
        image: SliderTwo,
        title: "Mobile Development",
        desc: "Earney is a financial solution...",
      },
      {
        image: SliderThree,
        title: "Cloud Service",
        desc: "Earney is a financial solution...",
      },
      {
        image: SliderOne,
        title: "Web Designing",
        desc: "Earney is a financial solution Our UI design approach focuses on creating.",
      },
      {
        image: SliderFour,
        title: "Frontend Development",
        desc: "Earney is a financial solution...",
      },
      {
        image: SliderFive,
        title: "Backend Development",
        desc: "Earney is a financial solution...",
      },
    ],
    accordionData: [
      {
        title: "How much does Android app development cost in India?",
        desc: "The actual development cost of an Android app depends on the app’s purpose, technology stack, features, and scale. For a quick quotation, feel free to reach out to our team at Moonstack.",
      },
      {
        title: "Will AI replace Android developers in India?",
        desc: "No, while AI is gradually becoming a good tool that can assist developers, it is not advanced enough to replace Android developers in India.",
      },
      {
        title: "Which is the best Android app development company in India?",
        desc: "Moonstack. We pride ourselves on being the best Android app development company in India, thanks to our years of experience developing popular Android apps that are downloaded and loved by millions of users.",
      },
      {
        title: "Can Moonstack develop Android e-commerce applications?",
        desc: "Yes, we can help you build completely custom e-commerce Android applications, complete with payment gateway integration and even chat support.",
      },
      {
        title: "How long does it take to develop an Android app?",
        desc: "The timeline for app development depends on various factors; however, the development process can generally take between a few weeks to a few months, based on underlying factors.",
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
      bgImage: androidBannerBg,
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
      bgImg: androidContactbannerBg,
      buttonText: "Connect with us",
    },
  },

  // ✅ iOS APP DEVELOPMENT
  "iOS-app-development-service": {
    hero: {
      title: [
        {
          text: "IOS App Development Services in India",
          color: "text-gradient",
        },
      ],
      description: [
        {
          text: "",
          color: "text-white",
        },
      ],
      image: iosImg,
      bgImage: androidBgImg,
    },
    seo: {
      title: "IOS App Development Company in India & USA | Moonstack",
      description:
        "Searching for expert IOS app developers in India? Moonstack designs and builds iPhone and iPad apps with pixel‑perfect UI and App Store–ready performance. Call Now!",
      keywords:
        " iOS app development Service India, iOS app development company India, Best iOS app developers India,  Custom iOS application development service India",
      canonical:
        "https://www.moonstack.com/android-app-development-service/iOS-app-development-service",
      ogImage: "/opengraph-image.png",
    },
    heading: [
      {
        text: "Build iOS Apps for Every Apple Screen With Moonstack:",
        color: "text-white",
      },
    ],
    points: [
      "With Moonstack, you can build iOS apps that seamlessly function across every Apple device responsively. As the top iOS app development agency in India, we ensure multi-device compatibility for our iOS apps, including Macs, iPhones, iPads, and even Apple Watches. The Apple device ecosystem is vast, with new products added to it every few years. This is why our custom iOS application development service in India allows businesses to stay on top of the newest iOS and Apple trends and scale their businesses exponentially.",
      "The number of Apple users is growing rapidly in India rapidly with most users choosing iPhones over Android devices for a premium mobile experience. Brands that have taken note of this trend and invested in iPhone application development services in India have benefited exponentially. As the premier iOS app development company in India, choosing Moonstack can help you develop a truly custom, secure, responsive, and scalable iOS app that suits your every business goal.",
      "With over 15 years of experience and 450+ completed projects, we have worked with a range of businesses right from startups to enterprises. Our iOS application consulting services in India are highly specialised and built to suit your needs. Contact us, and we can help you build your dream app starting today",
    ],
    solutions: {
      headingText: "Our Specialities",
      subHeadingText:
        "We are proud to work with the best iOS app developers in India, and here’s a selection of what we offer to help you understand our team's strength and expertise.",
    },
    featuresData: [
      {
        imgSrc: appleIcon,
        title: "iOS App Consultation & Strategy",
        description:
          "Building an iOS application is a long process, which involves first understanding your business goals and formulating how to create an application that fits your needs. Luckily, when you choose Moonstack, the best iOS app development service in India, you don’t have to make these decisions alone. Our team of highly qualified developers helps you create a framework that helps you visualise exactly how the app functionality will work, as well as the entire development structure. This attention to detail helps us rank as the top iOS app development firm in India.",
      },
      {
        imgSrc: mobileIconcon,
        title: "Custom iOS App Development",
        description:
          "Our iOS mobile app development services in India at Moonstack are always keeping in mind the stringent quality standards of Apple. We not only follow these standards, but also ensure your application performs seamlessly across different iOS devices. Our native iOS app development service in India focuses on complete custom iOS app development for our clients, including developing the entire codebase from scratch using clean code.",
      },
      {
        imgSrc: developmentIcon,
        title: "Front-end Development With Intuitive UI/UX Design",
        description:
          "An intuitive UI and UX design is crucial for an iOS application’s success in 2025. We at Moonstack ensure our iOS app designing service in India is focused on designing clean interfaces that are easy to navigate and visually soft. We try to develop unique design languages for each app based on our client’s branding and market positioning. We also integrate accessibility in our designs to make the apps convenient for all users.",
      },
      {
        imgSrc: integrationIcon,
        title: "iOS App Integrations & 3rd Party API Deployment",
        description:
          "When you hire iOS app developers in India through Moonstack, we always take care of two things in the backend of every app. First, we ensure the app is connected to third-party platforms for monitoring of analytics and user request fulfilment. Secondly, we guarantee there’s secure connectivity with APIs to ensure a smooth and seamless application user experience. Our API calls are adequately marked in code to ensure it's easy to recheck or debug later if required.",
      },
      {
        imgSrc: debbugingIcon,
        title: "iOS App Testing & Debugging",
        description:
          "Once the developmental phase is complete, our QA engineers at Moonstack ensure there are no bugs or glitches in the app’s code or functioning. We ensure the app runs smoothly across Apple devices and it's able to perform fast, have proper user data security, and be responsive across different screen sizes. This is the testament to our service and what makes us the best iOS app testing company in India.",
      },
      {
        imgSrc: appStoreIcon,
        title: "App Store Deployment & Post-launch Support",
        description:
          "Most agencies that offer iOS app development skim on the post-launch support and app maintenance parts, but not us. At Moonstack, we pride ourselves on our iOS app support and maintenance services in India. We provide iOS app migration services in India to ensure your application is compatible with the latest iOS releases. This, along with our App Store deployment and optimisation of your listing, guarantees you get end-to-end iOS app development service when you choose Moonstack.",
      },
    ],

    tabs: {
      headingText: "Why Choose Us?",
      subHeadingText:
        "If you wanted to know what sets our iPad app development service in India apart, here are six reasons to help you get started.",
      tabs: [
        {
          title: "450+ Real World Project Experience:",
          description:
            "We’ve developed over 450 projects in the span of 15 years as the top iOS app development company in India.",
          image: androidIcon,
        },
        {
          title: "Truly Custom App Builds:",
          description:
            "We create apps from scratch for our clients that are suited to their requirements. No templates, no starter packs.",
          image: figmaIcon,
        },
        {
          title: "User Experience Centric Design: ",
          description:
            " We always ensure you’re a part of the team when you work with Moonstack. Our developers use clean code to guarantee the codebase is accessible, and we provide regular updates so you’re always up-to-date with developments.",
          image: reactIcon,
        },
        {
          title: "Transparent Building:  ",
          description:
            "  We always ensure you’re a part of the team when you work with Moonstack. Our developers use clean code to guarantee the codebase is accessible, and we provide regular updates so you’re always up-to-date with developments.",
          image: reactIcon,
        },
        {
          title: "Scalable Builds For Growing Businesses: ",
          description:
            "We create scalable apps that can adapt to the growing needs of a successful business. And we always offer ongoing support for builds to all our clients.",
          image: reactIcon,
        },
      ],
    },
    utilisArr: [
      {
        image: swiftIcon,
        category: "Mobile App",
        title: "Swift",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: iosIcon,
        category: "Mobile App",
        title: "Objective-C",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: reactIcon,
        category: "Mobile App",
        title: "XCTest / XCUITest",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: flutterIcon,
        category: "Mobile App",
        title: "Node.js / Express",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: pwaIcon,
        category: "Mobile App",
        title: "AWS Amplify",
        desc: "At Moonstack, we believe in building technology.",
      },
    ],
    processSteps: {
      headingText: "Our Process",
      subHeadingText:
        "At Moonstack, we value transparency and confidentiality for our enterprise iOS app development services in India. Our team manages this dichotomy with a stringent set of guidelines and a working structure. Here’s an overview of our collaborative process for iOS app development at Moonstack.",
      steps: [
        {
          number: 1,
          position: "left",
          title: "Strategy Discussion & Frameworking",
          description:
            "Our initial discussions with you start productively with a clear understanding of your requirements. We sign an NDA upfront to ensure you have confidence in our professionalism. This also ensures your app idea is safe with Moonstack. Next, we ask you relevant questions to better understand the functionality and purpose of the app. Once that’s done, our team begins work from day one, and we start creating a framework for your app.",
        },
        {
          number: 2,
          position: "right",
          title: "Design Flow & Prototyping",
          description:
            "After the framework is approved, we create a design flow to logically lay out the navigation of the application. This is also done to optimise the UX of the application, ensuring the application is easy to navigate and accessible to all users. Each design prototype is approved by your team to ensure you’re always up-to-date with the production process. ",
        },
        {
          number: 3,
          position: "left",
          title: "Customisation, Development, & Testing",
          description:
            "The development process involves completing the design and connecting your applications to relevant external platforms and APIs to complete their functionality. We ensure each app is coded from scratch and there’s clean code in the codebase to ensure it's accessible to the client team on demand.",
        },
        {
          number: 4,
          position: "right",
          title: "Launch & Future Maintenance",
          description:
            "At Moonstack, our affordable iOS app development services in India include complete launch support and future maintenance of your application. We ensure your app is easy to find on the App Store, along with maintenance support for future iOS upgrades. For any future feature upgrades, clients can always avail our iOS app upgrade services in India as well.",
        },
      ],
    },
    slides: [
      {
        image: SliderOne,
        title: "Web Designing",
        desc: "Earney is a financial solution Our UI design approach focuses on creating.",
      },
      {
        image: SliderTwo,
        title: "Mobile Development",
        desc: "Earney is a financial solution...",
      },
      {
        image: SliderThree,
        title: "Cloud Service",
        desc: "Earney is a financial solution...",
      },
      {
        image: SliderOne,
        title: "Web Designing",
        desc: "Earney is a financial solution Our UI design approach focuses on creating.",
      },
      {
        image: SliderFour,
        title: "Frontend Development",
        desc: "Earney is a financial solution...",
      },
      {
        image: SliderFive,
        title: "Backend Development",
        desc: "Earney is a financial solution...",
      },
    ],
    accordionData: [
      {
        title: "How much does it cost to develop an iOS app in India?",
        desc: "The development cost is determined based on multiple factors such as the build platform and app purpose, and functionality. If you want a detailed quote, you can contact our team at Moonstack, and we can offer a free quotation to you for your iOS app build.",
      },
      {
        title: "Who is the best iOS app developer in India?",
        desc: "If you’re going by the iOS app developer that provides the most value to their clients as part of their affordable iOS app development services in India? It's Moonstack.",
      },
      {
        title: "Are iOS devs in demand?",
        desc: "Yes, as Apple users are exponentially growing in India with the launch of every new iPhone, iOS devs are more in demand now than ever before. This is because most apps want to capitalise on the growing premium mobile user base in India that uses Apple products with their premium apps and services.",
      },
      {
        title: "Which language is best for iOS development?",
        desc: "iOS app development is best done using Swift and Swift UI platforms that are specifically built for iOS app development. We use both Swift as well as other specialised iOS build platforms at Moonstack to develop specialised and responsive iOS applications.",
      },
      {
        title: "Can Moonstack help us upgrade an existing iOS application?",
        desc: "Yes, you can easily avail of our iOS app upgrade services in India. Simply contact us through our website, and we will help you get started as soon as possible.",
      },
    ],

    banner: {
      headingText: [
        {
          text: "Opt for your custom IOS app development services now",
          color: "text-white",
        },
      ],
      subHeadingText: [
        {
          text: "IOS app development  services goes through different stages of work.",
          color: "text-white",
        },
      ],
      image: iosBannerImg,
      bgImage: androidBannerBg,
    },
    quoteBanner: {
      headingText: [
        {
          text: "Develop an Optimised Proof of Concept With Our iOS App Development for Startups in India",
          color: "text-white",
        },
      ],
      subHeadingText: [
        {
          text: "Build investor confidence with a proof-of-concept iOS application with our iOS app development services in India. ",
          color: "text-white",
        },
      ],
      bgImg: iosContactbannerBg,
      buttonText: "Connect with us",
    },
  },

  // ✅ REACT NATIVE
  "react-native-app-development-service": {
    hero: {
      title: [
        {
          text: " React Native Development Service in India ",
          color: "text-gradient",
        },
      ],
      description: [
        {
          text: "",
          color: "text-white",
        },
      ],
      bgImage: androidBgImg,
      image: reactNativeImg,
    },
    seo: {
      title: " React Native App Development Company in India & USA | Moonstack",
      description:
        "Want a cross‑platform app built with React Native? Moonstack helps Companies in India & USA ship fast, stable React Native apps for Android and iOS from a single codebase.",
      keywords:
        "React Native app development Service India, React Native app development company India,  Best React Native app developers India, React Native developers India",
      canonical:
        "https://www.moonstack.com/android-app-development-service/react-native-app-development-service",
      ogImage: "/opengraph-image.png",
    },
    points: [
      "In 2025, we recommend our cross-platform app development service in India to all our clients. Dedicated and separate native development of both platforms can be excessively time-consuming, expensive, and offer a different user experience to users across different platforms. That’s why we develop custom React Native applications in India that function seamlessly across Android and iOS devices as they feature the same codebase.",
      "In 2025, we recommend our cross-platform app development service in India to all our clients. Dedicated and separate native development of both platforms can be excessively time-consuming, expensive, and offer a different user experience to users across different platforms. That’s why we develop custom React Native applications in India that function seamlessly across Android and iOS devices as they feature the same codebase.",
    ],
    solutions: {
      headingText: "Our Specialities",
      subHeadingText:
        "What makes Moonstack the top React Native development agency in India? It is our focus on specialised services that are built to offer maximum value to our clients. Here’s a peek at what we offer as part of our services for React Native mobile solutions in India.",
    },
    featuresData: [
      {
        imgSrc: nativeIconOne,
        title: "Cross-Platform App Development",
        description:
          "The most important part of React Native app development is working on cross-platform compatibility. That’s why we at Moonstack hire the top React Native developers in India who have real-world experience in React Native building. This allows us to create apps that offer seamless access to users across platforms like Web, Android, and iOS.",
      },
      {
        imgSrc: nativeIconTwo,
        title: "Custom App Design & Development",
        description:
          "At Moonstack, we take custom development very seriously. As the best affordable React Native development service in India, we provide more value than any other agency by creating entire codebases from scratch. This helps our applications have fewer bugs or glitches because our team is familiar with the entire codebase. So, if you want to hire React Native developers in India, choose Moonstack to build with confidence.",
      },
      {
        imgSrc: nativeIconThree,
        title: "Cross-Platform UX Design",
        description:
          "When applications are built natively and independently of each other, they can have vastly different UIs and UX for users. This is not good for brand consistency, and that’s why always prioritise cross-platform UX while building apps. Our key design strategy as the top company for React Native UI/UX design in India is to build apps that are accessible, easily navigable, and suit our clients’ brand image across platforms. This focus on cross-platform accessibility is the reason we’re the top React Native developers in India.",
      },
      {
        imgSrc: nativeIconFour,
        title: "Clean Backend Code & API Integrations",
        description:
          "Cross-platform builds come with their significant challenges of maintaining the privacy, security, and quality standards of every platform. So, it is crucial to have clean backend code in cross-platform apps for added security and a lower risk of data breach. This is something we always follow as the top agency with React Native developers for startups in India.",
      },
      {
        imgSrc: nativeIconFive,
        title: "Launch Support & Future Maintenance",
        description:
          "Our React Native maintenance services in India are robust and offer complete launch support for every app we build. We ensure your apps are deployed in the respective Play Store and App Store with optimised listing pages for search engine performance. Our services also include future maintenance and compatibility coverage for future Android and iOS versions.",
      },
      {
        imgSrc: nativeIconSix,
        title: "React Native Migration",
        description:
          "We offer a full-fledged React Native migration service in India as well for businesses that have existing applications and just want to migrate them to React Native for seamless cross-platform functionality and accessibility. Our services improve the app’s performance and ensure the applications are scalable for future expansions. It also helps reduce long-term costs associated with Native app development, maintenance, and updates.",
      },
    ],
    tabs: {
      headingText: "Why Choose Us?",
      subHeadingText:
        "Moonstack is the premier React Native development agency in India, and here are six ways we offer more value to our clients than the competition.",

      tabs: [
        {
          title: "15 Years of Industry Experience",
          description:
            "We have 15+ years of hands-on experience at Moonstack. Our expertise ranges across industries with a solid track record of helping businesses scale with our app development services.",
          image: androidIcon,
        },
        {
          title: "Truly Custom App Builds",
          description:
            "Moonstack delivers completely custom app builds made from scratch by our experienced React Native developers. We never use templates or shortcuts when it comes to client projects.",
          image: figmaIcon,
        },
        {
          title: "End-to-end Service",
          description:
            "We provide complete development solutions for startups and enterprises, from developing a proof-of-concept to deploying complete cross-platform React Native applications to app stores.",
          image: reactIcon,
        },
        {
          title: "Experienced Team",
          description:
            "We work with the top React Native developers in India. Our team functions as one with industry-leading experts from each field collaborating to build top-tier React Native applications.",
          image: androidIcon,
        },
        {
          title: "Client-Centric Approach",
          description:
            "Our focus on every project is to create applications that fit our client’s business goals without fail.",
          image: figmaIcon,
        },
        {
          title: "Quick Development Timeline",
          description:
            "Our React Native app development services in India offer a quick development timeline thanks to our team’s experience and React Native’s multi-platform building capabilities.",
          image: reactIcon,
        },
      ],
    },
    utilisArr: [
      {
        image: androidIcon,
        category: "Mobile App",
        title: "JavaScript / TypeScript",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: iosIcon,
        category: "Mobile App",
        title: "Visual Studio Code",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: reactIcon,
        category: "Mobile App",
        title: "Android Studio",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: flutterIcon,
        category: "Mobile App",
        title: "Redux Toolkit",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: pwaIcon,
        category: "Mobile App",
        title: "Zustand / Jotai",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: swiftIcon,
        category: "Mobile App",
        title: "React Query",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: angularIcon,
        category: "Frontend",
        title: "React Navigation",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: reactIcon,
        category: "Frontend",
        title: "Axios",
        desc: "At Moonstack, we believe in building technology.",
      },
    ],
    processSteps: {
      headingText: "Our Process",
      subHeadingText:
        "Moonstack is the trusted partner for React Native enterprise app development in India across industries. Our success can be attributed to our working process, which is built around transparency and confidentiality. What sets us apart? Find out here.",
      steps: [
        {
          number: 1,
          position: "left",
          title: "Crucial Pre-Work Formalities",
          description:
            "When you choose Moonstack, we want to build a relationship with our clients that’s built around mutual trust. So, along with our project contract, we also provide a signed NDA from our side to the client, offering complete secrecy for their app idea when and after they’re working with us. This is the most crucial part of our working partnership with every client.",
        },
        {
          number: 2,
          position: "right",
          title: "Idea Discussion & Scope of Work",
          description:
            "Once the formalities are complete, we extensively discuss the app idea with our clients, trying to understand their requirements, the app’s goal and functionality. We also create a visual framework for the app’s navigation and functioning that will allow the client to clearly see their idea laid out and green signal for final production.",
        },
        {
          number: 3,
          position: "left",
          title: "App Design & Development",
          description:
            "During production as a part of our service for React Native prototype development in India, we create a proof of concept or Minimum Viable Product for our clients. It helps them stay up-to-date with our production process. This also helps us make changes and add features on a regular basis without disrupting the workflow or causing errors in the code.",
        },
        {
          number: 4,
          position: "right",
          title: "Launch and Post-launch Support",
          description:
            "After the development and testing, we complete our React Native app performance optimisation in India to the gleaming approval of our clients. Post development, it's just about deploying the application on relevant app stores and optimising the listing for better search engine indexing. We also offer detailed post-launch support and app maintenance services.",
        },
      ],
    },
    slides: [
      {
        image: SliderOne,
        title: "Web Designing",
        desc: "Earney is a financial solution Our UI design approach focuses on creating.",
      },
      {
        image: SliderTwo,
        title: "Mobile Development",
        desc: "Earney is a financial solution...",
      },
      {
        image: SliderThree,
        title: "Cloud Service",
        desc: "Earney is a financial solution...",
      },
      {
        image: SliderOne,
        title: "Web Designing",
        desc: "Earney is a financial solution Our UI design approach focuses on creating.",
      },
      {
        image: SliderFour,
        title: "Frontend Development",
        desc: "Earney is a financial solution...",
      },
      {
        image: SliderFive,
        title: "Backend Development",
        desc: "Earney is a financial solution...",
      },
    ],
    accordionData: [
      {
        title:
          "Which is the best React Native app development company in India?",
        desc: "Moonstack is the best React Native app development company in India. We have 15 years of experience and have completed 450+ app development projects. We have thorough experience in React Native development and offer affordable React Native development services in India.",
      },
      {
        title: "Which popular apps have been built using React Native?",
        desc: "Many of the popular apps that you use on a daily basis have been developed using React Native, starting with the biggest names such as Facebook, Instagram, Twitter, and Netflix.",
      },
      {
        title: "Which is better, React Native or Flutter?",
        desc: "Both platforms are very strong and offer excellent cross-platform development access. The one you choose depends largely on your requirements and preferences.",
      },
      {
        title: "Are React Native apps secure and bug-free?",
        desc: "Yes, as the platform that was used to build multi-billion dollar applications like Facebook, Instagram, and Twitter, it is safe to say React Native apps can be safe and bug-free. Especially when you work with the right agency like Moonstack.",
      },
      {
        title:
          "Is it better to choose Native app development or React Native app development?",
        desc: "Native app development offers more system-specific development features, while React Native focuses on cross-platform compatibility. Each has its pros and cons; the better option depends solely on your requirements.",
      },
    ],

    banner: {
      headingText: [
        {
          text: "Opt for your custom React Native services now",
          color: "text-white",
        },
      ],
      subHeadingText: [
        {
          text: "React Native  services goes through different stages of work.",
          color: "text-white",
        },
      ],
      image: nativeBannerImg,
      bgImage: androidBannerBg,
      imageHeight: "md:w-[412px]",
    },
    quoteBanner: {
      headingText: [
        {
          text: "Scale Your Business  With Our React Native eCommerce Apps Development in India",
          color: "text-white",
        },
      ],
      subHeadingText: [
        {
          text: "We can help you expand the reach of your e-commerce business with our multi-platform React Native app development service in India.  ",
          color: "text-white",
        },
      ],
      image: nativeContactbannerImg,
      bgImg: nativeContactbannerBg,
      buttonText: "Connect with us",
    },
  },

  // ✅ PWA
  "pwa-development-service": {
    hero: {
      title: [
        { text: "PWA Development Service in India", color: "text-gradient" },
      ],
      description: [
        {
          text: "",
          color: "text-white",
        },
      ],
      image: pwaImg,
      bgImage: androidBgImg,
    },
    seo: {
      title: "Progressive Web App (PWA) Development in India & USA | Moonstack",
      description:
        " Build fast, installable PWAs that work offline, feel native, and boost conversions across devices with our expert PWA development team. Request a PWA strategy session.",
      keywords:
        "PWA development service India, PWA development company India,  Progressive web app development service India,  Hire PWA developer in India",
      canonical:
        "https://www.moonstack.com/android-app-development-service/ PWA-development-service",
      ogImage: "/opengraph-image.png",
    },
    heading: [
      { text: "Create Dynamic PWAs With Moonstack", color: "text-white" },
    ],
    points: [
      "Moonstack offers highly advanced PWA solutions in India. Progressive Web Apps provide the benefits of app-like cross-platform performance and responsiveness to any device right from the user’s web browser. This is what makes them the hottest development asset in the market today. At Moonstack, we have the best PWA developers in India who can help you build consistent, functional, and reliable web apps.",
      "Moonstack offers highly advanced PWA solutions in India. Progressive Web Apps provide the benefits of app-like cross-platform performance and responsiveness to any device right from the user’s web browser. This is what makes them the hottest development asset in the market today. At Moonstack, we have the best PWA developers in India who can help you build consistent, functional, and reliable web apps.",
    ],
    solutions: {
      headingText: "Our Specialities",
      subHeadingText:
        "As the top PWA development company in India, Moonstack has significant experience with PWA development, design, deployment, and maintenance. Here’s an overview of the different speciality services that make up our PWA development service in India.",
    },
    featuresData: [
      {
        imgSrc: revenue,
        title: "Custom PWA Development",
        description:
          "Our custom PWA development services are some of the most affordable PWA development services in India. We ensure each aspect of your PWA is optimised for speed and performance across devices with custom code that’s built as per your business requirements and not templates.",
      },
      {
        imgSrc: revenue,
        title: "PWA Migration",
        description:
          "Our PWA migration services in India are curated to help businesses transform existing applications into full-featured PWAs. We ensure each application has its unique set of features, while being perfectly compliant across devices and platforms. Best of all? Our service retains the existing design and data seamlessly.",
      },
      {
        imgSrc: revenue,
        title: "Secure PWA Development",
        description:
          "Backend security is one of the most crucial aspects of PWA development. That’s why we offer the most trusted secure PWA development service in India at Moonstack. We ensure your code is secure, and specifically, user information and backend data are safe against breaches.",
      },
      {
        imgSrc: revenue,
        title: "Fast Loading PWA Development",
        description:
          "Fine-tuning the performance of a PWA we’re developing is a major part of our backend process. That’s why we’re the premier provider of fast-loading PWA development service in India. We take loading time very seriously while ensuring that our responsive PWA development service in India is able to offer a holistic solution to our clients.",
      },
      {
        imgSrc: revenue,
        title: "UI/UX Design for PWAs",
        description:
          "Creating a web app with an immaculate user experience is at the cornerstone of our PWA design and development services in India at Moonstack. We ensure clean navigation and accessibility in all apps we develop across devices, ensuring perfect harmony with our cross-platform PWA development services in India.",
      },
      {
        imgSrc: revenue,
        title: "QA & Deployment",
        description:
          "Whether it is deployment assistance and rigorous testing, if you’re looking to hire PWA developers in India, Moonstack can be your help. We handle the entire PWA lifecycle to ensure your app is performing optimally at all times.",
      },
    ],

    tabs: {
      headingText: "Why Choose Us?",
      subHeadingText:
        "From offering PWA development for startups in India to developing enterprise PWA solutions, Moonstack has done it all. If you’re still not convinced, here are six reasons why you must choose Moonstack for all your PWA development requirements.",
      tabs: [
        {
          title: "Custom Business Solutions",
          description:
            "We provide tailored services that are custom-built for your business, keeping your requirements in mind. Everything is custom-built from scratch, just for you.",
          image: androidIcon, // replace with a relevant icon if available
        },
        {
          title: "Performance Focused Architecture",
          description:
            "Our development process at Moonstack focuses on optimising code to ensure the app is fast and offers smooth navigation across devices.",
          image: figmaIcon,
        },
        {
          title: "Ensemble Developers",
          description:
            "We work with a team of the most experienced and talented developers with multi-platform development experience. Our experienced team always delivers native app-like performance for PWAs.",
          image: reactIcon,
        },
        {
          title: "Scalable Solutions",
          description:
            "Scalability is a factor that limits many PWAs. This is why we always build our PWAs on scalable platforms, which allow future expansion without complete redevelopment.",
          image: androidIcon,
        },
        {
          title: "24/7 Support",
          description:
            "Need to discuss updates regarding your project? Our team is always available to discuss and talk to you. Never be in the dark when you choose Moonstack.",
          image: figmaIcon,
        },
        {
          title: "Proven Experience Across Industries",
          description:
            "We have worked with businesses like startups, MNCs, and everything in between across industries. Our proven track record allows us to be the best PWA development agency in India.",
          image: reactIcon,
        },
      ],
    },
    utilisArr: [
      {
        image: androidIcon,
        category: "Mobile App",
        title: "React.js / Next.js",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: iosIcon,
        category: "Mobile App",
        title: "Vue.js / Nuxt.js",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: reactIcon,
        category: "Mobile App",
        title: "Angular",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: flutterIcon,
        category: "Mobile App",
        title: "Workbox (by Google)",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: pwaIcon,
        category: "Mobile App",
        title: "Service Worker API",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: swiftIcon,
        category: "Mobile App",
        title: "Web App Manifest",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: angularIcon,
        category: "Frontend",
        title: "Parcel",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: reactIcon,
        category: "Frontend",
        title: "OneSignal",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: nextIcon,
        category: "Frontend",
        title: "Node.js",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: jsIcon,
        category: "Frontend",
        title: "Express.js",
        desc: "At Moonstack, we believe in building technology.",
      },
    ],
    processSteps: {
      headingText: "Our Process",
      subHeadingText:
        "As the top PWA development agency in India, our working process relies on transparency. We ensure our production process hinges on personalised and tailored solutions rather than cookie-cutter designs and development. Here’s a brief overview of our working process.",
      steps: [
        {
          number: 1,
          position: "left",
          title: "Confidentiality Agreement",
          description:
            "We provide a promise of confidentiality to all our clients with a signed NDA, ensuring their app idea and development process is safe with our team. We also hit the ground running with a detailed and robust working architecture that involves getting started with our work from the first call itself. This is why we’re the top PWA consulting service in India.",
        },
        {
          number: 2,
          position: "right",
          title: "Development & Prototyping",
          description:
            "The development process starts with designing the UI and creating the different functions of the app over a scalable architecture and framework. There’s a lot of focus on user experience, which includes ensuring the design is accessible across devices. Ensuring design translation across devices is a big part of our enterprise PWA development service in India at Moonstack.",
        },
        {
          number: 3,
          position: "left",
          title: "Quality Assurance",
          description:
            "Moonstack puts every app we build through rigorous quality assurance. This helps us ensure the app’s functionality is not compromised in any situation, especially for core services to create a seamless user experience. Our quality assurance makes us the best agency for PWA development for small businesses in India.",
        },
        {
          number: 4,
          position: "right",
          title: "Deployment & Support",
          description:
            "Once the development process is complete, we offer complete deployment support for PWA for e-commerce services in India. This allows businesses to streamline online operations and increase their reach among customers with our PWA deployment and maintenance services.",
        },
      ],
    },
    slides: [
      {
        image: SliderOne,
        title: "Web Designing",
        desc: "Earney is a financial solution Our UI design approach focuses on creating.",
      },
      {
        image: SliderTwo,
        title: "Mobile Development",
        desc: "Earney is a financial solution...",
      },
      {
        image: SliderThree,
        title: "Cloud Service",
        desc: "Earney is a financial solution...",
      },
      {
        image: SliderOne,
        title: "Web Designing",
        desc: "Earney is a financial solution Our UI design approach focuses on creating.",
      },
      {
        image: SliderFour,
        title: "Frontend Development",
        desc: "Earney is a financial solution...",
      },
      {
        image: SliderFive,
        title: "Backend Development",
        desc: "Earney is a financial solution...",
      },
    ],
    accordionData: [
      {
        title: "What is the cost of PWA development in India?",
        desc: "The cost of PWA development in India depends on your requirements and whether you have an existing app or not. Migration projects are less costly compared to full-fledged development projects. You can get a free quote from Moonstack for your PWA requirements. So feel free to contact us today.",
      },
      {
        title: "How long does it take to develop PWAs?",
        desc: "A full PWA development takes one or two months when building from scratch. Migration projects can take less time than that, depending on your requirements. However, no matter your requirement, if you have a timeline, Moonstack can try its best to meet your deadlines.",
      },
      {
        title: "Can Moonstack migrate my existing app into a PWA?",
        desc: "Yes, it is called migrating the application, and Moonstack offers dedicated PWA migration services in India. We can help you transform your existing application into a fully-functioning PWA without changing its design or functionalities.",
      },
      {
        title: "Are PWAs accessible across devices?",
        desc: "Yes, PWAs are accessible across devices and even feature offline functionality right from your web browser. For more information about PWAs, feel free to reach out to our team at Moonstack.",
      },
      {
        title: "What is the best platform for PWA development?",
        desc: "Most PWAs are developed using strong and capable platforms like React, Vue.js, or Angular. The build platform is decided based on the type of PWA you require. The best part is that all of the popular PWA development platforms allow businesses to build scalable PWAs.",
      },
    ],

    banner: {
      headingText: [
        {
          text: "Opt for your custom PWA services now",
          color: "text-white",
        },
      ],
      subHeadingText: [
        {
          text: "PWA services goes through different stages of work.",
          color: "text-white",
        },
      ],
      image: pwaBannerImg,
      bgImage: androidBannerBg,
      imageHeight: "md:w-[434px]",
    },
    quoteBanner: {
      headingText: [
        {
          text: "Build Scalable PWAs For Your Dynamic Business: Choose Moonstack",
          color: "text-white",
        },
      ],
      subHeadingText: [
        {
          text: "Our services are tailored to meet your business needs and create fully custom PWAs based on your requirements.",
          color: "text-white",
        },
      ],

      bgImg: iosContactbannerBg,
      buttonText: "Connect with us",
    },
  },

  // ✅ MANAGEMENT
  "mobile-app-maintenance-service": {
    hero: {
      title: [
        {
          text: "Mobile App Maintenance Services in India",
          color: "text-gradient",
        },
      ],
      description: [
        {
          text: "",
          color: "text-white",
        },
      ],
      image: managementImg,
      bgImage: androidBgImg,
    },
    seo: {
      title: "Mobile App Maintenance & Support in India & USA | Moonstack",
      description:
        "Want mobile app maintenance Service? We provide ongoing updates, crash fixes, performance tuning, and OS compatibility support for your Android and iOS apps.",
      keywords:
        "Mobile app maintenance services India, Mobile app maintenance company India,  App support and maintenance India, App optimization services India",
      canonical:
        "https://www.moonstack.com/android-app-development-service/mobile-app-maintenance -service",
      ogImage: "/opengraph-image.png",
    },
    points: [
      "Mobile applications require periodic maintenance and updates to function optimally. That’s why Moonstack offers the best mobile app maintenance services in India. Whether you’ve availed of our development services or not, we can help you maintain your app to the highest standards of security, stability, future-proof compatibility, and user experience. We even help apps fix bugs, optimise performance issues, and monitor analytics as a part of our app performance monitoring services in India.",
      "As the premier mobile app maintenance company in India, we pride ourselves on offering bespoke maintenance solutions to our clients. Our team is led by dedicated maintenance and QA specialists who ensure your app’s code is routinely tested and updated to meet the highest standards of latest OS compatibility. We offer both Android and iOS app maintenance services in India, and if you’re interested, we can offer a mobile app AMC (annual maintenance contract) in India too for our clients. So, hurry and contact us today.",
    ],
    solutions: {
      headingText: "Our Specialities",
      subHeadingText:
        "After 15+ years in the industry and 450+ projects completed, Moonstack has specialised expertise in providing services for app support and maintenance in India.",
    },
    featuresData: [
      {
        imgSrc: revenue,
        title: "Performance Optimisation",
        description:
          "As a part of our Android app maintenance service in India and our mobile app troubleshooting service in India, we offer complete performance optimisation for the mobile apps we maintain. This includes removing bottlenecks and optimising backend processes.",
      },
      {
        imgSrc: revenue,
        title: "Feature Improvements",
        description:
          "Moonstack offers the most thorough app updates and upgrades service in India. Our mobile app enhancement service in India can be used to refine design elements, improve usability, and enhance features based on user feedback.",
      },
      {
        imgSrc: revenue,
        title: "Security Improvements & Compliance",
        description:
          "Afraid of data breaches or corruption of user data? Avail of Moonstack’s app security maintenance services in India. We offer complete assistance in monitoring and fixing code vulnerabilities while ensuring OS and app store compatibility.",
      },
      {
        imgSrc: revenue,
        title: "Bug Fixes",
        description:
          "Bugs can ruin the user experience of your app; that’s why you should try our mobile app bug fixing services in India. We offer quick debugging and issue-based resolution to minimise your app’s downtime during maintenance.",
      },
      {
        imgSrc: revenue,
        title: "OS Update Compatibility",
        description:
          "We offer a proactive mobile app support service in India at Moonstack. This includes UI adjustments and API changes to match the latest OS updates and optimise app compatibility across devices.",
      },
      {
        imgSrc: revenue,
        title: "Analytics & Reporting",
        description:
          "As a leading app maintenance agency, we help businesses with third-party mobile app maintenance services in India that are tailored to their needs. Our analytics and reporting services offer crucial insights on app performance and user behaviour, which can be used to optimise the app further.",
      },
    ],

    tabs: {
      headingText: "Why Choose Us?",
      subHeadingText:
        "Our emergency app support services in India have helped many businesses across industries. Apart from our stellar records and highly appreciative clientele, here are some more reasons why you should work with Moonstack.",
      tabs: [
        {
          title: "Dedicated Team",
          description:
            "We are proud to work with a dedicated team of QA specialists, developers, and maintenance engineers who handle all our maintenance services.",
          image: figmaIcon,
        },
        {
          title: "Platform Independent Expertise",
          description:
            "Our team is experienced in offering maintenance services for apps built across platforms such as Android, iOS, and even hybrid frameworks.",
          image: reactIcon,
        },
        {
          title: "Security First Approach",
          description:
            "When you choose Moonstack, you can rest assured that the security standards and OS policies will always be followed, ensuring app compliance across platforms and app stores.",
          image: reactIcon,
        },
        {
          title: "Proactive Maintenance",
          description:
            "We create failsafes in the code that prevent major outages or problems with the core function of the app. This helps us prevent problems in the first place and offer a seamless user experience to users.",
          image: reactIcon,
        },
        {
          title: "Tailored Maintenance",
          description:
            "Not only do we offer tailored maintenance for your apps, but we also offer tailored pricing for every project and do not overcharge or oversell our clients, services that they wouldn’t need.",
          image: reactIcon,
        },
        {
          title: "Transparency Always",
          description:
            "When you choose Moonstack, you will always be a part of the loop with regular updates and reports delivered to you at every stage of our mobile app SLA support service in India.",
          image: reactIcon,
        },
      ],
    },
    utilisArr: [
      {
        image: androidIcon,
        category: "Mobile App",
        title: "Jenkins / GitHub Actions",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: iosIcon,
        category: "Mobile App",
        title: "Firebase Console",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: reactIcon,
        category: "Mobile App",
        title: "Microsoft Intune",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: flutterIcon,
        category: "Mobile App",
        title: "IBM MaaS360",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: pwaIcon,
        category: "Mobile App",
        title: "Jamf Pro",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: swiftIcon,
        category: "Mobile App",
        title: "OAuth 2.0 & JWT",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: angularIcon,
        category: "Frontend",
        title: "AES-256 Encryption",
        desc: "At Moonstack, we believe in building technology.",
      },
    ],
    processSteps: {
      headingText: "Our Process",
      subHeadingText:
        "Moonstack is the leading provider of app optimisation services in India. So, if you want to know what makes us the best, here’s an overview of how we provide tangible results to our clients.",
      steps: [
        {
          number: 1,
          position: "left",
          title: "App Audit",
          description:
            "As a part of our ongoing app support service in India, we get to work from the first call itself. We gather crucial data regarding the app’s bugs and user reports, and based on that, we start studying the codebase as a part of our audit process.",
        },
        {
          number: 2,
          position: "right",
          title: "Maintenance Strategy",
          description:
            "Based on user reports, backend performance bottlenecks, and compatibility issues, we create a maintenance plan strategy that helps fix the problems with the least possible downtime. However, we always first recommend our clients to use our app data backup services in India to protect their codebase against any malfunctions.",
        },
        {
          number: 3,
          position: "left",
          title: "Upgrade Implementation",
          description:
            "Once the strategy is in place, we quickly implement the necessary changes in the code to fix the pertinent issues. We monitor our changes and also keep an eye out for any new bugs at all times. This helps us ensure the changes are functional and align with your user experience requirements.",
        },
        {
          number: 4,
          position: "right",
          title: "Continuous Improvement",
          description:
            "We work tirelessly to continuously improve our maintenance efforts. We also include our clients in the process of our application troubleshooting support service in India by sending them regular updates and reports of key analytical metrics.",
        },
      ],
    },
    slides: [
      {
        image: SliderOne,
        title: "Web Designing",
        desc: "Earney is a financial solution Our UI design approach focuses on creating.",
      },
      {
        image: SliderTwo,
        title: "Mobile Development",
        desc: "Earney is a financial solution...",
      },
      {
        image: SliderThree,
        title: "Cloud Service",
        desc: "Earney is a financial solution...",
      },
      {
        image: SliderOne,
        title: "Web Designing",
        desc: "Earney is a financial solution Our UI design approach focuses on creating.",
      },
      {
        image: SliderFour,
        title: "Frontend Development",
        desc: "Earney is a financial solution...",
      },
      {
        image: SliderFive,
        title: "Backend Development",
        desc: "Earney is a financial solution...",
      },
    ],
    accordionData: [
      {
        title: "What is mobile app maintenance?",
        desc: "Mobile app maintenance refers to the continuous updates to the app that are required to optimise an app’s performance, compatibility, and responsiveness across devices and platforms. This process also includes fixing bugs and performance issues of mobile apps.",
      },
      {
        title: "How much does mobile app maintenance cost?",
        desc: "Mobile app maintenance is generally a fixed cost, and annual contracts can range anywhere from 10 to 20% of the app’s build cost. However, this cost can change based on the level of maintenance and upkeep required to optimise your app’s performance.",
      },
      {
        title: "How long does mobile app maintenance take?",
        desc: "Mobile app maintenance is an ongoing work that involves studying analytics and reading user bug reports to continually update the app’s codebase. It helps prevent user experience failures in the app and creates a cohesive experience for all users.",
      },
      {
        title: "Does Moonstack offer a yearly mobile app maintenance contract?",
        desc: "Yes, Moonstack offers yearly mobile app maintenance (AMC) contracts. You can contact our team to learn more about them and to get a free AMC quotation for your app.",
      },
      {
        title:
          "Can Moonstack help me fix performance issues and bugs as a part of app maintenance?",
        desc: "Yes, we provide complete app optimisation services that include fixing performance issues and bugs as part of our maintenance services.",
      },
    ],

    banner: {
      headingText: [
        {
          text: "Opt for your custom Mobile App Maintenance services now",
          color: "text-white",
        },
      ],
      subHeadingText: [
        {
          text: "Mobile App Maintenance services goes through different stages of work.",
          color: "text-white",
        },
      ],
      image: androidBannerImg,
      bgImage: androidBannerBg,
    },
    quoteBanner: {
      headingText: [
        {
          text: "Don’t Let App Downtime Stagger Your Business: Choose Our App Optimisation Services in India at Moonstack",
          color: "text-white",
        },
      ],
      subHeadingText: [
        {
          text: "Our third-party app maintenance and management services can ensure your app is optimally functioning at all times. ",
          color: "text-white",
        },
      ],
      image: maintenanceContactbannerImg,
      bgImg: maintenanceContactbannerBg,
      buttonText: "Connect with us",
    },
  },
};

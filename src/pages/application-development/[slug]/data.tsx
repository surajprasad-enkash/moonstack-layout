import androidImg from "../../../../public/assets/app-development-images/android-hero-img.webp";
import iosImg from "../../../../public/assets/app-development-images/android-hero-img.webp";
import pwaImg from "../../../../public/assets/app-development-images/android-hero-img.webp";
import reactNativeImg from "../../../../public/assets/app-development-images/android-hero-img.webp";
import managementImg from "../../../../public/assets/app-development-images/android-hero-img.webp";
import html from "../../../../public/assets/htmlWithoutBg.svg";
import flutterIcon from "../../../../public/assets/flutter-icon.svg";
import swiftIcon from "../../../../public/assets/swift-icon.svg";
import angularIcon from "../../../../public/assets/angular-icon.svg";
import nextIcon from "../../../../public/assets/next-icon.svg";
import jsIcon from "../../../../public/assets/js-icon.svg";
import dotNetIcon from "../../../../public/assets/dotNet-icon.svg";
import javaIcon from "../../../../public/assets/java-icon.svg";
import phpIcon from "../../../../public/assets/php-icon.svg";
import pythonIcon from "../../../../public/assets/python-icon.svg";
import cakePhpIcon from "../../../../public/assets/cake-php-icon.svg";
import laravelIcon from "../../../../public/assets/laravel-icon.svg";
import codeIgniteIcon from "../../../../public/assets/codeIgnite-icon.svg";
import cssIcon from "../../../../public/assets/css-icon.svg";
import dockerIcon from "../../../../public/assets/docker-icon.svg";
import kubernetesIcon from "../../../../public/assets/kubernetes-icon.svg";
import azureIcon from "../../../../public/assets/azure-kubernetes-service.svg";
import cloudIcon from "../../../../public/assets/cloud-icon.svg";
import microsoftIcon from "../../../../public/assets/microsoft-azure-icon.svg";
import adobeIcon from "../../../../public/assets/adobe-xd.svg";
import illustatorIcon from "../../../../public/assets/iullustrator.svg";
import framerIcon from "../../../../public/assets/framer-icon.svg";
import sketchIcon from "../../../../public/assets/sketch.svg";
import photoshopIcon from "../../../../public/assets/photoshop-icon.svg";
import googleAnalyticsIcon from "../../../../public/assets/google-analytics-icon.svg";
import ahrefsIcon from "../../../../public/assets/ahrefs-icon.svg";
import mozIcon from "../../../../public/assets/moz-icon.svg";
import ubersuggestIcon from "../../../../public/assets/ubersuggest-icon.svg";
import grammerlyIcon from "../../../../public/assets/grammerly-icon.svg";
import woorankIcon from "../../../../public/assets/woorank-icon.svg";
import androidIcon from "../../../../public/assets/android-icon.svg";
import iosIcon from "../../../../public/assets/ios-icon.svg";
import reactIcon from "../../../../public/assets/react-icon.svg";
import pwaIcon from "../../../../public/assets/pwa-icon.svg";
import nodeIcon from "../../../../public/assets/node-icon.svg";
import awsIcon from "../../../../public/assets/aws-icon.svg";
import figmaIcon from "../../../../public/assets/figma-icon.svg";
import SliderOne from "../../../../public/assets/sliderOne.webp";
import SliderTwo from "../../../../public/assets/sliderTwo.webp";
import SliderThree from "../../../../public/assets/SliderThree.webp";
import SliderFour from "../../../../public/assets/sliderFour.webp";
import SliderFive from "../../../../public/assets/SliderFive.webp";
import revenue from "../../../../public/assets/revenue.svg";

import { IAccordionItem } from "@/components/Homepage/FAQ";

export const pagesData: Record<
  string,
  {
    hero: {
      title: { text: string; color: string }[];
      description: { text: string; color: string }[];
      image: any;
    };
    solutions: {
      headingText: string;
      subHeadingText: string;
    };
    points: string[];
    featuresData: { imgSrc: any; title: string; description: string }[];
    tabs: {
      headingText: string;
      subHeadingText: string;
      tabs: {
        title: string;
        description: string;
        image: any;
      }[];
    };
    utilisArr: { image: any; category: string; title: string; desc: string }[];
    processSteps: {
      headingText: string;
      subHeadingText: string;
      steps: { title: string; description: string }[];
    };

    slides: { image: any; title: string; desc: string }[];
    accordionData: IAccordionItem[];
  }
> = {
  // ✅ ANDROID APP DEVELOPMENT
  "android-app-development-service": {
    hero: {
      title: [
        {
          text: "Reach 4 Billion+ Android Users Worldwide With Moonstack’s  ",
          color: "text-white",
        },
        {
          text: "Custom Android Application Development in India",
          color: "text-primary",
        },
      ],
      description: [
        {
          text: "",
          color: "text-white",
        },
      ],
      image: androidImg,
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
        imgSrc: revenue,
        title: "UI/UX Design For Android Applications",
        description:
          "Moonstack works with the best Android app developers in India to create consistent, clean, and intuitive UI designs for any app we build. We work with the top designers to create a front-end design that’s visually appealing and integrates the client’s brand image, creating a truly custom Android application for our clients. This level of attention to detail allows us to rank as the top Android UI/UX designing service in India.",
      },
      {
        imgSrc: revenue,
        title: "Backend Development & API Integrations",
        description:
          "The functionality and security of apps developed by Moonstack are unparalleled due to two factors. We build a robust backend framework for all applications we develop from scratch. And to help our apps function optimally, sync data automatically, and improve the app’s responsiveness and functionality across devices, we use trusted third-party APIs. These practices power us as the top Android app development firm in India.",
      },
      {
        imgSrc: revenue,
        title: "Cross-Platform Development & Clean Code Embedding",
        description:
          "As a part of our Android app development for startups in India, our team offers proficient cross-platform app development services. Our cross-platform development services are powered by Flutter, Dart, and Native React, which allows us to build Android apps that are compatible across devices and platforms using a single codebase. What sets our services apart is the use of clean code in our development process.",
      },
      {
        imgSrc: revenue,
        title: "Code Testing, Debugging, & Troubleshooting",
        description:
          "Moonstack offers one of the most comprehensive Android app testing services in India. This is one of the areas where we leave no stone unturned to ensure that your app is adequately prepared for its launch with no glitches or bugs that hamper the functionality of your app. Our testing services are reliable as every app we develop goes through a rigorous three-step, functional, performance, and device testing process before launch.",
      },
      {
        imgSrc: revenue,
        title: "Play Store Deployment",
        description:
          "Once the Android applications are ready, we help our clients deploy the apps to the Play Store and even optimize their listing for easy access by users. All of this comes standard as a part of our premier and affordable Android app development service in India. ",
      },
      {
        imgSrc: revenue,
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
      {
        image: angularIcon,
        category: "Frontend",
        title: "AngularJs Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: reactIcon,
        category: "Frontend",
        title: "ReactJS Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: nextIcon,
        category: "Frontend",
        title: "Next.js",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: jsIcon,
        category: "Frontend",
        title: "JavaScript",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: html,
        category: "Frontend",
        title: "HTML5 Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: cssIcon,
        category: "Frontend",
        title: "CSS3",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: nodeIcon,
        category: "Backend",
        title: "NodeJS Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: dotNetIcon,
        category: "Backend",
        title: ".NET",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: phpIcon,
        category: "Backend",
        title: "PHP",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: javaIcon,
        category: "Backend",
        title: "Java",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: pythonIcon,
        category: "Backend",
        title: "Python",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: laravelIcon,
        category: "Backend",
        title: "Laravel",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: cakePhpIcon,
        category: "Backend",
        title: "CakePHP Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: codeIgniteIcon,
        category: "Backend",
        title: "CodeIgniter Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: dockerIcon,
        category: "Devops",
        title: "Docker",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: kubernetesIcon,
        category: "Devops",
        title: "Kubernetes",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: azureIcon,
        category: "Devops",
        title: "Azure Service",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: cloudIcon,
        category: "Devops",
        title: "Google Cloud Platform",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: awsIcon,
        category: "Devops",
        title: "Amazon Web Services",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: microsoftIcon,
        category: "Devops",
        title: "Microsoft Azure",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: googleAnalyticsIcon,
        category: "SEO",
        title: "Google Analytics",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: ahrefsIcon,
        category: "SEO",
        title: "Ahrefs",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: mozIcon,
        category: "SEO",
        title: "Moz",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: ubersuggestIcon,
        category: "SEO",
        title: "Ubersuggest",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: grammerlyIcon,
        category: "SEO",
        title: "Grammerly",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: woorankIcon,
        category: "SEO",
        title: "Woorank",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: figmaIcon,
        category: "UI/UX",
        title: "Figma",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: adobeIcon,
        category: "UI/UX",
        title: "Adobe Xd",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: photoshopIcon,
        category: "UI/UX",
        title: "Photoshop",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: illustatorIcon,
        category: "UI/UX",
        title: "Illustrator",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: framerIcon,
        category: "UI/UX",
        title: "Framer",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: sketchIcon,
        category: "UI/UX",
        title: "Sketch",
        desc: "At Moonstack, we believe in building technology.",
      },
    ],
    processSteps: {
      headingText: "Our Process",
      subHeadingText:
        "Moonstack values privacy and transparency as one of the top Android app development agencies in India. Here’s a brief overview of how our Android app development services in India take shape from concept to launch.",
      steps: [
        {
          title: "Consultation & Discussion",
          description:
            "Our consultation and discussion sessions are highly productive as we help our clients realise their app idea into a working development plan. But first, we also ensure our clients get a signed NDA from our end, ensuring their app ideas are safe with us. We follow a stringent process of understanding our client’s vision to help them turn that into an idea that’s built specifically to their purpose.",
        },
        {
          title: "App Framework & UI/UX Design",
          description:
            "Once we have a plan for what the app is going to be, our first job is to create a framework for the app, going into every detail to understand the scope of development. Then we move into the UI/UX development phase as a part of our Android UI/UX designing service in India to create clean and intuitive designs that are in line with the client’s brand image.",
        },
        {
          title: "Custom Backend Development & Integrations",
          description:
            "For complex enterprise Android app solutions in India, Moonstack goes into great detail to develop the complete codebase from scratch. This allows us to have complete control over the application, preventing glitches and bugs from hampering functionality. It also helps us keep the application and its data secure, which is crucial for large-scale enterprise Android apps.",
        },
        {
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
  },

  // ✅ iOS APP DEVELOPMENT
  "ios-app-development-service": {
    hero: {
      title: [
        { text: "Create Stunning ", color: "text-white" },
        { text: "iOS Apps", color: "text-primary" },
      ],
      description: [
        {
          text: "From concept to App Store, we build stunning iOS applications that delight users.",
          color: "text-white",
        },
      ],
      image: iosImg,
    },
    points: [
      "At Moonstack, we understand the power of mobile applications and deliver complete end-to-end mobile app solutions in India for businesses. When built right, mobile apps can scale businesses and build brands. They are the most direct connection customers have with brands and a gateway to customer retention and business growth.",
      "As a premier mobile app development company in India, we excel in building custom Android, iOS, web, and cross-platform apps tailored to your business goals. Our team consists of developers, UI designers, and UX specialists who collaborate to build scalable apps with robust and secure backend systems and intuitive front-end design over a scalable architecture.",
      "From helping startups develop their MVP concepts to working with MNCs seeking enterprise mobile app solutions in India, we’ve worked across industries such as e-commerce, healthcare, finance, and logistics with great success. So, if you’re looking for an experienced mobile app development agency in India that offers an optimal balance of technical expertise and design fluency, choose Moonstack today",
    ],
    solutions: {
      headingText: "Premium iOS App Development",
      subHeadingText:
        "Our iOS apps combine performance, design, and reliability.",
    },
    featuresData: [
      {
        imgSrc: revenue,
        title: "Mobile App Developmentttttt",
        description:
          "Our mobile app consulting services in India can be utilised to develop any mobile application you need. We offer custom mobile app development services in India.",
      },
      {
        imgSrc: revenue,
        title: "Android App Development",
        description:
          "Moonstack offers high-performance mobile app development services in India. Our mobile application developers in India work alongside top designers to create a consistent front-end design for your Android applications.",
      },
      {
        imgSrc: revenue,
        title: "iOS App Development",
        description:
          "Moonstack offers the best mobile app development services in India for iOS development. Our team of top mobile app developers in India is experienced in developing iOS applications for all Apple devices.",
      },
      {
        imgSrc: revenue,
        title: "React Native App Development",
        description:
          "If you’re looking for affordable mobile app development services in India, our React native app development services are perfect for you. This is one of our most sought-after services for mobile app design and development in India.",
      },
      {
        imgSrc: revenue,
        title: "Progressive Web App (PWA) Development",
        description:
          "Our on-demand mobile app development service in India for progressive web apps is reliable, secure, and offers unmatched functionality with minimal friction for users.",
      },
      {
        imgSrc: revenue,
        title: "App Maintenance & Post Deployment Support",
        description:
          "As a part of our mobile app development for startups in India, at Moonstack, we offer ongoing app maintenance and post-deployment support.",
      },
    ],
    tabs: {
      headingText: "Our Specialities",
      subHeadingText:
        "Android app development goes through different stages of work. As the premier Android app development agency in India, Moonstack offers specialised services for Android app development for businesses in India.",
      tabs: [
        {
          title: "Native Apps",
          description: "Built in Kotlin or Java",
          image: androidIcon,
        },
        {
          title: "Custom UI",
          description: "Pixel-perfect Android experiences",
          image: figmaIcon,
        },
        {
          title: "Cross-Platform",
          description: "Single codebase, multiple devices",
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
      {
        image: angularIcon,
        category: "Frontend",
        title: "AngularJs Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: reactIcon,
        category: "Frontend",
        title: "ReactJS Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: nextIcon,
        category: "Frontend",
        title: "Next.js",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: jsIcon,
        category: "Frontend",
        title: "JavaScript",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: html,
        category: "Frontend",
        title: "HTML5 Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: cssIcon,
        category: "Frontend",
        title: "CSS3",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: nodeIcon,
        category: "Backend",
        title: "NodeJS Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: dotNetIcon,
        category: "Backend",
        title: ".NET",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: phpIcon,
        category: "Backend",
        title: "PHP",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: javaIcon,
        category: "Backend",
        title: "Java",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: pythonIcon,
        category: "Backend",
        title: "Python",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: laravelIcon,
        category: "Backend",
        title: "Laravel",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: cakePhpIcon,
        category: "Backend",
        title: "CakePHP Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: codeIgniteIcon,
        category: "Backend",
        title: "CodeIgniter Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: dockerIcon,
        category: "Devops",
        title: "Docker",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: kubernetesIcon,
        category: "Devops",
        title: "Kubernetes",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: azureIcon,
        category: "Devops",
        title: "Azure Service",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: cloudIcon,
        category: "Devops",
        title: "Google Cloud Platform",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: awsIcon,
        category: "Devops",
        title: "Amazon Web Services",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: microsoftIcon,
        category: "Devops",
        title: "Microsoft Azure",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: googleAnalyticsIcon,
        category: "SEO",
        title: "Google Analytics",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: ahrefsIcon,
        category: "SEO",
        title: "Ahrefs",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: mozIcon,
        category: "SEO",
        title: "Moz",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: ubersuggestIcon,
        category: "SEO",
        title: "Ubersuggest",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: grammerlyIcon,
        category: "SEO",
        title: "Grammerly",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: woorankIcon,
        category: "SEO",
        title: "Woorank",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: figmaIcon,
        category: "UI/UX",
        title: "Figma",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: adobeIcon,
        category: "UI/UX",
        title: "Adobe Xd",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: photoshopIcon,
        category: "UI/UX",
        title: "Photoshop",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: illustatorIcon,
        category: "UI/UX",
        title: "Illustrator",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: framerIcon,
        category: "UI/UX",
        title: "Framer",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: sketchIcon,
        category: "UI/UX",
        title: "Sketch",
        desc: "At Moonstack, we believe in building technology.",
      },
    ],
    processSteps: {
      headingText: "Our Process",
      subHeadingText: "Step-by-step clarity, quality, and performance.",
      steps: [
        { title: "Ideation", description: "We understand your app goals." },
        {
          title: "UI/UX",
          description: "We design clean Android-first interfaces.",
        },
        { title: "Development", description: "We build using latest SDKs." },
        {
          title: "Testing & Launch",
          description: "Ensure stability & Play Store optimization.",
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
        title: "Do you use SwiftUI or UIKit?",
        desc: "We use both, depending on project needs.",
      },
      {
        title: "Can you integrate with Apple Pay?",
        desc: "Yes, our team handles secure payment integrations.",
      },
    ],
  },

  // ✅ REACT NATIVE
  "react-native-app-development-service": {
    hero: {
      title: [
        { text: "Build Once, ", color: "text-white" },
        { text: "Run Anywhere", color: "text-primary" },
      ],
      description: [
        {
          text: "React Native helps you reach both Android and iOS with one codebase.",
          color: "text-white",
        },
      ],
      image: reactNativeImg,
    },
    points: [
      "At Moonstack, we understand the power of mobile applications and deliver complete end-to-end mobile app solutions in India for businesses. When built right, mobile apps can scale businesses and build brands. They are the most direct connection customers have with brands and a gateway to customer retention and business growth.",
      "As a premier mobile app development company in India, we excel in building custom Android, iOS, web, and cross-platform apps tailored to your business goals. Our team consists of developers, UI designers, and UX specialists who collaborate to build scalable apps with robust and secure backend systems and intuitive front-end design over a scalable architecture.",
      "From helping startups develop their MVP concepts to working with MNCs seeking enterprise mobile app solutions in India, we’ve worked across industries such as e-commerce, healthcare, finance, and logistics with great success. So, if you’re looking for an experienced mobile app development agency in India that offers an optimal balance of technical expertise and design fluency, choose Moonstack today",
    ],
    solutions: {
      headingText: "Cross-Platform React Native Solutions",
      subHeadingText: "One app for two platforms — efficient and fast.",
    },
    featuresData: [
      {
        imgSrc: revenue,
        title: "Mobile App Developmentttttt",
        description:
          "Our mobile app consulting services in India can be utilised to develop any mobile application you need. We offer custom mobile app development services in India.",
      },
      {
        imgSrc: revenue,
        title: "Android App Development",
        description:
          "Moonstack offers high-performance mobile app development services in India. Our mobile application developers in India work alongside top designers to create a consistent front-end design for your Android applications.",
      },
      {
        imgSrc: revenue,
        title: "iOS App Development",
        description:
          "Moonstack offers the best mobile app development services in India for iOS development. Our team of top mobile app developers in India is experienced in developing iOS applications for all Apple devices.",
      },
      {
        imgSrc: revenue,
        title: "React Native App Development",
        description:
          "If you’re looking for affordable mobile app development services in India, our React native app development services are perfect for you. This is one of our most sought-after services for mobile app design and development in India.",
      },
      {
        imgSrc: revenue,
        title: "Progressive Web App (PWA) Development",
        description:
          "Our on-demand mobile app development service in India for progressive web apps is reliable, secure, and offers unmatched functionality with minimal friction for users.",
      },
      {
        imgSrc: revenue,
        title: "App Maintenance & Post Deployment Support",
        description:
          "As a part of our mobile app development for startups in India, at Moonstack, we offer ongoing app maintenance and post-deployment support.",
      },
    ],
    tabs: {
      headingText: "Our Specialities",
      subHeadingText:
        "Android app development goes through different stages of work. As the premier Android app development agency in India, Moonstack offers specialised services for Android app development for businesses in India.",
      tabs: [
        {
          title: "Native Apps",
          description: "Built in Kotlin or Java",
          image: androidIcon,
        },
        {
          title: "Custom UI",
          description: "Pixel-perfect Android experiences",
          image: figmaIcon,
        },
        {
          title: "Cross-Platform",
          description: "Single codebase, multiple devices",
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
      {
        image: angularIcon,
        category: "Frontend",
        title: "AngularJs Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: reactIcon,
        category: "Frontend",
        title: "ReactJS Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: nextIcon,
        category: "Frontend",
        title: "Next.js",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: jsIcon,
        category: "Frontend",
        title: "JavaScript",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: html,
        category: "Frontend",
        title: "HTML5 Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: cssIcon,
        category: "Frontend",
        title: "CSS3",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: nodeIcon,
        category: "Backend",
        title: "NodeJS Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: dotNetIcon,
        category: "Backend",
        title: ".NET",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: phpIcon,
        category: "Backend",
        title: "PHP",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: javaIcon,
        category: "Backend",
        title: "Java",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: pythonIcon,
        category: "Backend",
        title: "Python",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: laravelIcon,
        category: "Backend",
        title: "Laravel",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: cakePhpIcon,
        category: "Backend",
        title: "CakePHP Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: codeIgniteIcon,
        category: "Backend",
        title: "CodeIgniter Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: dockerIcon,
        category: "Devops",
        title: "Docker",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: kubernetesIcon,
        category: "Devops",
        title: "Kubernetes",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: azureIcon,
        category: "Devops",
        title: "Azure Service",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: cloudIcon,
        category: "Devops",
        title: "Google Cloud Platform",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: awsIcon,
        category: "Devops",
        title: "Amazon Web Services",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: microsoftIcon,
        category: "Devops",
        title: "Microsoft Azure",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: googleAnalyticsIcon,
        category: "SEO",
        title: "Google Analytics",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: ahrefsIcon,
        category: "SEO",
        title: "Ahrefs",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: mozIcon,
        category: "SEO",
        title: "Moz",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: ubersuggestIcon,
        category: "SEO",
        title: "Ubersuggest",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: grammerlyIcon,
        category: "SEO",
        title: "Grammerly",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: woorankIcon,
        category: "SEO",
        title: "Woorank",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: figmaIcon,
        category: "UI/UX",
        title: "Figma",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: adobeIcon,
        category: "UI/UX",
        title: "Adobe Xd",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: photoshopIcon,
        category: "UI/UX",
        title: "Photoshop",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: illustatorIcon,
        category: "UI/UX",
        title: "Illustrator",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: framerIcon,
        category: "UI/UX",
        title: "Framer",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: sketchIcon,
        category: "UI/UX",
        title: "Sketch",
        desc: "At Moonstack, we believe in building technology.",
      },
    ],
    processSteps: {
      headingText: "Our Process",
      subHeadingText: "Step-by-step clarity, quality, and performance.",
      steps: [
        { title: "Ideation", description: "We understand your app goals." },
        {
          title: "UI/UX",
          description: "We design clean Android-first interfaces.",
        },
        { title: "Development", description: "We build using latest SDKs." },
        {
          title: "Testing & Launch",
          description: "Ensure stability & Play Store optimization.",
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
        title: "Can React Native apps access native APIs?",
        desc: "Yes, through native bridges.",
      },
      {
        title: "Is performance as good as native?",
        desc: "Nearly identical for most use cases.",
      },
    ],
  },

  // ✅ PWA
  "pwa-development-service": {
    hero: {
      title: [
        { text: "Empower Web with ", color: "text-white" },
        { text: "Progressive Web Apps", color: "text-primary" },
      ],
      description: [
        {
          text: "Deliver app-like experiences directly from browsers — lightweight and installable.",
          color: "text-white",
        },
      ],
      image: pwaImg,
    },
    points: [
      "At Moonstack, we understand the power of mobile applications and deliver complete end-to-end mobile app solutions in India for businesses. When built right, mobile apps can scale businesses and build brands. They are the most direct connection customers have with brands and a gateway to customer retention and business growth.",
      "As a premier mobile app development company in India, we excel in building custom Android, iOS, web, and cross-platform apps tailored to your business goals. Our team consists of developers, UI designers, and UX specialists who collaborate to build scalable apps with robust and secure backend systems and intuitive front-end design over a scalable architecture.",
      "From helping startups develop their MVP concepts to working with MNCs seeking enterprise mobile app solutions in India, we’ve worked across industries such as e-commerce, healthcare, finance, and logistics with great success. So, if you’re looking for an experienced mobile app development agency in India that offers an optimal balance of technical expertise and design fluency, choose Moonstack today",
    ],
    solutions: {
      headingText: "PWA Development Services",
      subHeadingText:
        "Turn your site into a lightning-fast Progressive Web App.",
    },
    featuresData: [
      {
        imgSrc: revenue,
        title: "Mobile App Developmentttttt",
        description:
          "Our mobile app consulting services in India can be utilised to develop any mobile application you need. We offer custom mobile app development services in India.",
      },
      {
        imgSrc: revenue,
        title: "Android App Development",
        description:
          "Moonstack offers high-performance mobile app development services in India. Our mobile application developers in India work alongside top designers to create a consistent front-end design for your Android applications.",
      },
      {
        imgSrc: revenue,
        title: "iOS App Development",
        description:
          "Moonstack offers the best mobile app development services in India for iOS development. Our team of top mobile app developers in India is experienced in developing iOS applications for all Apple devices.",
      },
      {
        imgSrc: revenue,
        title: "React Native App Development",
        description:
          "If you’re looking for affordable mobile app development services in India, our React native app development services are perfect for you. This is one of our most sought-after services for mobile app design and development in India.",
      },
      {
        imgSrc: revenue,
        title: "Progressive Web App (PWA) Development",
        description:
          "Our on-demand mobile app development service in India for progressive web apps is reliable, secure, and offers unmatched functionality with minimal friction for users.",
      },
      {
        imgSrc: revenue,
        title: "App Maintenance & Post Deployment Support",
        description:
          "As a part of our mobile app development for startups in India, at Moonstack, we offer ongoing app maintenance and post-deployment support.",
      },
    ],
    tabs: {
      headingText: "Our Specialities",
      subHeadingText:
        "Android app development goes through different stages of work. As the premier Android app development agency in India, Moonstack offers specialised services for Android app development for businesses in India.",
      tabs: [
        {
          title: "Native Apps",
          description: "Built in Kotlin or Java",
          image: androidIcon,
        },
        {
          title: "Custom UI",
          description: "Pixel-perfect Android experiences",
          image: figmaIcon,
        },
        {
          title: "Cross-Platform",
          description: "Single codebase, multiple devices",
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
      {
        image: angularIcon,
        category: "Frontend",
        title: "AngularJs Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: reactIcon,
        category: "Frontend",
        title: "ReactJS Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: nextIcon,
        category: "Frontend",
        title: "Next.js",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: jsIcon,
        category: "Frontend",
        title: "JavaScript",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: html,
        category: "Frontend",
        title: "HTML5 Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: cssIcon,
        category: "Frontend",
        title: "CSS3",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: nodeIcon,
        category: "Backend",
        title: "NodeJS Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: dotNetIcon,
        category: "Backend",
        title: ".NET",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: phpIcon,
        category: "Backend",
        title: "PHP",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: javaIcon,
        category: "Backend",
        title: "Java",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: pythonIcon,
        category: "Backend",
        title: "Python",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: laravelIcon,
        category: "Backend",
        title: "Laravel",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: cakePhpIcon,
        category: "Backend",
        title: "CakePHP Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: codeIgniteIcon,
        category: "Backend",
        title: "CodeIgniter Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: dockerIcon,
        category: "Devops",
        title: "Docker",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: kubernetesIcon,
        category: "Devops",
        title: "Kubernetes",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: azureIcon,
        category: "Devops",
        title: "Azure Service",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: cloudIcon,
        category: "Devops",
        title: "Google Cloud Platform",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: awsIcon,
        category: "Devops",
        title: "Amazon Web Services",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: microsoftIcon,
        category: "Devops",
        title: "Microsoft Azure",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: googleAnalyticsIcon,
        category: "SEO",
        title: "Google Analytics",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: ahrefsIcon,
        category: "SEO",
        title: "Ahrefs",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: mozIcon,
        category: "SEO",
        title: "Moz",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: ubersuggestIcon,
        category: "SEO",
        title: "Ubersuggest",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: grammerlyIcon,
        category: "SEO",
        title: "Grammerly",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: woorankIcon,
        category: "SEO",
        title: "Woorank",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: figmaIcon,
        category: "UI/UX",
        title: "Figma",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: adobeIcon,
        category: "UI/UX",
        title: "Adobe Xd",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: photoshopIcon,
        category: "UI/UX",
        title: "Photoshop",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: illustatorIcon,
        category: "UI/UX",
        title: "Illustrator",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: framerIcon,
        category: "UI/UX",
        title: "Framer",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: sketchIcon,
        category: "UI/UX",
        title: "Sketch",
        desc: "At Moonstack, we believe in building technology.",
      },
    ],
    processSteps: {
      headingText: "Our Process",
      subHeadingText: "Step-by-step clarity, quality, and performance.",
      steps: [
        { title: "Ideation", description: "We understand your app goals." },
        {
          title: "UI/UX",
          description: "We design clean Android-first interfaces.",
        },
        { title: "Development", description: "We build using latest SDKs." },
        {
          title: "Testing & Launch",
          description: "Ensure stability & Play Store optimization.",
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
        title: "Can PWAs be installed like apps?",
        desc: "Yes, users can install them directly from the browser.",
      },
      {
        title: "Do PWAs work offline?",
        desc: "Yes, via caching with service workers.",
      },
    ],
  },

  // ✅ MANAGEMENT
  "mobile-app-management-service": {
    hero: {
      title: [
        { text: "Maintain & Optimize ", color: "text-white" },
        { text: "Your Apps", color: "text-primary" },
      ],
      description: [
        {
          text: "Keep your app secure, stable, and up-to-date with ongoing maintenance.",
          color: "text-white",
        },
      ],
      image: managementImg,
    },
    points: [
      "At Moonstack, we understand the power of mobile applications and deliver complete end-to-end mobile app solutions in India for businesses. When built right, mobile apps can scale businesses and build brands. They are the most direct connection customers have with brands and a gateway to customer retention and business growth.",
      "As a premier mobile app development company in India, we excel in building custom Android, iOS, web, and cross-platform apps tailored to your business goals. Our team consists of developers, UI designers, and UX specialists who collaborate to build scalable apps with robust and secure backend systems and intuitive front-end design over a scalable architecture.",
      "From helping startups develop their MVP concepts to working with MNCs seeking enterprise mobile app solutions in India, we’ve worked across industries such as e-commerce, healthcare, finance, and logistics with great success. So, if you’re looking for an experienced mobile app development agency in India that offers an optimal balance of technical expertise and design fluency, choose Moonstack today",
    ],
    solutions: {
      headingText: "Comprehensive Mobile App Management",
      subHeadingText: "We monitor, update, and enhance your apps post-launch.",
    },
    featuresData: [
      {
        imgSrc: revenue,
        title: "Mobile App Developmentttttt",
        description:
          "Our mobile app consulting services in India can be utilised to develop any mobile application you need. We offer custom mobile app development services in India.",
      },
      {
        imgSrc: revenue,
        title: "Android App Development",
        description:
          "Moonstack offers high-performance mobile app development services in India. Our mobile application developers in India work alongside top designers to create a consistent front-end design for your Android applications.",
      },
      {
        imgSrc: revenue,
        title: "iOS App Development",
        description:
          "Moonstack offers the best mobile app development services in India for iOS development. Our team of top mobile app developers in India is experienced in developing iOS applications for all Apple devices.",
      },
      {
        imgSrc: revenue,
        title: "React Native App Development",
        description:
          "If you’re looking for affordable mobile app development services in India, our React native app development services are perfect for you. This is one of our most sought-after services for mobile app design and development in India.",
      },
      {
        imgSrc: revenue,
        title: "Progressive Web App (PWA) Development",
        description:
          "Our on-demand mobile app development service in India for progressive web apps is reliable, secure, and offers unmatched functionality with minimal friction for users.",
      },
      {
        imgSrc: revenue,
        title: "App Maintenance & Post Deployment Support",
        description:
          "As a part of our mobile app development for startups in India, at Moonstack, we offer ongoing app maintenance and post-deployment support.",
      },
    ],
    tabs: {
      headingText: "Our Specialities",
      subHeadingText:
        "Android app development goes through different stages of work. As the premier Android app development agency in India, Moonstack offers specialised services for Android app development for businesses in India.",
      tabs: [
        {
          title: "Native Apps",
          description: "Built in Kotlin or Java",
          image: androidIcon,
        },
        {
          title: "Custom UI",
          description: "Pixel-perfect Android experiences",
          image: figmaIcon,
        },
        {
          title: "Cross-Platform",
          description: "Single codebase, multiple devices",
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
      {
        image: angularIcon,
        category: "Frontend",
        title: "AngularJs Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: reactIcon,
        category: "Frontend",
        title: "ReactJS Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: nextIcon,
        category: "Frontend",
        title: "Next.js",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: jsIcon,
        category: "Frontend",
        title: "JavaScript",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: html,
        category: "Frontend",
        title: "HTML5 Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: cssIcon,
        category: "Frontend",
        title: "CSS3",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: nodeIcon,
        category: "Backend",
        title: "NodeJS Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: dotNetIcon,
        category: "Backend",
        title: ".NET",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: phpIcon,
        category: "Backend",
        title: "PHP",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: javaIcon,
        category: "Backend",
        title: "Java",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: pythonIcon,
        category: "Backend",
        title: "Python",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: laravelIcon,
        category: "Backend",
        title: "Laravel",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: cakePhpIcon,
        category: "Backend",
        title: "CakePHP Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: codeIgniteIcon,
        category: "Backend",
        title: "CodeIgniter Development",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: dockerIcon,
        category: "Devops",
        title: "Docker",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: kubernetesIcon,
        category: "Devops",
        title: "Kubernetes",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: azureIcon,
        category: "Devops",
        title: "Azure Service",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: cloudIcon,
        category: "Devops",
        title: "Google Cloud Platform",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: awsIcon,
        category: "Devops",
        title: "Amazon Web Services",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: microsoftIcon,
        category: "Devops",
        title: "Microsoft Azure",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: googleAnalyticsIcon,
        category: "SEO",
        title: "Google Analytics",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: ahrefsIcon,
        category: "SEO",
        title: "Ahrefs",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: mozIcon,
        category: "SEO",
        title: "Moz",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: ubersuggestIcon,
        category: "SEO",
        title: "Ubersuggest",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: grammerlyIcon,
        category: "SEO",
        title: "Grammerly",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: woorankIcon,
        category: "SEO",
        title: "Woorank",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: figmaIcon,
        category: "UI/UX",
        title: "Figma",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: adobeIcon,
        category: "UI/UX",
        title: "Adobe Xd",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: photoshopIcon,
        category: "UI/UX",
        title: "Photoshop",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: illustatorIcon,
        category: "UI/UX",
        title: "Illustrator",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: framerIcon,
        category: "UI/UX",
        title: "Framer",
        desc: "At Moonstack, we believe in building technology.",
      },
      {
        image: sketchIcon,
        category: "UI/UX",
        title: "Sketch",
        desc: "At Moonstack, we believe in building technology.",
      },
    ],
    processSteps: {
      headingText: "Our Process",
      subHeadingText: "Step-by-step clarity, quality, and performance.",
      steps: [
        { title: "Ideation", description: "We understand your app goals." },
        {
          title: "UI/UX",
          description: "We design clean Android-first interfaces.",
        },
        { title: "Development", description: "We build using latest SDKs." },
        {
          title: "Testing & Launch",
          description: "Ensure stability & Play Store optimization.",
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
        title: "Do you handle third-party apps?",
        desc: "Yes, we can take over existing projects.",
      },
      {
        title: "Can you update old apps?",
        desc: "Absolutely, we modernize legacy codebases.",
      },
    ],
  },
};

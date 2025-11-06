import revenue from "../../../public/assets/dummy-icon.svg";
import arrowUp from "../../../public/assets/arrow-up.svg";
import SliderOne from "../../../public/assets/sliderOne.webp";
import SliderTwo from "../../../public/assets/sliderTwo.webp";
import SliderThree from "../../../public/assets/SliderThree.webp";
import SliderFour from "../../../public/assets/sliderFour.webp";
import SliderFive from "../../../public/assets/SliderFive.webp";
import html from "../../../public/assets/htmlWithoutBg.svg";
import flutterIcon from "../../../public/assets/flutter-icon.svg";
import swiftIcon from "../../../public/assets/swift-icon.svg";
import angularIcon from "../../../public/assets/angular-icon.svg";
import nextIcon from "../../../public/assets/next-icon.svg";
import jsIcon from "../../../public/assets/js-icon.svg";
import dotNetIcon from "../../../public/assets/dotNet-icon.svg";
import javaIcon from "../../../public/assets/java-icon.svg";
import phpIcon from "../../../public/assets/php-icon.svg";
import pythonIcon from "../../../public/assets/python-icon.svg";
import cakePhpIcon from "../../../public/assets/cake-php-icon.svg";
import laravelIcon from "../../../public/assets/laravel-icon.svg";
import codeIgniteIcon from "../../../public/assets/codeIgnite-icon.svg";
import cssIcon from "../../../public/assets/css-icon.svg";
import dockerIcon from "../../../public/assets/docker-icon.svg";
import kubernetesIcon from "../../../public/assets/kubernetes-icon.svg";
import azureIcon from "../../../public/assets/azure-kubernetes-service.svg";
import cloudIcon from "../../../public/assets/cloud-icon.svg";
import microsoftIcon from "../../../public/assets/microsoft-azure-icon.svg";
import adobeIcon from "../../../public/assets/adobe-xd.svg";
import illustatorIcon from "../../../public/assets/iullustrator.svg";
import framerIcon from "../../../public/assets/framer-icon.svg";
import sketchIcon from "../../../public/assets/sketch.svg";
import photoshopIcon from "../../../public/assets/photoshop-icon.svg";
import googleAnalyticsIcon from "../../../public/assets/google-analytics-icon.svg";
import ahrefsIcon from "../../../public/assets/ahrefs-icon.svg";
import mozIcon from "../../../public/assets/moz-icon.svg";
import ubersuggestIcon from "../../../public/assets/ubersuggest-icon.svg";
import grammerlyIcon from "../../../public/assets/grammerly-icon.svg";
import woorankIcon from "../../../public/assets/woorank-icon.svg";
import androidIcon from "../../../public/assets/android-icon.svg";
import iosIcon from "../../../public/assets/ios-icon.svg";
import reactIcon from "../../../public/assets/react-icon.svg";
import pwaIcon from "../../../public/assets/pwa-icon.svg";
import nodeIcon from "../../../public/assets/node-icon.svg";
import awsIcon from "../../../public/assets/aws-icon.svg";
import figmaIcon from "../../../public/assets/figma-icon.svg";

interface IServiceArray {
  image: string;
  title: string;
  desc: string;
}

export interface IAccordionItem {
  title: string;
  desc: string;
}
export const processSteps = [
  {
    id: 1,
    title: "Requirement Gatherings ",
    description:
      "We collect all the information and understand what the business is all about and things that it requires. ",
  },
  {
    id: 2,
    title: "Client Discussion",
    description:
      "After our understanding we have proper discussion with clients and have knowledge of what they are actually looking for.  ",
  },
  {
    id: 3,
    title: "Research and Brainstorming",
    description:
      "Our web development team researches what is going on in a market that can align and have internal discussions. ",
  },
  {
    id: 4,
    title: "Designing and Development ",
    description:
      "Designers bring innovative and immersive designs that connect with audiences and with technologies to develop websites. ",
  },
  {
    id: 5,
    title: "Testing and Deployment  ",
    description:
      "Before launching the website in the market we do end to end testing and deployment process that ensure to launch websites error free  ",
  },
  {
    id: 6,
    title: "Launching ",
    description:
      "We launch websites in the market with the right SEO Strategies. Users can browse it from web and mobile easily. ",
  },
];

export const featuresData = [
  {
    imgSrc: revenue,
    title: "Generate Leads",
    description:
      "Generate Leads It lives in forests, grasslands, and even near cities, adjusting easily to different environments. With its sharp senses and quick reflexes, the fox is often seen as a symbol of wisdom and cunning in many cultures.",
  },
  {
    imgSrc: revenue,
    title: "Generate Leads",
    description:
      "Generate Leads It lives in forests, grasslands, and even near cities, adjusting easily to different environments. With its sharp senses and quick reflexes, the fox is often seen as a symbol of wisdom and cunning in many cultures.",
  },
  {
    imgSrc: revenue,
    title: "Generate Leads",
    description:
      "Generate Leads It lives in forests, grasslands, and even near cities, adjusting easily to different environments. With its sharp senses and quick reflexes, the fox is often seen as a symbol of wisdom and cunning in many cultures.",
  },
  {
    imgSrc: revenue,
    title: "Generate Leads",
    description:
      "Generate Leads It lives in forests, grasslands, and even near cities, adjusting easily to different environments. With its sharp senses and quick reflexes, the fox is often seen as a symbol of wisdom and cunning in many cultures.",
  },
  {
    imgSrc: revenue,
    title: "Generate Leads",
    description:
      "Generate Leads It lives in forests, grasslands, and even near cities, adjusting easily to different environments. With its sharp senses and quick reflexes, the fox is often seen as a symbol of wisdom and cunning in many cultures.",
  },
  {
    imgSrc: revenue,
    title: "Generate Leads",
    description:
      "Generate Leads It lives in forests, grasslands, and even near cities, adjusting easily to different environments. With its sharp senses and quick reflexes, the fox is often seen as a symbol of wisdom and cunning in many cultures.",
  },
];

export const utilisArr = [
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
];

export const slides = [
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
    image: SliderFour,
    title: "Frontend Development",
    desc: "Earney is a financial solution...",
  },
  {
    image: SliderFive,
    title: "Backend Development",
    desc: "Earney is a financial solution...",
  },
];

export const accordionData: IAccordionItem[] = [
  {
    title:
      "Will you build a website that aligns with my business requirements?",
    desc: "Yes, at Moonstack we don’t just build websites. We create custom websites in India for our clients that meet all their business needs. In the first two steps, our top industry experts will understand your business and then set a bridge that you can overcome with an effective digital solution.",
  },
  {
    title:
      "Will you be able to integrate automation processes and trending AI functionalities in websites?",
    desc: "Moonstack is recognised as the best business website development service in India. In order to maintain that we keep ourselves updated with the latest trending technologies and solve business complex challenges such as turning manual to automation. Yes, we have a proficient team of AI experts, who integrate automation processes.",
  },
  {
    title:
      "How will you make sure that all my company details and website are fully secure?",
    desc: "You are partnering with the top website development company in India. We follow top industry standard security protocols such as security encryption, best web development practices, and meet demands of latest region wise compliances. Our website developers also perform constant audits to make sure that user information is fully protected.",
  },
  {
    title: "Will you provide source code to our team?",
    desc: "Of course, after completion of the website development services, we will provide source code access to your team. With source code your team can add and edit functionalities as per your requirements.",
  },
  {
    title: "Do you sign an NDA with your team members?",
    desc: "Yes, we sign proper NDA not only with our website development team. We also sign NDA (Non Disclosure Agreement) and other contracts that are valid as per region with our clients that helps us to secure project details and to maintain long term relationships.",
  },
  {
    title: "Can I hire web developers for my project?",
    desc: "Yes, you can hire web developers for your project. We offer different hiring modules that allow you to hire developers on hourly, part time, and full time basis. Our web development team makes sure they provide you a resume of the best resources as per you are looking for, and you can choose your web development resources who work dedicatedly for your project.",
  },
];
export const points = [
  "Ensures data security and scalability",
  "Handles app logic and user management",
  "Connects frontend to databases seamlessly",
];
export const chooseUsTabs = [
  {
    title: "Decade of Experience ",
    description:
      "Moonstack has delivered 450+ projects across different industries. Our affordable website development service India  is in high demand among start ups, mid sized, and large enterprises. ",
    image: pythonIcon,
    imgHeight: "420px",
  },
  {
    title: "Data Security & Compliance ",
    description:
      "We don’t only build websites to deliver. At Moonstack - leading website development company in Jaipur,  we know the importance of data security and to match the standards and protection with essential compliance. ",
    image: phpIcon,
    imgHeight: "420px",
  },
  {
    title: "Next Generation Technology Stack ",
    description:
      "Our secure website development service provider opt for the modern and latest technology stack AI and Machine Learning. Moreover, in languages we opt for React, Next.js , and Laravel that allow us to launch powerful and high performance websites. ",
    image: javaIcon,
    imgHeight: "420px",
  },
  {
    title: "Custom web Solutions  ",
    description:
      "Opt for custom business website development service in India. We offer end to end custom website solutions for our clients that includes consultation to post support. Our team builds custom websites that align with your business goals. ",
    image: phpIcon,
    imgHeight: "420px",
  },
  {
    title: "Confidential Details  ",
    description:
      "Opt for custom business website development service in India. We offer end to end custom website solutions for our clients that includes consultation to post support. Our team builds custom websites that align with your business goals.",
    image: javaIcon,
    imgHeight: "420px",
  },
  {
    title: "Post Launch Support  ",
    description:
      "For us we don’t only deliver websites, but we partner as the top website development service provider. After launching the start ups to large enterprise level websites, we provide post launch support to our clients. We always stand with them to match the latest tech innovations and meet their customer expectations. ",
    image: javaIcon,
    imgHeight: "420px",
  },
];
export const serviceArr = [
  {
    image: arrowUp,
    title: "Laravel Website Development Services",
    desc: "Leverage all the benefits of PHP based Laravel framework with dedicated web experts. We provide full stack Laravel development services in India that allow us to build dynamic to complex web apps with clean codes and in-built testing models as per the business requirements. ",
    buttonLabel: "Explore Now",
    buttonLink: "/services/laravel-development",
  },
  {
    image: arrowUp,
    title: "E-commerce Website Development Service",
    desc: "Launch your powerful online store that allows start ups - mid sized and large enterprises to reach wider audiences and double their sales. Our top e-commerce web developers in India integrate modern functionalities such as AI driven product recommendation, and seamless payment integration,",
    buttonLabel: "Explore Now",
    buttonLink: "/services/laravel-development",
  },
  {
    image: arrowUp,
    title: "Full Stack Web Development Services ",
    desc: "Get your end to end secure and customised website with best modern practises. Our web developers in India are proficient with both front end and back end development that deliver responsive and user friendly experiences with latest innovations. ",
    buttonLabel: "Explore Now",
    buttonLink: "/services/laravel-development",
  },
  {
    image: arrowUp,
    title: "Web Designing Services ",
    desc: "Connect with your users with an interactive and engaging user interface. At Moonstack, our UI/UX creates immersive designs with advanced visuals with the motive to meet advanced experiences and brand consistent designs that increase interest of users and increase conversion rates. ",
    buttonLabel: "Explore Now",
    buttonLink: "/services/laravel-development",
  },
  {
    image: arrowUp,
    title: "Shopify Website Development Service",
    desc: "Build custom Shopify online stores or upgrade existing ones with inbuilt customizable themes, easy store step up, and fully optimised mobile designs that increase sales and drive growth. ",
    buttonLabel: "Explore Now",
    buttonLink: "/services/laravel-development",
  },
  {
    image: arrowUp,
    title: "CRM Development Service",
    desc: "Integrate custom CRM development solutions into your enterprise that turn complex processes into easier and faster. Our custom CRM solutions are designed in such a way that all information stored at a centralized platform with limited access and automated workflow enhances overall efficiency.  ",
    buttonLabel: "Explore Now",
    buttonLink: "/services/laravel-development",
  },
  {
    image: arrowUp,
    title: "Custom website development ",
    desc: "Our web programmers develop custom websites for start ups to large enterprises that meet all business needs. Our web developers in India have a strategic approach that ensures to deliver high performance and responsive mobile friendly websites for your clients. ",
    buttonLabel: "Explore Now",
    buttonLink: "/services/laravel-development",
  },
  {
    image: arrowUp,
    title: "Website Testing and Migration Service",
    desc: "Before launching websites our team opt for end to end testing and migration services. We opt for manual as well automotive testing with advanced tools for error free launching. Moreover, we also hold expertise in migration website services. ",
    buttonLabel: "Explore Now",
    buttonLink: "/services/laravel-development",
  },
  {
    image: arrowUp,
    title: "Website Support and Maintenance ",
    desc: "Our website development team is available for our clients 24/7. We keep your websites fully responsive, detect bugs on the initial stage, and fix issues on an instant basis to avoid any future complex challenges.  ",
    buttonLabel: "Explore Now",
    buttonLink: "/services/laravel-development",
  },
];

import { StaticImageData } from "next/image";
import importanceImg from "public/assets/cloud-services/cloud-importance-1.png";
import importanceImg3 from "public/assets/cloud-services/cloud-importance-3.png";
import importanceImg2 from "public/assets/cloud-services/backend-importance-2.png";

interface ServicesContentArray {
  image: string | StaticImageData;
  title: string;
  highlightTitle: string;
  description: string[];
  reverse?: boolean;
  bgImage?: string | StaticImageData;
  bgColor?: string;
  buttonText?: string;
  buttonUrl?: string;
}
export interface IAccordionItem {
  answer: string;
  question: string;
}
export const ServicesContentSection: ServicesContentArray[] = [
  {
    image: importanceImg, // you can also use importanceImg.src if needed
    title: "How we create attractive and ",
    highlightTitle: "engaging design to attract users",
    description: [
      "Nowadays, the experience that a user gets while interacting with a business strongly determines its success. Moonstack is among the finest UI UX design agencies in India that specializes in creating visually appealing, customized digital solutions that engage and compel users and yield the desired organizational outcomes. We have professional UI UX designers in our team, ensuring that your digital products are not only visually stunning but also highly functional and user-friendly.",
    ],
    reverse: false,
  },
  {
    image: importanceImg2,
    title: "Reach New Heights and Take Your Branding UI",
    highlightTitle: "and UX to New Levels",
    description: [
      "User interface design is an indispensable part of virtually any present-day web site or application, as it defines how consumers engage with your web property. Our UI UX designer in Jaipur specializes in the enhancement of products’ UI and UX, while focusing on usability and accessibility, as well as the overall aesthetic of the final product. Our user experience design team listens to your instructions, your brand vision, your goals, and your target clients to create a uniform design that will take the user on a smooth journey.",
    ],
    reverse: true,
  },
  {
    image: importanceImg3,
    title: "User Experience Design: Creating",
    highlightTitle: "Impact-full Encounters",
    description: [
      "We, as a leading user experience design company, focus on developing products that shows significant and pertinent experiences to users. We use an approach where the layout, content, and overall experience of the application, product, or website are tailored to the user for a delightful experience. At Moonstack, we supercharge the aesthetic of interfaces because, from our perspective, interface design is not only about the looks; it is the look that works. Our UI UX designers in the India focus on each pixel, starting with the variation of fonts, through the selection of colors, buttons, interactions, and animations, to make sure that your product shines",
    ],
    reverse: false,
  },
];

export const accordionData: IAccordionItem[] = [
  {
    question: " What is the national animal of India?",
    answer:
      "To decide means to choose a direction with clarity and confidence. It’s the process of thinking through different possibilities, understanding what truly matters, and then taking a stand. Every decision, big or small.",
  },
  {
    question:
      "Will you be able to integrate automation processes and trending AI functionalities in websites?",
    answer:
      "Moonstack is recognised as the best business website development service in India. In order to maintain that we keep ourselves updated with the latest trending technologies and solve business complex challenges such as turning manual to automation. Yes, we have a proficient team of AI experts, who integrate automation processes.",
  },
  {
    question:
      "How will you make sure that all my company details and website are fully secure?",
    answer:
      "You are partnering with the top website development company in India. We follow top industry standard security protocols such as security encryption, best web development practices, and meet demands of latest region wise compliances. Our website developers also perform constant audits to make sure that user information is fully protected.",
  },
  {
    question: "Will you provide source code to our team?",
    answer:
      "Of course, after completion of the website development services, we will provide source code access to your team. With source code your team can add and edit functionalities as per your requirements.",
  },
  {
    question: "Do you sign an NDA with your team members?",
    answer:
      "Yes, we sign proper NDA not only with our website development team. We also sign NDA (Non Disclosure Agreement) and other contracts that are valid as per region with our clients that helps us to secure project details and to maintain long term relationships.",
  },
  {
    question: "Can I hire web developers for my project?",
    answer:
      "Yes, you can hire web developers for your project. We offer different hiring modules that allow you to hire developers on hourly, part time, and full time basis. Our web development team makes sure they provide you a resume of the best resources as per you are looking for, and you can choose your web development resources who work dedicatedly for your project.",
  },
];

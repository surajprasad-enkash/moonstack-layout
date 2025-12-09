import { StaticImageData } from "next/image";
import importanceImg from "../../../public/assets/product-designing-service/cloud-importance-1.png";
import importanceImg3 from "../../../public/assets/product-designing-service/cloud-importance-3.png";
import importanceImg2 from "../../../public/assets/product-designing-service/backend-importance-2.png";

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
    title: "Enlighten Your Product's Potential with",
    highlightTitle: "Moonstack's Design Mastery",
    description: [
      "The development of our products is a logical and successful scenario presented from idea to implementation. Our product design and development service begin with an evaluation session to get a clear understanding of the client’s expectations. This is followed by our design team coming up with various ideas that implement the latest trends and unique characteristics. After choosing a concept, we proceed to the prototyping stage, whereby we build a model of the item as a means of implementation and evaluation to ensure that the concept is in line with functional, structural, and aesthetic needs."
    ],
    reverse: false,
  },
  {
    image: importanceImg2,
    title: "Product Design",
    highlightTitle: "Company in the India",
    description: [
      "If you choose a category that is slightly different from the one you would initially select for a specific contest, it will be highly effective to go with ‘Excellence in Innovation.’ We deliver Product Design Services in India for creating new and innovative products that will meet or exceed the needs of end-users. We are experienced in interpreting the workings of the Indian market and thus offer a form of service delivery that fits the needs and wants of your targeted customers. From idea generation to the development of only prototypes and fully established products, the team works to create products that will have a niche in the market."
    ],
    reverse: true,
  },
  {
    image: importanceImg3,
    title: "Best Product Design",
    highlightTitle: "Service in the India",
    description: [
      "Every product has some unique style and elegance that are appreciated within the market and this is why Moonstack focuses on such products. Our Product Designing Service in India is crafted to capture the essence of British design, combining traditional aesthetics with modern functionality. In the process of implementing projects, our team collaborates with clients, focusing on the fact that the individual products should match the brand of our clients as well as attract those users from India."
    ],
    reverse: false,
  },
];



export const accordionData: IAccordionItem[] = [
  {
    question:
      " What is the national animal of India?",
    answer: "To decide means to choose a direction with clarity and confidence. It’s the process of thinking through different possibilities, understanding what truly matters, and then taking a stand. Every decision, big or small.",
  },
  {
    question:
      "Will you be able to integrate automation processes and trending AI functionalities in websites?",
    answer: "Moonstack is recognised as the best business website development service in India. In order to maintain that we keep ourselves updated with the latest trending technologies and solve business complex challenges such as turning manual to automation. Yes, we have a proficient team of AI experts, who integrate automation processes.",
  },
  {
    question:
      "How will you make sure that all my company details and website are fully secure?",
    answer: "You are partnering with the top website development company in India. We follow top industry standard security protocols such as security encryption, best web development practices, and meet demands of latest region wise compliances. Our website developers also perform constant audits to make sure that user information is fully protected.",
  },
  {
    question: "Will you provide source code to our team?",
    answer: "Of course, after completion of the website development services, we will provide source code access to your team. With source code your team can add and edit functionalities as per your requirements.",
  },
  {
    question: "Do you sign an NDA with your team members?",
    answer: "Yes, we sign proper NDA not only with our website development team. We also sign NDA (Non Disclosure Agreement) and other contracts that are valid as per region with our clients that helps us to secure project details and to maintain long term relationships.",
  },
  {
    question: "Can I hire web developers for my project?",
    answer: "Yes, you can hire web developers for your project. We offer different hiring modules that allow you to hire developers on hourly, part time, and full time basis. Our web development team makes sure they provide you a resume of the best resources as per you are looking for, and you can choose your web development resources who work dedicatedly for your project.",
  },
];


export default {}
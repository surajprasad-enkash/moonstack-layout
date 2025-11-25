import { StaticImageData } from "next/image";
import importanceImg from "../../../public/assets/it-support-service/cloud-importance.png";
import importanceImg3 from "../../../public/assets/it-support-service/cloud-importanc-3.png";
import importanceImg2 from "../../../public/assets/it-support-service/cloud-importance-2.png";


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
    title: "How our IT support ",
    highlightTitle: "will help you",
    description: [
      "Keep your business running smoothly with our range of IT solutions that keep you ahead of the curve. Don't put up with outmoded technologies and communications. Let our IT support company deliver smooth service and support so you can focus on what you do best. We are one of the Famous India based IT support companies having a team of expert IT consultants that collaborate with you to offer an assortment of professional services, such as help desk support, server administration, cloud services support, data backup and recovery, IT asset management, and vendor management."
    ],
    reverse: false,
  },
  {
    image: importanceImg2,
    title: "Server Administration",
    highlightTitle: "in India and USA",
    description: [
      "We will be your trusted partner in providing flawless services of Data Backup and Recovery in India for your team, which include phone, internet, and local managed services. Our inclusive end-to-end Server Administration in India offers unmatched cloud computing solutions that redefine the potential of the digital landscape. We know that data loss can be catastrophic for any business. We at Moonstack, provide robust Data Backup and Recovery services in India to safeguard your valuable data. Our innovative backup solutions safeguard that your data is always secure and easily recoverable in the event of unexpected events. We comprehend the importance of data integrity and strive to deliver peace of mind through our reliable services. Our cutting-edge services, like Server Administration in India, are personalized to meet your specific business needs. We offer a wide range of server management services that include security updates, regular maintenance, and performance optimization. With us, you can be assured that your servers are in skilled hands, allowing you to focus on growing your business."
    ],
    reverse: true,
  },
  {
    image: importanceImg3,
    title: "Why Choose",
    highlightTitle: "Moonstack?",
    description: [
      "Choosing Moonstack means partnering with a company that values your business as much as you do. At Moonstack we are focused on quality and doing the right thing by serving our customers. Being a trusted IT support company, we employ preventive measures that help solve future challenges before they escalate. Our intent is to produce efficient and effective solutions that improve the modalities of your enterprise."
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

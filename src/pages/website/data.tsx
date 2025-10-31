import revenue from "../../../public/assets/revenue.svg";
import arrowUp from "../../../public/assets/arrow-up.svg";
import SliderOne from "../../../public/assets/sliderOne.webp";
import SliderTwo from "../../../public/assets/sliderTwo.webp";
import SliderThree from "../../../public/assets/SliderThree.webp";
import SliderFour from "../../../public/assets/sliderFour.webp";
import SliderFive from "../../../public/assets/SliderFive.webp";
import html from "../../../public/assets/htmlWithoutBg.svg";

interface IServiceArray {
  image: string;
  title: string;
  desc: string;
}

export interface IAccordionItem {
  title: string;
  desc: string;
}

export const stepperData = [
  { id: "s1", title: "Fast & Secure", content: "The fox is clever." },
  { id: "s2", title: "Easy Setup", content: "It is agile and quick." },
  { id: "s3", title: "Reliable", content: "Known for keen senses." },
  { id: "s4", title: "Optimized", content: "Efficient and resourceful." },
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
    image: html,
    title: "Web Designing",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: html,
    title: "Mobile Development",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: html,
    title: "Cloud Service",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: html,
    title: "Frontend Development",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: html,
    title: "Backend Development",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
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
export const servicesArr: IServiceArray[] = [
  {
    image: arrowUp,
    title: "Web Designing",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: arrowUp,
    title: "Mobile Development",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: arrowUp,
    title: "Cloud Service",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: arrowUp,
    title: "Frontend Development",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
  {
    image: arrowUp,
    title: "Backend Development",
    desc: "Earney is a financial solution to energize and empower Small and Medium.",
  },
];
export const accordionData: IAccordionItem[] = [
  {
    title: "Do you provide post-launch support?",
    desc: "Yes, we offer 24/7 support.",
  },
  {
    title: "Can I request custom features?",
    desc: "Absolutely, we customize solutions per your needs.",
  },
  {
    title: "What technologies do you use?",
    desc: "We use React, Next.js, Node.js, and more.",
  },
];

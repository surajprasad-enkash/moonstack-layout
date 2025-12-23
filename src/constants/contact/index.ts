export interface IAccordionItem {
  answer: string;
  question: string;
}

export const accordionData: IAccordionItem[] = [
  {
    question: "How soon will Moonstack respond after I submit the form?",
    answer:
      "We usually respond within 1–2 business hours. For urgent requests, we prioritize even faster.",
  },
  {
    question: "Do you offer a free consultation?",
    answer:
      "Yes, we offer a free initial consultation to understand your requirements and suggest the best approach.",
  },
  {
    question: "Can Moonstack help with an ongoing or stuck project?",
    answer:
      "Absolutely. We often step in to fix, improve, or scale existing websites and applications.",
  },
  {
    question: "Do you work with startups as well as enterprises?",
    answer:
      "Yes, we work with startups, SMEs, and large enterprises across multiple industries.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer:
      "Yes, we offer ongoing support, maintenance, and performance optimization as needed.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, Moonstack works with clients across India, the US, Europe, and other global markets.",
  },
];

export default {};

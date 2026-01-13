
import revenue1 from  "@/assets/revenue.svg";
import neeta from  "@/assets/about-us/neetaMan2.webp";
import dheeraj from  "@/assets/about-us/dheerajSirHoldingMIc.webp";
import gallary from  "@/assets/about-us/gallary.webp";
import team from  "@/assets/about-us/teams2.webp";


export const featuresData = [
  {
    imgSrc: revenue1.src,
    title: "115+",
    description: "Project we have complete",
  },
  {
    imgSrc: revenue1.src,
    title: "98%",
    description: "Project success rate",
  },
  {
    imgSrc: revenue1.src,
    title: "10 mins",
    description: "Avg reply time",
  },
  {
    imgSrc: revenue1.src,
    title: "13 years",
    description: "Experience",
  },
];

export const timelineData = [
  {
    title: "2016 - The Beginning",
    description:
      "Onboard is designed to make hiring easier, faster, and more transparent for everyone.",
    day: "SAT",
    date: "24",
    image: gallary.src,
  },
  {
    title: "2017 - Expansion",
    description:
      "Onboard introduced new features and improved filtering options.",
    day: "SAT",
    date: "24",
    image: gallary.src,
  },
  {
    title: "2018 - Growth",
    description:
      "Our platform grew rapidly, enabling more freelancers and companies to work together.",
    day: "SAT",
    date: "24",
    image: gallary.src,
  },
  {
    title: "2020 - Innovation",
    description:
      "We launched AI-powered intelligent matching and advanced hiring tools.",
    day: "SAT",
    date: "24",
    image: gallary.src,
  },
];

export const steps = [
  {
    number: 1,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
  {
    number: 2,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
  {
    number: 3,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
  {
    number: 4,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
  {
    number: 5,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
  {
    number: 6,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
  {
    number: 7,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
  {
    number: 8,
    title: "Mission",
    description:
      "Define project goals, gather requirements, and outline timelines to set a clear path for development",
  },
];
export type ValueCard = {
  title?: string;
  description?: string;
  image?: string;
  icon?: string;
  ctaText?: string;
  className?: string;
};


export const valuesData: ValueCard[] = [
  {
    image: neeta.src,
    className: "",
  },
  {
    title: "Growth",
    description:
      "Constantly working on improving our skills and knowledge base, so that we can continue to provide the best service to our clients, with the best quality end results.",
    className: "aboutValueSectionBoxBg1 text-black",
  },
  { image: dheeraj.src },
  {
    title: "People",
    description:
      "Creating honest, trustworthy and mutually beneficial relationships with our clients. Truly caring for all our team members.",
    className: "aboutValueSectionBoxBg2 text-white",
  },
  {
    image: team.src,
    ctaText: "Send your CV to join",
    className: "relative",
  },
  {
    title: "Awareness",
    description:
      "Always remain purposeful when it comes to tasks and their completion. Being aware helps to stay fully involved in the process.",
    className: "aboutValueSectionBoxBg2 text-white",
  },
];

export default {};

import { StaticImageData } from "next/image";
import { IAccordionItem } from "@/components/Homepage/FAQ";

export interface PageData {
  hero: {
    title: { text: string; color: string }[];
    description: { text: string; color: string }[];
    image: StaticImageData | string;
    backgroundImage?: StaticImageData | string;
    buttonText?: string;
  };
  solutions: {
    headingContent: string;
    subHeadingText: string;
  };
  pointsTitle?: { text: string; color: string }[];
  solutionTitle?: { text: string; color: string }[];
  solutionPoints?: string[];
  points: string[];
  featuresData: {
    imgSrc: StaticImageData | string;
    title: string;
    description: string;
  }[];
  tabs?: {
    headingText: string;
    subHeadingText: string;
    tabs: {
      id: number;
      title: string;
      description: string;
      image: StaticImageData | string;
      imgHeight?: string;
    }[];
  };
  utilisArr?: {
    image: StaticImageData | string;
    category: string;
    title: string;
    desc: string;
  }[];
  processSteps?: {
    headingText: string;
    subHeadingText: string;
    steps: {
      id?: number;
      title: string;
      description: string;
    }[];
  };
  whyChooseData: {
    headingText: string;
    subHeadingText: string;
    steps: {
      icon: StaticImageData | string;
      title: string;
      description: string;
    }[];
  };
  slides: {
    image: StaticImageData | string;
    title: string;
    desc: string;
  }[];
  banner?: {
    headingText: { text: string; color?: string }[];
    subHeadingText?: { text: string; color?: string }[];
    image: StaticImageData | string;
    imageHeight?: string;
  };

  quoteBanner?: {
    headingText: { text: string; color?: string }[];
    subHeadingText?: { text: string; color?: string }[];
    image: StaticImageData | string;
    buttonText?: string;
  };

  accordionData: IAccordionItem[];
  featureDataContent?: {
    headingContent: { text: string; color: string }[];
    subHeadingText: string;
    featuresData: {
      imgSrc: StaticImageData | string;
      title: string;
      description: string;
    }[];
  };
}

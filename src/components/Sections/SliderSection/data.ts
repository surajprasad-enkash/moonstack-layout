import SliderOne from "public/assets/sliderOne.webp";
import SliderTwo from "../pubpublic/assets/.webp";
import SliderThree from "../pubpublic/assets/ee.webp";
import SliderFour from "../pubpublic/assets/r.webp";
import SliderFive from "../pubpublic/assets/e.webp";
import HealthCare from "../pubpublic/assets/s/healthCare.webp";
import Financial from "../pubpublic/assets/s/finance.webp";
import Education from "../pubpublic/assets/s/education.webp";
import Ecommerce from "../pubpublic/assets/s/e-commerce.webp";
import Saas from "../pubpublic/assets/s/sass.webp";
import HumanResources from "../pubpublic/assets/s/humanResource.webp";
import Trading from "../pubpublic/assets/s/trading.webp";
import News from "../pubpublic/assets/s/media.webp";
import Institutions from "../pubpublic/assets/s/institution.webp";
import Sports from "../pubpublic/assets/s/sports.webp";
import Lifestyle from "../pubpublic/assets/s/lifestyle.webp";
import Businesses from "../pubpublic/assets/s/businesses.webp";
import AI from "../pubpublic/assets/s/ai.webp";
import Manufacturing from "../pubpublic/assets/s/manufacture.webp";
import Transportation from "../pubpublic/assets/s/transpotation.webp";
import RealEstate from "../pubpublic/assets/s/realEstate.webp";
import Travel from "../pubpublic/assets/s/travel.webp";
import Entertainment from "../pubpublic/assets/s/entertenment.webp";

import { StaticImageData } from "next/image";

export interface ISliderItem {
  image: StaticImageData | string;
  title: string;
}

export const slides: ISliderItem[] = [
  {
    image: HealthCare,
    title: "Healthcare",
  },
  {
    image: Financial,
    title: "Fintech & Financial Services",
  },
  {
    image: Education,
    title: "Education & EdTech",
  },
  {
    image: Ecommerce,
    title: "E-commerce & Retail",
  },
  {
    image: Saas,
    title: "SaaS & Technology Platforms",
  },
  {
    image: HumanResources,
    title: "Human Resources & Employee Management",
  },
  {
    image: Trading,
    title: "Trading & Investment Platforms",
  },
  {
    image: News,
    title: "News, Media & Publishing",
  },
  {
    image: Institutions,
    title: "Universities & Institutions",
  },
  {
    image: Sports,
    title: "Sports & Fitness",
  },
  {
    image: Lifestyle,
    title: "Beauty, Wellness & Lifestyle",
  },
  {
    image: Businesses,
    title: "Service-Based Businesses",
  },
  {
    image: AI,
    title: "AI & Data-Driven Products",
  },
  {
    image: Manufacturing,
    title: "Manufacturing",
  },
  {
    image: Transportation,
    title: "Transportation",
  },
  {
    image: RealEstate,
    title: "Real Estate",
  },
  {
    image: Travel,
    title: "Travel",
  },
  {
    image: Entertainment,
    title: "Entertainment",
  },
];

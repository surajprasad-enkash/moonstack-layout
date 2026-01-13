import SliderOne from "@/assets/sliderOne.webp";
import SliderTwo from "../pub@/assets/.webp";
import SliderThree from "../pub@/assets/ee.webp";
import SliderFour from "../pub@/assets/r.webp";
import SliderFive from "../pub@/assets/e.webp";
import HealthCare from "../pub@/assets/s/healthCare.webp";
import Financial from "../pub@/assets/s/finance.webp";
import Education from "../pub@/assets/s/education.webp";
import Ecommerce from "../pub@/assets/s/e-commerce.webp";
import Saas from "../pub@/assets/s/sass.webp";
import HumanResources from "../pub@/assets/s/humanResource.webp";
import Trading from "../pub@/assets/s/trading.webp";
import News from "../pub@/assets/s/media.webp";
import Institutions from "../pub@/assets/s/institution.webp";
import Sports from "../pub@/assets/s/sports.webp";
import Lifestyle from "../pub@/assets/s/lifestyle.webp";
import Businesses from "../pub@/assets/s/businesses.webp";
import AI from "../pub@/assets/s/ai.webp";
import Manufacturing from "../pub@/assets/s/manufacture.webp";
import Transportation from "../pub@/assets/s/transpotation.webp";
import RealEstate from "../pub@/assets/s/realEstate.webp";
import Travel from "../pub@/assets/s/travel.webp";
import Entertainment from "../pub@/assets/s/entertenment.webp";

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

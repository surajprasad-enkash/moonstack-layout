import SliderOne from "@/assets/sliderOne.webp";
import SliderTwo from "@/assets/.webp";
import SliderThree from "@/assets/ee.webp";
import SliderFour from "@/assets/r.webp";
import SliderFive from "@/assets/e.webp";
import HealthCare from "@/assets/s/healthCare.webp";
import Financial from "@/assets/s/finance.webp";
import Education from "@/assets/s/education.webp";
import Ecommerce from "@/assets/s/e-commerce.webp";
import Saas from "@/assets/s/sass.webp";
import HumanResources from "@/assets/s/humanResource.webp";
import Trading from "@/assets/s/trading.webp";
import News from "@/assets/s/media.webp";
import Institutions from "@/assets/s/institution.webp";
import Sports from "@/assets/s/sports.webp";
import Lifestyle from "@/assets/s/lifestyle.webp";
import Businesses from "@/assets/s/businesses.webp";
import AI from "@/assets/s/ai.webp";
import Manufacturing from "@/assets/s/manufacture.webp";
import Transportation from "@/assets/s/transpotation.webp";
import RealEstate from "@/assets/s/realEstate.webp";
import Travel from "@/assets/s/travel.webp";
import Entertainment from "@/assets/s/entertenment.webp";

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

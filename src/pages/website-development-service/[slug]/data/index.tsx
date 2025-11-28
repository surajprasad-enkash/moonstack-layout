import { laravel } from "./laravel-website-development-service";
import { crm } from "./CRM-Development-service";
import { ecommerce } from "./e-commerce-website-development-service";
import { fullstack } from "./full-stack-website-development-service";
import { shopify } from "./shopify-website-development-service";
import { webDesigning } from "./web-designing-service";
import { wordPress } from "./wordPress-website-development-service";
import type { PageData } from "@/types/web-development-data-type";

export type TPageKeys =
  | "ecommerce"
  | "fullstack"
  | "crm"
  | "laravel"
  | "shopify"
  | "webDesigning"
  | "wordPress";

export const pagesData: Record<TPageKeys, PageData> = {
  ecommerce: ecommerce,
  fullstack: fullstack,
  crm: crm,
  laravel: laravel,
  shopify: shopify,
  webDesigning: webDesigning,
  wordPress: wordPress,
};

export const pagesKeys: Record<string, TPageKeys> = {
  "laravel-website-development-service": "laravel",
  "e-commerce-website-development-service": "ecommerce",
  "full-stack-website-development-service": "fullstack",
  "web-designing-service": "webDesigning",
  "shopify-website-development-service": "shopify",
  "CRM-Development-service": "crm",
  "wordPress-website-development-service": "wordPress",
  // fullstack: "",
  // crm: "",
  // laravel: "",
  // shopify: "",
  // webDesigning: "",
  // wordPress: "",
};

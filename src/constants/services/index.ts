import { laravel } from "./laravel-website-development-service"
import { crm } from "./CRM-Development-service"
import { ecommerce } from "./e-commerce-website-development-service"
import { fullstack } from "./full-stack-website-development-service"
import { shopify } from "./shopify-website-development-service"
import { webDesigning } from "./web-designing-service"
import { wordPress } from "./wordPress-website-development-service"
import { android } from "./android-app-development-company"
import { ios } from "./ios-app-development-company"
import { react_native } from "./react-native-app-development-company"
import { app_maintenance } from "./mobile-app-maintenance-company"
import { pwa } from "./pwa-development-company"
import { ai } from "./ai-agent-development-company"
import { cloud } from "./cloud-company"
import { product } from "./product-designing-company"
import { ui_ux } from "./ui-ux-designing-company"
import { it_support } from "./it-support-company"
import { seo } from "./search-engine-optimization-company"
import { vueJs } from "./vue-js"
import { reactJs } from "./react-js"
import { cakePhp } from "./cake-php"
import { angularJs } from "./angular-js"
import { codeigniter } from "./codeigniter"
import { html } from "./html"
import { css } from "./css"
import { dotNet } from "./dot-net"
import { javascript } from "./javascript"
import { nodeJs } from "./node-js"
import { testing } from "./mobile-app-testing"
import { flutter } from "./flutter-app-development-company"
import { php } from "./php"
import { java } from "./java"
import { mobileAppDev } from "./mobile-app-development-company"

import type { PageData } from "@/types/web-development-data-type"
import { websiteDevelopment } from "./website-development-company"

export type TPageKeys =
  | "ecommerce"
  | "fullstack"
  | "crm"
  | "laravel"
  | "shopify"
  | "webDesigning"
  | "android"
  | "ios"
  | "react_native"
  | "app_maintenance"
  | "pwa"
  | "ai"
  | "seo"
  | "cloud"
  | "product"
  | "ui_ux"
  | "it_support"
  | "wordPress"
  | "nodeJs"
  | "javascript"
  | "dotNet"
  | "css"
  | "html"
  | "codeigniter"
  | "angularJs"
  | "cakePhp"
  | "reactJs"
  | "testing"
  | "flutter"
  | "java"
  | "php"
  | "vueJs"
  | "websiteDevelopment"
  | "mobileAppDev"

export const pagesData: Record<TPageKeys, PageData> = {
  ecommerce: ecommerce,
  fullstack: fullstack,
  crm: crm,
  laravel: laravel,
  shopify: shopify,
  webDesigning: webDesigning,
  wordPress: wordPress,
  android: android,
  ios: ios,
  react_native: react_native,
  app_maintenance: app_maintenance,
  pwa: pwa,
  ui_ux: ui_ux,
  product: product,
  it_support: it_support,
  cloud: cloud,
  seo: seo,
  ai: ai,
  nodeJs: nodeJs,
  javascript: javascript,
  dotNet: dotNet,
  css: css,
  html: html,
  codeigniter: codeigniter,
  angularJs: angularJs,
  cakePhp: cakePhp,
  reactJs: reactJs,
  vueJs: vueJs,
  flutter: flutter,
  java: java,
  php: php,
  testing: testing,
  mobileAppDev: mobileAppDev,
  websiteDevelopment: websiteDevelopment,
}

export const pagesKeys: Record<string, TPageKeys> = {
  "laravel-website-development-company": "laravel",
  "ecommerce-website-development-company": "ecommerce",
  "full-stack-website-development-company": "fullstack",
  "web-designing-company": "webDesigning",
  "shopify-website-development-company": "shopify",
  "crm-development-company": "crm",
  "wordpress-website-development-company": "wordPress",
  "android-app-development-company": "android",
  "ios-app-development-company": "ios",
  "react-native-app-development-company": "react_native",
  "mobile-app-maintenance-company": "app_maintenance",
  "pwa-development-company": "pwa",
  "wordPress-website-development-service": "wordPress",
  "it-support-company": "it_support",
  "ui-ux-designing-company": "ui_ux",
  "product-designing-company": "product",
  "cloud-company": "cloud",
  "search-engine-optimization-company": "seo",
  "ai-agent-development-company": "ai",
  "nodejs-development-company": "nodeJs",
  "javascript-development-company": "javascript",
  "testing-development-company": "testing",
  "flutter-development-company": "flutter",
  "vuejs-development-company": "vueJs",
  "reactjs-development-company": "reactJs",
  "cakephp-development-company": "cakePhp",
  "codeigniter-development-company": "codeigniter",
  "angularjs-development-company": "angularJs",
  "css3-development-company": "css",
  "html5-development-company": "html",
  "dotnet-development-company": "dotNet",
  "java-development-company": "java",
  "php-development-company": "php",
  "mobile-app-development-company": "mobileAppDev",
  "website-development-company": "websiteDevelopment",
}

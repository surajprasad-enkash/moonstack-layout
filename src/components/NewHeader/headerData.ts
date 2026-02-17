
import Uiux from "@/components/ServicesSvg/HeaderSvgIcons/WebsiteDev"
import Ecomm from "@/components/ServicesSvg/HeaderSvgIcons/Ecomm"
import WebDesining from "@/components/ServicesSvg/HeaderSvgIcons/WebDesining"
import Angular from "@/components/ServicesSvg/HeaderSvgIcons/Angular"
import React from "@/components/ServicesSvg/HeaderSvgIcons/ReactIcon"
import FullStack from "@/components/ServicesSvg/HeaderSvgIcons/FullStack"
import Laravel from "@/components/ServicesSvg/HeaderSvgIcons/Laravel"
import Python from "@/components/ServicesSvg/HeaderSvgIcons/Python"

import Android from "@/components/ServicesSvg/HeaderSvgIcons/Android"
import Ios from "@/components/ServicesSvg/HeaderSvgIcons/Ios"
import Pwa from "@/components/ServicesSvg/HeaderSvgIcons/Pwa"
import Maintaince from "@/components/ServicesSvg/HeaderSvgIcons/Maintanance"
import Seo from "@/components/ServicesSvg/HeaderSvgIcons/Seo"
import Cloud from "@/components/ServicesSvg/HeaderSvgIcons/Cloud"
import About from "@/components/ServicesSvg/HeaderSvgIcons/AboutUs"
import Blog from "@/components/ServicesSvg/HeaderSvgIcons/Blog"
import CaseStudy from "@/components/ServicesSvg/HeaderSvgIcons/CaseStudy"

export const megaMenuData = {
    "Frontend Development": [
        {
            title: "Website Development",
            Icon: Uiux,
            url: "/services/website-development-company",
            subtitle: "Get High-performance websites",
        },
        {
            title: "ReactJS",
            Icon: React,
            url: "/services/reactjs-development-company",
            subtitle: "Fast interfaces built with React",
        },
        {
            title: "E-Com Development",
            subtitle: "Get Secure, scalable solutions",
            Icon: Ecomm,
            url: "/services/ecommerce-website-development-company",
        },

        {
            title: "Web Designing",
            subtitle: "Visually striking designs- engage ",
            Icon: WebDesining,
            url: "/services/web-designing-company",
        },

        {
            title: "AngularJs",
            Icon: Angular,
            url: "/services/angularjs-development-company",
            subtitle: "Robust Angular solutions ",
        },

        // {
        //   title: "Vue.js",
        //   icon: frontDevIcon3.src,
        //   url: "/services/vuejs-development-company",
        //   subtitle: "Get Lightweight frontends",
        // },

        // {
        //   title: "JavaScript",
        //   icon: frontDevIcon5.src,
        //   url: "/services/javascript-development-company",
        //   subtitle: "Interactive web experiences",
        // },
        // {
        //   title: "PHP",
        //   icon: backendicon8.src,
        //   url: "/services/php-development-company",
        //   subtitle: "Reliable and flexible  web solutions",
        // },
        {
            title: "Full Stack Development",
            Icon: FullStack,
            url: "/services/full-stack-website-development-company",
            subtitle: "Reliable and flexible  web solutions",
        },
        {
            title: "Shopify",
            Icon: Ecomm,
            url: "/services/shopify-website-development-company",
            subtitle: "Stores built for growth and sales",
        },
    ],

    "Backend Development": [
        // {
        //   title: ".NET",
        //   icon: backendicon1.src,
        //   url: "/services/dotnet-development-company",
        //   subtitle: "Get Enterprise-grade applications",
        // },
        // {
        //   title: "NodeJS",
        //   icon: backendicon2.src,
        //   url: "/services/nodejs-development-company",
        //   subtitle: "Scalable backend solutions for apps",
        // },
        {
            title: "Laravel",
            Icon: Laravel,
            url: "/services/laravel-website-development-company",
            subtitle: "Get Secure, scalable solutions",
        },

        {
            title: "Python",
            Icon: Python,
            url: "/services/python-development-company",
            subtitle: "Powerful  solutions for web and AI",
        },
        // {
        //   title: "Java",
        //   icon: backendicon7.src,
        //   url: "/services/java-development-company",
        //   subtitle: "Secure, high-performance  applications",
        // },
    ],

    "Application Development": [
        {
            title: "Android App Development",
            subtitle: "Apps designed for growth",
            Icon: Android,
            url: "/services/android-app-development-company",
        },
        {
            title: "iOS App Development",
            subtitle: "Get iOS apps for better experiences",
            Icon: Ios,
            url: "/services/ios-app-development-company",
        },
        {
            title: "React Native  Development",
            subtitle: "Apps with  speed and efficiency",
            Icon: React,
            url: "/services/react-native-app-development-company",
        },
        {
            title: "App Maintenance Service",
            subtitle: "Keep apps secure and smoothly",
            Icon: Maintaince,
            url: "/services/mobile-app-maintenance-company",
        },
        {
            title: "PWA Development",
            subtitle: "Fast, reliable web app",
            Icon: Pwa,
            url: "/services/pwa-development-company",
        },
    ],

    "Other Services": [
        {
            title: "Search Engine Optimization",
            subtitle: "Organic Growth, Technical SEO, Content Strategy",
            Icon: Seo,
            url: "/services/search-engine-optimization-company",
        },
        {
            title: "UI/UX",
            subtitle: "Figma, Adobe XD, User Research, Prototyping",
            Icon: Uiux,
            url: "/services/ui-ux-designing-company",
        },
        {
            title: "Product",
            subtitle: "Concept Ideation, Market Analysis, Rapid MVP",
            Icon: FullStack,
            url: "/services/product-designing-company",
        },
        {
            title: "Cloud",
            subtitle: "AWS, Azure, Server Security, Scalable Infrastructure",
            Icon: Cloud,
            url: "/services/cloud-company",
        },
    ],
}

export const aboutMenu = [
    {
        title: "About",
        subtitle: "Driven by innovation, powered by experience",
        href: "/about-us",
        Icon: About,
    },
    {
        title: "Blogs",
        subtitle: "Insights, trends, and expert tech knowledge",
        href: "/blogs",
        Icon: Blog,
    },
    // {
    //   title: "Careers",
    //   subtitle: "Grow your career with us",
    //   href: "/careers",
    //   icon: career.src,
    // },
    {
        title: "Case Study",
        subtitle: "Real projects, real results, real impact",
        href: "/case-study",
        Icon: CaseStudy,
    },
]

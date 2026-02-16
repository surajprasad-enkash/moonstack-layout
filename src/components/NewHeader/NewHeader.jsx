"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";
import CustomButton from "../CommanButton/CommanButton";
import ProjectInquiryModal from "@/components/ProjectInquiryModal/ProjectInquiryModal";
import { IoIosArrowDown } from "react-icons/io";

import HeroVideoModal from "@/components/NewHomePage/HeroVideoModal";
import { useVideoModal } from "@/context/VideoModalContext";

import logo from "@/assets/logo-white.png";

//other
import Uiux from "@/components/ServicesSvg/HeaderSvgIcons/WebsiteDev";
import Ecomm from "@/components/ServicesSvg/HeaderSvgIcons/Ecomm";
import WebDesining from "@/components/ServicesSvg/HeaderSvgIcons/WebDesining";
import Angular from "@/components/ServicesSvg/HeaderSvgIcons/Angular";
import React from "@/components/ServicesSvg/HeaderSvgIcons/React";
import FullStack from "@/components/ServicesSvg/HeaderSvgIcons/FullStack";
import Laravel from "@/components/ServicesSvg/HeaderSvgIcons/Laravel";
import Python from "@/components/ServicesSvg/HeaderSvgIcons/Python";
import Android from "@/components/ServicesSvg/HeaderSvgIcons/Android";
import Ios from "@/components/ServicesSvg/HeaderSvgIcons/Ios";
import Pwa from "@/components/ServicesSvg/HeaderSvgIcons/Pwa";
import Maintaince from "@/components/ServicesSvg/HeaderSvgIcons/Maintanance";
import Seo from "@/components/ServicesSvg/HeaderSvgIcons/Seo";
import Cloud from "@/components/ServicesSvg/HeaderSvgIcons/Cloud";
import About from "@/components/ServicesSvg/HeaderSvgIcons/AboutUs";
import Blog from "@/components/ServicesSvg/HeaderSvgIcons/Blog";
import CaseStudy from "@/components/ServicesSvg/HeaderSvgIcons/CaseStudy";


import HoverSlideText from "../HoverSlideText";

export default function NewHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState(
    "Application Development",
  );

  const isActive = (path) => pathname === path;

  // const isServicesActive = () =>
  //   pathname &&
  //   (pathname.startsWith("/application-development") ||
  //     pathname.startsWith("/website-development-service") ||
  //     pathname.startsWith("/frontend-development") ||
  //     pathname.startsWith("/backend-developer") ||
  //     pathname.startsWith("/services/search-engine-optimization-company") ||
  //     pathname.startsWith("/services/product-designing-service") ||
  //     pathname.startsWith("/services/ui-ux-designing-service") ||
  //     pathname.startsWith("/services/cloud-services") ||
  //     pathname.startsWith("/services/industries"));

  // const isCompanyActive = () =>
  //   pathname &&
  //   (pathname.startsWith("/about-us") ||
  //     pathname.startsWith("/career") ||
  //     pathname.startsWith("/blogs") ||
  //     pathname.includes("company"));

  const megaMenuData = {
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
        title: "E-Comm Development",
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
  };
  const aboutMenu = [
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
  ];

  const {
    "Frontend Development": frontend,
    "Backend Development": backend,
    "Application Development": application,
    "Other Services": otherServices,
  } = megaMenuData;

  // const leftMenuLinks = {
  //   "Application Development": "",

  //   "Frontend Development": "",
  //   "Backend Development": "",
  //   "Search Engine Optimization": "",
  //   "Product Designing": "",
  //   "Ui/Ux Designing": "",
  //   "Cloud Service": "",
  //   Industries: "",
  // };
  const [openPopup, setOpenPopup] = useState(false);
  const { open, closeVideo } = useVideoModal();
  return (
    <>
      <header className="fixed inset-x-0 top-0 left-0 z-50 w-full bg-[rgba(11,11,11,0.376)] px-5 text-white backdrop-blur-[5px] will-change-[background]">

        <div className="container mx-auto flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <img src={logo.src} className="w-42" alt="Moonstack" />
          </Link>

          <nav className="relative hidden items-center gap-10 text-sm font-medium md:flex">
            <ul className="menu-list flex items-center gap-9">
              <li>
                <Link href="/" className="menu-item group">
                  <HoverSlideText text="Home" active={isActive("/")} />
                </Link>
              </li>

              <li
                className={`menu-item megaMenuItem relative`}
                onMouseEnter={() => setOpenMenu("services")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {" "}
                <Link href="/services">
                  <button className="flex cursor-pointer items-center gap-2 transition">
                    <HoverSlideText
                      text="Services"
                      active={openMenu === "services"}
                    />
                    <IoIosArrowDown
                      className={`ml-1 text-sm transition-colors ${openMenu === "services"
                        ? "text-[#d6ff00]"
                        : "text-white"
                        }`}
                    />
                  </button>
                </Link>
                {openMenu === "services" && (
                  <div className="absolute top-[20px] left-[50%] translate-x-[-38%] pt-10 text-black">
                    {/* TOP SECTION */}
                    <div className="no-scrollbar h-[83vh] w-[100vw] max-w-[1440px] overflow-auto rounded-[24px] rounded-tl-none bg-white p-8 pt-[px]">
                      <div className="grid grid-cols-[2fr_1fr_1fr] gap-x-8">
                        {/* FRONTEND (2 columns) */}
                        <div>
                          <h4 className="mb-6 !text-[14px] !font-bold uppercase">
                            Frontend Development
                          </h4>

                          <ul className="grid grid-cols-2 gap-x-8 ">
                            {frontend.map((item, i) => (
                              <li key={i} className="submenuList h-[75px]">
                                <Link
                                  href={item.url}
                                  className="submenuLink group flex w-full gap-3"
                                >
                                  <item.Icon />

                                  <div className="w-full">
                                    <p className="!text-[14px] flex w-full items-center !font-semibold uppercase">
                                      {item.title}

                                      <IoIosArrowRoundForward className="ml-auto h-[24px] w-[24px] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                                    </p>

                                    <p className="!text-[12px] mt-1 leading-[1.5] text-gray-600">
                                      {item.subtitle}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* BACKEND (1 column) */}
                        <div>
                          <h4 className="mb-6 !text-[14px] !font-bold uppercase">
                            Backend Development
                          </h4>

                          <ul className="gap-x-10 gap-y-2">
                            {backend.map((item, i) => (
                              <li key={i} className="submenuList h-[75px]">
                                <Link
                                  href={item.url}
                                  className="submenuLink group flex w-full gap-3"
                                >
                                  <item.Icon />

                                  <div className="w-full">
                                    <p className="!text-[14px] flex w-full items-center !font-semibold uppercase">
                                      {item.title}

                                      <IoIosArrowRoundForward className="ml-auto h-[24px] w-[24px] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                                    </p>

                                    <p className="!text-[12px] mt-1 leading-[1.5] text-gray-600">
                                      {item.subtitle}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* APPLICATION (1 column) */}
                        <div>
                          <h4 className="mb-6 !text-[14px] !font-bold uppercase">
                            Application Development
                          </h4>

                          <ul className="gap-x-10 gap-y-2">
                            {application.map((item, i) => (
                              <li key={i} className="submenuList h-[75px]">
                                <Link
                                  href={item.url}
                                  className="submenuLink group flex w-full gap-3"
                                >
                                  <item.Icon />

                                  <div className="w-full">
                                    <p className="!text-[14px] flex w-full items-center !font-semibold uppercase">
                                      {item.title}

                                      <IoIosArrowRoundForward className="ml-auto h-[24px] w-[24px] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                                    </p>

                                    <p className="!text-[12px] mt-1 leading-[1.5] text-gray-600">
                                      {item.subtitle}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* DIVIDER */}
                      <div className="my-1 h-px w-full bg-gray-200" />

                      {/* BOTTOM : OTHER SERVICES */}
                      <div className="rounded-xl bg-[#00CF4912] p-5">
                        <h4 className="mb-2 !text-[14px] !font-bold uppercase">
                          More Services
                        </h4>

                        <div className="flex flex-wrap justify-between">
                          {otherServices.map((item, i) => (
                            <div key={i} className="submenuList md:w-[25%] h-[75px]">
                              <Link
                                href={item.url}
                                className="submenuLink group flex w-full gap-3"
                              >
                                <item.Icon />


                                <div className="w-full">
                                  <p className="!text-[14px] flex w-full items-center !font-semibold uppercase">
                                    {item.title}

                                    <IoIosArrowRoundForward className="ml-auto h-[24px] w-[24px] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                                  </p>

                                  <p className="!text-[12px] mt-1 leading-[1.5] text-gray-600">
                                    {item.subtitle}
                                  </p>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`menu-item megaMenuItem relative`}
                onMouseEnter={() => setOpenMenu("company")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="group relative flex h-[24px] cursor-pointer items-center gap-1 overflow-hidden">
                  <HoverSlideText text="Company" />
                  <IoIosArrowDown className="ml-1 text-sm transition-colors group-hover:text-[#d6ff00]" />
                </button>

                {openMenu === "company" && (
                  <div className="navbar_dropmenu-desktop absolute left-1/2 w-40 -translate-x-1/2 pt-10">
                    <ul className="z-50 grid grid-cols-2 gap-4 rounded-3xl rounded-tl-none bg-white p-11 text-black">
                      {aboutMenu.map((item, i) => (
                        <li key={i} className="submenuList h-[75px]">
                          <Link
                            href={item.href}
                            className="submenuLink group flex w-full gap-3"
                          >
                            <item.Icon />


                            <div className="w-full">
                              <p className="!text-[14px] flex w-full items-center !font-semibold uppercase">
                                {item.title}

                                <IoIosArrowRoundForward className="ml-auto h-[24px] w-[24px] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                              </p>

                              <p className="!text-[12px] mt-1 leading-[1.5] text-gray-600">
                                {item.subtitle}
                              </p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>


              <li className={`menu-item megaMenuItem relative`}>
                <Link href="/services/ai-agent-development-company">
                  <HoverSlideText
                    text="AI"
                    active={isActive("/services/ai-agent-development-company")}
                  />
                </Link>
              </li>
              <li className={`menu-item megaMenuItem relative`}>
                <Link href="/industries">
                  <HoverSlideText
                    text="Industries"
                    active={isActive("/industries")}
                  />
                </Link>
              </li>
              {/* CONTACT */}
              <li className={`menu-item megaMenuItem relative`}>
                <Link href="/contact-us">
                  <HoverSlideText
                    text="Contact us"
                    active={isActive("/contact-us")}
                  />
                </Link>
              </li>
            </ul>
          </nav>

          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-3">
            <CustomButton
              text="Get a quote"
              onClick={() => setOpenPopup(true)}
              className="px-5 py-2 tracking-[0.8px] whitespace-nowrap text-black"
              variant="headerButton"
            />
          </div>
        </div>
      </header>
      <HeroVideoModal
        isOpen={open}
        onClose={closeVideo}
        videoId="NVRVwo9ZRq8"
      />
      <ProjectInquiryModal
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />
    </>
  );
}

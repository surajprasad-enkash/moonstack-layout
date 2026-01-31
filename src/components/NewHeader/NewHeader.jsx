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

import about from "@/assets/header/about-us.svg";
import logo from "@/assets/logo-white.png";
import blog from "@/assets/header/blog.svg";
import case_study from "@/assets/header/case-studies.svg";
import career from "@/assets/header/carrer.svg";

import appDevIcon2 from "@/assets/header/Ios.svg";
import appDevIcon3 from "@/assets/header/pwa.svg";
import appDevIcon4 from "@/assets/header/react-svgrepo-com.svg";
import appDevIcon5 from "@/assets/header/andriod-development.svg";
import appDevIcon6 from "@/assets/header/mobile-app-developing.svg";

// web development icon

import webDevIcon4 from "@/assets/header/e-commerce.svg";
import webDevIcon5 from "@/assets/header/web-designer.svg";


// frontend development icon
import frontDevIcon1 from "@/assets/header/frontendIcon/angularjs.svg";

import frontDevIcon3 from "@/assets/header/frontendIcon/vue-js-svgrepo-com.svg";

import frontDevIcon5 from "@/assets/header/frontendIcon/javascript-fill-svgrepo-com.svg";
import frontDevIcon6 from "@/assets/header/frontendIcon/react-svgrepo-com.svg";

// Backend development icon
import backendicon1 from "@/assets/header/backend/dotnet.svg";
import backendicon2 from "@/assets/header/backend/nodejs.svg";
import backendicon3 from "@/assets/header/backend/laravel.svg";
import backendicon6 from "@/assets/header/backend/python.svg";
import backendicon7 from "@/assets/header/backend/java-filled.svg";
import backendicon8 from "@/assets/header/backend/php.svg";

//other
import Uiux from "@/assets/header/uiux.svg";
import seo from "@/assets/header/seo.svg";
import product from "@/assets/header/product.svg";
import cloud from "@/assets/header/cloud.svg";
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
        title: "ReactJS",
        icon: frontDevIcon6.src,
        url: "/services/reactjs-development-company",
        subtitle: "Fast interfaces built with React",
      },
      {
        title: "E-Com  Development",
        subtitle: "Get Secure, scalable solutions",
        icon: webDevIcon4.src,
        url: "/services/ecommerce-website-development-company",
      },

      {
        title: "Web Designing",
        subtitle: "Visually striking designs- engage ",
        icon: webDevIcon5.src,
        url: "/services/web-designing-company",
      },

      {
        title: "AngularJs",
        icon: frontDevIcon1.src,
        url: "/services/angularjs-development-company",
        subtitle: "Robust Angular solutions ",
      },

      {
        title: "Vue.js",
        icon: frontDevIcon3.src,
        url: "/services/vuejs-development-company",
        subtitle: "Get Lightweight frontends",
      },

      {
        title: "JavaScript",
        icon: frontDevIcon5.src,
        url: "/services/javascript-development-company",
        subtitle: "Interactive web experiences",
      },
      {
        title: "PHP",
        icon: backendicon8.src,
        url: "/services/php-development-company",
        subtitle: "Reliable and flexible  web solutions",
      },
      {
        title: "Full Stack Development",
        icon: backendicon8.src,
        url: "/services/full-stack-website-development-company",
        subtitle: "Reliable and flexible  web solutions",
      },
    ],

    "Backend Development": [
      {
        title: ".NET",
        icon: backendicon1.src,
        url: "/services/dotnet-development-company",
        subtitle: "Get Enterprise-grade applications",
      },
      {
        title: "NodeJS",
        icon: backendicon2.src,
        url: "/services/nodejs-development-company",
        subtitle: "Scalable backend solutions for apps",
      },
      {
        title: "Laravel",
        icon: backendicon3.src,
        url: "/services/laravel-website-development-company",
        subtitle: "Get Secure, scalable solutions",
      },

      {
        title: "Python",
        icon: backendicon6.src,
        url: "/services/python-development-company",
        subtitle: "Powerful  solutions for web and AI",
      },
      {
        title: "Java",
        icon: backendicon7.src,
        url: "/services/java-development-company",
        subtitle: "Secure, high-performance  applications",
      },
    ],

    "Application Development": [
      {
        title: "Android App Development",
        subtitle: "Apps designed for growth",
        icon: appDevIcon5.src,
        url: "/services/android-app-development-company",
      },
      {
        title: "iOS App Development",
        subtitle: "Get iOS apps for better experiences",

        icon: appDevIcon2.src,
        url: "/services/ios-app-development-company",
      },
      {
        title: "React Native  Development",
        subtitle: "Apps with  speed and efficiency",

        icon: appDevIcon4.src,
        url: "/services/react-native-app-development-company",
      },
      {
        title: "App Maintenance Service",
        subtitle: "Keep apps secure and smoothly",
        icon: appDevIcon6.src,
        url: "/services/mobile-app-maintenance-company",
      },
      {
        title: "PWA Development",
        subtitle: "Fast, reliable web app",

        icon: appDevIcon3.src,
        url: "/services/pwa-development-company",
      },
    ],

    "Other Services": [
      {
        title: "Search Engine Optimization",
        subtitle: "Organic Growth, Technical SEO, Content Strategy",
        icon: seo.src,
        url: "/services/search-engine-optimization-company",
      },
      {
        title: "UI/UX",
        subtitle: "Figma, Adobe XD, User Research, Prototyping",
        icon: Uiux.src,
        url: "/services/ui-ux-designing-company",
      },
      {
        title: "Product",
        subtitle: "Concept Ideation, Market Analysis, Rapid MVP",
        icon: product.src,
        url: "/services/product-designing-company",
      },
      {
        title: "Cloud",
        subtitle: "AWS, Azure, Server Security, Scalable Infrastructure",
        icon: cloud.src,
        url: "/services/cloud-company",
      },
    ],
  };
  const aboutMenu = [
    {
      title: "About",
      subtitle: "Driven by innovation, powered by experience",
      href: "/about-us",
      icon: about.src,
    },
    {
      title: "Blogs",
      subtitle: "Insights, trends, and expert tech knowledge",
      href: "/blogs",
      icon: blog.src,
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
      icon: case_study.src,
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
                                  <img src={item.icon} className="w-8" />

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
                                  <img src={item.icon} className="w-8" />

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
                                  <img src={item.icon} className="w-8" />

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
                                <img src={item.icon} className="w-8" />

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
                            <img src={item.icon} className="w-8" />

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
        videoId="2r3ptkDEJ4o"
      />
      <ProjectInquiryModal
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />
    </>
  );
}

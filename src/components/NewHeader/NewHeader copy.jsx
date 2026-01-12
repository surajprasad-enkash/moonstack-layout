"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";
import CustomButton from "../CommanButton/CommanButton";
import ProjectInquiryModal from "@/components/ProjectInquiryModal/ProjectInquiryModal";
import { IoIosArrowDown } from "react-icons/io";

import about from "public/assets/header/about-us.svg";
import logo from "public/assets/logo-white.png";
import blog from "public/assets/header/blog.svg";
import case_study from "public/assets/header/case-studies.svg";
import career from "public/assets/header/carrer.svg";

import appDevIcon1 from "public/assets/header/mobile-application-development.svg";
import appDevIcon2 from "public/assets/header/Ios.svg";
import appDevIcon3 from "public/assets/header/pwa.svg";
import appDevIcon4 from "public/assets/header/react-svgrepo-com.svg";
import appDevIcon5 from "public/assets/header/andriod-development.svg";
import appDevIcon6 from "public/assets/header/mobile-app-developing.svg";

// web development icon
import webDevIcon1 from "public/assets/header/web-development-svgrepo-com (2).svg";
import webDevIcon2 from "public/assets/header/shopify-svgrepo-com.svg";
import webDevIcon3 from "public/assets/header/Frame 427324601.svg";
import webDevIcon4 from "public/assets/header/e-commerce.svg";
import webDevIcon5 from "public/assets/header/web-designer.svg";
import webDevIcon6 from "public/assets/header/wordpress-svgrepo-com.svg";
import webDevIcon7 from "public/assets/header/crm-development.svg";
import webDevIcon8 from "public/assets/header/fullstack-development.svg";

// frontend development icon
import frontDevIcon1 from "public/assets/header/frontendIcon/angularjs.svg";
import frontDevIcon2 from "public/assets/header/frontendIcon/css3-svgrepo-com.svg";
import frontDevIcon3 from "public/assets/header/frontendIcon/vue-js-svgrepo-com.svg";
import frontDevIcon4 from "public/assets/header/frontendIcon/html-124-svgrepo-com.svg";
import frontDevIcon5 from "public/assets/header/frontendIcon/javascript-fill-svgrepo-com.svg";
import frontDevIcon6 from "public/assets/header/frontendIcon/react-svgrepo-com.svg";

// Backend development icon
import backendicon1 from "public/assets/header/backend/dotnet.svg";
import backendicon2 from "public/assets/header/backend/nodejs.svg";
import backendicon3 from "public/assets/header/backend/laravel.svg";
import backendicon4 from "public/assets/header/backend/cakephp.svg";
import backendicon5 from "public/assets/header/backend/codeigniter.svg";
import backendicon6 from "public/assets/header/backend/python.svg";
import backendicon7 from "public/assets/header/backend/java-filled.svg";
import backendicon8 from "public/assets/header/backend/php.svg";

//other
import Uiux from "public/assets/header/uiux.svg";
import seo from "public/assets/header/seo.svg";
import product from "public/assets/header/product.svg";
import cloud from "public/assets/header/cloud.svg";
import industry from "public/assets/header/cloud.svg";
import HoverSlideText from "../HoverSlideText";

export default function NewHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState(
    "Application Development",
  );

  const isActive = (path) => pathname === path;

  const isServicesActive = () =>
    pathname &&
    (pathname.startsWith("/application-development") ||
      pathname.startsWith("/website-development-service") ||
      pathname.startsWith("/frontend-development") ||
      pathname.startsWith("/backend-developer") ||
      pathname.startsWith("/services/search-engine-optimization-company") ||
      pathname.startsWith("/services/product-designing-service") ||
      pathname.startsWith("/services/ui-ux-designing-service") ||
      pathname.startsWith("/services/cloud-services") ||
      pathname.startsWith("/services/industries"));

  const isCompanyActive = () =>
    pathname &&
    (pathname.startsWith("/about-us") ||
      pathname.startsWith("/career") ||
      pathname.startsWith("/blogs") ||
      pathname.includes("company"));

  const megaMenuData = {
    "Frontend Development": [
      // {
      //   title: "Laravel Development ",
      //   subtitle: "Get High-performance websites",
      //   icon: webDevIcon3.src,
      //   url: "/services/laravel-website-development-company",
      // },
      {
        title: "E-Commerce website Development",
        subtitle: "Get Secure, scalable solutions",
        icon: webDevIcon4.src,
        url: "/services/ecommerce-website-development-company",
      },
   
      {
        title: "Web Designing",
        subtitle: "Visually striking designs- engage & convert",
        icon: webDevIcon5.src,
        url: "/services/web-designing-company",
      },
      {
        title: "Shopify Development",
        subtitle: "Stores built for growth and sales",
        icon: webDevIcon2.src,
        url: "/services/shopify-website-development-company",
      },
      {
        title: "CRM Development",
        subtitle: "Smart CRM systems for all operations",
        icon: webDevIcon7.src,
        url: "/services/crm-development-company",
      },
      {
        title: "WordPress Development",
        subtitle: "Flexible, SEO-friendly WordPress solutions",
        icon: webDevIcon6.src,
        url: "/services/wordpress-website-development-company",
      },
      {
        title: "AngularJs",
        icon: frontDevIcon1.src,
        url: "/",
        subtitle: "Robust Angular solutions for enterprise",
      },
 
      {
        title: "Vue.js",
        icon: frontDevIcon3.src,
        url: "/",
        subtitle: "Get Lightweight, flexible frontends",
      },
     
      {
        title: "JavaScript",
        icon: frontDevIcon5.src,
        url: "/",
        subtitle: "Interactive, high-performance web experiences",
      },
      {
        title: "ReactJS",
        icon: frontDevIcon6.src,
        url: "/",
        subtitle: "Fast, dynamic interfaces built with React",
      },
    ],

      "Backend Development": [
      {
        title: ".NET",
        icon: backendicon1.src,
        url: "/",
        subtitle: "Get Enterprise-grade applications",
      },
      {
        title: "NodeJS",
        icon: backendicon2.src,
        url: "/",
        subtitle: "Scalable backend solutions for real-time apps",
      },
      {
        title: "Laravel",
        icon: backendicon3.src,
        url: "/",
        subtitle: "Get Secure, scalable solutions",
      },
      {
        title: "CakePHP",
        icon: backendicon4.src,
        url: "/",
        subtitle: "Rapid web-app with structured frameworks",
      },
      {
        title: "CodeIgniter",
        icon: backendicon5.src,
        url: "/",
        subtitle: "Lightweight PHP solutions built for speed",
      },
      {
        title: "Python",
        icon: backendicon6.src,
        url: "/",
        subtitle: "Powerful Python solutions for web and AI",
      },
      {
        title: "Java",
        icon: backendicon7.src,
        url: "/",
        subtitle: "Secure, high-performance Java applications",
      },
      {
        title: "PHP",
        icon: backendicon8.src,
        url: "/",
        subtitle: "Reliable and flexible PHP web solutions",
      },
   
     
      {
        title: "Full Stack Development",
        subtitle: "Get End-to-end development",
        icon: webDevIcon8.src,
        url: "/services/full-stack-website-development-company",
      },
    

   
    ],

     "Application Development": [
      {
        title: "Android App Development",
        subtitle: "Apps designed for performance and growth",
        icon: appDevIcon5.src,
        url: "/services/android-app-development-company",
      },
      {
        title: "iOS App Development",
        subtitle: "Get iOS apps for seamless user experiences",

        icon: appDevIcon2.src,
        url: "/services/ios-app-development-company",
      },
      {
        title: "React Native App Development",
        subtitle: "Apps with native speed and efficiency",

        icon: appDevIcon4.src,
        url: "/services/react-native-app-development-company",
      },
      {
        title: "App Maintenance Service",
        subtitle: "Keep apps secure, updated, and smoothly",
        icon: appDevIcon6.src,
        url: "/services/mobile-app-maintenance-company",
      },
      {
        title: "PWA Development",
        subtitle: "Fast, reliable web app like native apps",

        icon: appDevIcon3.src,
        url: "/services/pwa-development-company",
      },
    ],

    "Other Services": [
      {
        title: "Search Engine Optimization",
        subtitle: "JavaScript (Node.js), Python",
        icon: seo.src,
        url: "/services/search-engine-optimization-company",
      },
      {
        title: "UI/UX",
        subtitle: "JavaScript (Node.js), Python",
        icon: Uiux.src,
        url: "/services/ui-ux-designing-company",
      },
      {
        title: "Product",
        subtitle: "JavaScript (Node.js), Python",
        icon: product.src,
        url: "/services/product-designing-company",
      },
      {
        title: "Cloud",
        subtitle: "JavaScript (Node.js), Python",
        icon: cloud.src,
        url: "/services/cloud-company",
      },
    ],
  };

  const leftMenuLinks = {
    "Application Development": "",

    "Frontend Development": "",
    "Backend Development": "",
    "Search Engine Optimization": "",
    "Product Designing": "",
    "Ui/Ux Designing": "",
    "Cloud Service": "",
    Industries: "",
  };
  const [openPopup, setOpenPopup] = useState(false);

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
                  <button
                    className={`flex cursor-pointer items-center gap-2 transition`}
                  >
                    <HoverSlideText text="Services" />{" "}
                    <IoIosArrowDown className="ml-1 text-sm transition-colors group-hover:text-[#d6ff00]" />
                  </button>{" "}
                </Link>
                {openMenu === "services" && (
                  <div className="subMenu absolute top-5 left-[50%] w-[1440px] translate-x-[-41%] ">
                    <div className="subMenu absolute !top-[34px] left-1/2 w-[1440px] -translate-x-1/2 bg-white rounded-[24px] rounded-tl-none">
                      <div className="rounded-3xl text-black h-[500px] overflow-auto">
                        
                        <div className="grid grid-cols-4 ">
                          {Object.entries(megaMenuData).map(
                            ([section, items]) => (
                              <div
                                key={section}
                                className={`rounded-xl p-10 ${
                                  section === "Other Services"
                                    ? "bg-[#F8F8F8] ml-[10px]"
                                    : "bg-[#f4fff4] "
                                }`}
                              >
                                <h4 className="mb-6 !text-[14px] !font-medium text-black">
                                  {section}
                                </h4>

                                <ul className="space-y-8">
                                  {items.map((item, i) => (
                                    <li key={i}>
                                      <Link
                                        href={item.url}
                                        className="group flex items-start gap-3"
                                      >
                                        <img
                                          src={item.icon}
                                          className="mt-1 w-[30px] flex-shrink-0"
                                          alt=""
                                        />

                                        <div>
                                          <p className="!text-[12px] !font-semibold text-black group-hover:text-[#16a34a]">
                                            {item.title}
                                          </p>
                                          <p className="!text-[12px] text-gray-600">
                                            {item.subtitle}
                                          </p>
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ),
                          )}
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
                    <ul className="z-50 grid grid-cols-2 gap-4 space-y-2 rounded-3xl rounded-tl-none bg-white p-11 text-black">
                      <li className="submenuList h-[75px] w-[355px]">
                        <Link
                          href="/about-us"
                          className="submenuLink group flex items-center gap-3"
                        >
                          <img src={about.src} className="w-10 flex-shrink-0" />

                          <div className="flex flex-col">
                            <span className="submenuText font-14 flex gap-4">
                              About
                              <IoIosArrowRoundForward className="ml-auto translate-x-[-6px] text-xl opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
                            </span>
                            <span className="submenuText font-12 mt-[4px]">
                              Driven by innovation, powered by experience
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="submenuList h-[75px] w-[355px]">
                        <Link
                          href="/blogs"
                          className="submenuLink group flex items-center gap-3"
                        >
                          <img src={blog.src} className="w-10 flex-shrink-0" />

                          <div className="flex flex-col">
                            <span className="submenuText font-14 flex gap-4">
                              Blogs
                              <IoIosArrowRoundForward className="ml-auto translate-x-[-6px] text-xl opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
                            </span>
                            <span className="submenuText font-12 mt-[4px]">
                              Insights, trends, and expert tech knowledge
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="submenuList h-[75px] w-[355px]">
                        <Link
                          href="/careers"
                          className="submenuLink group flex items-center gap-3"
                        >
                          <img
                            src={career.src}
                            className="w-10 flex-shrink-0"
                          />

                          <div className="flex flex-col">
                            <span className="submenuText font-14 flex gap-4">
                              Careers
                              <IoIosArrowRoundForward className="ml-auto translate-x-[-6px] text-xl opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
                            </span>
                            <span className="submenuText font-12 mt-[4px]">
                              Grow your career with us
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="submenuList h-[75px] w-[355px]">
                        <Link
                          href="/case-study"
                          className="submenuLink group flex items-center gap-3"
                        >
                          <img
                            src={case_study.src}
                            className="w-10 flex-shrink-0"
                          />

                          <div className="flex flex-col">
                            <span className="submenuText font-14 flex gap-4">
                              Case Study
                              <IoIosArrowRoundForward className="ml-auto translate-x-[-6px] text-xl opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
                            </span>
                            <span className="submenuText font-12 mt-[4px]">
                              Real projects, real results, real impact
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
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
              <li className={`menu-item megaMenuItem relative`}>
                <Link href="/services/ai-agent-development-company">
                  <HoverSlideText
                    text="AI"
                    active={isActive("/services/ai-agent-development-company")}
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
      <ProjectInquiryModal
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />
    </>
  );
}

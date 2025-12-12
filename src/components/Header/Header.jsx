"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import webDev from "../../../public/assets/header/web-dev.svg";
import logo from "../../../public/assets/logo-white.png";
import magaMenuBg from '../../../public/assets/header/magamenu-bg.svg'
import submenuBg from '../../../public/assets/header/submenu-bg.svg'

export default function Header() {
    const pathname = usePathname(); 
    const [openMenu, setOpenMenu] = useState(null);
    const [activeCategory, setActiveCategory] = useState("Application Development");

    // CHECK SINGLE PAGE
    const isActive = (path) => pathname === path;

    // CHECK IF SERVICES ANY INNER PAGE ACTIVE
    const isServicesActive = () =>
        pathname.startsWith("/application-development") ||
        pathname.startsWith("/website-development-service") ||
        pathname.startsWith("/frontend-development") ||
        pathname.startsWith("/backend-developer") ||
        pathname.startsWith("/seo") ||
        pathname.startsWith("/product-designing-service") ||
        pathname.startsWith("/ui-ux-designing-service") ||
        pathname.startsWith("/cloud-services") ||
        pathname.startsWith("/industries");

    // CHECK IF COMPANY ANY INNER PAGE ACTIVE
    const isCompanyActive = () =>
        pathname.startsWith("/about-us") ||
        pathname.startsWith("/career") ||
        pathname.startsWith("/blogs") ||
        pathname.includes("company");

    // MENU DATA
    const menuData = {
 "Application Development": [
  {
    title: "Android App Development",
    icon: webDev.src,
    url: "/application-development/android-app-development-service",
  },
  {
    title: "iOS App Development",
    icon: webDev.src,
    url: "/application-development/iOS-app-development-service",
  },
  {
    title: "React Native App Development",
    icon: webDev.src,
    url: "/application-development/react-native-app-development-service",
  },
  {
    title: "App Maintenance Service",
    icon: webDev.src,
    url: "/application-development/mobile-app-maintenance-service",
  },
  {
    title: "PWA Development",
    icon: webDev.src,
    url: "/application-development/pwa-development-service",
  },
],

        "Web Development": [
            { title: "Laravel Development ", icon: webDev.src, url: '/website-development-service/laravel-website-development-service' },
            { title: "E-Commerce website Development", icon: webDev.src, url: '/website-development-service/e-commerce-website-development-service' },
            { title: "Full Stack Development", icon: webDev.src, url: '/website-development-service/full-stack-website-development-service' },
            { title: "Web Designing", icon: webDev.src, url: '/website-development-service/web-designing-service' },
            { title: "Shopify Development", icon: webDev.src, url: '/website-development-service/shopify-website-development-service' },
            { title: "CRM Development", icon: webDev.src, url: '/website-development-service/CRM-Development-service' },
            { title: "WordPress Development", icon: webDev.src, url: '/website-development-service/wordPress-website-development-service' },
        
        ],
        "Frontend Development": [
            { title: "React.js Development", icon: webDev.src, url: '/' },
            { title: "Next.js Development", icon: webDev.src, url: '/' },
            { title: "Vue.js Development", icon: webDev.src, url: '/' },
            { title: "Vue.js Development", icon: webDev.src, url: '/' },
            { title: "Vue.js Development", icon: webDev.src, url: '/' },
            { title: "Vue.js Development", icon: webDev.src, url: '/' },
            { title: "Vue.js Development", icon: webDev.src, url: '/' },
            { title: "Vue.js Development", icon: webDev.src, url: '/' },
        ],
        "Backend Development": [
            { title: "Node.js Development", icon: webDev.src, url: '/' },
            { title: "Laravel Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
        ],
        "Search Engine Optimization": [
            { title: "Node.js Development", icon: webDev.src, url: '/' },
            { title: "Laravel Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
        ],
        "Product Designing": [
            { title: "Node.js Development", icon: webDev.src, url: '/' },
            { title: "Laravel Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
        ],
        "Ui/Ux Designing": [
            { title: "Node.js Development", icon: webDev.src, url: '/' },
            { title: "Laravel Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
        ],
        "Cloud Service": [
            { title: "Node.js Development", icon: webDev.src, url: '/' },
            { title: "Laravel Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
        ],
        "Industries": [
            { title: "Node.js Development", icon: webDev.src, url: '/' },
            { title: "Laravel Development", icon: webDev.src, url: '/' },
            { title: "Laravel Development", icon: webDev.src, url: '/' },
            { title: "Laravel Development", icon: webDev.src, url: '/' },
            { title: "Django Development", icon: webDev.src, url: '/' },
        ],
    };

    const leftMenuLinks = {
        "Application Development": "/application-development",
        "Web Development": "/website-development-service",
        "Frontend Development": "/frontend-development",
        "Backend Development": "/backend-developer",
        "Search Engine Optimization": "/seo",
        "Product Designing": "/product-designing-service",
        "Ui/Ux Designing": "/ui-ux-designing-service",
        "Cloud Service": "/cloud-service",
        "Industries": "/industries"
    };

    return (
        <header className="w-full bg-black/90 backdrop-blur-md text-white fixed top-0 left-0 z-50 border-b border-white/10">
            <div className="container mx-auto flex items-center justify-between py-4 px-4">

                {/* LOGO */}
                <Link href="/" className="flex items-center">
                    <img src={logo.src} className="w-32" alt="Moonstack" />
                </Link>

                {/* NAV */}
                <nav className="hidden md:flex items-center gap-10 text-sm font-medium relative">
                    <ul className="menu-list flex items-center gap-10">

                        {/* HOME */}
                        <li>
                            <Link
                                href="/"
                                className={`menu-item transition ${isActive("/") ? "isActive current" : "hover:text-green-400"}`}
                            >
                                Home
                            </Link>
                        </li>

                        {/* SERVICES MENU */}
                        <li
                            className={`menu-item relative megaMenuItem ${
                                    isServicesActive() ? "isActive current" : "hover:text-green-400"
                                }`}
                            onMouseEnter={() => setOpenMenu("services")}
                            onMouseLeave={() => setOpenMenu(null)}
                        >
                            <button
                                className={`transition cursor-pointer `}
                            >
                                Services
                            </button>

                            {openMenu === "services" && (
                                <div className="subMenu absolute left-[50%] translate-x-[-40%] top-5 w-[calc(100vw-40px)]">
                                    <div
                                        className="subMenuInner flex gap-6 z-50"
                                        style={{ backgroundImage: `url(${magaMenuBg.src})` }}
                                    >
                                        {/* LEFT MENU */}
                                        <ul className="submenu-list md:w-[270px] md:min-w-[320px] bg-gradient-to-b from-green-800/40 to-green-600/20 rounded-lg p-4 space-y-2">
                                            {Object.keys(menuData).map((name) => (
                                                <li
                                                    key={name}
                                                    onMouseEnter={() => setActiveCategory(name)}
                                                    className={`submenu-item px-4 py-2 rounded-lg cursor-pointer ${
                                                        activeCategory === name ? "isActive current" : "text-white/80"
                                                    }`}
                                                >
                                                    <Link href={leftMenuLinks[name]} className="block w-full h-full">
                                                        {name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* RIGHT ITEMS */}
                                        <div className="flex justify-between gap-4 flex-wrap h-[max-content] w-[100%] ps-5">
                                            {menuData[activeCategory].map((item, i) => (
                                                <div key={i} className="text-center submenuList w-[calc(25%-12px)] h-[150px]">
                                                    <Link href={item.url}>
                                                        <img src={item.icon} className="w-10 mx-auto mb-2" />
                                                        <span className="text-white text-sm">{item.title}</span>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>

                        {/* COMPANY */}
                        <li
                            className="menu-item relative megaMenuItem"
                            onMouseEnter={() => setOpenMenu("company")}
                            onMouseLeave={() => setOpenMenu(null)}
                        >
                            <button
                                className={`transition cursor-pointer ${
                                    isCompanyActive() ? "isActive current" : "hover:text-green-400"
                                }`}
                            >
                                Company
                            </button>

                            {openMenu === "company" && (
                                <div className="submenu absolute top-5 left-0 w-40 pt-[28px]">
                                    <ul
                                        className="space-y-2 z-50 sub-menu-list"
                                        style={{ backgroundImage: `url(${submenuBg.src})` }}
                                    >
                                        <li><Link href="/about-us" className="sub-menu-item">About us</Link></li>
                                        <li><Link href="/blogs" className="sub-menu-item">Blogs</Link></li>
                                        <li><Link href="/career" className="sub-menu-item">Career</Link></li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        {/* CONTACT */}
                        <li>
                            <Link
                                href="/contact-us"
                                className={`menu-item transition ${
                                    isActive("/contact") ? "text-green-400 underline underline-offset-8" : "hover:text-green-400"
                                }`}
                            >
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* RIGHT BUTTONS */}
                <div className="flex items-center gap-3">
                    <Link href="/hire-developer" className="border border-white/30 px-4 py-2 rounded-full text-sm hover:bg-white/10 transition">
                        Hire Developer
                    </Link>
                    <Link href="/connect" className="headerbtn btn primary-btn text-black px-5 py-2 rounded-full text-sm font-semibold  transition">
                        Connect Now
                    </Link>
                </div>

            </div>
        </header>
    );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import webDev from "../../../public/assets/header/web-dev.svg";
import logo from "../../../public/assets/logo-white.png";
import magaMenuBg from '../../../public/assets/header/magamenu-bg.svg'
import submenuBg from '../../../public/assets/header/submenu-bg.svg'

// application development icon
import appDevIcon1 from '../../../public/assets/header/mobile-application-development.svg';
import appDevIcon2 from '../../../public/assets/header/Ios.svg';
import appDevIcon3 from '../../../public/assets/header/logo-pwa-svgrepo-com.svg';
import appDevIcon4 from '../../../public/assets/header/react-svgrepo-com.svg';
import appDevIcon5 from '../../../public/assets/header/andriod-development.svg';
import appDevIcon6 from '../../../public/assets/header/mobile-app-developing.svg';

// web development icon
import webDevIcon1 from '../../../public/assets/header/web-development-svgrepo-com (2).svg';
import webDevIcon2 from '../../../public/assets/header/shopify-svgrepo-com.svg';
import webDevIcon3 from '../../../public/assets/header/Frame 427324601.svg';
import webDevIcon4 from '../../../public/assets/header/shop-sell-commerce-store-svgrepo-com.svg';
import webDevIcon5 from '../../../public/assets/header/web-designer.svg';
import webDevIcon6 from '../../../public/assets/header/wordpress-svgrepo-com.svg';
import webDevIcon7 from '../../../public/assets/header/crm-development.svg';
import webDevIcon8 from '../../../public/assets/header/fullstack-development.svg';

// frontend development icon
import frontDevIcon1 from '../../../public/assets/header/frontendIcon/angularjs.svg';
import frontDevIcon2 from '../../../public/assets/header/frontendIcon/css3-svgrepo-com.svg';
import frontDevIcon3 from '../../../public/assets/header/frontendIcon/vue-js-svgrepo-com.svg';
import frontDevIcon4 from '../../../public/assets/header/frontendIcon/html-124-svgrepo-com.svg';
import frontDevIcon5 from '../../../public/assets/header/frontendIcon/javascript-fill-svgrepo-com.svg';
import frontDevIcon6 from '../../../public/assets/header/frontendIcon/react-svgrepo-com.svg';

// Backend development icon
import backendicon1 from '../../../public/assets/header/backend/dotnet.svg';
import backendicon2 from '../../../public/assets/header/backend/nodejs.svg';
import backendicon3 from '../../../public/assets/header/backend/laravel.svg';
import backendicon4 from '../../../public/assets/header/backend/cakephp.svg';
import backendicon5 from '../../../public/assets/header/backend/codeigniter.svg';
import backendicon6 from '../../../public/assets/header/backend/python.svg';
import backendicon7 from '../../../public/assets/header/backend/java-filled.svg';
import backendicon8 from '../../../public/assets/header/backend/php.svg';
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
                icon: appDevIcon5.src,
                url: "/application-development/android-app-development-service",
            },
            {
                title: "iOS App Development",
                icon: appDevIcon2.src,
                url: "/application-development/iOS-app-development-service",
            },
            {
                title: "React Native App Development",
                icon: appDevIcon4.src,
                url: "/application-development/react-native-app-development-service",
            },
            {
                title: "App Maintenance Service",
                icon: appDevIcon6.src,
                url: "/application-development/mobile-app-maintenance-service",
            },
            {
                title: "PWA Development",
                icon: appDevIcon3.src,
                url: "/application-development/pwa-development-service",
            },
        ],

        "Web Development": [
            { title: "Laravel Development ", icon: webDevIcon3.src, url: '/website-development-service/laravel-website-development-service' },
            { title: "E-Commerce website Development", icon: webDevIcon4.src, url: '/website-development-service/e-commerce-website-development-service' },
            { title: "Full Stack Development", icon: webDevIcon8.src, url: '/website-development-service/full-stack-website-development-service' },
            { title: "Web Designing", icon: webDevIcon5.src, url: '/website-development-service/web-designing-service' },
            { title: "Shopify Development", icon: webDevIcon2.src, url: '/website-development-service/shopify-website-development-service' },
            { title: "CRM Development", icon: webDevIcon7.src, url: '/website-development-service/CRM-Development-service' },
            { title: "WordPress Development", icon: webDevIcon6.src, url: '/website-development-service/wordPress-website-development-service' },

        ],
        "Frontend Development": [
            { title: "AngularJs", icon: frontDevIcon1.src, url: '/' },
            { title: "CSS3", icon: frontDevIcon2.src, url: '/' },
            { title: "Vue.js", icon: frontDevIcon3.src, url: '/' },
            { title: "HTML5", icon: frontDevIcon4.src, url: '/' },
            { title: "JavaScript", icon: frontDevIcon5.src, url: '/' },
            { title: "ReactJS", icon: frontDevIcon6.src, url: '/' },
        ],
        "Backend Development": [
            { title: ".NET", icon: backendicon1.src, url: '/' },
            { title: "NodeJS", icon: backendicon2.src, url: '/' },
            { title: "Laravel", icon: backendicon3.src, url: '/' },
            { title: "CakePHP", icon: backendicon4.src, url: '/' },
            { title: "CodeIgniter", icon: backendicon5.src, url: '/' },
            { title: "Python", icon: backendicon6.src, url: '/' },
            { title: "Java", icon: backendicon7.src, url: '/' },
            { title: "PHP", icon: backendicon8.src, url: '/' },
        ],
        "Search Engine Optimization": [
            { title: "SEO", icon: webDev.src, url: '/seo' },
           
        ],
        "Product Designing": [
            { title: "Product Designing", icon: webDev.src, url: '/product-designing-service' },
          
        ],
        "Ui/Ux Designing": [
            { title: "Ui/Ux Designing", icon: webDev.src, url: '/ui-ux-designing-service' },
           
        ],
        "Cloud Service": [
            { title: "Cloud Service", icon: webDev.src, url: '/cloud-services' },
           
        ],
        "Industries": [
            { title: "Industries", icon: webDev.src, url: '/industries' },
           
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
                            className={`menu-item relative megaMenuItem ${isServicesActive() ? "isActive current" : "hover:text-green-400"
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
                                                    className={`submenu-item px-4 py-2 rounded-lg cursor-pointer ${activeCategory === name ? "isActive current" : "text-white/80"
                                                        }`}
                                                >
                                                    <Link href={leftMenuLinks[name]} className="block w-full h-full">
                                                        {name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* RIGHT ITEMS */}
                                        <div className="flex gap-4 flex-wrap h-[max-content] w-[100%] ps-5">
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
                            className={`menu-item relative megaMenuItem ${isCompanyActive() ? "isActive current" : "hover:text-green-400"
                                    }`}
                            onMouseEnter={() => setOpenMenu("company")}
                            onMouseLeave={() => setOpenMenu(null)}
                        >
                            <button
                                className={`transition cursor-pointer `}
                            >
                                Company
                            </button>

                            {openMenu === "company" && (
                                <div className="submenu absolute top-5 left-0 w-40 pt-[28px]">
                                    <ul
                                        className="space-y-2 z-50 sub-menu-list"
                                        style={{ backgroundImage: `url(${submenuBg.src})` }}
                                    >
                                        <li><Link href="/about-us" className={`sub-menu-item transition ${isActive("/about-us") ? "!text-[#00ea52] underline underline-offset-8" : "hover:underline hover:underline-offset-8 hover:!text-[#00ea52]"
                                    }`}>About us</Link></li>
                                        <li><Link href="/blogs" className={`sub-menu-item transition ${isActive("/blogs") ? "!text-[#00ea52] underline underline-offset-8" : "hover:underline hover:underline-offset-8 hover:!text-[#00ea52]"
                                    }`}>Blogs</Link></li>
                                        <li><Link href="/careers" className={`sub-menu-item transition ${isActive("/careers") ? "!text-[#00ea52] underline underline-offset-8" : "hover:underline hover:underline-offset-8 hover:!text-[#00ea52]"
                                    }`}>Careers</Link></li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        {/* CONTACT */}
                        <li>
                            <Link
                                href="/contact-us"
                                className={`menu-item transition ${isActive("/contact") ? "text-green-400 underline underline-offset-8" : "hover:text-green-400"
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

import React, { useState } from "react";
import logo from "../../public/assets/logo-white.png";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CommanButton/CommanButton";

interface IHeaderRefs {
  home: React.RefObject<HTMLDivElement>;
  service: React.RefObject<HTMLDivElement>;
  aboutUs: React.RefObject<HTMLDivElement>;
  contactUs: React.RefObject<HTMLDivElement>;
  career: React.RefObject<HTMLDivElement>;
  talkBtn: React.RefObject<HTMLDivElement>;
}

interface IMenuItems {
  id: number;
  paths: string[];
  title: string;
  ref: React.RefObject<HTMLDivElement>;
}

const Header = ({ refs }: { refs: IHeaderRefs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: IMenuItems[] = [
    { id: 1, paths: ["/"], title: "Home", ref: refs.home },
    { id: 2, paths: ["/services"], title: "Services", ref: refs.service },
    { id: 3, paths: ["/about-us"], title: "About Us", ref: refs.aboutUs },
    { id: 4, paths: ["/contact-us"], title: "Contact Us", ref: refs.contactUs },
    { id: 5, paths: ["/career"], title: "Career", ref: refs.career },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-black text-white shadow-md">
      {/* TOP BAR */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        {/* LOGO */}
        <div className="w-40">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              className="h-auto w-auto object-contain"
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center space-x-10 md:flex">
          {menuItems.map((item, index) => {
            const isActive = item.paths.includes("/");

            return (
              <div
                key={index}
                ref={item.ref}
                className={`cursor-pointer px-5 py-1.5 font-medium text-white transition hover:text-gray-300 ${
                  isActive ? "text-brand200" : ""
                }`}
              >
                {item.title}
              </div>
            );
          })}
        </nav>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:block">
          <CustomButton text="Let's Talk" variant="primary" />
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={toggleMenu}
          className="block text-2xl focus:outline-none md:hidden"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden bg-black transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[500px] py-5" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-6 px-6">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={closeMenu}
              className="text-left text-lg font-medium text-white hover:text-gray-300"
            >
              {item.title}
            </button>
          ))}

          {/* Mobile CTA */}
          <div className="pt-4">
            <CustomButton text="Let's Talk" variant="primary" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

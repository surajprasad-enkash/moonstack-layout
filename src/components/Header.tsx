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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItems: IMenuItems[] = [
    { id: 1, paths: ["/"], title: "Home", ref: refs.home },
    { id: 2, paths: ["/services"], title: "Services", ref: refs.service },
    { id: 3, paths: ["/about-us"], title: "About Us", ref: refs.aboutUs },
    { id: 4, paths: ["/contact-us"], title: "Contact Us", ref: refs.contactUs },
    { id: 5, paths: ["/career"], title: "Career", ref: refs.career },
  ];

  return (
    <header className="fixed z-50 w-full bg-black p-4 text-white md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-40">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              className="h-auto w-auto object-contain"
            />
          </Link>
        </div>
        <nav className="flex items-center space-x-10">
          {menuItems.map((item, index) => {
            const isActive = item.paths.includes("/");

            return (
              <div
                key={index}
                className={`hover-white-text poppins-medium font-14 ml-3 flex cursor-pointer items-center justify-between px-5 py-1.5 text-white ${isActive ? "active-menu-item" : ""}`}
                ref={item.ref}
              >
                {item.title}
              </div>
            );
          })}
        </nav>

        <div>
          <CustomButton text="  Let's Talk" variant="primary" />
        </div>
      </div>
    </header>
  );
};

export default Header;

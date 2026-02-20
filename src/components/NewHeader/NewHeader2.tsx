"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoIosArrowRoundForward } from "react-icons/io"
import CustomButton from "../CommanButton/CommanButton"
import ProjectInquiryModal from "@/components/ProjectInquiryModal/ProjectInquiryModal"
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io"
import { AnimatePresence, motion } from "framer-motion"

import HeroVideoModal from "@/components/NewHomePage/HeroVideoModal"
import { useVideoModal } from "@/context/VideoModalContext"

import logo from "@/assets/logo-white.png"

//other
import { megaMenuData, aboutMenu } from "./headerData"

import HoverSlideText from "../HoverSlideText"

export default function NewHeader2() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const isActive = (path: string) => pathname === path

  // Construct menu data without using "Frontend" or "Backend" in UI
  const websiteItems = [
    ...megaMenuData["Frontend Development"],
    ...megaMenuData["Backend Development"],
  ]
  const applicationItems = megaMenuData["Application Development"]
  const otherItems = megaMenuData["Other Services"]

  // Create derived data for consistent structure (desktop and mobile)
  const servicesMenuData = {
    "Website Development": websiteItems,
    "Application Development": applicationItems,
    "Other Services": otherItems,
  }

  const [openPopup, setOpenPopup] = useState(false)
  const { open, closeVideo } = useVideoModal()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMobileCategory, setActiveMobileCategory] = useState<
    string | null
  >(null)

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev)

  const toggleMobileCategory = (category: string) => {
    setActiveMobileCategory((prev) => (prev === category ? null : category))
  }
  useEffect(() => {
    const body = document.body

    if (mobileMenuOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth

      body.style.overflow = "hidden"
      body.style.paddingRight = `${scrollBarWidth}px`
    } else {
      body.style.overflow = ""
      body.style.paddingRight = ""
    }

    return () => {
      body.style.overflow = ""
      body.style.paddingRight = ""
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 left-0 z-50 w-full bg-[rgba(11,11,11,0.376)] px-5 text-white backdrop-blur-[5px] will-change-[background]">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <img src={logo.src} className="w-42" alt="Moonstack" />
          </Link>

          <nav className="relative hidden items-center gap-10 text-sm font-medium lg:flex">
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
                      className={`ml-1 text-sm transition-colors ${
                        openMenu === "services"
                          ? "text-[#d6ff00]"
                          : "text-white"
                      }`}
                    />
                  </button>
                </Link>
                {openMenu === "services" && (
                  <div className="absolute top-[20px] left-[50%] translate-x-[-36.7%] pt-10 text-black">
                    {/* TOP SECTION */}
                    <div className="no-scrollbar h-[83vh] max-h-[max-content] w-[100vw] max-w-[1440px] overflow-auto rounded-[24px] rounded-tl-none bg-white p-8 pt-[px]">
                      <div className="flex w-full">
                        {/* WEBSITE DEVELOPMENT (50% width, 2 cols inside) */}
                        <div className="w-[50%] border-r border-gray-200 pr-8">
                          <h4 className="mb-6 !text-[14px] !font-bold uppercase">
                            Website Development
                          </h4>

                          <ul className="grid grid-cols-2 gap-x-8">
                            {websiteItems.map((item, i) => (
                              <li key={i} className="submenuList h-[75px]">
                                <Link
                                  href={item.url}
                                  className="submenuLink group flex w-full gap-3"
                                >
                                  <item.Icon />

                                  <div className="w-full">
                                    <p className="flex w-full items-center !text-[14px] !font-semibold uppercase">
                                      {item.title}

                                      <IoIosArrowRoundForward className="ml-auto h-[24px] w-[24px] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                                    </p>

                                    <p className="mt-1 !text-[12px] leading-[1.5] text-gray-600">
                                      {item.subtitle}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* APPLICATION DEVELOPMENT (25% width) */}
                        <div className="w-[25%] border-r border-gray-200 px-8">
                          <h4 className="mb-6 !text-[14px] !font-bold uppercase">
                            Application Development
                          </h4>

                          <ul className="gap-x-10 gap-y-2">
                            {applicationItems.map((item, i) => (
                              <li key={i} className="submenuList h-[75px]">
                                <Link
                                  href={item.url}
                                  className="submenuLink group flex w-full gap-3"
                                >
                                  <item.Icon />

                                  <div className="w-full">
                                    <p className="flex w-full items-center !text-[14px] !font-semibold uppercase">
                                      {item.title}

                                      <IoIosArrowRoundForward className="ml-auto h-[24px] w-[24px] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                                    </p>

                                    <p className="mt-1 !text-[12px] leading-[1.5] text-gray-600">
                                      {item.subtitle}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* OTHER SERVICES (25% width) */}
                        <div className="w-[25%] pl-8">
                          <h4 className="mb-6 !text-[14px] !font-bold uppercase">
                            Other Services
                          </h4>

                          <ul className="gap-x-10 gap-y-2">
                            {otherItems.map((item, i) => (
                              <li key={i} className="submenuList h-[75px]">
                                <Link
                                  href={item.url}
                                  className="submenuLink group flex w-full gap-3"
                                >
                                  <item.Icon />

                                  <div className="w-full">
                                    <p className="flex w-full items-center !text-[14px] !font-semibold uppercase">
                                      {item.title}

                                      <IoIosArrowRoundForward className="ml-auto h-[24px] w-[24px] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                                    </p>

                                    <p className="mt-1 !text-[12px] leading-[1.5] text-gray-600">
                                      {item.subtitle}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
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
                              <p className="flex w-full items-center !text-[14px] !font-semibold uppercase">
                                {item.title}

                                <IoIosArrowRoundForward className="ml-auto h-[24px] w-[24px] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                              </p>

                              <p className="mt-1 !text-[12px] leading-[1.5] text-gray-600">
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
              text="Get a Quote"
              onClick={() => setOpenPopup(true)}
              className="hidden px-5 py-2 tracking-[0.8px] whitespace-nowrap text-black lg:block"
              variant="headerButton"
            />
            {/* Mobile Menu Toggle */}
            <button
              className="text-2xl text-white lg:hidden"
              onClick={(e) => {
                e.stopPropagation()
                toggleMobileMenu()
              }}
            >
              {mobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="h-100vh fixed inset-0 top-[27px] z-40 flex flex-col px-5 py-8 text-white lg:hidden"
            >
              <div className="flex h-full flex-col overflow-y-auto">
                <ul className="absolute left-0 flex max-h-[80vh] w-full flex-col gap-6 overflow-y-auto rounded-[20px] rounded-b-[20px] bg-black px-5 pb-5 text-lg font-medium">
                  <li>
                    <Link href="/" className="block py-2">
                      Home
                    </Link>
                  </li>

                  {/* Services Accordion */}
                  <li>
                    <Link
                      href={"/services"}
                      className="flex w-full items-center justify-between py-2"
                    >
                      <span>Services</span>
                      <IoIosArrowDown
                        className={`transition-transform ${
                          activeMobileCategory === "services"
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </Link>
                    <AnimatePresence>
                      {activeMobileCategory === "services" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4"
                        >
                          {/* Nested Accordions for Service Categories */}
                          {Object.entries(servicesMenuData).map(
                            ([category, items]) => (
                              <div key={category} className="my-2">
                                <h5 className="mb-2 text-sm font-bold text-yellow-100">
                                  {category}
                                </h5>
                                <ul className="flex flex-col gap-2 pl-4">
                                  {items.map((item, i) => (
                                    <li key={i}>
                                      <Link
                                        href={item.url}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block py-1 text-sm text-gray-300 hover:text-white"
                                      >
                                        {item.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* Company Accordion */}
                  <li>
                    <button
                      onClick={() => toggleMobileCategory("company")}
                      className="flex w-full items-center justify-between py-2"
                    >
                      <span>Company</span>
                      <IoIosArrowDown
                        className={`transition-transform ${
                          activeMobileCategory === "company" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeMobileCategory === "company" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4"
                        >
                          <ul className="flex flex-col gap-3 pt-2">
                            {aboutMenu.map((item, i) => (
                              <li key={i}>
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-3 py-1 text-sm text-gray-300 hover:text-white"
                                >
                                  {/* <item.Icon className="text-lg" /> */}
                                  <span>{item.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  <li>
                    <Link
                      href="/services/ai-agent-development-company"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      AI
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <CustomButton
                      text="Get a quote"
                      onClick={() => {
                        setOpenPopup(true)
                        setMobileMenuOpen(false)
                      }}
                      className="w-full text-center text-black"
                      variant="headerButton"
                    />
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
  )
}

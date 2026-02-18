"use client"
import React from "react"
import Image from "next/image"
import moment from "moment"
import Link from "next/link"

/* Assets */
import logo from "@/assets/logo-white.png"
import upwork from "@/assets/home/upwork.svg"
import clutch from "@/assets/home/clutch.svg"
import facebook from "@/assets/footer/Facebook.svg"
import linkedin from "@/assets/footer/linkdin.svg"
import twitter from "@/assets/footer/twitter.svg"
import instagram from "@/assets/footer/instagram.svg"

// BIG moonstack image

// import moonstackText from "@/assets/footer/moonstacklogo.svg"
import moonstackText from "@/assets/footer/moonstacklogo-2.svg"
// import moonstackText from "@/assets/footer/moonstacklogo-3.svg"
// import moonstackText from "@/assets/footer/moonstack.svg"

import footerBg from "@/assets/footer/newbg.svg"
import HoverSlideText from "./HoverSlideText"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="pageFooter">
        {/* TOP SECTION */}
        <div className="footerTop relative z-50 mt-[-2px] bg-black bg-cover bg-center px-5 py-20">
          {footerBg && (
            <Image
              src={footerBg.src}
              alt="footer bg"
              width={1000}
              height={1000}
              className="absolute bottom-[0] left-[0] z-[-1] h-[auto] w-full"
            />
          )}
          <div className="relative z-50 container">
            <div className="row flex flex-wrap gap-[60px]">
              {/* LEFT */}
              <div className="footerLeft w-[100%] md:w-[calc(40%-60px)]">
                <div className="max-w-[500]">
                  <div className="footer_logo mb-[24px]">
                    <Link href="/">
                      <Image src={logo} width={175} alt="Moonstack" />
                    </Link>
                  </div>

                  <p className="footer_description mb-[24px] text-[14px] leading-[200%] font-[400] text-[#fff]">
                    Welcome to Moonstack, where innovation meets our passion in
                    a journey that started with a simple idea and a shared
                    dream.
                  </p>

                  {/* REVIEWS */}
                  <div className="footerReviews">
                    <div className="reviewBox">
                      <Image src={upwork} alt="Upwork" />
                      <p className="text-[#fff]">
                        <span className="reviewStars">★★★★★</span>
                        <span className="reviewCount">(95 Reviews)</span>
                      </p>
                    </div>

                    <div className="reviewBox">
                      <Image src={clutch} alt="Clutch" />
                      <p className="text-[#fff]">
                        <span className="reviewStars">★★★★★</span>
                        <span className="reviewCount">(120 Reviews)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LINKS */}
              <div className="footerLinksWrapper w-[100%] md:w-[60%]">
                <div className="flex w-[100%] flex-wrap">
                  <div className="footerLinks w-[100%] md:w-[25%]">
                    <h4 className="footerTitle mb-[21px] !text-[18px] leading-[150%] text-[#fff]">
                      Frontend Services
                    </h4>
                    <ul className="footerMenu text-[#fff]">
                      <li>
                        <Link
                          href="/services/website-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="Website Development" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/angularjs-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="Angular" />
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/vuejs-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="Vue.JS" />
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/reactjs-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="ReactJs" />
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/shopify-website-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="Shopify" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/web-designing-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="Web Designing" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/ecommerce-website-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="E-Commerce" />
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="footerLinks w-[100%] md:w-[25%]">
                    <h4 className="footerTitle mb-[21px] !text-[18px] leading-[150%] text-[#fff]">
                      Backend Services
                    </h4>
                    <ul className="footerMenu text-[#fff]">
                      {/* <li>
                        <Link
                          href="/services/dotnet-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text=".NET" />
                        </Link>
                      </li> */}

                      {/* <li>
                        <Link
                          href="/services/nodejs-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="Node Js" />
                        </Link>
                      </li> */}

                      {/* <li>
                        <Link
                          href="/services/php-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="PHP" />
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          href="/services/wordpress-website-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="Wordpress" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/crm-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="CRM" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/laravel-website-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="Laravel" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/python-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="Python" />
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          href="/services/codeigniter-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="CodeIgniter" />
                        </Link>
                      </li> */}
                      {/* <li>
                        <Link
                          href="/services/java-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="Java" />
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          href="/services/full-stack-website-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="Full Stack" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footerLinks w-[100%] md:w-[25%]">
                    <h4 className="footerTitle mb-[21px] !text-[18px] leading-[150%] text-[#fff]">
                      App Development Services
                    </h4>
                    <ul className="footerMenu text-[#fff]">
                      <li>
                        <Link
                          href="/services/mobile-app-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="Mobile App" />
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/android-app-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="Android App" />
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/ios-app-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="IOS App" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/react-native-app-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="React Native" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/mobile-app-maintenance-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="Mobile App Maintenance" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/pwa-development-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="PWA Development" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footerLinks w-[100%] md:w-[25%]">
                    <h4 className="footerTitle mb-[21px] !text-[18px] leading-[150%] text-[#fff]">
                      Company
                    </h4>
                    <ul className="footerMenu text-[#ffffff]">
                      <li>
                        <Link href="/about-us" className="inline-block">
                          <HoverSlideText text="About Us" />
                        </Link>
                      </li>

                      <li>
                        <Link href="/contact-us" className="inline-block">
                          <HoverSlideText text="Contact Us" />
                        </Link>
                      </li>
                      {/* 
                      <li>
                        <Link href="/careers" className="inline-block">
                          <HoverSlideText text="Careers" />
                        </Link>
                      </li> */}

                      <li>
                        <Link href="/blogs" className="inline-block">
                          <HoverSlideText text="Blogs" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study" className="inline-block">
                          <HoverSlideText text="Case Study" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/it-support-company"
                          className="inline-block"
                        >
                          <HoverSlideText text="IT Support" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* SOCIAL */}
              <div className="footerSocial mt-[34px] flex w-[100%] flex-wrap items-center border-t pt-[34px]">
                <div className="footerSocialLeft md:w-[50%]">
                  <p className="footerConnectText text-[14px] leading-[200%] font-[400] text-[#fff]">
                    Connect with us on other platforms
                  </p>
                </div>
                <div className="footerSocialRight md:w-[50%]">
                  <div className="flex w-full justify-end gap-[20px] pt-6">
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/people/Moonstack/100085468621969/?_rdr"
                      aria-label="Facebook"
                    >
                      <Image src={facebook} alt="Facebook" />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/company/moonstack-co/"
                      aria-label="LinkedIn"
                    >
                      <Image src={linkedin} alt="LinkedIn" />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://x.com/at_moonstack"
                      aria-label="Twitter"
                    >
                      <Image src={twitter} alt="Twitter" />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/moonstack.co/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                      aria-label="Instagram"
                    >
                      <Image src={instagram} alt="Instagram" />
                    </Link>
                  </div>
                  <div className="mt-[20px] flex w-full justify-end gap-[20px]">
                    <ul className="footerMenu flex w-full justify-end gap-[20px] text-[#fff]">
                      <li>
                        <Link href="/terms-and-conditions">
                          <HoverSlideText text="Terms & Conditions" />
                        </Link>
                      </li>

                      <li>
                        <Link href="/privacy-policy">
                          <HoverSlideText text="Privacy Policy" />
                        </Link>
                      </li>

                      <li>
                        <Link href="/cookie-policy">
                          <HoverSlideText text="Cookie Policy" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BRAND IMAGE (NOT TEXT, CLASS KEPT) */}
        <div className="footerBrandText bg-[#000000] px-[20px] pt-15 pb-12 md:px-20">
          <div className="container">
            <div className="flex justify-center">
              <Image
                src={moonstackText}
                alt="Moonstack"
                className="footerBrandImage h-auto w-[100%] max-w-[1280px]"
                width={1280}
                height={300}
              />
            </div>

            {/* BOTTOM */}
            <div className="footerBottom mt-[50px] text-center text-[#fff]">
              <p className="!text-[14px] !font-[500]">
                Copyright © {moment().year()} Moonstack | Designed with{" "}
                <span className="text-[#01a74e]">❤</span> by Moonstack Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

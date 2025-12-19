"use client";
import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

/* Assets */
import logo from "../../public/assets/logo-white.png";
import upwork from "../../public/assets/home/upwork.svg";
import clutch from "../../public/assets/home/clutch.svg";
import facebook from "../../public/assets/footer/Facebook.svg";
import linkedin from "../../public/assets/footer/linkdin.svg";
import twitter from "../../public/assets/footer/twitter.svg";
import instagram from "../../public/assets/footer/instagram.svg";
import youtube from "../../public/assets/footer/youtube.svg";

// BIG moonstack image
import moonstackText from "../../public/assets/footer/moonstack.svg";

// footer bg image

import footerBg from "../../public/assets/footer/footer-bg.webp";

const Footer = () => {
  return (
    <footer className="footer z-2 relative">
      <div className="pageFooter">
        {/* TOP SECTION */}
        <div
          className="footerTop bg-cover bg-center px-20 py-10"
          style={{ backgroundImage: `url(${footerBg.src})` }}
        >
          <div className="container">
            <div className="row flex flex-wrap">
              {/* LEFT */}
              <div className="footerLeft w-[100%] md:w-[50%]">
                <div className="max-w-[500]">
                  <div className="footer_logo mb-[24px]">
                    <Link href="/">
                      <Image src={logo} width={175} alt="Moonstack" />
                    </Link>
                  </div>

                  <p className="footer_description mb-[24px] text-[14px] leading-[200%] font-[400]">
                    Welcome to Moonstack, where innovation meets our passion in
                    a journey that started with a simple idea and a shared
                    dream.
                  </p>

                  {/* REVIEWS */}
                  <div className="footerReviews">
                    <div className="reviewBox">
                      <Image src={upwork} alt="Upwork" />
                      <p>
                        <span className="reviewStars">★★★★★</span>
                        <span className="reviewCount">(95 Reviews)</span>
                      </p>
                    </div>

                    <div className="reviewBox">
                      <Image src={clutch} alt="Clutch" />
                      <p>
                        <span className="reviewStars">★★★★★</span>
                        <span className="reviewCount">(120 Reviews)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LINKS */}
              <div className="footerLinksWrapper w-[100%] md:w-[50%]">
                <div className="flex w-[100%] flex-wrap">
                  <div className="footerLinks w-[100%] md:w-[33.33%]">
                    <h4 className="footerTitle mb-[21px] text-[14px] leading-[150%] text-[#878686]">
                      Company
                    </h4>
                    <ul className="footerMenu">
                      <li>
                        <Link href="/about-us">About us</Link>
                      </li>
                      <li>
                        <Link href="/contact-us">Contact us</Link>
                      </li>
                      <li>
                        <Link href="/careers">Careers</Link>
                      </li>
                      <li>
                        <Link href="/blogs">Blogs & insights</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="footerLinks w-[100%] md:w-[33.33%]">
                    <h4 className="footerTitle mb-[21px] text-[14px] leading-[150%] text-[#878686]">
                      Solutions
                    </h4>
                    <ul className="footerMenu">
                      <li>
                        <Link href="/website-development-service">
                          Web development
                        </Link>
                      </li>
                      <li>
                        <Link href="/application-development">
                          App development
                        </Link>
                      </li>
                      <li>
                        <Link href="/frontend-development">
                          Frontend development
                        </Link>
                      </li>
                      <li>
                        <Link href="/backend-developer">
                          Backend development
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="footerLinks w-[100%] md:w-[33.33%]">
                    <h4 className="footerTitle mb-[21px] text-[14px] leading-[150%] text-[#878686]">
                      Resources
                    </h4>
                    <ul className="footerMenu">
                      <li>
                        <Link href="/terms-conditions">Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">Privacy policy</Link>
                      </li>
                      <li>
                        <Link href="/cookies">Cookies</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* SOCIAL */}
              <div className="footerSocial flex w-[100%] flex-wrap items-center pt-[68px]">
                <div className="footerSocialLeft md:w-[50%]">
                  <p className="footerConnectText text-[14px] leading-[200%] font-[400]">
                    Connect with us on other platforms
                  </p>
                </div>
                <div className="footerSocialRight flex justify-end gap-[20px] md:w-[50%]">
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
                className="footerBrandImage"
              />
            </div>

            {/* BOTTOM */}
            <div className="footerBottom mt-[50px] text-center">
              <p>
                Copyright © {moment().year()} Moonstack | Design by Moonstack
                Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

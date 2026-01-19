"use client"

import Image from "next/image"
import Link from "next/link"
import dheeraj from "@/assets/about-us/dheerajSir.webp"
import devender from "@/assets/members/depender.webp"
import neeta from "@/assets/about-us/neetaMam.webp"
import sunil from "@/assets/about-us/sunilSir.webp"
export default function TeamSection() {
  return (
    <section className="relative z-[2] px-[20px] py-[80px]">
      <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* LEFT – BIG CARD */}
        <div className="relative min-h-[600px] overflow-hidden rounded-2xl bg-[linear-gradient(294deg,#0b4e00_-14.71%,#FFF_88.49%)] p-6">
          <Image
            src={dheeraj.src}
            alt="Dheeraj Sharma"
            width={357}
            height={536}
            className="absolute bottom-0 left-0 object-contain"
            priority
          />

          <div className="absolute top-6 right-6">
            <h3 className="text-lg font-semibold text-black">Dheeraj Sharma</h3>
            <p className="text-sm text-black/70">Founder & CEO</p>
          </div>

          <Link
            href="https://www.linkedin.com/in/dheerajgill/"
            target="_blank"
            className="absolute right-6 bottom-6 flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-black"
          >
            in
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-rows-[auto_1fr] gap-6">
          {/* TOP – WIDE CARD */}
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-[linear-gradient(294deg,_#092c04_26.29%,_#fff_146.49%)] p-6">
            <Image
              src={neeta.src}
              alt="Neeta Agarwal"
              width={200}
              height={400}
              className="absolute bottom-0 left-0 object-contain"
            />

            <div className="absolute top-6 right-6">
              <h5 className="text-lg font-semibold text-white">
                Neeta Agarwal
              </h5>
              <p className="text-sm text-white/70">Co-Founder</p>
            </div>

            <Link
              href="https://www.linkedin.com/in/neetagrawal/"
              target="_blank"
              className="absolute right-6 bottom-[24px] flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-black"
            >
              in
            </Link>
          </div>

          {/* BOTTOM – TWO SMALL CARDS */}
          <div className="flex gap-6">
            {/* Devender */}
            <div className="relative min-h-[250px] flex-1 overflow-hidden rounded-2xl bg-[linear-gradient(294deg,_#092c04_26.29%,_#fff_146.49%)] p-6">
              <Image
                src={devender.src}
                alt="Devender Sharma"
                width={170}
                height={170}
                className="absolute bottom-0 left-0 object-contain"
              />

              {/* NAME */}
              <div className="absolute top-6 right-6">
                <h5 className="text-sm font-semibold text-white">
                  Devender Sharma
                </h5>
                <p className="text-xs text-white/70">Tech Lead</p>
              </div>

              {/* LINKEDIN ICON */}
              <Link
                href="https://www.linkedin.com/in/mrkhandal/"
                target="_blank"
                className="absolute right-6 bottom-6 flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-black"
              >
                in
              </Link>
            </div>

            {/* Sunil */}
            <div className="relative min-h-[250px] flex-1 overflow-hidden rounded-2xl bg-[linear-gradient(294deg,_#092c04_26.29%,_#fff_146.49%)] p-6">
              <Image
                src={sunil.src}
                alt="Sunil Kumar"
                width={200}
                height={250}
                className="absolute bottom-0 left-0 object-contain"
              />

              <div className="absolute top-6 right-6">
                <h5 className="text-sm font-semibold text-white">
                  Sunil Kumar
                </h5>
                <p className="text-xs text-white/70">Senior Developer</p>
              </div>

              <Link
                href="https://www.linkedin.com/in/sunil-kumar-56b998142/"
                target="_blank"
                className="absolute right-6 bottom-2 flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-black"
              >
                in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

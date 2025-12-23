"use client";

import Image from "next/image";
import Link from "next/link";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  hoverGradient?: string;
  imgWidth?: number;
  imgHeight?: number;
  memberTextColor?: string;
};

const team: TeamMember[] = [
  {
    name: "Dheeraj Sharma",
    role: "Founder & CEO",
    image: "/assets/about-us/dheerajSir.webp",
    linkedin: "https://www.linkedin.com/in/dheerajgill/",
    imgWidth: 357,
    imgHeight: 536,
    hoverGradient:
      "bg-[linear-gradient(294deg,#0b4e00_-14.71%,#FFF_88.49%)] row-span-2 min-h-[567px]",
    memberTextColor: "text-black",
  },
  {
    name: "Neeta Agarwal",
    role: "Co-Founder",
    image: "/assets/about-us/neetaMam.webp",
    linkedin: "https://www.linkedin.com/in/neetagrawal/",
    imgWidth: 200,
    imgHeight: 500,
  },
  {
    name: "Devender Sharma",
    role: "Tech Lead",
    image: "/assets/about-us/devenderSir.webp",
    linkedin: "https://www.linkedin.com/in/mrkhandal/",
    imgWidth: 220,
    imgHeight: 220,
  },
  {
    name: "Sunil Kumar",
    role: "Senior Developer",
    image: "/assets/about-us/sunilSir.webp",
    linkedin: "https://www.linkedin.com/in/sunil-kumar-56b998142/",
    imgWidth: 200,
    imgHeight: 300,
    hoverGradient: "col-span-2 min-h-[267px]",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {team.map((member, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#111] to-[#1a1a1a] p-6 transition-all duration-500 ${member.hoverGradient ?? ""}`}
          >
            {/* CONTENT */}
            <div className="flex items-end justify-between gap-4 pb-5">
              <div>
                <h3
                  className={`text-lg font-semibold ${member.memberTextColor ?? "text-white"}`}
                >
                  {member.name}
                </h3>
                <p className="text-primary-grey text-sm">{member.role}</p>
              </div>

              {/* IMAGE (Dynamic Size) */}
              <div className="absolute right-0 bottom-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={member.imgWidth ?? 200}
                  height={member.imgHeight ?? 300}
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* LINKEDIN */}
            <Link
              href={member.linkedin}
              target="_blank"
              className="absolute bottom-4 left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-black transition hover:scale-110"
            >
              in
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

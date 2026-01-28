"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { IoIosArrowRoundForward } from "react-icons/io"
import icon from "@/assets/case-study/banner/case-list-star.svg"

interface Props {
  item: {
    id: number
    slug: string
    title: string
    excerpt: string
    permalink: string

    background?: string
    profile_img?: string
    logo?: string
    text_color?: string

    links?: {
      web?: string
      mobile?: string
    }

    subTitlePoint?: {
      subtitle?: string | null
      points?: {
        point: string
      }[]
    }

    tags_html?: string
  }
  index: number
}

export default function CaseStudyCard({ item, index }: Props) {
  const router = useRouter()

  const points = item.subTitlePoint?.points ?? []

  const gradientClass =
    index % 3 === 2
      ? "bg-[linear-gradient(299deg,_#F2FFBD_43.88%,_#A4CE00_160.15%)]"
      : index % 3 === 1
        ? "bg-[linear-gradient(299deg,_#D1F0E2_43.89%,_#A4B8FE_182.34%)]"
        : "bg-[linear-gradient(285deg,_#351BFF_-13.81%,_#FFF_135%)]"

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[28px] rounded-tl-none p-[72px] pb-0 ${gradientClass}`}
    >
      <div className="flex gap-16">
        {/* LEFT */}
        <div className="w-1/2">
          {item.logo && (
            <Image
              src={item.logo}
              alt={item.title}
              width={299}
              height={100}
              className="mb-6 h-[60px] w-auto rounded-[14px] p-2"
            />
          )}

          <p
            className="mb-8 max-w-[520px] !text-[26px] leading-relaxed !font-semibold text-[#1e1e1e]"
            dangerouslySetInnerHTML={{ __html: item.excerpt }}
          />

          {item.profile_img && (
            <Image
              src={item.profile_img}
              alt={item.title}
              width={720}
              height={420}
              className="w-[100%] rounded-[0px]"
            />
          )}
        </div>

        {/* RIGHT */}
        <div className="flex w-1/2 flex-col gap-10 md:pt-[82px]">
          <div>
            <h4
              className="mb-6 !text-[26px] !font-bold text-[#0b0b0b]"
              dangerouslySetInnerHTML={{
                __html: `What we did for ${item.title}`,
              }}
            />

            {points.length > 0 && (
              <ul className="space-y-5">
                {points.map((p, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Image src={icon} alt="" width={20} height={20} />
                    <span className="!text-[22px] !font-semibold">
                      {p.point}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => router.push(`/case-study/${item.slug}`)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-[10px] bg-black px-6 py-3 text-[15px] font-medium text-white transition hover:bg-[#d0f601] hover:text-[var(--global--text-black)]"
            >
              View case study
              <IoIosArrowRoundForward className="h-[24px] w-[24px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

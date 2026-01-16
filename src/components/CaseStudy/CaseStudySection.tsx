"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import CommanButton from "@/components/CommanButton/CommanButton"
import Loader from "@/components/Loader/Loader"
import CaseStudyCard from "./CaseStudyCard"
import bannerBg from "@/assets/case-study/banner/bannerBg.svg"
import { getCaseStudiesServer } from "@/helper"
import { CaseStudyItem } from "@/types/caseStudy"

interface Props {
  perPage?: number
  initialItems: CaseStudyItem[]
  initialPage?: number
  totalPages: number
  loadMoreBtn?: boolean
}

function useDotsAnimation(isLoading: boolean) {
  const [dots, setDots] = useState(1)

  useEffect(() => {
    if (!isLoading) {
      setDots(1)
      return
    }

    const interval = setInterval(() => {
      setDots((prev) => (prev === 3 ? 1 : prev + 1))
    }, 500)

    return () => clearInterval(interval)
  }, [isLoading])

  return dots
}

export default function CaseStudySection({
  perPage = 10,
  initialItems,
  initialPage = 1,
  totalPages,
  loadMoreBtn = true,
}: Props) {
  const [items, setItems] = useState<CaseStudyItem[]>(initialItems)
  const [page, setPage] = useState(initialPage)
  const [isLoading, setIsLoading] = useState(false)

  const hasMore = page < totalPages
  const loadingDots = useDotsAnimation(isLoading)

  async function loadMore() {
    if (!hasMore || isLoading) return

    setIsLoading(true)

    try {
      const nextPage = page + 1
      const res = await getCaseStudiesServer(nextPage, perPage)

      setItems((prev) => [
        ...prev,
        ...(Array.isArray(res.items) ? res.items : []),
      ])
      setPage(nextPage)
    } catch (error) {
      console.error("Load more failed", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative z-2 px-[20px] pt-[20px] pb-[80px]">
      {loadMoreBtn && (
        <Image
          src={bannerBg}
          alt="Background"
          className="absolute inset-x-0 bottom-0 z-[1] w-full"
          priority
        />
      )}

      <div className="relative z-[2] container">
        <div className="flex flex-wrap gap-[50px]">
          {items.map((item, index) => (
            <CaseStudyCard
              key={`${item.id}-${index}`}
              item={item}
              index={index}
            />
          ))}

          {isLoading && items.length === 0 && <Loader />}

          {loadMoreBtn && hasMore && (
            <div className="flex w-full justify-center">
              <CommanButton
                text={
                  isLoading ? `Loading${".".repeat(loadingDots)}` : "Load More"
                }
                onClick={loadMore}
                // disabled={isLoading}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

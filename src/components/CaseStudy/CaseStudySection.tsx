"use client";

import { useEffect, useState } from "react";
import CommanButton from "@/components/CommanButton/CommanButton";
import Loader from "@/components/Loader/Loader";
import CaseStudyApiProvider from "./CaseStudyApiProvider";
import CaseStudyCard from "./CaseStudyCard";
import bannerBg from "@/assets/case-study/banner/bannerBg.svg";
import Image from "next/image";

interface Props {
  apiKey: string;
  perPage?: number;
  loadMoreBtn?: boolean;
}

export default function CaseStudySection({
  apiKey,
  perPage = 10,
  loadMoreBtn = true,
}: Props) {
  const [loadingDots, setLoadingDots] = useState(1);
  const [loading, setLoading] = useState(false); // track loading from API provider

  return (
    <section className="relative z-2 px-[20px] pt-[20px] pb-[80px]">
      {loadMoreBtn && bannerBg.src && (
        <Image
          src={bannerBg.src}
          alt="Background"
          width={100}
          height={100}
          className="absolute right-[0] bottom-[0px] left-[0] z-[1] h-[auto] w-[100%]"
        />
      )}

      <div className="relative z-[2] container">
        <div className="caseStudyContentCardOuterRow flex flex-wrap gap-[50px]">
          <CaseStudyApiProvider apiKey={apiKey} perPage={perPage}>
            {({ items, loading: apiLoading, error, loadMore, hasMore }) => {
              // ✅ Sync API loading with local state
              if (loading !== apiLoading) setLoading(apiLoading);

              return (
                <>
                  {/* FULL PAGE LOADER (Initial Load Only) */}
                  {apiLoading && items.length === 0 && (
                    <div className="flex h-[100vh] w-full items-center justify-center">
                      <Loader />
                    </div>
                  )}

                  {/* CASE STUDY CARDS */}
                  {items.map((item, index) => (
                    <CaseStudyCard
                      key={`${item.id ?? index}`}
                      item={item}
                      index={item.id}
                    />
                  ))}

                  {/* ERROR */}
                  {error && (
                    <p className="w-full text-center text-red-600">{error}</p>
                  )}

                  {/* LOAD MORE */}
                  {loadMoreBtn && hasMore && (
                    <div className="flex w-full justify-center">
                      <CommanButton
                        text={
                          apiLoading
                            ? `Loading${".".repeat(loadingDots)}`
                            : "Load More"
                        }
                        onClick={loadMore}
                      />
                    </div>
                  )}
                </>
              );
            }}
          </CaseStudyApiProvider>
        </div>
      </div>

      {/* 🔹 DOTS ANIMATION EFFECT */}
      {useEffect(() => {
        if (!loading) {
          setLoadingDots(1);
          return;
        }

        const interval = setInterval(() => {
          setLoadingDots((prev) => (prev === 3 ? 1 : prev + 1));
        }, 500);

        return () => clearInterval(interval);
      }, [loading])}
    </section>
  );
}

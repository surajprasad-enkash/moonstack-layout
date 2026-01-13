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

  /* 🔹 Dots animation driven by API loading */
  const useDotsAnimation = (loading: boolean) => {
    useEffect(() => {
      if (!loading) {
        setLoadingDots(1);
        return;
      }

      const interval = setInterval(() => {
        setLoadingDots((prev) => (prev === 3 ? 1 : prev + 1));
      }, 500);

      return () => clearInterval(interval);
    }, [loading]);
  };

  return (
    <section className="relative z-2 px-[20px] pt-[20px] pb-[80px]">
      {loadMoreBtn && (
        <Image
          src={bannerBg}
          alt="Background"
          className="absolute bottom-0 left-0 right-0 z-[1] w-full"
          priority
        />
      )}

      <div className="relative z-[2] container">
        <div className="caseStudyContentCardOuterRow flex flex-wrap gap-[50px]">
          <CaseStudyApiProvider apiKey={apiKey} perPage={perPage}>
            {({ items, loading, error, loadMore, hasMore }) => {
              useDotsAnimation(loading);

              return (
                <>
                  {/* INITIAL FULL PAGE LOADER */}
                  {loading && items.length === 0 && (
                    <div className="flex h-[100vh] w-full items-center justify-center">
                      <Loader />
                    </div>
                  )}

                  {/* CASE STUDY CARDS */}
                  {items.map((item, index) => (
                    <CaseStudyCard
                     key={`${item.id}-${index}`}
                      item={item}
                      index={index}
                    />
                  ))}

                  {/* ERROR */}
                  {error && (
                    <p className="w-full text-center text-red-600">
                      {error}
                    </p>
                  )}

                  {/* LOAD MORE BUTTON */}
                  {loadMoreBtn && hasMore && (
                    <div className="flex w-full justify-center">
                      <CommanButton
                        text={
                          loading
                            ? `Loading${".".repeat(loadingDots)}`
                            : "Load More"
                        }
                        onClick={loadMore}
                        // disabled={loading}
                      />
                    </div>
                  )}
                </>
              );
            }}
          </CaseStudyApiProvider>
        </div>
      </div>
    </section>
  );
}

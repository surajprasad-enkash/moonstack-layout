"use client"

import Layout from "@/components/Layout"
import Link from "next/link"
import errorpagewithcat from "../../public/lottie/404/404errorpagewithcat.json"
import LottiePlayer from "@/components/LottieAnimation"
export default function NotFound() {
  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 text-white">
        <div className="mt-10 w-full max-w-lg p-10 text-center">
          {/* 404 Code */}
          <LottiePlayer
            animationData={errorpagewithcat}
            className="h-full w-auto"
          />
        </div>
      </div>
    </Layout>
  )
}

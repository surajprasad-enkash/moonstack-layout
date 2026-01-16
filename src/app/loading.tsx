import React from "react"
import Loader from "@/components/Loader/Loader"

const Loading = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center text-white">
      <Loader />
    </div>
  )
}

export default Loading

"use client"

import { useEffect } from "react"

interface HeroVideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
}

export default function HeroVideoModal({
  isOpen,
  onClose,
  videoId,
}: HeroVideoModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full max-w-[900px] px-[40px]">
        <button
          onClick={onClose}
          className="absolute top-[-50px] right-[0px] cursor-pointer text-4xl font-light text-white"
        >
          ×
        </button>

        <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-lg bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

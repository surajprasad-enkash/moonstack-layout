"use client"

import { createContext, useContext, useState } from "react"

interface VideoModalContextType {
  open: boolean
  openVideo: () => void
  closeVideo: () => void
}

const VideoModalContext = createContext<VideoModalContextType | null>(null)

export function VideoModalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <VideoModalContext.Provider
      value={{
        open,
        openVideo: () => setOpen(true),
        closeVideo: () => setOpen(false),
      }}
    >
      {children}
    </VideoModalContext.Provider>
  )
}

export function useVideoModal() {
  const context = useContext(VideoModalContext)
  if (!context) {
    throw new Error("useVideoModal must be used within VideoModalProvider")
  }
  return context
}

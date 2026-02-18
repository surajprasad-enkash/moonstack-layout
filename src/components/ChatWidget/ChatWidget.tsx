"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoMdChatbubbles, IoMdSend, IoMdClose } from "react-icons/io"
import { FaUser } from "react-icons/fa"
import MoonstackIcon from "@/assets/app-development-images/moonstackIcon.svg"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi there! 👋 How can I help you today with Moonstack services?",
      timestamp: new Date(),
    },
  ])

  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  /* ---------------- SCROLL ---------------- */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [messages, isTyping])

  /* ---------------- SEND MESSAGE ---------------- */

  const handleSendMessage = async () => {
    const text = inputValue.trim()
    if (!text || isTyping) return

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      })

      if (!res.ok) throw new Error("API failed")

      const data = await res.json()

      const replyText = data?.reply?.trim() || "⚠️ No response from AI."

      const aiMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: replyText,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (err) {
      console.error(err)

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "⚠️ AI server not responding.",
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  /* ---------------- ENTER KEY ---------------- */

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  /* ================= UI ================= */

  return (
    <div className="fixed right-6 bottom-6 z-[999] flex flex-col items-end">
      {/* CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 flex h-[600px] w-[90vw] flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#0b0b0b]/90 shadow-2xl backdrop-blur-md sm:w-[380px]"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center gap-3">
                <Image src={MoonstackIcon} alt="logo" width={40} height={40} />
                <div>
                  <h3 className="!text-xl font-bold">Moonstack Assistant</h3>
                  <p className="text-xs opacity-80">Online</p>
                </div>
              </div>

              <button onClick={() => setIsOpen(false)}>
                <IoMdClose size={22} />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="flex max-w-[80%] gap-2">
                    {msg.role === "assistant" && (
                      <Image
                        src={MoonstackIcon}
                        alt="ai"
                        width={30}
                        height={30}
                      />
                    )}

                    <div
                      className={`rounded-2xl px-4 py-2 text-sm ${
                        msg.role === "user"
                          ? "bg-purple-600 text-white"
                          : "border border-white/10 bg-[#1f1f1f] text-white"
                      }`}
                    >
                      {msg.content}
                      <div className="mt-1 text-[10px] opacity-60">
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>

                    {msg.role === "user" && <FaUser size={18} />}
                  </div>
                </div>
              ))}

              {/* TYPING */}
              {isTyping && (
                <div className="text-sm text-gray-400">
                  Moonstack is typing...
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <div className="border-t border-white/10 p-4">
              <div className="relative">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type a message..."
                  className="w-full rounded-full bg-[#1f1f1f] py-3 pr-12 pl-4 text-white outline-none"
                />

                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-blue-600 p-2"
                >
                  <IoMdSend />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOAT BUTTON */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
      >
        {isOpen ? <IoMdClose size={24} /> : <IoMdChatbubbles size={24} />}
      </motion.button>
    </div>
  )
}

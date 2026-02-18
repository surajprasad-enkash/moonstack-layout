"use client"
import Image from "next/image";

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

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isTyping])

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: inputValue,
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInputValue("")
        setIsTyping(true)

        // Simulate AI response delay
        setTimeout(() => {
            const responses = [
                "That's a great question! Moonstack specializes in cutting-edge web and mobile development.",
                "We can definitely help with that. Our team is expert in React, Next.js, and AI integration.",
                "Could you tell me more about your project requirements?",
                "I'd suggest checking out our Services page for more details on our offerings.",
            ]
            const randomResponse = responses[Math.floor(Math.random() * responses.length)]

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: randomResponse,
                timestamp: new Date(),
            }

            setMessages((prev) => [...prev, aiMessage])
            setIsTyping(false)
        }, 1500)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    return (
        <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 flex h-[600px] w-[90vw] sm:w-[380px] flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#0b0b0b]/90 shadow-2xl backdrop-blur-md"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                                    <Image src={MoonstackIcon} alt={"logo"} height="55" width="55" />
                                </div>
                                <div>
                                    <h3 className="font-bold !text-xl">Moonstack Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                                        </span>
                                        <span className="text-xs text-white/80">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-full p-1.5 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
                            >
                                <IoMdClose className="text-xl" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700/50">
                            <div className="space-y-4">
                                {messages.map((msg) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        key={msg.id}
                                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                            }`}
                                    >
                                        <div
                                            className={`flex max-w-[80%] items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"
                                                }`}
                                        >
                                            <div
                                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${msg.role === "user"
                                                    ? "bg-purple-600 text-white"
                                                    : "bg-blue-600 text-white"
                                                    }`}
                                            >
                                                {msg.role === "user" ? <FaUser size={12} /> : <Image src={MoonstackIcon} alt={"logo"} height="55" width="55" />}
                                            </div>
                                            <div
                                                className={`rounded-2xl px-4 py-2.5 text-sm shadow-sm ${msg.role === "user"
                                                    ? "bg-purple-600 text-white rounded-tr-none"
                                                    : "bg-[#1f1f1f] text-white border border-white/10 rounded-tl-none"
                                                    }`}
                                            >
                                                {msg.content}
                                                <div
                                                    className={`mt-1 text-[10px] ${msg.role === "user" ? "text-purple-200" : "text-gray-400"
                                                        }`}
                                                >
                                                    {msg.timestamp.toLocaleTimeString([], {
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex justify-start"
                                    >
                                        <div className="flex items-start gap-2">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">

                                                <MoonstackIcon width={55} height={55} className="text-white" />
                                            </div>
                                            <div className="rounded-2xl rounded-tl-none border border-white/10 bg-[#1f1f1f] px-4 py-3 shadow-sm">
                                                <div className="flex gap-1.5">
                                                    <motion.span
                                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0 }}
                                                        className="h-2 w-2 rounded-full bg-gray-400"
                                                    />
                                                    <motion.span
                                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                                                        className="h-2 w-2 rounded-full bg-gray-400"
                                                    />
                                                    <motion.span
                                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                                                        className="h-2 w-2 rounded-full bg-gray-400"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="border-t border-white/10 bg-[#0b0b0b]/95 p-4 backdrop-blur-sm">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Type a message..."
                                    className="w-full rounded-full border border-white/10 bg-[#1f1f1f] py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!inputValue.trim() || isTyping}
                                    className="absolute right-1.5 rounded-full bg-blue-600 p-2 text-white transition-all hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600"
                                >
                                    <IoMdSend className="text-sm" />
                                </button>
                            </div>
                            <div className="mt-2 text-center">
                                <p className="text-[10px] text-gray-500">
                                    Powered by Latest AI Technology
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg backdrop-blur-md transition-all duration-300 ${isOpen
                    ? "bg-gray-800 text-white rotate-90"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-bounce-subtle"
                    }`}
            >
                {isOpen ? <IoMdClose className="text-2xl" /> : <IoMdChatbubbles className="text-2xl" />}
            </motion.button>
        </div>
    )
}

"use client"

import { useState, useRef, useEffect } from "react"
import { Send } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  text: string
  sender: "you" | "stranger" | "system"
  timestamp: Date
}

interface TextChatProps {
  isConnected: boolean
}

export function TextChat({ isConnected }: TextChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    if (!hasMounted) {
      setHasMounted(true)
      setMessages([
        {
          id: "1",
          text: "You are now connected with a stranger. Say hi!",
          sender: "system",
          timestamp: new Date(),
        },
      ])
    }
  }, [hasMounted])
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  function handleSend() {
    if (!input.trim() || !isConnected) return

    const newMessage: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      sender: "you",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
    setInput("")

    // Simulate stranger reply
    setTimeout(() => {
      const replies = [
        "Hey! What year are you?",
        "Nice, what's your major?",
        "That's cool! Where do you go to school?",
        "Haha same, I love that too!",
        "Have you seen the new season?",
        "I'm studying for finals rn, need a break lol",
      ]
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        text: replies[Math.floor(Math.random() * replies.length)],
        sender: "stranger",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, reply])
    }, 1500 + Math.random() * 2000)
  }

  return (
    <div className="flex h-full flex-col">
      {/* Messages */}
      <ScrollArea className="flex-1 px-4 py-3" ref={scrollRef}>
        <div className="flex flex-col gap-2">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "you" ? "justify-end" : "justify-start"}`}>
              {msg.sender === "system" ? (
                <div className="mx-auto max-w-xs rounded-lg bg-primary/10 px-3 py-1.5 text-center">
                  <p className="text-xs text-primary">{msg.text}</p>
                </div>
              ) : (
                <div
                  className={`max-w-[75%] rounded-2xl px-3.5 py-2 ${
                    msg.sender === "you"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-secondary text-secondary-foreground"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <p
                    className={`mt-0.5 text-[10px] ${
                      msg.sender === "you" ? "text-primary-foreground/60" : "text-muted-foreground"
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input bar */}
      <div className="border-t border-border px-4 py-3">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isConnected ? "Type a message..." : "Waiting for connection..."}
            disabled={!isConnected}
            className="flex-1 rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || !isConnected}
            aria-label="Send message"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  )
}

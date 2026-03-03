"use client"

import { useState } from "react"
import { InterestSelection } from "@/components/interest-selection"
import { ChatRoom } from "@/components/chat-room"

export default function Home() {
  const [screen, setScreen] = useState<"interests" | "chat">("interests")
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  function handleStart(interests: string[]) {
    setSelectedInterests(interests)
    setScreen("chat")
  }

  function handleExit() {
    setScreen("interests")
    setSelectedInterests([])
  }

  if (screen === "chat") {
    return <ChatRoom interests={selectedInterests} onExit={handleExit} />
  }

  return <InterestSelection onStart={handleStart} />
}

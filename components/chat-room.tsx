"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, SkipForward, LogOut, Users, Shield, Mic, MicOff, Video, VideoOff } from "lucide-react"
import { useSocket } from "@/hooks/useSocket"

interface ChatRoomProps {
  interests: string[]
  onExit: () => void
}

export function ChatRoom({ interests, onExit }: ChatRoomProps) {
  const { status, onlineCount, messages, localStream, remoteStream, findMatch, next, sendMessage, report } =
    useSocket(interests)

  const [showReport, setShowReport] = useState(false)
  const [inputText, setInputText] = useState("")
  const [micOn, setMicOn] = useState(true)
  const [camOn, setCamOn] = useState(true)

  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Start finding match on mount
  useEffect(() => {
    findMatch()
  }, [])

  // Attach local stream to video element
  useEffect(() => {
    if (localVideoRef.current && localStream) {
      localVideoRef.current.srcObject = localStream
    }
  }, [localStream])

  // Attach remote stream to video element
  useEffect(() => {
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream
    }
  }, [remoteStream])

  // Auto scroll chat to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Toggle mic
  function toggleMic() {
    localStream?.getAudioTracks().forEach((t) => (t.enabled = !t.enabled))
    setMicOn((v) => !v)
  }

  // Toggle camera
  function toggleCam() {
    localStream?.getVideoTracks().forEach((t) => (t.enabled = !t.enabled))
    setCamOn((v) => !v)
  }

  function handleSend() {
    if (!inputText.trim()) return
    sendMessage(inputText.trim())
    setInputText("")
  }

  function handleReport(reason: string) {
    setShowReport(false)
    report(reason)
  }

  return (
    <div className="flex h-dvh flex-col bg-background">
      {/* Top bar */}
      <header className="flex items-center justify-between border-b border-border px-4 py-3 lg:px-6">
        <div className="flex items-center gap-3">
          <h1 className="font-sans text-lg font-bold text-foreground">CampusLink</h1>
          <div className="hidden items-center gap-1.5 sm:flex">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground">
              <Users className="mr-1 inline h-3 w-3" />
              {onlineCount > 0 ? onlineCount.toLocaleString() : "..."} online
            </span>
          </div>
        </div>

        {interests.length > 0 && (
          <div className="hidden items-center gap-1.5 md:flex">
            <span className="text-xs text-muted-foreground">Matching:</span>
            {interests.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="border-primary/30 bg-primary/10 text-xs text-primary">
                {tag}
              </Badge>
            ))}
            {interests.length > 3 && (
              <span className="text-xs text-muted-foreground">+{interests.length - 3} more</span>
            )}
          </div>
        )}

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg bg-secondary px-2.5 py-1.5">
            <Shield className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-foreground">Verified</span>
          </div>
          <button
            onClick={onExit}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-destructive/20 hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Video panels */}
        <div className="flex min-h-0 flex-1 flex-col gap-3 p-3 md:flex-row md:p-4">
          {/* Your video */}
          <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-2xl bg-secondary md:min-h-0">
            {localStream ? (
              <video ref={localVideoRef} autoPlay muted playsInline className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-muted-foreground">
                <VideoOff className="h-8 w-8" />
                <span className="text-sm">Camera not available</span>
              </div>
            )}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs font-medium text-white drop-shadow">You</span>
            </div>
            {/* Mic + Cam toggles */}
            <div className="absolute bottom-3 right-3 flex gap-2">
              <button
                onClick={toggleMic}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
              >
                {micOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4 text-red-400" />}
              </button>
              <button
                onClick={toggleCam}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
              >
                {camOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4 text-red-400" />}
              </button>
            </div>
          </div>

          {/* Stranger video */}
          <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-2xl bg-secondary md:min-h-0">
            {remoteStream ? (
              <video ref={remoteVideoRef} autoPlay playsInline className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-muted-foreground">
                {status === "waiting" ? (
                  <>
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    <span className="text-sm">Finding a match...</span>
                  </>
                ) : (
                  <>
                    <VideoOff className="h-8 w-8" />
                    <span className="text-sm">Stranger</span>
                  </>
                )}
              </div>
            )}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
              <div className={`h-2 w-2 rounded-full ${status === "connected" ? "bg-green-500" : "bg-yellow-500"}`} />
              <span className="text-xs font-medium text-white drop-shadow">
                {status === "waiting" ? "Searching..." : "Stranger"}
              </span>
            </div>
          </div>
        </div>

        {/* Chat panel */}
        <div className="flex h-56 shrink-0 flex-col border-t border-border md:h-64">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.self ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${msg.self
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground"
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-border px-3 py-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={status === "connected" ? "Type a message..." : "Waiting for connection..."}
              disabled={status !== "connected"}
              className="flex-1 rounded-full bg-secondary px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={status !== "connected" || !inputText.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:bg-primary/90 disabled:opacity-50"
            >
              <svg className="h-4 w-4 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <footer className="flex items-center justify-between border-t border-border px-4 py-3 lg:px-6">
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowReport(!showReport)}
            className="gap-1.5 border-border bg-secondary text-muted-foreground hover:border-destructive/50 hover:bg-destructive/10 hover:text-destructive"
          >
            <AlertTriangle className="h-4 w-4" />
            <span className="hidden sm:inline">Report</span>
          </Button>

          {showReport && (
            <div className="absolute bottom-12 left-0 z-10 flex flex-col gap-1 rounded-xl border border-border bg-card p-3 shadow-xl">
              <p className="mb-1 text-xs font-medium text-foreground">Report reason:</p>
              {["Inappropriate", "Harassment", "Spam", "Underage"].map((reason) => (
                <button
                  key={reason}
                  onClick={() => handleReport(reason)}
                  className="rounded-lg px-3 py-1.5 text-left text-sm text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                >
                  {reason}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {status === "connected" && (
            <span className="mr-2 hidden text-xs text-muted-foreground sm:inline">Connected with a student</span>
          )}
          {status === "waiting" && (
            <span className="mr-2 hidden text-xs text-yellow-500 sm:inline">Finding match...</span>
          )}
          <Button
            onClick={next}
            className="gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
          >
            <SkipForward className="h-4 w-4" />
            Next
          </Button>
        </div>
      </footer>
    </div>
  )
}
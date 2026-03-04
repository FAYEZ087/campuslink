"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, SkipForward, LogOut, Users, Shield, Mic, MicOff, Video, VideoOff } from "lucide-react"
import { useSocket } from "@/hooks/useSocket"

function HallwayIcon({ size = 28 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size} fill="none">
      <defs>
        <filter id="glow-nav" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="bgGrad-nav" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#bgGrad-nav)" />
      <rect width="100" height="100" rx="22" fill="none" stroke="#222222" strokeWidth="1" />
      <polygon points="0,0 0,100 26,78 26,22" fill="#181818" />
      <polygon points="100,0 100,100 74,78 74,22" fill="#202020" />
      <polygon points="0,0 100,0 74,22 26,22" fill="#161616" />
      <polygon points="0,100 100,100 74,78 26,78" fill="#141414" />
      <rect x="26" y="22" width="48" height="56" fill="#111111" stroke="#2a2a2a" strokeWidth="1.2" />
      <line x1="0" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <line x1="100" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <line x1="0" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <line x1="100" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.22" />
      <ellipse cx="50" cy="50" rx="3.5" ry="4.5" fill="#00c896" opacity="0.5" />
      <ellipse cx="50" cy="50" rx="1.5" ry="2" fill="#00c896" opacity="1" />
      <circle cx="50" cy="43" r="3.5" fill="#00c896" />
      <rect x="47" y="47.5" width="6" height="10" rx="1.5" fill="#00c896" />
      <rect x="63" y="40" width="9" height="22" rx="1.5" fill="none" stroke="#00c896" strokeWidth="1" opacity="0.45" />
    </svg>
  )
}

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

  useEffect(() => { findMatch() }, [])

  useEffect(() => {
    if (localVideoRef.current && localStream) {
      localVideoRef.current.srcObject = localStream
    }
  }, [localStream])

  useEffect(() => {
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream
    }
  }, [remoteStream])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function toggleMic() {
    localStream?.getAudioTracks().forEach((t) => (t.enabled = !t.enabled))
    setMicOn((v) => !v)
  }

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
          <HallwayIcon size={28} />
          <h1 className="font-sans text-lg font-bold">
            <span className="text-foreground">hall</span><span style={{ color: "#00c896" }}>way</span>
          </h1>
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
            <div className="absolute bottom-3 right-3 flex gap-2">
              <button onClick={toggleMic} className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70">
                {micOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4 text-red-400" />}
              </button>
              <button onClick={toggleCam} className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70">
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
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" style={{ borderColor: "#00c896", borderTopColor: "transparent" }} />
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
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.self ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${msg.self ? "text-black" : "bg-secondary text-foreground"}`}
                  style={msg.self ? { background: "#00c896" } : {}}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center gap-2 border-t border-border px-3 py-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={status === "connected" ? "Type a message..." : "Waiting for connection..."}
              disabled={status !== "connected"}
              className="flex-1 rounded-full bg-secondary px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 disabled:opacity-50"
              style={{ "--tw-ring-color": "#00c896" } as React.CSSProperties}
            />
            <button
              onClick={handleSend}
              disabled={status !== "connected" || !inputText.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-full text-black transition hover:opacity-90 disabled:opacity-50"
              style={{ background: "#00c896" }}
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
            <span className="mr-2 hidden text-xs sm:inline" style={{ color: "#00c896" }}>Finding match...</span>
          )}
          <Button
            onClick={next}
            className="gap-2 rounded-full px-6 font-semibold text-black shadow-lg transition-all hover:opacity-90"
            style={{ background: "#00c896" }}
          >
            <SkipForward className="h-4 w-4" />
            Next
          </Button>
        </div>
      </footer>
    </div>
  )
}
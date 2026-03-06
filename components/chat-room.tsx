"use client"

import { useEffect, useRef, useState } from "react"
import { AlertTriangle, SkipForward, LogOut, Users, Shield, Mic, MicOff, Video, VideoOff, FlipHorizontal, Send } from "lucide-react"
import { useSocket } from "@/hooks/useSocket"

interface ChatRoomProps {
  interests: string[]
  onExit: () => void
}

export function ChatRoom({ interests, onExit }: ChatRoomProps) {
  const { status, onlineCount, messages, localStream, remoteStream, findMatch, next, sendMessage, report, switchCamera } = useSocket(interests)
  const [showReport, setShowReport] = useState(false)
  const [inputText, setInputText] = useState("")
  const [micOn, setMicOn] = useState(true)
  const [camOn, setCamOn] = useState(true)
  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => { findMatch() }, [])
  useEffect(() => { if (localVideoRef.current && localStream) localVideoRef.current.srcObject = localStream }, [localStream])
  useEffect(() => { if (remoteVideoRef.current && remoteStream) remoteVideoRef.current.srcObject = remoteStream }, [remoteStream])
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }) }, [messages])

  function toggleMic() { localStream?.getAudioTracks().forEach((t) => (t.enabled = !t.enabled)); setMicOn((v) => !v) }
  function toggleCam() { localStream?.getVideoTracks().forEach((t) => (t.enabled = !t.enabled)); setCamOn((v) => !v) }
  function handleSend() { if (!inputText.trim()) return; sendMessage(inputText.trim()); setInputText("") }
  function handleReport(reason: string) { setShowReport(false); report(reason) }

  return (
    <div className="flex h-dvh flex-col bg-[#0a0e1a] text-white">

      {/* Header */}
      <header className="flex shrink-0 items-center justify-between border-b border-border/40 bg-[#060912] px-4 py-3">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={36} height={36} fill="none">
  <defs>
    <radialGradient id="bgN" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#1a1a2e" />
      <stop offset="100%" stopColor="#0d0d1a" />
    </radialGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="url(#bgN)" />
  <rect width="100" height="100" rx="22" fill="none" stroke="#1e3a5f" strokeWidth="1.5" />
  <polygon points="0,0 0,100 26,78 26,22" fill="#0f1629" />
  <polygon points="100,0 100,100 74,78 74,22" fill="#131a2e" />
  <polygon points="0,0 100,0 74,22 26,22" fill="#0c1220" />
  <polygon points="0,100 100,100 74,78 26,78" fill="#0a0f1a" />
  <rect x="26" y="22" width="48" height="56" fill="#0d1117" stroke="#1e3a5f" strokeWidth="1" />
  <line x1="0" y1="0" x2="50" y2="50" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" />
  <line x1="100" y1="0" x2="50" y2="50" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" />
  <line x1="0" y1="100" x2="50" y2="50" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" />
  <line x1="100" y1="100" x2="50" y2="50" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" />
  <ellipse cx="50" cy="50" rx="3.5" ry="4.5" fill="#3b82f6" opacity="0.5" />
  <ellipse cx="50" cy="50" rx="1.5" ry="2" fill="#3b82f6" />
  <circle cx="50" cy="43" r="3.5" fill="#3b82f6" />
  <rect x="47" y="47.5" width="6" height="10" rx="1.5" fill="#3b82f6" />
  <rect x="63" y="40" width="9" height="22" rx="1.5" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
</svg>
<span className="text-xl font-bold text-white">Hallway</span>
          <div className="hidden items-center gap-1.5 rounded-full border border-border/40 bg-card px-2.5 py-1 text-xs sm:flex">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <Users className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">{onlineCount || "..."} online</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {interests.length > 0 && (
            <div className="hidden items-center gap-1.5 md:flex">
              {interests.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {tag}
                </span>
              ))}
              {interests.length > 3 && <span className="text-xs text-muted-foreground">+{interests.length - 3}</span>}
            </div>
          )}
          <div className="flex items-center gap-1.5 rounded-full border border-border/40 bg-card px-3 py-1.5 text-xs font-medium">
            <Shield className="h-3 w-3 text-primary" />
            <span className="text-white">Verified</span>
          </div>
          <button onClick={onExit}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-card text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Main */}
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">

        {/* Videos + controls */}
        <div className="flex min-h-0 flex-1 flex-col gap-3 p-3 md:p-4">
          <div className="grid min-h-0 flex-1 grid-cols-2 gap-3">

            {/* Your video */}
            <div className="relative overflow-hidden rounded-2xl bg-card">
              {localStream ? (
                <video ref={localVideoRef} autoPlay muted playsInline className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 text-muted-foreground">
                  <VideoOff className="h-8 w-8" />
                  <span className="text-xs">No camera</span>
                </div>
              )}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-xs font-medium text-white">You</span>
              </div>
              <div className="absolute bottom-3 right-3 flex gap-1.5">
                <button onClick={toggleMic}
                  className={`flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-sm transition ${micOn ? "bg-black/60 text-white" : "bg-destructive/80 text-white"}`}>
                  {micOn ? <Mic className="h-3.5 w-3.5" /> : <MicOff className="h-3.5 w-3.5" />}
                </button>
                <button onClick={toggleCam}
                  className={`flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-sm transition ${camOn ? "bg-black/60 text-white" : "bg-destructive/80 text-white"}`}>
                  {camOn ? <Video className="h-3.5 w-3.5" /> : <VideoOff className="h-3.5 w-3.5" />}
                </button>
                <button onClick={switchCamera}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80">
                  <FlipHorizontal className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Stranger video */}
            <div className="relative overflow-hidden rounded-2xl bg-card">
              {remoteStream ? (
                <video ref={remoteVideoRef} autoPlay playsInline className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-muted-foreground">
                  {status === "waiting" ? (
                    <>
                      <div className="h-7 w-7 animate-spin rounded-full border-2 border-t-transparent border-primary" />
                      <span className="text-xs">Finding a match...</span>
                    </>
                  ) : (
                    <>
                      <VideoOff className="h-8 w-8" />
                      <span className="text-xs">Waiting...</span>
                    </>
                  )}
                </div>
              )}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-sm">
                <div className={`h-1.5 w-1.5 rounded-full ${status === "connected" ? "bg-primary" : "bg-yellow-400"}`} />
                <span className="text-xs font-medium text-white">
                  {status === "waiting" ? "Searching..." : "Stranger"}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom controls bar */}
          <div className="flex shrink-0 items-center justify-between rounded-2xl border border-border/40 bg-card px-4 py-3">
            <div className="relative">
              <button onClick={() => setShowReport(!showReport)}
                className="flex items-center gap-1.5 rounded-xl border border-border/40 bg-secondary px-3 py-2 text-xs font-medium text-muted-foreground transition hover:border-destructive/40 hover:text-destructive">
                <AlertTriangle className="h-3.5 w-3.5" />
                Report
              </button>
              {showReport && (
                <div className="absolute bottom-12 left-0 z-20 rounded-2xl border border-border/40 bg-[#111827] p-3 shadow-2xl">
                  <p className="mb-2 text-xs font-semibold text-muted-foreground">Report reason</p>
                  {["Inappropriate", "Harassment", "Spam", "Underage"].map((reason) => (
                    <button key={reason} onClick={() => handleReport(reason)}
                      className="block w-full rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive">
                      {reason}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              {status === "connected" && <span className="hidden text-xs text-muted-foreground sm:block">Connected with a student</span>}
              {status === "waiting" && <span className="hidden text-xs text-primary sm:block">Finding match...</span>}
              <button onClick={next}
                className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90">
                <SkipForward className="h-4 w-4" />
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Chat panel */}
        <div className="flex w-full shrink-0 flex-col border-t border-border/40 md:w-80 md:border-l md:border-t-0 lg:w-96">
          <div className="flex shrink-0 items-center justify-between border-b border-border/40 bg-[#060912] px-4 py-3">
            <span className="text-sm font-semibold text-white">Room Chat</span>
            <div className="flex items-center gap-1.5 rounded-full border border-border/40 bg-card px-2.5 py-1 text-xs">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-muted-foreground">{status === "connected" ? "2 online" : "1 online"}</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ minHeight: 0 }}>
            {messages.length === 0 && (
              <div className="flex h-full items-center justify-center">
                <p className="text-center text-sm text-muted-foreground">
                  {status === "waiting" ? "Finding you a match..." : "Say hi! 👋"}
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.self ? "justify-end" : "justify-start"}`}>
                {!msg.self && (
                  <div className="mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">S</div>
                )}
                <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.self ? "rounded-tr-sm bg-primary text-white" : "rounded-tl-sm bg-card text-white"
                }`}>
                  {!msg.self && <span className="mb-0.5 block text-xs font-semibold text-muted-foreground">Stranger</span>}
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="shrink-0 border-t border-border/40 bg-[#060912] px-3 py-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={status === "connected" ? "Type a message..." : "Waiting for connection..."}
                disabled={status !== "connected"}
                className="flex-1 rounded-xl border border-border/40 bg-card px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-40"
              />
              <button onClick={handleSend} disabled={status !== "connected" || !inputText.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition hover:bg-primary/90 disabled:opacity-30">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

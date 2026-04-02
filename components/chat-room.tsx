"use client"

import { useEffect, useRef, useState } from "react"
import { AlertTriangle, SkipForward, LogOut, Users, Shield, Mic, MicOff, Video, VideoOff, FlipHorizontal, Send, HeartHandshake } from "lucide-react"
import { useSocket } from "@/hooks/useSocket"

function HallwayIcon({ size = 28 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size} fill="none">
      <defs>
        <radialGradient id="bgGradCR" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" rx="50" fill="url(#bgGradCR)" />
      <polygon points="0,0 0,100 26,78 26,22" fill="#181818" />
      <polygon points="100,0 100,100 74,78 74,22" fill="#202020" />
      <polygon points="0,0 100,0 74,22 26,22" fill="#161616" />
      <polygon points="0,100 100,100 74,78 26,78" fill="#141414" />
      <rect x="26" y="22" width="48" height="56" fill="#111111" stroke="#2a2a2a" strokeWidth="1.2" />
      <line x1="0" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <line x1="100" y1="0" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <line x1="0" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <line x1="100" y1="100" x2="50" y2="50" stroke="#00c896" strokeWidth="0.8" opacity="0.3" />
      <ellipse cx="50" cy="50" rx="3.5" ry="4.5" fill="#00c896" opacity="0.6" />
      <ellipse cx="50" cy="50" rx="1.5" ry="2" fill="#00c896" />
      <circle cx="50" cy="43" r="3.5" fill="#00c896" />
      <rect x="47" y="47.5" width="6" height="10" rx="1.5" fill="#00c896" />
      <rect x="63" y="40" width="9" height="22" rx="1.5" fill="none" stroke="#00c896" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

interface ChatRoomProps {
  interests: string[]
  onExit: () => void
  darkMode: boolean
  setDarkMode: (v: boolean) => void
}

export function ChatRoom({ interests, onExit, darkMode, setDarkMode }: ChatRoomProps) {
  const { status, onlineCount, messages, localStream, remoteStream, findMatch, next, sendMessage, report, switchCamera } = useSocket(interests)
  const [showReport, setShowReport] = useState(false)
  const [inputText, setInputText] = useState("")
  const [micOn, setMicOn] = useState(true)
  const [camOn, setCamOn] = useState(true)
  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const dark = darkMode

  useEffect(() => { findMatch() }, [])
  useEffect(() => { if (localVideoRef.current && localStream) localVideoRef.current.srcObject = localStream }, [localStream])
  useEffect(() => { if (remoteVideoRef.current && remoteStream) remoteVideoRef.current.srcObject = remoteStream }, [remoteStream])
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }) }, [messages])

  function toggleMic() { localStream?.getAudioTracks().forEach((t) => (t.enabled = !t.enabled)); setMicOn((v) => !v) }
  function toggleCam() { localStream?.getVideoTracks().forEach((t) => (t.enabled = !t.enabled)); setCamOn((v) => !v) }
  function handleSend() { if (!inputText.trim()) return; sendMessage(inputText.trim()); setInputText("") }
  function handleReport(reason: string) { setShowReport(false); report(reason) }

  return (
    <div className="flex h-dvh flex-col bg-[#0a0a0a] text-foreground transition-colors duration-300"
      style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <header className="flex shrink-0 items-center justify-between border-b border-white/5 px-4 py-3 bg-[#0d0d0d]/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <HallwayIcon size={28} />
          <span className="font-display">
            <span className="text-foreground">hall</span><span className="text-[#00c896]">way</span>
          </span>
          <div className="hidden items-center gap-1.5 rounded-full px-2.5 py-1 text-xs sm:flex bg-white/5">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00c896]" />
            <Users className="h-3 w-3 text-white/50" />
            <span className="text-white/50">{onlineCount || "..."} online</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {interests.length > 0 && (
            <div className="hidden items-center gap-1.5 md:flex">
              {interests.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                  style={{ background: "rgba(0,200,150,0.12)", color: "#00c896" }}>
                  {tag}
                </span>
              ))}
              {interests.length > 3 && <span className="text-xs opacity-40">+{interests.length - 3}</span>}
            </div>
          )}
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
            <Shield className="h-3 w-3" style={{ color: "#00c896" }} />
            Verified
          </div>
          <button onClick={onExit}
            className="flex h-8 w-8 items-center justify-center rounded-full transition bg-white/5 text-white/70 hover:bg-red-500/20 hover:text-red-400 cursor-pointer">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex min-h-0 flex-1 flex-col md:flex-row bg-[#080808]">

        {/* Left — Videos + controls */}
        <div className="flex min-h-0 flex-1 flex-col gap-3 p-3 md:p-4">
          {/* Videos */}
          <div className="grid min-h-0 flex-1 grid-cols-2 gap-3">

            {/* Your video */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111111] border border-white/5">
              {localStream ? (
                <video ref={localVideoRef} autoPlay muted playsInline className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 opacity-30">
                  <VideoOff className="h-8 w-8" />
                  <span className="text-xs">No camera</span>
                </div>
              )}
              {/* Label */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-[#00c896]" />
                <span className="text-xs font-medium text-white">You</span>
              </div>
              {/* Controls */}
              <div className="absolute bottom-3 right-3 flex gap-1.5">
                <button onClick={toggleMic}
                  className={`flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-sm transition cursor-pointer ${micOn ? "bg-black/50 text-white hover:bg-black/70" : "bg-red-500/80 text-white"}`}>
                  {micOn ? <Mic className="h-3.5 w-3.5" /> : <MicOff className="h-3.5 w-3.5" />}
                </button>
                <button onClick={toggleCam}
                  className={`flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-sm transition cursor-pointer ${camOn ? "bg-black/50 text-white hover:bg-black/70" : "bg-red-500/80 text-white"}`}>
                  {camOn ? <Video className="h-3.5 w-3.5" /> : <VideoOff className="h-3.5 w-3.5" />}
                </button>
                <button onClick={switchCamera}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 cursor-pointer">
                  <FlipHorizontal className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Stranger video */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111111] border border-white/5">
              {remoteStream ? (
                <video ref={remoteVideoRef} autoPlay playsInline className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 opacity-40">
                  {status === "waiting" ? (
                    <>
                      <div className="h-7 w-7 animate-spin rounded-full border-2"
                        style={{ borderColor: "#00c896", borderTopColor: "transparent" }} />
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
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-sm">
                <div className={`h-1.5 w-1.5 rounded-full ${status === "connected" ? "bg-[#00c896]" : "bg-yellow-400"}`} />
                <span className="text-xs font-medium text-white">
                  {status === "waiting" ? "Searching..." : "Stranger"}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom controls */}
          <div className="flex shrink-0 items-center justify-between rounded-2xl border border-white/5 px-4 py-3 bg-[#0d0d0d]">
            <div className="relative">
              <button onClick={() => setShowReport(!showReport)}
                className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/60 transition hover:border-red-500/30 hover:text-red-400 hover:bg-red-500/10 cursor-pointer">
                <AlertTriangle className="h-3.5 w-3.5" />
                Report
              </button>
              {showReport && (
                <div className="absolute bottom-12 left-0 z-20 rounded-2xl border border-white/10 bg-[#141414] p-3 shadow-2xl">
                  <p className="mb-2 text-xs font-semibold text-white/50">Report reason</p>
                  {["Inappropriate", "Harassment", "Spam", "Underage"].map((reason) => (
                    <button key={reason} onClick={() => handleReport(reason)}
                      className="block w-full rounded-lg px-3 py-2 text-left text-sm text-white/70 transition hover:bg-red-500/10 hover:text-red-400 cursor-pointer">
                      {reason}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              {status === "connected" && (
                <span className="hidden text-xs text-white/40 sm:block">Connected with a student</span>
              )}
              {status === "waiting" && (
                <span className="hidden text-xs sm:block" style={{ color: "#00c896" }}>Finding match...</span>
              )}
              <button onClick={next}
                className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90 cursor-pointer"
                style={{ background: "#00c896" }}>
                <SkipForward className="h-4 w-4" />
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Right — Chat panel */}
        <div className="flex w-full shrink-0 flex-col border-t border-white/5 md:w-80 md:border-l md:border-t-0 lg:w-96 bg-[#0a0a0a]">

          {/* Chat header */}
          <div className="flex shrink-0 items-center justify-between border-b border-white/5 px-4 py-3 bg-[#0d0d0d]">
            <span className="text-sm font-semibold text-white">Room Chat</span>
            <div className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium bg-white/5 text-white/70">
              <div className="h-1.5 w-1.5 rounded-full bg-[#00c896]" />
              {status === "connected" ? "2 online" : "1 online"}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#080808]" style={{ minHeight: 0 }}>
            {messages.length === 0 && (
              <div className="flex h-full items-center justify-center">
                <p className="text-center text-sm text-white/25">
                  {status === "waiting" ? "Finding you a match..." : "Say hi! 👋"}
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.self ? "justify-end" : "justify-start"}`}>
                {!msg.self && (
                  <div className="mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00c896]/20 text-xs font-bold text-[#00c896]">S</div>
                )}
                <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${msg.self
                  ? "rounded-tr-sm text-black"
                  : "rounded-tl-sm bg-white/10 text-white"
                }`}
                  style={msg.self ? { background: "#00c896" } : {}}>
                  {!msg.self && <span className="mb-0.5 block text-xs font-semibold text-white/60">Stranger</span>}
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="shrink-0 border-t border-white/5 px-3 py-3 bg-[#0d0d0d]">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder={status === "connected" ? "Type a message..." : "Waiting for connection..."}
                  disabled={status !== "connected"}
                  className="flex-1 rounded-xl border border-white/10 bg-[#141414] px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition disabled:opacity-40 focus:ring-2 focus:ring-[#00c896]/30 focus:border-[#00c896]/50"
                />
                <button onClick={handleSend} disabled={status !== "connected" || !inputText.trim()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-black transition hover:opacity-90 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                  style={{ background: "#00c896" }}>
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="text-center text-[10px] mt-1 text-white/40">
                Made with <HeartHandshake className="inline h-2.5 w-2.5 text-destructive" /> by <a href="https://github.com/FAYEZ087" target="_blank" rel="noopener noreferrer" className="transition-colors font-medium hover:text-white">Fayez</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
"use client"

import { useEffect, useRef, useState } from "react"
import { AlertTriangle, SkipForward, LogOut, Users, Shield, Mic, MicOff, Video, VideoOff, FlipHorizontal, Send, Moon, Sun } from "lucide-react"
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
      <rect width="100" height="100" rx="22" fill="url(#bgGradCR)" />
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
    <div className={`flex h-dvh flex-col ${dark ? "bg-[#0a0a0a] text-white" : "bg-[#f0f4f0] text-[#0d1a0d]"}`}
      style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <header className={`flex shrink-0 items-center justify-between border-b px-4 py-3 ${dark ? "border-white/5 bg-[#0d0d0d]" : "border-black/8 bg-white"}`}>
        <div className="flex items-center gap-3">
          <HallwayIcon size={28} />
          <span className="font-bold">hall<span style={{ color: "#00c896" }}>way</span></span>
          <div className={`hidden items-center gap-1.5 rounded-full px-2.5 py-1 text-xs sm:flex ${dark ? "bg-white/5" : "bg-black/5"}`}>
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00c896]" />
            <Users className="h-3 w-3 opacity-50" />
            <span className="opacity-50">{onlineCount || "..."} online</span>
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
          <div className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${dark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
            <Shield className="h-3 w-3" style={{ color: "#00c896" }} />
            Verified
          </div>
          <button onClick={() => setDarkMode(!dark)}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition ${dark ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"}`}>
            {dark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
          <button onClick={onExit}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition hover:text-red-400 ${dark ? "bg-white/5 hover:bg-red-500/10" : "bg-black/5 hover:bg-red-500/10"}`}>
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">

        {/* Left — Videos + controls */}
        <div className="flex min-h-0 flex-1 flex-col gap-3 p-3 md:p-4">
          {/* Videos */}
          <div className="grid min-h-0 flex-1 grid-cols-2 gap-3">

            {/* Your video */}
            <div className={`relative overflow-hidden rounded-2xl ${dark ? "bg-[#161616]" : "bg-[#e8ece8]"}`}>
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
                  className={`flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-sm transition ${micOn ? "bg-black/50 text-white hover:bg-black/70" : "bg-red-500/80 text-white"}`}>
                  {micOn ? <Mic className="h-3.5 w-3.5" /> : <MicOff className="h-3.5 w-3.5" />}
                </button>
                <button onClick={toggleCam}
                  className={`flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-sm transition ${camOn ? "bg-black/50 text-white hover:bg-black/70" : "bg-red-500/80 text-white"}`}>
                  {camOn ? <Video className="h-3.5 w-3.5" /> : <VideoOff className="h-3.5 w-3.5" />}
                </button>
                <button onClick={switchCamera}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70">
                  <FlipHorizontal className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Stranger video */}
            <div className={`relative overflow-hidden rounded-2xl ${dark ? "bg-[#161616]" : "bg-[#e8ece8]"}`}>
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
          <div className={`flex shrink-0 items-center justify-between rounded-2xl border px-4 py-3 ${dark ? "border-white/5 bg-[#111]" : "border-black/5 bg-white"}`}>
            <div className="relative">
              <button onClick={() => setShowReport(!showReport)}
                className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-medium transition hover:border-red-500/30 hover:text-red-400 ${dark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
                <AlertTriangle className="h-3.5 w-3.5" />
                Report
              </button>
              {showReport && (
                <div className={`absolute bottom-12 left-0 z-20 rounded-2xl border p-3 shadow-2xl ${dark ? "border-white/10 bg-[#1a1a1a]" : "border-black/10 bg-white"}`}>
                  <p className="mb-2 text-xs font-semibold opacity-50">Report reason</p>
                  {["Inappropriate", "Harassment", "Spam", "Underage"].map((reason) => (
                    <button key={reason} onClick={() => handleReport(reason)}
                      className="block w-full rounded-lg px-3 py-2 text-left text-sm transition hover:bg-red-500/10 hover:text-red-400">
                      {reason}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              {status === "connected" && (
                <span className="hidden text-xs opacity-40 sm:block">Connected with a student</span>
              )}
              {status === "waiting" && (
                <span className="hidden text-xs sm:block" style={{ color: "#00c896" }}>Finding match...</span>
              )}
              <button onClick={next}
                className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90"
                style={{ background: "#00c896" }}>
                <SkipForward className="h-4 w-4" />
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Right — Chat panel */}
        <div className={`flex w-full shrink-0 flex-col border-t md:w-80 md:border-l md:border-t-0 lg:w-96 ${dark ? "border-white/5" : "border-black/8"}`}>

          {/* Chat header */}
          <div className={`flex shrink-0 items-center justify-between border-b px-4 py-3 ${dark ? "border-white/5 bg-[#0d0d0d]" : "border-black/8 bg-white"}`}>
            <span className="text-sm font-semibold">Room Chat</span>
            <div className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${dark ? "bg-white/5" : "bg-black/5"}`}>
              <div className="h-1.5 w-1.5 rounded-full bg-[#00c896]" />
              {status === "connected" ? "2 online" : "1 online"}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ minHeight: 0 }}>
            {messages.length === 0 && (
              <div className="flex h-full items-center justify-center">
                <p className="text-center text-sm opacity-25">
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
                  : dark ? "rounded-tl-sm bg-white/8 text-white" : "rounded-tl-sm bg-black/8 text-black"
                }`}
                  style={msg.self ? { background: "#00c896" } : {}}>
                  {!msg.self && <span className="mb-0.5 block text-xs font-semibold opacity-60">Stranger</span>}
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={`shrink-0 border-t px-3 py-3 ${dark ? "border-white/5 bg-[#0d0d0d]" : "border-black/8 bg-white"}`}>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={status === "connected" ? "Type a message..." : "Waiting for connection..."}
                disabled={status !== "connected"}
                className={`flex-1 rounded-xl border px-4 py-2.5 text-sm outline-none transition disabled:opacity-40 ${dark
                  ? "border-white/8 bg-white/5 text-white placeholder:text-white/25 focus:border-[#00c896]/50"
                  : "border-black/8 bg-black/5 text-black placeholder:text-black/25 focus:border-[#00c896]/50"
                }`}
              />
              <button onClick={handleSend} disabled={status !== "connected" || !inputText.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-black transition hover:opacity-90 disabled:opacity-30"
                style={{ background: "#00c896" }}>
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
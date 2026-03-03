"use client"

import { useEffect, useRef, useState } from "react"
import { VideoOff, MicOff, Mic, Video, VideoIcon } from "lucide-react"

interface VideoPanelProps {
  label: string
  isSelf?: boolean
  isConnected?: boolean
}

export function VideoPanel({ label, isSelf = false, isConnected = true }: VideoPanelProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasCamera, setHasCamera] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)

  useEffect(() => {
    if (isSelf) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
            setHasCamera(true)
          }
        })
        .catch(() => {
          setHasCamera(false)
        })
    }
  }, [isSelf])

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-video-bg">
      {/* Video area */}
      <div className="relative flex flex-1 items-center justify-center">
        {isSelf && hasCamera && !isVideoOff ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : isSelf && !hasCamera ? (
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
              <VideoIcon className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">Camera not available</p>
          </div>
        ) : !isSelf && !isConnected ? (
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                <span className="text-3xl font-bold text-muted-foreground">?</span>
              </div>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-video-bg bg-warning" />
            </div>
            <p className="text-sm text-muted-foreground">Looking for someone...</p>
            <div className="flex gap-1">
              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:0ms]" />
              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:150ms]" />
              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:300ms]" />
            </div>
          </div>
        ) : !isSelf && isConnected ? (
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                <span className="text-3xl font-bold text-primary">S</span>
              </div>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-video-bg bg-success" />
            </div>
            <p className="text-sm text-foreground">Stranger connected</p>
          </div>
        ) : isVideoOff ? (
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
              <VideoOff className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">Camera off</p>
          </div>
        ) : null}
      </div>

      {/* Label bar */}
      <div className="flex items-center justify-between border-t border-border bg-card/60 px-4 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div
            className={`h-2 w-2 rounded-full ${
              isSelf || isConnected ? "bg-success" : "bg-warning animate-pulse"
            }`}
          />
          <span className="text-sm font-medium text-foreground">{label}</span>
        </div>

        {isSelf && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsMuted(!isMuted)}
              aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
              className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                isMuted
                  ? "bg-destructive/20 text-destructive"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsVideoOff(!isVideoOff)}
              aria-label={isVideoOff ? "Turn on camera" : "Turn off camera"}
              className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                isVideoOff
                  ? "bg-destructive/20 text-destructive"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {isVideoOff ? <VideoOff className="h-4 w-4" /> : <Video className="h-4 w-4" />}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

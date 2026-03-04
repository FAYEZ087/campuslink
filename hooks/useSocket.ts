"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { io, Socket } from "socket.io-client"

export type MatchStatus = "idle" | "waiting" | "connected"

export function useSocket(interests: string[]) {
    const socketRef = useRef<Socket | null>(null)
    const peerRef = useRef<RTCPeerConnection | null>(null)

    const [status, setStatus] = useState<MatchStatus>("idle")
    const [onlineCount, setOnlineCount] = useState(0)
    const [messages, setMessages] = useState<{ text: string; self: boolean }[]>([])
    const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null)
    const [localStream, setLocalStream] = useState<MediaStream | null>(null)
    const partnerIdRef = useRef<string | null>(null)

    // ── Create WebRTC peer connection ─────────────────────────────────────────
    const createPeer = useCallback((stream: MediaStream) => {
       const peer = new RTCPeerConnection({
        iceServers: [
            { urls: "stun:stun.l.google.com:19302" },
            {
                urls: "turn:relay.metered.ca:80",
                username: "2IaEqXmvCzreIHOI",
                credential: "4d5a54a8f93a9a0f7e86fe4c",
            },
            {
                urls: "turn:relay.metered.ca:443",
                username: "2IaEqXmvCzreIHOI",
                credential: "4d5a54a8f93a9a0f7e86fe4c",
            },
            {
                urls: "turns:relay.metered.ca:443?transport=tcp",
                username: "2IaEqXmvCzreIHOI",
                credential: "4d5a54a8f93a9a0f7e86fe4c",
            },
        ],
    })

        // Add local stream tracks to peer
        stream.getTracks().forEach((track) => peer.addTrack(track, stream))

        // When we get remote stream
        peer.ontrack = (event) => {
            setRemoteStream(event.streams[0])
        }

        // Send ICE candidates to partner via server
        peer.onicecandidate = (event) => {
            if (event.candidate && partnerIdRef.current && socketRef.current) {
                socketRef.current.emit("ice-candidate", {
                    candidate: event.candidate,
                    to: partnerIdRef.current,
                })
            }
        }

        return peer
    }, [])

    // ── Start looking for a match ─────────────────────────────────────────────
    const findMatch = useCallback(async () => {
        if (!socketRef.current) return

        setMessages([])
        setRemoteStream(null)
        setStatus("waiting")

        // Get camera + mic
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
            })
            setLocalStream(stream)

            // Clean up old peer
            if (peerRef.current) {
                peerRef.current.close()
                peerRef.current = null 
            }

            peerRef.current = createPeer(stream)
        } catch {
            console.warn("Camera/mic not available, continuing without video")
        }

        socketRef.current.emit("find-match", { interests })
    }, [interests, createPeer])

    // ── Skip to next person ───────────────────────────────────────────────────
   const next = useCallback(() => {
        if (!socketRef.current) return

        setRemoteStream(null)
        setMessages([])
        partnerIdRef.current = null

        // ✅ Properly stop all tracks before closing
        if (peerRef.current) {
            peerRef.current.getSenders().forEach(sender => {
                sender.track?.stop()
            })
            peerRef.current.close()
            peerRef.current = null
        }

        // ✅ Recreate fresh peer with local stream
        if (localStream) {
            peerRef.current = createPeer(localStream)
        }

        setStatus("waiting")
        socketRef.current.emit("next")
    }, [localStream, createPeer])

    // ── Send chat message ─────────────────────────────────────────────────────
    const sendMessage = useCallback((text: string) => {
        if (!socketRef.current || !text.trim()) return
        socketRef.current.emit("chat-message", { message: text })
        setMessages((prev) => [...prev, { text, self: true }])
    }, [])

    // ── Report user ───────────────────────────────────────────────────────────
    const report = useCallback((reason: string) => {
        if (!socketRef.current) return
        socketRef.current.emit("report", { reason })
        next()
    }, [next])

    // ── Socket setup ──────────────────────────────────────────────────────────
    useEffect(() => {
        const socket = io("https://campuslink-server-production.up.railway.app")
        socketRef.current = socket

        // Online count
        socket.on("online-count", (count: number) => setOnlineCount(count))

        // Waiting in queue
        socket.on("waiting", () => setStatus("waiting"))

        // Match found!
        socket.on("match-found", async ({ partnerId, isInitiator, sharedInterests }) => {
            partnerIdRef.current = partnerId
            setStatus("connected")
            setMessages([{
                text: sharedInterests > 0
                    ? `Connected! You share ${sharedInterests} interest${sharedInterests > 1 ? "s" : ""} 🎉`
                    : "You are now connected with a student. Say hi! 👋",
                self: false,
            }])

            // WebRTC handshake
            if (peerRef.current) {
                if (isInitiator) {
                    // Create and send offer
                    const offer = await peerRef.current.createOffer()
                    await peerRef.current.setLocalDescription(offer)
                    socket.emit("webrtc-offer", { offer, to: partnerId })
                }
            }
        })

        // Receive WebRTC offer
        socket.on("webrtc-offer", async ({ offer, from }) => {
            if (!peerRef.current) return
            await peerRef.current.setRemoteDescription(new RTCSessionDescription(offer))
            const answer = await peerRef.current.createAnswer()
            await peerRef.current.setLocalDescription(answer)
            socket.emit("webrtc-answer", { answer, to: from })
        })

        // Receive WebRTC answer
        socket.on("webrtc-answer", async ({ answer }) => {
            if (!peerRef.current) return
            await peerRef.current.setRemoteDescription(new RTCSessionDescription(answer))
        })

        // Receive ICE candidate
        socket.on("ice-candidate", async ({ candidate }) => {
            if (!peerRef.current) return
            try {
                await peerRef.current.addIceCandidate(new RTCIceCandidate(candidate))
            } catch (e) {
                console.error("ICE candidate error", e)
            }
        })

        // Partner left or was skipped
        socket.on("partner-disconnected", () => {
            setRemoteStream(null)
            partnerIdRef.current = null
            setStatus("waiting")
            setMessages([{ text: "Stranger disconnected. Finding new match...", self: false }])

            if (peerRef.current) {
                peerRef.current.close()
                peerRef.current = null
            }

            // Auto re-queue
            socket.emit("find-match", { interests })
        })

        // Receive chat message
        socket.on("chat-message", ({ message }: { message: string }) => {
            setMessages((prev) => [...prev, { text: message, self: false }])
        })

        return () => {
            socket.disconnect()
            peerRef.current?.close()
            localStream?.getTracks().forEach((t) => t.stop())
        }
    }, []) // only run once on mount

    return {
        status,
        onlineCount,
        messages,
        localStream,
        remoteStream,
        findMatch,
        next,
        sendMessage,
        report,
    }
}
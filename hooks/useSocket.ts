"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { io, Socket } from "socket.io-client"

export type MatchStatus = "idle" | "waiting" | "connected"

export function useSocket(interests: string[]) {
    const socketRef = useRef<Socket | null>(null)
    const peerRef = useRef<RTCPeerConnection | null>(null)
    const iceCandidateQueue = useRef<RTCIceCandidate[]>([])

    const [status, setStatus] = useState<MatchStatus>("idle")
    const [onlineCount, setOnlineCount] = useState(0)
    const [messages, setMessages] = useState<{ text: string; self: boolean }[]>([])
    const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null)
    const [localStream, setLocalStream] = useState<MediaStream | null>(null)
    const localStreamRef = useRef<MediaStream | null>(null)
    const partnerIdRef = useRef<string | null>(null)

    const createPeer = useCallback((stream: MediaStream) => {
        const peer = new RTCPeerConnection({
            iceServers: [
                { urls: "stun:stun.l.google.com:19302" },
                { urls: "stun:stun.relay.metered.ca:80" },
                {
                    urls: "turn:global.relay.metered.ca:80",
                    username: "4d5a54a8f93a9a0f7e86fe4c",
                    credential: "2IaEqXmvCzreIHOI",
                },
                {
                    urls: "turn:global.relay.metered.ca:80?transport=tcp",
                    username: "4d5a54a8f93a9a0f7e86fe4c",
                    credential: "2IaEqXmvCzreIHOI",
                },
                {
                    urls: "turn:global.relay.metered.ca:443",
                    username: "4d5a54a8f93a9a0f7e86fe4c",
                    credential: "2IaEqXmvCzreIHOI",
                },
                {
                    urls: "turns:global.relay.metered.ca:443?transport=tcp",
                    username: "4d5a54a8f93a9a0f7e86fe4c",
                    credential: "2IaEqXmvCzreIHOI",
                },
            ],
        })

        stream.getTracks().forEach((track) => peer.addTrack(track, stream))

        peer.ontrack = (event) => {
            console.log("🎥 GOT REMOTE STREAM!", event.streams[0])
            setRemoteStream(event.streams[0])
        }

        peer.onicecandidate = (event) => {
            if (event.candidate && partnerIdRef.current && socketRef.current) {
                socketRef.current.emit("ice-candidate", {
                    candidate: event.candidate,
                    to: partnerIdRef.current,
                })
            }
        }

        peer.onconnectionstatechange = () => {
            console.log("🔗 Connection state:", peer.connectionState)
        }

        peer.oniceconnectionstatechange = () => {
            console.log("🧊 ICE state:", peer.iceConnectionState)
        }

        return peer
    }, [])

    const flushIceCandidates = useCallback(async () => {
        if (!peerRef.current) return
        console.log(`🚿 Flushing ${iceCandidateQueue.current.length} queued ICE candidates`)
        for (const candidate of iceCandidateQueue.current) {
            try {
                await peerRef.current.addIceCandidate(candidate)
            } catch (e) {
                console.error("ICE flush error", e)
            }
        }
        iceCandidateQueue.current = []
    }, [])

    const findMatch = useCallback(async () => {
        if (!socketRef.current) return

        setMessages([])
        setRemoteStream(null)
        setStatus("waiting")
        iceCandidateQueue.current = []

        if (!localStreamRef.current) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true,
                })
                setLocalStream(stream)
                localStreamRef.current = stream
            } catch {
                console.warn("Camera/mic not available")
            }
        }

        if (peerRef.current) {
            peerRef.current.close()
            peerRef.current = null
        }

        if (localStreamRef.current) {
            peerRef.current = createPeer(localStreamRef.current)
        }

        socketRef.current.emit("find-match", { interests })
    }, [interests, createPeer])

    const next = useCallback(() => {
        if (!socketRef.current) return

        setRemoteStream(null)
        setMessages([])
        partnerIdRef.current = null
        iceCandidateQueue.current = []

        if (peerRef.current) {
            peerRef.current.close()
            peerRef.current = null
        }

        if (localStreamRef.current) {
            peerRef.current = createPeer(localStreamRef.current)
        }

        setStatus("waiting")
        socketRef.current.emit("next")
    }, [createPeer])

    const sendMessage = useCallback((text: string) => {
        if (!socketRef.current || !text.trim()) return
        socketRef.current.emit("chat-message", { message: text })
        setMessages((prev) => [...prev, { text, self: true }])
    }, [])

    const report = useCallback((reason: string) => {
        if (!socketRef.current) return
        socketRef.current.emit("report", { reason })
        next()
    }, [next])

    useEffect(() => {
        const socket = io("https://campuslink-server-1.onrender.com")
        socketRef.current = socket

        socket.on("online-count", (count: number) => setOnlineCount(count))
        socket.on("waiting", () => setStatus("waiting"))

        socket.on("match-found", async ({ partnerId, isInitiator, sharedInterests }) => {
            console.log("🟢 MATCH FOUND - isInitiator:", isInitiator)
            partnerIdRef.current = partnerId
            iceCandidateQueue.current = []
            setStatus("connected")
            setMessages([{
                text: sharedInterests > 0
                    ? `Connected! You share ${sharedInterests} interest${sharedInterests > 1 ? "s" : ""} 🎉`
                    : "You are now connected with a student. Say hi! 👋",
                self: false,
            }])

            if (peerRef.current && isInitiator) {
                const offer = await peerRef.current.createOffer()
                await peerRef.current.setLocalDescription(offer)
                socket.emit("webrtc-offer", { offer, to: partnerId })
            }
        })

        // Non-initiator receives offer
        socket.on("webrtc-offer", async ({ offer, from }) => {
            console.log("📨 Got offer from", from)
            if (!peerRef.current) return
            await peerRef.current.setRemoteDescription(new RTCSessionDescription(offer))
            await flushIceCandidates()
            const answer = await peerRef.current.createAnswer()
            await peerRef.current.setLocalDescription(answer)
            socket.emit("webrtc-answer", { answer, to: from })
        })

        // Initiator receives answer
        socket.on("webrtc-answer", async ({ answer }) => {
            console.log("📨 Got answer")
            if (!peerRef.current) return
            await peerRef.current.setRemoteDescription(new RTCSessionDescription(answer))
            await flushIceCandidates()
        })

        // Queue ICE candidates until remote description is set
        socket.on("ice-candidate", async ({ candidate }) => {
            if (!peerRef.current) return
            if (peerRef.current.remoteDescription) {
                try {
                    await peerRef.current.addIceCandidate(new RTCIceCandidate(candidate))
                } catch (e) {
                    console.error("ICE error", e)
                }
            } else {
                console.log("⏳ Queuing ICE candidate")
                iceCandidateQueue.current.push(new RTCIceCandidate(candidate))
            }
        })

        socket.on("partner-disconnected", () => {
            console.log("👋 Partner disconnected")
            setRemoteStream(null)
            partnerIdRef.current = null
            iceCandidateQueue.current = []
            setStatus("waiting")
            setMessages([{ text: "Stranger disconnected. Finding new match...", self: false }])

            if (peerRef.current) {
                peerRef.current.close()
                peerRef.current = null
            }

            if (localStreamRef.current) {
                peerRef.current = createPeer(localStreamRef.current)
            }
            socket.emit("find-match", { interests })
        })

        socket.on("chat-message", ({ message }: { message: string }) => {
            setMessages((prev) => [...prev, { text: message, self: false }])
        })

        return () => {
            socket.disconnect()
            peerRef.current?.close()
            localStreamRef.current?.getTracks().forEach((t) => t.stop())
        }
    }, [])

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
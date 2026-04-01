"use client"

import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import { SERVER_URL, LiveStats } from "./useSocket"

const DEFAULT_STATS: LiveStats = {
  onlineNow: 0,
  totalConnections: 0,
  totalMatches: 0,
  matchesToday: 0,
}

/**
 * Lightweight hook for landing page stats.
 * Connects to socket just for live-stats updates.
 */
export function useLiveStats() {
  const [stats, setStats] = useState<LiveStats>(DEFAULT_STATS)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // Fetch initial stats via HTTP
    fetch(`${SERVER_URL}/stats`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => console.warn("Failed to fetch initial stats"))

    // Connect socket for live updates
    const socket = io(SERVER_URL, {
      transports: ["websocket", "polling"],
    })

    socket.on("connect", () => setIsConnected(true))
    socket.on("disconnect", () => setIsConnected(false))

    socket.on("live-stats", (newStats: LiveStats) => {
      setStats(newStats)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return { stats, isConnected }
}

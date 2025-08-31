"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { validateProfileId, formatProfileId, parseProfileId } from "@/lib/profile-id"

interface ProfileIdBadgeProps {
  profileId: string
  variant?: "default" | "secondary" | "outline" | "destructive"
  size?: "sm" | "default" | "lg"
  showCopy?: boolean
  showYear?: boolean
  className?: string
}

export function ProfileIdBadge({
  profileId,
  variant = "secondary",
  size = "default",
  showCopy = false,
  showYear = false,
  className = "",
}: ProfileIdBadgeProps) {
  const [copied, setCopied] = useState(false)
  const isValid = validateProfileId(profileId)
  const parsed = parseProfileId(profileId)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy profile ID:", err)
    }
  }

  const displayId = isValid ? formatProfileId(profileId) : profileId
  const badgeVariant = isValid ? variant : "destructive"

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Badge
        variant={badgeVariant}
        className={`
          ${size === "sm" ? "text-xs px-2 py-1" : size === "lg" ? "text-sm px-3 py-1.5" : "text-sm px-2.5 py-1"}
          ${isValid ? "" : "bg-red-100 text-red-800 border-red-200"}
        `}
      >
        {displayId}
        {showYear && isValid && <span className="ml-1 opacity-70">({parsed.year})</span>}
      </Badge>

      {showCopy && (
        <Button variant="ghost" size="sm" onClick={handleCopy} className="h-6 w-6 p-0 hover:bg-gray-100">
          {copied ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3 text-gray-500" />}
        </Button>
      )}
    </div>
  )
}

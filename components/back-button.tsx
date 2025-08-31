"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

interface BackButtonProps {
  href?: string
  label?: string
  className?: string
}

export function BackButton({ href, label = "वापस जाएं", className }: BackButtonProps) {
  const router = useRouter()

  const handleBack = () => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }

  return (
    <Button
      variant="ghost"
      onClick={handleBack}
      className={`mb-4 text-gray-600 hover:text-orange-600 hover:bg-orange-50 ${className}`}
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      {label}
    </Button>
  )
}

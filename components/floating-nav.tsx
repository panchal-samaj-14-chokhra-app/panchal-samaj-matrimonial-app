"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Users, Settings, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { icon: Users, label: "प्रोफाइल्स", href: "/profiles" },
    { icon: Plus, label: "नई प्रोफाइल", href: "/profile/create" },
    { icon: Settings, label: "सेटिंग्स", href: "/profile/settings" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-orange-600 hover:bg-orange-700 shadow-lg"
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Navigation Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border p-2 min-w-[200px]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-orange-50 transition-colors"
            >
              <item.icon className="w-5 h-5 text-orange-600" />
              <span className="text-gray-700">{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

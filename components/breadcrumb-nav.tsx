"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbNavProps {
  items?: BreadcrumbItem[]
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const pathname = usePathname()

  // Auto-generate breadcrumbs if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split("/").filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [{ label: "होम", href: "/" }]

    let currentPath = ""
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`

      let label = segment
      switch (segment) {
        case "about":
          label = "हमारे बारे में"
          break
        case "profiles":
          label = "प्रोफाइल्स"
          break
        case "profile":
          label = "प्रोफाइल"
          break
        case "create":
          label = "नई प्रोफाइल"
          break
        case "edit":
          label = "संपादित करें"
          break
        case "settings":
          label = "सेटिंग्स"
          break
        case "login":
          label = "लॉगिन"
          break
        case "signup":
          label = "साइन अप"
          break
        case "14-chokhra":
          label = "14 चोखरा सदस्य"
          break
        case "other":
          label = "अन्य सदस्य"
          break
        case "events":
          label = "कार्यक्रम"
          break
        case "admin":
          label = "एडमिन"
          break
        case "forgot-password":
          label = "पासवर्ड भूल गए"
          break
      }

      breadcrumbs.push({ label, href: currentPath })
    })

    return breadcrumbs
  }

  const breadcrumbs = items || generateBreadcrumbs()

  if (breadcrumbs.length <= 1) return null

  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-600 mb-4 px-4 py-2">
      {breadcrumbs.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index === 0 && <Home className="w-4 h-4 mr-1" />}
          {index < breadcrumbs.length - 1 ? (
            <Link href={item.href} className="hover:text-orange-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-orange-600 font-medium">{item.label}</span>
          )}
          {index < breadcrumbs.length - 1 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
        </div>
      ))}
    </nav>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogIn, LogOut, Settings } from "lucide-react"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session, status } = useSession()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut({ redirect: false })
    router.push("/")
    setIsOpen(false)
  }

  return (
    <nav className="bg-white shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="पंचाल समाज लोगो" width={40} height={40} className="rounded-full" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-orange-600">पंचाल समाज 14 चोखरा</h1>
              <p className="text-xs text-gray-600">मैट्रिमोनियल पोर्टल</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/profiles" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Profiles
            </Link>
            <div className="flex items-center space-x-3">
              {session?.user ? (
                <>
                  <span className="text-sm text-gray-600">नमस्ते, {session.user.name}</span>
                  <Link href="/profile/settings">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-orange-200 text-orange-600 hover:bg-orange-50"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      सेटिंग्स
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="bg-transparent border-red-200 text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    लॉगआउट
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-orange-200 text-orange-600 hover:bg-orange-50"
                    >
                      <LogIn className="h-4 w-4 mr-2" />
                      लॉगिन
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      <User className="h-4 w-4 mr-2" />
                      साइन अप
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-orange-100">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/profiles"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                Profiles
              </Link>
              <div className="border-t border-orange-100 pt-3 mt-3 space-y-2">
                {session?.user ? (
                  <>
                    <div className="px-3 py-2 text-sm text-gray-600">नमस्ते, {session.user.name}</div>
                    <Link
                      href="/profile/settings"
                      className="block px-3 py-2 text-orange-600 hover:bg-orange-50 rounded-md font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      सेटिंग्स
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-md font-medium"
                    >
                      लॉगआउट
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="block px-3 py-2 text-orange-600 hover:bg-orange-50 rounded-md font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      लॉगिन
                    </Link>
                    <Link
                      href="/signup"
                      className="block px-3 py-2 bg-orange-600 text-white hover:bg-orange-700 rounded-md font-medium text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      साइन अप
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

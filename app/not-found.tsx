"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Home, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="pb-4">
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="पंचाल समाज लोगो" width={80} height={80} className="rounded-full" />
          </div>
          <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <Search className="h-8 w-8 text-orange-600" />
          </div>
          <CardTitle className="text-2xl text-foreground">404</CardTitle>
          <CardTitle className="text-xl text-foreground mb-2">पेज नहीं मिला!</CardTitle>
          <CardDescription className="text-muted-foreground">
            क्षमा करें, आपके द्वारा खोजा गया पेज उपलब्ध नहीं है। यह हटा दिया गया हो सकता है या URL गलत हो सकता है।
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button className="bg-orange-600 hover:bg-orange-700 w-full sm:w-auto">
                <Home className="mr-2 h-4 w-4" />
                होम पेज पर जाएं
              </Button>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()} className="w-full sm:w-auto">
              <ArrowLeft className="mr-2 h-4 w-4" />
              वापस जाएं
            </Button>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-muted-foreground">यदि समस्या बनी रहे तो कृपया हमसे संपर्क करें</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

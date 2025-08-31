"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="pb-4">
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="पंचाल समाज लोगो" width={80} height={80} className="rounded-full" />
          </div>
          <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-orange-600" />
          </div>
          <CardTitle className="text-xl text-foreground">कुछ गलत हुआ है!</CardTitle>
          <CardDescription className="text-muted-foreground">
            क्षमा करें, एक तकनीकी समस्या आई है। कृपया पुनः प्रयास करें।
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={reset} className="bg-orange-600 hover:bg-orange-700">
              <RefreshCw className="mr-2 h-4 w-4" />
              पुनः प्रयास करें
            </Button>
            <Link href="/">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                <Home className="mr-2 h-4 w-4" />
                होम पेज पर जाएं
              </Button>
            </Link>
          </div>
          {error.digest && <p className="text-xs text-muted-foreground mt-4">Error ID: {error.digest}</p>}
        </CardContent>
      </Card>
    </div>
  )
}

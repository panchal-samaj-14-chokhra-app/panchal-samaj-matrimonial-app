import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "पासवर्ड रीसेट - पंचाल समाज 14 चोखरा मैट्रिमोनियल",
  description: "अपना पासवर्ड रीसेट करें",
}

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2 mb-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="flex justify-center flex-1">
              <Image src="/logo.png" alt="पंचाल समाज लोगो" width={60} height={60} className="rounded-full" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-orange-600 text-center">पासवर्ड रीसेट करें</CardTitle>
          <CardDescription className="text-center">अपना ईमेल पता दर्ज करें और हम आपको OTP भेजेंगे</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">ईमेल पता</Label>
            <Input
              id="email"
              type="email"
              placeholder="आपका पंजीकृत ईमेल पता"
              className="border-orange-200 focus:border-orange-400"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-orange-600 hover:bg-orange-700">OTP भेजें</Button>
          <div className="text-center text-sm text-gray-600">
            पासवर्ड याद आ गया?{" "}
            <Link href="/login" className="text-orange-600 hover:text-orange-700 hover:underline">
              लॉगिन करें
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

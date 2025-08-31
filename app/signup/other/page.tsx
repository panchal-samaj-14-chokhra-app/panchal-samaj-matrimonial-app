import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "अन्य सदस्य साइन अप - पंचाल समाज मैट्रिमोनियल",
  description: "अन्य सदस्य के रूप में पंजीकरण करें",
}

export default function OtherMemberSignup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2 mb-4">
            <Link href="/signup">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="flex justify-center flex-1">
              <Image src="/logo.png" alt="पंचाल समाज लोगो" width={60} height={60} className="rounded-full" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-600 text-center">अन्य सदस्य पंजीकरण</CardTitle>
          <CardDescription className="text-center">व्यक्तिगत जानकारी के साथ पंजीकरण करें</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-amber-200 bg-amber-50">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">आपका पंजीकरण एडमिन अप्रूवल के बाद सक्रिय होगा</AlertDescription>
          </Alert>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">नाम</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="आपका नाम"
                className="border-gray-200 focus:border-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">उपनाम</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="आपका उपनाम"
                className="border-gray-200 focus:border-gray-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="village">गांव</Label>
            <Input id="village" type="text" placeholder="आपका गांव" className="border-gray-200 focus:border-gray-400" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">शहर</Label>
              <Input id="city" type="text" placeholder="आपका शहर" className="border-gray-200 focus:border-gray-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">राज्य</Label>
              <Input id="state" type="text" placeholder="आपका राज्य" className="border-gray-200 focus:border-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">ईमेल पता</Label>
            <Input
              id="email"
              type="email"
              placeholder="आपका ईमेल पता"
              className="border-gray-200 focus:border-gray-400"
            />
            <Button variant="outline" size="sm">
              ईमेल सत्यापित करें (OTP)
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobile">मोबाइल नंबर</Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="आपका मोबाइल नंबर"
              className="border-gray-200 focus:border-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">पासवर्ड बनाएं</Label>
            <Input
              id="password"
              type="password"
              placeholder="मजबूत पासवर्ड बनाएं"
              className="border-gray-200 focus:border-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">पासवर्ड की पुष्टि करें</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="पासवर्ड दोबारा दर्ज करें"
              className="border-gray-200 focus:border-gray-400"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-gray-600 hover:bg-gray-700">पंजीकरण के लिए आवेदन करें</Button>
          <div className="text-center text-sm text-gray-600">
            पहले से खाता है?{" "}
            <Link href="/login" className="text-orange-600 hover:text-orange-700 hover:underline">
              लॉगिन करें
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

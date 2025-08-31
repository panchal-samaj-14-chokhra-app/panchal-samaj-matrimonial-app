import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "14 चोखरा सदस्य साइन अप - पंचाल समाज मैट्रिमोनियल",
  description: "14 चोखरा सदस्य के रूप में पंजीकरण करें",
}

export default function ChokhraMemberSignup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-4">
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
          <CardTitle className="text-2xl font-bold text-orange-600 text-center">14 चोखरा सदस्य पंजीकरण</CardTitle>
          <CardDescription className="text-center">पारिवारिक आईडी के साथ पंजीकरण करें</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="familyId">पारिवारिक आईडी</Label>
            <Input
              id="familyId"
              type="text"
              placeholder="आपकी पारिवारिक आईडी दर्ज करें"
              className="border-orange-200 focus:border-orange-400"
            />
            <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
              परिवारजनों की सूची देखें
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="memberName">सदस्य का नाम चुनें</Label>
            <Select>
              <SelectTrigger className="border-orange-200 focus:border-orange-400">
                <SelectValue placeholder="परिवारजनों की सूची से नाम चुनें" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="member1">राज पंचाल</SelectItem>
                <SelectItem value="member2">सुनीता पंचाल</SelectItem>
                <SelectItem value="member3">अमित पंचाल</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">ईमेल पता</Label>
            <Input
              id="email"
              type="email"
              placeholder="आपका ईमेल पता"
              className="border-orange-200 focus:border-orange-400"
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
              className="border-orange-200 focus:border-orange-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">पासवर्ड बनाएं</Label>
            <Input
              id="password"
              type="password"
              placeholder="मजबूत पासवर्ड बनाएं"
              className="border-orange-200 focus:border-orange-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">पासवर्ड की पुष्टि करें</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="पासवर्ड दोबारा दर्ज करें"
              className="border-orange-200 focus:border-orange-400"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-orange-600 hover:bg-orange-700">पंजीकरण करें और भुगतान पर जाएं</Button>
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

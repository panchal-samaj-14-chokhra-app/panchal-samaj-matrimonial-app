"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Mail, Shield, UserPlus } from "lucide-react"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

export default function ChokhraMemberSignup() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [formData, setFormData] = useState({
    familyId: "",
    memberName: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call to send OTP
    setTimeout(() => {
      setIsLoading(false)
      setCurrentStep(2)
    }, 1500)
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!otp || otp.length !== 6) return

    setIsLoading(true)
    // Simulate API call to verify OTP
    setTimeout(() => {
      setIsLoading(false)
      setCurrentStep(3)
    }, 1500)
  }

  const handleCompleteRegistration = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.password || !formData.mobile || formData.password !== formData.confirmPassword) return

    setIsLoading(true)
    // Simulate API call to complete registration
    setTimeout(() => {
      setIsLoading(false)
      router.push("/login")
    }, 2000)
  }

  const StepIndicator = () => (
    <div className="flex justify-center mb-6">
      <div className="flex items-center space-x-4">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= step ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              {step === 1 && <Mail className="w-4 h-4" />}
              {step === 2 && <Shield className="w-4 h-4" />}
              {step === 3 && <UserPlus className="w-4 h-4" />}
            </div>
            {step < 3 && <div className={`w-12 h-0.5 ${currentStep > step ? "bg-orange-600" : "bg-gray-200"}`} />}
          </div>
        ))}
      </div>
    </div>
  )

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
          <CardDescription className="text-center">
            {currentStep === 1 && "ईमेल सत्यापन"}
            {currentStep === 2 && "OTP सत्यापन"}
            {currentStep === 3 && "पंजीकरण पूरा करें"}
          </CardDescription>
          <StepIndicator />
        </CardHeader>

        {currentStep === 1 && (
          <form onSubmit={handleSendOTP}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">ईमेल पता</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="आपका ईमेल पता दर्ज करें"
                  className="border-orange-200 focus:border-orange-400"
                  required
                />
              </div>
              <div className="text-sm text-gray-600 bg-orange-50 p-3 rounded-lg">
                <p>आपके ईमेल पर एक OTP भेजा जाएगा सत्यापन के लिए।</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={isLoading || !email}>
                {isLoading ? "OTP भेजा जा रहा है..." : "OTP भेजें"}
              </Button>
            </CardFooter>
          </form>
        )}

        {currentStep === 2 && (
          <form onSubmit={handleVerifyOTP}>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  OTP भेजा गया है: <span className="font-medium text-orange-600">{email}</span>
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="otp">6 अंकों का OTP दर्ज करें</Label>
                <div className="flex justify-center">
                  <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>
              <div className="text-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentStep(1)}
                  className="text-orange-600 hover:text-orange-700"
                >
                  ईमेल बदलें
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700"
                disabled={isLoading || otp.length !== 6}
              >
                {isLoading ? "सत्यापन हो रहा है..." : "OTP सत्यापित करें"}
              </Button>
            </CardFooter>
          </form>
        )}

        {currentStep === 3 && (
          <form onSubmit={handleCompleteRegistration}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="finalEmail">ईमेल पता</Label>
                <Input id="finalEmail" type="email" value={email} disabled className="border-orange-200 bg-gray-50" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="familyId">पारिवारिक आईडी</Label>
                <Input
                  id="familyId"
                  type="text"
                  value={formData.familyId}
                  onChange={(e) => setFormData({ ...formData, familyId: e.target.value })}
                  placeholder="आपकी पारिवारिक आईडी दर्ज करें"
                  className="border-orange-200 focus:border-orange-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="memberName">सदस्य का नाम चुनें</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, memberName: value })}>
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
                <Label htmlFor="mobile">मोबाइल नंबर</Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  placeholder="आपका मोबाइल नंबर"
                  className="border-orange-200 focus:border-orange-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">पासवर्ड बनाएं</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="मजबूत पासवर्ड बनाएं"
                  className="border-orange-200 focus:border-orange-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">पासवर्ड की पुष्टि करें</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="पासवर्ड दोबारा दर्ज करें"
                  className="border-orange-200 focus:border-orange-400"
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700"
                disabled={
                  isLoading || !formData.password || !formData.mobile || formData.password !== formData.confirmPassword
                }
              >
                {isLoading ? "पंजीकरण हो रहा है..." : "पंजीकरण पूरा करें"}
              </Button>
              <div className="text-center text-sm text-gray-600">
                पहले से खाता है?{" "}
                <Link href="/login" className="text-orange-600 hover:text-orange-700 hover:underline">
                  लॉगिन करें
                </Link>
              </div>
            </CardFooter>
          </form>
        )}
      </Card>
    </div>
  )
}

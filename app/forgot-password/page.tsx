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
import { ArrowLeft, Mail, Shield, Key } from "lucide-react"
import { useForgotPasswordFlow } from "@/hooks/use-query-mutations"

export default function ForgotPasswordPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()

  const { sendForgotPasswordOtp, verifyOtpForgot, resetPassword } = useForgotPasswordFlow()

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    try {
      await sendForgotPasswordOtp.mutateAsync({ email })
      setCurrentStep(2)
    } catch (error) {
      // Error handled by the hook
    }
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!otp) return

    try {
      await verifyOtpForgot.mutateAsync({ email, otp })
      setCurrentStep(3)
    } catch (error) {
      // Error handled by the hook
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPassword || !confirmPassword) return

    if (newPassword !== confirmPassword) {
      alert("पासवर्ड मैच नहीं कर रहे")
      return
    }

    try {
      await resetPassword.mutateAsync({ email, newPassword })
      router.push("/login")
    } catch (error) {
      // Error handled by the hook
    }
  }

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Mail className="h-6 w-6 text-orange-600" />
      case 2:
        return <Shield className="h-6 w-6 text-orange-600" />
      case 3:
        return <Key className="h-6 w-6 text-orange-600" />
      default:
        return null
    }
  }

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1:
        return "ईमेल दर्ज करें"
      case 2:
        return "OTP सत्यापन"
      case 3:
        return "नया पासवर्ड सेट करें"
      default:
        return ""
    }
  }

  const getStepDescription = (step: number) => {
    switch (step) {
      case 1:
        return "अपना पंजीकृत ईमेल पता दर्ज करें"
      case 2:
        return "आपके ईमेल पर भेजा गया OTP दर्ज करें"
      case 3:
        return "अपना नया पासवर्ड सेट करें"
      default:
        return ""
    }
  }

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

          {/* Step indicator */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step === currentStep
                        ? "bg-orange-600 text-white"
                        : step < currentStep
                          ? "bg-green-600 text-white"
                          : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && <div className="w-8 h-0.5 bg-gray-200 mx-1" />}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-2">
            {getStepIcon(currentStep)}
            <CardTitle className="text-2xl font-bold text-orange-600 text-center">
              {getStepTitle(currentStep)}
            </CardTitle>
          </div>
          <CardDescription className="text-center">{getStepDescription(currentStep)}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Step 1: Email Input */}
          {currentStep === 1 && (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">ईमेल पता</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="आपका पंजीकृत ईमेल पता"
                  className="border-orange-200 focus:border-orange-400"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700"
                disabled={sendForgotPasswordOtp.isPending}
              >
                {sendForgotPasswordOtp.isPending ? "भेजा जा रहा है..." : "OTP भेजें"}
              </Button>
            </form>
          )}

          {/* Step 2: OTP Verification */}
          {currentStep === 2 && (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-display">ईमेल पता</Label>
                <Input
                  id="email-display"
                  type="email"
                  value={email}
                  disabled
                  className="border-orange-200 bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="otp">OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="6 अंकों का OTP दर्ज करें"
                  className="border-orange-200 focus:border-orange-400"
                  maxLength={6}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700"
                disabled={verifyOtpForgot.isPending}
              >
                {verifyOtpForgot.isPending ? "सत्यापित हो रहा है..." : "OTP सत्यापित करें"}
              </Button>
            </form>
          )}

          {/* Step 3: Reset Password */}
          {currentStep === 3 && (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-final">ईमेल पता</Label>
                <Input id="email-final" type="email" value={email} disabled className="border-orange-200 bg-gray-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">नया पासवर्ड</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="नया पासवर्ड दर्ज करें"
                  className="border-orange-200 focus:border-orange-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">पासवर्ड दोबारा दर्ज करें</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="पासवर्ड दोबारा दर्ज करें"
                  className="border-orange-200 focus:border-orange-400"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700"
                disabled={resetPassword.isPending}
              >
                {resetPassword.isPending ? "रीसेट हो रहा है..." : "पासवर्ड रीसेट करें"}
              </Button>
            </form>
          )}
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
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

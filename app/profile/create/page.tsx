"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Plus, User, Settings, LogOut } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { useMatrimonialProfile } from "@/hooks/use-query-mutations"
import { useSession, signOut } from "next-auth/react"

export default function CreateProfilePage() {
  const router = useRouter()
  const { data: session } = useSession()
  const { createProfile } = useMatrimonialProfile()

  const [formData, setFormData] = useState({
    aboutMe: "",
    height: 0,
    weight: 0,
    complexion: "",
    maritalStatus: "",
    occupation: "",
    income: 0,
    education: "",
    religion: "Hindu",
    caste: "",
    subCaste: "",
    motherTongue: "",
    age: 0,
    manglik: false,
    agePreferenceMin: 18,
    agePreferenceMax: 35,
    castePreference: "",
    locationPreference: "",
    dateOfBirth: "",
    district: "",
    familyOccupation: "",
    gender: "MALE" as "MALE" | "FEMALE",
    gotra: "",
    grandfatherName: "",
    hobbies: "",
    motherName: "",
    placeOfBirth: "",
    profileImageUrl: "",
    skinComplexion: "",
    socialLinks: "",
    timeOfBirth: "",
    wantsToJoinEvent: false,
  })

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!session?.user?.id) {
      return
    }

    const profileData = {
      ...formData,
      userId: session.user.id,
      createdByUserId: session.user.id,
      updatedByUserId: session.user.id,
      isProfileActive: true,
      isPhysicallyAble: true,
    }

    createProfile.mutate(profileData, {
      onSuccess: () => {
        router.push("/profiles")
      },
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <PageHeader
            title="नई प्रोफाइल बनाएं"
            description="अपनी मैट्रिमोनियल प्रोफाइल की जानकारी भरें"
            showBack={true}
            backHref="/profiles"
            showBreadcrumb={true}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form - Left Side */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Photo Upload */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600">फोटो अपलोड करें</CardTitle>
                  <CardDescription>अपनी स्पष्ट तस्वीरें अपलोड करें (अधिकतम 5 फोटो)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="aspect-square border-2 border-dashed border-orange-300 rounded-lg flex items-center justify-center hover:border-orange-400 cursor-pointer">
                      <div className="text-center">
                        <Upload className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                        <p className="text-sm text-orange-600">मुख्य फोटो</p>
                      </div>
                    </div>
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 cursor-pointer"
                      >
                        <Plus className="h-6 w-6 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600">व्यक्तिगत जानकारी</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">आयु *</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="आपकी आयु"
                        value={formData.age || ""}
                        onChange={(e) => handleInputChange("age", Number.parseInt(e.target.value) || 0)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">ऊंचाई (cm) *</Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="सेंटीमीटर में"
                        value={formData.height || ""}
                        onChange={(e) => handleInputChange("height", Number.parseFloat(e.target.value) || 0)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">वजन (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="किग्रा में"
                        value={formData.weight || ""}
                        onChange={(e) => handleInputChange("weight", Number.parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="gender">लिंग *</Label>
                      <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="लिंग चुनें" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="MALE">पुरुष</SelectItem>
                          <SelectItem value="FEMALE">महिला</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maritalStatus">वैवाहिक स्थिति *</Label>
                      <Select
                        value={formData.maritalStatus}
                        onValueChange={(value) => handleInputChange("maritalStatus", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="स्थिति चुनें" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Single">अविवाहित</SelectItem>
                          <SelectItem value="Divorced">तलाकशुदा</SelectItem>
                          <SelectItem value="Widowed">विधवा/विधुर</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="complexion">रंग</Label>
                      <Select
                        value={formData.complexion}
                        onValueChange={(value) => handleInputChange("complexion", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="रंग चुनें" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Fair">गोरा</SelectItem>
                          <SelectItem value="Wheatish">गेहुंआ</SelectItem>
                          <SelectItem value="Dark">सांवला</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherTongue">मातृभाषा</Label>
                      <Input
                        id="motherTongue"
                        placeholder="आपकी मातृभाषा"
                        value={formData.motherTongue}
                        onChange={(e) => handleInputChange("motherTongue", e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education & Career */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600">शिक्षा और करियर</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="education">शिक्षा *</Label>
                      <Input
                        id="education"
                        placeholder="आपकी शिक्षा"
                        value={formData.education}
                        onChange={(e) => handleInputChange("education", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="occupation">पेशा *</Label>
                      <Input
                        id="occupation"
                        placeholder="आपका पेशा"
                        value={formData.occupation}
                        onChange={(e) => handleInputChange("occupation", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="income">वार्षिक आय</Label>
                      <Input
                        id="income"
                        type="number"
                        placeholder="वार्षिक आय"
                        value={formData.income || ""}
                        onChange={(e) => handleInputChange("income", Number.parseInt(e.target.value) || 0)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="familyOccupation">पारिवारिक व्यवसाय</Label>
                      <Input
                        id="familyOccupation"
                        placeholder="पारिवारिक व्यवसाय"
                        value={formData.familyOccupation}
                        onChange={(e) => handleInputChange("familyOccupation", e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* About Me */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600">मेरे बारे में</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="aboutMe">अपने बारे में लिखें *</Label>
                    <Textarea
                      id="aboutMe"
                      placeholder="अपने बारे में, अपनी रुचियों और जीवनसाथी की अपेक्षाओं के बारे में लिखें..."
                      rows={4}
                      value={formData.aboutMe}
                      onChange={(e) => handleInputChange("aboutMe", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hobbies">शौक</Label>
                    <Input
                      id="hobbies"
                      placeholder="आपके शौक (कॉमा से अलग करें)"
                      value={formData.hobbies}
                      onChange={(e) => handleInputChange("hobbies", e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex justify-end gap-4">
                <Button variant="outline" type="button">
                  ड्राफ्ट में सेव करें
                </Button>
                <Button type="submit" className="bg-orange-600 hover:bg-orange-700" disabled={createProfile.isPending}>
                  {createProfile.isPending ? "प्रोफाइल बनाई जा रही है..." : "प्रोफाइल बनाएं"}
                </Button>
              </div>
            </form>
          </div>

          {/* Profile Section - Right Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* User Profile Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-orange-600">आपकी प्रोफाइल</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{session?.user?.name || "उपयोगकर्ता"}</h3>
                      <p className="text-sm text-gray-600">{session?.user?.email}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                      onClick={() => router.push("/profile/settings")}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      प्रोफाइल संपादित करें
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full justify-start text-red-600 hover:text-red-700 bg-transparent"
                      onClick={() => signOut({ callbackUrl: "/login" })}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      लॉग आउट
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-orange-600">त्वरित जानकारी</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">सदस्यता प्रकार:</span>
                    <span className="text-sm font-medium">
                      {session?.user?.memberType === "14-chokhra" ? "14 चोखरा" : "अन्य"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">प्रोफाइल स्थिति:</span>
                    <span className="text-sm font-medium text-orange-600">नई</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

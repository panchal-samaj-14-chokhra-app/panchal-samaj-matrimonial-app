import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Plus } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "नई प्रोफाइल बनाएं - पंचाल समाज 14 चोखरा मैट्रिमोनियल",
  description: "अपनी मैट्रिमोनियल प्रोफाइल बनाएं",
}

export default function CreateProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <PageHeader
            title="नई प्रोफाइल बनाएं"
            description="अपनी मैट्रिमोनियल प्रोफाइल की जानकारी भरें"
            showBack={true}
            backHref="/profiles"
            showBreadcrumb={true}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <form className="space-y-8">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">नाम *</Label>
                  <Input id="firstName" placeholder="आपका नाम" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">उपनाम *</Label>
                  <Input id="lastName" placeholder="आपका उपनाम" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">आयु *</Label>
                  <Input id="age" type="number" placeholder="आपकी आयु" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">ऊंचाई *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="ऊंचाई चुनें" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-0">5'0"</SelectItem>
                      <SelectItem value="5-1">5'1"</SelectItem>
                      <SelectItem value="5-2">5'2"</SelectItem>
                      <SelectItem value="5-3">5'3"</SelectItem>
                      <SelectItem value="5-4">5'4"</SelectItem>
                      <SelectItem value="5-5">5'5"</SelectItem>
                      <SelectItem value="5-6">5'6"</SelectItem>
                      <SelectItem value="5-7">5'7"</SelectItem>
                      <SelectItem value="5-8">5'8"</SelectItem>
                      <SelectItem value="5-9">5'9"</SelectItem>
                      <SelectItem value="5-10">5'10"</SelectItem>
                      <SelectItem value="5-11">5'11"</SelectItem>
                      <SelectItem value="6-0">6'0"</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">वजन</Label>
                  <Input id="weight" placeholder="किग्रा में" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="complexion">रंग</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="रंग चुनें" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fair">गोरा</SelectItem>
                      <SelectItem value="wheatish">गेहुंआ</SelectItem>
                      <SelectItem value="dark">सांवला</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maritalStatus">वैवाहिक स्थिति *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="स्थिति चुनें" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">अविवाहित</SelectItem>
                      <SelectItem value="divorced">तलाकशुदा</SelectItem>
                      <SelectItem value="widowed">विधवा/विधुर</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-orange-600">स्थान की जानकारी</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">शहर *</Label>
                  <Input id="city" placeholder="आपका शहर" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">राज्य *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="राज्य चुनें" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gujarat">गुजरात</SelectItem>
                      <SelectItem value="maharashtra">महाराष्ट्र</SelectItem>
                      <SelectItem value="rajasthan">राजस्थान</SelectItem>
                      <SelectItem value="madhya-pradesh">मध्य प्रदेश</SelectItem>
                    </SelectContent>
                  </Select>
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
                  <Input id="education" placeholder="आपकी शिक्षा" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="profession">पेशा *</Label>
                  <Input id="profession" placeholder="आपका पेशा" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">कंपनी/संस्था</Label>
                  <Input id="company" placeholder="कंपनी का नाम" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">वार्षिक आय</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="आय सीमा चुनें" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2-5">₹2-5 लाख</SelectItem>
                      <SelectItem value="5-8">₹5-8 लाख</SelectItem>
                      <SelectItem value="8-12">₹8-12 लाख</SelectItem>
                      <SelectItem value="12-20">₹12-20 लाख</SelectItem>
                      <SelectItem value="20+">₹20+ लाख</SelectItem>
                    </SelectContent>
                  </Select>
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
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hobbies">शौक</Label>
                <Input id="hobbies" placeholder="आपके शौक (कॉमा से अलग करें)" />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <Button variant="outline" type="button">
              ड्राफ्ट में सेव करें
            </Button>
            <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
              प्रोफाइल बनाएं
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

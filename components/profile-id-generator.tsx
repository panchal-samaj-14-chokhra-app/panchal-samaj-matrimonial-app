"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { generateProfileId, generateProfileIdBatch, validateProfileId } from "@/lib/profile-id"
import { ProfileIdBadge } from "./profile-id-badge"
import { RefreshCw, Copy, Download } from "lucide-react"

export function ProfileIdGenerator() {
  const [singleId, setSingleId] = useState<string>("")
  const [batchIds, setBatchIds] = useState<string[]>([])
  const [batchCount, setBatchCount] = useState<number>(10)
  const [customPrefix, setCustomPrefix] = useState<string>("PS")
  const [customYear, setCustomYear] = useState<number>(new Date().getFullYear())

  const generateSingle = () => {
    const newId = generateProfileId({
      prefix: customPrefix,
      year: customYear,
    })
    setSingleId(newId)
  }

  const generateBatch = () => {
    const newIds = generateProfileIdBatch(batchCount, {
      prefix: customPrefix,
      year: customYear,
    })
    setBatchIds(newIds)
  }

  const copyAllIds = async () => {
    const allIds = batchIds.join("\n")
    try {
      await navigator.clipboard.writeText(allIds)
    } catch (err) {
      console.error("Failed to copy IDs:", err)
    }
  }

  const downloadIds = () => {
    const allIds = batchIds.join("\n")
    const blob = new Blob([allIds], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `profile-ids-${new Date().toISOString().split("T")[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-orange-600">प्रोफाइल ID जेनरेटर कॉन्फ़िगरेशन</CardTitle>
          <CardDescription>ID जेनरेशन के लिए सेटिंग्स</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="prefix">प्रीफिक्स</Label>
              <Input
                id="prefix"
                value={customPrefix}
                onChange={(e) => setCustomPrefix(e.target.value.toUpperCase())}
                placeholder="PS"
                maxLength={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="year">वर्ष</Label>
              <Input
                id="year"
                type="number"
                value={customYear}
                onChange={(e) => setCustomYear(Number.parseInt(e.target.value) || new Date().getFullYear())}
                min={2020}
                max={2030}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="batchCount">बैच साइज़</Label>
              <Input
                id="batchCount"
                type="number"
                value={batchCount}
                onChange={(e) => setBatchCount(Number.parseInt(e.target.value) || 10)}
                min={1}
                max={100}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Single ID Generation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-orange-600">सिंगल ID जेनरेट करें</CardTitle>
          <CardDescription>एक unique profile ID बनाएं</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={generateSingle} className="bg-orange-600 hover:bg-orange-700">
            <RefreshCw className="h-4 w-4 mr-2" />
            नई ID जेनरेट करें
          </Button>
          {singleId && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <Label className="text-sm font-medium text-gray-700">जेनरेटेड ID:</Label>
              <div className="mt-2">
                <ProfileIdBadge profileId={singleId} showCopy showYear size="lg" />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Batch ID Generation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-orange-600">बैच ID जेनरेट करें</CardTitle>
          <CardDescription>एक साथ कई unique profile IDs बनाएं</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button onClick={generateBatch} className="bg-orange-600 hover:bg-orange-700">
              <RefreshCw className="h-4 w-4 mr-2" />
              {batchCount} IDs जेनरेट करें
            </Button>
            {batchIds.length > 0 && (
              <>
                <Button variant="outline" onClick={copyAllIds} className="bg-transparent">
                  <Copy className="h-4 w-4 mr-2" />
                  सभी कॉपी करें
                </Button>
                <Button variant="outline" onClick={downloadIds} className="bg-transparent">
                  <Download className="h-4 w-4 mr-2" />
                  डाउनलोड करें
                </Button>
              </>
            )}
          </div>

          {batchIds.length > 0 && (
            <div className="space-y-4">
              <Separator />
              <div>
                <Label className="text-sm font-medium text-gray-700">जेनरेटेड IDs ({batchIds.length}):</Label>
                <div className="mt-3 max-h-60 overflow-y-auto">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {batchIds.map((id, index) => (
                      <ProfileIdBadge key={index} profileId={id} showCopy size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* ID Validation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-orange-600">ID वैलिडेशन</CardTitle>
          <CardDescription>किसी भी profile ID को validate करें</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="validateId">Profile ID दर्ज करें</Label>
            <Input
              id="validateId"
              placeholder="PS25101"
              onChange={(e) => {
                const value = e.target.value
                if (value) {
                  const isValid = validateProfileId(value)
                  e.target.className = `${e.target.className.replace(/(border-red-300|border-green-300)/g, "")} ${
                    isValid ? "border-green-300" : "border-red-300"
                  }`
                }
              }}
            />
          </div>
          <div className="text-sm text-gray-600">
            <p>
              <strong>फॉर्मेट:</strong> PS + वर्ष के अंतिम 2 अंक + 3-4 अंकों का unique number
            </p>
            <p>
              <strong>उदाहरण:</strong> PS25101, PS252000, PS259999
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

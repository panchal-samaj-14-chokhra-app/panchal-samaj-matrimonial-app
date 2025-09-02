import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProfileIdGenerator } from "@/components/profile-id-generator"
import { ArrowLeft, Settings, Database, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "प्रोफाइल ID प्रबंधन - पंचाल समाज 14 चोखरा मैट्रिमोनियल",
  description: "प्रोफाइल IDs को प्रबंधित कर���ं",
}

// Sample statistics
const stats = {
  totalIds: 1247,
  currentYearIds: 156,
  availableRange: "2000-9999",
  lastGenerated: "PS25156",
}

export default function ProfileIdManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/admin">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                एडमिन डैशबोर्ड
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-orange-600">प्रोफाइल ID प्रबंधन</h1>
              <p className="text-gray-600">Unique profile IDs को generate और manage करें</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Statistics */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-orange-600 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  आंकड़े
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{stats.totalIds}</div>
                  <div className="text-sm text-orange-700">कुल IDs</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{stats.currentYearIds}</div>
                  <div className="text-sm text-green-700">इस वर्ष</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm font-medium text-blue-800">उपलब्ध रेंज</div>
                  <div className="text-lg font-bold text-blue-600">{stats.availableRange}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium text-gray-700">अंतिम जेनरेटेड</div>
                  <div className="text-lg font-bold text-gray-900">{stats.lastGenerated}</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-orange-600 flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  सिस्टम सेटिंग्स
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Database className="h-4 w-4 mr-2" />
                  ID रेंज सेट करें
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Settings className="h-4 w-4 mr-2" />
                  प्रीफिक्स बदलें
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - ID Generator */}
          <div className="lg:col-span-3">
            <ProfileIdGenerator />
          </div>
        </div>
      </div>
    </div>
  )
}

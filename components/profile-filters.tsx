"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X, SlidersHorizontal } from "lucide-react"
import { useState } from "react"

interface ProfileFiltersProps {
  onFilterChange?: (filters: any) => void
  totalProfiles?: number
  activeFilters?: string[]
}

export function ProfileFilters({ onFilterChange, totalProfiles = 0, activeFilters = [] }: ProfileFiltersProps) {
  const [showAdvanced, setShowAdvanced] = useState(false)

  return (
    <Card className="mb-6">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-orange-600 flex items-center gap-2">
            <Filter className="h-5 w-5" />
            खोजें और फिल्टर करें
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">{totalProfiles} प्रोफाइल्स मिलीं</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="bg-transparent"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {showAdvanced ? "कम फिल्टर" : "अधिक फिल्टर"}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-gray-600">सक्रिय फिल्टर:</span>
            {activeFilters.map((filter, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-1">
                {filter}
                <X className="h-3 w-3 cursor-pointer" />
              </Badge>
            ))}
            <Button variant="ghost" size="sm" className="h-6 text-xs text-orange-600">
              सभी साफ़ करें
            </Button>
          </div>
        )}

        {/* Basic Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="नाम से खोजें..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="आयु सीमा" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="18-25">18-25 वर्ष</SelectItem>
              <SelectItem value="26-30">26-30 वर्ष</SelectItem>
              <SelectItem value="31-35">31-35 वर्ष</SelectItem>
              <SelectItem value="36-40">36-40 वर्ष</SelectItem>
              <SelectItem value="40+">40+ वर्ष</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="स्थान" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ahmedabad">अहमदाबाद</SelectItem>
              <SelectItem value="surat">सूरत</SelectItem>
              <SelectItem value="rajkot">राजकोट</SelectItem>
              <SelectItem value="vadodara">वडोदरा</SelectItem>
              <SelectItem value="gandhinagar">गांधीनगर</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="शिक्षा" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="graduate">स्नातक</SelectItem>
              <SelectItem value="postgraduate">स्नातकोत्तर</SelectItem>
              <SelectItem value="professional">व्यावसायिक</SelectItem>
              <SelectItem value="doctorate">डॉक्टरेट</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Advanced Filters */}
        {showAdvanced && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="पेशा" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineer">इंजीनियर</SelectItem>
                <SelectItem value="doctor">डॉक्टर</SelectItem>
                <SelectItem value="teacher">शिक्षक</SelectItem>
                <SelectItem value="business">व्यापारी</SelectItem>
                <SelectItem value="government">सरकारी नौकरी</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="वेतन सीमा" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2-5">₹2-5 लाख</SelectItem>
                <SelectItem value="5-8">₹5-8 लाख</SelectItem>
                <SelectItem value="8-12">₹8-12 लाख</SelectItem>
                <SelectItem value="12-20">₹12-20 लाख</SelectItem>
                <SelectItem value="20+">₹20+ लाख</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="ऊंचाई" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5-0-5-4">5'0" - 5'4"</SelectItem>
                <SelectItem value="5-4-5-8">5'4" - 5'8"</SelectItem>
                <SelectItem value="5-8-6-0">5'8" - 6'0"</SelectItem>
                <SelectItem value="6-0+">6'0"+</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="वैवाहिक स्थिति" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">अविवाहित</SelectItem>
                <SelectItem value="divorced">तलाकशुदा</SelectItem>
                <SelectItem value="widowed">विधवा/विधुर</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="सत्यापन स्थिति" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="verified">सत्यापित</SelectItem>
                <SelectItem value="unverified">असत्यापित</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="अंतिम सक्रिय" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">आज</SelectItem>
                <SelectItem value="week">इस सप्ताह</SelectItem>
                <SelectItem value="month">इस महीने</SelectItem>
                <SelectItem value="3months">3 महीने में</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Search className="h-4 w-4 mr-2" />
            खोजें
          </Button>
          <Button variant="outline" className="bg-transparent">
            फिल्टर साफ़ करें
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

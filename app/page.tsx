import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Calendar, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image src="/logo.png" alt="पंचाल समाज लोगो" width={120} height={120} className="rounded-full shadow-lg" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">पंचाल समाज मैट्रिमोनियल</h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              पारंपरिक मूल्यों के साथ आधुनिक विवाह सेवाएं। हमारे समुदाय के लिए विश्वसनीय और सुरक्षित मैट्रिमोनियल प्लेटफॉर्म।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Heart className="mr-2 h-5 w-5" />
                प्रोफाइल बनाएं
              </Button>
              <Button size="lg" variant="outline">
                <Users className="mr-2 h-5 w-5" />
                प्रोफाइल खोजें
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">हमारी सेवाएं</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              पंचाल समाज के सदस्यों के लिए विशेष रूप से डिज़ाइन की गई मैट्रिमोनियल सेवाएं
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>विवाह सेवाएं</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>पारंपरिक और आधुनिक विवाह सेवाएं, जो हमारे समुदाय की आवश्यकताओं के अनुकूल हैं।</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>समुदायिक नेटवर्क</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>पंचाल समाज के विश्वसनीय सदस्यों का व्यापक नेटवर्क और सामुदायिक सहयोग।</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>विशेष कार्यक्रम</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>मैट्रिमोनियल मीट-अप, सामुदायिक समारोह और विवाह संबंधी कार्यक्रम।</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-orange-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">आज ही शुरू करें अपनी खुशियों की तलाश</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            हमारे साथ जुड़ें और पाएं अपने जीवनसाथी की तलाश में विश्वसनीय सहायता
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <Button size="lg" variant="outline">
                हमारे बारे में जानें
              </Button>
            </Link>
            <Link href="/events">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Calendar className="mr-2 h-5 w-5" />
                आगामी कार्यक्रम देखें
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image src="/logo.png" alt="पंचाल समाज लोगो" width={60} height={60} className="rounded-full" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">पंचाल समाज मैट्रिमोनियल</h3>
            <p className="text-muted-foreground mb-4">पारंपरिक मूल्यों के साथ आधुनिक विवाह सेवाएं</p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="sm">
                <Phone className="mr-2 h-4 w-4" />
                संपर्क करें
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-muted-foreground">© 2025 पंचाल समाज मैट्रिमोनियल। सभी अधिकार सुरक्षित।</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

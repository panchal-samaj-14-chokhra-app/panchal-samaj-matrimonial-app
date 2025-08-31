import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Shield, Star, Award, Handshake } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image src="/logo.png" alt="पंचाल समाज लोगो" width={100} height={100} className="rounded-full shadow-lg" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">पंचाल समाज के बारे में</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              हमारी समृद्ध परंपरा, मूल्य और आधुनिक मैट्रिमोनियल सेवाओं के बारे में जानें
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">पंचाल समाज की विरासत</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-center mb-8 text-lg leading-relaxed">
                  पंचाल समाज एक प्राचीन और गौरवशाली समुदाय है जो अपनी समृद्ध सांस्कृतिक परंपराओं और मूल्यों के लिए प्रसिद्ध है। हमारा
                  समुदाय सदियों से शिल्पकला, व्यापार और सामाजिक सेवा में अग्रणी रहा है।
                </p>
                <p className="text-center mb-8 text-lg leading-relaxed">
                  आज के आधुनिक युग में, हम अपनी पारंपरिक मूल्यों को बनाए रखते हुए नई पीढ़ी के लिए विश्वसनीय मैट्रिमोनियल सेवाएं प्रदान कर
                  रहे हैं।
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">हमारे मूल्य</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>पारंपरिक मूल्य</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    हमारी संस्कृति और परंपराओं का सम्मान करते हुए विवाह संस्कार को पवित्र मानना
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>विश्वसनीयता</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    सभी सदस्यों की जानकारी की सुरक्षा और प्रामाणिकता सुनिश्चित करना
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>सामुदायिक एकता</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    समुदाय के सभी सदस्यों के बीच मजबूत रिश्ते और सहयोग को बढ़ावा देना
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>गुणवत्ता</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    उच्च गुणवत्ता की सेवाएं और व्यक्तिगत देखभाल प्रदान करना
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>सम्मान</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">हर व्यक्ति की गरिमा और निजता का सम्मान करना</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>सहयोग</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    परिवारों के बीच मैत्रीपूर्ण संबंध स्थापित करने में सहायता करना
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">हमारी मैट्रिमोनियल सेवाएं</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">व्यक्तिगत सहायता</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Badge variant="secondary" className="mt-1">
                      ✓
                    </Badge>
                    <p className="text-muted-foreground">अनुभवी सलाहकारों द्वारा व्यक्तिगत मार्गदर्शन</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="secondary" className="mt-1">
                      ✓
                    </Badge>
                    <p className="text-muted-foreground">प्रोफाइल मैचिंग और सुझाव</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="secondary" className="mt-1">
                      ✓
                    </Badge>
                    <p className="text-muted-foreground">पारिवारिक पृष्ठभूमि की जांच</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">सामुदायिक कार्यक्रम</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Badge variant="secondary" className="mt-1">
                      ✓
                    </Badge>
                    <p className="text-muted-foreground">मैट्रिमोनियल मीट-अप और समारोह</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="secondary" className="mt-1">
                      ✓
                    </Badge>
                    <p className="text-muted-foreground">पारिवारिक मिलन कार्यक्रम</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="secondary" className="mt-1">
                      ✓
                    </Badge>
                    <p className="text-muted-foreground">सांस्कृतिक और धार्मिक समारोह</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">डिजिटल प्लेटफॉर्म</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Badge variant="secondary" className="mt-1">
                      ✓
                    </Badge>
                    <p className="text-muted-foreground">सुरक्षित ऑनलाइन प्रोफाइल सिस्टम</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="secondary" className="mt-1">
                      ✓
                    </Badge>
                    <p className="text-muted-foreground">मोबाइल-फ्रेंडली इंटरफेस</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="secondary" className="mt-1">
                      ✓
                    </Badge>
                    <p className="text-muted-foreground">प्राइवेसी और डेटा सुरक्षा</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">विशेष सुविधाएं</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Badge variant="secondary" className="mt-1">
                      ✓
                    </Badge>
                    <p className="text-muted-foreground">ज्योतिषीय सलाह और गुण मिलान</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="secondary" className="mt-1">
                      ✓
                    </Badge>
                    <p className="text-muted-foreground">विवाह नियोजन सहायता</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="secondary" className="mt-1">
                      ✓
                    </Badge>
                    <p className="text-muted-foreground">पारिवारिक परामर्श सेवाएं</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-r from-primary/5 to-orange-50 rounded-2xl p-8 sm:p-12">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">हमारा मिशन</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                पंचाल समाज मैट्रिमोनियल का मिशन है हमारे समुदाय के युवाओं को उनके आदर्श जीवनसाथी खोजने में सहायता करना। हम पारंपरिक
                मूल्यों ��र आधुनिक तकनीक का संयोजन करके एक विश्वसनीय और सुरक्षित मंच प्रदान करते हैं।
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                हमारा लक्ष्य है कि हर विवाह खुशहाल, स्थायी और समुदाय की मजबूती में योगदान देने वाला हो। हम न केवल रिश्ते जोड़ते हैं बल्कि
                परिवारों के बीच स्थायी बंधन भी बनाते हैं।
              </p>
            </div>
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
            <p className="text-muted-foreground">पारंपरिक मूल्यों के साथ आधुनिक विवाह सेवाएं</p>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-muted-foreground">© 2025 पंचाल समाज मैट्रिमोनियल। सभी अधिकार सुरक्षित।</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

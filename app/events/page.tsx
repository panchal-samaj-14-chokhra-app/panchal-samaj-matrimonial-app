import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Phone, Mail, Heart, Star } from "lucide-react"
import Image from "next/image"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "पंचाल समाज मैट्रिमोनियल मीट-अप",
      date: "15 फरवरी 2025",
      time: "शाम 6:00 बजे",
      location: "कम्युनिटी हॉल, राजकोट",
      description: "युवाओं और उनके परिवारों के लिए विशेष मिलन समारोह",
      attendees: "50+ परिवार",
      type: "मुख्य कार्यक्रम",
      status: "पंजीकरण खुला",
    },
    {
      id: 2,
      title: "सांस्कृतिक संध्या एवं परिचय समारोह",
      date: "28 फरवरी 2025",
      time: "दोपहर 4:00 बजे",
      location: "धर्मशाला, अहमदाबाद",
      description: "पारंपरिक कार्यक्रम के साथ पारिवारिक मिलन",
      attendees: "75+ परिवार",
      type: "सांस्कृतिक",
      status: "जल्द आरंभ",
    },
    {
      id: 3,
      title: "युवा संवाद एवं मार्गदर्शन सभा",
      date: "10 मार्च 2025",
      time: "सुबह 10:00 बजे",
      location: "सभागार, सूरत",
      description: "विवाह पूर्व परामर्श और जीवनसाथी चयन पर चर्चा",
      attendees: "30+ युवा",
      type: "शैक्षणिक",
      status: "पंजीकरण खुला",
    },
  ]

  const pastEvents = [
    {
      id: 1,
      title: "नव वर्ष मिलन समारोह 2025",
      date: "जनवरी 2025",
      description: "सफल मैट्रिमोनियल मीट-अप जिसमें 12 जोड़ों का परिचय हुआ",
      highlight: "12 सफल मैच",
      attendees: "80+ परिवार",
    },
    {
      id: 2,
      title: "दिवाली मिलन उत्सव",
      date: "नवंबर 2024",
      description: "पारंपरिक समारोह के साथ पारिवारिक मिलन",
      highlight: "8 सफल मैच",
      attendees: "65+ परिवार",
    },
    {
      id: 3,
      title: "गणेश उत्सव मैट्रिमोनियल",
      date: "सितंबर 2024",
      description: "धार्मिक उत्सव के साथ विशेष मिलन कार्यक्रम",
      highlight: "15 सफल मैच",
      attendees: "90+ परिवार",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Calendar className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">मैट्रिमोनियल कार्यक्रम</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              पंचाल समाज के विशेष मैट्रिमोनियल कार्यक्रम, मिलन समारोह और सामुदायिक उत्सव
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">आगामी कार्यक्रम</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              हमारे आगामी मैट्रिमोनियल कार्यक्रमों में भाग लें और अपने आदर्श जीवनसाथी से मिलें
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={event.status === "पंजीकरण खुला" ? "default" : "secondary"} className="mb-2">
                      {event.status}
                    </Badge>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="text-base">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Users className="h-5 w-5 text-primary" />
                    <span>{event.attendees}</span>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-primary hover:bg-primary/90">पंजीकरण करें</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">पिछले कार्यक्रम</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              हमारे सफल मैट्रिमोनियल कार्यक्रमों की झलकियां और उपलब्धियां
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{event.date}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-primary fill-current" />
                      <span className="text-sm font-medium text-primary">{event.highlight}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="text-base">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{event.attendees}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">सफल</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">कार्यक्रम के प्रकार</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              विभिन्न प्रकार के मैट्रिमोनियल कार्यक्रम जो हम आयोजित करते हैं
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>मिलन समारोह</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>परिवारों के बीच औपचारिक परिचय और मिलन के लिए विशेष कार्यक्रम</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>सांस्कृतिक उत्सव</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>त्योहारों और विशेष अवसरों पर आयोजित मैट्रिमोनियल कार्यक्रम</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>युवा संवाद</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>युवाओं के लिए विशेष चर्चा और मार्गदर्शन सत्र</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>विशेष समारोह</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>सगाई, विवाह और अन्य पारिवारिक समारोहों का आयोजन</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-orange-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">कार्यक्रम में भाग लेना चाहते हैं?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            हमारे आगामी कार्यक्रमों की जानकारी के लिए संपर्क करें या पंजीकरण कराएं
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Phone className="mr-2 h-5 w-5" />
              फोन करें
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="mr-2 h-5 w-5" />
              ईमेल भेजें
            </Button>
          </div>
          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-foreground mb-2">संपर्क जानकारी</h3>
            <p className="text-muted-foreground">
              कार्यक्रम संयोजक: श्री राजेश पंचाल
              <br />
              फोन: +91 98765 43210
              <br />
              ईमेल: events@panchalsamaj.org
            </p>
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

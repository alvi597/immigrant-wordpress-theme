"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Star, Heart, Shield, Clock, Filter, CheckCircle, Camera, Globe } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [serviceType, setServiceType] = useState("all")
  const [location, setLocation] = useState("all")

  const router = useRouter()

  const petSitters = [
    {
      name: "Maria Santos",
      rating: 4.9,
      reviews: 127,
      price: "$25/day",
      location: "Downtown Toronto",
      avatar: "/placeholder.svg?height=64&width=64",
      verified: true,
      languages: ["English", "Spanish", "Portuguese"],
      experience: "3 years",
      specialties: ["Dogs", "Cats", "Small Animals"],
      availability: "Available this week",
    },
    {
      name: "Ahmed Hassan",
      rating: 4.8,
      reviews: 89,
      price: "$30/day",
      location: "North York",
      avatar: "/placeholder.svg?height=64&width=64",
      verified: true,
      languages: ["English", "Arabic"],
      experience: "2 years",
      specialties: ["Dogs", "Cats"],
      availability: "Available next week",
    },
    {
      name: "Lisa Chen",
      rating: 4.9,
      reviews: 156,
      price: "$28/day",
      location: "Scarborough",
      avatar: "/placeholder.svg?height=64&width=64",
      verified: true,
      languages: ["English", "Mandarin"],
      experience: "4 years",
      specialties: ["Dogs", "Cats", "Birds"],
      availability: "Available today",
    },
  ]

  const tourGuides = [
    {
      name: "Carlos Rodriguez",
      rating: 4.9,
      reviews: 234,
      price: "$75/tour",
      location: "Toronto",
      avatar: "/placeholder.svg?height=64&width=64",
      verified: true,
      languages: ["English", "Spanish", "French"],
      experience: "5 years",
      specialties: ["Cultural Tours", "Food Tours", "Historical Sites"],
      tourTypes: ["Walking", "Driving", "Public Transit"],
    },
    {
      name: "Priya Patel",
      rating: 4.8,
      reviews: 178,
      price: "$65/tour",
      location: "Vancouver",
      avatar: "/placeholder.svg?height=64&width=64",
      verified: true,
      languages: ["English", "Hindi", "Gujarati"],
      experience: "3 years",
      specialties: ["Nature Tours", "City Highlights", "Shopping Districts"],
      tourTypes: ["Walking", "Cycling"],
    },
    {
      name: "Jean-Pierre Dubois",
      rating: 4.7,
      reviews: 145,
      price: "$80/tour",
      location: "Montreal",
      avatar: "/placeholder.svg?height=64&width=64",
      verified: true,
      languages: ["English", "French"],
      experience: "6 years",
      specialties: ["Historical Tours", "Architecture", "Local Culture"],
      tourTypes: ["Walking", "Driving"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Immigrant Knowhow</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/forums" className="text-gray-600 hover:text-blue-600">
              Forums
            </Link>
            <Link href="/experts" className="text-gray-600 hover:text-blue-600">
              Experts
            </Link>
            <Link href="/marketplace" className="text-blue-600 font-medium">
              Services
            </Link>
            <Link href="/stories" className="text-gray-600 hover:text-blue-600">
              Stories
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={() => router.push("/marketplace/apply")}>
              Become a Provider
            </Button>
            <Button onClick={() => router.push("/auth/login")}>Sign In</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Trusted Marketplace</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find reliable pet sitting and guided tour services from verified community members in your area
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search by location or service..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Service Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                <SelectItem value="pet-sitting">Pet Sitting</SelectItem>
                <SelectItem value="tours">Guided Tours</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="toronto">Toronto</SelectItem>
                <SelectItem value="vancouver">Vancouver</SelectItem>
                <SelectItem value="montreal">Montreal</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="space-y-12">
          {/* Pet Sitting Services */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2 flex items-center">
                  <Heart className="h-6 w-6 mr-2 text-pink-600" />
                  Pet Sitting Services
                </h2>
                <p className="text-gray-600">Trusted, background-verified pet sitters in your neighborhood</p>
              </div>
              <Button variant="outline" onClick={() => router.push("/marketplace?filter=pet-sitting")}>
                View All Pet Sitters
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {petSitters.map((sitter, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={sitter.avatar || "/placeholder.svg"} alt={sitter.name} />
                        <AvatarFallback>
                          {sitter.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold">{sitter.name}</h3>
                          {sitter.verified && <CheckCircle className="h-4 w-4 text-blue-600" />}
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{sitter.rating}</span>
                          <span className="text-sm text-gray-500">({sitter.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {sitter.location}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Experience:</span>
                        <span className="text-sm font-medium">{sitter.experience}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Languages:</span>
                        <span className="text-sm">{sitter.languages.join(", ")}</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600 block mb-1">Specialties:</span>
                        <div className="flex flex-wrap gap-1">
                          {sitter.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-green-600">{sitter.availability}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-blue-600">Background Verified</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">{sitter.price}</span>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => router.push(`/messages/new?provider=${sitter.name}`)}
                        >
                          Message
                        </Button>
                        <Button
                          size="sm"
                          onClick={() =>
                            router.push(`/marketplace/book/${sitter.name.toLowerCase().replace(/\s+/g, "-")}`)
                          }
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Guided Tours */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2 flex items-center">
                  <Camera className="h-6 w-6 mr-2 text-blue-600" />
                  Guided Tours
                </h2>
                <p className="text-gray-600">Discover your new city with local experts and cultural guides</p>
              </div>
              <Button variant="outline">View All Tours</Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {tourGuides.map((guide, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={guide.avatar || "/placeholder.svg"} alt={guide.name} />
                        <AvatarFallback>
                          {guide.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold">{guide.name}</h3>
                          {guide.verified && <CheckCircle className="h-4 w-4 text-blue-600" />}
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{guide.rating}</span>
                          <span className="text-sm text-gray-500">({guide.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {guide.location}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Experience:</span>
                        <span className="text-sm font-medium">{guide.experience}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Languages:</span>
                        <span className="text-sm">{guide.languages.join(", ")}</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600 block mb-1">Tour Types:</span>
                        <div className="flex flex-wrap gap-1">
                          {guide.tourTypes.map((type, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600 block mb-1">Specialties:</span>
                        <div className="flex flex-wrap gap-1">
                          {guide.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-blue-600">Cultural Expert</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-green-600">Verified Guide</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">{guide.price}</span>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Tours
                        </Button>
                        <Button size="sm">Book Tour</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Business Partners */}
          <section className="bg-white rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Trusted Business Partners</h2>
              <p className="text-gray-600">Professional services from verified business partners</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-blue-100">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Cultural Discovery Tours</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Specialized tours in 15+ languages covering cultural landmarks and local experiences
                  </p>
                  <Badge variant="secondary" className="mb-4">
                    Premium Partner
                  </Badge>
                  <Button variant="outline" className="w-full">
                    View Tours
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">PetCare Plus</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Professional pet care services with 24/7 support and emergency veterinary partnerships
                  </p>
                  <Badge variant="secondary" className="mb-4">
                    Premium Partner
                  </Badge>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-100">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Global Connect Services</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Comprehensive relocation support including housing, utilities, and local orientation
                  </p>
                  <Badge variant="secondary" className="mb-4">
                    Premium Partner
                  </Badge>
                  <Button variant="outline" className="w-full">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How It Works */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-center mb-8">How Our Marketplace Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Browse Services</h3>
                <p className="text-sm text-gray-600">Search and filter verified service providers in your area</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Check Profiles</h3>
                <p className="text-sm text-gray-600">Review ratings, experience, and background verification status</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Book & Pay</h3>
                <p className="text-sm text-gray-600">Secure booking and payment through our platform</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Enjoy Service</h3>
                <p className="text-sm text-gray-600">Get quality service with our satisfaction guarantee</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

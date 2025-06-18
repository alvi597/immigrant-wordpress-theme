"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  Search,
  Star,
  Calendar,
  BookOpen,
  Video,
  MessageSquare,
  Shield,
  Heart,
  DollarSign,
  Briefcase,
  Users,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ExpertsPage() {
  // Add state management:
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")

  // Add router:
  const router = useRouter()

  const experts = [
    {
      name: "Dr. Sarah Martinez",
      title: "Immigration Lawyer",
      specialties: ["Visa Applications", "Permanent Residency", "Family Reunification"],
      rating: 4.9,
      reviews: 127,
      price: "$150/hour",
      avatar: "/placeholder.svg?height=64&width=64",
      verified: true,
      languages: ["English", "Spanish"],
      experience: "15+ years",
    },
    {
      name: "Ahmed Hassan",
      title: "Financial Advisor",
      specialties: ["Tax Planning", "Credit Building", "Investment Strategies"],
      rating: 4.8,
      reviews: 89,
      price: "$120/hour",
      avatar: "/placeholder.svg?height=64&width=64",
      verified: true,
      languages: ["English", "Arabic"],
      experience: "12+ years",
    },
    {
      name: "Dr. Lisa Chen",
      title: "Mental Health Counselor",
      specialties: ["Cultural Adaptation", "Anxiety", "Family Therapy"],
      rating: 4.9,
      reviews: 156,
      price: "$100/hour",
      avatar: "/placeholder.svg?height=64&width=64",
      verified: true,
      languages: ["English", "Mandarin"],
      experience: "10+ years",
    },
    {
      name: "Michael Thompson",
      title: "Career Coach",
      specialties: ["Resume Building", "Interview Prep", "Skill Recognition"],
      rating: 4.7,
      reviews: 73,
      price: "$80/hour",
      avatar: "/placeholder.svg?height=64&width=64",
      verified: true,
      languages: ["English", "French"],
      experience: "8+ years",
    },
  ]

  const resources = [
    {
      title: "Complete Guide to Canadian Immigration",
      type: "E-book",
      author: "Dr. Sarah Martinez",
      price: "$29.99",
      rating: 4.8,
      downloads: 2341,
      icon: BookOpen,
    },
    {
      title: "Building Credit in Your New Country",
      type: "Video Seminar",
      author: "Ahmed Hassan",
      price: "Free",
      rating: 4.9,
      views: 5672,
      icon: Video,
    },
    {
      title: "Mental Health for New Immigrants",
      type: "Workshop Series",
      author: "Dr. Lisa Chen",
      price: "$49.99",
      rating: 4.7,
      participants: 892,
      icon: Users,
    },
    {
      title: "Job Search Strategies That Work",
      type: "Live Webinar",
      author: "Michael Thompson",
      price: "$19.99",
      rating: 4.6,
      attendees: 1234,
      icon: Video,
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
            <Link href="/experts" className="text-blue-600 font-medium">
              Experts
            </Link>
            <Link href="/marketplace" className="text-gray-600 hover:text-blue-600">
              Services
            </Link>
            <Link href="/stories" className="text-gray-600 hover:text-blue-600">
              Stories
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline">Sign In</Button>
            <Button onClick={() => router.push("/auth/signup")}>Join Community</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Expert Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get professional guidance from verified experts who understand your journey. Access articles, seminars, and
            one-on-one consultations.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search experts by specialty..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">All Specialties</Button>
            <Button variant="outline">Legal</Button>
            <Button variant="outline">Financial</Button>
            <Button variant="outline">Health</Button>
            <Button variant="outline">Career</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Experts */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Featured Experts</h2>
              <div className="grid gap-6">
                {experts.map((expert, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={expert.avatar || "/placeholder.svg"} alt={expert.name} />
                          <AvatarFallback>
                            {expert.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-xl font-semibold">{expert.name}</h3>
                            {expert.verified && <CheckCircle className="h-5 w-5 text-blue-600" />}
                          </div>
                          <p className="text-gray-600 mb-2">{expert.title}</p>
                          <div className="flex items-center space-x-4 mb-3">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="ml-1 text-sm font-medium">{expert.rating}</span>
                              <span className="ml-1 text-sm text-gray-500">({expert.reviews} reviews)</span>
                            </div>
                            <span className="text-sm text-gray-500">{expert.experience}</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {expert.specialties.map((specialty, idx) => (
                              <Badge key={idx} variant="secondary">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <span className="font-semibold text-lg">{expert.price}</span>
                              <div className="text-sm text-gray-500">Languages: {expert.languages.join(", ")}</div>
                            </div>
                            <div className="flex space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => router.push(`/messages/new?expert=${expert.name}`)}
                              >
                                <MessageSquare className="h-4 w-4 mr-1" />
                                Message
                              </Button>
                              <Button
                                size="sm"
                                onClick={() =>
                                  router.push(`/experts/book/${expert.name.toLowerCase().replace(/\s+/g, "-")}`)
                                }
                              >
                                <Calendar className="h-4 w-4 mr-1" />
                                Book Session
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Expert Resources */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Expert Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <resource.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2">
                            {resource.type}
                          </Badge>
                          <h3 className="font-semibold mb-1">{resource.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">by {resource.author}</p>
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="ml-1 text-sm">{resource.rating}</span>
                            </div>
                            <span className="text-sm text-gray-500">
                              {resource.downloads && `${resource.downloads} downloads`}
                              {resource.views && `${resource.views} views`}
                              {resource.participants && `${resource.participants} participants`}
                              {resource.attendees && `${resource.attendees} attendees`}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-lg">{resource.price}</span>
                            <Button
                              size="sm"
                              onClick={() =>
                                router.push(`/experts/resource/${resource.title.toLowerCase().replace(/\s+/g, "-")}`)
                              }
                            >
                              {resource.price === "Free" ? "Access Now" : "Purchase"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" onClick={() => router.push("/experts")}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => router.push("/experts")}>
                  <Video className="h-4 w-4 mr-2" />
                  Browse Seminars
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => router.push("/experts")}>
                  <BookOpen className="h-4 w-4 mr-2" />
                  Download E-books
                </Button>
              </CardContent>
            </Card>

            {/* Expert Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Expert Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Legal & Immigration</span>
                  </div>
                  <span className="text-sm text-gray-500">24 experts</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Financial Planning</span>
                  </div>
                  <span className="text-sm text-gray-500">18 experts</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Health & Wellness</span>
                  </div>
                  <span className="text-sm text-gray-500">31 experts</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Career Development</span>
                  </div>
                  <span className="text-sm text-gray-500">15 experts</span>
                </div>
              </CardContent>
            </Card>

            {/* Premium Benefits */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <Star className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Premium Benefits</h3>
                <ul className="text-sm space-y-2 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Free access to all seminars
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    15-min expert consultations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Discounts on services
                  </li>
                </ul>
                <Button size="sm" className="w-full" onClick={() => router.push("/profile")}>
                  Upgrade to Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  BookOpen,
  ShoppingCart,
  Heart,
  MapPin,
  Shield,
  DollarSign,
  Star,
  CheckCircle,
  MessageSquare,
  Video,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Immigrant Knowhow</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/forums" className="text-gray-600 hover:text-blue-600">
              Forums
            </Link>
            <Link href="/experts" className="text-gray-600 hover:text-blue-600">
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
            <Button variant="outline" onClick={() => router.push("/auth/login")}>
              Sign In
            </Button>
            <Button onClick={() => router.push("/auth/signup")}>Get Started Free</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Journey to a New Country <br />
            <span className="text-blue-600">Starts Here</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with fellow immigrants, access expert guidance, and find essential services to help you thrive in
            your new home. Join thousands who've made their transition successful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3" onClick={() => router.push("/auth/signup")}>
              Join Free Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3"
              onClick={() => router.push("/auth/signup")}
            >
              Explore Premium
            </Button>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need in One Place</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Community Forums</CardTitle>
                <CardDescription>
                  Connect with others on topics like health, immigration, culture, finance, and more
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Expert Support</CardTitle>
                <CardDescription>
                  Access professional advice, seminars, and one-on-one consultations with verified experts
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Marketplace Services</CardTitle>
                <CardDescription>
                  Find trusted pet sitters, tour guides, and other essential services in your area
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Forum Categories</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: "Legal & Immigration", icon: Shield, count: "2.3k posts" },
              { name: "Health & Wellness", icon: Heart, count: "1.8k posts" },
              { name: "Financial Planning", icon: DollarSign, count: "1.5k posts" },
              { name: "Culture & Integration", icon: Users, count: "3.1k posts" },
              { name: "Housing & Transportation", icon: MapPin, count: "1.2k posts" },
              { name: "Food & Cooking", icon: Star, count: "2.7k posts" },
              { name: "Dating & Relationships", icon: Heart, count: "890 posts" },
              { name: "Career & Education", icon: BookOpen, count: "1.9k posts" },
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <category.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Support */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Expert Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Articles & Guides</CardTitle>
                <CardDescription>
                  In-depth articles by verified experts on legal, financial, and health topics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" onClick={() => router.push("/experts")}>
                  Browse Articles
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Video className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Video Seminars</CardTitle>
                <CardDescription>
                  Live and recorded seminars covering essential topics for new immigrants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" onClick={() => router.push("/experts")}>
                  Watch Seminars
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>1-on-1 Consultations</CardTitle>
                <CardDescription>Book personal time with experts for detailed discussions and advice</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" onClick={() => router.push("/experts")}>
                  Schedule Session
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center">Free</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <CardDescription className="text-center">Essential access for new immigrants</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Access to essential forums</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Basic profile creation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">AI-powered recommendations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Purchase e-books & seminars</span>
                </div>
                <Button className="w-full mt-6">Get Started Free</Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative border-blue-500 border-2">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">Most Popular</Badge>
              <CardHeader>
                <CardTitle className="text-center">Premium</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">$4.99</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <CardDescription className="text-center">Enhanced access with expert benefits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Everything in Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Free access to all seminars</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Discounts on e-books & services</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">15-min expert consultations</span>
                </div>
                <Button className="w-full mt-6" onClick={() => router.push("/auth/signup")}>
                  Upgrade to Premium
                </Button>
              </CardContent>
            </Card>

            {/* Creator Pro Plan */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center">Creator Pro</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">$24.99</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <CardDescription className="text-center">For content creators and influencers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Everything in Premium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Create new forums</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Verified Creator badge</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Social media integration</span>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Apply for Creator Pro
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted Marketplace Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-pink-600 mb-2" />
                <CardTitle>Pet Sitting Services</CardTitle>
                <CardDescription>Vetted and background-checked pet sitters in your neighborhood</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Starting from $25/day</span>
                  <Badge variant="secondary">Background Verified</Badge>
                </div>
                <Button className="w-full" onClick={() => router.push("/marketplace")}>
                  Find Pet Sitters
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Guided Tours</CardTitle>
                <CardDescription>
                  Cultural and language-specific tours to help you explore your new city
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Starting from $50/tour</span>
                  <Badge variant="secondary">Premium Service</Badge>
                </div>
                <Button className="w-full" onClick={() => router.push("/marketplace")}>
                  Book a Tour
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Immigrant Knowhow</span>
              </div>
              <p className="text-gray-400">
                Empowering immigrants with community, knowledge, and support for a successful new beginning.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/forums">Forums</Link>
                </li>
                <li>
                  <Link href="/stories">Success Stories</Link>
                </li>
                <li>
                  <Link href="/events">Events</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/experts">Find Experts</Link>
                </li>
                <li>
                  <Link href="/help">Help Center</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/marketplace">Marketplace</Link>
                </li>
                <li>
                  <Link href="/premium">Premium Plans</Link>
                </li>
                <li>
                  <Link href="/creators">Creator Program</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Immigrant Knowhow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

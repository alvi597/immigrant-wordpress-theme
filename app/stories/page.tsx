"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Heart,
  Calendar,
  Star,
  BookOpen,
  Users,
  TrendingUp,
  Award,
  Globe,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function StoriesPage() {
  // Add state management:
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [likedStories, setLikedStories] = useState<number[]>([])
  const [email, setEmail] = useState("")

  // Add router:
  const router = useRouter()

  const featuredStories = [
    {
      id: 1,
      title: "From Refugee to Tech Entrepreneur: My Journey in Canada",
      author: "Ahmad Hassan",
      authorAvatar: "/placeholder.svg?height=64&width=64",
      country: "Syria → Canada",
      category: "Entrepreneurship",
      readTime: "8 min read",
      likes: 1247,
      publishedDate: "2 weeks ago",
      excerpt:
        "After fleeing Syria in 2015, I arrived in Toronto with nothing but hope. Today, I run a successful tech startup that employs 25 people. Here's how the immigrant community helped me rebuild my life...",
      tags: ["Technology", "Business", "Resilience"],
      featured: true,
    },
    {
      id: 2,
      title: "Building a Medical Career in a New Country",
      author: "Dr. Priya Sharma",
      authorAvatar: "/placeholder.svg?height=64&width=64",
      country: "India → Australia",
      category: "Healthcare",
      readTime: "6 min read",
      likes: 892,
      publishedDate: "1 week ago",
      excerpt:
        "The journey to practice medicine in Australia wasn't easy. From credential recognition to cultural adaptation, here's how I navigated the challenges and now help other immigrant doctors...",
      tags: ["Healthcare", "Professional Development", "Mentorship"],
      featured: true,
    },
    {
      id: 3,
      title: "Finding Home: A Single Mother's Story of Integration",
      author: "Maria Rodriguez",
      authorAvatar: "/placeholder.svg?height=64&width=64",
      country: "Colombia → United States",
      category: "Family",
      readTime: "10 min read",
      likes: 1456,
      publishedDate: "3 days ago",
      excerpt:
        "Moving to the US as a single mother with two young children was terrifying. But with the support of the immigrant community and determination, we not only survived but thrived...",
      tags: ["Family", "Education", "Community Support"],
      featured: true,
    },
  ]

  const allStories = [
    {
      id: 4,
      title: "Learning English at 50: It's Never Too Late",
      author: "Chen Wei",
      authorAvatar: "/placeholder.svg?height=48&width=48",
      country: "China → Canada",
      category: "Education",
      readTime: "5 min read",
      likes: 634,
      publishedDate: "5 days ago",
      excerpt:
        "Age was just a number when I decided to master English. Here's my journey from basic phrases to fluent conversations...",
      tags: ["Language Learning", "Personal Growth"],
    },
    {
      id: 5,
      title: "From Taxi Driver to Software Developer",
      author: "Viktor Petrov",
      authorAvatar: "/placeholder.svg?height=48&width=48",
      country: "Ukraine → Germany",
      category: "Career Change",
      readTime: "7 min read",
      likes: 789,
      publishedDate: "1 week ago",
      excerpt:
        "How I transitioned from driving taxis to coding applications, and the resources that made it possible...",
      tags: ["Career Change", "Technology", "Self-Learning"],
    },
    {
      id: 6,
      title: "Opening My Dream Restaurant in a New Country",
      author: "Fatima Al-Zahra",
      authorAvatar: "/placeholder.svg?height=48&width=48",
      country: "Lebanon → France",
      category: "Business",
      readTime: "9 min read",
      likes: 923,
      publishedDate: "2 weeks ago",
      excerpt:
        "The challenges and triumphs of bringing authentic Middle Eastern cuisine to Paris, and building a loyal customer base...",
      tags: ["Food", "Business", "Cultural Exchange"],
    },
  ]

  const categories = [
    { name: "All Stories", count: 156, icon: BookOpen },
    { name: "Entrepreneurship", count: 23, icon: Briefcase },
    { name: "Healthcare", count: 18, icon: Heart },
    { name: "Education", count: 31, icon: GraduationCap },
    { name: "Family", count: 42, icon: Users },
    { name: "Career Change", count: 28, icon: TrendingUp },
    { name: "Business", count: 14, icon: Award },
  ]

  const handleLike = (storyId: number) => {
    setLikedStories((prev) => (prev.includes(storyId) ? prev.filter((id) => id !== storyId) : [...prev, storyId]))
  }

  const handleSubscribe = () => {
    console.log("Subscribing:", email)
    setEmail("")
  }

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
            <Link href="/marketplace" className="text-gray-600 hover:text-blue-600">
              Services
            </Link>
            <Link href="/stories" className="text-blue-600 font-medium">
              Stories
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={() => router.push("/stories/submit")}>
              Share Your Story
            </Button>
            <Button onClick={() => router.push("/auth/login")}>Sign In</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be inspired by real stories from immigrants who overcame challenges and built successful lives in their new
            countries. Your story could be next!
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search stories by keyword, country, or category..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="career">Career Change</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Stories */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Star className="h-6 w-6 mr-2 text-yellow-500" />
                Featured Stories
              </h2>
              <div className="space-y-6">
                {featuredStories.map((story) => (
                  <Card key={story.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={story.authorAvatar || "/placeholder.svg"} alt={story.author} />
                          <AvatarFallback>
                            {story.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="secondary">{story.category}</Badge>
                            <Badge variant="outline" className="text-xs">
                              Featured
                            </Badge>
                          </div>
                          <h3
                            className="text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer"
                            onClick={() => router.push(`/stories/${story.id}`)}
                          >
                            {story.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <span className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {story.author}
                            </span>
                            <span className="flex items-center">
                              <Globe className="h-4 w-4 mr-1" />
                              {story.country}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {story.publishedDate}
                            </span>
                            <span className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-1" />
                              {story.readTime}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-4">{story.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {story.tags.map((tag, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center text-sm text-gray-500">
                                <Heart className="h-4 w-4 mr-1" />
                                {story.likes}
                              </span>
                              <Button size="sm" onClick={() => router.push(`/stories/${story.id}`)}>
                                Read Story
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* All Stories */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">More Inspiring Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {allStories.map((story) => (
                  <Card key={story.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={story.authorAvatar || "/placeholder.svg"} alt={story.author} />
                          <AvatarFallback>
                            {story.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2">
                            {story.category}
                          </Badge>
                          <h3
                            className="font-semibold mb-1 hover:text-blue-600 cursor-pointer"
                            onClick={() => router.push(`/stories/${story.id}`)}
                          >
                            {story.title}
                          </h3>
                          <div className="flex items-center space-x-3 text-xs text-gray-600">
                            <span>{story.author}</span>
                            <span>•</span>
                            <span>{story.country}</span>
                            <span>•</span>
                            <span>{story.publishedDate}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm mb-4">{story.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {story.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center text-xs text-gray-500">
                            <Heart className="h-3 w-3 mr-1" />
                            {story.likes}
                          </span>
                          <span className="text-xs text-gray-500">{story.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Share Your Success Story</h2>
                <p className="mb-6 opacity-90">
                  Your journey can inspire thousands of other immigrants. Share your story and get a free Premium
                  membership as our thank you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" onClick={() => router.push("/stories/submit")}>
                    Submit Your Story
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-blue-600"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Story Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between hover:bg-gray-50 p-2 rounded cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      <category.icon className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Entrepreneurship",
                    "Healthcare",
                    "Technology",
                    "Education",
                    "Family",
                    "Career Change",
                    "Language Learning",
                    "Cultural Adaptation",
                    "Business",
                    "Resilience",
                  ].map((tag, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-blue-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Most Liked Stories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Most Liked This Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "From Refugee to Tech Entrepreneur", likes: 1247 },
                  { title: "Finding Home: A Single Mother's Story", likes: 1456 },
                  { title: "Building a Medical Career", likes: 892 },
                ].map((story, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <h4 className="text-sm font-medium hover:text-blue-600 cursor-pointer flex-1 mr-2">
                      {story.title}
                    </h4>
                    <span className="flex items-center text-xs text-gray-500">
                      <Heart className="h-3 w-3 mr-1" />
                      {story.likes}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Weekly Story Digest</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get the most inspiring stories delivered to your inbox every week
                </p>
                <div className="space-y-2">
                  <Input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Button size="sm" className="w-full" onClick={handleSubscribe}>
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

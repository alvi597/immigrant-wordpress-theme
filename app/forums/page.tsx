"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  Plus,
  MessageSquare,
  Users,
  TrendingUp,
  Shield,
  Heart,
  DollarSign,
  MapPin,
  Star,
  Briefcase,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ForumsPage() {
  // Add state for search and filters:
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Add router:
  const router = useRouter()

  const forumCategories = [
    {
      name: "Legal & Immigration",
      icon: Shield,
      description: "Visa processes, legal advice, documentation help",
      posts: 2341,
      members: 15420,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      featured: true,
    },
    {
      name: "Health & Wellness",
      icon: Heart,
      description: "Healthcare systems, mental health, finding doctors",
      posts: 1876,
      members: 12350,
      color: "text-red-600",
      bgColor: "bg-red-50",
      featured: true,
    },
    {
      name: "Financial Planning",
      icon: DollarSign,
      description: "Banking, taxes, credit building, investments",
      posts: 1543,
      members: 9870,
      color: "text-green-600",
      bgColor: "bg-green-50",
      featured: true,
    },
    {
      name: "Culture & Integration",
      icon: Users,
      description: "Cultural adaptation, language learning, social connections",
      posts: 3102,
      members: 18750,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      featured: false,
    },
    {
      name: "Housing & Transportation",
      icon: MapPin,
      description: "Finding housing, public transport, driving licenses",
      posts: 1234,
      members: 8920,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      featured: false,
    },
    {
      name: "Food & Cooking",
      icon: Star,
      description: "Local cuisine, cooking tips, food shopping",
      posts: 2687,
      members: 14560,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      featured: false,
    },
    {
      name: "Career & Education",
      icon: Briefcase,
      description: "Job searching, skill recognition, education systems",
      posts: 1923,
      members: 11240,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      featured: false,
    },
    {
      name: "Dating & Relationships",
      icon: Heart,
      description: "Meeting people, dating culture, family life",
      posts: 892,
      members: 6780,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      featured: false,
    },
  ]

  const recentPosts = [
    {
      title: "How to apply for permanent residency - Step by step guide",
      author: "Maria_Legal_Expert",
      category: "Legal & Immigration",
      replies: 23,
      time: "2 hours ago",
      isPinned: true,
    },
    {
      title: "Best banks for newcomers with no credit history?",
      author: "Ahmed_Toronto",
      category: "Financial Planning",
      replies: 15,
      time: "4 hours ago",
      isPinned: false,
    },
    {
      title: "Mental health resources - Free counseling services",
      author: "Dr_Sarah_Wellness",
      category: "Health & Wellness",
      replies: 31,
      time: "6 hours ago",
      isPinned: true,
    },
    {
      title: "Job interview tips for international professionals",
      author: "CareerCoach_Mike",
      category: "Career & Education",
      replies: 18,
      time: "8 hours ago",
      isPinned: false,
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
            <Link href="/forums" className="text-blue-600 font-medium">
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
            <Button variant="outline">Sign In</Button>
            <Button onClick={() => router.push("/auth/signup")}>Join Community</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Forums</h1>
            <p className="text-gray-600">Connect, share experiences, and get support from fellow immigrants</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search forums..."
                className="pl-10 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button onClick={() => router.push("/forums/new")}>
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Categories */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Featured Categories
              </h2>
              <div className="grid gap-4">
                {forumCategories
                  .filter((cat) => cat.featured)
                  .map((category, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 rounded-lg ${category.bgColor}`}>
                              <category.icon className={`h-6 w-6 ${category.color}`} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                              <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <MessageSquare className="h-4 w-4 mr-1" />
                                  {category.posts.toLocaleString()} posts
                                </span>
                                <span className="flex items-center">
                                  <Users className="h-4 w-4 mr-1" />
                                  {category.members.toLocaleString()} members
                                </span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="secondary">Featured</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* All Categories */}
            <div>
              <h2 className="text-xl font-semibold mb-4">All Categories</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {forumCategories
                  .filter((cat) => !cat.featured)
                  .map((category, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() =>
                        router.push(`/forums/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`)
                      }
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${category.bgColor}`}>
                            <category.icon className={`h-5 w-5 ${category.color}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{category.name}</h3>
                            <div className="flex items-center space-x-3 text-xs text-gray-500">
                              <span>{category.posts.toLocaleString()} posts</span>
                              <span>{category.members.toLocaleString()} members</span>
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
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Posts</CardTitle>
                <CardDescription>Latest discussions in the community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm leading-tight hover:text-blue-600 cursor-pointer">
                        {post.title}
                      </h4>
                      {post.isPinned && (
                        <Badge variant="secondary" className="text-xs ml-2">
                          Pinned
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>by {post.author}</span>
                      <span>{post.replies} replies</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
                      <span>{post.category}</span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Members</span>
                  <span className="font-semibold">47,892</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Posts This Week</span>
                  <span className="font-semibold">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Active Today</span>
                  <span className="font-semibold">892</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Countries Represented</span>
                  <span className="font-semibold">156</span>
                </div>
              </CardContent>
            </Card>

            {/* Upgrade Prompt */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Unlock Premium Features</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get access to expert seminars, priority support, and exclusive content
                </p>
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

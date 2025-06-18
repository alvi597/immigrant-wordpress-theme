"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Bell,
  BookOpen,
  Calendar,
  Heart,
  MessageSquare,
  Star,
  TrendingUp,
  Users,
  Video,
  Settings,
  Crown,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()

  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    avatar: "/placeholder.svg?height=64&width=64",
    memberSince: "March 2024",
    subscription: "Premium",
    country: "Canada",
    interests: ["Legal & Immigration", "Health & Wellness", "Financial Planning"],
  }

  const recommendations = [
    {
      type: "Forum",
      title: "Canadian Healthcare System - Newcomer Guide",
      category: "Health & Wellness",
      reason: "Based on your interests",
      engagement: "234 replies",
    },
    {
      type: "Expert",
      title: "Dr. Maria Rodriguez - Immigration Lawyer",
      category: "Legal & Immigration",
      reason: "Highly rated in your area",
      engagement: "4.9 rating",
    },
    {
      type: "Seminar",
      title: "Tax Planning for New Immigrants",
      category: "Financial Planning",
      reason: "Premium exclusive",
      engagement: "Live tomorrow",
    },
  ]

  const recentActivity = [
    {
      type: "post",
      title: "Replied to 'Best banks for newcomers'",
      time: "2 hours ago",
      category: "Financial Planning",
    },
    {
      type: "bookmark",
      title: "Bookmarked 'Healthcare enrollment guide'",
      time: "1 day ago",
      category: "Health & Wellness",
    },
    {
      type: "expert",
      title: "Scheduled consultation with Dr. Ahmed Hassan",
      time: "2 days ago",
      category: "Financial Planning",
    },
  ]

  const upcomingEvents = [
    {
      title: "Immigration Law Updates - Live Q&A",
      date: "Tomorrow, 2:00 PM",
      type: "Webinar",
      expert: "Dr. Sarah Martinez",
    },
    {
      title: "Mental Health Support Group",
      date: "Friday, 7:00 PM",
      type: "Community Event",
      expert: "Dr. Lisa Chen",
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
            <Link href="/marketplace" className="text-gray-600 hover:text-blue-600">
              Services
            </Link>
            <Link href="/stories" className="text-gray-600 hover:text-blue-600">
              Stories
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar>
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-2">Welcome back, {user.name}!</h1>
                  <p className="opacity-90">
                    You have 3 new recommendations and 2 upcoming events. Let's continue your journey!
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Crown className="h-6 w-6" />
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {user.subscription}
                  </Badge>
                </div>
              </div>
            </div>

            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Personalized Recommendations
                </CardTitle>
                <CardDescription>AI-curated content based on your interests and activity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      {rec.type === "Forum" && <MessageSquare className="h-5 w-5 text-blue-600" />}
                      {rec.type === "Expert" && <Users className="h-5 w-5 text-blue-600" />}
                      {rec.type === "Seminar" && <Video className="h-5 w-5 text-blue-600" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          {rec.type}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {rec.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold mb-1">{rec.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{rec.reason}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{rec.engagement}</span>
                        <Button size="sm" variant="outline" onClick={() => router.push("/forums")}>
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest interactions on the platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 border-l-4 border-blue-200 bg-blue-50/50">
                    <div className="p-2 bg-white rounded-lg">
                      {activity.type === "post" && <MessageSquare className="h-4 w-4 text-blue-600" />}
                      {activity.type === "bookmark" && <BookOpen className="h-4 w-4 text-green-600" />}
                      {activity.type === "expert" && <Calendar className="h-4 w-4 text-purple-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{activity.time}</span>
                        <span>•</span>
                        <span>{activity.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                  Upcoming Events
                </CardTitle>
                <CardDescription>Don't miss these exclusive events and sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold mb-1">{event.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>{event.date}</span>
                        <span>•</span>
                        <Badge variant="outline" className="text-xs">
                          {event.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">with {event.expert}</p>
                    </div>
                    <Button size="sm" onClick={() => router.push("/experts")}>
                      Join
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <Card>
              <CardContent className="p-6 text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback className="text-lg">SJ</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1">{user.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{user.country}</p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Crown className="h-4 w-4 text-yellow-500" />
                  <Badge variant="secondary">{user.subscription} Member</Badge>
                </div>
                <p className="text-xs text-gray-500 mb-4">Member since {user.memberSince}</p>
                <Button size="sm" variant="outline" className="w-full" onClick={() => router.push("/profile")}>
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Progress Tracker */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Journey Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Profile Completion</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Community Engagement</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Expert Consultations</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" onClick={() => router.push("/forums")}>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Create New Post
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => router.push("/experts")}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Expert Session
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => router.push("/experts")}>
                  <Video className="h-4 w-4 mr-2" />
                  Browse Seminars
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => router.push("/stories")}>
                  <Star className="h-4 w-4 mr-2" />
                  Share Your Story
                </Button>
              </CardContent>
            </Card>

            {/* Interest Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {user.interests.map((interest, index) => (
                    <Badge key={index} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3" onClick={() => router.push("/profile")}>
                  Update Interests
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

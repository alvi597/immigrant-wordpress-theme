"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Heart, User, MapPin, Camera, Bell, Shield, Crown, MessageSquare, BookOpen, Star, Award } from "lucide-react"
import Link from "next/link"

// Add router:
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")
  const router = useRouter()

  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    avatar: "/placeholder.svg?height=128&width=128",
    bio: "Software engineer from Syria, now living in Toronto. Passionate about helping fellow immigrants navigate the tech industry in Canada.",
    location: "Toronto, Canada",
    originalCountry: "Syria",
    memberSince: "March 2024",
    subscription: "Premium",
    languages: ["English", "Arabic", "French"],
    interests: ["Legal & Immigration", "Health & Wellness", "Financial Planning", "Technology", "Career Development"],
    stats: {
      posts: 23,
      replies: 156,
      likes: 892,
      helpfulVotes: 234,
    },
  }

  const recentActivity = [
    {
      type: "post",
      title: "Created post: 'Best resources for learning Canadian workplace culture'",
      date: "2 days ago",
      category: "Career Development",
    },
    {
      type: "reply",
      title: "Replied to 'Tax filing for first-time immigrants'",
      date: "3 days ago",
      category: "Financial Planning",
    },
    {
      type: "expert",
      title: "Completed consultation with Dr. Ahmed Hassan",
      date: "1 week ago",
      category: "Financial Planning",
    },
  ]

  // Add state for form data:
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    bio: user.bio,
  })

  // Add form submission handler:
  const handleSaveProfile = async () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      console.log("Profile saved:", formData)
    }, 1000)
  }

  // Add notification state management:
  const [notifications, setNotifications] = useState({
    email: true,
    forumReplies: true,
    expertUpdates: false,
    weeklyDigest: true,
  })

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
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">
              Dashboard
            </Link>
            <Link href="/forums" className="text-gray-600 hover:text-blue-600">
              Forums
            </Link>
            <Link href="/experts" className="text-gray-600 hover:text-blue-600">
              Experts
            </Link>
            <Link href="/marketplace" className="text-gray-600 hover:text-blue-600">
              Services
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
          {/* Profile Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <Avatar className="h-32 w-32 mx-auto">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="text-2xl">SJ</AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <h2 className="text-xl font-semibold mb-1">{user.name}</h2>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Crown className="h-4 w-4 text-yellow-500" />
                  <Badge variant="secondary">{user.subscription} Member</Badge>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {user.location}
                </div>
                <p className="text-sm text-gray-600 mb-4">{user.bio}</p>
                <div className="grid grid-cols-2 gap-4 text-center mb-4">
                  <div>
                    <div className="font-semibold text-lg">{user.stats.posts}</div>
                    <div className="text-xs text-gray-500">Posts</div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{user.stats.replies}</div>
                    <div className="text-xs text-gray-500">Replies</div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{user.stats.likes}</div>
                    <div className="text-xs text-gray-500">Likes</div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{user.stats.helpfulVotes}</div>
                    <div className="text-xs text-gray-500">Helpful</div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Member since {user.memberSince}</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="subscription">Subscription</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and profile information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Sarah" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Johnson" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={user.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue={user.phone} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea id="bio" defaultValue={user.bio} rows={3} />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentCountry">Current Country</Label>
                        <Select defaultValue="canada">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="australia">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="originalCountry">Country of Origin</Label>
                        <Select defaultValue="syria">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="syria">Syria</SelectItem>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="china">China</SelectItem>
                            <SelectItem value="mexico">Mexico</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button onClick={handleSaveProfile} disabled={isLoading}>
                      {isLoading ? "Saving..." : "Save Changes"}
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Languages & Interests</CardTitle>
                    <CardDescription>Manage your language skills and areas of interest</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Languages</Label>
                      <div className="flex flex-wrap gap-2">
                        {user.languages.map((lang, index) => (
                          <Badge key={index} variant="secondary">
                            {lang}
                          </Badge>
                        ))}
                        <Button variant="outline" size="sm">
                          Add Language
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Interests</Label>
                      <div className="flex flex-wrap gap-2">
                        {user.interests.map((interest, index) => (
                          <Badge key={index} variant="outline">
                            {interest}
                          </Badge>
                        ))}
                        <Button variant="outline" size="sm">
                          Edit Interests
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Activity Tab */}
              <TabsContent value="activity" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest interactions on the platform</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          {activity.type === "post" && <MessageSquare className="h-5 w-5 text-blue-600" />}
                          {activity.type === "reply" && <MessageSquare className="h-5 w-5 text-green-600" />}
                          {activity.type === "expert" && <Star className="h-5 w-5 text-purple-600" />}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.title}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                            <span>{activity.date}</span>
                            <span>•</span>
                            <span>{activity.category}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                    <CardDescription>Your milestones and accomplishments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Award className="h-8 w-8 text-yellow-500" />
                        <div>
                          <h4 className="font-semibold">Helpful Contributor</h4>
                          <p className="text-sm text-gray-600">Received 100+ helpful votes</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <MessageSquare className="h-8 w-8 text-blue-500" />
                        <div>
                          <h4 className="font-semibold">Active Member</h4>
                          <p className="text-sm text-gray-600">Posted 20+ forum discussions</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Choose how you want to be notified</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-notifications">Email Notifications</Label>
                        <p className="text-sm text-gray-600">Receive updates via email</p>
                      </div>
                      <Switch
                        id="email-notifications"
                        checked={notifications.email}
                        onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, email: checked }))}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="forum-replies">Forum Replies</Label>
                        <p className="text-sm text-gray-600">Get notified when someone replies to your posts</p>
                      </div>
                      <Switch
                        id="forum-replies"
                        checked={notifications.forumReplies}
                        onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, forumReplies: checked }))}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="expert-updates">Expert Updates</Label>
                        <p className="text-sm text-gray-600">New content from experts you follow</p>
                      </div>
                      <Switch
                        id="expert-updates"
                        checked={notifications.expertUpdates}
                        onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, expertUpdates: checked }))}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="weekly-digest">Weekly Digest</Label>
                        <p className="text-sm text-gray-600">Summary of platform activity</p>
                      </div>
                      <Switch
                        id="weekly-digest"
                        checked={notifications.weeklyDigest}
                        onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, weeklyDigest: checked }))}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="est">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="est">Eastern Time (EST)</SelectItem>
                          <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                          <SelectItem value="cst">Central Time (CST)</SelectItem>
                          <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language">Interface Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="ar">العربية</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button>Save Settings</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Subscription Tab */}
              <TabsContent value="subscription" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Crown className="h-5 w-5 mr-2 text-yellow-500" />
                      Current Plan: Premium
                    </CardTitle>
                    <CardDescription>Manage your subscription and billing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold mb-2">Premium Benefits</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Access to all expert seminars</li>
                        <li>• 15-minute expert consultations</li>
                        <li>• Discounts on e-books and services</li>
                        <li>• Priority support</li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">Next billing date</h4>
                        <p className="text-sm text-gray-600">April 15, 2024</p>
                      </div>
                      <div className="text-right">
                        <h4 className="font-semibold">$4.99/month</h4>
                        <p className="text-sm text-gray-600">Auto-renewal</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" onClick={() => router.push("/profile?tab=subscription")}>
                        Change Plan
                      </Button>
                      <Button variant="outline" onClick={() => console.log("Update payment")}>
                        Update Payment
                      </Button>
                      <Button variant="destructive" onClick={() => console.log("Cancel subscription")}>
                        Cancel Subscription
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Creator Pro</CardTitle>
                    <CardDescription>Unlock advanced features for content creators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-purple-50 rounded-lg mb-4">
                      <h3 className="font-semibold mb-2">Creator Pro Benefits</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Create and manage forums</li>
                        <li>• Verified Creator badge</li>
                        <li>• Social media integration</li>
                        <li>• Featured contributor status</li>
                        <li>• Advanced analytics</li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">$24.99/month</span>
                      <Button onClick={() => router.push("/creator/apply")}>Apply for Creator Pro</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Privacy Tab */}
              <TabsContent value="privacy" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Privacy Settings</CardTitle>
                    <CardDescription>Control who can see your information and activity</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="profile-visibility">Public Profile</Label>
                        <p className="text-sm text-gray-600">Make your profile visible to other users</p>
                      </div>
                      <Switch id="profile-visibility" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="activity-visibility">Show Activity</Label>
                        <p className="text-sm text-gray-600">Display your recent posts and replies</p>
                      </div>
                      <Switch id="activity-visibility" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="contact-info">Contact Information</Label>
                        <p className="text-sm text-gray-600">Allow others to see your contact details</p>
                      </div>
                      <Switch id="contact-info" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="location-sharing">Location Sharing</Label>
                        <p className="text-sm text-gray-600">Share your city/region with the community</p>
                      </div>
                      <Switch id="location-sharing" defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Data & Security</CardTitle>
                    <CardDescription>Manage your data and account security</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="h-4 w-4 mr-2" />
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="h-4 w-4 mr-2" />
                      Enable Two-Factor Authentication
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Download My Data
                    </Button>
                    <Button variant="destructive" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" />
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

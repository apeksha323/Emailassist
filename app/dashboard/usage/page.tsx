"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, TrendingUp, MessageSquare, Clock } from "lucide-react"
import DashboardLayout from "@/components/DashboardLayout"

export default function UsagePage() {
  const usageData = {
    totalMessages: 1247,
    avgResponseTime: "2.3s",
    creditsUsed: 892,
    creditsRemaining: 2108,
  }

  return (
    <DashboardLayout>
      <div className="p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="mb-8 text-3xl font-bold text-gray-900">Usage Analytics</h1>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex gap-4"
        >
          <Select defaultValue="7days">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24hours">Last 24 hours</SelectItem>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{usageData.totalMessages.toLocaleString()}</div>
              <p className="mt-1 flex items-center text-xs text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                +12% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Avg Response Time</CardTitle>
              <Clock className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{usageData.avgResponseTime}</div>
              <p className="mt-1 flex items-center text-xs text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                -0.5s from last week
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Credits Used</CardTitle>
              <BarChart3 className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{usageData.creditsUsed.toLocaleString()}</div>
              <p className="mt-1 text-xs text-gray-600">{usageData.creditsRemaining.toLocaleString()} remaining</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">94.2%</div>
              <p className="mt-1 flex items-center text-xs text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                +2.1% from last week
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Charts Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900">Daily Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex h-64 items-center justify-center rounded-lg bg-gray-50">
                <p className="text-gray-500">Chart visualization would go here</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900">Response Time Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex h-64 items-center justify-center rounded-lg bg-gray-50">
                <p className="text-gray-500">Chart visualization would go here</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

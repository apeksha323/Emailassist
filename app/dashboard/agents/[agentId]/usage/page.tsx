"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageSquare, Clock, BarChart3, TrendingUp, Mail } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

/**
 * Usage analytics page for a specific agent.
 * Shows a simple sidebar, header, filters, summary cards and chart placeholders.
 */
export default function AgentUsagePage({
  params,
}: {
  params: { agentId: string }
}) {
  const usageData = {
    totalMessages: 1247,
    avgResponseTime: "2.3 s",
    creditsUsed: 892,
    creditsRemaining: 2108,
    successRate: "94.2 %",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ───────────────  Top bar  */}
      <div className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/dashboard/agents" className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">EmailAssist</span>
          </Link>
        </div>
      </div>

      <div className="flex">
        {/* ───────────────  Sidebar  */}
        <aside className="w-64 border-r bg-white">
          <nav className="p-4 space-y-2">
            <Link
              href="/dashboard/agents"
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              ← Back to Agents
            </Link>
            <Link
              href={`/dashboard/agents/${params.agentId}/chat`}
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              Playground
            </Link>
            <Link
              href={`/dashboard/agents/${params.agentId}/usage`}
              className="block rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900"
            >
              Analytics
            </Link>
            <Link
              href={`/dashboard/agents/${params.agentId}/settings`}
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              Settings
            </Link>
          </nav>
        </aside>

        {/* ───────────────  Main content  */}
        <main className="flex-1 p-8">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="mb-2 text-3xl font-bold text-gray-900">Usage Analytics</h1>
            <p className="text-gray-600">Monitor your agent&apos;s performance and usage patterns</p>
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
                <SelectItem value="24hours">Last 24 h</SelectItem>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* Summary cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* Total messages */}
            <SummaryCard
              title="Total Messages"
              value={usageData.totalMessages.toLocaleString()}
              icon={<MessageSquare className="h-4 w-4 text-gray-600" />}
              delta="+12 % from last week"
            />
            {/* Avg response time */}
            <SummaryCard
              title="Avg Response Time"
              value={usageData.avgResponseTime}
              icon={<Clock className="h-4 w-4 text-gray-600" />}
              delta="-0.5 s from last week"
            />
            {/* Credits used */}
            <SummaryCard
              title="Credits Used"
              value={usageData.creditsUsed.toLocaleString()}
              icon={<BarChart3 className="h-4 w-4 text-gray-600" />}
              subtitle={`${usageData.creditsRemaining.toLocaleString()} remaining`}
            />
            {/* Success rate */}
            <SummaryCard
              title="Success Rate"
              value={usageData.successRate}
              icon={<TrendingUp className="h-4 w-4 text-gray-600" />}
              delta="+2.1 % from last week"
            />
          </motion.div>

          {/* Charts placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-6 lg:grid-cols-2"
          >
            <PlaceholderChart title="Daily Usage" />
            <PlaceholderChart title="Response Time Trends" />
          </motion.div>
        </main>
      </div>
    </div>
  )
}

/* ───────────────────────────────────────────────────────── helpers */

function SummaryCard({
  title,
  value,
  icon,
  subtitle,
  delta,
}: {
  title: string
  value: string | number
  icon: React.ReactNode
  subtitle?: string
  delta?: string
}) {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        {delta ? (
          <p className="mt-1 flex items-center text-xs text-green-600">
            <TrendingUp className="mr-1 h-3 w-3" />
            {delta}
          </p>
        ) : null}
        {subtitle ? <p className="mt-1 text-xs text-gray-600">{subtitle}</p> : null}
      </CardContent>
    </Card>
  )
}

function PlaceholderChart({ title }: { title: string }) {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-64 items-center justify-center rounded-lg bg-gray-50">
          <p className="text-gray-500">Chart visualization would go here</p>
        </div>
      </CardContent>
    </Card>
  )
}

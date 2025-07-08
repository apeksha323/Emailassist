"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Play, BarChart3, Settings, Trash2 } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "@/components/DashboardLayout"

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function AgentsPage() {
  const [agents] = useState([
    {
      id: "1",
      name: "Customer Support Assistant",
      status: "active",
      lastUsed: "2 hours ago",
      totalMessages: 1247,
    },
    {
      id: "2",
      name: "Sales Email Helper",
      status: "active",
      lastUsed: "1 day ago",
      totalMessages: 892,
    },
    {
      id: "3",
      name: "HR Onboarding Bot",
      status: "inactive",
      lastUsed: "1 week ago",
      totalMessages: 156,
    },
  ])

  return (
    <DashboardLayout>
      <div className="flex min-h-[600px] flex-col items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="mb-12 text-left text-3xl font-bold text-gray-900">AI Agents</h1>

          <div className="flex flex-col items-center justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                asChild
                className="bg-black text-white hover:bg-gray-800 px-6 py-3 text-sm font-medium rounded-lg"
              >
                <Link href="/dashboard/agents/new">New AI agent</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Agents Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          {agents.map((agent) => (
            <motion.div key={agent.id} variants={fadeInUp} whileHover={{ scale: 1.02, y: -5 }}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{agent.name}</h3>
                      <Badge
                        variant={agent.status === "active" ? "default" : "secondary"}
                        className={
                          agent.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
                        }
                      >
                        {agent.status}
                      </Badge>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/agents/${agent.id}/chat`}>
                            <Play className="w-4 h-4 mr-2" />
                            Playground
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/agents/${agent.id}/usage`}>
                            <BarChart3 className="w-4 h-4 mr-2" />
                            Analytics
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/agents/${agent.id}/settings`}>
                            <Settings className="w-4 h-4 mr-2" />
                            Settings
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Last used:</span>
                      <span>{agent.lastUsed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total messages:</span>
                      <span>{agent.totalMessages.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

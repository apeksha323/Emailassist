"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "@/components/DashboardLayout"

export default function NewAgentPage() {
  const [formData, setFormData] = useState({
    name: "",
    instructions: "",
    model: "",
    temperature: "0.7",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating agent:", formData)
    // Redirect to agents list after creation
    window.location.href = "/dashboard/agents"
  }

  return (
    <DashboardLayout>
      <div className="p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6">
            <Button asChild variant="ghost" className="mb-4 text-gray-600 hover:text-gray-900">
              <Link href="/dashboard/agents">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Agents
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Create New AI Agent</h1>
            <p className="mt-2 text-gray-600">
              Set up your AI email assistant with custom instructions and preferences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl"
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Agent Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-900">
                    Agent Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Customer Support Assistant"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="model" className="text-sm font-medium text-gray-900">
                    Model
                  </Label>
                  <Select value={formData.model} onValueChange={(value) => setFormData({ ...formData, model: value })}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gpt-4">GPT-4</SelectItem>
                      <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                      <SelectItem value="claude-3">Claude 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="instructions" className="text-sm font-medium text-gray-900">
                    Instructions
                  </Label>
                  <Textarea
                    id="instructions"
                    value={formData.instructions}
                    onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                    placeholder="Provide detailed instructions for your AI assistant. For example: You are a helpful customer support assistant. Always be polite, professional, and provide accurate information..."
                    rows={6}
                    className="mt-2 resize-none"
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <Button type="button" variant="outline" asChild>
                    <Link href="/dashboard/agents">Cancel</Link>
                  </Button>
                  <Button type="submit" className="bg-black text-white hover:bg-gray-800">
                    Create Agent
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

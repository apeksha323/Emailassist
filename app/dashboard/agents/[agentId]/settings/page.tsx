"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash2, Save } from "lucide-react"
import Header from "@/components/Header"

export default function SettingsPage({ params }: { params: { agentId: string } }) {
  const [agentData, setAgentData] = useState({
    name: "Customer Support Assistant",
    instructions:
      "You are a helpful customer support assistant. Always be polite, professional, and provide accurate information. If you don't know something, ask for clarification or escalate to a human agent.",
    creditLimit: "1000",
    model: "gpt-4",
  })

  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    // Show success feedback
  }

  const handleDelete = () => {
    console.log("Delete agent:", params.agentId)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-black mb-2">Agent Settings</h1>
          <p className="text-gray-600">Configure your AI email assistant</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          {/* Basic Settings */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-black">Basic Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-black">
                  Agent Name
                </Label>
                <Input
                  id="name"
                  value={agentData.name}
                  onChange={(e) => setAgentData({ ...agentData, name: e.target.value })}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="model" className="text-black">
                  Model
                </Label>
                <Select value={agentData.model} onValueChange={(value) => setAgentData({ ...agentData, model: value })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="claude-3">Claude 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="creditLimit" className="text-black">
                  Credit Limit (per month)
                </Label>
                <Input
                  id="creditLimit"
                  type="number"
                  value={agentData.creditLimit}
                  onChange={(e) => setAgentData({ ...agentData, creditLimit: e.target.value })}
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-black">Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="instructions" className="text-black">
                System Prompt
              </Label>
              <Textarea
                id="instructions"
                value={agentData.instructions}
                onChange={(e) => setAgentData({ ...agentData, instructions: e.target.value })}
                rows={6}
                className="mt-1 resize-none"
                placeholder="Enter detailed instructions for your AI assistant..."
              />
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-between items-center">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Agent
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your agent and all associated data.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Button onClick={handleSave} disabled={isSaving} className="bg-black text-white hover:bg-gray-900">
              <Save className="w-4 h-4 mr-2" />
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

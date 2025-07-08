"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import DashboardLayout from "@/components/DashboardLayout"

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    teamName: "",
    teamUrl: "",
  })

  const handleSave = () => {
    console.log("Saving settings:", formData)
  }

  const handleDeleteTeam = () => {
    console.log("Deleting team")
  }

  return (
    <DashboardLayout>
      <div className="p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="mb-8 text-3xl font-bold text-gray-900">Settings</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl"
        >
          <div className="mb-8">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">General</h2>

            <div className="space-y-6">
              <div>
                <Label htmlFor="teamName" className="text-sm font-medium text-gray-900">
                  Team name
                </Label>
                <Input
                  id="teamName"
                  type="text"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  placeholder="Enter your team name"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="teamUrl" className="text-sm font-medium text-gray-900">
                  Team URL
                </Label>
                <Input
                  id="teamUrl"
                  type="text"
                  value={formData.teamUrl}
                  onChange={(e) => setFormData({ ...formData, teamUrl: e.target.value })}
                  placeholder="Enter your team URL"
                  className="mt-2"
                />
                <p className="mt-2 text-sm text-gray-500">
                  Changing the team URL will redirect you to the new address.
                </p>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSave} className="bg-black text-white hover:bg-gray-800">
                  Save
                </Button>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="border-t border-gray-200 pt-8">
            <div className="mb-4">
              <span className="text-sm font-medium text-red-600">DANGER ZONE</span>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-red-600">Delete team</h3>
              <div className="mb-4 space-y-1 text-sm text-gray-700">
                <p>Once you delete your team account, there is no going back. Please be certain.</p>
                <p>All your uploaded data and trained agents will be deleted.</p>
                <p className="font-semibold">This action is not reversible</p>
              </div>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                    Delete team
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your team account and remove all
                      associated data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteTeam} className="bg-red-600 hover:bg-red-700">
                      Delete team
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

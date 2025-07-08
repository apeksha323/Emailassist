"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Plus, Mail } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import DashboardLayout from "@/components/DashboardLayout"

export default function MembersPage() {
  const members = [
    {
      id: "1",
      name: "John Doe",
      email: "john@company.com",
      role: "Owner",
      status: "Active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@company.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@company.com",
      role: "Member",
      status: "Pending",
    },
  ]

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
          className="max-w-4xl"
        >
          <div className="mb-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Team Members</h2>
              <Button className="bg-black text-white hover:bg-gray-800">
                <Plus className="mr-2 h-4 w-4" />
                Invite Member
              </Button>
            </div>

            <div className="mb-6">
              <Input placeholder="Enter email address to invite" className="max-w-md" />
            </div>

            <div className="space-y-4">
              {members.map((member) => (
                <Card key={member.id} className="border border-gray-200">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                        <Mail className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant={member.status === "Active" ? "default" : "secondary"}>{member.status}</Badge>
                      <span className="text-sm text-gray-500">{member.role}</span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Change Role</DropdownMenuItem>
                          <DropdownMenuItem>Resend Invitation</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Remove Member</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ScheduleDemoPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    teamSize: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Demo request:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-md"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-8 h-8 text-green-600" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Demo Request Submitted!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for your interest in EmailAssist. Our team will reach out within 24 hours to schedule your
              personalized demo.
            </p>
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <Link href="/">Return to Home</Link>
            </Button>
          </motion.div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-lg"
        >
          <Card className="p-8 shadow-2xl border border-gray-200 bg-white">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-center mb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 text-2xl font-semibold text-gray-900">EmailAssist</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedule a Demo</h1>
              <p className="text-gray-600">Tell us about your team and we'll reach out</p>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <Label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
                  Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                />
              </motion.div>

              {/* Work Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <Label htmlFor="workEmail" className="block text-sm font-medium text-gray-900 mb-2">
                  Work Email
                </Label>
                <Input
                  id="workEmail"
                  type="email"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="john@company.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                />
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <Label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                  Company
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Corp"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                />
              </motion.div>

              {/* Team Size */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <Label htmlFor="teamSize" className="block text-sm font-medium text-gray-900 mb-2">
                  Team Size
                </Label>
                <Select
                  value={formData.teamSize}
                  onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
                >
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 people</SelectItem>
                    <SelectItem value="11-50">11-50 people</SelectItem>
                    <SelectItem value="51-200">51-200 people</SelectItem>
                    <SelectItem value="201-1000">201-1000 people</SelectItem>
                    <SelectItem value="1000+">1000+ people</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              >
                <Label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your email workflow challenges..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Request Demo
                </Button>
              </motion.div>
            </motion.form>

            {/* Footer Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              className="text-center mt-6"
            >
              <p className="text-xs text-gray-500">
                We'll reach out within 24 hours to schedule your personalized demo.
              </p>
            </motion.div>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

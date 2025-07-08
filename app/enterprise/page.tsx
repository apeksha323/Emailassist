"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Users, BarChart3, Settings, Lock, Headphones } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function EnterprisePage() {
  const useCases = [
    {
      title: "Sales Teams",
      description:
        "Automate follow-ups, qualify leads, and maintain consistent communication across your sales pipeline.",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: "Legal Teams",
      description: "Draft professional responses, manage client communications, and ensure compliance standards.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Support Teams",
      description: "Handle customer inquiries efficiently with AI-powered responses and ticket management.",
      icon: <Headphones className="w-8 h-8" />,
    },
  ]

  const benefits = [
    {
      title: "Admin Dashboard",
      description: "Centralized control panel for managing team members, usage analytics, and permissions.",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      title: "Usage Analytics",
      description: "Detailed insights into team productivity, response times, and AI assistant performance.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Team Controls",
      description: "Set permissions, manage access levels, and configure organization-wide settings.",
      icon: <Users className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-20 pb-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Assistants for Teams and Enterprises</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              EmailAssist scales with your organization—fully secure, customizable, and SOC2-ready.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/enterprise/schedule-demo">
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Use Cases Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built for every team</h2>
            <p className="text-xl text-gray-600">
              See how different teams use EmailAssist to scale their communications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-0">
                    <div className="text-gray-900 mb-4">{useCase.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Admin Benefits Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise-grade admin features</h2>
            <p className="text-xl text-gray-600">Everything you need to manage AI assistants at scale</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-0">
                    <div className="text-gray-900 mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Compliance Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Enterprise-grade security & compliance</h2>
              <p className="text-lg text-gray-600 mb-8">
                SOC2, GDPR, and no data training. Your data stays secure and private.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  SOC2 Type II certified
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  GDPR compliant
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  End-to-end encryption
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  No training on your data
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-2xl p-8 text-center">
                <Lock className="w-24 h-24 text-gray-900 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bank-level Security</h3>
                <p className="text-gray-600">
                  Your data is protected with the same security standards used by financial institutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-900"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Book a Demo</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your team's email workflow? Let's talk about your specific needs.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/enterprise/schedule-demo">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

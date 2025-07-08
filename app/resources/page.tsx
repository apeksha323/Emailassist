"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("all")

  const resources = [
    {
      title: "Getting Started with EmailAssist",
      description: "Learn how to set up your AI email assistant in under 5 minutes.",
      category: "guides",
      type: "Guide",
      readTime: "5 min read",
      date: "Jan 15, 2025",
      author: "Sarah Chen",
      slug: "getting-started",
    },
    {
      title: "How TechCorp Reduced Email Time by 70%",
      description: "A case study on how a 500-person company transformed their email workflow.",
      category: "case-studies",
      type: "Case Study",
      readTime: "8 min read",
      date: "Jan 12, 2025",
      author: "Marcus Rodriguez",
      slug: "techcorp-case-study",
    },
    {
      title: "EmailAssist v2.1 Release Notes",
      description: "New features including calendar integration and improved tone detection.",
      category: "changelog",
      type: "Changelog",
      readTime: "3 min read",
      date: "Jan 10, 2025",
      author: "Product Team",
      slug: "v2-1-release",
    },
    {
      title: "Best Practices for AI Email Automation",
      description: "Tips and strategies for getting the most out of your AI email assistant.",
      category: "blog",
      type: "Blog",
      readTime: "7 min read",
      date: "Jan 8, 2025",
      author: "Jennifer Park",
      slug: "best-practices",
    },
    {
      title: "Security and Privacy in AI Email Tools",
      description: "Understanding how EmailAssist protects your data and maintains privacy.",
      category: "blog",
      type: "Blog",
      readTime: "6 min read",
      date: "Jan 5, 2025",
      author: "Security Team",
      slug: "security-privacy",
    },
    {
      title: "Advanced Configuration Guide",
      description: "Deep dive into custom settings, integrations, and advanced features.",
      category: "guides",
      type: "Guide",
      readTime: "12 min read",
      date: "Jan 3, 2025",
      author: "Technical Team",
      slug: "advanced-config",
    },
  ]

  const tabs = [
    { id: "all", label: "All" },
    { id: "blog", label: "Blog" },
    { id: "case-studies", label: "Case Studies" },
    { id: "guides", label: "Guides" },
    { id: "changelog", label: "Changelog" },
  ]

  const filteredResources =
    activeTab === "all" ? resources : resources.filter((resource) => resource.category === activeTab)

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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Resources & Documentation</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Everything you need to get the most out of EmailAssist. From getting started guides to advanced
              configurations.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Tabs Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-8 bg-gray-50 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-black text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Resources Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.slug}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-900">
                        {resource.type}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {resource.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{resource.title}</h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {resource.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {resource.date}
                      </div>
                    </div>

                    <Button asChild variant="ghost" className="w-full justify-between text-gray-900 hover:bg-gray-50">
                      <Link href={`/resources/${resource.slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

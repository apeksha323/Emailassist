"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ResourceDetailPage({ params }: { params: { slug: string } }) {
  // This would typically fetch the article data based on the slug
  const article = {
    title: "Getting Started with EmailAssist",
    description: "Learn how to set up your AI email assistant in under 5 minutes.",
    type: "Guide",
    readTime: "5 min read",
    date: "Jan 15, 2025",
    author: "Sarah Chen",
    content: `# Getting Started with EmailAssist

Welcome to EmailAssist! This guide will walk you through setting up your AI email assistant in just a few minutes.

## What You'll Need

Before we begin, make sure you have:
- A Gmail or Outlook account
- Chrome browser (for the extension)
- 5 minutes of your time

## Step 1: Install the Chrome Extension

1. Visit the Chrome Web Store
2. Search for "EmailAssist"
3. Click "Add to Chrome"
4. Confirm the installation

## Step 2: Connect Your Email Account

Once the extension is installed:

1. Click the EmailAssist icon in your browser toolbar
2. Select "Connect Gmail" or "Connect Outlook"
3. Follow the OAuth flow to grant permissions
4. Your account will be connected securely

## Step 3: Train Your Assistant

Now comes the fun part - training your AI assistant:

1. Upload your recent email history (optional but recommended)
2. Set your preferred tone (Professional, Casual, Friendly)
3. Configure your response preferences
4. Review and save your settings

## Step 4: Start Using Your Assistant

Your AI assistant is now ready! Here's how to use it:

- **Smart Drafts**: Click the EmailAssist button when composing emails
- **Quick Replies**: Use suggested responses for incoming emails
- **Email Triage**: Let the assistant categorize your inbox

## Tips for Success

- Start with simple emails to build confidence
- Review and edit AI-generated responses before sending
- Provide feedback to improve accuracy over time
- Explore advanced features as you get comfortable

## Next Steps

Now that you're set up, consider:
- Exploring advanced configuration options
- Setting up calendar integration
- Customizing your assistant's personality
- Reading our best practices guide

## Need Help?

If you run into any issues:
- Check our FAQ section
- Contact our support team
- Join our community forum
- Schedule a demo call

That's it! You're now ready to experience the power of AI-assisted email management.`,
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Article Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-20 pb-8 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Button asChild variant="ghost" className="mb-6 text-gray-600 hover:text-gray-900">
              <Link href="/resources">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Resources
              </Link>
            </Button>

            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium mb-4">
              {article.type}
            </span>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>

            <p className="text-xl text-gray-600 mb-6">{article.description}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {article.readTime}
              </div>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-900">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Article Content */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="whitespace-pre-line text-gray-800 leading-relaxed">{article.content}</div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">EmailAssist</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/enterprise" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Enterprise
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Resources
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="ghost" className="text-gray-600 hover:text-gray-900">
              <Link href="/login">Sign in</Link>
            </Button>
            <Button
              asChild
              className="bg-black text-white hover:bg-gray-800 transition-all duration-200 hover:scale-105"
            >
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-100"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors px-2 py-1"
              >
                Pricing
              </Link>
              <Link
                href="/enterprise"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors px-2 py-1"
              >
                Enterprise
              </Link>
              <Link
                href="/resources"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors px-2 py-1"
              >
                Resources
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Button asChild variant="ghost" className="justify-start">
                  <Link href="/login">Sign in</Link>
                </Button>
                <Button asChild className="bg-black text-white hover:bg-gray-800">
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

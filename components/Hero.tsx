"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Mail, Plus } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Build Your Own AI Email Assistant
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Train an assistant on your inbox. Let it draft, reply, and organize emails for you — 24/7.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Build Your Assistant
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <div className="flex items-center text-sm text-gray-500">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                No credit card required
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Demo Interface */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-orange-400 rounded-3xl transform rotate-3 animate-pulse"></div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl p-8 shadow-2xl"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Email Sources</h3>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-3 h-3 bg-green-400 rounded-full"
                  ></motion.div>
                </div>

                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">Gmail Inbox</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Connected
                    </Badge>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 transition-colors"
                  >
                    <Plus className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Add source</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

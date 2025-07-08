"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function TryDemo() {
  const [demoInput, setDemoInput] = useState("")
  const [showResponse, setShowResponse] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  const handleTryDemo = () => {
    if (demoInput.trim()) {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setShowResponse(true)
      }, 2000)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-br from-violet-50 to-blue-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Badge variant="outline" className="mb-4 text-violet-600 border-violet-200 bg-white">
            Try it now
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Try the Email Assistant</h2>
          <p className="text-xl text-gray-600">See how our AI would handle your emails</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto"
        >
          <div className="space-y-6">
            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Paste an email you need to reply to:
              </label>
              <Input
                value={demoInput}
                onChange={(e) => setDemoInput(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg h-32"
                placeholder="Hi, I wanted to follow up on our meeting yesterday. Could we schedule a time to discuss the proposal further? Thanks!"
              />
            </div>

            <Button
              onClick={handleTryDemo}
              className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white py-3 transition-all duration-300 hover:scale-105"
            >
              Generate Reply
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            {(isTyping || showResponse) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-lg p-4 text-left border border-blue-200"
              >
                <p className="text-sm text-blue-600 mb-2 font-medium">AI-generated reply:</p>
                {isTyping ? (
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    className="text-gray-600"
                  >
                    Typing...
                  </motion.div>
                ) : (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-gray-800"
                  >
                    "Hi! Thanks for reaching out. I'd be happy to discuss the proposal further. I have availability this
                    Thursday at 2 PM or Friday at 10 AM. Would either of those work for you? Looking forward to our
                    conversation."
                  </motion.p>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

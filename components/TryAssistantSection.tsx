"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

export default function TryAssistantSection() {
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
      id="demo"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-black mb-4">Try the Assistant</h2>
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
              <label className="block text-sm font-medium text-black mb-2">Paste an email you need to reply to:</label>
              <Textarea
                value={demoInput}
                onChange={(e) => setDemoInput(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg h-32 resize-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Hi, I wanted to follow up on our meeting yesterday. Could we schedule a time to discuss the proposal further? Thanks!"
              />
            </div>

            <Button
              onClick={handleTryDemo}
              className="w-full bg-black text-white hover:bg-gray-900 py-3 transition-all duration-300 hover:scale-105"
            >
              Generate Reply
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            {(isTyping || showResponse) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-lg p-4 text-left border border-gray-200"
              >
                <p className="text-sm text-black mb-2 font-medium">AI-generated reply:</p>
                {isTyping ? (
                  <motion.div className="flex items-center space-x-1">
                    <span className="text-gray-600">Typing</span>
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      className="flex space-x-1"
                    >
                      <div className="w-2 h-2 bg-black rounded-full" />
                      <div className="w-2 h-2 bg-black rounded-full" />
                      <div className="w-2 h-2 bg-black rounded-full" />
                    </motion.div>
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

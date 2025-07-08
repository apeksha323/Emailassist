"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote:
        "EmailAssist feels like having an executive assistant in my Gmail. It's incredible how well it understands context.",
      author: "Sarah Chen",
      role: "Startup Founder",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    {
      quote: "I reply 3x faster without even typing. The AI captures my voice perfectly and saves me hours every day.",
      author: "Marcus Rodriguez",
      role: "Growth Marketer",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    {
      quote: "EmailAssist handles my inbox while I focus on strategy. It's like having a personal email manager 24/7.",
      author: "Jennifer Park",
      role: "VP of Sales",
      avatar: "/placeholder.svg?height=48&width=48",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What our users are saying</h2>
          <p className="text-xl text-gray-600">Join thousands of professionals who trust EmailAssist</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 shadow-xl border-0 bg-white">
                <CardContent className="p-0 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl text-gray-900 mb-8 font-medium leading-relaxed"
                  >
                    "{testimonials[currentTestimonial].quote}"
                  </motion.blockquote>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center justify-center space-x-4"
                  >
                    <img
                      src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                      alt="User avatar"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].author}</div>
                      <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-gray-900" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

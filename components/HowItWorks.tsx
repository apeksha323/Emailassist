"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Brain, Zap } from "lucide-react"

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const slideUpVariant = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Connect your Gmail or Outlook",
      description: "Securely link your email accounts and give your assistant access to your inbox.",
      icon: <Mail className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      step: "2",
      title: "Train the AI on your inbox & preferences",
      description: "Upload your email history and set your tone, style, and response preferences.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-violet-500 to-violet-600",
    },
    {
      step: "3",
      title: "Deploy your assistant to help you draft and reply instantly",
      description: "Your AI assistant starts handling emails, drafting replies, and organizing your inbox 24/7.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-br from-blue-50 to-violet-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200 bg-white">
            How it works
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get your AI email assistant up and running in minutes
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={slideUpVariant}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="relative p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div
                    className={`absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center font-bold shadow-lg`}
                  >
                    {step.step}
                  </div>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${step.color} mb-4`}>{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

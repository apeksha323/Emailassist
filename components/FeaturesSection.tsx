"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Inbox, Calendar, Brain, Shield, Zap } from "lucide-react"

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function FeaturesSection() {
  const features = [
    {
      title: "Smart Drafts",
      description:
        "Automatically generate replies in your tone and style, maintaining consistency across all communications.",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Inbox Triage",
      description: "Sort emails by priority and sender intent, ensuring important messages never get missed.",
      icon: <Inbox className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Calendar Integration",
      description: "Auto-suggest follow-ups and meetings based on email context and your availability.",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Learning Engine",
      description: "Gets better the more you use it, adapting to your preferences and communication patterns.",
      icon: <Brain className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Lightning Fast",
      description: "Generate responses in seconds, not minutes. Keep your conversations flowing naturally.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Secure by Design",
      description: "SOC2 / GDPR-ready with end-to-end encryption. Never trains on your data.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
    },
  ]

  return (
    <motion.section
      id="features"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to automate your email workflow</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to save you time and improve your email productivity
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group h-full">
                <CardContent className="p-0">
                  <div
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

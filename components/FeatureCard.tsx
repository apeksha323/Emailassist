"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

export default function FeatureCard({ title, description, icon, color }: FeatureCardProps) {
  return (
    <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
        <CardContent className="p-0">
          <div className={`text-transparent bg-clip-text bg-gradient-to-r ${color} mb-4`}>{icon}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

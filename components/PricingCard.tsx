"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const slideUpVariant = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

interface PricingCardProps {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  popular: boolean
}

export default function PricingCard({ name, price, period, description, features, cta, popular }: PricingCardProps) {
  return (
    <motion.div variants={slideUpVariant} whileHover={{ scale: 1.05, y: -10 }} transition={{ duration: 0.3 }}>
      <Card
        className={`relative p-8 transition-all duration-300 ${
          popular
            ? "border-2 border-gradient-to-r from-blue-500 to-violet-500 shadow-xl bg-gradient-to-br from-blue-50 to-violet-50"
            : "border-0 shadow-lg hover:shadow-xl bg-white"
        }`}
      >
        {popular && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-violet-600 text-white">
              Most Popular
            </Badge>
          </motion.div>
        )}
        <CardContent className="p-0">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">{price}</span>
              <span className="text-gray-600 ml-2">{period}</span>
            </div>
            <p className="text-gray-600">{description}</p>
          </div>

          <ul className="space-y-4 mb-8">
            {features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <Button
            className={`w-full transition-all duration-300 hover:scale-105 ${
              popular
                ? "bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white"
                : "bg-gray-900 hover:bg-gray-800 text-white"
            }`}
          >
            {cta}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

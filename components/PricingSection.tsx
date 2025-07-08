"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

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

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out EmailAssist",
      features: ["1 inbox connection", "Basic reply generation", "Community support", "50 AI-generated replies/month"],
      cta: "Get Started",
      popular: false,
      href: "/signup",
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For professionals who want more control",
      features: [
        "Up to 5 inbox connections",
        "Tone customization",
        "Follow-up reminders",
        "Unlimited AI replies",
        "Priority email support",
      ],
      cta: "Start Free Trial",
      popular: true,
      href: "/signup",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For teams and organizations",
      features: [
        "Unlimited inbox connections",
        "Team dashboard",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
      href: "/enterprise",
    },
  ]

  return (
    <motion.section
      id="pricing"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose the plan that's right for you</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Start free, upgrade when you need more power</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={slideUpVariant}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={`relative p-8 transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-blue-500 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50"
                    : "border-0 shadow-lg hover:shadow-xl bg-white"
                }`}
              >
                {plan.popular && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
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
                    asChild
                    className={`w-full transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        : "bg-gray-900 hover:bg-black text-white"
                    }`}
                  >
                    <Link href={plan.href}>{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

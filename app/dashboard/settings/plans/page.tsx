"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import DashboardLayout from "@/components/DashboardLayout"

export default function PlansPage() {
  const currentPlan = "Pro"

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["1 inbox connection", "Basic reply generation", "Community support", "50 AI-generated replies/month"],
      current: currentPlan === "Free",
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      features: [
        "Up to 5 inbox connections",
        "Tone customization",
        "Follow-up reminders",
        "Unlimited AI replies",
        "Priority email support",
      ],
      current: currentPlan === "Pro",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      features: [
        "Unlimited inbox connections",
        "Team dashboard",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated account manager",
      ],
      current: currentPlan === "Enterprise",
    },
  ]

  return (
    <DashboardLayout>
      <div className="p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="mb-8 text-3xl font-bold text-gray-900">Settings</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl"
        >
          <div className="mb-8">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">Plans & Billing</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    className={`relative border transition-all duration-300 ${
                      plan.current ? "border-black shadow-lg" : "border-gray-200 hover:shadow-md"
                    }`}
                  >
                    {plan.current && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white">
                        Current Plan
                      </Badge>
                    )}
                    <CardContent className="p-6">
                      <div className="mb-6 text-center">
                        <h3 className="mb-2 text-xl font-bold text-gray-900">{plan.name}</h3>
                        <div className="mb-2">
                          <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                          <span className="ml-2 text-gray-600">{plan.period}</span>
                        </div>
                      </div>

                      <ul className="mb-6 space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Check className="mr-3 h-4 w-4 flex-shrink-0 text-green-500" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full ${
                          plan.current
                            ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                            : "bg-black text-white hover:bg-gray-800"
                        }`}
                        disabled={plan.current}
                      >
                        {plan.current ? "Current Plan" : plan.name === "Enterprise" ? "Contact Sales" : "Upgrade"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

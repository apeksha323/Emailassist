"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Download } from "lucide-react"
import DashboardLayout from "@/components/DashboardLayout"

export default function BillingPage() {
  const billingHistory = [
    {
      id: "1",
      date: "Jan 1, 2025",
      amount: "$19.00",
      status: "Paid",
      invoice: "INV-001",
    },
    {
      id: "2",
      date: "Dec 1, 2024",
      amount: "$19.00",
      status: "Paid",
      invoice: "INV-002",
    },
    {
      id: "3",
      date: "Nov 1, 2024",
      amount: "$19.00",
      status: "Paid",
      invoice: "INV-003",
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
          className="max-w-4xl"
        >
          <div className="mb-8">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">Billing & Invoices</h2>

            {/* Current Plan */}
            <Card className="mb-8 border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Current Plan</span>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Pro Plan</p>
                    <p className="text-sm text-gray-500">$19.00 per month • Next billing: Feb 1, 2025</p>
                  </div>
                  <Button variant="outline">Manage Plan</Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="mb-8 border border-gray-200">
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-6 w-6 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/2027</p>
                    </div>
                  </div>
                  <Button variant="outline">Update</Button>
                </div>
              </CardContent>
            </Card>

            {/* Billing History */}
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {billingHistory.map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div>
                        <p className="font-medium text-gray-900">{invoice.date}</p>
                        <p className="text-sm text-gray-500">Invoice {invoice.invoice}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-medium text-gray-900">{invoice.amount}</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {invoice.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}
